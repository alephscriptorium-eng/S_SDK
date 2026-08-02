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

export function asIri<S extends string>(value: S): Iri {
  return value as Iri;
}

export function asDigest<S extends string>(value: S): Digest {
  return value as Digest;
}
