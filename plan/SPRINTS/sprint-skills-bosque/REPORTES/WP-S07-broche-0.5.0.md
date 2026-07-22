# WP-S07 · broche 0.5.0 — reporte

| dato | valor |
| ---- | ----- |
| agente | bosque-orq |
| fecha | 2026-07-22 |
| rama | `main` (hermano) |
| tip obra | `4c2e322` |
| eje(s) CA | IV + ceguera · regla 16 |
| estado | **aceptado ✅** |
| issue | [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14) B-3 |

## Qué se hizo

Broche release `@alephscript/skills-scriptorium@0.5.0` tras S03 ✅
(`9b89495`): bump + CHANGELOG `[0.5.0]` (S01–S06 + estacion-viva + S07) +
portal regen a consumo `@0.5.0` + catálogo (`estacion-viva` en
`skills-meta`) + tag/Release `v0.5.0` + publish registry + `npm view`.

## Evidencia (regla 16)

| canal | id / URL | tip |
| ----- | -------- | --- |
| version | `0.5.0` | `package.json` @ `4c2e322` |
| Release | https://github.com/alephscriptorium-eng/S_SDK-skills-library/releases/tag/v0.5.0 | tag `v0.5.0` |
| Publish CI | [29927743629](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29927743629) VERDE | `4c2e322` |
| Docs CI | [29927725261](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29927725261) VERDE | `4c2e322` |
| npm view | `npm view …@0.5.0 … version` → **`0.5.0`** · dist-tag `latest` | registry canónico |
| tarball | incluye `skills/estacion-viva/SKILL.md` (+ scripts/reference/fixture) | C8 pack |

```
$ npm view @alephscript/skills-scriptorium@0.5.0 \
    --registry=https://npm.scriptorium.escrivivir.co version
0.5.0

$ npm run docs:build   # build complete
$ npm run docs:verificar  # OK (html=12; verdad 0.5.0)
ceguera skills/{estacion-viva,swarm,vigilancia}: 0
```

## Archivos tocados

- `package.json` · `CHANGELOG.md` · `README.md`
- `docs/guide/{consumo,activar}.md` · `docs/index.md` · `docs/verdad-checks.json`
- `docs/.vitepress/skills-meta.js` (+ `estacion-viva`)

## Precondiciones

| WP | hash | estado |
| -- | ---- | ------ |
| S05b | `71824d0` | ✅ |
| S06 | `2743176` | ✅ |
| S03 | tip `be68f07` · merge `9b89495` | ✅ |

## Revisión del orquestador

**Aceptado ✅** · broche cerrado · sin mezclar city/zeus/GL.
