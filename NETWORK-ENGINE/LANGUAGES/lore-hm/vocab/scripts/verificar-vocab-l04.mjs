#!/usr/bin/env node
/**
 * WP-SDK-L04 · check local registro de vocabulario.
 * Falla si: path canónico ausente/movido, acuñación sin razón,
 * familia inválida, retiro sin fecha, w3cEquivalents incompleto vs entries.
 * Sin deps externas. No sustituye CI ni el gate hub-101.
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const VOCAB_DIR = join(__dirname, '..');
const CANONICAL_REL = 'NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/registro.json';
const FAMILIES = new Set(['AS2', 'PROV-O', 'DCTERMS', 'hm:', 'lore:']);
const COIN_FAMILIES = new Set(['hm:', 'lore:']);
const W3C_FAMILIES = new Set(['AS2', 'PROV-O', 'DCTERMS']);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

let errors = 0;

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  errors++;
}

function ok(msg) {
  console.log(`  OK: ${msg}`);
}

/** Walk up until package.json name script-sdk or .git — repo root. */
function findRepoRoot(start) {
  let dir = start;
  for (let i = 0; i < 12; i++) {
    const pkg = join(dir, 'package.json');
    const git = join(dir, '.git');
    if (existsSync(git) || existsSync(pkg)) {
      if (existsSync(pkg)) {
        try {
          const p = JSON.parse(readFileSync(pkg, 'utf8'));
          if (p.name === 'script-sdk') return dir;
        } catch {
          /* continue */
        }
      }
      if (existsSync(git)) return dir;
    }
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

const repoRoot = findRepoRoot(VOCAB_DIR);
if (!repoRoot) {
  fail('no se pudo localizar raíz del repo (script-sdk / .git)');
  process.exit(1);
}

const canonicalAbs = join(repoRoot, ...CANONICAL_REL.split('/'));
const registroViaScript = join(VOCAB_DIR, 'registro.json');

// --- CA2: path canónico inamovible ---
if (!existsSync(canonicalAbs)) {
  fail(
    `registro ausente en path canónico: ${CANONICAL_REL} (¿movido/renombrado?)`,
  );
} else {
  ok(`path canónico existe: ${CANONICAL_REL}`);
}

if (!existsSync(registroViaScript)) {
  fail('registro.json no está junto a vocab/scripts (layout roto)');
} else {
  ok('registro.json resoluble desde scripts/');
}

// Misma inode/path: script y canónico deben ser el mismo fichero
try {
  const a = readFileSync(canonicalAbs, 'utf8');
  const b = readFileSync(registroViaScript, 'utf8');
  if (a !== b) {
    fail('canónico y vocab/registro.json divergen (copia local indebida)');
  } else {
    ok('canónico ≡ vocab/registro.json (misma fuente)');
  }
} catch (e) {
  fail(`no se pudo leer registro: ${e.message}`);
}

let doc;
try {
  doc = JSON.parse(readFileSync(canonicalAbs, 'utf8'));
} catch (e) {
  fail(`JSON inválido: ${e.message}`);
  process.exit(1);
}

if (doc.canonicalPath !== CANONICAL_REL) {
  fail(
    `canonicalPath="${doc.canonicalPath}" ≠ esperado "${CANONICAL_REL}"`,
  );
} else {
  ok('campo canonicalPath ancla el path');
}

if (doc.$id !== 'urn:lore-hm:vocab-registry:v1') {
  fail(`$id inesperado: ${doc.$id}`);
} else {
  ok('$id = urn:lore-hm:vocab-registry:v1');
}

if (!Array.isArray(doc.entries) || doc.entries.length === 0) {
  fail('entries[] vacío o ausente');
} else {
  ok(`entries = ${doc.entries.length}`);
}

if (!Array.isArray(doc.schemaOrgSupplement)) {
  fail('schemaOrgSupplement debe ser array (suplemento declarado)');
} else if (doc.schemaOrgSupplement.length > 0) {
  ok(
    `schemaOrgSupplement = ${doc.schemaOrgSupplement.length} (suplemento declarado)`,
  );
} else {
  ok('schemaOrgSupplement vacío (schema.org no backbone)');
}

// ---------------------------------------------------------------------------
// Correcciones WP-ZV-S ④ (todas con caso rojo medido):
//   · El detector de duplicados era **igualdad exacta de CURIE**: acuñar
//     `hm:Announce` junto a `as:Announce`, o `lore:Join` junto a `as:Join`,
//     pasaba en verde. Ahora se indexa por **tipo semántico** (`semanticType`)
//     sobre las 40 entradas notariadas, y además se detecta colisión léxica
//     del local name de una acuñación contra cualquier término W3C.
//   · `reason` era `.length > 10`: **once puntos** eran una razón válida.
//     Ahora la razón debe ser prosa y toda acuñación debe declarar
//     `w3cChecked[]` — los candidatos W3C concretos evaluados y descartados.
// ---------------------------------------------------------------------------
const seenTerms = new Set();
/** semanticType → term (sólo activos: un retiro libera el hueco). */
const seenSemantic = new Map();
/** local name normalizado → term, para familias W3C. */
const w3cLocalNames = new Map();
let coined = 0;
let retired = 0;
let reuse = 0;

const localName = (curie) => String(curie).split(':').slice(1).join(':');
const normalizaLocal = (curie) => localName(curie).toLowerCase().replace(/[^a-z0-9]/g, '');

// Primera pasada: local names de las familias W3C (la referencia contra la que
// se juzga cualquier acuñación).
for (const e of doc.entries) {
  if (W3C_FAMILIES.has(e?.family) && typeof e.term === 'string') {
    w3cLocalNames.set(normalizaLocal(e.term), e.term);
  }
}

/** ¿La razón es prosa argumentada o relleno? */
function razonSustantiva(texto) {
  const s = String(texto ?? '').trim();
  if (s.length < 40) return `demasiado corta (${s.length} < 40 chars)`;
  const palabras = s.match(/[\p{L}]{3,}/gu) ?? [];
  if (palabras.length < 6) return `sólo ${palabras.length} palabras de ≥3 letras`;
  if (new Set(palabras.map((p) => p.toLowerCase())).size < 5) {
    return 'vocabulario repetido (relleno)';
  }
  return null;
}

for (const [i, e] of doc.entries.entries()) {
  const loc = `entries[${i}]`;
  if (!e || typeof e !== 'object') {
    fail(`${loc}: no es objeto`);
    continue;
  }
  for (const k of ['term', 'family', 'semanticType', 'reason', 'date', 'signer']) {
    if (typeof e[k] !== 'string' || !e[k].trim()) {
      fail(`${loc}: falta ${k}`);
    }
  }
  if (!FAMILIES.has(e.family)) {
    fail(`${loc}: familia inválida "${e.family}"`);
  }
  if (e.date && !DATE_RE.test(e.date)) {
    fail(`${loc}: date no YYYY-MM-DD`);
  }
  if (seenTerms.has(e.term)) {
    fail(`${loc}: término duplicado ${e.term}`);
  } else if (e.term) {
    seenTerms.add(e.term);
  }

  // --- duplicado por TIPO SEMÁNTICO, no por nombre ---
  if (typeof e.semanticType === 'string' && e.semanticType.trim()) {
    if (!/^[a-z][a-z0-9]*(\.[a-z0-9][a-z0-9-]*)+$/.test(e.semanticType)) {
      fail(`${loc}: semanticType "${e.semanticType}" no es un tipo punteado en minúsculas`);
    }
    if (e.retiredDate == null) {
      const previo = seenSemantic.get(e.semanticType);
      if (previo) {
        fail(
          `${loc}: TIPO SEMÁNTICO duplicado «${e.semanticType}» — ${e.term} repite lo que ` +
            `ya cubre ${previo}. Un término nuevo para un tipo ya notariado es acuñación ` +
            'paralela: reusa el existente o retira el viejo con fecha.',
        );
      } else {
        seenSemantic.set(e.semanticType, e.term);
      }
    }
  }

  const isCoin = COIN_FAMILIES.has(e.family);
  if (isCoin) {
    coined++;
    // CA1: cero acuñaciones sin razón — y «razón» ≠ «≥10 caracteres».
    const problema = razonSustantiva(e.reason);
    if (problema) {
      fail(`${loc}: acuñación ${e.term} sin razón sustantiva — ${problema}`);
    }
    // CA1b: hay que declarar CONTRA QUÉ se comprobó antes de acuñar.
    if (!Array.isArray(e.w3cChecked) || e.w3cChecked.length === 0) {
      fail(
        `${loc}: acuñación ${e.term} sin w3cChecked[] — debe nombrar los candidatos ` +
          'W3C concretos evaluados y descartados (as:/prov:/dcterms:)',
      );
    } else {
      for (const cand of e.w3cChecked) {
        if (!/^(as|prov|dcterms):[A-Za-z]/.test(String(cand))) {
          fail(`${loc}: w3cChecked contiene "${cand}", que no es un CURIE de familia W3C`);
        }
      }
    }
    if (!e.term.startsWith(e.family === 'hm:' ? 'hm:' : 'lore:')) {
      fail(`${loc}: term ${e.term} no coincide con family ${e.family}`);
    }
    // CA1c: colisión léxica con un término W3C ya notariado.
    const choque = w3cLocalNames.get(normalizaLocal(e.term));
    if (choque) {
      fail(
        `${loc}: acuñación ${e.term} duplica el local name de ${choque} (familia W3C) — ` +
          'cambiar el prefijo no crea un término nuevo',
      );
    }
  } else if (W3C_FAMILIES.has(e.family)) {
    reuse++;
  }

  // CA3: retiro = fecha, no borrado
  if (e.retiredDate != null) {
    retired++;
    if (!DATE_RE.test(e.retiredDate)) {
      fail(`${loc}: retiredDate inválida para ${e.term}`);
    }
    if (!e.retireReason || e.retireReason.trim().length < 10) {
      fail(`${loc}: retirado ${e.term} sin retireReason`);
    }
  }
}
ok(`tipos semánticos activos únicos: ${seenSemantic.size} (indexado por tipo, no por nombre)`);

ok(
  `acuñados activos/retirados contabilizados: coined=${coined} reuse=${reuse} retired=${retired}`,
);

if (coined < 1) {
  fail('se esperaba al menos una acuñación hm:/lore: con razón');
}

// ---------------------------------------------------------------------------
// Superficie de consumo COMPLETA: los 40 notariados, no la proyección de 9.
// El gate del hub indexa hoy por nombre de verbo contra `w3cEquivalents`
// (9 claves) y por eso exime a 20 de 29 verbos. Este registro publica además
// `notariadosPorTipoSemantico`, que cubre las 39 entradas activas, y
// `retirados`, que cubre la retirada. Enrutado del arreglo del hub:
//   playground/prueba-de-H-M/ci/test-101-ontologia.mjs · gateVocabCoining()
//   — `if (!equiv) continue;` (indexado por nombre de verbo) y el umbral
//   `coinReason.length > 10`. NO es de este WP: repo distinto, worker distinto.
// ---------------------------------------------------------------------------
{
  const idx = doc.notariadosPorTipoSemantico;
  if (!idx || typeof idx !== 'object') {
    fail('falta notariadosPorTipoSemantico (superficie completa de consumo)');
  } else {
    const claves = Object.keys(idx).filter((k) => !k.startsWith('_'));
    const activos = doc.entries.filter((e) => e.retiredDate == null);
    const faltan = activos.filter((e) => !claves.includes(e.semanticType));
    if (faltan.length > 0) {
      fail(
        `notariadosPorTipoSemantico no cubre ${faltan.length} entrada(s) activa(s): ` +
          faltan.map((e) => `${e.semanticType}→${e.term}`).slice(0, 6).join(', '),
      );
    }
    const sobran = claves.filter((k) => !activos.some((e) => e.semanticType === k));
    if (sobran.length > 0) {
      fail(`notariadosPorTipoSemantico con tipos sin entrada activa: ${sobran.join(', ')}`);
    }
    for (const e of activos) {
      const hit = idx[e.semanticType];
      if (hit && (hit.term !== e.term || hit.family !== e.family)) {
        fail(
          `notariadosPorTipoSemantico[${e.semanticType}] = ${hit.term}/${hit.family} ` +
            `≠ entry ${e.term}/${e.family}`,
        );
      }
    }
    if (faltan.length === 0 && sobran.length === 0) {
      ok(`superficie completa: ${claves.length} tipos semánticos = ${activos.length} entradas activas`);
    }
  }
  const ret = doc.retirados;
  const retiradosReales = doc.entries.filter((e) => e.retiredDate != null);
  if (!Array.isArray(ret) || ret.length !== retiradosReales.length) {
    fail(
      `retirados[] = ${Array.isArray(ret) ? ret.length : 'ausente'} ≠ ` +
        `${retiradosReales.length} entradas con retiredDate (el retiro se publica, no se borra)`,
    );
  } else {
    ok(`retirados[] = ${ret.length} (retiro publicado, no borrado)`);
  }
}

// w3cEquivalents: proyección legacy que consume hoy el gate hub-101
const eq = doc.w3cEquivalents;
if (!eq || typeof eq !== 'object') {
  fail('falta w3cEquivalents (superficie gate WP-HUB-101)');
} else {
  const verbEntries = doc.entries.filter(
    (e) => e.verb && W3C_FAMILIES.has(e.family) && e.retiredDate == null,
  );
  for (const e of verbEntries) {
    const hit = eq[e.verb];
    if (!hit) {
      // machine.status comparte as:View con state.inspect — permitir si term match elsewhere
      const sameTerm = Object.values(eq).some(
        (v) => v && typeof v === 'object' && v.term === e.term,
      );
      if (!sameTerm) {
        fail(`w3cEquivalents falta verbo ${e.verb} → ${e.term}`);
      }
    } else if (hit.term !== e.term) {
      fail(
        `w3cEquivalents[${e.verb}].term=${hit.term} ≠ entry ${e.term}`,
      );
    } else if (hit.family !== e.family) {
      fail(`w3cEquivalents[${e.verb}].family ≠ ${e.family}`);
    }
  }
  const keys = Object.keys(eq).filter((k) => !k.startsWith('_'));
  ok(`w3cEquivalents verbs = ${keys.length}`);
}

// Consumo doc
const consumo = join(
  repoRoot,
  'NETWORK-ENGINE/LANGUAGES/lore-hm/docs/CONSUMO-HUB-101.md',
);
// El check anterior era un **substring**: sustituir las 98 líneas del
// documento por una línea de basura con tres palabras clave («…registro.json
// stub migración») daba PASS. Ahora el contrato lleva un bloque legible por
// máquina que se coteja contra el registro vivo, más sus secciones.
if (!existsSync(consumo)) {
  fail('falta docs/CONSUMO-HUB-101.md (contrato de consumo hub)');
} else {
  const md = readFileSync(consumo, 'utf8');
  let malo = 0;

  for (const [re, etiqueta] of [
    [/^##\s+Path can[oó]nico/m, '## Path canónico'],
    [/^##\s+Superficie/m, '## Superficie'],
    [/^##\s+Protocolo de resoluci[oó]n/m, '## Protocolo de resolución'],
    [/^##\s+Migraci[oó]n desde el stub/m, '## Migración desde el stub'],
  ]) {
    if (!re.test(md)) {
      fail(`CONSUMO-HUB-101.md sin sección «${etiqueta}»`);
      malo++;
    }
  }
  if (!md.includes(CANONICAL_REL)) {
    fail('CONSUMO-HUB-101.md no cita el path canónico');
    malo++;
  }
  // El protocolo de resolución tiene tres pasos ordenados y fail-closed.
  for (const needle of ['LORE_HM_VOCAB_REGISTRY', 'fail-closed', 'Prohibido']) {
    if (!md.includes(needle)) {
      fail(`CONSUMO-HUB-101.md sin «${needle}» en el protocolo de resolución`);
      malo++;
    }
  }

  // Bloque contractual legible por máquina, cotejado contra el registro vivo.
  const bloque = /```json\s+contrato\s*\n([\s\S]*?)```/m.exec(md)
    ?? /<!--\s*contrato\s*-->\s*```json\s*\n([\s\S]*?)```/m.exec(md);
  if (!bloque) {
    fail(
      'CONSUMO-HUB-101.md sin bloque ```json contrato — el contrato debe ser ' +
        'cotejable contra el registro, no prosa que contenga palabras clave',
    );
    malo++;
  } else {
    let c;
    try {
      c = JSON.parse(bloque[1]);
    } catch (e) {
      fail(`bloque contrato de CONSUMO-HUB-101.md no es JSON válido: ${e.message}`);
      c = null;
    }
    if (c) {
      const activos = doc.entries.filter((e) => e.retiredDate == null).length;
      const retirados = doc.entries.length - activos;
      const esperado = {
        canonicalPath: CANONICAL_REL,
        $id: doc.$id,
        entriesNotariadas: doc.entries.length,
        activas: activos,
        retiradas: retirados,
        superficieDeConsumo: 'notariadosPorTipoSemantico',
        indexadoPor: 'semanticType',
        proyeccionLegacy: 'w3cEquivalents',
      };
      for (const [k, v] of Object.entries(esperado)) {
        if (JSON.stringify(c[k]) !== JSON.stringify(v)) {
          fail(
            `contrato CONSUMO-HUB-101.md: ${k}=${JSON.stringify(c[k])} ≠ ` +
              `${JSON.stringify(v)} (registro vivo) — contrato rancio`,
          );
          malo++;
        }
      }
    }
  }
  if (malo === 0) ok('CONSUMO-HUB-101.md: secciones, protocolo y contrato cotejado con el registro');
}

// README vocab
const readme = join(VOCAB_DIR, 'README.md');
if (!existsSync(readme)) fail('falta vocab/README.md');
else ok('vocab/README.md existe');

// Rel path sanity (Windows separators)
const relFromRoot = relative(repoRoot, canonicalAbs).split(sep).join('/');
if (relFromRoot !== CANONICAL_REL) {
  fail(`relative path ${relFromRoot} ≠ ${CANONICAL_REL}`);
} else {
  ok('relative(repoRoot, registro) = canonicalPath');
}

if (errors > 0) {
  console.error(`\nverificar-vocab-l04: FAIL (${errors} errores)`);
  process.exit(1);
}

console.log('\nverificar-vocab-l04: PASS');
console.log(`  path: ${CANONICAL_REL}`);
console.log(`  entries: ${doc.entries.length} (coined=${coined} retired=${retired})`);
console.log('  hub-101: consumir w3cEquivalents de este registro (no stub)');
