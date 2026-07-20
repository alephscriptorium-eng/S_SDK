/**
 * Node-RED settings — instancia visor ciudad (WP-Z08 f1–f3).
 * Puerto :1880. userDir = este directorio (flows/).
 *
 * Arranque:
 *   cd plan/SPRINTS/sprint-game-city/flows
 *   npm install
 *   npx --yes node-red -u "$(pwd)" -s "$(pwd)/settings.js"
 */
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
    /** Room de juego por defecto (pozo demo hasta que exista pack ciudad / Z03). */
    ZEUS_GAME_ROOM: process.env.ZEUS_GAME_ROOM || process.env.ZEUS_POZO_ROOM || 'POZO_DEMO',
    ZEUS_SCRIPTORIUM_URL: process.env.ZEUS_SCRIPTORIUM_URL || 'ws://localhost:3017',
    ZEUS_SCRIPTORIUM_SECRET: process.env.ZEUS_SCRIPTORIUM_SECRET || 'dev-secret',
    /** REST zeus (RECURSOS-LIBS §2). */
    ZEUS_CONSOLE_MONITOR: process.env.ZEUS_CONSOLE_MONITOR || 'http://localhost:3014',
    ZEUS_EDITOR_UI: process.env.ZEUS_EDITOR_UI || 'http://localhost:3012',
    ZEUS_FIREHOSE_BROWSER: process.env.ZEUS_FIREHOSE_BROWSER || 'http://localhost:3016',
    ZEUS_CACHE_BROWSER: process.env.ZEUS_CACHE_BROWSER || 'http://localhost:3015'
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
      title: 'Z08 · Visor ciudad (f1–f3)'
    },
    header: {
      title: 'Z08 · Constelación Node-RED (lote f1–f3)'
    }
  },

  exportGlobalContextKeys: false,
  debugMaxLength: 2000
};
