# ACTA — HOTFIX-CEGUERA-EE1 — 2026-07-22

| dato | valor |
| ---- | ----- |
| rol | orquestador (GO HOTFIX-CEGUERA-EE1 · patrón HOTFIX-GATES) |
| base | `aab6a68` (`origin/main` al arranque) |
| rama | `wp/ee-hotfix-ceguera` |
| commit hotfix | `bd02d70` (`bd02d700dc795f81d645684dcad0c7851c395c51`) |
| merge SHA | `bd02d70` (= `origin/main` tras FF `aab6a68..bd02d70`) |
| modo | **LOCAL-ONLY** (sin wait Actions / sin dispatch Release) |
| Z_SDK #4/#5/#6 | **no cerrados** |
| A5 / f2 | **no mergeados · no despachados** |

## Remedio

Scrub de ids de tracking externos en obra peercard/signaling; queda
**Z_SDK #4** como única referencia. Preventivo: gate `tracking-id` ampliado
a `WP-[A-Z]{1,2}\d` sobre `packages/` + `e2e/` + `kits/` + `.changeset`.
Serie hogar `WP-U*` no se marca. **Ningún gate desactivado.**

## CA re-verificados (orquestador · tip `bd02d70`)

```
$ rg -c "WP-E0" packages e2e .changeset   # → 0 (kits ausente)
$ npm run gates                           # → gates: OK (0 offenders)
$ rg -n "TRACKING_ID_RE" scripts/gates/scan.mjs
# TRACKING_ID_RE = /\bWP-[A-Z]{1,2}\d+/g
```

| check | resultado |
| ----- | --------- |
| `WP-E0` packages/e2e/kits/.changeset | **0** |
| `npm run gates` | **OK (0 offenders)** |
| patrón gate `WP-[A-Z]{1,2}\d` | **presente** en `scan.mjs` |
| FF merge + push | `aab6a68..bd02d70  main -> main` (no force) |
| higiene | worktree remove · branch `-d` · remote `--delete` |

**CA ✅**

## Gobierno S_SDK

- BACKLOG sprint-embajador: HOTFIX-CEGUERA-EE1 ✅
- Pin submodule `HOLONES/01-mythos/zeus-sdk` → `bd02d70`
- Reporte: [HOTFIX-CEGUERA-EE1-2026-07-22](HOTFIX-CEGUERA-EE1-2026-07-22.md)

## NO hechos

- No merge A5 · no despacho f2
- No cerrar Z_SDK #4/#5/#6
- No force-push · no `workflow_dispatch` Release
