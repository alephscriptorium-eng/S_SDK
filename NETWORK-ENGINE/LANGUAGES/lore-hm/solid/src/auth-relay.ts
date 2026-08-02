/**
 * WAC/ACP relay sin autoridad: H emite/transporta; el Pod evalúa.
 */

import type { Iri } from '../../src/brands.js';

export interface RelayToken {
  readonly capability: string;
  readonly issuedBy: Iri;
  /** H transporta — no implica grant del Pod. */
  readonly relayedBy: Iri;
  readonly scope: readonly string[];
  readonly expiresAt: string;
  readonly expired: boolean;
  readonly signaturePresent: boolean;
}

export interface AuthDecision {
  readonly allow: boolean;
  readonly reason: string;
}

/**
 * Semántica fail-closed del relay (antes de WAC/ACP real del Pod).
 * Ausencia · expiración · firma faltante · scope insuficiente → deny.
 */
export function relayPreconditions(
  token: RelayToken | undefined,
  requiredScope: string,
): AuthDecision {
  if (!token) {
    return { allow: false, reason: 'absent-token' };
  }
  if (token.expired) {
    return { allow: false, reason: 'expired-token' };
  }
  if (!token.signaturePresent) {
    return { allow: false, reason: 'missing-signature' };
  }
  if (!token.scope.includes(requiredScope)) {
    return { allow: false, reason: 'insufficient-scope' };
  }
  // PASS de precondiciones de relay ≠ grant: el Pod aún debe evaluar ACL.
  return { allow: true, reason: 'relay-preconditions-ok-pod-must-evaluate' };
}

/** H no puede forzar allow saltándose el Pod. */
export function hostCannotOverridePod(
  hostWantsAllow: boolean,
  podDecision: AuthDecision,
): AuthDecision {
  if (hostWantsAllow && !podDecision.allow) {
    return { allow: false, reason: 'host-relay-without-authority' };
  }
  return podDecision;
}
