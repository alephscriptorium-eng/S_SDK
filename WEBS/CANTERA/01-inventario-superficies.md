# CANTERA 01 — Inventario de superficies (s-sdk)

Mapa re-ejecutable sobre **este** repo. Clases: ESTABLE · VIVA-OK ·
ROT · PENDIENTE. Sin datos de canteras ajenas.

## Superficies `docs/` (2026-07-19)

| Ruta | Clase | Nota |
| ---- | ----- | ---- |
| `docs/index.md` | VIVA-OK | hero SCRIPT_SDK / Holón 07 |
| `docs/autoridades/01-escrivivir-co.md` | VIVA-OK | ficha autoridad |
| `docs/autoridades/02-scriptorium.md` | VIVA-OK | ficha autoridad |
| `docs/guide/publicar-la-web.md` | VIVA-OK | guía local |
| `docs/public/CNAME` | ESTABLE | `s-sdk.escrivivir.co` |
| `docs/.vitepress/config.mjs` | ESTABLE | base `SSDK_DOCS_BASE` |
| `docs/.vitepress/theme/custom.css` | ESTABLE | piel zine DE-8 |
| Fichas holones 01–07 en docs | PENDIENTE | I31/I32 |
| Ruta TEST-SWARM servida | PENDIENTE | I33 |

## Anclas `HOLONES/`

| Ruta | Estado | Nota |
| ---- | ------ | ---- |
| `01-mythos/` | ancla / submodule según I03 | read-only |
| `03-emmanuel/` | placeholder DE-I8 | sin inflar |
| `05-aleph-scriptorium/` | placeholder DE-I8 | sin inflar |
| `06-aleph-scriptorium/` | placeholder DE-I8 | sin inflar |

## Cómo re-cotejar

```bash
find docs -type f | sort
ls HOLONES/
test -f docs/public/CNAME && cat docs/public/CNAME
```
