# ACTA — HOTFIX-GATES-2 — 2026-07-21

| dato | valor |
| ---- | ----- |
| rol | brazo orquestador (GO HOTFIX-GATES-2) |
| tip validado | `f93f163` (= `origin/main` al arranque) |
| rama | `wp/gc-hotfix-gates-2` |
| commit hotfix | `0b566e6` |
| merge SHA | `0b566e6` (= `origin/main` tras push Custodio `f93f163..0b566e6`) |
| Actions run-id | **29839611853** — CI `completed` / **success** @ `0b566e6` |
| Release | no disparó en `0b566e6` (solo workflow CI) |
| Z05-f1 | ✗ **no reabierto** |

## Claim → validación

Claim vigía (acta citada `scratchpad/vigia/REVISION-GC4-2026-07-21.md` —
**path no presente en workspace** al validar; claim contrastado contra tip):

| check | resultado |
| ----- | --------- |
| `rev-parse HEAD` == `f93f163` / `origin/main` | **sí** (arranque) |
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

## CA1 — gates + CI (cerrado de facto)

```
$ npm run gates   # @ 0b566e6
gates: OK (0 offenders)
```

Claim → acta (post-push Custodio):

| dato | valor |
| ---- | ----- |
| `origin/main` | `0b566e6` (`0b566e6b090b7ff4ffbe9e1837ff121636852ac1`) |
| push | `f93f163..0b566e6  main -> main` (Custodio) |
| Actions CI run-id | [29839611853](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29839611853) |
| conclusion | **success** |
| job lint+gates | **success** |
| Release | no corrió en este SHA |

**CA1 ✅** — gates locales OK + Actions CI verde en `0b566e6`.

## CA2 — plantilla / checklist gates

- `HOLONES/01-mythos/zeus-sdk/plan/REPORTES/PLANTILLA.md` — sección Gates
  obligatoria con `npm run gates`
- `plan/REPORTES/README.md` — checklist HOTFIX-GATES-2
- BACKLOG sprint: bullet HOTFIX-GATES-2 CA1 ✅ (Z05-f1 sigue ✗)

## Higiene (paralelo)

- Worktrees huérfanos zeus `wp-gc-z01` / `wp-gc-z11` (sin `.git`): removidos
- Ramas locales mergeadas borradas: `wp/gc-hotfix-gates-launcher`,
  `wp/gc-z01-mockdatas-browsers`
- `.sync-map.json` sprint: añadido `WP-Z15: 15`

## Gobierno SDK (SCRIPT_SDK)

- Tip local: `e4e66d2` (ahead 1 vs `origin/main` `ad190db`)
- Contiene acta/checklist HOTFIX-GATES-2 sin pushear
- **Nota:** SDK gobierno ahead — no force-push; push de gobierno queda pendiente de auth/autorización

## NO hechos

- No se reabre Z05-f1
- No se abre GC-5