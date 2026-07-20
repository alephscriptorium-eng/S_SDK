#!/usr/bin/env bash
# Publish nodos 0.3.0 a Verdaccio — procedimiento DE-I12
# (NPM_USERNAME + NPM_PASSWORD; NO _authToken).
#
# En CI: secrets GitHub ya cableados en zeus-sdk / SCRIPT_SDK.
# En estación local sin credenciales: no bloquea el WP; documentar
# «auth local <pendiente> — secrets GitHub OK».
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REG="${NPM_REGISTRY:-https://npm.scriptorium.escrivivir.co}"

if [[ -z "${NPM_USERNAME:-}" || -z "${NPM_PASSWORD:-}" ]]; then
  echo "Faltan NPM_USERNAME / NPM_PASSWORD (DE-I12)."
  echo "Secrets GitHub en z-sdk/s-sdk están OK; auth local = <pendiente>."
  echo "No inventar _authToken. Abort publish (no es fallo de diseño)."
  exit 2
fi

# Auth efímera en HOME npmrc temporal (mismo patrón publish-package / I26)
TMP_NPMRC="$(mktemp)"
cleanup() { rm -f "$TMP_NPMRC"; }
trap cleanup EXIT

PASS_B64="$(printf '%s' "$NPM_PASSWORD" | openssl base64 | tr -d '\n')"
cat > "$TMP_NPMRC" <<EOF
registry=${REG}/
//${REG#https://}/:username=${NPM_USERNAME}
//${REG#https://}/:_password=${PASS_B64}
//${REG#https://}/:email=${NPM_USERNAME}@users.noreply.local
//${REG#https://}/:always-auth=true
always-auth=true
EOF

if [[ ! -d "$ROOT/artifacts" ]] || ! ls "$ROOT/artifacts"/*.tgz >/dev/null 2>&1; then
  echo "No hay tarballs; corré scripts/build-and-pack.sh primero."
  exit 1
fi

export npm_config_userconfig="$TMP_NPMRC"
for tgz in "$ROOT/artifacts"/*.tgz; do
  echo "=== publish $(basename "$tgz") ==="
  npm publish "$tgz" --registry "$REG"
done

echo "OK — verificar:"
echo "  npm view node-red-contrib-alephscript-core versions --registry $REG"
echo "  npm view node-red-dashboard-2-alephscript-rooms versions --registry $REG"
