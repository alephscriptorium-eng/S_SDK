/**
 * Transición ILEGAL al lado del flat-config.attempt.json.
 * declared ↛ ready (salta leased/inflated).
 *
 * Con tsc estricto, la línea @ts-expect-error es la prueba: el compilador
 * rechaza lo que el JSON plano aceptaría.
 */

import { asIri } from '../../src/brands.js';
import { transition, type UnitState } from '../../src/tipestate.js';

const declared: UnitState<'declared'> = {
  iri: asIri('urn:lore-hm:unit:fm-mock-1'),
  phase: 'declared',
};

// Misma intención que flat-config.attempt.json → illegalJump
// @ts-expect-error LORE-HM tipestate: declared cannot jump to ready
export const illegal = transition(declared, 'ready');
