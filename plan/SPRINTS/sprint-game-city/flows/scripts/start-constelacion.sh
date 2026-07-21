#!/usr/bin/env bash
# Arranca ≥2 instancias Node-RED de ámbitos distintos (WP-Z08 f6).
# Uso:
#   bash scripts/start-constelacion.sh
# Env:
#   NODE_PATH  — p.ej. $HOME/.node-red/node_modules
#   ZEUS_GAME_ROOM / ZEUS_GAME_ID — ver settings.js
# Puertos default: distritos :1884 · locales :1885 · (opcional) plaza-ops :1886
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RUNTIME="${Z08_RUNTIME_DIR:-$ROOT/.runtime}"
NODE_RED_BIN="${NODE_RED_BIN:-}"
if [[ -z "$NODE_RED_BIN" ]]; then
  if [[ -x "$HOME/.node-red/node_modules/.bin/node-red" ]]; then
    NODE_RED_BIN="$HOME/.node-red/node_modules/.bin/node-red"
  else
    NODE_RED_BIN="npx --yes node-red"
  fi
fi

mkdir -p "$RUNTIME/distritos" "$RUNTIME/locales"
# userDirs separados: copiar flows + settings + helpers + fixtures (sin pisar .git)
for amb in distritos locales; do
  dest="$RUNTIME/$amb"
  cp -f "$ROOT/flows.json" "$dest/flows.json"
  cp -f "$ROOT/settings.js" "$dest/settings.js"
  cp -f "$ROOT/package.json" "$dest/package.json"
  rm -rf "$dest/helpers" "$dest/fixtures"
  cp -R "$ROOT/helpers" "$dest/helpers"
  cp -R "$ROOT/fixtures" "$dest/fixtures"
done

export NODE_PATH="${NODE_PATH:-$HOME/.node-red/node_modules}"

echo "[z08-f6] NODE_PATH=$NODE_PATH"
echo "[z08-f6] POBLACION_MAX=${POBLACION_MAX:-24}"

# Distritos :1884
(
  cd "$RUNTIME/distritos"
  export PORT=1884
  export Z08_AMBITO=distritos
  export POBLACION_MAX="${POBLACION_MAX:-24}"
  echo "[z08-f6] starting ambito=distritos PORT=$PORT"
  exec $NODE_RED_BIN -u "$(pwd)" -s "$(pwd)/settings.js"
) &
PID_D=$!

# Locales :1885
(
  cd "$RUNTIME/locales"
  export PORT=1885
  export Z08_AMBITO=locales
  export POBLACION_MAX="${POBLACION_MAX:-24}"
  echo "[z08-f6] starting ambito=locales PORT=$PORT"
  exec $NODE_RED_BIN -u "$(pwd)" -s "$(pwd)/settings.js"
) &
PID_L=$!

cleanup() {
  kill "$PID_D" "$PID_L" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

echo "[z08-f6] PIDs distritos=$PID_D locales=$PID_L"
echo "[z08-f6] editors: http://127.0.0.1:1884  http://127.0.0.1:1885"
echo "[z08-f6] Ctrl+C para parar ambas"

wait
