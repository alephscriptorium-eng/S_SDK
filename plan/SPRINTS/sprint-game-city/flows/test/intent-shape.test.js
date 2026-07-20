/**
 * Offline CA: intents walk/wake/announce con forma @zeus/protocol + stubs Z03.
 * Sin red. Ejecutar: node --test test/intent-shape.test.js
 */
'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const {
  makeWalkIntent,
  makeWakeIntent,
  makeAnnounceIntent,
  validateCiudadIntent,
  toRoomIntentCommand,
  nextRandomWalk,
  SAMPLE_CITIZEN,
  createOperatorBridge
} = (() => {
  const stubs = require('../helpers/ciudad-intent-stubs.js');
  const bridge = require('../helpers/operator-bridge-port.js');
  return { ...stubs, createOperatorBridge: bridge.createOperatorBridge };
})();

describe('F4 Mano · intent shape (offline)', () => {
  it('walk envelope válido', () => {
    const intent = makeWalkIntent('nr-mano', {
      linkId: 'calle-plaza-zigurat',
      direction: 'a-to-b'
    });
    assert.equal(intent.game, 'ciudad');
    assert.equal(intent.intent, 'walk');
    assert.equal(intent.v, 1);
    assert.equal(validateCiudadIntent(intent).ok, true);
    const cmd = toRoomIntentCommand(intent, 'POZO_DEMO');
    assert.equal(cmd.command, 'room_message');
    assert.equal(cmd.event, 'intent');
    assert.equal(cmd.data.linkId, 'calle-plaza-zigurat');
  });

  it('wake envelope válido', () => {
    const intent = makeWakeIntent('nr-mano', { barrioId: 'vscode-extension' });
    assert.equal(validateCiudadIntent(intent).ok, true);
    assert.equal(intent.barrioId, 'vscode-extension');
  });

  it('announce envelope válido (ciudadano)', () => {
    const intent = makeAnnounceIntent(SAMPLE_CITIZEN.censusId, {
      zone: SAMPLE_CITIZEN.homeZone,
      text: `${SAMPLE_CITIZEN.displayName} presente`
    });
    assert.equal(validateCiudadIntent(intent).ok, true);
  });

  it('rechaza walk sin linkId', () => {
    const bad = makeWalkIntent('x', { linkId: 'calle-plaza-zigurat', direction: 'a-to-b' });
    delete bad.linkId;
    assert.equal(validateCiudadIntent(bad).ok, false);
  });

  it('operator-bridge port anuncia actors', () => {
    const b = createOperatorBridge();
    const msgs = b.onState({ ts: 1, actors: { aleph: { zone: 'plaza' } } });
    assert.equal(msgs.length, 1);
    assert.equal(msgs[0].fromBot, 'aleph');
    assert.equal(msgs[0].channel, 'sys');
    assert.deepEqual(b.onState({ ts: 2, actors: { aleph: { zone: 'plaza' } } }), []);
  });

  it('random-walk produce hop válido', () => {
    const hop = nextRandomWalk('plaza');
    assert.ok(hop.linkId);
    assert.ok(['a-to-b', 'b-to-a'].includes(hop.direction));
    const intent = makeWalkIntent(SAMPLE_CITIZEN.censusId, hop);
    assert.equal(validateCiudadIntent(intent).ok, true);
  });
});
