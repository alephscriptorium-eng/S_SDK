/**
 * Identidad triple: WebID · PeerCard · ssbId — relacionadas, jamás fusionadas.
 * WP-SDK-L03 · contratos de incubación (sin runtime Solid).
 */

import type { Digest, Iri } from '../../src/brands.js';

/** Dimensiones de credencial — unión discriminada, no string colapsado. */
export type CredentialKind = 'webId' | 'peerCard' | 'ssbId';

export interface WebIdCredential {
  readonly kind: 'webId';
  readonly iri: Iri;
}

export interface PeerCardCredential {
  readonly kind: 'peerCard';
  readonly iri: Iri;
}

export interface SsbIdCredential {
  readonly kind: 'ssbId';
  readonly iri: Iri;
}

export type SolidCredential =
  | WebIdCredential
  | PeerCardCredential
  | SsbIdCredential;

/**
 * Bundle de credenciales relacionadas.
 * PROHIBIDO: un campo `id` que fusione las tres dimensiones.
 */
export interface IdentityBundle {
  readonly webId?: WebIdCredential;
  readonly peerCard?: PeerCardCredential;
  readonly ssbId?: SsbIdCredential;
  /** Dimensiones ausentes — degradación honesta, no invención. */
  readonly missing: readonly CredentialKind[];
}

/** Attestation verificable entre dos dimensiones (nunca implica fusión). */
export interface IdentityLink {
  readonly from: CredentialKind;
  readonly to: CredentialKind;
  readonly evidenceDigest: Digest;
  readonly issuedBy: Iri;
  readonly expiresAt?: string;
}

export function degradeHonestly(partial: {
  webId?: WebIdCredential;
  peerCard?: PeerCardCredential;
  ssbId?: SsbIdCredential;
}): IdentityBundle {
  const missing: CredentialKind[] = [];
  if (!partial.webId) missing.push('webId');
  if (!partial.peerCard) missing.push('peerCard');
  if (!partial.ssbId) missing.push('ssbId');
  // Degradación honesta = la clave AUSENTE, no la clave presente con
  // `undefined`. Con `exactOptionalPropertyTypes` son cosas distintas y sólo
  // la primera concuerda con `missing`.
  return {
    ...(partial.webId !== undefined ? { webId: partial.webId } : {}),
    ...(partial.peerCard !== undefined ? { peerCard: partial.peerCard } : {}),
    ...(partial.ssbId !== undefined ? { ssbId: partial.ssbId } : {}),
    missing,
  };
}

/** Fail-closed: el plano exige una dimensión que falta → deny. */
export function planeAllows(
  bundle: IdentityBundle,
  required: readonly CredentialKind[],
): boolean {
  return required.every((k) => !bundle.missing.includes(k));
}
