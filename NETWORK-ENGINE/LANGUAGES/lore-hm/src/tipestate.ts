/**
 * Tipestate de Unit — phantom states + transiciones legales.
 * Regla: no se puede materializar/ready sin pasar por leased.
 * Imposible de garantizar con JSON plano + schema de strings.
 */

import type { Iri } from './brands.js';

/** Estados phantom de Unit (ceremonia H/M). */
export type UnitPhase =
  | 'declared'
  | 'leased'
  | 'inflated'
  | 'ready'
  | 'running'
  | 'halted';

export interface UnitState<P extends UnitPhase = UnitPhase> {
  readonly iri: Iri;
  readonly phase: P;
}

type TransitionMap = {
  declared: 'leased';
  leased: 'inflated';
  inflated: 'ready';
  ready: 'running';
  running: 'halted';
  halted: never;
};

export type NextPhase<P extends UnitPhase> = TransitionMap[P];

/** Solo permite el sucesor legal; el resto es error de tipos. */
export function transition<P extends UnitPhase>(
  state: UnitState<P>,
  next: NextPhase<P> extends never ? never : NextPhase<P>,
): UnitState<NextPhase<P>> {
  return { iri: state.iri, phase: next as NextPhase<P> };
}

/**
 * Exhaustividad: todo UnitPhase debe aparecer en el switch.
 * Si se añade un phase sin caso, tsc falla (when enabled).
 */
export function describePhase(phase: UnitPhase): string {
  switch (phase) {
    case 'declared':
      return 'Unit anunciada, sin lease';
    case 'leased':
      return 'Lease concedida al Peer';
    case 'inflated':
      return 'Unit materializada bajo lease';
    case 'ready':
      return 'Lista para actividades M';
    case 'running':
      return 'Actividad en curso';
    case 'halted':
      return 'Detenida';
    default: {
      const _exhaustive: never = phase;
      return _exhaustive;
    }
  }
}

/**
 * Intento ilegal a nivel de tipos (documentado; no se invoca en runtime):
 *
 * ```ts
 * const u: UnitState<'declared'> = { iri: asIri('urn:unit:1'), phase: 'declared' };
 * // @ts-expect-error tipestate: declared ↛ ready (salta leased/inflated)
 * transition(u, 'ready');
 * ```
 */
export const TIPESTATE_RULE =
  'Unit no puede pasar a ready/running sin leased→inflated' as const;
