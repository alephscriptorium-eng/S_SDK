# PROYECCIÓN — federación / externos (E01·E02·E03·CAMPANAS) · 2026-07-21

| dato | valor |
| ---- | ----- |
| estado | **apply OK** — sync-map post-apply (δ11) |
| alcance | `todos` · 4 altas OPEN (parked ⬜) |
| backlog | `plan/SPRINTS/sprint-game-city/BACKLOG.md` |
| mapa | `plan/SPRINTS/sprint-game-city/.sync-map.json` |
| repo | `alephscriptorium-eng/S_SDK` |
| race | WP-I75 ✅ · S_SDK **#21 CLOSED** (página viva) · tip `f0e5cc7` · altas = **#22–#25** |

## Issues OPEN (C8)

| id | nº | URL | título |
| -- | -- | --- | ------ |
| WP-E01 | 22 | https://github.com/alephscriptorium-eng/S_SDK/issues/22 | WP-E01 · Epic embajador (paraguas) |
| WP-E02 | 23 | https://github.com/alephscriptorium-eng/S_SDK/issues/23 | WP-E02 · Privacidad de federación |
| WP-E03 | 24 | https://github.com/alephscriptorium-eng/S_SDK/issues/24 | WP-E03 · Página pública «tubería protegida» (paraguas) |
| WP-CAMPANAS | 25 | https://github.com/alephscriptorium-eng/S_SDK/issues/25 | WP-CAMPANAS · CAMPANAS (S-03) |

Verificación literal:

```text
gh issue view 22..25 --repo alephscriptorium-eng/S_SDK → OPEN
gh issue view 21 --repo alephscriptorium-eng/S_SDK → CLOSED (I75)
```

## Sync-map (entradas nuevas)

```json
"WP-E01": 22,
"WP-E02": 23,
"WP-E03": 24,
"WP-CAMPANAS": 25
```

## Overlap / related (addenda race)

| ficha | related | nota |
| ----- | ------- | ---- |
| E03 | WP-I75 ✅ · #21 CLOSED · https://s-sdk.escrivivir.co/guide/tuberia-protegida | tracking residual; no duplica página |
| E02 | Z_SDK #4 | citar; **no cerrar** |
| E01 | Z_SDK #5 · #6 (niveles/ACL) | citar; **no cerrar** |

## Invariantes

- [x] Las cuatro fichas quedan **⬜ parked** (sin 🔶, sin brief, sin abrir)
- [x] E03 related a I75 ✅ / página viva; no pisa obra
- [x] CAMPANAS no abierta; DE-I8 / HOTFIX no ejecutados aquí
- [x] Z_SDK #4/#5/#6 intactos
- [x] Z_SDK #2 no editado (puede referenciarlas en próxima regeneración)

## Orden (PRACTICAS δ11)

1. Fichas + bullets BACKLOG parseables — **hecho**
2. Apply proyección (#22–#25) — **hecho**
3. Commit mapa + acta + BACKLOG/fichas — **sigue**
