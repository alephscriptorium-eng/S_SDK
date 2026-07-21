'use strict';
/** One-shot: append F6 tab nodes to flows.json if missing. */
const fs = require('fs');
const path = require('path');

const flowsPath = path.join(__dirname, '..', 'flows.json');
const flows = JSON.parse(fs.readFileSync(flowsPath, 'utf8'));
if (flows.some((n) => n.id === 'z08-f6-poblacion')) {
  console.log('F6 already present');
  process.exit(0);
}

const loadFunc = `const load = global.get('loadLoteAmbito');
const stubs = global.get('ciudadIntentStubs');
const ambito = global.get('Z08_AMBITO') || 'plaza-ops';
const max = global.get('POBLACION_MAX') || 24;
if (!load || !stubs) {
  node.error('loadLoteAmbito / ciudadIntentStubs missing');
  return null;
}
const lote = load();
const topic = String(msg.topic || 'lote:load');
const room = global.get('ZEUS_GAME_ROOM') || 'POZO_DEMO';
const summary = {
  ambito: lote.ambito || ambito,
  poblacionMax: lote.poblacionMax || max,
  count: lote.count,
  agents: (lote.agents || []).map((a) => ({
    censusId: a.censusId,
    homeZone: a.homeZone,
    section: a.section
  })),
  at: new Date().toISOString(),
  topic
};
node.status({
  fill: 'green',
  shape: 'dot',
  text: (lote.ambito || ambito) + ' · ' + lote.count + '/' + max
});
context.set('lote', lote);

const summaryMsg = { payload: summary, topic: 'poblacion:summary' };
if (topic === 'lote:load') {
  return [summaryMsg, null];
}

const fanouts = [];
for (const a of lote.agents || []) {
  let intent;
  if (topic === 'lote:walk') {
    const zone = context.get('zone:' + a.censusId) || a.homeZone || 'plaza';
    const hop = stubs.nextRandomWalk(zone);
    context.set('zone:' + a.censusId, hop.nextZone);
    intent = stubs.makeWalkIntent(a.censusId, hop);
  } else {
    intent = stubs.makeAnnounceIntent(a.censusId, {
      zone: a.homeZone || 'plaza',
      text: (a.displayName || a.censusId) + ' · ' + (lote.ambito || ambito)
    });
  }
  fanouts.push({
    topic: 'intent',
    payload: stubs.toRoomIntentCommand(intent, room),
    ciudadano: a
  });
}
summaryMsg.payload = Object.assign({}, summary, { emitted: fanouts.length });
summaryMsg.topic = 'poblacion:fanout';
node.send([summaryMsg, null]);
for (const m of fanouts) node.send([null, m]);
return null;
`;

const f6Nodes = [
  {
    id: 'z08-grp-poblacion',
    type: 'ui-group',
    name: 'F6 · Población / constelación',
    page: 'z08-page-ops',
    width: 6,
    height: 1,
    order: 22,
    showTitle: true,
    className: '',
    visible: true,
    disabled: false,
    groupType: 'default'
  },
  {
    id: 'z08-f6-poblacion',
    type: 'tab',
    label: 'F6 Población',
    disabled: false,
    info: 'WP-Z08 F6 — Población y constelación.\n\nLote ≤ POBLACION_MAX (default 24) desde fixtures/poblacion-lote-max24.json.\nÁmbito: env Z08_AMBITO (distritos|locales|plaza-ops).\n≥2 instancias: scripts/start-constelacion.sh (:1884 + :1885).\n169 plenos = Z05+f7. Wishlist: WISHLIST-f7.md.'
  },
  {
    id: 'f6-comment',
    type: 'comment',
    z: 'z08-f6-poblacion',
    name: 'F6 · lote por ámbito · techo POBLACION_MAX · ≥2 NR',
    info: 'loadLoteAmbito() en globalContext. Transparencia: authority solo ve clients/intents.',
    x: 280,
    y: 40,
    wires: []
  },
  {
    id: 'f6-inject-lote',
    type: 'inject',
    z: 'z08-f6-poblacion',
    name: 'Cargar lote ámbito',
    props: [{ p: 'payload' }, { p: 'topic', vt: 'str' }],
    repeat: '',
    crontab: '',
    once: false,
    onceDelay: 0.5,
    topic: 'lote:load',
    payload: '',
    payloadType: 'date',
    x: 180,
    y: 100,
    wires: [['f6-load-lote']]
  },
  {
    id: 'f6-inject-announce-all',
    type: 'inject',
    z: 'z08-f6-poblacion',
    name: 'Announce lote (fan-out)',
    props: [{ p: 'payload' }, { p: 'topic', vt: 'str' }],
    repeat: '',
    crontab: '',
    once: false,
    onceDelay: 1,
    topic: 'lote:announce',
    payload: '',
    payloadType: 'date',
    x: 200,
    y: 160,
    wires: [['f6-load-lote']]
  },
  {
    id: 'f6-inject-walk-tick',
    type: 'inject',
    z: 'z08-f6-poblacion',
    name: 'Walk tick lote (30s)',
    props: [{ p: 'payload' }, { p: 'topic', vt: 'str' }],
    repeat: '30',
    crontab: '',
    once: false,
    onceDelay: 5,
    topic: 'lote:walk',
    payload: '',
    payloadType: 'date',
    x: 190,
    y: 220,
    wires: [['f6-load-lote']]
  },
  {
    id: 'f6-load-lote',
    type: 'function',
    z: 'z08-f6-poblacion',
    name: 'Load lote + fan-out intents',
    func: loadFunc,
    outputs: 2,
    timeout: '',
    noerr: 0,
    initialize: '',
    finalize: '',
    libs: [],
    x: 450,
    y: 160,
    wires: [
      ['f6-debug-summary', 'f6-ui'],
      ['f6-poblacion-client']
    ]
  },
  {
    id: 'f6-poblacion-client',
    type: 'alephscript-core-client',
    z: 'z08-f6-poblacion',
    name: 'Población → /runtime',
    config: 'z08-zeus-core-config',
    clientName: '',
    session: '',
    clientType: 'NodeRedPoblacion',
    defaultRoom: 'POZO_DEMO',
    autoRegister: true,
    autoSubscribe: true,
    features: 'node-red,poblacion,constelacion',
    x: 720,
    y: 220,
    wires: [[]]
  },
  {
    id: 'f6-debug-summary',
    type: 'debug',
    z: 'z08-f6-poblacion',
    name: 'Población summary',
    active: true,
    tosidebar: true,
    console: false,
    tostatus: false,
    complete: 'true',
    targetType: 'full',
    x: 720,
    y: 100,
    wires: []
  },
  {
    id: 'f6-ui',
    type: 'ui-template',
    z: 'z08-f6-poblacion',
    group: 'z08-grp-poblacion',
    name: 'Lote ámbito',
    order: 1,
    width: 6,
    height: 6,
    head: '',
    format:
      '<template>\n  <div style="font:13px/1.4 system-ui,sans-serif">\n    <div><b>F6 población</b> · techo <code>POBLACION_MAX</code></div>\n    <pre style="font:11px/1.3 ui-monospace,monospace;white-space:pre-wrap;max-height:280px;overflow:auto">{{ JSON.stringify(msg?.payload, null, 2) }}</pre>\n  </div>\n</template>',
    storeOutMessages: true,
    fwdInMessages: true,
    resendOnRefresh: true,
    templateScope: 'local',
    className: '',
    x: 700,
    y: 140,
    wires: []
  },
  {
    id: 'f6-ciudadano-archivero',
    type: 'subflow:sf-ciudadano',
    z: 'z08-f6-poblacion',
    name: 'Ciudadano · archivero (distritos)',
    env: [
      { name: 'CENSUS_ID', value: 'archivero', type: 'str' },
      { name: 'HOME_ZONE', value: 'lore-voz', type: 'str' },
      { name: 'GAME_ROOM', value: 'POZO_DEMO', type: 'str' },
      { name: 'WALK_EVERY_S', value: '18', type: 'num' }
    ],
    x: 250,
    y: 320,
    wires: [['f6-debug-ciudadanos']]
  },
  {
    id: 'f6-ciudadano-wire',
    type: 'subflow:sf-ciudadano',
    z: 'z08-f6-poblacion',
    name: 'Ciudadano · wire-editor (locales)',
    env: [
      { name: 'CENSUS_ID', value: 'wire-editor', type: 'str' },
      { name: 'HOME_ZONE', value: 'plaza', type: 'str' },
      { name: 'GAME_ROOM', value: 'POZO_DEMO', type: 'str' },
      { name: 'WALK_EVERY_S', value: '18', type: 'num' }
    ],
    x: 250,
    y: 380,
    wires: [['f6-debug-ciudadanos']]
  },
  {
    id: 'f6-inject-demo-duo',
    type: 'inject',
    z: 'z08-f6-poblacion',
    name: 'Announce demo duo',
    props: [{ p: 'payload' }, { p: 'topic', vt: 'str' }],
    repeat: '',
    crontab: '',
    once: false,
    onceDelay: 0.5,
    topic: 'announce',
    payload: '',
    payloadType: 'date',
    x: 180,
    y: 280,
    wires: [['f6-ciudadano-archivero', 'f6-ciudadano-wire']]
  },
  {
    id: 'f6-debug-ciudadanos',
    type: 'debug',
    z: 'z08-f6-poblacion',
    name: 'Demo ciudadanos F6',
    active: true,
    tosidebar: true,
    console: false,
    tostatus: false,
    complete: 'true',
    targetType: 'full',
    x: 520,
    y: 350,
    wires: []
  }
];

flows.push(...f6Nodes);
fs.writeFileSync(flowsPath, JSON.stringify(flows, null, 2) + '\n');
console.log('appended', f6Nodes.length, 'nodes; total', flows.length);
