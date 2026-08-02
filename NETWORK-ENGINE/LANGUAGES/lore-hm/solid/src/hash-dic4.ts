/**
 * Política DIC-4: sha256 de bytes sellados por defecto;
 * RDFC-1.0 sólo donde igualdad semántica sea requisito medido.
 * La vista JSON-LD no altera huellaLedger.
 */

import { asDigest, type Digest } from '../../src/brands.js';

export type HashAlg = 'sha256' | 'rdfc-1.0';

export interface HuellaLedger {
  readonly alg: HashAlg;
  readonly digest: Digest;
}

/** Familia con canonicalización semántica explícita (activación medida). */
export interface SemanticFamilyPermit {
  readonly family: string;
  readonly alg: 'rdfc-1.0';
  readonly measuredRequirement: true;
  readonly decisionRef: string;
}

export const DEFAULT_WIRE_ALG: HashAlg = 'sha256';

/**
 * Pie de ledger del wire. Default siempre sha256.
 * RDFC-1.0 exige permiso de familia medida — si no, throw.
 */
export function ledgerAlgFor(
  requested: HashAlg,
  permit?: SemanticFamilyPermit,
): HashAlg {
  if (requested === 'sha256') return 'sha256';
  if (
    requested === 'rdfc-1.0' &&
    permit?.alg === 'rdfc-1.0' &&
    permit.measuredRequirement === true
  ) {
    return 'rdfc-1.0';
  }
  throw new Error(
    'DIC-4: rdfc-1.0 sólo con SemanticFamilyPermit medido; default sha256',
  );
}

/**
 * La vista no es entrada del ledger. Cualquier intento de “sellar vista”
 * como huellaLedger es un error de contrato.
 */
export function assertViewDoesNotDefineLedger(view: unknown): void {
  if (view && typeof view === 'object' && 'huellaLedger' in view) {
    throw new Error(
      'DIC-4: la vista JSON-LD no define ni altera huellaLedger',
    );
  }
}

/** Helper de tipado: construir huella sha256 a partir de hex ya calculado. */
export function huellaSha256(hexDigest: string): HuellaLedger {
  return { alg: 'sha256', digest: asDigest(hexDigest) };
}
