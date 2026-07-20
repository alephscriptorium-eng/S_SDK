/**
 * Port CJS de `@zeus/operator-bridge` (lib pura) para function-nodes Node-RED.
 * Fuente de lectura: HOLONES/.../zeus-sdk/packages/mesh/operator-bridge/src/index.mjs
 * — no se importa el paquete (userDir no depende de monorepo); se porta el contrato.
 *
 * Inbound: state/ledger → AlephMessage.
 * Outbound: makeOperatorIntent (caller inyecta `game`).
 */

'use strict';

const PROTOCOL_VERSION = 1;

const CHANNELS = Object.freeze({
  SYS: 'sys',
  APP: 'app',
  UI: 'ui',
  AGENT: 'agent',
  GAME: 'game'
});

const TYPES = Object.freeze({
  BOT_TO_CENTER: 'bot-to-center',
  CENTER_TO_BOT: 'center-to-bot',
  BOT_TO_BOT: 'bot-to-bot'
});

const HUB = 'CentralHub';

const WIRE = Object.freeze({
  STATE: Object.freeze(['state', 'arg:state']),
  INTENT: Object.freeze(['intent']),
  LEDGER: Object.freeze(['ledger', 'arg:ledger'])
});

const SCENE_IDS = Object.freeze({
  operator: 'operator',
  player3d: 'player-3d',
  firehose: 'firehose'
});

const LEDGER_CONTENT = Object.freeze({
  inspect: (e) => {
    const target = e.detail?.targetId ?? e.targetId ?? '—';
    const label = e.detail?.label ? ` (${e.detail.label})` : '';
    return `inspect ${target}${label}`;
  },
  label: (e) => `label ${e.detail?.label ?? '—'}`,
  cache: (e) => `cache ${e.detail?.registroId ?? e.ref?.id ?? '—'}`,
  curate: (e) => `curate ${e.detail?.registroId ?? '—'} → ${e.detail?.status ?? ''}`,
  milestone: (e) => `milestone ${e.detail?.registroId ?? '—'}`,
  excavate: (e) => `excavate ${e.detail?.corridorId ?? '—'}`,
  join: (e) => `${e.actorId ?? 'actor'} join`,
  objetivo: () => 'objetivo cumplido',
  burst: (e) => `burst ${e.detail?.riverId ?? ''}`,
  collapse: () => 'collapse',
  error: (e) => `error: ${e.detail?.message ?? e.detail?.reason ?? '—'}`,
  walk: (e) => `walk ${e.detail?.linkId ?? e.linkId ?? '—'}`,
  wake: (e) => `wake ${e.detail?.barrioId ?? e.barrioId ?? '—'}`,
  announce: (e) => `announce ${e.detail?.zone ?? e.zone ?? 'plaza'}`
});

function makeIntent(actorId, intent, args = {}, fromOrOpts = actorId) {
  const opts =
    typeof fromOrOpts === 'string' || fromOrOpts == null
      ? { from: fromOrOpts ?? actorId }
      : fromOrOpts;
  const {
    from = actorId,
    game,
    role,
    ts = Date.now(),
    v = PROTOCOL_VERSION
  } = opts;
  if (typeof game !== 'string' || !game) {
    throw new TypeError('makeIntent: game (string no vacío) es obligatorio');
  }
  const payload = { v, game, from, ts, actorId, intent, ...args };
  if (role != null) payload.role = role;
  return payload;
}

function makeOperatorIntent(actorId, intent, args = {}, opts = {}) {
  return makeIntent(actorId, intent, args, {
    from: opts.from ?? actorId,
    game: opts.game,
    role: 'operator',
    ...(opts.ts != null ? { ts: opts.ts } : {})
  });
}

function projectOperatorSlice(state = {}, _sceneId = SCENE_IDS.operator) {
  const actors = state.actors ?? {};
  const lines = state.lines ?? {};
  const objetivo = state.objetivo ?? null;
  const actorIds = Object.keys(actors);
  return {
    sceneId: state.sceneId ?? null,
    gamemapId: state.gamemapId ?? null,
    reason: state.reason ?? null,
    ts: state.ts ?? null,
    actorCount: actorIds.length,
    actors,
    lines,
    objetivo,
    maze: state.maze ?? null,
    contacts: state.contacts ?? null
  };
}

function createOperatorBridge({ hub = HUB } = {}) {
  let seq = 0;
  const announced = new Set();

  function make({ channel, from, to = hub, type = TYPES.BOT_TO_CENTER, content, ts }) {
    seq += 1;
    return {
      id: `${channel}-${seq}`,
      fromBot: from,
      toBot: to,
      channel,
      content: content ?? '',
      timestamp: Number.isFinite(ts) ? ts : 0,
      type
    };
  }

  function onState(state = {}) {
    const actors = state.actors ?? {};
    const ts = state.ts;
    const out = [];
    for (const id of Object.keys(actors)) {
      if (announced.has(id)) continue;
      announced.add(id);
      const zone = actors[id]?.zone;
      const tail = zone ? ` · ${zone}` : '';
      out.push(make({ channel: CHANNELS.SYS, from: id, content: `${id} presente${tail}`, ts }));
    }
    return out;
  }

  function onLedger(entry = {}) {
    const kind = entry.kind ?? entry.entryKind;
    if (!kind || typeof kind !== 'string') return [];
    const actorId = entry.actorId ?? entry.from ?? HUB;
    const formatter = LEDGER_CONTENT[kind];
    const content = formatter
      ? formatter(entry)
      : `${kind}${entry.detail ? ` ${JSON.stringify(entry.detail)}` : ''}`;
    return [make({ channel: CHANNELS.GAME, from: actorId, content, ts: entry.ts })];
  }

  function reset() {
    announced.clear();
  }

  return { onState, onLedger, reset, projectSlice: projectOperatorSlice };
}

module.exports = {
  PROTOCOL_VERSION,
  CHANNELS,
  TYPES,
  HUB,
  WIRE,
  SCENE_IDS,
  makeIntent,
  makeOperatorIntent,
  projectOperatorSlice,
  createOperatorBridge
};
