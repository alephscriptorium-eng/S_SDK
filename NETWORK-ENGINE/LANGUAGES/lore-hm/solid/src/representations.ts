/**
 * Dos representaciones coordinadas: wire autoritativo · vista no autoritativa.
 */

import type { Iri } from '../../src/brands.js';
import type { HuellaLedger } from './hash-dic4.js';
import type { CredentialKind } from './identity.js';
import type { EventPlane } from './planes.js';

/** Wire JSON ejecutable — autoritativo para corrida y hashes. */
export interface WireActivity {
  readonly kind: 'WireActivity';
  readonly iri: Iri;
  readonly type: string;
  readonly actor: Iri;
  readonly object?: Iri;
  readonly causedBy?: Iri;
  readonly published?: string;
  readonly plane?: EventPlane;
  readonly identity?: {
    readonly webId?: string;
    readonly peerCard?: string;
    readonly ssbId?: string;
    readonly missing?: readonly CredentialKind[];
  };
  readonly sealedBytesEncoding: 'utf8';
  readonly huellaLedger: HuellaLedger;
  readonly provenance?: {
    readonly wasAssociatedWith?: string;
    readonly wasDerivedFrom?: string;
    readonly wasGeneratedBy?: string;
  };
}

/**
 * Vista JSON-LD/RDF — NO autoritativa salvo canonicalización semántica explícita.
 * PROHIBIDO: campo huellaLedger (DIC-4).
 */
export interface JsonLdView {
  readonly '@context':
    | string
    | Record<string, unknown>
    | Array<string | Record<string, unknown>>;
  readonly '@id': string;
  readonly '@type': string | string[];
  readonly actor?: string;
  readonly object?: string;
  readonly published?: string;
  readonly identifier?: string;
  readonly wasGeneratedBy?: string;
  readonly wasDerivedFrom?: string;
  readonly wasAssociatedWith?: string;
  /** Marca de no-autoridad de la vista. */
  readonly authoritative: false;
}
