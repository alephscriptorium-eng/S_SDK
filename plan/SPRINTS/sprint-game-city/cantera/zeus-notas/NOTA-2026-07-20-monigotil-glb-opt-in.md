# NOTA — Mundo monigotil: muñecos / decorado → GLB sofisticado = opt-in

| dato | valor |
| ---- | ----- |
| fecha | 2026-07-20 |
| tipo | entendimiento de requisitos (no WP) |
| contexto | capa game\* (`game-engine` / `ui-3d-kit`) |
| estado | asentado |
| siguiente | [agujero negro = MCP/REST](./NOTA-2026-07-20-agujero-negro-mcp-rest.md) |

## Entendido

El **mundo A “monigotil”** pide muñecos y decorado de **economía gráfica** (viñeta, líneas, vacío antes que props). Eso es el **default** de lectura visual — no el techo técnico.

Modelos `*.glb` más sofisticados (rig real, mesh denso, PBR) se tratan como **opt-in**: el contrato lógico no los exige; el viewer puede enchufarlos cuando el título o el arte lo piden.

## Relación con la pila game\*

| Pieza | Qué queda monigotil por defecto | Dónde entra el opt-in GLB |
| ----- | -------------------------------- | ------------------------- |
| **gameobjects** (quién) | Alephillo / silueta de pocos trazos ([spec/alephillo](../../packages/engine/game-engine/spec/alephillo/)) | Swap de binario + clip-map (`SK_Alephillo.glb` → rig `ALP_*`; u otro `kind`) |
| **gamethings** (dónde) | Nodos/enlaces/anclas como grafo; decorado mínimo | Anclas/props con GLB rico solo si la escena lo declara |
| **gamemap** / **gamechannel** | Ids, poses, snapshots — **agnósticos al mesh** | Sin cambio de contrato |
| **gameviewer** (`ui-3d-kit`) | Placeholders three.js hoy | Carga del asset opt-in; placeholders siguen siendo baseline |

Hoy los GLB en `@zeus/game-engine/assets/models` son **placeholders** (Xbot / SheenChair, etc.); el camino canónico ya es “sustituir binario + clip-map”, no reescribir el mapa.

## Implicación

Completar capacidades de gamificación ≠ imponer fidelidad 3D. Primero cerrar things/objects/canal/viewer sobre el grafo plano; el **upgrade visual** es capa opt-in encima del mismo `GAME_STATE`.
