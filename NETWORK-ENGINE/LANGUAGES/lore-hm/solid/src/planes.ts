/**
 * Room/L2 y Solid Notifications/L1 — planos separados.
 * Correlación por activity id / trace / provenance; nunca reenvío cruzado.
 */

import type { Iri } from '../../src/brands.js';

export type EventPlane = 'room-l2' | 'solid-l1';

export interface PlaneEvent {
  readonly plane: EventPlane;
  readonly eventId: Iri;
  readonly activityId: Iri;
  readonly traceId?: string;
  readonly provenanceRef?: Iri;
  readonly payload: unknown;
}

export interface CorrelationKeys {
  readonly activityId: Iri;
  readonly traceId?: string;
  readonly provenanceRef?: Iri;
}

/** Correlacionar sin confundir planos. */
export function correlate(
  a: PlaneEvent,
  b: PlaneEvent,
): CorrelationKeys | null {
  if (a.plane === b.plane) {
    return null; // misma plano: no es correlación cruzada
  }
  if (a.activityId !== b.activityId) return null;
  const traceId = a.traceId ?? b.traceId;
  const provenanceRef = a.provenanceRef ?? b.provenanceRef;
  // Clave ausente ≠ clave con `undefined` bajo `exactOptionalPropertyTypes`.
  return {
    activityId: a.activityId,
    ...(traceId !== undefined ? { traceId } : {}),
    ...(provenanceRef !== undefined ? { provenanceRef } : {}),
  };
}

/**
 * Prohibido: reenviar un evento de un plano como si fuera del otro.
 * Devuelve el evento intacto o lanza.
 */
export function forbidCrossReplay(
  event: PlaneEvent,
  asPlane: EventPlane,
): PlaneEvent {
  if (event.plane !== asPlane) {
    throw new Error(
      `planos separados: no reenviar ${event.plane} como ${asPlane}`,
    );
  }
  return event;
}
