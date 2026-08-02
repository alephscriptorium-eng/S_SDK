#!/usr/bin/env node
/**
 * WP-SDK-L02 · check local de incubación lore-hm.
 * Falla si primitivas ≠ 5 o si falta la demo tipestate vs flat.
 * No sustituye CI. Sin deps runtime OASIS.
 */
import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
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
  // Los esquemas planos DE VERDAD (antes la demo no tenía ninguno escrito).
  'demos/tipestate-vs-flat/flat-schema/A-transicion.schema.json',
  'demos/tipestate-vs-flat/flat-schema/B-pares-legales.schema.json',
  'demos/tipestate-vs-flat/flat-schema/C-corrida.schema.json',
  'demos/tipestate-vs-flat/flat-schema/casos.json',
  'ci/json-schema-mini.mjs',
  'tsconfig.json',
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

// --- veredicto: debe declarar la conclusión MEDIDA, no la vieja ---
// Antes este check exigía `/imposible|no puede/i`, es decir: exigía la tesis
// vieja («regla imposible en config plana»), que la medición refutó — de ahí
// que corregir el fixture pusiera rojo un paso bloqueante. Ahora exige que el
// veredicto cite los esquemas que se ejecutan y que el número de pares del
// cross-check coincida con la máquina viva de src/tipestate.ts.
{
  const readmeDemo = readFileSync(
    join(ROOT, 'demos/tipestate-vs-flat/README.md'),
    'utf8',
  );
  for (const cita of [
    'flat-schema/A-transicion.schema.json',
    'flat-schema/B-pares-legales.schema.json',
    'flat-schema/C-corrida.schema.json',
  ]) {
    if (!verdict.includes(cita) && !readmeDemo.includes(cita)) {
      fail(`veredicto/README de la demo no cita ${cita}`);
    }
  }
  if (!/exhaustividad/i.test(verdict)) {
    fail('flat-config.verdict.md debe declarar el discriminante medido (exhaustividad)');
  } else {
    ok('veredicto declara el discriminante medido (exhaustividad en compilación)');
  }
  // Round-trip: el número de pares del cross-check se recalcula de la lengua,
  // así que una cita rancia tras cambiar la máquina se pone roja.
  const tipSrc = readFileSync(join(ROOT, 'src/tipestate.ts'), 'utf8');
  const union = /export type UnitPhase\s*=([\s\S]*?);/.exec(tipSrc);
  const nFases = union ? [...union[1].matchAll(/'([a-zA-Z]+)'/g)].length : 0;
  const pares = nFases * nFases * 2; // 2 formas de esquema (A y B)
  if (nFases === 0) {
    fail('no se pudo contar UnitPhase en src/tipestate.ts');
  } else if (!verdict.includes(`${pares} pares`) && !readmeDemo.includes(`${pares} pares`)) {
    fail(
      `veredicto/README citan un número de pares distinto de ${pares} ` +
        `(${nFases} fases × ${nFases} × 2 formas) — cita rancia tras cambiar la máquina`,
    );
  } else {
    ok(`veredicto cita ${pares} pares = ${nFases}² × 2 formas (recalculado de tipestate.ts)`);
  }
}

// Mecanismo: rechazo runtime (no solo markdown / @ts-expect-error)
{
  const rejectScript = join(ROOT, 'demos/tipestate-vs-flat/reject-flat-illegal.mjs');
  if (!existsSync(rejectScript)) {
    fail('falta demos/tipestate-vs-flat/reject-flat-illegal.mjs');
  } else {
    const r = spawnSync(process.execPath, [rejectScript], {
      encoding: 'utf8',
    });
    if (r.status !== 0) {
      fail(`reject-flat-illegal: ${r.stderr || r.stdout}`);
    } else {
      ok('reject-flat-illegal: tipestate runtime rechaza salto flat');
    }
  }
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

// --- README ancla la ontología de 5 primitivas ---
// NOTA DE CORRECCIÓN (WP-ZV-S ②): este bloque llevaba el comentario
// «anti holón 08 / L_SDK» y su código grepeaba la palabra «cinco». Era un
// comentario mal etiquetado colocado exactamente donde un revisor buscaría el
// guard —el único hit de «L_SDK» en código ejecutable de todo el árbol—, y la
// CA que prohíbe el holón 08 y `L_SDK` no tenía guard alguno. El guard real
// vive ahora en `scripts/verificar-sellado-l05.mjs` →
// `checkNoExtraccionLengua()`, con caso rojo medido. Aquí sólo se ancla la
// ontología, que es lo que este código hace de verdad.
const readme = readFileSync(join(ROOT, 'README.md'), 'utf8');
{
  const faltan = EXPECTED.filter((p) => !new RegExp(`\\b${p}\\b`).test(readme));
  if (faltan.length > 0) {
    fail(`README no nombra las primitivas: ${faltan.join(', ')}`);
  } else if (!/\bcinco\b|\b5 primitivas\b/i.test(readme)) {
    fail('README sin ancla explícita de «cinco» primitivas');
  } else {
    ok(`README ancla ontología: cinco + ${EXPECTED.join(', ')}`);
  }
}

if (errors > 0) {
  console.error(`\nverificar-inception-l02: FAIL (${errors} errores)`);
  process.exit(1);
}

console.log('\nverificar-inception-l02: PASS');
console.log(`  root: ${ROOT}`);
console.log(`  primitivas: ${EXPECTED.join(', ')} (exactamente 5)`);
console.log('  demo tipestate vs flat: presente');
console.log('  puerta promoción: escrita (sin extraer package)');
