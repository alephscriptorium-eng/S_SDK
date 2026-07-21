# Acta OPS · GO-4 · Pavimentación epic embajador (sin abrir el epic)

| dato | valor |
| ---- | ----- |
| agente | ops · brazo orquestador |
| fecha | 2026-07-21 |
| repo | `SCRIPT_SDK` (+ submódulo `zeus-sdk`) |
| parked | epic embajador completo (sin GO) |

## Tabla a–d

| id | ítem | veredicto | evidencia |
| -- | ---- | --------- | --------- |
| **(a)** | D2 Z09 — publish contribs **0.3.0** | **PASS** | `+ node-red-contrib-alephscript-core@0.3.0` · `+ node-red-dashboard-2-alephscript-rooms@0.3.0` → Verdaccio; `npm view` → versions incluyen `0.3.0`; deps `@alephscript/mcp-core-sdk@^1.5.0` |
| **(b)** | D1 — smoke Docker `/dashboard/rooms` | **FAIL / defer** | `com.docker.service` = **Stopped**; `docker info` → no API (`npipe:////./pipe/dockerDesktopLinuxEngine`); sin `compose up` |
| **(c)** | Firma del conector (cola U93) | **PASS** | **D-40**: firma = «visor pide card»; SSB = extensión diferida. Código mínimo viewer + serve lab; residual BACKLOG tachado |
| **(d)** | Pin Node-RED VPS en manifiesto | **PASS** | OCI `NODE_RED_VERSION=v5.0.1` / label `5.0.1` → pin `nodered/node-red:5.0.1` en Dockerfile, compose, `.env.example`, `node-red-contribs.json`, README |

## (a) Publish — detalle

- Auth local: **no** `NPM_USERNAME`/`NPM_PASSWORD` en shell del agente; `~/.npmrc` trae `_authToken` (anti-patrón DE-I12 / ENEEDAUTH en `whoami`).
- Corrida: secrets **`VERDACCIO_ADMIN_*`** de `ScriptoriumVps/.env.generated-secrets` → `NPM_USERNAME`/`NPM_PASSWORD` efímeros → `scripts/publish-nodes-0.3.sh` (username + `_password` base64).
- Fix build previo: `tsconfig` del core excluía mal `src/lib/**` (paths `@/` rotos; no van en el tarball 0.2.x).
- GH secrets `NPM_USERNAME`/`NPM_PASSWORD` en S_SDK / Z_SDK: presentes (listables); no usados en esta corrida.

```text
npm view node-red-contrib-alephscript-core versions --registry https://npm.scriptorium.escrivivir.co
→ [ '0.2.0', '0.3.0' ]

npm view node-red-dashboard-2-alephscript-rooms versions --registry https://npm.scriptorium.escrivivir.co
→ [ '0.1.0', '0.2.0', '0.3.0' ]

dependencies @0.3.0 → @alephscript/mcp-core-sdk: ^1.5.0
```

Comando canónico (estación sin secrets locales):

```bash
export NPM_USERNAME=… NPM_PASSWORD=…   # raw password; script hace base64
# o: source ScriptoriumVps/.env.generated-secrets → mapear VERDACCIO_ADMIN_* 
cd plan/SPRINTS/sprint-game-city/miniclon
./scripts/build-and-pack.sh
./scripts/publish-nodes-0.3.sh
```

## (b) Docker smoke — detalle

```text
Get-Service com.docker.service → Status=Stopped, StartType=Manual
docker info → failed to connect to the docker API at
  npipe:////./pipe/dockerDesktopLinuxEngine
```

Retomar D1 cuando el custodio levante Docker Desktop: `docker compose up --build` → `http://localhost:1880/dashboard/rooms`.

## (c) Firma conector U93 — detalle

Fuente cola: `zeus-sdk/plan/BACKLOG.md` residual + `BACKLOG-HISTORICO` «firma SSB vs «visor pide card»».

- Decisión **D-40** en `zeus-sdk/plan/DECISIONES.md`.
- Viewer: exige `__ZEUS__.peerCard` o lab `__ZEUS__.allowLocalPeerCard=true`.
- `serve.mjs` lab pone `allowLocalPeerCard: true`.
- Epic peercards / embajador: **no abiertos**.

## (d) Node-RED pin — detalle

Fuente: registro Docker Hub `nodered/node-red:latest` → config OCI:

```text
org.label-schema.version=5.0.1
NODE_RED_VERSION=v5.0.1
NODE_VERSION=24.18.0
build-date=2026-07-01T14:54:58Z
amd64 digest=sha256:ca13faf3f558ff229b0a1d63c9f0f376c2918abc51a3b77a8e1a29b5caa4b8a3
```

VPS compose sigue en `:latest`; el **clon** fija `5.0.1` para reproducir la versión exacta observada.

## SHAs

| árbol | SHA | nota |
| ----- | --- | ---- |
| zeus-sdk | `b67b9ca` | D-40 + viewer + BACKLOG residual cerrado |
| SCRIPT_SDK | `c7d3dc2` (obra) · tip `7a12f1d` | acta + miniclon pin 5.0.1 + bump zeus + fix tsconfig publish |

## Bloqueos

1. **D1 Docker** — daemon Stopped; smoke `/dashboard/rooms` diferido.
2. Epic embajador — parked (GO-4 solo pavimenta).
3. D3/D4 Z09 (cliente federado vivo / switch VPS) — siguen diferidos (dependen D1).

## Parked sin GO

- Epic embajador completo.
- SEMILLA §2–§4/§6 · Z05 items 3–6 (ajenos a este acta).

---

## Addendum · ops residuales (reintento D1) · 2026-07-21 ~22:18 +02

Reintento GO-4 residual **sin abrir epic embajador**.

| id | ítem | veredicto | evidencia |
| -- | ---- | --------- | --------- |
| **D1** | smoke Docker `/dashboard/rooms` | **FAIL / defer** (sin cambio) | `com.docker.service` = **Stopped** · `StartType=Manual`; pipe `\\.\pipe\dockerDesktopLinuxEngine` = **False**; `docker ps` → no API (`npipe:////./pipe/dockerDesktopLinuxEngine`); sin proceso `Docker Desktop`; sin `compose up` |
| **D2** | publish contribs **0.3.0** | **PASS** (reconfirmado) | `npm view … versions` → core `[0.2.0, 0.3.0]` · rooms `[0.1.0, 0.2.0, 0.3.0]`; deps `@0.3.0` → `@alephscript/mcp-core-sdk@^1.5.0` |
| **manifiesto** | pin Node-RED **5.0.1** + contribs 0.3.x | **PASS** (reconfirmado) | `NODERED_BASE_IMAGE=nodered/node-red:5.0.1` en Dockerfile / compose / `.env.example`; `node-red-contribs.json` → `…-core@0.3.0` + `…-rooms@0.3.0` + nota pin 5.0.1 |

```text
# D1 — 2026-07-21 22:17+02
Get-Service com.docker.service → Status=Stopped, StartType=Manual
Test-Path \\.\pipe\dockerDesktopLinuxEngine → False
docker info / docker ps → failed to connect to the docker API at
  npipe:////./pipe/dockerDesktopLinuxEngine
Get-Process "Docker Desktop" → (ninguno)

# D2 — registry https://npm.scriptorium.escrivivir.co
node-red-contrib-alephscript-core versions → [ '0.2.0', '0.3.0' ]
node-red-dashboard-2-alephscript-rooms versions → [ '0.1.0', '0.2.0', '0.3.0' ]
@0.3.0 dependencies → @alephscript/mcp-core-sdk: ^1.5.0
```

**Acción pendiente custodio:** levantar Docker Desktop → en `plan/SPRINTS/sprint-game-city/miniclon`: `docker compose up --build` → GET `http://localhost:1880/dashboard/rooms`.

| árbol | SHA al addendum | nota |
| ----- | --------------- | ---- |
| SCRIPT_SDK | tip `98dc742` (+ commit de este addendum) | solo acta |
| zeus-sdk | `fe75269` (submódulo dirty tip local; no bump en este addendum) | fuera de alcance residual D1 |
