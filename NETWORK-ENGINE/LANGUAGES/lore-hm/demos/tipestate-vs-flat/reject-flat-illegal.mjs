#!/usr/bin/env node
/**
 * Mecanismo L02 · contraste tipestate vs config plana — **medido, no declarado**.
 *
 * Historia: la versión anterior de este script leía `acceptedByFlatSchema: true`
 * del propio fixture y de esa autodeclaración derivaba «el esquema plano
 * aceptaría declared→ready». Nunca compiló ni ejecutó ningún JSON Schema —
 * en toda la demo no había ninguno escrito. La autodeclaración era falsa:
 * JSON Schema 2020-12 **sí** expresa la regla. Ver `README.md` §Conclusión.
 *
 * Lo que este script hace ahora:
 *   1. Deriva la máquina de estados de `src/tipestate.ts` (fuente única).
 *   2. Compila y EJECUTA tres esquemas planos 2020-12 reales.
 *   3. Verifica que los codifican exactamente la misma máquina (6×6 × 2 formas).
 *   4. Corre la tabla de casos y compara veredictos.
 *   5. Mide el discriminador real: **exhaustividad**. Añadir una fase al enum
 *      sin añadir su rama `if` deja el esquema silenciosamente permisivo.
 *   6. Prohíbe que ninguna instancia se autodeclare aceptable.
 *
 * Exit 0 sólo si TODO lo anterior se verifica.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compile } from '../../ci/json-schema-mini.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const lenguaRoot = join(here, '..', '..');

let errors = 0;
const fail = (m) => {
  console.error(`FAIL: ${m}`);
  errors++;
};
const ok = (m) => console.log(`  OK: ${m}`);

// ---------------------------------------------------------------------------
// 1 · máquina canónica derivada de src/tipestate.ts (NO copiada a mano)
// ---------------------------------------------------------------------------
/**
 * Antes había TRES máquinas de estados en el sistema y este script validaba
 * contra la tercera: una tabla escrita a mano con 4 claves, un estado `failed`
 * que no existe en `tipestate.ts`, y sin `running`/`halted` — bajo la cual
 * `running→halted` (la cadena canónica) era ILEGAL.
 *
 * Quién manda: **`src/tipestate.ts`**. Es la lengua. Se deriva de ahí y se
 * verifica la coherencia interna del propio fichero; si `tipestate.ts` cambia,
 * este script cambia con él o se pone rojo.
 *
 * Divergencia declarada y NO fusionada aquí: el `PodState` de
 * `WPS_QUEUE/investigacion-freeze-vigilancia.md:315` y `WPS_QUEUE/DRAFT/PLAN.md:107`
 * (`declared|leased|inflated|ready|running|paused|stopped|failed`, 8 estados)
 * es una máquina distinta, de un WP borrador no aceptado, fuera del alcance de
 * esta rama. La lengua no la implementa; cuando ese WP entre, se reconcilia
 * contra `tipestate.ts`, no contra una copia en un demo.
 */
function derivarTipestate() {
  const src = readFileSync(join(lenguaRoot, 'src', 'tipestate.ts'), 'utf8');

  const unionM = /export type UnitPhase\s*=([\s\S]*?);/.exec(src);
  if (!unionM) throw new Error('src/tipestate.ts: no se encontró `export type UnitPhase`');
  const phases = [...unionM[1].matchAll(/'([a-zA-Z]+)'/g)].map((m) => m[1]);
  if (phases.length === 0) throw new Error('src/tipestate.ts: UnitPhase sin miembros');

  const mapM = /type TransitionMap\s*=\s*\{([\s\S]*?)\n\};/.exec(src);
  if (!mapM) throw new Error('src/tipestate.ts: no se encontró `type TransitionMap`');
  const table = Object.create(null);
  for (const m of mapM[1].matchAll(/^\s*([a-zA-Z]+)\s*:\s*(?:'([a-zA-Z]+)'|never)\s*;/gm)) {
    table[m[1]] = m[2] ? [m[2]] : [];
  }

  // Coherencia interna: el mapa y la unión describen el mismo alfabeto.
  const keys = Object.keys(table);
  const faltan = phases.filter((p) => !keys.includes(p));
  const sobran = keys.filter((k) => !phases.includes(k));
  if (faltan.length) throw new Error(`TransitionMap sin clave para: ${faltan.join(', ')}`);
  if (sobran.length) throw new Error(`TransitionMap con claves fuera de UnitPhase: ${sobran.join(', ')}`);
  for (const [from, tos] of Object.entries(table)) {
    for (const to of tos) {
      if (!phases.includes(to)) throw new Error(`TransitionMap.${from} → «${to}» no es un UnitPhase`);
    }
  }
  return { phases, table };
}

let PHASES;
let TABLE;
try {
  ({ phases: PHASES, table: TABLE } = derivarTipestate());
  ok(
    `tipestate.ts: ${PHASES.length} fases · ${Object.keys(TABLE).length} filas de ` +
      'TransitionMap (derivado, no copiado)',
  );
} catch (e) {
  fail(`derivación de src/tipestate.ts: ${e.message}`);
  process.exit(1);
}

const permiteTipestate = (from, to) => (TABLE[from] ?? []).includes(to);

// ---------------------------------------------------------------------------
// 2 · compilar los esquemas planos REALES
// ---------------------------------------------------------------------------
const schemaDir = join(here, 'flat-schema');
const leerSchema = (f) => JSON.parse(readFileSync(join(schemaDir, f), 'utf8'));

const SCHEMAS = {
  A: leerSchema('A-transicion.schema.json'),
  B: leerSchema('B-pares-legales.schema.json'),
  C: leerSchema('C-corrida.schema.json'),
};
for (const [k, s] of Object.entries(SCHEMAS)) {
  if (s.$schema !== 'https://json-schema.org/draft/2020-12/schema') {
    fail(`esquema ${k}: $schema ≠ 2020-12 (${s.$schema})`);
  }
}
const valida = {
  A: compile(SCHEMAS.A),
  B: compile(SCHEMAS.B),
  C: compile(SCHEMAS.C),
};
ok('esquemas A/B/C compilados (2020-12, evaluador fail-closed ante keyword desconocida)');

// ---------------------------------------------------------------------------
// 3 · los esquemas planos codifican EXACTAMENTE la máquina de tipestate.ts.
//     Cualquier deriva entre lengua y esquema = rojo (no nace una 4ª máquina).
// ---------------------------------------------------------------------------
{
  let desviaciones = 0;
  let comprobados = 0;
  for (const from of PHASES) {
    for (const to of PHASES) {
      const esperado = permiteTipestate(from, to);
      for (const forma of ['A', 'B']) {
        comprobados++;
        const got = valida[forma]({ from, to }).valid;
        if (got !== esperado) {
          desviaciones++;
          fail(`esquema ${forma}: ${from}→${to} = ${got}, tipestate.ts dice ${esperado}`);
        }
      }
    }
  }
  if (desviaciones === 0) {
    ok(`esquemas A y B ≡ TransitionMap de tipestate.ts: ${comprobados} pares, 0 desviaciones`);
  }
}

// ---------------------------------------------------------------------------
// 4 · tabla de casos: el veredicto lo pone el esquema, no el fixture
// ---------------------------------------------------------------------------
const casos = JSON.parse(readFileSync(join(schemaDir, 'casos.json'), 'utf8'));
{
  let n = 0;
  for (const c of casos.transiciones) {
    for (const forma of ['A', 'B']) {
      n++;
      const r = valida[forma](c.caso);
      if (r.valid !== c.esperado) {
        fail(`${c.id} esquema ${forma}: valid=${r.valid}, esperado=${c.esperado} — ${c.nota}`);
      }
    }
    if (permiteTipestate(c.caso.from, c.caso.to) !== c.esperado) {
      fail(
        `${c.id} tipestate: permite=${permiteTipestate(c.caso.from, c.caso.to)}, ` +
          `esperado=${c.esperado}`,
      );
    }
  }
  for (const c of casos.corridas) {
    n++;
    const r = valida.C(c.caso);
    if (r.valid !== c.esperado) {
      fail(`${c.id} esquema C: valid=${r.valid}, esperado=${c.esperado} — ${c.nota}`);
    }
  }
  if (errors === 0) ok(`tabla de casos: ${n} evaluaciones de esquema, 0 desviaciones`);
}

// ---------------------------------------------------------------------------
// 5 · el hallazgo que refuta la conclusión vieja
// ---------------------------------------------------------------------------
{
  const salto = { from: 'declared', to: 'ready' };
  const control = { from: 'declared', to: 'leased' };
  const rechazaA = !valida.A(salto).valid;
  const rechazaB = !valida.B(salto).valid;
  const aceptaA = valida.A(control).valid;
  if (!(rechazaA && rechazaB && aceptaA)) {
    fail('el esquema plano debía RECHAZAR declared→ready y ACEPTAR declared→leased');
  } else {
    ok('config plana (JSON Schema 2020-12) RECHAZA declared→ready y ACEPTA declared→leased');
    console.log(
      '       ⇒ la tesis vieja («regla imposible en config plana») queda REFUTADA por medición',
    );
  }
  if (permiteTipestate('declared', 'ready')) {
    fail('tipestate: TransitionMap aceptó declared→ready');
  } else {
    ok('tipestate runtime también RECHAZA declared→ready (coinciden, no se contradicen)');
  }
}

// ---------------------------------------------------------------------------
// 6 · el discriminador REAL: exhaustividad, no expresividad
// ---------------------------------------------------------------------------
{
  // Añadimos una fase al enum del esquema SIN añadir su rama `if`.
  // Es exactamente lo que pasaría al ampliar la máquina y olvidar el esquema.
  const ampliado = JSON.parse(JSON.stringify(SCHEMAS.A));
  ampliado.$defs.phase.enum.push('paused');
  const validaAmpliado = compile(ampliado);
  const silencioso = validaAmpliado({ from: 'paused', to: 'ready' }).valid;
  if (!silencioso) {
    fail(
      'esperábamos que el esquema ampliado aceptara paused→ready (permisividad silenciosa); ' +
        'si ya no lo hace, el discriminante de esta demo cambió y hay que reescribirla',
    );
  } else {
    ok('esquema + fase nueva sin rama `if` ⇒ paused→ready VÁLIDO: permisividad silenciosa, 0 errores');
    console.log('       ⇒ el mismo olvido en `UnitPhase` pone rojo a tsc (describePhase, chequeo `never`)');
    console.log('       ⇒ discriminante = EXHAUSTIVIDAD EN COMPILACIÓN, no expresividad');
  }

  // Punto ciego de las formas A/B: juzgan una transición, no una corrida.
  const local = valida.A({ from: 'inflated', to: 'ready' }).valid;
  const global = valida.C({
    unit: { iri: 'urn:lore-hm:unit:fm-mock-1', phase: 'ready' },
    history: [{ from: 'inflated', to: 'ready' }],
  }).valid;
  if (!(local === true && global === false)) {
    fail(`punto ciego A/B: local=${local} global=${global} (esperado true/false)`);
  } else {
    ok('punto ciego medido: A acepta inflated→ready aislado; C lo rechaza porque exige la traza entera');
    console.log('       ⇒ el esquema sólo juzga lo que el documento se acuerde de traer');
  }
}

// ---------------------------------------------------------------------------
// 7 · prohibición de autodeclaración
// ---------------------------------------------------------------------------
{
  const flatPath = join(here, 'flat-config.attempt.json');
  const flat = JSON.parse(readFileSync(flatPath, 'utf8'));
  const jump = flat.illegalJump;
  if (!jump || jump.from !== 'declared' || jump.to !== 'ready') {
    fail('flat-config.attempt.json sin illegalJump declared→ready');
  } else {
    const prohibidas = ['acceptedByFlatSchema', 'acceptedByTipestate'];
    const presentes = prohibidas.filter((k) => k in jump);
    if (presentes.length > 0) {
      fail(
        `flat-config.attempt.json se autodeclara: ${presentes.join(', ')} — ` +
          'el veredicto lo pone el esquema al ejecutarse, no el fixture',
      );
    } else {
      ok('fixture sin autodeclaración: ningún campo del dato decide su propio veredicto');
    }
    // Y el objeto literal del fixture pasa por el esquema de verdad:
    const rA = valida.A(jump);
    if (rA.valid) {
      fail('el illegalJump literal del fixture validó contra el esquema plano A');
    } else {
      ok(`illegalJump literal del fixture → INVÁLIDO por esquema A (${rA.errors.length} error(es))`);
      console.log(`       ${rA.errors[0]}`);
    }
  }
}

if (errors > 0) {
  console.error(`reject-flat-illegal: FAIL (${errors} error(es))`);
  process.exit(1);
}
console.log('reject-flat-illegal: PASS');
process.exit(0);
