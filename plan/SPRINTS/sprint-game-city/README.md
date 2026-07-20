# sprint-game-city — plan de sprint aislado (protocolo swarm)

> Sprint autocontenido montado bajo el protocolo del skill `swarm-orquestacion`
> (skill.s-sdk 0.3.4+). Objetivo: dar vida y caso de uso a la base zeus — pack ciudad,
> constelación Node-RED, viajes sobre linea-kit y launcher r/s/h. Origen: drenado y
> refinado en `TEMP\BACKLOG\` (2026-07-20), asentado aquí como fuente de verdad en git.

## Parámetros del mundo (según el skill)

| parámetro | valor |
|---|---|
| `MUNDO_RAIZ` | `C:\Users\aleph\SCRIPT_SDK` (superproyecto: único árbol que ve juntos los dos repos objetivo + la cantera) |
| `PLAN_DIR` | `plan\SPRINTS\sprint-game-city\` (este directorio — plan propio del sprint) |
| `ALCANCE_DIFF` | `HOLONES\01-mythos\zeus-sdk\**` · `HOLONES\01-mythos\games-library\**` · `plan\SPRINTS\sprint-game-city\**` (nada más) |
| `WORKTREE_BASE` | `.worktrees\` del repo donde ejecute cada WP (zeus-sdk o games-library) |
| `RAMA_WP` | `wp/gc-<id>-<slug>` (prefijo `gc-` = game-city, distingue de los `wp/u*` propios de zeus) |

## Aislamiento y no-interferencia (las tres garantías)

1. **No toca ningún BACKLOG ajeno.** Ni `plan\BACKLOG.md` de SCRIPT_SDK (gobierno,
   track I) ni `plan\BACKLOG.md` de zeus-sdk (track U, su orquestador). Este sprint
   tiene BACKLOG propio ([BACKLOG.md](BACKLOG.md)) — regla de oro 2 del skill aplicada
   por partida doble.
2. **No mueve el puntero de submódulos al montarse.** El asiento es solo esta carpeta
   en el superproyecto. Los submódulos se tocan únicamente cuando un WP se ejecute, por
   el canal normal del protocolo (rama `wp/gc-*` + worktree + reporte).
3. **Borrable sin residuo.** `git rm -r plan/SPRINTS/sprint-game-city` (o descartar la
   rama de asiento) elimina el sprint entero; ningún otro fichero del mundo lo referencia.

**Interfaz con el gobierno zeus (eje V — mediación transparente):** cuando un WP aterrice
en zeus-sdk/games-library, se **ofrece** como rama+reporte; no se impone entrada en su
BACKLOG. Su orquestador puede saber que existe este sprint; la mediación es abierta.

## Dónde está cada cosa

| fichero | rol |
|---|---|
| [BACKLOG.md](BACKLOG.md) | **El operable**: tabla de WPs, estados, tracks, orden, ejes CA. Solo el orquestador del sprint lo escribe. |
| [VISTA.md](VISTA.md) | El marco: la vista SCRIPT_SDK, restricciones que caen / contratos que se conservan, drenaje de fuentes. |
| [RECAP-NODERED.md](RECAP-NODERED.md) | La redefinición del plan por Node-RED (constelación, rescates). |
| [RECURSOS-LIBS.md](RECURSOS-LIBS.md) | Catálogo verificado: piezas reusables, puertos, switch local↔VPS, registry. |
| `WP-Z01..Z10-*.md` | Los 10 WPs con base, entregables y CA. |

## Cantera externa (aviso)

Los WPs citan material que hoy vive **sin trackear** en `TEMP\material\` (CIUDAD, 56
ficheros ~405 KB; zeus-notas) y codebases externas con ruta absoluta (`WiringEditor`,
`ScriptoriumVps`, …). Riesgo asumido y acotado: los WP Z01/Z02 transforman la cantera en
datos del repo al ejecutarse (generadores idempotentes). Decisión pendiente del
orquestador: si commitear `TEMP\material\CIUDAD\` como anexo del sprint o dejarla externa.

---
*Cadena de contexto: `TEMP\block1.md` → `block2.md` → `handoff.md` → `TEMP\BACKLOG\`
(borrador vivo) → **este sprint** (asiento en git). Si el borrador de TEMP y este plan
divergen, manda este plan (regla 15 del skill: fuente de verdad única = git).*
