# 🏛️ Zigurat — `VsCodeExtension`

> **Capa especial Z** (transversal). No es un barrio de distrito: es el **teatro-orquestador IDE** que opera la ciudad.  
> Plan: [Plan Zigurat](04800ddc-9d2e-4fa0-b764-66ff9289d8a2) · Integrado 2026-07-20.

## Qué es

| | |
|--|--|
| Path | `VsCodeExtension/` |
| Submodule | `vscode-alephscript-extension` |
| Rol ciudad | Host VS Code: activity bar, comandos `alephscript.*`, Teatro theatrical, tasks → barrios |
| Plugin registry | — (sin local nativo) |
| README-SCRIPTORIUM | ✅ `VsCodeExtension/README-SCRIPTORIUM.md` + esta carpeta |

## Qué no es

- No es barrio Runtime/MCP llano (aunque el gitmodules lo liste #1).
- No sustituye la Plaza (`.github_V1` agentes @ox/@aleph).
- No es el plugin `teatro` / `arg-board` (viven en plaza; cableado Zigurat↔ARG es **débil**).

## Artefactos

| Archivo | Contenido |
|---------|-----------|
| [`MAPA-ZIGURAT.md`](MAPA-ZIGURAT.md) | Una pantalla: Plaza ↔ Zigurat ↔ distritos |
| [`01-PLANTAS.md`](01-PLANTAS.md) | Views del activity bar `arrakisTheater` |
| [`02-COMANDOS.md`](02-COMANDOS.md) | Familias `alephscript.*` |
| [`03-CONEXIONES.md`](03-CONEXIONES.md) | demo.runAll, HackerTasks prefixes, gaps |
| [`04-ELENCO-TEATRAL.md`](04-ELENCO-TEATRAL.md) | Agentes theatrical vs plaza |

## Ancla gitmodules

Sigue contando como submodule #1 en [`../01-BARRIOS/_INDICE.md`](../01-BARRIOS/_INDICE.md) marcado **🏛️ Zigurat**.  
Ficha stub: [`../01-BARRIOS/01-VsCodeExtension.md`](../01-BARRIOS/01-VsCodeExtension.md).

## Criterio de lectura

```
Plaza gobierna (agentes/docs)
   ↓ run_vscode_command
Zigurat opera el IDE
   ↓ terminals / tasks / UIs
Barrios ejecutan el runtime
```
