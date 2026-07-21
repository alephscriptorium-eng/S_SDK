# Acta · V1-1 aceptación M01+M02 · 2026-07-22

| dato | valor |
| ---- | ----- |
| ola | V1-1 (SEMILLA §3+§4) |
| WPs | **WP-M01 ✅** · **WP-M02 ✅** |
| tip GL | `84f9d7955059555defe6cfe0bd5ac9ecf3f88548` (`origin/main`) |
| base | `80f6157` |
| orden merge | **M01 FF** → main · **M02 rebase** sobre tip post-M01 · FF |
| criterio | M01 más grande / paths exclusivos; M02 rebase evita merge ciego en ∩ |
| higiene GL | worktrees removidos · ramas locales podadas · remotas wp inexistentes |
| tests tip | `@zeus/ciudad` **40/40** · misiones-smoke · cronista-smoke · story-board-reader OK |

## GATE PRE-MERGE · ∩ ficheros

| | M01 | M02 |
| --- | --- | --- |
| exclusivo | `misiones.mjs` · fixtures/test · `package-lock.json` | `cronista.mjs` · fixtures/test · `contract.mjs` · CONTRATO-LECTURA · MAPEO |
| **∩** | `packages/ciudad/package.json` · `packages/ciudad/README.md` | idem |
| no ∩ | — | `contract.mjs` **solo M02** (confirmado) |

Conflicto rebase: solo `package.json` → resolución **aditiva** (exports
`./misiones`+`./cronista`; scripts smoke de ambos; dep `linea-kit` de M01).

## R6 · CA

| WP | I | II | ceguera 14 | engine/domain | veredicto |
| -- | - | -- | ---------- | ------------- | --------- |
| M01 | PASS smoke+tests | PASS `misiones.mjs` canónico | 0 hits árbol+log | intacto | ✅ |
| M02 | PASS cronista→announce | PASS board canónico + reader | 0 hits árbol+log | intacto | ✅ |

## Proyección (regla 17 · post-apply)

| WP | issue | state |
| -- | ----- | ----- |
| M01 | [#28](https://github.com/alephscriptorium-eng/S_SDK/issues/28) | closed |
| M02 | [#29](https://github.com/alephscriptorium-eng/S_SDK/issues/29) | closed |

Mapa: `plan/SPRINTS/sprint-vida-1/.sync-map.json` → `{"WP-M01":28,"WP-M02":29}`.
