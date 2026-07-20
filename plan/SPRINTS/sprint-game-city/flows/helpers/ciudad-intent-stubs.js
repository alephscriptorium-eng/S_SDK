/**
 * Stubs de intents ciudad (Z03) + envelope wire para Mano/Ciudadano.
 *
 * Z03 aún no mergeó el pack `ciudad`; pozo no tiene walk/wake/announce.
 * Contrato documentado (ficha WP-Z03 + startpack-ciudad load.test):
 *   walk    { linkId, direction: 'a-to-b'|'b-to-a' }
 *   wake    { barrioId }
 *   announce { zone?, text? }
 *
 * game default: 'ciudad' (override ZEUS_GAME_ID / globalContext).
 */

'use strict';

const { makeIntent, makeOperatorIntent } = require('./operator-bridge-port.js');

/** Calles DRY del startpack-ciudad (seed lectura; no se importa el pack). */
const STREETS = Object.freeze([
  { id: 'calle-plaza-zigurat', from: 'plaza', to: 'zigurat' },
  { id: 'calle-funcional', from: 'zigurat', to: 'editores' },
  { id: 'calle-tecnico', from: 'zigurat', to: 'red-stream' },
  { id: 'calle-plugins', from: 'zigurat', to: 'runtime-mcp' },
  { id: 'calle-mcp-vivos', from: 'zigurat', to: 'lore-voz' },
  { id: 'calle-infra', from: 'zigurat', to: 'infra-ui' }
]);

const CATALOG = Object.freeze({
  walk: { roles: ['player'], description: 'Caminar por calle entre anchors' },
  wake: { roles: ['player'], description: 'Despertar barrio latente' },
  announce: { roles: ['player'], description: 'Presencia / voz en plaza' }
});

/**
 * Ciudadano de muestra del censo (print-agentes.txt · .github_V1/agents/aleph.agent.md).
 * F5 usa esta identidad; f6 repartirá los 169.
 */
const SAMPLE_CITIZEN = Object.freeze({
  censusId: 'aleph',
  agentPath: '.github_V1/agents/aleph.agent.md',
  displayName: 'aleph',
  homeZone: 'plaza'
});

function resolveGame(opts = {}) {
  const g = opts.game || process.env.ZEUS_GAME_ID || 'ciudad';
  if (typeof g !== 'string' || !g) throw new TypeError('game requerido');
  return g;
}

function isIntentShaped(payload) {
  if (!payload || typeof payload !== 'object') return false;
  if (typeof payload.actorId !== 'string' || !payload.actorId) return false;
  if (typeof payload.intent !== 'string' || !payload.intent) return false;
  if (typeof payload.game !== 'string' || !payload.game) return false;
  if (typeof payload.v !== 'number') return false;
  if (typeof payload.ts !== 'number') return false;
  return Object.prototype.hasOwnProperty.call(CATALOG, payload.intent);
}

function validateCiudadIntent(payload) {
  if (!isIntentShaped(payload)) {
    return { ok: false, error: 'intent_malformada' };
  }
  if (payload.intent === 'walk') {
    if (!payload.linkId || typeof payload.linkId !== 'string') {
      return { ok: false, error: 'walk_linkId_requerido' };
    }
    if (!['a-to-b', 'b-to-a'].includes(payload.direction)) {
      return { ok: false, error: 'walk_direction_invalida' };
    }
    const street = STREETS.find((s) => s.id === payload.linkId);
    if (!street) return { ok: false, error: 'walk_calle_desconocida', linkId: payload.linkId };
  }
  if (payload.intent === 'wake') {
    if (!payload.barrioId || typeof payload.barrioId !== 'string') {
      return { ok: false, error: 'wake_barrioId_requerido' };
    }
  }
  return { ok: true };
}

function makeWalkIntent(actorId, { linkId, direction = 'a-to-b' } = {}, opts = {}) {
  return makeIntent(actorId, 'walk', { linkId, direction }, {
    from: opts.from ?? actorId,
    game: resolveGame(opts),
    role: opts.role ?? 'player',
    ...(opts.ts != null ? { ts: opts.ts } : {})
  });
}

function makeWakeIntent(actorId, { barrioId } = {}, opts = {}) {
  return makeIntent(actorId, 'wake', { barrioId }, {
    from: opts.from ?? actorId,
    game: resolveGame(opts),
    role: opts.role ?? 'player',
    ...(opts.ts != null ? { ts: opts.ts } : {})
  });
}

function makeAnnounceIntent(actorId, { zone = 'plaza', text = '' } = {}, opts = {}) {
  return makeIntent(actorId, 'announce', { zone, text }, {
    from: opts.from ?? actorId,
    game: resolveGame(opts),
    role: opts.role ?? 'player',
    ...(opts.ts != null ? { ts: opts.ts } : {})
  });
}

/**
 * Payload para alephscript-core-client (ROOM_MESSAGE → event `intent`).
 * Misma forma que player-mcp-kit room-bridge: client.room('intent', payload, room).
 */
function toRoomIntentCommand(intentPayload, room) {
  return {
    command: 'room_message',
    event: 'intent',
    room: room || process.env.ZEUS_GAME_ROOM || process.env.ZEUS_POZO_ROOM || 'POZO_DEMO',
    data: intentPayload
  };
}

/** Pick random street hop from current zone (random-walk; Z10 caminos = futuro). */
function nextRandomWalk(currentZone = 'plaza') {
  const candidates = STREETS.filter(
    (s) => s.from === currentZone || s.to === currentZone
  );
  const pool = candidates.length ? candidates : STREETS;
  const street = pool[Math.floor(Math.random() * pool.length)];
  const goingForward = street.from === currentZone || currentZone === 'plaza';
  const direction = goingForward && street.from === currentZone ? 'a-to-b' : 'b-to-a';
  // If currentZone is the `to` side, walk back
  const dir =
    street.from === currentZone ? 'a-to-b' : street.to === currentZone ? 'b-to-a' : direction;
  const nextZone = dir === 'a-to-b' ? street.to : street.from;
  return { linkId: street.id, direction: dir, nextZone, from: street.from, to: street.to };
}

module.exports = {
  STREETS,
  CATALOG,
  SAMPLE_CITIZEN,
  makeIntent,
  makeOperatorIntent,
  makeWalkIntent,
  makeWakeIntent,
  makeAnnounceIntent,
  isIntentShaped,
  validateCiudadIntent,
  toRoomIntentCommand,
  nextRandomWalk,
  resolveGame
};
