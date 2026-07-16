#!/usr/bin/env bash
# estreno-dry-run.sh — WP-D22: prueba en seco del runbook (sin tocar main/draft)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${REPO_ROOT}"

MAIN_ANTES=$(git rev-parse main)
DRAFT_ANTES=$(git rev-parse draft)
RAMA_TRABAJO=$(git branch --show-current)

echo "=== ANTES ==="
echo "main=${MAIN_ANTES} draft=${DRAFT_ANTES} branch=${RAMA_TRABAJO}"

rm -rf ../_ensayo
cp -r TEST-SWARM ../_ensayo

git checkout --orphan main-sitio
git rm -rf . >/dev/null 2>&1

mkdir docs && cp -r ../_ensayo/docs/* docs/
rm -rf TEST-SWARM
cp -r ../_ensayo TEST-SWARM && rm -rf TEST-SWARM/docs

git add docs TEST-SWARM
git commit -m "docs: pack demo + ensayo para Pages (dry-run)" --quiet

echo "=== VERIFICACIÓN ==="
commits=$(git rev-list --count main-sitio)
[[ "${commits}" -eq 1 ]] || { echo "FALLO: commits=${commits}"; exit 1; }

top=$(ls -1 | tr '\n' ' ')
[[ "${top}" == "docs TEST-SWARM " ]] || { echo "FALLO: top-level=${top}"; exit 1; }
test ! -d TEST-SWARM/docs || { echo "FALLO: sitio duplicado"; exit 1; }
test ! -e HIPOTESIS.md && test ! -e DEVOPS && test ! -e LLM.md || { echo "FALLO: backstage raíz"; exit 1; }
test ! -d TEST-SWARM/_ensayo || { echo "FALLO: anidado _ensayo"; exit 1; }

git log --oneline

git checkout "${RAMA_TRABAJO}"
git branch -D main-sitio
rm -rf ../_ensayo

MAIN_DESPUES=$(git rev-parse main)
DRAFT_DESPUES=$(git rev-parse draft)
[[ "${MAIN_DESPUES}" == "${MAIN_ANTES}" ]] || { echo "FALLO: main tocada"; exit 1; }
[[ "${DRAFT_DESPUES}" == "${DRAFT_ANTES}" ]] || { echo "FALLO: draft tocada"; exit 1; }

echo "=== DESPUÉS ==="
echo "main y draft intactas: OK"
