/**
 * Proyecciones — NO son primitivas.
 * Pod, Línea, Grafo, Universo, Corto, Barrio, Document Machine.
 */

import type { Artifact, Unit } from './primitives.js';
import type { Iri } from './brands.js';

export const PROJECTIONS = [
  'Pod',
  'Linea',
  'Grafo',
  'Universo',
  'Corto',
  'Barrio',
  'DocumentMachine',
] as const;

export type ProjectionName = (typeof PROJECTIONS)[number];

/** Pod = almacenamiento de Unit (proyección). */
export interface Pod {
  readonly projection: 'Pod';
  readonly iri: Iri;
  readonly stores: readonly Iri[]; // Unit IRIs
}

/** Clases de Artifact. */
export interface Linea {
  readonly projection: 'Linea';
  readonly artifact: Artifact;
}

export interface Grafo {
  readonly projection: 'Grafo';
  readonly artifact: Artifact;
}

export interface Universo {
  readonly projection: 'Universo';
  readonly artifact: Artifact;
}

export interface Corto {
  readonly projection: 'Corto';
  readonly artifact: Artifact;
}

/** Barrio = escenario / contenido (no holón, no primitiva). */
export interface Barrio {
  readonly projection: 'Barrio';
  readonly iri: Iri;
  readonly label: string;
}

/** Document Machine = capacidad/provider del barrio. */
export interface DocumentMachine {
  readonly projection: 'DocumentMachine';
  readonly iri: Iri;
  readonly barrio: Iri;
  readonly contingency?: boolean;
}

export type Projection =
  | Pod
  | Linea
  | Grafo
  | Universo
  | Corto
  | Barrio
  | DocumentMachine;

/** Proyectar Unit → Pod slot (función de proyección). */
export function projectUnitIntoPod(unit: Unit, podIri: Iri): Pod {
  return {
    projection: 'Pod',
    iri: podIri,
    stores: [unit.iri],
  };
}

/** Proyectar Artifact → clase Linea. */
export function asLinea(artifact: Artifact): Linea {
  return { projection: 'Linea', artifact };
}
