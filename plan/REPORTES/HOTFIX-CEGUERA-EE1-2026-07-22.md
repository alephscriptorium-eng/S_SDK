# HOTFIX-CEGUERA-EE1 — reporte · 2026-07-22

| dato | valor |
| ---- | ----- |
| rol | worker HOTFIX-CEGUERA-EE1 (micro · patrón HOTFIX-GATES) |
| base | `aab6a68` (`origin/main` al arranque) |
| rama | `wp/ee-hotfix-ceguera` |
| worktree | `zeus-sdk/.worktrees/wp-ee-hotfix-ceguera` |
| commit | `bd02d70` (`bd02d700dc795f81d645684dcad0c7851c395c51`) |
| merge | ✅ FF `aab6a68..bd02d70` → `origin/main` (orquestador · 2026-07-22) |

## Remedio

Scrub de ids de tracking externos en obra; queda **Z_SDK #4** como
única referencia. Nativos intactos: D-40 · WP-U93 · D-20.

| path | cambio |
| ---- | ------ |
| `packages/engine/protocol/src/peer-card.mjs` | quita token externo; deja `#4` |
| `packages/engine/protocol/src/peer-card-seat.mjs` | idem |
| `packages/engine/webrtc-signaling/src/peer-card-gate.mjs` | idem (conserva WP-U93 / D-20) |
| `packages/engine/webrtc-signaling/src/signaling-service.mjs` | idem + `wire legacy` → `wire previo` (gate `transition`) |
| `packages/engine/webrtc-signaling/README.md` | idem |
| `.changeset/wp-e02-privacidad-federacion.md` | **renombrado** → `peercard-ssb-handshake.md` + cuerpo sin token externo |

## Preventivo (mismo WP)

Gate `tracking-id` en `scripts/gates/scan.mjs` (+ typedef en
`exceptions.mjs`): patrón `WP-[A-Z]{1,2}\d` sobre
`packages/` + `e2e/` + `kits/` + `.changeset` (incl. `.md`).
Serie hogar `WP-U*` no se marca. **Ningún gate desactivado.**

## CA

```
$ # @ bd02d70 (worktree)
$ rg -c "WP-E0" packages e2e .changeset   # → 0
$ node scripts/gates/run.mjs              # → gates: OK (0 offenders)
```

| check | resultado |
| ----- | --------- |
| `WP-E0` en packages/e2e/kits/.changeset | **0** |
| `npm run gates` | **OK (0 offenders)** |
| changeset renombrado | `peercard-ssb-handshake.md` |
| lógica / tests producto | **sin tocar** |
| D-40 / WP-U93 / D-20 | **intactos** |

## NO hechos

- ~~No merge a `main`~~ → **hecho** (FF + push `bd02d70`)
- No operator-ui · embajador-kit · A5 · f2 · E_SDK
- No force-push · no cerrar issues Z (#4/#5/#6)

## Post-merge (orquestador)

```
# tip zeus origin/main = bd02d70
# higiene: worktree remove · branch -d · remote --delete ✓
# S: acta + BACKLOG ✅ + pin submodule
```
