# Acta final · patch 0.5.1 · CARRIL BOSQUE CERRADO

| dato | valor |
| ---- | ----- |
| acto | GO PO+VIGÍA · patch 0.5.1 (un solo publish) |
| agente | bosque-orq |
| fecha | 2026-07-22 |
| alcance | hermano skills-library + este sprint |
| veto | zeus · GL obra · pins · DECISIONES raíz |
| estado | **CARRIL BOSQUE CERRADO** |

## Contenido del patch

| id | qué | reopen |
| -- | --- | ------ |
| R-1 | Note Unreleased → sección `[0.5.1]` (obra ya tip `a50787d`) | no S03/S07 |
| R-2a | docs site-web credenciales publish + vigilancia pulso secrets | — |

### Paths tocados R-2a (hermano)

- `skills/site-web/SKILL.md` — § D · Credenciales de publish por repo
- `skills/site-web/reference/protocolo-ghpages.md` — sección + checklist
- `skills/vigilancia/reference/ESTACION.md` — pulso secrets + ritual + tabla

## Tabla regla 16

| canal | evidencia | tip / nota |
| ----- | --------- | ---------- |
| versión | `0.5.1` | `package.json` @ `b51da57` |
| tip hermano POST-push | `b51da576124a0558ba779709d509ab52a6617c1a` | `origin/main` |
| tag | `v0.5.1` → commit `b51da57` | annotated |
| Release | https://github.com/alephscriptorium-eng/S_SDK-skills-library/releases/tag/v0.5.1 | — |
| Publish CI | [29934817950](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29934817950) **VERDE** | `b51da57` |
| Docs CI | [29934811106](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29934811106) **VERDE** | `b51da57` |
| npm view (C8) | `npm view …@0.5.1 … version` → **`0.5.1`** · dist-tag `latest` | registry canónico |
| gobierno | tip `34c068d3ee4e7244157c97b5cc3606606eafb2b0` POST-push | solo `plan/SPRINTS/sprint-skills-bosque/**` |

```
$ npm view @alephscript/skills-scriptorium@0.5.1 \
    --registry=https://npm.scriptorium.escrivivir.co version
0.5.1

$ npm run docs:build   # build complete
$ npm run docs:verificar  # OK (html=12; verdad 0.5.1)
```

## Ceguera evidencia (delta 5 = 0)

```
rg -n -i -e 'zeus|holón|holon|holarquía|holarquia|SCRIPT_SDK|juntura' \
  skills/site-web/SKILL.md \
  skills/site-web/reference/protocolo-ghpages.md \
  skills/vigilancia/reference/ESTACION.md \
  CHANGELOG.md
# → 0 matches (exit 1 rg)

git diff (pre-commit) mismos paths | mismo patrón → 0
marca paquete S_SDK-skills-library en package.json = admisible (preexistente)
caso fundante citado: GL 2026-07-22 (sin nombres de mundo prohibidos)
```

## Confirmación

**CARRIL BOSQUE CERRADO.** B-1 · B-2 · B-3 · R-1 · R-2a · publish `0.5.1` ✅.
S04 permanece en city. Sin reopen S03/S07.
