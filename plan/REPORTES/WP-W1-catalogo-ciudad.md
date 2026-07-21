# WP-W1 · catalogo-ciudad — reporte (GO H1.6)

| dato | valor |
| ---- | ----- |
| agente | worker H1.6 / W1 |
| fecha | 2026-07-21 |
| rama GL | `wp/gc-w1-catalogo-ciudad` → FF `main` |
| SHA GL | `406000f9f5e1fb302419265cbe84a6c7c3e451fe` |
| Docs run-id | [29872205886](https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29872205886) success (`workflow_dispatch` @ tip) |
| URL viva | https://games.z-sdk.escrivivir.co/startpacks |
| eje(s) CA | docs catálogo + ceguera regla 1 |
| estado propuesto | listo para revisión / claim H1.6 |

## Qué se hizo

Se añadió la fila `ciudad` a la tabla pública de `docs/startpacks.md` en
games-library, con enlaces reales a `packages/startpack-ciudad` (`@zeus/startpack-ciudad`)
y `packages/ciudad` (`@zeus/ciudad`), más el comando Notario `--game ciudad`.
Merge FF a `main` + push (sin force). Docs regenerados (dispatch). Bump
submodule games-library en S_SDK. Sin reopen de sprint / sin BACKLOG.

## Archivos tocados

- `HOLONES/01-mythos/games-library/docs/startpacks.md` (GL) — fila `ciudad`
- `HOLONES/01-mythos/games-library` (S_SDK submodule) — tip → `406000f`
- `plan/REPORTES/WP-W1-catalogo-ciudad.md` — este reporte

## Evidencia

```
# packs existentes (pre-obra)
packages/startpack-ciudad/package.json → name=@zeus/startpack-ciudad game=ciudad
packages/ciudad/package.json → name=@zeus/ciudad

# local
$ npm run docs:build
> vitepress build docs
build complete in 8.30s.
EXIT=0

$ rg -n -i "WP-Z\d+|m[eé]todo|SCRIPT_SDK|S_SDK|hol[oó]n|HOLONES|swarm|BACKLOG" docs/startpacks.md
# (sin matches) CEGUERA_OK count=0

# git GL
406000f docs(startpacks): add ciudad row to public catalog
FF main 3288510..406000f · push origin/main OK

# Docs
run 29872205886 · event=workflow_dispatch · headSha=406000f · conclusion=success
  docs:build ✓ · deploy Pages ✓

# C8 página viva
$ Invoke-WebRequest https://games.z-sdk.escrivivir.co/startpacks
HTTP=200 · HIT_COUNT>=1 · fragmento:
  <td><code>ciudad</code></td><td><a href=".../packages/startpack-ciudad"...
```

## Auto-revisión

- [x] Diff solo docs GL + reporte/bump S_SDK; sin BACKLOG; sin H1.4; sin embajador
- [x] Enlaces a packs existentes (`startpack-ciudad`, `ciudad`)
- [x] `docs:build` EXIT=0
- [x] Docs run verde + C8 `/startpacks` con fila `ciudad`
- [x] Ceguera regla 1 = 0 en entregable docs tocado
- [x] Sin force-push

## Hallazgos fuera de alcance

- Nav/sidebar VitePress aún no lista página dedicada `/games/ciudad` (solo fila catálogo startpacks) — no pedido en H1.6.
- Push `main` Docs concurrente cancelado por concurrency; dispatch tip es la evidencia de deploy.

## Dudas / bloqueos

Ninguno.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_

## Claim H1.6

| campo | valor |
| ----- | ----- |
| SHA GL | `406000f9f5e1fb302419265cbe84a6c7c3e451fe` |
| Docs run-id | `29872205886` success |
| URL + evidencia | https://games.z-sdk.escrivivir.co/startpacks · HTTP 200 · fila `<code>ciudad</code>` + `@zeus/startpack-ciudad` |
| ceguera | 0 |
