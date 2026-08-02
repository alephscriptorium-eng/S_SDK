#!/usr/bin/env node
/**
 * WP-SDK-L05 · sellado de NETWORK-ENGINE/LANGUAGES/lore-hm.
 *
 * Las CA miden ahora la **propiedad**, no la cardinalidad, los bytes ni un
 * substring. Corrección WP-ZV-S ②: la versión anterior dejaba pasar 13 de 13
 * mutaciones medidas, entre ellas
 *   · `L_SDK/` + `package.json {"name":"@logos/lore-hm"}` + `HOLONES/08-logos/`
 *     todo a la vez → VERDE (la CA anti-holón-08 **no tenía guard, ni malo**:
 *     el único hit de «L_SDK» en código ejecutable era un comentario mal
 *     etiquetado en `verificar-inception-l02.mjs` cuyo código grepeaba la
 *     palabra «cinco»);
 *   · fila 08 en negrita / HTML / ítem de lista / con padding, o añadir 08 y
 *     borrar 06 → el conteo seguía en 7;
 *   · juntura reducida a dos palabras, o diciendo «Nada pendiente» → el patrón
 *     `/⏳ pendiente|pendiente/` se subsumía a sí mismo;
 *   · README del asiento a 790 chars diciendo «INFLADO» → el check era
 *     `length > 800`.
 * Y el grep-gate escaneaba **1 fichero de 782**: `SKIP_PREFIXES` excluía
 * `DEVOPS/ plan/ docs/ WPS_QUEUE/ .claude/` y sólo quedaba `package.json`.
 *
 * Sin deps externas. No sustituye CI.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const CODE_EXT = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.json',
  '.yml',
  '.yaml',
]);

/**
 * Skips **justificados**. Cada uno lleva su razón y se imprime en cada corrida:
 * la superficie del gate no puede volver a encogerse en silencio.
 */
const SKIPS = [
  ['NETWORK-ENGINE/', 'allowlist por diseño: es la propia incubación sellada'],
  ['.claude/skills/', 'espejo byte-a-byte de un paquete npm, escrito por `npm run skills:sync`'],
  ['node_modules/', 'dependencias'],
  ['.git/', 'metadatos de git'],
];

const SKIP_NAMES = new Set(['package-lock.json']);

/**
 * Ficheros que SÍ pueden citar la ruta, uno a uno y con motivo.
 * Un hit fuera de esta lista es rojo. No hay directorios enteros exentos.
 */
const ALLOWLIST_HITS = new Map([
  [
    '.github/workflows/ci-lore-hm.yml',
    'arnés de CI: invoca los verificadores por ruta; no es consumidor runtime',
  ],
  [
    'DEVOPS/METODOLOGIA/holones/junturas/lore-hm-integracion-holonica/scripts/suite-lengua.mjs',
    'suite de gates del dossier: invoca los verificadores por ruta; no es consumidor runtime',
  ],
]);

/**
 * Anclas de superficie: si alguna de estas rutas deja de escanearse, el gate
 * dejó de mirar donde importa. Es la guarda contra reintroducir skips de
 * conveniencia (la causa medida de que la superficie fuera 1 fichero de 782).
 */
const ANCLAS_SUPERFICIE = [
  'package.json',
  '.github/workflows/ci-lore-hm.yml',
  'DEVOPS/METODOLOGIA/holones/junturas/lore-hm-integracion-holonica/scripts/suite-lengua.mjs',
];
/** Suelo. Medido 2026-08-02: 75 ficheros de código escaneados. */
const MIN_ESCANEADOS = 40;

/** Hits que cuentan como dependencia runtime/path en consumidores. */
const HIT_RE =
  /NETWORK-ENGINE|Network-Engine|network-engine\/LANGUAGES|["']file:[^"']*NETWORK-ENGINE|from\s+["'][^"']*NETWORK-ENGINE|require\s*\(\s*["'][^"']*NETWORK-ENGINE|import\s*\(\s*["'][^"']*NETWORK-ENGINE/i;

let errors = 0;
const hits = [];

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  errors++;
}

function ok(msg) {
  console.log(`  OK: ${msg}`);
}

function findRepoRoot(start) {
  let dir = start;
  for (let i = 0; i < 12; i++) {
    const pkg = join(dir, 'package.json');
    if (existsSync(pkg)) {
      try {
        const p = JSON.parse(readFileSync(pkg, 'utf8'));
        if (p.name === 'script-sdk') return dir;
      } catch {
        /* continue */
      }
    }
    if (existsSync(join(dir, '.git'))) return dir;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return join(__dirname, '..', '..', '..', '..');
}

function toPosix(p) {
  return p.split(sep).join('/');
}

function shouldSkip(relPosix) {
  if (SKIP_NAMES.has(relPosix.split('/').pop())) return true;
  for (const [pref] of SKIPS) {
    if (relPosix === pref.slice(0, -1) || relPosix.startsWith(pref)) return true;
  }
  return false;
}

function walk(dir, root, out, dirsOut) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const ent of entries) {
    const abs = join(dir, ent.name);
    const rel = toPosix(relative(root, abs));
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === '.git') continue;
      // Los directorios se registran SIEMPRE (el guard anti-extracción mira
      // nombres de directorio, y saltarlos era parte del agujero).
      dirsOut.push(rel);
      if (shouldSkip(`${rel}/`)) continue;
      walk(abs, root, out, dirsOut);
      continue;
    }
    if (!ent.isFile()) continue;
    if (shouldSkip(rel)) continue;
    const ext = ent.name.includes('.') ? `.${ent.name.split('.').pop()}` : '';
    if (CODE_EXT.has(ext)) out.push(abs);
  }
}

function scanFile(abs, root) {
  const rel = toPosix(relative(root, abs));
  let text;
  try {
    text = readFileSync(abs, 'utf8');
  } catch {
    return;
  }
  if (!HIT_RE.test(text)) return;
  if (ALLOWLIST_HITS.has(rel)) return;
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    if (HIT_RE.test(lines[i])) {
      hits.push(`${rel}:${i + 1}:${lines[i].trim().slice(0, 120)}`);
    }
  }
}

// ---------------------------------------------------------------------------
// CA · el sellado histórico está donde dice estar
// ---------------------------------------------------------------------------
function checkIncubationPresent(root) {
  const required = [
    'NETWORK-ENGINE/README.md',
    'NETWORK-ENGINE/LANGUAGES/lore-hm/docs/SELLADO.md',
    'NETWORK-ENGINE/LANGUAGES/lore-hm/README.md',
    'NETWORK-ENGINE/LANGUAGES/lore-hm/scripts/verificar-inception-l02.mjs',
    'NETWORK-ENGINE/LANGUAGES/lore-hm/solid/scripts/verificar-solid-l03.mjs',
    'NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/scripts/verificar-vocab-l04.mjs',
  ];
  let faltan = 0;
  for (const rel of required) {
    if (!existsSync(join(root, ...rel.split('/')))) {
      fail(`falta sellado/histórico: ${rel}`);
      faltan++;
    }
  }
  if (faltan === 0) ok(`sellado histórico completo (${required.length} anclas)`);
}

function checkPackageJson(root) {
  const pkgPath = join(root, 'package.json');
  if (!existsSync(pkgPath)) {
    fail('falta package.json en raíz');
    return;
  }
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  const bags = [
    pkg.dependencies,
    pkg.devDependencies,
    pkg.optionalDependencies,
    pkg.peerDependencies,
  ].filter(Boolean);
  for (const bag of bags) {
    for (const [name, ver] of Object.entries(bag)) {
      const s = String(ver);
      if (/NETWORK-ENGINE|Network-Engine/i.test(s) || /NETWORK-ENGINE|Network-Engine/i.test(name)) {
        fail(`package.json dep runtime/path: ${name}=${s}`);
      }
    }
  }
  ok('package.json sin deps path/runtime a NETWORK-ENGINE');
}

// ---------------------------------------------------------------------------
// CA · la lengua NO se ha extraído a package ni promovido a holón 08.
//      Este es el guard que faltaba: antes no existía, ni malo.
// ---------------------------------------------------------------------------
/**
 * Recorrido PROPIO del guard, independiente de la superficie del grep-gate.
 * Antes reutilizaba el walk del grep y heredaba sus skips: `NETWORK-ENGINE/L_SDK/`
 * pasaba porque el walk no descendía ahí, y la lista de `package.json` era la
 * **post-skip**. Aquí sólo se saltan `.git` y `node_modules`, que no son árbol
 * del proyecto.
 */
function censoIntegro(root) {
  const dirs = [];
  const pkgs = [];
  (function walk(dir) {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const ent of entries) {
      const abs = join(dir, ent.name);
      const rel = toPosix(relative(root, abs));
      if (ent.isDirectory()) {
        if (ent.name === '.git' || ent.name === 'node_modules') continue;
        dirs.push(rel);
        walk(abs);
      } else if (ent.isFile() && ent.name === 'package.json') {
        pkgs.push(rel);
      }
    }
  })(root);
  return { dirs, pkgs };
}

function checkNoExtraccionLengua(root) {
  let malos = 0;
  const { dirs, pkgs } = censoIntegro(root);
  const normaliza = (n) => n.toLowerCase().replace(/[^a-z0-9]/g, '');

  for (const rel of dirs) {
    const base = rel.split('/').pop();
    const n = normaliza(base);
    // `l…sdk` con cualquier relleno: L_SDK, LSDK, L_SDK_v2, LENGUA_SDK,
    // LORE_SDK, LORE_HM_SDK. Antes eran tres prefijos fijos y `LORE_HM_SDK/`
    // se colaba.
    if (/^l[a-z]{0,14}sdk[a-z0-9]{0,6}$/.test(n)) {
      fail(`extracción de la lengua: directorio «${rel}» (patrón l…SDK)`);
      malos++;
    }
    // Holón ≥08 con UNO o dos dígitos: antes exigía dos y `HOLONES/8-logos/`
    // pasaba.
    const m = /^HOLONES\/(\d{1,2})(?:[-_ ]|$)/i.exec(rel);
    if (m && Number(m[1]) >= 8) {
      fail(`holón nuevo no autorizado: «${rel}» (LORE-HM es costura, no fila)`);
      malos++;
    }
  }

  // Cualquier package.json del árbol, a cualquier profundidad, saltado o no.
  for (const rel of pkgs) {
    let pkg;
    try {
      pkg = JSON.parse(readFileSync(join(root, ...rel.split('/')), 'utf8'));
    } catch {
      continue;
    }
    const name = String(pkg.name ?? '');
    // `lore-hm`, `lore_hm`, `lorehm`, con o sin scope. Antes el regex no cubría
    // el guion bajo y `name:"lore_hm"` pasaba.
    if (/(^|[@/])(?:[a-z0-9-]*\/)?lore[-_ ]?hm$/i.test(name) || /lore[-_ ]?hm/i.test(String(pkg.name ?? '')) && /^@?logos/i.test(name)) {
      fail(
        `extracción de la lengua: ${rel} declara name="${name}" — la puerta de ` +
          'promoción (NETWORK-ENGINE/LANGUAGES/lore-hm/docs/PUERTA-PROMOCION.md) no está abierta',
      );
      malos++;
    }
  }

  // Un submódulo declarado es una extracción aunque el directorio esté vacío.
  const gm = join(root, '.gitmodules');
  if (existsSync(gm)) {
    const texto = readFileSync(gm, 'utf8');
    for (const m of texto.matchAll(/^\s*path\s*=\s*(.+)$/gim)) {
      const p = m[1].trim();
      const base = p.split('/').pop() ?? '';
      const h = /^HOLONES\/(\d{1,2})(?:[-_ ]|$)/i.exec(p);
      if (/^l[a-z]{0,14}sdk[a-z0-9]{0,6}$/.test(normaliza(base)) || (h && Number(h[1]) >= 8)) {
        fail(`.gitmodules declara un submódulo de extracción: path=${p}`);
        malos++;
      }
    }
  }

  if (malos === 0) {
    ok(
      'sin extracción: 0 dirs l…SDK · 0 holones ≥08 · 0 package.json «lore-hm» · ' +
        `0 submódulos de extracción (${dirs.length} dirs, ${pkgs.length} package.json, censo íntegro)`,
    );
  }
}

// ---------------------------------------------------------------------------
// CA · HOLONES.md: identidad del conjunto de filas, no su cardinalidad
// ---------------------------------------------------------------------------
const HOLONES_ESPERADOS = ['01', '02', '03', '04', '05', '06', '07'];

/** Quita negrita/cursiva/HTML/backticks/viñetas: «| **08** |» ≡ «| 08 |». */
function desnuda(celda) {
  return celda
    .replace(/<[^>]*>/g, '')
    .replace(/[*_`~]/g, '')
    .replace(/^[\s>\-+*]+/, '')
    .trim();
}

function checkHolonesCostura(root) {
  const holones = join(root, 'DEVOPS', 'METODOLOGIA', 'HOLONES.md');
  if (!existsSync(holones)) {
    fail('falta DEVOPS/METODOLOGIA/HOLONES.md');
    return;
  }
  const text = readFileSync(holones, 'utf8');

  // Recoge TODA celda inicial de tabla que sea un número de holón, sea cual sea
  // su maquillaje. Antes el regex era /^\| (\d{2}) \|/gm y `| **08** |` no
  // casaba: la fila 08 entraba en negrita sin que el conteo se moviera.
  const numeros = [];
  for (const linea of text.split(/\r?\n/)) {
    const l = linea.replace(/^[\s>\-+*]+/, '');
    if (!l.startsWith('|')) continue;
    const celda = desnuda(l.split('|')[1] ?? '');
    if (/^\d{1,2}$/.test(celda)) numeros.push(celda.padStart(2, '0'));
  }
  const vistos = [...numeros].sort();
  const esperados = [...HOLONES_ESPERADOS].sort();
  const sobran = vistos.filter((n) => !esperados.includes(n));
  const faltan = esperados.filter((n) => !vistos.includes(n));
  const dup = vistos.filter((n, i) => vistos.indexOf(n) !== i);
  if (sobran.length || faltan.length || dup.length) {
    fail(
      `HOLONES.md filas de holón = {${vistos.join(', ')}} ≠ {${esperados.join(', ')}}` +
        `${sobran.length ? ` · sobran: ${sobran.join(', ')}` : ''}` +
        `${faltan.length ? ` · faltan: ${faltan.join(', ')}` : ''}` +
        `${dup.length ? ` · duplicadas: ${dup.join(', ')}` : ''}` +
        ' — LORE-HM es costura, no fila; y ninguna fila se sustituye por otra',
    );
  } else {
    ok(`HOLONES.md filas = exactamente {${esperados.join(', ')}} (identidad, no conteo)`);
  }

  // Ni siquiera fuera de tabla: nada que declare un holón 08.
  const menciones = [
    [/holones\/0*8[-\w]*\.md/i, 'enlace a holones/08*.md'],
    [/hol[oó]n\s*(n[.º°]?\s*)?0*8\b/i, 'texto «holón 08»'],
  ];
  for (const [re, etiqueta] of menciones) {
    const m = re.exec(text);
    if (
      m &&
      !/no\s+(es|hay|existe)|nunca|prohibid/i.test(
        text.slice(Math.max(0, m.index - 120), m.index + 120),
      )
    ) {
      fail(`HOLONES.md declara un holón 08 (${etiqueta}): «${m[0]}»`);
    }
  }

  if (!/LORE-HM/i.test(text) || !/costuras?\s+ejecutables?/i.test(text)) {
    fail('HOLONES.md debe declarar LORE-HM como costura ejecutable (no fila nueva)');
  } else {
    ok('HOLONES.md declara LORE-HM como costura ejecutable');
  }

  // El holón 08 tampoco puede nacer en OTRO fichero de la metodología: antes
  // sólo se miraba HOLONES.md y declararlo al lado pasaba en verde.
  {
    const metodologia = join(root, 'DEVOPS', 'METODOLOGIA');
    const docs = [];
    (function walk(dir) {
      let entries;
      try {
        entries = readdirSync(dir, { withFileTypes: true });
      } catch {
        return;
      }
      for (const ent of entries) {
        const abs = join(dir, ent.name);
        if (ent.isDirectory()) walk(abs);
        else if (ent.isFile() && ent.name.endsWith('.md')) docs.push(abs);
      }
    })(metodologia);

    // La exención se juzga en LA MISMA LÍNEA, no en una ventana ancha: una
    // negación lejana no puede amnistiar una declaración («el holón 08 ya está
    // activo» tres párrafos debajo de un «no crear holón 08» sigue siendo rojo).
    const NIEGA = /\bno\b|nunca|prohibid|rompe|descartad|sin\s+hol[oó]n|costura|jam[aá]s/i;
    let fuera = 0;
    for (const abs of docs) {
      const rel = toPosix(relative(root, abs));
      if (rel.endsWith('DEVOPS/METODOLOGIA/HOLONES.md')) continue; // ya cubierto arriba
      const lineas = readFileSync(abs, 'utf8').replace(/[*_`~]/g, ' ').split(/\r?\n/);
      for (const [i, linea] of lineas.entries()) {
        for (const [re, etiqueta] of [
          [/holones\/0*8[-\w]*\.md/i, 'enlace a holones/08*.md'],
          [/hol[oó]n\s*(n[.º°]?\s*)?0*8\b/i, 'texto «holón 08»'],
        ]) {
          const m = re.exec(linea);
          if (!m) continue;
          if (NIEGA.test(linea)) continue;
          fail(`${rel}:${i + 1} declara un holón 08 (${etiqueta}): «${linea.trim().slice(0, 90)}»`);
          fuera++;
        }
      }
    }
    if (fuera === 0) {
      ok(`holón 08: 0 declaraciones en los ${docs.length} .md de DEVOPS/METODOLOGIA`);
    }
  }

  checkAsientoReservado(root);
}

// ---------------------------------------------------------------------------
// CA · asiento 03-emmanuel reservado: propiedad, no bytes
// ---------------------------------------------------------------------------
function checkAsientoReservado(root) {
  const dir = join(root, 'HOLONES', '03-emmanuel');
  const seat = join(dir, 'README.md');
  if (!existsSync(seat)) {
    fail('falta HOLONES/03-emmanuel/README.md (asiento reservado)');
    return;
  }

  let malo = 0;

  // (a) no es submódulo
  const gm = join(root, '.gitmodules');
  if (existsSync(gm) && /HOLONES\/03-emmanuel/i.test(readFileSync(gm, 'utf8'))) {
    fail('.gitmodules registra HOLONES/03-emmanuel: el asiento fue inflado');
    malo++;
  }
  if (existsSync(join(dir, '.git'))) {
    fail('HOLONES/03-emmanuel contiene .git: el asiento fue inflado');
    malo++;
  }

  // (b) el asiento sólo contiene su README (nada materializado dentro)
  const extra = readdirSync(dir).filter((n) => n !== '.gitkeep' && n !== 'README.md');
  if (extra.length > 0) {
    fail(`HOLONES/03-emmanuel contiene ${extra.join(', ')} — sólo debe haber README.md`);
    malo++;
  }

  // (c) el README no puede AFIRMAR que se infló. Antes el check era
  //     `length > 800`: un README de 790 chars diciendo «INFLADO, submódulo
  //     añadido» pasaba en verde.
  const seatText = readFileSync(seat, 'utf8');
  const claims = [
    [/\bINFLADO\b/i, 'declara INFLADO'],
    [/\bya\s+(est[aá]\s+)?inflad/i, 'declara «ya inflado»'],
    [
      /git\s+submodule\s+add[^\n]{0,40}(ejecutad|hech|realizad|añadid)/i,
      'declara submodule add ejecutado',
    ],
    [/subm[oó]dulo\s+(añadid|agregad|cread|inflad)/i, 'declara submódulo añadido'],
  ];
  for (const [re, etiqueta] of claims) {
    if (re.test(seatText)) {
      fail(`HOLONES/03-emmanuel/README.md ${etiqueta} — contradice el asiento reservado`);
      malo++;
    }
  }

  // (d) y sí debe declarar la reserva. Texto desnudo: negrita y backticks no
  //     pueden esconder ni falsear la declaración.
  const seatPlano = seatText.replace(/[*_`~]/g, '').replace(/\s+/g, ' ');
  if (!/reservad/i.test(seatPlano) || !/\bsin\b[^.]{0,20}git submodule add/i.test(seatPlano)) {
    fail(
      'HOLONES/03-emmanuel/README.md debe declarar el asiento reservado «sin git submodule add»',
    );
    malo++;
  }

  if (malo === 0) {
    ok('HOLONES/03-emmanuel reservado: sin submódulo, sólo README, sin afirmación de inflado');
  }
}

// ---------------------------------------------------------------------------
// CA · junturas: pendencia real, no la palabra «pendiente»
// ---------------------------------------------------------------------------
const NEGACIONES_PENDENCIA = [
  [/\bnada\b[^.\n]{0,30}pendiente/i, '«nada pendiente»'],
  [/pendiente[^.\n]{0,30}\bnada\b/i, '«pendiente… nada»'],
  [/costura[^.\n]{0,40}(cerrada|fusionada|completa|resuelta)/i, 'costura declarada cerrada'],
  [/(cerrada|fusionada)[^.\n]{0,20}costura/i, 'costura declarada cerrada'],
  [/madurez[^.\n]{0,30}🟢/i, 'madurez declarada 🟢'],
  [/ya\s+no\s+(est[aá]|es)\s+pendiente/i, '«ya no está pendiente»'],
];

function checkJunturasPending(root) {
  const files = [
    'DEVOPS/METODOLOGIA/holones/junturas/01-02-mythos-logos.md',
    'DEVOPS/METODOLOGIA/holones/junturas/02-03-logos-revelacion.md',
    'DEVOPS/METODOLOGIA/holones/junturas/03-04-revelacion-ilustracion.md',
  ];
  for (const rel of files) {
    const p = join(root, ...rel.split('/'));
    if (!existsSync(p)) {
      fail(`falta ${rel}`);
      continue;
    }
    const t = readFileSync(p, 'utf8');
    let malo = 0;

    // (a) el documento sigue siendo la juntura, no un post-it. Antes bastaba
    //     con las palabras «LORE-HM» y «pendiente»: sustituir el fichero entero
    //     por dos palabras pasaba en verde.
    if (!/^#\s+Juntura\s+\d{2}\s*[↔→<>-]+\s*\d{2}/m.test(t)) {
      fail(`${rel}: perdió su encabezado «# Juntura NN↔MM»`);
      malo++;
    }
    if (!/^##\s+La grieta/m.test(t)) {
      fail(`${rel}: perdió la sección «## La grieta»`);
      malo++;
    }
    if (!/^##\s+.*LORE-HM/m.test(t)) {
      fail(`${rel}: sin sección «## Costura LORE-HM»`);
      malo++;
    }

    // (b) la pendencia, con su marcador exacto…
    if (!/⏳\s*pendiente/.test(t)) {
      fail(`${rel}: sin marcador «⏳ pendiente» de la costura LORE-HM`);
      malo++;
    }
    // (c) …y sin negarla. `/⏳ pendiente|pendiente/` se subsumía a sí mismo:
    //     «Nada pendiente» pasaba en verde.
    for (const [re, etiqueta] of NEGACIONES_PENDENCIA) {
      if (re.test(t)) {
        fail(`${rel}: contradice la pendencia (${etiqueta})`);
        malo++;
      }
    }

    // (d) y cita el criterio de madurez y el sellado, que es lo que hace
    //     verificable la pendencia.
    if (!/E01/.test(t) || !/E11/.test(t)) {
      fail(`${rel}: no cita el criterio notarial de madurez (E01+E11)`);
      malo++;
    }
    if (!t.includes('NETWORK-ENGINE/LANGUAGES/lore-hm')) {
      fail(`${rel}: no cita el sellado histórico NETWORK-ENGINE/LANGUAGES/lore-hm`);
      malo++;
    }

    if (malo === 0) ok(`${rel}: pendencia LORE-HM documentada y no contradicha`);
  }
}

// ---------------------------------------------------------------------------
const ROOT = findRepoRoot(__dirname);
console.log(`verificar-sellado-l05 · root=${ROOT}`);
console.log('  skips declarados:');
for (const [pref, razon] of SKIPS) console.log(`    ${pref.padEnd(18)} ${razon}`);

const files = [];
const dirs = [];
walk(ROOT, ROOT, files, dirs);
const relFiles = files.map((f) => toPosix(relative(ROOT, f)));

checkIncubationPresent(ROOT);
checkPackageJson(ROOT);
checkNoExtraccionLengua(ROOT);
checkHolonesCostura(ROOT);
checkJunturasPending(ROOT);

// --- superficie del grep-gate: anclas + suelo, para que no vuelva a ser 1 ---
{
  const faltanAnclas = ANCLAS_SUPERFICIE.filter((a) => !relFiles.includes(a));
  if (faltanAnclas.length > 0) {
    fail(
      `superficie del grep-gate: no se escanean las anclas ${faltanAnclas.join(', ')} ` +
        '— ¿se reintrodujo un skip de conveniencia?',
    );
  } else {
    ok(
      `superficie: ${relFiles.length} ficheros de código · ` +
        `${ANCLAS_SUPERFICIE.length}/${ANCLAS_SUPERFICIE.length} anclas presentes`,
    );
  }
  if (relFiles.length < MIN_ESCANEADOS) {
    fail(
      `superficie del grep-gate = ${relFiles.length} ficheros < suelo ${MIN_ESCANEADOS}: ` +
        'el mecanismo es real pero no mira nada',
    );
  }
  // Autocomprobación del mecanismo: el patrón debe morder una línea sintética.
  const sonda = "import { x } from '../../NETWORK-ENGINE/LANGUAGES/lore-hm/src/index.js';";
  if (!HIT_RE.test(sonda)) {
    fail('HIT_RE no detecta un import sintético de NETWORK-ENGINE (patrón roto)');
  } else {
    ok('autocomprobación: HIT_RE muerde un import sintético de NETWORK-ENGINE');
  }
}

for (const f of files) scanFile(f, ROOT);

if (hits.length > 0) {
  fail(`grep consumidores: ${hits.length} hit(s) Network-Engine fuera de incubación/allowlist`);
  for (const h of hits.slice(0, 40)) console.error(`  ${h}`);
  if (hits.length > 40) console.error(`  … +${hits.length - 40} más`);
} else {
  ok(`grep consumidores: 0 hits fuera de allowlist (${ALLOWLIST_HITS.size} ficheros exentos, uno a uno)`);
  for (const [f, razon] of ALLOWLIST_HITS) console.log(`       exento: ${f} — ${razon}`);
}

if (errors > 0) {
  console.error(`verificar-sellado-l05: FAIL (${errors} error(es))`);
  process.exit(1);
}

console.log('verificar-sellado-l05: PASS');
console.log('  sellado: NETWORK-ENGINE/LANGUAGES/lore-hm = incubación/histórico');
console.log(`  consumidores runtime/path: 0 (superficie ${relFiles.length} ficheros)`);
console.log('  HOLONES.md: costura LORE-HM · filas {01..07} por identidad · 03-emmanuel reservado');
console.log('  junturas 01↔02·02↔03·03↔04: pendencia documentada y no contradicha');
