# RESMOKE post-A1 — 2026-07-21

Ops/gobierno orquestador. Contexto: Tick A1 (`npm ci`) cerrado en
`plan/SPRINTS/sprint-game-city/BACKLOG.md` §Cola post-GC-2 con evidencia
medida (zeus @ `fa73062`, GL @ `5b5bf4e`). Este acta = intento vivo
**después** de A1.

## Checkout al momento del intento

| Repo | SHA corto | Nota |
|---|---|---|
| zeus-sdk | `fa73062` | tip medido A1 |
| games-library | `006aef1` | tip local al intento (A1 midió `5b5bf4e`; tip puede ir adelante) |
| SCRIPT_SDK | tip local pre-commit gobierno | — |

`node_modules/` presente en zeus (`ls` top-level ≈ 329 entradas) y GL.

## Intentos (literales)

### 1. Zeus socket-server `:3017` / rooms

```text
$ cd HOLONES/01-mythos/zeus-sdk && npm run start:socket-server
> @zeus/socket-server@0.1.0 start
> node src/index.mjs

Error [ERR_MODULE_NOT_FOUND]: Cannot find module
'.../zeus-sdk/node_modules/@alephscript/mcp-core-sdk/server'
imported from .../packages/mesh/socket-server/src/create-server.mjs
code: 'ERR_MODULE_NOT_FOUND'
Node.js v22.21.1
npm error Lifecycle script `start` failed with error: code 1
```

Post-check:

```text
express_root=NO
mcp_pkgjson=NO   # falta package.json bajo node_modules/@alephscript/mcp-core-sdk/
mcp_dir=YES      # quedan dist/ src/ test-facade/ — paquete incompleto/inválido
npm ls @alephscript/mcp-core-sdk → invalid: "^1.5.0" from the root project (ELSPROBLEMS)
```

`curl http://127.0.0.1:3017/health` → `Failed to connect` (nada LISTENING en 3017).

**Veredicto :3017:** FAIL — no rooms / no `/runtime`.

### 2. H1 cache-browser `:3015` (+ `ZEUS_VOLUMES_ROOT`)

```text
$ ZEUS_VOLUMES_ROOT=<zeus>/VOLUMES npm run start:cache-browser
> @zeus/cache-browser@0.1.0 start
> node src/server.mjs

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'express'
imported from .../packages/mesh/cache-browser/src/server.mjs
```

`curl http://127.0.0.1:3015/health` → `Failed to connect` (nada LISTENING en 3015).

Volúmenes canónicos presentes: `zeus-sdk/VOLUMES/DISK_02`, `DISK_03`.
Env aplicado; el fallo es anterior (resolve de deps), no de path de volúmenes.

**Veredicto :3015 / H1:** FAIL.

### 3. Z08 f1–f3 / dual NR (parcial)

| Puerto | Estado observado | Nota |
|---|---|---|
| `:1880` Node-RED | LISTENING · `GET /` → **200** | proceso desde worktree `gc-z08-nodered-visor` (npx node-red) |
| `:3016` firehose-browser | LISTENING (intermitente en la sesión) | no es CA de f1–f3 contra fabric |
| `:3017` fabric | DOWN | bloquea Ojo/Oreja vivos |
| `:3015` cache | DOWN | bloquea F3 volumen vivo |

No se re-ejecutó suite `flows/test` ni dashboard rooms/fleet contra fabric
(ausente). Dual NR / authority Mano·Ciudadano: **no verificado** (sin `:3017`).

**Veredicto Z08 f1–f3 vivo:** FAIL / incompleto — NR UI responde; fabric zeus no.

### 4. Federación e2e Z04

No intentado (no trivial): WP-Z04 sigue 🔶 en vuelo; sin socket `:3017` el e2e
peer→authority no aplica.

## Veredicto global

**RESMOKE = FAIL** (no ✅).

A1 (`npm ci` EXIT OK medido) **no implica** tree runtime usable: hoisting /
paquete `@alephscript/mcp-core-sdk` incompleto (sin `package.json`) + `express`
ausente en root de zeus → socket-server y cache-browser no arrancan.

## Causa + residual

| Id | Causa | Residual ops |
|---|---|---|
| R1 | `@alephscript/mcp-core-sdk` en `node_modules` **inválido** (dir sin `package.json`; `npm ls` ELSPROBLEMS) | Reinstalar / reparar dep registry en zeus (`npm ci` limpio o re-fetch del tarball); verificar exports `server` |
| R2 | `express` no resuelve en workspace `@zeus/cache-browser` (solo anidado bajo otros pkgs) | Tras R1, confirmar `node_modules/express` en root o workspace install |
| R3 | `:3017` / `:3015` DOWN | Re-smoke cuando R1+R2 sanos |
| R4 | Z08 f1–f3 / D1–D3 | Siguen deferred a fabric+H1 vivos |
| R5 | Z04 federation e2e | Fuera de alcance hasta Z04+`:3017` |

## URLs / puertos (estación)

| Servicio | URL / puerto | Resultado |
|---|---|---|
| socket-server / rooms | `http://127.0.0.1:3017/health` · ws `/runtime` | DOWN |
| cache-browser | `http://127.0.0.1:3015/health` | DOWN |
| Node-RED visor | `http://127.0.0.1:1880/` | UP 200 |
| firehose-browser | `http://127.0.0.1:3016/` | LISTENING (sesión) |

