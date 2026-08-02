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

const seenTerms = new Set();
let coined = 0;
let retired = 0;
let reuse = 0;

for (const [i, e] of doc.entries.entries()) {
  const loc = `entries[${i}]`;
  if (!e || typeof e !== 'object') {
    fail(`${loc}: no es objeto`);
    continue;
  }
  for (const k of ['term', 'family', 'reason', 'date', 'signer']) {
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

  const isCoin = COIN_FAMILIES.has(e.family);
  if (isCoin) {
    coined++;
    // CA1: cero acuñaciones sin razón
    if (!e.reason || e.reason.trim().length < 10) {
      fail(`${loc}: acuñación ${e.term} sin razón (≥10 chars)`);
    }
    if (!e.term.startsWith(e.family === 'hm:' ? 'hm:' : 'lore:')) {
      fail(`${loc}: term ${e.term} no coincide con family ${e.family}`);
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

ok(
  `acuñados activos/retirados contabilizados: coined=${coined} reuse=${reuse} retired=${retired}`,
);

if (coined < 1) {
  fail('se esperaba al menos una acuñación hm:/lore: con razón');
}

// w3cEquivalents: superficie gate hub-101
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
if (!existsSync(consumo)) {
  fail('falta docs/CONSUMO-HUB-101.md (contrato de consumo hub)');
} else {
  const md = readFileSync(consumo, 'utf8');
  if (!md.includes(CANONICAL_REL)) {
    fail('CONSUMO-HUB-101.md no cita el path canónico');
  } else {
    ok('CONSUMO-HUB-101.md cita path canónico');
  }
  if (!/stub/i.test(md) || !/migraci[oó]n/i.test(md)) {
    fail('CONSUMO-HUB-101.md debe documentar migración desde stub');
  } else {
    ok('migración stub → registro documentada');
  }
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
