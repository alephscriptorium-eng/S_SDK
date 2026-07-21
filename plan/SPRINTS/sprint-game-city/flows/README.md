# Flows Node-RED — WP-Z08 f1–f6 (visor + Mano + Ciudadano + Población)

Instancia base **:1880** (o `PORT`) contra fabric zeus **:3017** `/runtime`.  
Constelación f6: **≥2 ámbitos** vía `scripts/start-constelacion.sh`  
(`:1884` distritos · `:1885` locales) con `Z08_AMBITO` + `POBLACION_MAX`.

Alcance de este lote: **F6 Población (+ F7 wishlist doc)**. F1–f5 ya ✅.

## Piezas

| paquete / archivo | versión / rol |
|---|---|
| `node-red-contrib-alephscript-core` | ^0.2.0 — boca Socket.IO hacia zeus |
| `node-red-dashboard-2-alephscript-rooms` | ^0.2.0 — widget clients/rooms |
| `@flowfuse/node-red-dashboard` | ^1.30.2 — Dashboard 2 host |
| `helpers/poblacion-censo.js` | parse censo · lotes ≤ `POBLACION_MAX` · ámbitos |
| `fixtures/poblacion-lote-max24.json` | lote congelado f6 (techo 24) |
| `WISHLIST-f7.md` | wishlist zeus←node-red (no forks) |

Instalar desde Verdaccio (`npm.scriptorium.escrivivir.co`) o registry en `~/.npmrc`.  
**Cero forks.**

## Auth fabric

```js
{ token: 'dev-secret', room: 'PUBLIC_ROOM', user: 'nr-z08-oreja' }
// ns: /runtime · url: ws://localhost:3017
```

Room de juego: `POZO_DEMO` (override `ZEUS_GAME_ROOM`).  
`ZEUS_GAME_ID` default `ciudad`.

## Techo de población (f6)

| variable | default | significado |
|---|---|---|
| `POBLACION_MAX` | **24** | techo vigente del lote (uno por zona/sección) |
| `Z08_AMBITO` | `plaza-ops` | filtro de esta instancia: `distritos` \| `locales` \| `plaza-ops` |

169 plenos = meta **Z05+f7**, no CA duro de f6. Subir el techo por lotes **solo
mientras** snapshot/latencia aguanten; el dolor al techo es señal esperada (Z05 1–2).

## Arranque (una instancia)

```bash
cd plan/SPRINTS/sprint-game-city/flows
npm install
# opcional: export NODE_PATH="$HOME/.node-red/node_modules"
npx --yes node-red -u "$(pwd)" -s "$(pwd)/settings.js"
```

## Arranque constelación (≥2 ámbitos)

```bash
export NODE_PATH="$HOME/.node-red/node_modules"
export POBLACION_MAX=24
bash scripts/start-constelacion.sh
# editors: :1884 (distritos) · :1885 (locales)
```

## Tabs

| tab | fase | qué hace |
|---|---|---|
| **F1–F5** | f1–f5 | ver historial; Oreja/Ojo/Ciudad/Mano/Ciudadano |
| **F6 Población** | f6 | lote por ámbito · fan-out announce/walk · demo duo distritos+locales |

## Helpers / tests

```bash
node --test test/*.test.js
# intent-shape (f4–f5) + poblacion-censo (f6 techo + ≥2 ámbitos)
```

## Wishlist f7

Ver [WISHLIST-f7.md](WISHLIST-f7.md) — alimenta Z05/Z09; **no implementar forks**.

## Transparencia (regla 3 sprint)

```bash
rg -i 'node-red|nodered' HOLONES/01-mythos/zeus-sdk/packages --glob '!**/node_modules/**' -l
# esperado: 0 archivos
```

## Fuera de este lote

- 169 plenos vivos (Z05) · publish nodos 0.3.x / SDK ^1.5 (Z09)
- Edits a engine/authority · mcp-launcher · lifecycle · BACKLOG · miniclon/
