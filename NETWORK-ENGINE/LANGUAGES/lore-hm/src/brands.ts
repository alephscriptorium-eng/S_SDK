/**
 * IRIs y digests branded — gramática TypeScript declarativa (sin parser).
 * WP-SDK-L02 · incubación lore-hm (no package @logos/*).
 */

declare const IriBrand: unique symbol;
declare const DigestBrand: unique symbol;

/** IRI lógica branded (no string plano intercambiable). */
export type Iri = string & { readonly [IriBrand]: 'Iri' };

/** Digest sha256 (u homólogo) branded. */
export type Digest = string & { readonly [DigestBrand]: 'Digest' };

/**
 * `as unknown as` es obligatorio, no cosmético: `S extends string` no se
 * solapa con el tipo branded, así que el cast directo es `TS2352` (con y sin
 * `strict`). Antes eran `value as Iri` / `value as Digest` y la lengua **no
 * compilaba** — nunca se notó porque el flujo no ejecutaba ningún typecheck.
 */
export function asIri<S extends string>(value: S): Iri {
  return value as unknown as Iri;
}

export function asDigest<S extends string>(value: S): Digest {
  return value as unknown as Digest;
}
