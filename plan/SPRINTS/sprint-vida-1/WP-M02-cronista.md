# WP-M02 — Cronista (SEMILLA §4)

| dato | valor |
|---|---|
| track / prio | PACK / 1 · ola **V1-1** |
| depende de | Z07 ✅ (story-board) · CAMPANAS ✅ (announce → sonido plaza) — **no** reopen |
| fuente | [SEMILLA-GAMIFICACION §4](../sprint-game-city/SEMILLA-GAMIFICACION.md) |
| base | instancia dramaturgo / pack — actor rol `dj` |

> **Estado canónico:** solo en [BACKLOG.md](BACKLOG.md).

## Objetivo

Cerrar el loop narrativo: un actor **cronista** (rol `dj`) lee
`story-board.json` y re-emite los actos como `announce` en la plaza (suena
vía campanas ✅). La narrativa vuelve al juego.

## Nota vinculante (contrato)

`story-board.json` es **sustrato de contexto compartido** dimensionado para
**lectura multi-agente** — no decoración. El contrato de lectura debe
servir al cronista y a al menos otro lector (agente/cliente) sin canal
nuevo. Ver [DC-V1-story-board-contrato](DECISIONES.md).

## Entregables

1. Actor/ciudadano `cronista` con rol `dj` en el pack (o wiring mínimo).
2. Lectura de `story-board.json` (instancia ciudad / seeds) → proyección a
   intents `announce` en plaza.
3. Evidencia de que announce dispara el camino sonoro ya cerrado (CAMPANAS)
   — no reimplementar audio.
4. Documento corto del contrato de lectura multi-agente (campos/orden/
   idempotencia mínima).
5. Reporte: `plan/REPORTES/WP-M02-cronista.md`.

## Criterios de aceptación

- [ ] Cronista lee story-board y emite ≥1 `announce` trazable a un acto del
      board (fixture o smoke).
- [ ] Contrato de lectura documentado para multi-agente (no solo el
      cronista).
- [ ] No toca engine / no canal nuevo / no reopen CAMPANAS ni Z07.
- [ ] Eje **I**: consumidor real (cronista) usa el board.
- [ ] Eje **II**: un destino canónico para el lector; sin duplicar schema
      del board.
- [ ] Ceguera: árbol + `git log -p`; marca OK.
- [ ] Diff solo en `ALCANCE_DIFF` del brief.

## Fuera de alcance

- LLM / generación libre de narrativa.
- Engine · SEMILLA §2/§6 · embajador · E_SDK.
- `gh issue create`.

## Notas

- Paralelo OK con M01 si paths no se pisan.
- Rama: `wp/v1-m02-cronista`.
