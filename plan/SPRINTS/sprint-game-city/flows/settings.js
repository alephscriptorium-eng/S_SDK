/**
 * Node-RED settings — instancia visor ciudad (WP-Z08 f1–f5).
 * Puerto :1880. userDir = este directorio (flows/).
 *
 * Arranque:
 *   cd plan/SPRINTS/sprint-game-city/flows
 *   npm install
 *   npx --yes node-red -u "$(pwd)" -s "$(pwd)/settings.js"
 */
const path = require('path');

const operatorBridge = require('./helpers/operator-bridge-port.js');
const ciudadIntentStubs = require('./helpers/ciudad-intent-stubs.js');

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
    /** F4/F5 helpers (port operator-bridge + stubs intent ciudad). */
    operatorBridge,
    ciudadIntentStubs,
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
      title: 'Z08 · Visor ciudad (f1–f5)'
    },
    header: {
      title: 'Z08 · Constelación Node-RED (lote f1–f5 · Mano + Ciudadano)'
    }
  },

  exportGlobalContextKeys: false,
  debugMaxLength: 2000
};
