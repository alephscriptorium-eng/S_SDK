/**
 * Cadena legal: declared → leased → inflated → ready.
 * Demo L02 — no runtime OASIS.
 */

import { asIri } from '../../src/brands.js';
import { transition, type UnitState } from '../../src/tipestate.js';

const declared: UnitState<'declared'> = {
  iri: asIri('urn:lore-hm:unit:fm-mock-1'),
  phase: 'declared',
};

const leased = transition(declared, 'leased');
const inflated = transition(leased, 'inflated');
const ready = transition(inflated, 'ready');

export const legalChain = { declared, leased, inflated, ready } as const;
