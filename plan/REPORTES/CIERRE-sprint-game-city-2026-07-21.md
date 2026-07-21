# CIERRE — sprint-game-city · 2026-07-21

| dato | valor |
| ---- | ----- |
| rol | brazo gobierno LOCAL-ONLY |
| fuente | `plan/SPRINTS/sprint-game-city/BACKLOG.md` §«Cierre del sprint (parte final — no evaporar)» |
| naturaleza | **evidencia / retroalimentación a aleph** — **no** WP nuevo |
| higiene previa | [HIGIENE-I70-I74-2026-07-21.md](HIGIENE-I70-I74-2026-07-21.md) |
| proyección seca | [PROYECCION-GC-city-2026-07-21-post-GC4.md](PROYECCION-GC-city-2026-07-21-post-GC4.md) |
| push / `gh` write | **cero** hasta aviso auth write |

## 1. Z04 = WP-S20 de facto

Peer externo federando contra el contrato **rooms/protocol** (eje IV del sprint).

| evidencia | ruta / dato |
| --------- | ----------- |
| ficha WP | `plan/SPRINTS/sprint-game-city/WP-Z04-rabbits-rsh.md` — peer externo por canal sancionado |
| brief | `plan/REPORTES/BRIEF-WP-Z04-rabbits-rsh.md` — eje IV = 2º cliente rooms/protocol |
| reporte obra | `plan/REPORTES/WP-Z04-rabbits-rsh.md` — federación e2e r/s/h; peer solo `@zeus/rooms` + `makeIntent`; caso C-03; smoke + demo |
| backlog | bullet Z04 ola GC-3 · dep Z03 ✅ · Z06 ✅ · eje IV |

Lectura de cierre: lo que un WP-S20 pediría (segundo cliente del contrato, sin privilegiar un jugador) quedó **demostrado en obra** dentro del pack ciudad, no como prosa de plan.

## 2. Pack ciudad = primer consumidor cruzado (constelación holón 06)

El pack ciudad consume la constelación zeus (rooms, authority, mesh/MCP, línea, visor) como **caso de uso vivo**, no como demo aislada de un solo paquete.

| evidencia | ruta / dato |
| --------- | ----------- |
| vista | `plan/SPRINTS/sprint-game-city/VISTA.md` — pack vale por sí mismo; retroalimentar a aleph es opcional aguas abajo |
| cadena GC | Z01–Z04, Z06–Z15 cerrados de plan; Z05 paraguas 🔶 (items 3–6 parked) — ver proyección post-GC-4 |
| consumidores | fixtures/federation (Z04), mcp-launcher (Z06), nodered/miniclon (Z08/Z09), linea-editor (Z11), etc. bajo `packages/ciudad` / mesh en zeus |

Para la juntura 05–06: **no re-excavar** — citar este cierre y las rutas de reporte anteriores.

## 3. NovelistEditor → sugerir «absorber-concepto y archivar»

Sugerencia al futuro **INVENTARIO** de aleph (reclasificar de «alinear» → **«absorber-concepto y archivar»**). La **decisión** es del plan aleph (**DAS-1**); aquí solo evidencia.

| evidencia | ruta / dato |
| --------- | ----------- |
| mandato de cierre | BACKLOG §Cierre — micro-acción 3, ronda 2 |
| concepto portado | vía **WP-Z11** (`plan/REPORTES/WP-Z11-linea-editor.md` / ficha `WP-Z11-linea-editor.md`) — interfaz agéntica de autoría (tools MCP + resources/URIs + prompts + tool que persiste y delega export) |
| recon 2026-07-20 (citado en ficha Z11) | boceto experimental; árbol plano sin noción de línea; transmedia sin código; dep `file:` tgz de `mcp-core-sdk` (lista negra aleph) |
| cantera (contexto, sin autoridad de runtime) | `plan/SPRINTS/sprint-game-city/cantera/CIUDAD/01-BARRIOS/08-NovelistEditor.md` |
| DAS-1 | `VISTA.md` — bloqueo del plan aleph; ningún WP de este sprint espera por DAS |

## Estado del sprint (foto local)

- GC-4 cerrado en plan (Z11 + Z05-f1/f2 aceptados); HOTFIX-GATES-2 CA1 ✅ (`0b566e6`, Actions run `29839611853`) — ver `ACTA-HOTFIX-GATES-2-2026-07-21.md`.
- Invariantes retenidos: **no** reopen Z05-f1 · **no** abrir GC-5 · **no** tocar `.sync-map.json` (Z15→#15 se vuelve verdadero al crear/aplicar #15 después).
- Drift vs `origin/main`: esperado (commits gobierno locales sin push).

## Cola D — NO EJECUTAR ahora (pendiente auth write)

Tras aviso custodio con auth write:

1. Verificar / crear issue **#15 = WP-Z15** (número 15) en S_SDK si el mapa aún no refleja verdad remota.
2. **Apply** proyección — comandos en `PROYECCION-GC-city-2026-07-21-post-GC4.md` (`PROYECCION_GITHUB=1` + `--habilitar-github`).
3. Completar acta post-apply: `PROYECCION-GC-city-2026-07-21-post-apply.md` (esqueleto; rellenar URLs).
4. Actualizar panorámica Z_SDK **#2** con `--body-file plan/REPORTES/PANORAMICA-Z_SDK-2-post-GC4.md`.
5. **Push** gobierno acumulado (`git push origin HEAD`) — solo entonces.

Hasta ese aviso: **cero** `gh` de escritura, **cero** push.