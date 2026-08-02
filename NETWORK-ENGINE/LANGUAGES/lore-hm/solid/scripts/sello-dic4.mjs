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
 * Definición del sello:
 *
 *   texto canónico  := el objeto wire SIN la clave `huellaLedger`, serializado
 *                      con claves ordenadas lexicográficamente de forma
 *                      recursiva, indentación de 2 espacios y salto final.
 *   payload sellado := los bytes UTF-8 de ese texto canónico.
 *   huellaLedger.digest := sha256(payload sellado), hex minúscula.
 *
 * ## Qué liga y qué NO liga — leer antes de confiar
 *
 * LIGA el **contenido** del wire, no su formato: reordenar claves o reindentar
 * el fichero no mueve la huella; cambiar el valor de **cualquier** clave sí,
 * `__proto__` incluido — la canonicalización usa `Object.create(null)` porque
 * copiar a un objeto literal hacía **desaparecer** esa clave del payload
 * (medido en WP-ZV-S: tres variantes de `__proto__` no movían la huella).
 *
 * **NO liga bytes arbitrarios del fichero.** El sello es sobre el *contenido
 * JSON*, no sobre los bytes en disco: por eso el wire se lee con `parseWire()`,
 * que **rechaza claves duplicadas**. Sin ese rechazo, un fichero con dos
 * `"actor"` —el primero del atacante, el segundo el legítimo— pasaba en VERDE,
 * porque `JSON.parse` aplica *último gana* y el digest seguía coincidiendo con
 * la huella almacenada aunque el fichero contuviera la suplantación.
 *
 * **NO normaliza Unicode.** El mismo texto en NFC y en NFD da huellas
 * **distintas**. Es coherente con sellar bytes, pero significa que una
 * normalización de editor mueve la huella: hay que resellar.
 *
 * **NO es una firma.** No hay clave, ni autoría, ni no-repudio. Un adversario
 * con permiso de escritura puede suplantar el `actor`, ejecutar `--sellar` y
 * actualizar `vista.identifier`, y quedará VERDE. Este sello detecta **deriva**
 * —edición sin resellar, vista rancia, mutación accidental—, no un adversario
 * con escritura. La autoría la aportan la revisión y la firma del commit, fuera
 * de este mecanismo.
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

// ---------------------------------------------------------------------------
// Rechazo de claves duplicadas (B1)
// ---------------------------------------------------------------------------
/**
 * Recorre el TEXTO JSON y localiza claves repetidas dentro de un mismo objeto.
 * `JSON.parse` las colapsa en silencio (último gana), así que sin este paso el
 * sello no puede afirmar nada sobre el fichero que se leyó.
 *
 * No es un parser completo: reconoce la estructura lo justo para saber qué
 * cadenas son claves. Si no sabe recorrer el texto, lanza (fail-closed).
 *
 * @throws {Error} si hay una clave repetida o el texto no es recorrible.
 */
export function assertSinClavesDuplicadas(text) {
  /** @type {{keys:Set<string>, esperandoClave:boolean, esObjeto:boolean}[]} */
  const pila = [];
  let i = 0;
  const n = text.length;

  const leerString = () => {
    let out = '';
    i++; // abre comilla
    while (i < n) {
      const c = text[i];
      if (c === '\\') {
        const e = text[i + 1];
        if (e === undefined) throw new Error('JSON: escape truncado');
        if (e === 'u') {
          out += String.fromCharCode(parseInt(text.slice(i + 2, i + 6), 16));
          i += 6;
        } else {
          out += { n: '\n', t: '\t', r: '\r', b: '\b', f: '\f' }[e] ?? e;
          i += 2;
        }
        continue;
      }
      if (c === '"') {
        i++;
        return out;
      }
      out += c;
      i++;
    }
    throw new Error('JSON: string sin cerrar');
  };

  while (i < n) {
    const c = text[i];
    if (c === '"') {
      const inicio = i;
      const s = leerString();
      const marco = pila[pila.length - 1];
      if (marco?.esObjeto && marco.esperandoClave) {
        if (marco.keys.has(s)) {
          const linea = text.slice(0, inicio).split('\n').length;
          throw new Error(
            `clave duplicada «${s}» en línea ${linea}: JSON.parse la colapsaría ` +
              '(último gana) y el sello dejaría de ligar el fichero',
          );
        }
        marco.keys.add(s);
        marco.esperandoClave = false;
      }
      continue;
    }
    if (c === '{') {
      pila.push({ keys: new Set(), esperandoClave: true, esObjeto: true });
      i++;
      continue;
    }
    if (c === '[') {
      pila.push({ keys: new Set(), esperandoClave: false, esObjeto: false });
      i++;
      continue;
    }
    if (c === '}' || c === ']') {
      if (pila.length === 0) throw new Error('JSON: cierre sin apertura');
      pila.pop();
      i++;
      continue;
    }
    if (c === ',') {
      const marco = pila[pila.length - 1];
      if (marco?.esObjeto) marco.esperandoClave = true;
      i++;
      continue;
    }
    i++; // `:`, espacios, números, true/false/null
  }
  if (pila.length !== 0) throw new Error('JSON: estructura sin cerrar');
}

/** Única entrada de lectura de un wire: parse + rechazo de claves duplicadas. */
export function parseWire(text) {
  assertSinClavesDuplicadas(text);
  return JSON.parse(text);
}

// ---------------------------------------------------------------------------
// Canonicalización
// ---------------------------------------------------------------------------
/**
 * Ordena claves recursivamente (los arrays conservan su orden: es significativo).
 * `Object.create(null)`: con `{}`, asignar la clave `__proto__` muta el
 * prototipo en vez de crear una propiedad, y la clave DESAPARECÍA del payload.
 */
function canonicalizar(value) {
  if (Array.isArray(value)) return value.map(canonicalizar);
  if (value && typeof value === 'object') {
    const out = Object.create(null);
    for (const k of Object.keys(value).sort()) out[k] = canonicalizar(value[k]);
    return out;
  }
  return value;
}

/** Copia sin la huella, preservando `__proto__` como clave propia. */
function sinHuella(wire) {
  const resto = Object.create(null);
  for (const k of Object.keys(wire)) {
    if (k === LEDGER_KEY) continue;
    resto[k] = wire[k];
  }
  return resto;
}

/** El texto exacto sobre el que se calcula la huella. */
export function canonicalText(wire) {
  return `${JSON.stringify(canonicalizar(sinHuella(wire)), null, 2)}\n`;
}

/** Bytes UTF-8 del texto canónico. */
export function sealedBytes(wire) {
  return Buffer.from(canonicalText(wire), 'utf8');
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
  return parseWire(readFileSync(path, 'utf8'));
}

/** Reescribe el fichero con su huella recalculada (herramienta, no gate). */
export function sellar(path = FIXTURE_WIRE) {
  const resto = sinHuella(leerWire(path));
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
