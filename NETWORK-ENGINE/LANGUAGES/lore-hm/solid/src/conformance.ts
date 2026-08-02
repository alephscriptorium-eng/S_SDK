/**
 * Peldaños de conformidad — qué afirma y qué NO garantiza cada uno.
 */

export type ConformanceTier = 'v1' | 'v1.1' | 'v2' | 'v3';

export interface ConformanceRung {
  readonly tier: ConformanceTier;
  readonly affirms: readonly string[];
  readonly doesNotGuarantee: readonly string[];
}

export const CONFORMANCE_LADDER: readonly ConformanceRung[] = [
  {
    tier: 'v1',
    affirms: [
      'LocalPodProvider simulation=true',
      'wire JSON + JSON Schema + sha256 bytes seal',
      'identidad triple tipada con degradación honesta',
      'planos room-l2 / solid-l1 separados en contrato',
      'bridge MCP rules tipadas',
    ],
    doesNotGuarantee: [
      'CSS/LDP real',
      'WebID federado',
      'WAC/ACP en servidor Solid',
      'Solid Notifications',
      'federación',
      'igualdad semántica RDF',
      'vista autoritativa',
    ],
  },
  {
    tier: 'v1.1',
    affirms: [
      'vista JSON-LD + shapes SHACL',
      'reuso AS2/PROV-O/DCTERMS',
      'vista no autoritativa salvo familia medida',
    ],
    doesNotGuarantee: [
      'runtime CSS',
      'WebID/WAC productivos',
      'que expandir JSON-LD cambie huellaLedger',
      'federación',
    ],
  },
  {
    tier: 'v2',
    affirms: [
      'SolidPodProvider CSS/LDP',
      'WebID + WAC/ACP evaluado en Pod',
      'relay H sin autoridad',
    ],
    doesNotGuarantee: [
      'federated Solid',
      'notifications L1 productivas',
      'override de ACL por H',
    ],
  },
  {
    tier: 'v3',
    affirms: [
      'Solid Notifications L1',
      'federación',
      'correlación con Room/L2 por activity/trace/provenance',
    ],
    doesNotGuarantee: [
      'sustitución de Room por Notifications',
      'fusión de planos',
      'autoridad de H sobre ACL remota',
    ],
  },
] as const;

export const CURRENT_IMPLEMENTED_TIER: ConformanceTier = 'v1';
