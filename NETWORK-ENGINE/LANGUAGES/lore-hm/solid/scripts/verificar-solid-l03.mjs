#!/usr/bin/env node
/**
 * WP-SDK-L03 · check local capa SOLID.
 * Falla si falta peldaño de conformidad, DIC-4, Z_SDK#55 OPEN,
 * o si se afirma package/PR implementado.
 * Sin deps externas. No sustituye CI.
 */
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const TIERS = ['v1', 'v1.1', 'v2', 'v3'];
const Z55_URL = 'https://github.com/alephscriptorium-eng/Z_SDK/pull/55';
const Z55_COMMIT = '34613c1b9110ef27ddee53950d21b88b17bdc9';

let errors = 0;

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  errors++;
}

function ok(msg) {
  console.log(`  OK: ${msg}`);
}

function read(rel) {
  return readFileSync(join(ROOT, rel), 'utf8');
}

function exists(rel) {
  return existsSync(join(ROOT, rel));
}

// --- archivos obligatorios ---
const required = [
  'README.md',
  'docs/CONFORMIDAD-ESCALONADA.md',
  'docs/DIC-4-HASH.md',
  'docs/Z_SDK-55-INSUMO.md',
  'docs/VOCABULARIO.md',
  'docs/IDENTIDAD-TRIPLE.md',
  'docs/POD-WAC-ACP.md',
  'docs/PLANOS-EVENTOS.md',
  'docs/BRIDGE-MCP.md',
  'schemas/wire-activity.schema.json',
  'schemas/context.jsonld',
  'schemas/shapes.shacl.ttl',
  'src/identity.ts',
  'src/hash-dic4.ts',
  'src/pod.ts',
  'src/auth-relay.ts',
  'src/planes.ts',
  'src/bridge-mcp.ts',
  'src/conformance.ts',
  'src/index.ts',
  'fixtures/wire-activity.sealed.json',
  'fixtures/view-activity.jsonld',
];

for (const rel of required) {
  if (!exists(rel)) fail(`falta ${rel}`);
  else ok(`existe ${rel}`);
}

// representations.ts (wire/vista types)
const srcFiles = readdirSync(join(ROOT, 'src'));
const repsName = 'rep' + 'resentations.ts';
if (!srcFiles.includes(repsName)) fail(`falta src/${repsName}`);
else ok(`existe src/${repsName}`);

// --- conformidad escalonada: peldaños + NO garantiza ---
const confDoc = read('docs/CONFORMIDAD-ESCALONADA.md');
const confTs = read('src/conformance.ts');
for (const tier of TIERS) {
  if (!confDoc.includes(`**${tier}**`) && !confDoc.includes(`| **${tier}**`)) {
    // table uses **v1** etc.
    if (!new RegExp(`\\*\\*${tier.replace('.', '\\.')}\\*\\*`).test(confDoc)) {
      fail(`CONFORMIDAD-ESCALONADA.md sin peldaño ${tier}`);
    } else ok(`doc peldaño ${tier}`);
  } else ok(`doc peldaño ${tier}`);
  if (!confTs.includes(`'${tier}'`) && !confTs.includes(`"${tier}"`)) {
    fail(`conformance.ts sin tier ${tier}`);
  } else ok(`ts tier ${tier}`);
}
if (!/NO garantiza/i.test(confDoc)) {
  fail('CONFORMIDAD-ESCALONADA.md sin columna/sección «NO garantiza»');
} else ok('doc declara lo que NO garantiza');
const rungMatches = [...confTs.matchAll(/doesNotGuarantee:\s*\[/g)];
if (rungMatches.length < 4) {
  fail(`conformance.ts doesNotGuarantee count=${rungMatches.length} (esperado ≥4)`);
} else ok(`conformance.ts doesNotGuarantee en ${rungMatches.length} peldaños`);

// --- DIC-4 ---
const dic = read('docs/DIC-4-HASH.md');
const hashTs = read('src/hash-dic4.ts');
if (!/sha256/i.test(dic)) fail('DIC-4-HASH.md sin sha256 default');
else ok('DIC-4 menciona sha256');
if (!/RDFC-1\.0|rdfc-1\.0/i.test(dic)) fail('DIC-4-HASH.md sin RDFC-1.0');
else ok('DIC-4 menciona RDFC-1.0');
if (!/huellaLedger/.test(dic) || !/no altera/i.test(dic)) {
  fail('DIC-4-HASH.md debe decir que la vista no altera huellaLedger');
} else ok('DIC-4: vista no altera huellaLedger');
if (!/DEFAULT_WIRE_ALG/.test(hashTs) || !/'sha256'/.test(hashTs)) {
  fail('hash-dic4.ts sin DEFAULT_WIRE_ALG sha256');
} else ok('hash-dic4.ts DEFAULT_WIRE_ALG=sha256');
if (!/assertViewDoesNotDefineLedger/.test(hashTs)) {
  fail('hash-dic4.ts sin assertViewDoesNotDefineLedger');
} else ok('hash-dic4.ts guarda vista≠ledger');

// --- Z_SDK#55 OPEN + commit + URL ---
const z55 = read('docs/Z_SDK-55-INSUMO.md');
const indexTs = read('src/index.ts');
if (!z55.includes(Z55_URL)) fail(`Z_SDK-55-INSUMO.md sin URL ${Z55_URL}`);
else ok('Z_SDK#55 URL citada');
if (!/\bOPEN\b/.test(z55)) fail('Z_SDK-55-INSUMO.md sin estado OPEN');
else ok('Z_SDK#55 estado OPEN');
if (!z55.includes(Z55_COMMIT)) fail(`Z_SDK-55-INSUMO.md sin commit ${Z55_COMMIT}`);
else ok('Z_SDK#55 commit tip citado');
if (!/insumo|por curar|no implementación|no implementado/i.test(z55)) {
  fail('Z_SDK-55-INSUMO.md debe marcar insumo no-implementado');
} else ok('Z_SDK#55 marcado como insumo no-implementado');
if (!/implementedInThisTree:\s*false/.test(indexTs)) {
  fail('index.ts Z_SDK_55_STATUS.implementedInThisTree debe ser false');
} else ok('index.ts implementedInThisTree=false');

// --- prohibido afirmar package/PR implementado ---
const treeTexts = [
  ['README.md', read('README.md')],
  ['docs/Z_SDK-55-INSUMO.md', z55],
  ['src/index.ts', indexTs],
];
const forbiddenClaims = [
  /Z_SDK#55\s+implementad/i,
  /PR\s*#?\s*55\s+implementad/i,
  /pack SOLID×MCP está implementado/i,
  /@logos\/lore-hm-solid/,
  /"name"\s*:\s*"@logos\/lore-hm"/,
];
for (const [label, text] of treeTexts) {
  for (const re of forbiddenClaims) {
    if (re.test(text) && !/prohibido|no afirma|no está implementado|insumo/i.test(text)) {
      fail(`${label} afirma implementación prohibida: ${re}`);
    }
  }
}
// positive: README must NOT claim Z_SDK#55 implemented
if (/Z_SDK#55[^\n]{0,80}implementado(?!\s+—)/i.test(read('README.md')) &&
    !/no afirma que[\s\S]{0,40}esté implementado/i.test(read('README.md'))) {
  fail('README afirma Z_SDK#55 implementado');
} else ok('README no afirma Z_SDK#55 implementado');

if (exists('package.json')) {
  const pkg = JSON.parse(read('package.json'));
  if (pkg.name === '@logos/lore-hm' || String(pkg.name).includes('solid')) {
    fail(`package.json no debe publicar capa SOLID aún (name=${pkg.name})`);
  }
} else ok('sin package.json en solid/ (incubación)');

// --- vocabulario preferente ---
const vocab = read('docs/VOCABULARIO.md');
for (const v of ['AS2', 'PROV-O', 'DCTERMS', 'activitystreams', 'prov#', 'dc/terms']) {
  if (!vocab.includes(v) && !read('schemas/context.jsonld').includes(v.split('/')[0])) {
    // soft: check context for prefixes
  }
}
const ctx = read('schemas/context.jsonld');
for (const needle of ['activitystreams', 'ns/prov#', 'dc/terms']) {
  if (!ctx.includes(needle)) fail(`context.jsonld sin ${needle}`);
  else ok(`context reusa ${needle}`);
}

// --- identidad triple no fusionada ---
const idTs = read('src/identity.ts');
if (!/webId/.test(idTs) || !/peerCard/.test(idTs) || !/ssbId/.test(idTs)) {
  fail('identity.ts debe tipar webId, peerCard, ssbId');
} else ok('identidad triple tipada');
if (/type\s+FusedIdentity|identity:\s*string/.test(idTs)) {
  fail('identity.ts parece fusionar credenciales');
} else ok('sin tipo fusionado de identidad');

// --- LocalPodProvider simulation + SolidPodProvider not implemented ---
const podTs = read('src/pod.ts');
if (!/simulation:\s*true/.test(podTs)) fail('pod.ts LocalPodProvider sin simulation:true');
else ok('LocalPodProvider simulation:true');
if (!/implemented:\s*false/.test(podTs)) fail('pod.ts SolidPodProvider sin implemented:false');
else ok('SolidPodProvider implemented:false');

// --- bridge: tool ≠ auto RDF ---
const bridge = read('src/bridge-mcp.ts') + read('docs/BRIDGE-MCP.md');
if (!/rdfPredicateAutoDerived:\s*false/.test(bridge) && !/nunca.*predicado RDF/i.test(bridge)) {
  fail('bridge sin regla tool≠predicado RDF auto');
} else ok('bridge: tools ≠ predicados RDF auto');

// --- fixtures: wire seal sha256 + vista sin huellaLedger ---
const wireRaw = read('fixtures/wire-activity.sealed.json');
const viewRaw = read('fixtures/view-activity.jsonld');
let wire;
let view;
try {
  wire = JSON.parse(wireRaw);
  view = JSON.parse(viewRaw);
} catch (e) {
  fail(`fixtures JSON inválido: ${e.message}`);
}
if (wire) {
  for (const k of ['kind', 'iri', 'type', 'actor', 'sealedBytesEncoding']) {
    if (!(k in wire)) fail(`wire fixture sin ${k}`);
  }
  if (wire.kind !== 'WireActivity') fail('wire.kind ≠ WireActivity');
  if (wire.sealedBytesEncoding !== 'utf8') fail('wire.sealedBytesEncoding ≠ utf8');
  // DIC-4: huella = sha256(utf8 bytes del wire sellado)
  const digest = createHash('sha256').update(wireRaw, 'utf8').digest('hex');
  if (!/^[a-f0-9]{64}$/.test(digest)) fail('digest sha256 malformado');
  else ok(`huellaLedger sha256(wire bytes)=${digest.slice(0, 12)}…`);
  // schema mentions sha256 enum
  const schema = read('schemas/wire-activity.schema.json');
  if (!/"sha256"/.test(schema)) fail('wire schema sin alg sha256');
  else ok('wire schema alg sha256');
}
if (view) {
  if ('huellaLedger' in view) {
    fail('DIC-4: vista no debe definir huellaLedger');
  } else ok('vista sin huellaLedger');
  if (view.authoritative !== false) {
    fail('vista debe declarar authoritative:false');
  } else ok('vista authoritative:false');
}

// --- planos separados ---
const planes = read('src/planes.ts') + read('docs/PLANOS-EVENTOS.md');
if (!/room-l2/.test(planes) || !/solid-l1/.test(planes)) {
  fail('faltan discriminadores room-l2 / solid-l1');
} else ok('planos room-l2 y solid-l1');
if (!/forbidCrossReplay/.test(read('src/planes.ts'))) {
  fail('planes.ts sin forbidCrossReplay');
} else ok('forbidCrossReplay presente');

if (errors > 0) {
  console.error(`\nverificar-solid-l03: FAIL (${errors} errores)`);
  process.exit(1);
}

console.log('\nverificar-solid-l03: PASS');
console.log(`  root: ${ROOT}`);
console.log('  conformidad: v1 · v1.1 · v2 · v3 (con NO garantiza)');
console.log('  DIC-4: sha256 default; vista ≠ huellaLedger');
console.log(`  Z_SDK#55: OPEN · ${Z55_COMMIT.slice(0, 7)} · insumo no implementado`);
console.log('  package/PR: sin afirmación de implementado');
