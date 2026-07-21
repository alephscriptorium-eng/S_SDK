# ACTA · HOTFIX-GATES-2 — 2026-07-21

| dato | valor |
| ---- | ----- |
| rol | brazo orquestador (GO HOTFIX-GATES-2) |
| tip validado | `f93f163` (= `origin/main` al arranque) |
| rama | `wp/gc-hotfix-gates-2` |
| commit hotfix | `0b566e6` |
| merge SHA local | `0b566e6` (ff en `main` local; **origin/main** aún `f93f163`) |
| Actions run-id | ⏳ **bloqueado**: sin auth write (`gh` logout + push HTTPS pide user) |
| Z05-f1 | ✅ **no reabierto** |

## Claim → validación

Claim vigía (acta citada `scratchpad/vigia/REVISION-GC4-2026-07-21.md` —
**path no presente en workspace** al validar; claim contrastado contra tip):

| check | resultado |
| ----- | --------- |
| `rev-parse HEAD` == `f93f163` / `origin/main` | **sí** |
| `npm run gates` → 48 offenders, regla `two-games`, token `\bdelta\b` | **sí** |
| paths engine (authority-kit / game-engine / protocol) | **sí** (6 ficheros) |
| `git log af0bad9..1d087ee` introduce `GAME_STATE_DELTA` | **sí** (`1d087ee`) |
| Gates verdes en `af0bad9` → rojo desde `1d087ee` | **coherente** (colisión léxica) |

**Veredicto:** claim **cierto** → GO HOTFIX-GATES-2.

## Remedio

Excepciones justificadas en `scripts/gates/exceptions.mjs` (gate **no**
desactivado). Justificación D-8: usos genéricos de state-delta /
`GAME_STATE_DELTA` / `mode: 'delta'` — **no** el nombre del juego `delta`.

Paths:

1. `packages/engine/authority-kit/src/create-authority.mjs`
2. `packages/engine/game-engine/src/map-engine.mjs`
3. `packages/engine/protocol/src/event-meta.mjs`
4. `packages/engine/protocol/src/game-state-delta.mjs`
5. `packages/engine/protocol/src/index.mjs`
6. `packages/engine/protocol/types/index.d.ts`

## CA1 — gates + CI

```
$ npm run gates   # @ 0b566e6
gates: OK (0 offenders)
```

- Push rama / PR / merge a `origin/main`: **bloqueado en esta sesión**
  - `git push` → `could not read Username for 'https://github.com'`
  - `gh auth status` → not logged in; `GH_TOKEN` unset
- Custodio ops: `gh auth login` (o token write) → push `wp/gc-hotfix-gates-2`
  o push `main` @ `0b566e6` → anotar run-id Actions verde aquí
- Actions: ⏳ pendiente auth + push

## CA2 — plantilla / checklist gates

- `HOLONES/01-mythos/zeus-sdk/plan/REPORTES/PLANTILLA.md` — sección Gates
  obligatoria con `npm run gates`
- `plan/REPORTES/README.md` — checklist HOTFIX-GATES-2
- BACKLOG sprint: bullet HOTFIX-GATES-2 ✅ (Z05-f1 sigue ✅)

## Higiene (paralelo)

- Worktrees huérfanos zeus `wp-gc-z01` / `wp-gc-z11` (sin `.git`): removidos
- Ramas locales mergeadas borradas: `wp/gc-hotfix-gates-launcher`,
  `wp/gc-z01-mockdatas-browsers`
- `.sync-map.json` sprint: añadido `WP-Z15: 15`

## NO hechos

- No se reabre Z05-f1
- No se abre GC-5
