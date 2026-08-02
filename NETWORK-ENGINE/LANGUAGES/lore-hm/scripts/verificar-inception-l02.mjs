#!/usr/bin/env node
/**
 * WP-SDK-L02 · check local de incubación lore-hm.
 * Falla si primitivas ≠ 5 o si falta la demo tipestate vs flat.
 * No sustituye CI. Sin deps runtime OASIS.
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const EXPECTED = ['Peer', 'Unit', 'Lease', 'Activity', 'Artifact'];

let errors = 0;

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  errors++;
}

function ok(msg) {
  console.log(`  OK: ${msg}`);
}

// --- archivos obligatorios ---
const required = [
  'README.md',
  'docs/P1-P5.md',
  'docs/PUERTA-PROMOCION.md',
  'docs/NAMESPACE.md',
  'src/primitives.ts',
  'src/projections.ts',
  'src/tipestate.ts',
  'src/brands.ts',
  'src/index.ts',
  'demos/tipestate-vs-flat/README.md',
  'demos/tipestate-vs-flat/flat-config.attempt.json',
  'demos/tipestate-vs-flat/flat-config.verdict.md',
  'demos/tipestate-vs-flat/tipestate-legal.ts',
  'demos/tipestate-vs-flat/tipestate-illegal.ts',
];

for (const rel of required) {
  if (!existsSync(join(ROOT, rel))) fail(`falta ${rel}`);
  else ok(`existe ${rel}`);
}

// --- conteo exacto 5 primitivas ---
const primSrc = readFileSync(join(ROOT, 'src/primitives.ts'), 'utf8');
const arrMatch = primSrc.match(
  /export const NUCLEAR_PRIMITIVES\s*=\s*\[([\s\S]*?)\]\s*as const/,
);
if (!arrMatch) {
  fail('no se encontró NUCLEAR_PRIMITIVES en src/primitives.ts');
} else {
  const names = [...arrMatch[1].matchAll(/'([A-Za-z]+)'/g)].map((m) => m[1]);
  if (names.length !== 5) {
    fail(`primitivas count=${names.length} (esperado 5): [${names.join(', ')}]`);
  } else if (names.join(',') !== EXPECTED.join(',')) {
    fail(
      `primitivas=[${names.join(', ')}] ≠ esperado=[${EXPECTED.join(', ')}]`,
    );
  } else {
    ok(`NUCLEAR_PRIMITIVES = 5 exactas: ${names.join(', ')}`);
  }
}

// --- proyecciones no coladas como primitivas ---
const projSrc = readFileSync(join(ROOT, 'src/projections.ts'), 'utf8');
if (!/export const PROJECTIONS/.test(projSrc)) {
  fail('falta PROJECTIONS en projections.ts');
} else {
  ok('PROJECTIONS declarado (proyección ≠ primitiva)');
}
for (const p of ['Pod', 'Barrio', 'DocumentMachine']) {
  if (new RegExp(`'${p}'`).test(arrMatch?.[1] ?? '')) {
    fail(`proyección ${p} aparece dentro de NUCLEAR_PRIMITIVES`);
  }
}

// --- demo tipestate vs flat ---
const flat = readFileSync(
  join(ROOT, 'demos/tipestate-vs-flat/flat-config.attempt.json'),
  'utf8',
);
const illegal = readFileSync(
  join(ROOT, 'demos/tipestate-vs-flat/tipestate-illegal.ts'),
  'utf8',
);
const verdict = readFileSync(
  join(ROOT, 'demos/tipestate-vs-flat/flat-config.verdict.md'),
  'utf8',
);

if (!/illegalJump/.test(flat) || !/"to"\s*:\s*"ready"/.test(flat)) {
  fail('flat-config.attempt.json no documenta salto ilegal a ready');
} else {
  ok('flat-config.attempt.json: intento fallido declared→ready');
}

if (!/@ts-expect-error/.test(illegal) || !/transition\(declared,\s*'ready'\)/.test(illegal)) {
  fail('tipestate-illegal.ts debe marcar transition(declared, ready) con @ts-expect-error');
} else {
  ok('tipestate-illegal.ts: tipestate rechaza el mismo salto');
}

if (!/imposible|no puede/i.test(verdict)) {
  fail('flat-config.verdict.md sin veredicto de imposibilidad');
} else {
  ok('veredicto lado-a-lado presente');
}

// --- P1–P5 respondidas ---
const p15 = readFileSync(join(ROOT, 'docs/P1-P5.md'), 'utf8');
for (const id of ['P1', 'P2', 'P3', 'P4', 'P5']) {
  if (!p15.includes(`### ${id}`) && !p15.includes(`## ${id}`)) {
    // allow "### P1 ·"
    if (!new RegExp(`#{2,3}\\s*${id}\\b`).test(p15)) {
      fail(`docs/P1-P5.md sin sección ${id}`);
    } else {
      ok(`sección ${id}`);
    }
  } else {
    ok(`sección ${id}`);
  }
}

// --- puerta no extrae package ---
const puerta = readFileSync(join(ROOT, 'docs/PUERTA-PROMOCION.md'), 'utf8');
for (const gate of ['Inception Review', 'WP-E01', 'E11', 'consumidores']) {
  if (!puerta.includes(gate)) fail(`PUERTA-PROMOCION.md sin gate «${gate}»`);
  else ok(`puerta menciona ${gate}`);
}
if (/name"\s*:\s*"@logos\/lore-hm"/.test(puerta)) {
  // fine in prose; check package.json if any
}

const pkgPath = join(ROOT, 'package.json');
if (existsSync(pkgPath)) {
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  if (pkg.name === '@logos/lore-hm') {
    fail('package.json no debe llamarse @logos/lore-hm antes de la puerta');
  }
}

// --- anti holón 08 / L_SDK claim en README ---
const readme = readFileSync(join(ROOT, 'README.md'), 'utf8');
if (!/cinco|5/.test(readme)) fail('README sin ancla de cinco primitivas');
else ok('README ancla ontología');

if (errors > 0) {
  console.error(`\nverificar-inception-l02: FAIL (${errors} errores)`);
  process.exit(1);
}

console.log('\nverificar-inception-l02: PASS');
console.log(`  root: ${ROOT}`);
console.log(`  primitivas: ${EXPECTED.join(', ')} (exactamente 5)`);
console.log('  demo tipestate vs flat: presente');
console.log('  puerta promoción: escrita (sin extraer package)');
