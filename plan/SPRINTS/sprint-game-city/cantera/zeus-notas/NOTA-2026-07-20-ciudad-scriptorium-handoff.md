# NOTA — Índice-ciudad Scriptorium (handoff remoto)

| dato | valor |
| ---- | ----- |
| fecha | 2026-07-20 |
| tipo | handoff / índice (no WP) |
| origen | `aleph-scriptorium/ARCHIVO/DEVOPS/CIUDAD/HANDOFF.md` (fuera de este monorepo) |
| raíz ciudad | `C:\Users\aleph\OASIS\aleph-scriptorium\ARCHIVO\DEVOPS\CIUDAD\` |
| estado | asentado · fuente viva = remoto |
| siguiente | [handoff materiales ★](./HANDOFF-2026-07-20-materiales-gamificacion-mcp.md) |
| cadena | … → [fusión Launcher×zeus](./NOTA-2026-07-20-fusion-launcher-zeus-mcp.md) → **este nodo** → handoff materiales |

## Entendido

El monorepo `aleph-scriptorium` se indexa como **ciudad gamificada**: plaza
(`.github_V1`) → zigurat (VsCodeExtension) → barrios (gitmodules) →
locales/naves (plugins) → edificios (agentes) → packs. Este handoff es la
**puerta de reentrada** al índice; no duplica el mapa — apunta.

Metáfora alineada con nuestra cadena: barrios RUNTIME/MCP y naves SDK
tocan Launcher / fleet zeus; la ciudad es el **contexto ops** donde viven.

## Entrada (abrir en este orden)

1. [`README.md`](file:///C:/Users/aleph/OASIS/aleph-scriptorium/ARCHIVO/DEVOPS/CIUDAD/README.md) — propósito + leyenda
2. [`MAPA.md`](file:///C:/Users/aleph/OASIS/aleph-scriptorium/ARCHIVO/DEVOPS/CIUDAD/MAPA.md) — plaza / zigurat / barrios
3. [`00-CAPAS.md`](file:///C:/Users/aleph/OASIS/aleph-scriptorium/ARCHIVO/DEVOPS/CIUDAD/00-CAPAS.md) — roadmap de capas
4. Canónico handoff: [`HANDOFF.md`](file:///C:/Users/aleph/OASIS/aleph-scriptorium/ARCHIVO/DEVOPS/CIUDAD/HANDOFF.md)

## Capas clave (punteros)

| Qué | Ruta |
|-----|------|
| Zigurat | `…/CIUDAD/00-ZIGURAT/_INDICE.md` |
| Barrios | `…/CIUDAD/01-BARRIOS/_INDICE.md` |
| Fichas | `…/CIUDAD/01-BARRIOS/_FICHAS.md` |
| VPS remoto | `…/CIUDAD/01-BARRIOS/24-ScriptoriumVps.md` |
| Vecino red | `…/CIUDAD/01-BARRIOS/05-BlockchainComPort.md` |
| Locales/naves | `…/CIUDAD/02-LOCALES-Y-NAVES/_INDICE.md` |
| Grafo V1 | `…/CIUDAD/GRAFO/handoffs.md` |
| Grafo 5.1 | `…/CIUDAD/GRAFO/05.1-INDICE.md` |
| DRY sync | `…/CIUDAD/07.1-PLAN-SYNC-DRY.md` |

(`…` = `C:\Users\aleph\OASIS\aleph-scriptorium\ARCHIVO\DEVOPS`)

## Índices clásicos contrastados

- `ARCHIVO/DEVOPS/Tecnico.md` · `Funcional.md`
- `.github_V1/plugins/registry.json`
- `.github_V1/agents/AGENTS.md` · `plugin_ox_scriptoriumvps.agent.md`

## Si retomas (desde aquí)

1. `MAPA.md` → Plaza / Zigurat / barrios.
2. Gaps menores ya listados en el handoff remoto: casing handoffs, links
   `.github/` → `.github_V1`, refrescar foto en `07-DRY-VALIDACION.md`.
3. Commit solo si se pide (en el repo de la ciudad, no en zeus).

## Relación con la cadena zeus

| Nodo zeus | Ancla en la ciudad |
| --------- | ------------------ |
| game\* / monigotil | gamificación del índice (metáfora ciudad) |
| agujero negro MCP/REST | barrios RUNTIME/MCP · locales MCP |
| Launcher mesh vieja | nave/local `mcp-mesh-sdk` (MCPGallery) |
| fleet zeus MCP | barrio/consumo desde SCRIPTORIUM_V0 / Z_SDK |
