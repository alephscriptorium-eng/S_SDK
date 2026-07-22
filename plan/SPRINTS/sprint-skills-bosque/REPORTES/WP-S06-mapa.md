# WP-S06 · mapa de proyección — reporte

| dato | valor |
| ---- | ----- |
| agente | bosque-orq (S06 · orq-ejecuta GO) |
| fecha | 2026-07-22 |
| rama | `wp/sb-s06-mapa` |
| worktree | `C:\Users\aleph\S_SDK-skills-library\.worktrees\sb-s06-mapa` |
| commit hermano (post-push) | **`834f706`** (`834f70609a1886c6a293b48ac7eaa4c315e4a30c`) |
| merge main (post-push) | **`2743176`** (`2743176e9c1a2c358877841c6e87cc31c5aed5e0`) |
| eje(s) CA | III + ceguera |
| estado propuesto | ✅ mergeado |

## Qué se hizo

Documentación pública del ritual de mapa (proyección ≠ sync, post-apply
regla 17, local-only, ceguera por env):

- `docs/guide/mapa.md` (nuevo)
- nav + sidebar en `docs/.vitepress/config.mjs`
- enlace desde `docs/proyecto.md`
- entrada Unreleased en `CHANGELOG.md`

**Veto respetado:** `skills/**` intacto (∥ S03 estacion-viva).

## Archivos tocados (hermano)

- `docs/guide/mapa.md`
- `docs/.vitepress/config.mjs`
- `docs/proyecto.md`
- `CHANGELOG.md`

## Evidencia CA

| check | resultado |
| ----- | --------- |
| ceguera delta (líneas nuevas + mapa.md) | 0 hits marco |
| `npm run docs:build` | EXIT=0 |
| `npm run docs:verificar` | OK (0 internos / 0 anclas) |
| ∩ con S03 | S03 sin obra; diff S06 ⊂ `docs/**`+CHANGELOG |

## Auto-revisión

- [x] Diff solo docs (+ CHANGELOG Unreleased)
- [x] Sin `skills/`
- [x] Sin bump/publish (S07)
- [x] Brief ALCANCE_DIFF pineado respetado
- [x] Merge + push main

## Aviso gate

```text
AVISO · S06 · mapa proyección · tip 834f706 · merge 2743176
CA: ceguera0 · docs:build0 · verificar-sitio OK
∩ S03: skills/ no tocado
```
