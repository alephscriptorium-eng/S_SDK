/**
 * Capa SOLID LORE-HM · WP-SDK-L03
 * Diseño + contratos mínimos. No runtime CSS. Z_SDK#55 = insumo OPEN.
 */

export {
  type CredentialKind,
  type WebIdCredential,
  type PeerCardCredential,
  type SsbIdCredential,
  type SolidCredential,
  type IdentityBundle,
  type IdentityLink,
  degradeHonestly,
  planeAllows,
} from './identity.js';

export {
  type HashAlg,
  type HuellaLedger,
  type SemanticFamilyPermit,
  DEFAULT_WIRE_ALG,
  ledgerAlgFor,
  assertViewDoesNotDefineLedger,
  huellaSha256,
} from './hash-dic4.js';

export {
  type PodResource,
  type PodProtocol,
  type LocalPodProvider,
  type SolidPodProvider,
  createLocalPodProvider,
  createSolidPodProviderStub,
} from './pod.js';

export {
  type RelayToken,
  type AuthDecision,
  relayPreconditions,
  hostCannotOverridePod,
} from './auth-relay.js';

export {
  type EventPlane,
  type PlaneEvent,
  type CorrelationKeys,
  correlate,
  forbidCrossReplay,
} from './planes.js';

export {
  type McpResourceRef,
  type PodResourceRef,
  type McpToolInvocation,
  type BridgedActivityDraft,
  resourcePassthrough,
  toolToActivityDraft,
  assertNoAutoRdfPredicate,
} from './bridge-mcp.js';

export { type WireActivity, type JsonLdView } from './representations.js';

export {
  type ConformanceTier,
  type ConformanceRung,
  CONFORMANCE_LADDER,
  CURRENT_IMPLEMENTED_TIER,
} from './conformance.js';

/** Ancla anti-afirmación: Z_SDK#55 no está implementado aquí. */
export const Z_SDK_55_STATUS = {
  url: 'https://github.com/alephscriptorium-eng/Z_SDK/pull/55',
  state: 'OPEN',
  headCommit: '34613c1b9110ef27ddee53950d21b88b17bdc9',
  role: 'insumo-por-curar',
  implementedInThisTree: false,
} as const;
