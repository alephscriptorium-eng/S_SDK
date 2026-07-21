/**
 * Población por lotes (WP-Z08 f6).
 *
 * Parsea print-agentes.txt, clasifica por ámbito NR (distritos|locales|plaza-ops),
 * asigna homeZone de juego (calles startpack) y selecciona lote ≤ POBLACION_MAX.
 *
 * 169 plenos = meta Z05+f7, no CA duro de f6. Techo vigente ≈ 24 (uno por zona/barrio).
 */

'use strict';

const fs = require('fs');
const path = require('path');

/** Techo explícito f6 (aporte feedback · ficha WP-Z08). */
const POBLACION_MAX_DEFAULT = 24;

const AMBITOS = Object.freeze(['distritos', 'locales', 'plaza-ops']);

/**
 * Sección censo (## header) → homeZone de calles startpack.
 * Alineado a cantera CIUDAD/MAPA.md + STREETS de ciudad-intent-stubs.
 */
const SECTION_HOME_ZONE = Object.freeze({
  '.github_V1': 'plaza',
  DocumentMachineSDK: 'lore-voz',
  'onfalo-asesor-sdk': 'lore-voz',
  VsCodeExtension: 'zigurat',
  CopilotEngine: 'runtime-mcp',
  MCPGallery: 'runtime-mcp',
  AgentLoreSDK: 'lore-voz',
  VectorMachineSDK: 'lore-voz',
  NovelistEditor: 'runtime-mcp',
  VibeCodingSuite: 'infra-ui',
  BotHubSDK: 'red-stream',
  BlocklyEditor: 'editores',
  'ARCHIVO/DISCO': 'plaza',
  'ARCHIVO/PLUGINS': 'plaza',
  'ARCHIVO/DEVOPS': 'infra-ui'
});

/**
 * Sección → ámbito de constelación NR (mínimo: distritos + locales + plaza/ops).
 */
const SECTION_AMBITO = Object.freeze({
  '.github_V1': 'plaza-ops',
  DocumentMachineSDK: 'distritos',
  'onfalo-asesor-sdk': 'distritos',
  VsCodeExtension: 'distritos',
  CopilotEngine: 'distritos',
  MCPGallery: 'distritos',
  AgentLoreSDK: 'distritos',
  VectorMachineSDK: 'distritos',
  NovelistEditor: 'distritos',
  VibeCodingSuite: 'distritos',
  BotHubSDK: 'distritos',
  BlocklyEditor: 'distritos',
  'ARCHIVO/DISCO': 'locales',
  'ARCHIVO/PLUGINS': 'locales',
  'ARCHIVO/DEVOPS': 'plaza-ops'
});

function censusIdFromPath(agentPath) {
  const base = path.basename(agentPath).replace(/\.(agent|chatmode)\.md$/i, '');
  return base || agentPath;
}

function classifyPath(agentPath, section) {
  // Plugins bajo plaza → ámbito locales (naves), no plaza-ops
  if (section === '.github_V1' && agentPath.includes('/plugins/')) {
    return { ambito: 'locales', homeZone: 'plaza', section };
  }
  // Ops VPS bajo plugins plaza → plaza-ops
  if (agentPath.includes('scriptorium-vps')) {
    return { ambito: 'plaza-ops', homeZone: 'infra-ui', section: section || 'ScriptoriumVps' };
  }
  const ambito = SECTION_AMBITO[section] || 'distritos';
  const homeZone = SECTION_HOME_ZONE[section] || 'plaza';
  return { ambito, homeZone, section };
}

/**
 * Parsea print-agentes.txt → lista de ciudadanos.
 * @param {string} text
 * @returns {{ totalDeclared: number, agents: object[] }}
 */
function parsePrintAgentes(text) {
  const lines = String(text).split(/\r?\n/);
  let totalDeclared = 0;
  let section = '';
  const agents = [];

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    const totalMatch = line.match(/^#\s*Total:\s*(\d+)/i);
    if (totalMatch) {
      totalDeclared = Number(totalMatch[1]);
      continue;
    }
    if (line.startsWith('#') && !line.startsWith('##')) continue;
    if (line.startsWith('## ')) {
      section = line.slice(3).trim();
      continue;
    }
    if (line === '(ninguno)') continue;
    if (!line.includes('.agent.md') && !line.includes('.chatmode.md')) continue;

    const { ambito, homeZone, section: sec } = classifyPath(line, section);
    const censusId = censusIdFromPath(line);
    agents.push({
      censusId,
      agentPath: line,
      displayName: censusId,
      section: sec,
      ambito,
      homeZone
    });
  }

  return { totalDeclared, agents };
}

function loadPrintAgentes(filePath) {
  const abs = path.resolve(filePath);
  const text = fs.readFileSync(abs, 'utf8');
  return { ...parsePrintAgentes(text), source: abs };
}

/**
 * Selección de lote ≤ max.
 * Estrategia: 1º un representante por sección no vacía; 2º relleno round-robin
 * por ámbito para balancear constelación (≥2 ámbitos).
 *
 * @param {object[]} agents
 * @param {{ max?: number, ambitos?: string[] }} [opts]
 */
function selectBatch(agents, opts = {}) {
  const max = opts.max != null ? Number(opts.max) : POBLACION_MAX_DEFAULT;
  if (!Number.isFinite(max) || max < 1) {
    throw new TypeError('POBLACION_MAX debe ser ≥ 1');
  }
  const ambitFilter =
    opts.ambitos && opts.ambitos.length
      ? new Set(opts.ambitos)
      : null;

  const pool = ambitFilter
    ? agents.filter((a) => ambitFilter.has(a.ambito))
    : agents.slice();

  const bySection = new Map();
  for (const a of pool) {
    if (!bySection.has(a.section)) bySection.set(a.section, []);
    bySection.get(a.section).push(a);
  }

  const picked = [];
  const seen = new Set();

  for (const [, list] of bySection) {
    if (picked.length >= max) break;
    const first = list[0];
    const key = first.agentPath;
    if (seen.has(key)) continue;
    seen.add(key);
    picked.push(first);
  }

  // Relleno round-robin por ámbito
  const byAmbito = new Map(AMBITOS.map((k) => [k, []]));
  for (const a of pool) {
    if (seen.has(a.agentPath)) continue;
    if (!byAmbito.has(a.ambito)) byAmbito.set(a.ambito, []);
    byAmbito.get(a.ambito).push(a);
  }

  let progressed = true;
  while (picked.length < max && progressed) {
    progressed = false;
    for (const amb of AMBITOS) {
      if (picked.length >= max) break;
      const q = byAmbito.get(amb) || [];
      while (q.length && seen.has(q[0].agentPath)) q.shift();
      if (!q.length) continue;
      const next = q.shift();
      seen.add(next.agentPath);
      picked.push(next);
      progressed = true;
    }
  }

  const byAmbitoCount = {};
  for (const amb of AMBITOS) byAmbitoCount[amb] = 0;
  for (const a of picked) byAmbitoCount[a.ambito] = (byAmbitoCount[a.ambito] || 0) + 1;

  return {
    poblacionMax: max,
    count: picked.length,
    byAmbito: byAmbitoCount,
    agents: picked
  };
}

/** Filtra lote ya seleccionado por ámbito de esta instancia NR. */
function filterByAmbito(batch, ambito) {
  if (!AMBITOS.includes(ambito)) {
    throw new TypeError(`ambito inválido: ${ambito}`);
  }
  const agents = (batch.agents || batch).filter((a) => a.ambito === ambito);
  return {
    ambito,
    poblacionMax: batch.poblacionMax != null ? batch.poblacionMax : agents.length,
    count: agents.length,
    agents
  };
}

/**
 * Construye fixture JSON congelada (lote f6).
 */
function buildLoteFixture(printPath, opts = {}) {
  const loaded = loadPrintAgentes(printPath);
  const batch = selectBatch(loaded.agents, { max: opts.max ?? POBLACION_MAX_DEFAULT });
  return {
    schema: 'z08-poblacion-lote/v1',
    generatedFor: 'WP-Z08-f6',
    poblacionMax: batch.poblacionMax,
    count: batch.count,
    totalCensoDeclared: loaded.totalDeclared,
    totalCensoParsed: loaded.agents.length,
    note:
      '169 plenos = meta Z05+f7, no CA de f6. Subir lotes solo mientras snapshot/latencia aguanten.',
    byAmbito: batch.byAmbito,
    agents: batch.agents,
    source: loaded.source
  };
}

module.exports = {
  POBLACION_MAX_DEFAULT,
  AMBITOS,
  SECTION_HOME_ZONE,
  SECTION_AMBITO,
  censusIdFromPath,
  classifyPath,
  parsePrintAgentes,
  loadPrintAgentes,
  selectBatch,
  filterByAmbito,
  buildLoteFixture
};
