/**
 * Puerta (host) — verifica peercard firmada + startpack default.
 * Consume solo @zeus/protocol del canal real (no file:, no embajador-kit).
 */

import assert from 'node:assert/strict';
import { verifyTravelingPeerCard } from '@zeus/protocol/peer-card-seat';
import { isPeerCardFresh, roleFromPeerCard } from '@zeus/protocol';

export const DEFAULT_STARTPACK_REF = 'startpack-ciudad-v0.1.0';

/**
 * @param {object} credencial
 * @returns {{ ok: boolean, errors: string[], startpackRef: string|null, ssbId: string|null, role: string|null, seatOk: boolean }}
 */
export function entrarPorPuerta(credencial) {
  const errors = [];
  const peerCard = credencial?.peerCard;
  if (!peerCard) {
    return {
      ok: false,
      errors: ['peer-card missing'],
      startpackRef: null,
      ssbId: null,
      role: null,
      seatOk: false,
    };
  }

  const seat = verifyTravelingPeerCard(peerCard);
  if (!seat.ok) {
    errors.push(`seat: ${seat.error ?? 'verify failed'}`);
  }

  if (!isPeerCardFresh(peerCard)) {
    errors.push('peer-card: expired or not fresh');
  }

  const startpackRef =
    credencial?.startpack?.ref ?? peerCard?.startpack?.ref ?? null;
  if (startpackRef !== DEFAULT_STARTPACK_REF) {
    errors.push(
      `startpack: expected ${DEFAULT_STARTPACK_REF}, got ${startpackRef}`,
    );
  }

  if (credencial?.signature?.pending === true) {
    errors.push('signature: pending stub not allowed in tick-cero');
  }

  const role = roleFromPeerCard(peerCard) ?? credencial?.role ?? null;

  return {
    ok: errors.length === 0 && seat.ok,
    errors,
    startpackRef,
    ssbId: peerCard.ssbId ?? null,
    role,
    seatOk: seat.ok === true,
  };
}

/** Self-check when run directly with a JSON credencial path via argv. */
export function assertEntrada(entry) {
  assert.equal(entry.ok, true, entry.errors?.join('; '));
  assert.equal(entry.startpackRef, DEFAULT_STARTPACK_REF);
  assert.equal(entry.seatOk, true);
  assert.ok(entry.ssbId);
  assert.equal(entry.role, 'player');
}
