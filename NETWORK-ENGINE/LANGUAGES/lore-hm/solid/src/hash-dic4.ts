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
  if (!/^[a-f0-9]{64}$/.test(hexDigest)) {
    throw new Error(`DIC-4: digest sha256 malformado: ${hexDigest}`);
  }
  return { alg: 'sha256', digest: asDigest(hexDigest) };
}

/**
 * Clave que **nunca** entra en el payload sellado: la huella no se hashea a sí
 * misma. La canonicalización de referencia vive en
 * `solid/scripts/sello-dic4.mjs` (`sealedBytes`) y está documentada en
 * `docs/DIC-4-HASH.md`.
 */
export const LEDGER_KEY = 'huellaLedger' as const;

/**
 * Un wire sellado DEBE traer su huella. Antes de WP-ZV-S el fixture llamado
 * «sealed» no la traía y ningún gate lo notaba.
 */
export function assertSealedPayloadShape(
  wire: unknown,
): asserts wire is Record<string, unknown> & { huellaLedger: HuellaLedger } {
  if (!wire || typeof wire !== 'object') {
    throw new Error('DIC-4: wire sellado debe ser un objeto');
  }
  const h = (wire as Record<string, unknown>)[LEDGER_KEY];
  if (!h || typeof h !== 'object') {
    throw new Error('DIC-4: wire sellado sin huellaLedger');
  }
  const { alg, digest } = h as { alg?: unknown; digest?: unknown };
  if (alg !== 'sha256' && alg !== 'rdfc-1.0') {
    throw new Error(`DIC-4: huellaLedger.alg inválido: ${String(alg)}`);
  }
  if (typeof digest !== 'string' || !/^[a-f0-9]{64}$/.test(digest)) {
    throw new Error('DIC-4: huellaLedger.digest no es sha256 de 64 hex');
  }
}
