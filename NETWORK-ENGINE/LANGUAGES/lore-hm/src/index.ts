/**
 * Punto de entrada de incubación LORE-HM.
 * NO publicar como @logos/lore-hm hasta puerta de promoción.
 */

export {
  NUCLEAR_PRIMITIVES,
  assertNuclearCount,
  type NuclearPrimitiveName,
  type Primitive,
  type Peer,
  type Unit,
  type Lease,
  type Activity,
  type Artifact,
  type PeerRole,
  type PrimitiveKind,
} from './primitives.js';

export {
  PROJECTIONS,
  projectUnitIntoPod,
  asLinea,
  type Projection,
  type ProjectionName,
  type Pod,
  type Linea,
  type Grafo,
  type Universo,
  type Corto,
  type Barrio,
  type DocumentMachine,
} from './projections.js';

export { asIri, asDigest, type Iri, type Digest } from './brands.js';

export {
  transition,
  describePhase,
  TIPESTATE_RULE,
  type UnitPhase,
  type UnitState,
  type NextPhase,
} from './tipestate.js';
