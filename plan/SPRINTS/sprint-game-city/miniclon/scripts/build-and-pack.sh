#!/usr/bin/env bash
# Build + npm pack de nodos 0.3.0 (dep SDK ^1.5.0) → artifacts/
# No requiere Docker. Registry URL: npm.scriptorium.escrivivir.co (lectura SDK).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ART="$ROOT/artifacts"
REG="${NPM_REGISTRY:-https://npm.scriptorium.escrivivir.co}"
mkdir -p "$ART"

for name in node-red-contrib-alephscript-core node-red-dashboard-2-alephscript-rooms; do
  pkg="$ROOT/packages/$name"
  echo "=== build $name ==="
  (
    cd "$pkg"
    printf '%s\n' "@alephscript:registry=${REG}/" "registry=https://registry.npmjs.org/" > .npmrc
    npm install --no-fund --no-audit
    npm run build:full
    npm pack --pack-destination "$ART"
  )
done

echo "Packed:"
ls -la "$ART"/*.tgz
