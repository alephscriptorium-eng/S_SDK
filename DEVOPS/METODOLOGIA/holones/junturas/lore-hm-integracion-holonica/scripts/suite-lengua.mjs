#!/usr/bin/env node
/**
 * Suite LENGUA LORE-HM (L01–L05) — gates que bloquean.
 * Vive bajo DEVOPS (allowlist sellado); no es consumidor runtime de Network-Engine.
 * Falla si falta algún verificador o si está plantado ROJO-PLANTADO.
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const here = dirname(fileURLToPath(import.meta.url));
const dossierRoot = join(here, "..");

function findRepoRoot(start) {
  let dir = start;
  for (let i = 0; i < 12; i += 1) {
    const pkg = join(dir, "package.json");
    if (existsSync(pkg)) {
      try {
        const p = JSON.parse(readFileSync(pkg, "utf8"));
        if (p.name === "script-sdk") return dir;
      } catch {
        /* continue */
      }
    }
    if (existsSync(join(dir, ".git"))) return dir;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return join(here, "..", "..", "..", "..", "..", "..");
}

const repoRoot = findRepoRoot(dossierRoot);
const lenguaRoot = join(repoRoot, "NETWORK-ENGINE", "LANGUAGES", "lore-hm");
const plant = join(lenguaRoot, "ci", "ROJO-PLANTADO");

function fail(msg) {
  console.error(`suite-lengua: FAIL — ${msg}`);
  process.exit(1);
}

if (existsSync(plant)) {
  const body = readFileSync(plant, "utf8").trim();
  console.error("suite-lengua: ROJO PLANTADO (vector CI LENGUA)");
  console.error(body || "(marcador vacío)");
  process.exit(1);
}

const checks = [
  [
    "verificar-dossier-l01",
    join(dossierRoot, "scripts/verificar-dossier-l01.mjs"),
  ],
  [
    "verificar-inception-l02",
    join(lenguaRoot, "scripts/verificar-inception-l02.mjs"),
  ],
  [
    "verificar-solid-l03",
    join(lenguaRoot, "solid/scripts/verificar-solid-l03.mjs"),
  ],
  [
    "verificar-vocab-l04",
    join(lenguaRoot, "vocab/scripts/verificar-vocab-l04.mjs"),
  ],
  [
    "verificar-sellado-l05",
    join(lenguaRoot, "scripts/verificar-sellado-l05.mjs"),
  ],
];

for (const [name, abs] of checks) {
  if (!existsSync(abs)) fail(`falta ${name}: ${abs}`);
}

let failed = 0;
for (const [name, abs] of checks) {
  console.log(`\n── ${name} ──`);
  const r = spawnSync(process.execPath, [abs], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: "inherit",
  });
  if (r.status !== 0) {
    console.error(`suite-lengua: FAIL — ${name} exit=${r.status}`);
    failed += 1;
  }
}

if (failed > 0) {
  console.error(`\nsuite-lengua: FAIL (${failed}/${checks.length})`);
  process.exit(1);
}

console.log(`\nsuite-lengua: PASS (${checks.length} verificadores)`);
process.exit(0);
