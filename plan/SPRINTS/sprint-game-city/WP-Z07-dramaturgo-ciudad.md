# WP-Z07 — Instancia dramaturgo `ciudad` (capa lectura)

| dato | valor |
|---|---|
| estado | ⬜ |
| track / prio | PACK / 4 |
| depende de | Z03 (necesita ledger/track del juego como materia de los actos) |
| base zeus | games-library `kits\carpeta-dramaturgo\` — kit de juegos-LECTURA: CLI `scripts\instantiate.mjs --slug --title --theme --from --reic-r/e/i/c`; entrega `instances\<slug>\` con blockchain/agentchain/story-board.json; validador `scripts\validate-story-board.mjs` |

## Objetivo

La segunda capa de la doble capa decidida por el usuario: sobre el juego de engine
(Z03), una instancia dramaturgo que **narra lo que el engine registra**. La capa engine
produce ledger/track; la capa lectura los convierte en actos.

## Entregables

1. Instancia `instances\ciudad\` generada con `instantiate.mjs --slug ciudad` (+ title,
   theme, ejes REIC propuestos en el propio WP al ejecutarlo — contrastar flags contra
   el CLI real antes de invocar).
2. Mapeo actos ← ledger: cada evento significativo del juego (announce, cruce de
   distrito, wake de barrio) tiene proyección narrativa en el story-board.
3. `story-board.json` validado con `validate-story-board.mjs`.

## Criterios de aceptación

- [ ] La instancia se genera con el CLI del kit, sin tocar el kit.
- [ ] Tras correr el e2e de Z04, el acto «un barrio despertó» aparece en el story-board
      (regenerado o actualizado desde el ledger).
- [ ] `validate-story-board.mjs` pasa.
- [ ] El Dramaturgo NO produce mundos gamemap (límite del kit, asumido): la escena vive
      en Z02/Z03; aquí solo lectura.

## Notas

- Rol `dj` del catálogo de intents de Z03 = esta capa.
- Es la pieza que convierte el pack en historia contable: mockdatas (Z01) muestran el
  pulso, el juego (Z03) lo produce, el dramaturgo lo narra.
