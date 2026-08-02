#!/usr/bin/env node
/**
 * WP-SDK-L05 · grep-gate: cero imports/paths Network-Engine en consumidores.
 * Allowlist: NETWORK-ENGINE/** (incubación / sellado histórico declarado).
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
]);

/** Prefijos relativos (posix) que NO son consumidores runtime. */
const SKIP_PREFIXES = [
  'NETWORK-ENGINE/', // incubación / sellado histórico declarado
  'DEVOPS/',
  'plan/',
  'docs/',
  'WPS_QUEUE/',
  '.claude/',
  'node_modules/',
  '.git/',
];

const SKIP_NAMES = new Set([
  'package-lock.json',
  'CHANGELOG.md',
  'AUTORIDADES.md',
  'LLM.md',
]);

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
  for (const pref of SKIP_PREFIXES) {
    if (relPosix === pref.slice(0, -1) || relPosix.startsWith(pref)) {
      return true;
    }
  }
  return false;
}

function walk(dir, root, out) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const ent of entries) {
    const abs = join(dir, ent.name);
    const rel = toPosix(relative(root, abs));
    if (shouldSkip(rel)) continue;
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === '.git') continue;
      walk(abs, root, out);
    } else if (ent.isFile()) {
      const ext = ent.name.includes('.')
        ? `.${ent.name.split('.').pop()}`
        : '';
      if (CODE_EXT.has(ext) || ent.name === 'package.json') out.push(abs);
    }
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
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    if (HIT_RE.test(lines[i])) {
      hits.push(`${rel}:${i + 1}:${lines[i].trim().slice(0, 120)}`);
    }
  }
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

function checkIncubationPresent(root) {
  const required = [
    'NETWORK-ENGINE/README.md',
    'NETWORK-ENGINE/LANGUAGES/lore-hm/docs/SELLADO.md',
    'NETWORK-ENGINE/LANGUAGES/lore-hm/README.md',
    'NETWORK-ENGINE/LANGUAGES/lore-hm/scripts/verificar-inception-l02.mjs',
    'NETWORK-ENGINE/LANGUAGES/lore-hm/solid/scripts/verificar-solid-l03.mjs',
    'NETWORK-ENGINE/LANGUAGES/lore-hm/vocab/scripts/verificar-vocab-l04.mjs',
  ];
  for (const rel of required) {
    if (!existsSync(join(root, ...rel.split('/')))) {
      fail(`falta sellado/histórico: ${rel}`);
    } else {
      ok(`existe ${rel}`);
    }
  }
}

function checkHolonesCostura(root) {
  const holones = join(root, 'DEVOPS', 'METODOLOGIA', 'HOLONES.md');
  if (!existsSync(holones)) {
    fail('falta DEVOPS/METODOLOGIA/HOLONES.md');
    return;
  }
  const text = readFileSync(holones, 'utf8');
  const rows = [...text.matchAll(/^\| (\d{2}) \|/gm)].map((m) => m[1]);
  if (rows.length !== 7) {
    fail(`HOLONES.md filas de holón = ${rows.length} (esperado 7; LORE-HM no es fila)`);
  } else {
    ok('HOLONES.md = 7 filas (sin holón 08)');
  }
  if (!/LORE-HM/i.test(text) || !/costuras?\s+ejecutables?/i.test(text)) {
    fail('HOLONES.md debe declarar LORE-HM como costura ejecutable (no fila nueva)');
  } else {
    ok('HOLONES.md declara LORE-HM como costura ejecutable');
  }
  const seat = join(root, 'HOLONES', '03-emmanuel', 'README.md');
  if (!existsSync(seat)) {
    fail('falta HOLONES/03-emmanuel/README.md (asiento reservado)');
  } else {
    const seatText = readFileSync(seat, 'utf8');
    if (seatText.length > 800) {
      fail('HOLONES/03-emmanuel parece inflado (README > 800 chars)');
    } else {
      ok('HOLONES/03-emmanuel sin inflar');
    }
  }
}

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
    if (!/LORE-HM/i.test(t) || !/⏳ pendiente|pendiente/.test(t)) {
      fail(
        `${rel}: debe documentar costura LORE-HM como ⏳ pendiente (madurez 🔴), sin inventar cuerpo`,
      );
    } else {
      ok(`${rel}: pendiente LORE-HM documentado`);
    }
  }
}

const ROOT = findRepoRoot(__dirname);
console.log(`verificar-sellado-l05 · root=${ROOT}`);

checkIncubationPresent(ROOT);
checkPackageJson(ROOT);
checkHolonesCostura(ROOT);
checkJunturasPending(ROOT);

const files = [];
walk(ROOT, ROOT, files);
for (const f of files) scanFile(f, ROOT);

if (hits.length > 0) {
  fail(`grep consumidores: ${hits.length} hit(s) Network-Engine fuera de incubación`);
  for (const h of hits.slice(0, 40)) console.error(`  ${h}`);
  if (hits.length > 40) console.error(`  … +${hits.length - 40} más`);
} else {
  ok('grep consumidores: 0 imports/paths Network-Engine');
}

if (errors > 0) {
  console.error(`verificar-sellado-l05: FAIL (${errors} error(es))`);
  process.exit(1);
}

console.log('verificar-sellado-l05: PASS');
console.log('  sellado: NETWORK-ENGINE/LANGUAGES/lore-hm = incubación/histórico');
console.log('  consumidores runtime/path: 0');
console.log('  HOLONES.md: costura LORE-HM · 7 filas · 03-emmanuel sin inflar');
console.log('  junturas 01↔02·02↔03·03↔04: pendiente madurez documentada');
