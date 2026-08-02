/**
 * Bridge MCP ↔ Solid.
 * resources = passthrough URI; tools = actividades; tool name ≠ predicado RDF auto.
 */

import type { Iri } from '../../src/brands.js';

export interface McpResourceRef {
  readonly uri: Iri;
}

export interface PodResourceRef {
  readonly uri: Iri;
}

/** Passthrough: la misma URI. */
export function resourcePassthrough(mcp: McpResourceRef): PodResourceRef {
  return { uri: mcp.uri };
}

export interface McpToolInvocation {
  readonly toolName: string;
  readonly arguments?: Record<string, unknown>;
}

/**
 * Un tool puede producir una Activity hacia el Pod.
 * El nombre del tool NUNCA se convierte automáticamente en predicado RDF.
 */
export interface BridgedActivityDraft {
  readonly type: string;
  readonly fromTool: string;
  readonly rdfPredicateAutoDerived: false;
}

export function toolToActivityDraft(
  inv: McpToolInvocation,
  registeredAsType: string,
): BridgedActivityDraft {
  if (registeredAsType === inv.toolName) {
    // Permitido sólo si el registro L04/vocab explícitamente iguala nombres;
    // aún así rdfPredicateAutoDerived permanece false (no hay auto-predicado).
  }
  return {
    type: registeredAsType,
    fromTool: inv.toolName,
    rdfPredicateAutoDerived: false,
  };
}

/** Guardia de contrato: jamás promover tool name a predicado RDF. */
export function assertNoAutoRdfPredicate(draft: BridgedActivityDraft): void {
  if (draft.rdfPredicateAutoDerived !== false) {
    throw new Error('bridge: tool name no puede auto-derivar predicado RDF');
  }
}
