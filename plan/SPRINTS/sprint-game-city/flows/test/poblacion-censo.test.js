/**
 * Offline CA f6: censo → lotes ≤ POBLACION_MAX · ≥2 ámbitos.
 * Ejecutar: node --test test/poblacion-censo.test.js
 */
'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const {
  POBLACION_MAX_DEFAULT,
  AMBITOS,
  parsePrintAgentes,
  selectBatch,
  filterByAmbito,
  buildLoteFixture
} = require('../helpers/poblacion-censo.js');

const PRINT = path.join(
  __dirname,
  '../../cantera/CIUDAD/GRAFO/print-agentes.txt'
);
const FIXTURE = path.join(__dirname, '../fixtures/poblacion-lote-max24.json');

describe('F6 Población · censo y techo', () => {
  it('parsea print-agentes con Total 169', () => {
    const text = fs.readFileSync(PRINT, 'utf8');
    const { totalDeclared, agents } = parsePrintAgentes(text);
    assert.equal(totalDeclared, 169);
    assert.ok(agents.length >= 100, `parsed ${agents.length}`);
    const ambitos = new Set(agents.map((a) => a.ambito));
    for (const a of AMBITOS) assert.ok(ambitos.has(a), `falta ámbito ${a}`);
  });

  it(`selectBatch respeta POBLACION_MAX=${POBLACION_MAX_DEFAULT}`, () => {
    const text = fs.readFileSync(PRINT, 'utf8');
    const { agents } = parsePrintAgentes(text);
    const batch = selectBatch(agents, { max: POBLACION_MAX_DEFAULT });
    assert.equal(batch.poblacionMax, 24);
    assert.ok(batch.count <= 24);
    assert.ok(batch.count >= 2);
    const present = Object.entries(batch.byAmbito).filter(([, n]) => n > 0);
    assert.ok(present.length >= 2, `esperaba ≥2 ámbitos, got ${JSON.stringify(batch.byAmbito)}`);
  });

  it('filterByAmbito parte el lote para instancias NR', () => {
    const text = fs.readFileSync(PRINT, 'utf8');
    const batch = selectBatch(parsePrintAgentes(text).agents, { max: 24 });
    const d = filterByAmbito(batch, 'distritos');
    const l = filterByAmbito(batch, 'locales');
    assert.ok(d.count >= 1);
    assert.ok(l.count >= 1);
    assert.equal(
      d.count + l.count + filterByAmbito(batch, 'plaza-ops').count,
      batch.count
    );
  });

  it('fixture congelada coherente con techo', () => {
    assert.ok(fs.existsSync(FIXTURE));
    const lote = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
    assert.equal(lote.schema, 'z08-poblacion-lote/v1');
    assert.equal(lote.poblacionMax, 24);
    assert.ok(lote.agents.length <= 24);
    assert.equal(lote.agents.length, lote.count);
    const rebuilt = buildLoteFixture(PRINT, { max: 24 });
    assert.equal(rebuilt.count, lote.count);
  });
});
