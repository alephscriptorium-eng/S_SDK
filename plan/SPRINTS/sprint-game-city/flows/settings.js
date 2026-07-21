/**
 * Node-RED settings — instancia constelación ciudad (WP-Z08 f1–f6).
 * Puerto default :1880. Constelación: scripts/start-constelacion.sh
 *   (:1884 distritos · :1885 locales) con Z08_AMBITO + POBLACION_MAX.
 *
 * Arranque:
 *   cd plan/SPRINTS/sprint-game-city/flows
 *   npm install
 *   npx --yes node-red -u "$(pwd)" -s "$(pwd)/settings.js"
 */
const path = require('path');
const fs = require('fs');

const operatorBridge = require('./helpers/operator-bridge-port.js');
const ciudadIntentStubs = require('./helpers/ciudad-intent-stubs.js');
const poblacionCenso = require('./helpers/poblacion-censo.js');

const POBLACION_MAX = Number(process.env.POBLACION_MAX || poblacionCenso.POBLACION_MAX_DEFAULT);
const Z08_AMBITO = process.env.Z08_AMBITO || 'plaza-ops';

function loadLoteAmbito() {
  const fixturePath = path.join(__dirname, 'fixtures', 'poblacion-lote-max24.json');
  let lote;
  if (fs.existsSync(fixturePath)) {
    lote = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));
  } else {
    const printPath = path.join(
      __dirname,
      '..',
      'cantera',
      'CIUDAD',
      'GRAFO',
      'print-agentes.txt'
    );
    lote = poblacionCenso.buildLoteFixture(printPath, { max: POBLACION_MAX });
  }
  const filtered = poblacionCenso.filterByAmbito(lote, Z08_AMBITO);
  return {
    poblacionMax: POBLACION_MAX,
    ambito: Z08_AMBITO,
    totalLote: lote.count || (lote.agents && lote.agents.length) || 0,
    ...filtered
  };
}

module.exports = {
  uiPort: process.env.PORT || 1880,
  uiHost: process.env.HOST || '127.0.0.1',

  flowFile: 'flows.json',
  flowFilePretty: true,

  credentialSecret: process.env.NR_CREDENTIAL_SECRET || 'z08-dev-only-not-for-prod',

  adminAuth: undefined,

  httpAdminRoot: '/',
  httpNodeRoot: '/',

  functionGlobalContext: {
    /** Room de juego por defecto (pozo demo hasta pack ciudad / Z03 en room propia). */
    ZEUS_GAME_ROOM: process.env.ZEUS_GAME_ROOM || process.env.ZEUS_POZO_ROOM || 'POZO_DEMO',
    /** GAME_ID de envelopes (stubs Z03 = ciudad; pozo no tiene walk/wake). */
    ZEUS_GAME_ID: process.env.ZEUS_GAME_ID || 'ciudad',
    ZEUS_SCRIPTORIUM_URL: process.env.ZEUS_SCRIPTORIUM_URL || 'ws://localhost:3017',
    ZEUS_SCRIPTORIUM_SECRET: process.env.ZEUS_SCRIPTORIUM_SECRET || 'dev-secret',
    /** REST zeus (RECURSOS-LIBS §2). */
    ZEUS_CONSOLE_MONITOR: process.env.ZEUS_CONSOLE_MONITOR || 'http://localhost:3014',
    ZEUS_EDITOR_UI: process.env.ZEUS_EDITOR_UI || 'http://localhost:3012',
    ZEUS_FIREHOSE_BROWSER: process.env.ZEUS_FIREHOSE_BROWSER || 'http://localhost:3016',
    ZEUS_CACHE_BROWSER: process.env.ZEUS_CACHE_BROWSER || 'http://localhost:3015',
    /** F6 constelación: ámbito de esta instancia + techo de lote. */
    Z08_AMBITO,
    POBLACION_MAX,
    /** F4/F5/F6 helpers. */
    operatorBridge,
    ciudadIntentStubs,
    poblacionCenso,
    loadLoteAmbito,
    libRoot: path.join(__dirname, 'helpers')
  },

  logging: {
    console: {
      level: 'info',
      metrics: false,
      audit: false
    }
  },

  editorTheme: {
    page: {
      title: `Z08 · ${Z08_AMBITO} (f1–f6)`
    },
    header: {
      title: `Z08 · Constelación NR · ${Z08_AMBITO} · max=${POBLACION_MAX}`
    }
  },

  exportGlobalContextKeys: false,
  debugMaxLength: 2000
};
