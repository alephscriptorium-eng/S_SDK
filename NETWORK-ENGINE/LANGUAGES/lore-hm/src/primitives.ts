/**
 * Ontología nuclear LORE-HM — exactamente cinco primitivas y ni una más.
 * H/M son roles/capacidades de Peer, NO tipos de ser.
 * WP-SDK-L02 · incubación (sin package @logos/lore-hm).
 */

import type { Digest, Iri } from './brands.js';

/**
 * ANCLA DE CONTEO — el script verificar-inception-l02.mjs exige length === 5.
 * Añadir un sexto nombre aquí DEBE hacer fallar el check local.
 */
export const NUCLEAR_PRIMITIVES = [
  'Peer',
  'Unit',
  'Lease',
  'Activity',
  'Artifact',
] as const;

export type NuclearPrimitiveName = (typeof NUCLEAR_PRIMITIVES)[number];

/** Const type param helper: fija el nombre de primitiva en el tipo. */
export type PrimitiveKind<N extends NuclearPrimitiveName = NuclearPrimitiveName> =
  N;

/** Roles H/M — capacidades de un Peer, no primitivas. */
export type PeerRole = 'H' | 'M' | 'observer';

export interface Peer {
  readonly kind: 'Peer';
  readonly iri: Iri;
  readonly roles: readonly PeerRole[];
}

export interface Unit {
  readonly kind: 'Unit';
  readonly iri: Iri;
  /** Tipestate vive en tipestate.ts; aquí solo el sujeto operable. */
  readonly label?: string;
}

export interface Lease {
  readonly kind: 'Lease';
  readonly iri: Iri;
  readonly grantee: Iri;
  readonly unit: Iri;
  readonly expiresAt: string;
  readonly revoked: boolean;
}

export interface Activity {
  readonly kind: 'Activity';
  readonly iri: Iri;
  readonly type: string;
  readonly actor: Iri;
  readonly object?: Iri;
  readonly causedBy?: Iri;
}

export interface Artifact {
  readonly kind: 'Artifact';
  readonly iri: Iri;
  readonly digest: Digest;
  readonly producedBy?: Iri;
}

/** Unión discriminada de las cinco primitivas. */
export type Primitive = Peer | Unit | Lease | Activity | Artifact;

export function assertNuclearCount(
  names: readonly string[] = NUCLEAR_PRIMITIVES,
): asserts names is typeof NUCLEAR_PRIMITIVES {
  if (names.length !== 5) {
    throw new Error(
      `LORE-HM nuclear ontology must have exactly 5 primitives, got ${names.length}`,
    );
  }
}
