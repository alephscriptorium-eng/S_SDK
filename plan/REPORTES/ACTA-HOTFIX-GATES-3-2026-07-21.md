# ACTA — HOTFIX-GATES-3 — 2026-07-21

| dato | valor |
| ---- | ----- |
| rol | brazo orquestador (GO HOTFIX-GATES-3) |
| tip validado | `8afc0a0` (= `origin/main` al arranque) |
| rama | `wp/gc-hotfix-gates-3` |
| commit hotfix | `48e2062` |
| merge SHA | `48e2062` (= `origin/main` tras FF `8afc0a0..48e2062`) |
| Actions CI run-id | **29857964265** — CI `completed` / **success** @ `48e2062` |
| Actions Release run-id | **29857967650** — Release `completed` / **success** @ `48e2062` |
| Z17 | ✅ **no reabierto** (micro-WP gates; fixture smoke only) |

## Claim → validación

| check | resultado |
| ----- | --------- |
| `rev-parse HEAD` == `8afc0a0` / `origin/main` | **sí** (arranque) |
| `npm run gates` → 1 offender `[ports]` | **sí** |
| path | `packages/mesh/operator-ui/fixtures/ciudad-vista-smoke.mjs:162` |
| detalle | `scriptoriumUrl: 'http://localhost:3017/runtime'` |
| introdujo Z17 (`8afc0a0`) | **sí** (wire ciudad vista) |

**Veredicto:** claim **cierto** → GO HOTFIX-GATES-3.

## Remedio

Fixture smoke resuelve URL vía **presets-sdk env** (mismo camino que
`serve.mjs` / casa): `resolveRoomClientConfig()` → `resolveZeusUiPorts()`.
Gate `[ports]` **no** desactivado; **sin** excepción nueva en `exceptions.mjs`.

Diff:

- `packages/mesh/operator-ui/fixtures/ciudad-vista-smoke.mjs` — quita literal
  `:3017`; spread de `resolveRoomClientConfig({})` + overrides room/game/user.

## CA1 — gates + CI + Release

```
$ npm run gates   # @ 48e2062
gates: OK (0 offenders)
```

| dato | valor |
| ---- | ----- |
| `origin/main` | `48e2062` (`48e2062ff046648df52ae0740db4ec22cdb9a2a4`) |
| push | `8afc0a0..48e2062  main -> main` |
| CI run-id | [29857964265](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29857964265) |
| CI conclusion | **success** (job lint+gates **success**) |
| Release run-id | [29857967650](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29857967650) |
| Release conclusion | **success** (job changesets release **success**) |

Nota Release: workflow verde; `changeset publish` no publicó versiones nuevas
(NPM creds ausentes / packages ya en npm). Es el **primer Release verde** tras
el touch `packages/**` de Z17 (`8afc0a0` había fallado CI+Release por este gate).

**CA1 ✅**

## Gobierno / alcance

- Micro-WP: **no reabre Z17** (sigue ✅ / GC-5 cerrada).
- Solo fixture smoke + acta gobierno; sin ampliar operator-ui / bridge.

## NO hechos

- No se reabre Z17 / GC-5
- No se desactiva gate `[ports]`
- No force-push
