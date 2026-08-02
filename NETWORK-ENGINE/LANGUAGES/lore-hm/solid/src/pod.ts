/**
 * PodProtocol ≠ providers.
 * LocalPodProvider = simulación playground; SolidPodProvider = futuro CSS/LDP.
 * Sólo el servidor Pod decide acceso.
 */

import type { Iri } from '../../src/brands.js';
import type { AuthDecision, RelayToken } from './auth-relay.js';

export interface PodResource {
  readonly uri: Iri;
  readonly contentType?: string;
  readonly body?: string;
}

export interface PodProtocol {
  readonly kind: 'PodProtocol';
  getResource(uri: Iri, token?: RelayToken): Promise<PodResource | AuthDecision>;
  putResource(
    uri: Iri,
    resource: PodResource,
    token?: RelayToken,
  ): Promise<AuthDecision>;
  /** Evaluación ACL — autoridad del Pod, no de H. */
  evaluateAccess(uri: Iri, token?: RelayToken): Promise<AuthDecision>;
}

export interface LocalPodProvider extends PodProtocol {
  readonly provider: 'LocalPodProvider';
  /** Marca explícita de simulación — nunca omitir. */
  readonly simulation: true;
}

export interface SolidPodProvider extends PodProtocol {
  readonly provider: 'SolidPodProvider';
  /** v2 CSS/LDP — no implementado en L03. */
  readonly implemented: false;
  readonly target: 'CSS/LDP';
}

/** Factory de provider local simulado (playground). */
export function createLocalPodProvider(opts: {
  rootIri: Iri;
}): LocalPodProvider {
  const store = new Map<string, PodResource>();
  return {
    kind: 'PodProtocol',
    provider: 'LocalPodProvider',
    simulation: true,
    async evaluateAccess(_uri, token) {
      if (!token || token.expired) {
        return { allow: false, reason: 'missing-or-expired-token' };
      }
      return { allow: true, reason: 'local-simulation-acl' };
    },
    async getResource(uri, token) {
      const decision = await this.evaluateAccess(uri, token);
      if (!decision.allow) return decision;
      return store.get(uri) ?? { uri };
    },
    async putResource(uri, resource, token) {
      const decision = await this.evaluateAccess(uri, token);
      if (!decision.allow) return decision;
      store.set(uri, { ...resource, uri });
      return decision;
    },
  };
}

/**
 * Stub del adaptador futuro. Llamarlo es error explícito — no fingir CSS.
 */
export function createSolidPodProviderStub(): SolidPodProvider {
  return {
    kind: 'PodProtocol',
    provider: 'SolidPodProvider',
    implemented: false,
    target: 'CSS/LDP',
    async evaluateAccess() {
      throw new Error('SolidPodProvider no implementado (peldaño v2)');
    },
    async getResource() {
      throw new Error('SolidPodProvider no implementado (peldaño v2)');
    },
    async putResource() {
      throw new Error('SolidPodProvider no implementado (peldaño v2)');
    },
  };
}
