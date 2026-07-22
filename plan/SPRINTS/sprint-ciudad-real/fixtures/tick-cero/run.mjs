/**
 * Tick cero GO-C1 — entrada completa.
 *
 * 1. npm install @zeus/protocol@0.3.0 desde canal real (no file:)
 * 2. spawn peer.mjs (SIMULADO, proceso aparte) → peercard firmada
 * 3. puerta verifica seat + startpack-ciudad-v0.1.0
 *
 *   npm install --registry https://npm.scriptorium.escrivivir.co
 *   node run.mjs
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { entrarPorPuerta, assertEntrada, DEFAULT_STARTPACK_REF } from './puerta.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const REGISTRY = 'https://npm.scriptorium.escrivivir.co';

function resolvedProtocolMeta() {
  const entry = require.resolve('@zeus/protocol');
  const pkgDir = path.dirname(entry);
  // src/index.mjs → package root
  const root = path.resolve(pkgDir, '..');
  const pkgJsonPath = path.join(root, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
  return { version: pkg.version, root, entry };
}

async function spawnPeer() {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(__dirname, 'peer.mjs')], {
      cwd: __dirname,
      env: process.env,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');
    child.stdout.on('data', (chunk) => {
      stdout += chunk;
    });
    child.stderr.on('data', (chunk) => {
      stderr += chunk;
    });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`peer exit ${code}: ${stderr || stdout}`));
        return;
      }
      const line = stdout.trim().split(/\r?\n/).filter(Boolean).at(-1);
      try {
        resolve(JSON.parse(line));
      } catch (err) {
        reject(new Error(`peer JSON parse failed: ${err.message}\n${stdout}`));
      }
    });
  });
}

const { version, root: protocolRoot, entry: protocolEntry } =
  resolvedProtocolMeta();
assert.ok(
  !protocolRoot.includes(`${path.sep}zeus-sdk${path.sep}`),
  `must resolve from canal/node_modules, not monorepo file: got ${protocolRoot}`,
);
assert.ok(
  protocolRoot.includes(`${path.sep}node_modules${path.sep}`),
  `expected node_modules resolution: ${protocolRoot}`,
);
assert.equal(version, '0.3.0', `expected @zeus/protocol@0.3.0, got ${version}`);

const peerOut = await spawnPeer();
assert.equal(peerOut.ok, true);
assert.equal(peerOut.process, 'peer-simulado');
assert.equal(peerOut.startpackRef, DEFAULT_STARTPACK_REF);
assert.ok(peerOut.credencial?.peerCard?.seatSignature);
assert.ok(peerOut.credencial?.peerCard?.ssbId);

const entry = entrarPorPuerta(peerOut.credencial);
assertEntrada(entry);
assert.equal(entry.ssbId, peerOut.ssbId);

const tampered = {
  ...peerOut.credencial,
  peerCard: { ...peerOut.credencial.peerCard, token: 'forged' },
};
const bad = entrarPorPuerta(tampered);
assert.equal(bad.ok, false);
assert.ok(bad.errors.some((e) => e.startsWith('seat:')));

console.log(
  'TICK_CERO_OK',
  JSON.stringify({
    registry: REGISTRY,
    protocol: `@zeus/protocol@${version}`,
    protocolRoot,
    protocolEntry,
    peerPidPattern: 'spawn-child',
    startpack: entry.startpackRef,
    seatOk: entry.seatOk,
    ssbIdPrefix: entry.ssbId.slice(0, 12),
    role: entry.role,
    rejectTamper: true,
  }),
);
