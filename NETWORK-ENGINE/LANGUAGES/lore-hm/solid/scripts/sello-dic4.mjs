#!/usr/bin/env node
/**
 * DIC-4 · sello del wire — **canonicalización explícita y única**.
 *
 * Antes de WP-ZV-S no existía sello ninguno: `wire-activity.sealed.json` —el
 * fichero llamado *sellado*— no contenía `huellaLedger` (que su propio esquema
 * declara `required`), no había ni un sha256 de 64 hex almacenado en todo
 * `solid/`, y el verificador calculaba un digest para comprobar sólo que
 * tuviera 64 hex: una tautología. Medido: cambiar `actor` a
 * `urn:lore-hm:peer:ATACANTE` dejaba la suite entera VERDE.
 *
 * Definición del sello (la única; cualquier otra es una máquina distinta):
 *
 *   payload sellado := el objeto wire SIN la clave `huellaLedger`,
 *                      serializado con claves ordenadas lexicográficamente
 *                      de forma recursiva, indentación de 2 espacios y
 *                      salto de línea final, en UTF-8.
 *   huellaLedger.digest := sha256(bytes del payload sellado), hex minúscula.
 *
 * Consecuencias buscadas:
 *  - El sello liga el **contenido**, no el formato: reordenar claves o
 *    reindentar el fichero no mueve la huella.
 *  - Cualquier cambio de valor en cualquier clave del wire **sí** la mueve.
 *  - La vista JSON-LD no participa: no entra en el payload y no puede
 *    alterar la huella (DIC-4).
 *
 * Uso:
 *   node sello-dic4.mjs            # imprime huella recalculada y almacenada
 *   node sello-dic4.mjs --sellar   # reescribe el fixture con su huella
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const FIXTURE_WIRE = join(
  __dirname,
  '..',
  'fixtures',
  'wire-activity.sealed.json',
);

export const LEDGER_KEY = 'huellaLedger';
export const DEFAULT_ALG = 'sha256';

/** Ordena claves recursivamente (los arrays conservan su orden: es significativo). */
function canonicalizar(value) {
  if (Array.isArray(value)) return value.map(canonicalizar);
  if (value && typeof value === 'object') {
    const out = {};
    for (const k of Object.keys(value).sort()) out[k] = canonicalizar(value[k]);
    return out;
  }
  return value;
}

/** Bytes exactos sobre los que se calcula la huella. */
export function sealedBytes(wire) {
  const { [LEDGER_KEY]: _omitido, ...resto } = wire;
  return Buffer.from(`${JSON.stringify(canonicalizar(resto), null, 2)}\n`, 'utf8');
}

/** sha256 hex del payload sellado. */
export function digestOf(wire) {
  return createHash(DEFAULT_ALG).update(sealedBytes(wire)).digest('hex');
}

/** Huella completa lista para escribir en el wire. */
export function huellaOf(wire) {
  return { alg: DEFAULT_ALG, digest: digestOf(wire) };
}

export function leerWire(path = FIXTURE_WIRE) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

/** Reescribe el fichero con su huella recalculada (herramienta, no gate). */
export function sellar(path = FIXTURE_WIRE) {
  const wire = leerWire(path);
  const { [LEDGER_KEY]: _viejo, ...resto } = wire;
  const sellado = { ...resto, [LEDGER_KEY]: huellaOf(resto) };
  writeFileSync(path, `${JSON.stringify(sellado, null, 2)}\n`, 'utf8');
  return sellado[LEDGER_KEY];
}

const invocadoDirecto =
  process.argv[1] && import.meta.url.endsWith(process.argv[1].split(/[\\/]/).pop());
if (invocadoDirecto) {
  if (process.argv.includes('--sellar')) {
    const h = sellar();
    console.log(`sellado: ${h.alg}:${h.digest}`);
  } else {
    const wire = leerWire();
    console.log(`recalculada: ${DEFAULT_ALG}:${digestOf(wire)}`);
    console.log(`almacenada:  ${wire[LEDGER_KEY]?.digest ?? '(ausente)'}`);
  }
}
