# WP-Z03 — Juego de engine `ciudad` (patrón pozo)

| dato | valor |
|---|---|
| estado | ⬜ |
| track / prio | PACK / 2 |
| depende de | Z02 (seeds) |
| base zeus | games-library `packages\pozo` como plantilla: `src\contract.mjs` (GAME_ID, INTENTS vía `createIntentCatalog`, escena), `src\domain.mjs` (reducer puro), `src\authority.mjs` (`startAuthority`), `src\player-mcp\` (`createPlayerRoomBridge`, `confirmIntent`), `spec\CASOS.md` |

## Objetivo

El juego que da vida al startpack: la ciudad como gamemap jugable donde actores externos
entran, recorren calles y despiertan barrios.

## Entregables

1. Paquete `ciudad` en games-library, GAME_ID/slug `ciudad`, escena sembrada desde
   `@zeus/startpack-ciudad` (Z02).
2. Catálogo de intents mínimo: `walk` (entre anchors), `announce` (presencia en plaza),
   `wake` (despertar barrio latente ofreciendo un tool real por horse).
3. Reducer puro en `domain.mjs`: el estado del barrio (vivo/latente/muerto/roto) cambia
   solo por intents confirmados; el snapshot lo refleja.
4. `authority.mjs` — una room, una autoridad (límite actual del engine, asumido).
5. `src\player-mcp\` — MCP por actor sobre `@zeus/player-mcp-kit`.
6. `spec\CASOS.md` — playbook con el MVP como caso 1.

## MVP (mecánica mínima jugable)

Un rabbit entra → walk por calles entre anchors → llega a un barrio `latente` →
ofrece un tool real vía horse (`tools/call`) → el barrio pasa a `vivo` en el snapshot.
Sin pathfinding, sin permisos por objeto: todo en una room.

## Roles

`player` = rabbit · `operator` = plaza · `dj` = dramaturgo (Z07).

## Criterios de aceptación

- [ ] e2e estilo `arg-horse-demo.mjs`: entra → walk → wake → snapshot cambia.
- [ ] El reducer es puro y testeable sin transporte (tests de dominio solos).
- [ ] La escena viene del startpack, no hardcodeada en el juego.
- [ ] `spec\CASOS.md` cubre MVP + 1 caso de rechazo (wake sobre barrio `muerto` falla).

## Notas

- Monigotil por defecto (viñeta/placeholders `ui-3d-kit`); GLB sofisticado = opt-in
  posterior, sin cambio de contrato (nota monigotil).
- Lo que el juego no pueda expresar por límites del engine se anota y alimenta Z05 —
  no se parchea el engine desde el juego.
