# Acta OPS · H2.1 · residuo worker W1 — 2026-07-22

| dato | valor |
| ---- | ----- |
| rol | ops/gobierno PRIORITARIO H2.1 |
| claim | cerrar residuo W1 (S_SDK + GL) · merge FF tip reporte · poda rama WP |
| tip S_SDK (claim) | `d5cb950` |
| tip GL (claim) | `406000f` |
| parked | cola embajador **no tocada** |
| force-push | **no** |

## Claim → SHA

| repo | tip claim | tip post-ops | veredicto |
| ---- | --------- | ------------ | --------- |
| S_SDK `main` | `d5cb950` (reporte W1) | `d5cb9509162f56209369e10a076163b2a3768d1b` | **PASS** FF `9340f95..d5cb950` + push |
| GL submodule @ S_SDK | `406000f` | `406000f9f5e1fb302419265cbe84a6c7c3e451fe` | **PASS** |
| GL `main` | `406000f` intacto | `406000f9f5e1fb302419265cbe84a6c7c3e451fe` | **PASS** (sin rewrite) |

## CA H2.1

| id | criterio | veredicto | evidencia |
| -- | -------- | --------- | --------- |
| CA1 | `main` ⊇ `d5cb950` | **PASS** | `merge-base --is-ancestor d5cb950 HEAD` → 0 |
| CA2 | submodule GL en main = `406000f` | **PASS** | `git rev-parse HEAD:HOLONES/01-mythos/games-library` → `406000f9…` |
| CA3 | status limpio | **PASS** | `nothing to commit, working tree clean` |
| CA4 | `.gitattributes` presente | **PASS** | `git restore` previo + `Test-Path` → True |
| CA5 | ramas S_SDK = main + draft | **PASS** | `draft` · `main` (local); remotes `origin/main` |
| CA6 | poda `wp/gc-w1-catalogo-ciudad` S_SDK | **PASS** | local deleted @ `d5cb950`; remote `--delete` |
| CA7 | poda `wp/gc-w1-catalogo-ciudad` GL | **PASS** | local deleted @ `406000f`; remote `--delete` |
| CA8 | tip GL main intacto | **PASS** | `HEAD` = `main` = `origin/main` = `406000f` |

## Comandos literales

```text
# S_SDK
git restore .gitattributes
git checkout main
git merge --ff-only d5cb950   # 9340f95..d5cb950
git push origin main
git branch -d wp/gc-w1-catalogo-ciudad
git push origin --delete wp/gc-w1-catalogo-ciudad

# GL
git branch -d wp/gc-w1-catalogo-ciudad
git push origin --delete wp/gc-w1-catalogo-ciudad
```

## NO hechos

- No force-push
- No parked→🔶
- No tocar cola embajador
- No borrar `draft`
