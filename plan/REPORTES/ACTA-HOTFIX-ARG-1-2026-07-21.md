# ACTA — HOTFIX-ARG-1 — 2026-07-21

| dato | valor |
| ---- | ----- |
| rol | ops/hotfix (cierre δ10 PRACTICAS) |
| tip zeus `main` | `fe75269` (`fe75269483bd925e163a79b9a2c8d654444c3adc`) |
| remedio | lock + excepción D-8/clase `parte-kit` (lectura kits); gates locales OK |
| Actions CI run-id | **29865037586** — CI `completed` / **success** @ `fe75269` |
| Actions Release run-id | **29865037568** — Release `completed` / **success** @ `fe75269` |
| Release dispatch extra | **NO** (se usó el run tip ya pending por push) |
| histórico CI @ `bc07a45` | **29864762528** — success (previo al tip docs) |

## Remedio (tip)

Commits en `origin/main` hasta tip:

1. `bc07a45` — `fix(gates): D-8 class exception for reading kits only (HOTFIX-ARG-1)`
2. `d4b93b8` — `docs(parte-kit): note D-8 class exception for lexical delta (HOTFIX-ARG-1)`
3. `fe75269` — `docs(parte-kit): annotate DeltaBarrio as protocol lexicon (HOTFIX-ARG-1)`

## CA1 — CI + Release (δ10)

| dato | valor |
| ---- | ----- |
| CI | [29865037586](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29865037586) · **success** |
| Release | [29865037568](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29865037568) · **success** |
| job changesets release | **success** |

Nota Release: workflow verde; `changeset publish` → *No unpublished projects to
publish* (sin changesets pendientes). `@zeus/parte-kit` y `@zeus/acta-kit` siguen
`"private": true` en tip — no entran al canal publish.

**CA1 ✅** — run-ids verdes del tip citados (PRACTICAS δ10).

## Canal registry (evidencia literal)

Registry casa (`.npmrc` zeus): `@zeus:registry=https://npm.scriptorium.escrivivir.co`

```
$ npm view @zeus/parte-kit
npm error code E404
npm error 404 Not Found - GET https://npm.scriptorium.escrivivir.co/@zeus%2fparte-kit - no such package available
npm error 404  '@zeus/parte-kit@*' is not in this registry.

$ npm view @zeus/acta-kit
npm error code E404
npm error 404 Not Found - GET https://npm.scriptorium.escrivivir.co/@zeus%2facta-kit - no such package available
npm error 404  '@zeus/acta-kit@*' is not in this registry.

$ npm view @zeus/linea-kit version   # control
0.3.0
```

Lectura: 404 coherente con `private: true` + Release sin publish de esos kits.
Evidencia de canal real registrada; no bloquea (i) runner verde.

## BACKLOG — condición (i) CAMPANAS

| condición | estado |
| --------- | ------ |
| **(i)** runner verde HOTFIX-ARG-1 (CI+Release tip citados) | **cumplida** — esta acta |
| **(ii)** tick custodio DE-I8 (`HOLONES/03-emmanuel/`) | **pendiente** — no abrir CAMPANAS |

CAMPANAS (S-03) sigue **parked**. Sin tick DE-I8 no hay apertura.

## Gobierno SDK

- Bump submodule `HOLONES/01-mythos/zeus-sdk` → `fe75269`
- Sin force-push · sin dispatch Release extra · sin abrir CAMPANAS

## NO hechos

- No `gh workflow dispatch` Release (run tip ya existía)
- No force-push
- No apertura CAMPANAS / no tick DE-I8
- No un-private / publish de parte-kit · acta-kit
