#!/usr/bin/env node
/**
 * WP-SDK-L01 · verificación local del dossier lore-hm-integracion-holonica.
 * No sustituye CI s-sdk (addenda 113). Ejecutar con identidad PASS.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOSSIER = join(__dirname, '..');
const REQUIRED = [
  'README.md',
  'FUENTES.md',
  'MAPA-HOLONICO.md',
  'LENGUA.md',
  'SOLID.md',
  'MATRIZ-CONSUMIDORES.md',
  'DECISIONES.md',
  'PLAN.md',
];

const STATUS_RE =
  /\*\*(verificada|hipótesis|decisión pendiente)\*\*/g;

let errors = 0;

for (const name of REQUIRED) {
  const p = join(DOSSIER, name);
  if (!existsSync(p)) {
    console.error(`FAIL: falta ${name}`);
    errors++;
    continue;
  }
  const text = readFileSync(p, 'utf8');
  const matches = text.match(STATUS_RE);
  if (!matches || matches.length < 3) {
    console.error(
      `FAIL: ${name} tiene pocas marcas de estado (min 3, halladas ${matches?.length ?? 0})`,
    );
    errors++;
  }
}

const forbidden = [
  'DEVOPS/METODOLOGIA/HOLONES.md',
  'DEVOPS/METODOLOGIA/holones/02-logos.md',
  'DEVOPS/METODOLOGIA/holones/03-revelacion.md',
  'DEVOPS/METODOLOGIA/holones/04-ilustracion.md',
];

const repoRoot = join(DOSSIER, '..', '..', '..', '..', '..');
for (const rel of forbidden) {
  const p = join(repoRoot, rel);
  if (!existsSync(p)) {
    console.error(`WARN: no encontrado ${rel} (skip diff)`);
  }
}

const extra = readdirSync(DOSSIER).filter(
  (f) => f.endsWith('.md') && !REQUIRED.includes(f),
);
if (extra.length > 0) {
  console.log(`INFO: archivos extra en dossier: ${extra.join(', ')}`);
}

if (errors > 0) {
  console.error(`verificar-dossier-l01: FAIL (${errors} errores)`);
  process.exit(1);
}

console.log('verificar-dossier-l01: PASS');
console.log(`  dossier: ${DOSSIER}`);
console.log(`  archivos: ${REQUIRED.length}/${REQUIRED.length}`);
