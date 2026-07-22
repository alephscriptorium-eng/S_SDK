# WP-F5a · publish-mesh — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-F5a (publish lote mesh) |
| fecha | 2026-07-22 |
| rama zeus | `wp/pco-f5a-publish-mesh` → merge `#11` → version `#12` |
| rama GL | `wp/pco-f5a-publish-mesh` → merge `#2` (manifest only) |
| rama S | `wp/pco-f5a-publish-mesh` (este reporte) |
| commits obra | zeus obra `eeca7c7` · merge tip `528640d` · version tip `c13546b` · GL `0751f08` → merge `29edb7e` |
| eje(s) CA | **I · V** + ceguera regla 1 |
| estado propuesto | **listo para revisión** · ciclo zeus C8 cerrado; GL ciudad/startpack **bloqueado secrets** |
| issue | LOCAL-ONLY |
| Z_SDK | [#4](https://github.com/alephscriptorium-eng/Z_SDK/issues/4) · [#5](https://github.com/alephscriptorium-eng/Z_SDK/issues/5) · [#6](https://github.com/alephscriptorium-eng/Z_SDK/issues/6) = **OPEN** (citar, no cerrar) |
| E_SDK | **veto** (no tocado) |

## Qué se hizo

**Desviación de ubicación (antes que nada):** `@zeus/ciudad` y
`@zeus/startpack-ciudad` viven en **games-library**, no en zeus-sdk. Se
trató GL aparte (brief: «GL si ciudad pack»).

1. **zeus (ciclo cerrado):** des-`private` + `publishConfig` + `files` en
   `@zeus/socket-server` y `@zeus/mcp-launcher`; changeset patch ×3
   (+ `@zeus/embajador-kit` para tarball con `skill/`). PR obra
   [#11](https://github.com/alephscriptorium-eng/Z_SDK/pull/11) mergeada;
   bot version [#12](https://github.com/alephscriptorium-eng/Z_SDK/pull/12)
   mergeada; Release publish verde.
2. **embajador-kit:** tip registry **0.1.2**; tarball incluye
   `package/skill/SKILL.md` + `reference/donde-esta-cada-cosa.md`
   (0.1.1 no llevaba `skill/`).
3. **GL:** `@zeus/ciudad` → `private:false` + publishConfig + files
   ([#2](https://github.com/alephscriptorium-eng/Z_SDK-games-library/pull/2)
   mergeada). **Sin npm publish:** GL no tiene secrets
   `NPM_*` / `NPM_TOKEN` (lista vacía). `startpack-ciudad` ya tenía
   publishConfig pero sigue 404; dep `@zeus/startpack-kit` también 404.
4. **operator-ui:** **sin publish** — propuesta abajo; **PO sella**.

## Archivos tocados

| repo | archivo | para qué |
| ---- | ------- | -------- |
| zeus | `packages/mesh/socket-server/package.json` | public + registry + files |
| zeus | `packages/mesh/mcp-launcher/package.json` | public + registry + files (des-404 C2) |
| zeus | `.changeset/mesh-lote-public.md` | patch ×3 (consumido por bot) |
| GL | `packages/ciudad/package.json` | public + registry + files (prep) |
| S | este reporte | evidencia + propuesta operator-ui |

## Evidencia

### Pins (sesión)

```text
git -C HOLONES/01-mythos/zeus-sdk rev-parse origin/main
→ c13546bbb68d7ef735a379148da27757b55f0c73

git -C HOLONES/01-mythos/games-library rev-parse origin/main
→ 29edb7e4482bb949bc8736a48b0e410ab45bbfa4

git -C . rev-parse HEAD
→ a061c62204ba3f85c6cf60c89da2a9114c30cf91   (pre-reporte; tip S post-commit abajo)
```

### Baseline pre-obra (`npm view` C8) — 404 esperable

`@zeus/ciudad` · `startpack-ciudad` · `socket-server` · `mcp-launcher` ·
`operator-ui` → **404**. `@zeus/embajador-kit` → **0.1.1** (sin skill/).

### Gates / tests locales (zeus worktree @ `eeca7c7`)

```text
npm run gates → gates: OK (0 offenders)
npm test -w @zeus/mcp-launcher → 12 pass / 1 skip
npm test -w @zeus/socket-server → 2/2
npm test -w @zeus/embajador-kit → 13/13
ceguera (package.json×2 + changeset + skill/) → 0 hits WP-ids / tokens método
```

### Release run-ids (regla 16)

| fase | run-id | conclusión | URL |
| ---- | ------ | ---------- | --- |
| post-merge obra #11 (abre version PR) | **29931187259** | success | https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29931187259 |
| post-merge version #12 (**publish**) | **29931698137** | success | https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29931698137 |

Publish literal (job `changesets release`):

```text
🦋  @zeus/embajador-kit@0.1.2
🦋  @zeus/mcp-launcher@0.1.1
🦋  @zeus/socket-server@0.1.1
```

### `npm view` C8 post-Release (literal)

| paquete | resultado |
| ------- | --------- |
| `@zeus/socket-server` | **0.1.1** |
| `@zeus/mcp-launcher` | **0.1.1** |
| `@zeus/embajador-kit` | **0.1.2** (tarball con `skill/`) |
| `@zeus/ciudad` | **404** (manifest public en tip GL; secrets ausentes) |
| `@zeus/startpack-ciudad` | **404** (secrets + notario `--publish-npm`) |
| `@zeus/startpack-kit` | **404** (dep transitiva de startpack-ciudad) |
| `@zeus/operator-ui` | **404** (propuesta; sin sello PO) |

### C2 (mcp-launcher des-404)

`@zeus/ciudad-lifecycle@0.1.1` declara dep `"@zeus/mcp-launcher": "*"`.
Tras publish, `npm view @zeus/mcp-launcher version` = **0.1.1** → el 404
que tumbaba install conjunto ya no aplica al resolver del launcher.

### Z_SDK #4/#5/#6

```text
gh issue view 4|5|6 --repo alephscriptorium-eng/Z_SDK → state OPEN
```

## Propuesta operator-ui (C6) — **PO sella**

| opción | qué implica | pros | contras |
| ------ | ----------- | ---- | ------- |
| **A · publish con `dist/`** | `private:false` + commitear/generar `dist/` en CI Release (o artifact prepack) + `files: ["dist/**", …]` | `npm i @zeus/operator-ui` usable C8 sin monorepo | tarball pesado (Angular); hay que cablear build en Release; `prepack` ya corre `build:all` |
| **B · build documentado (recomendación worker)** | permanece `private:true`; skill/README documenta `npm run build:operator-ui` (+ ports/deps socket) | alinea DC-CR-kits-foss («apps private by default»); cero riesgo de publicar half-built | C1 live UI sigue sin ser C8-puro; F5b no puede exigir operator-ui desde registry |

**Recomendación worker:** **B** hasta que PO pida A explícito (app Angular ≠ kit semilla). Si A: exigir job Release que corra `build:all` antes de `changeset publish` y pin de versión post-dist.

## Checklist C1–C8 (estado F5a)

| id | estado tras F5a |
| -- | --------------- |
| **C1** | **parcial**: socket + mcp-launcher en C8; ciudad/startpack/operator-ui siguen 404 |
| **C2** | **muerta** (mcp-launcher@0.1.1 en C8) |
| **C3** | **documentada** — citar S04 mapa `*-kit` ([ACTA-S04](ACTA-S04-aceptacion-2026-07-22.md)) |
| **C4** | **documentada** — protocol pin 0.3 fixture vs 0.4 registry; sin cambio semver aquí |
| **C5** | **mitigada en canal**: socket-server@0.1.1 declara `@alephscript/mcp-core-sdk@^1.5.0` (registry tiene 1.5.0); tip monorepo incompleto = fuera |
| **C6** | **propuesta** arriba; espera sello PO |
| **C7** | **abierta** → vehículo F5b |
| **C8** | **documentada** — citar S04 F8 / quoting PowerShell `"@zeus/..."` |

## Auto-revisión (PRACTICAS)

- [x] Diff zeus solo manifests + changeset; GL solo `ciudad/package.json`
- [x] Cero copia de árboles ajenos
- [x] Sellos con fuente (npm view, Release logs, gh)
- [x] operator-ui sin inventar publish; ciudad GL gap explícito
- [x] Eje I: consumidor registry (npm view + pack skill/)
- [x] Eje V: no impone publish app; mediación PO en propuesta
- [x] Ceguera r.1 en obra producto = 0
- [x] Commits convencionales; sin BACKLOG; sin E_SDK; Z# OPEN
- [x] ∩ F5c = ∅ (no oasis/config); F5b no mergeado aquí

## Hallazgos fuera de alcance

- Sembrar secrets npm en GL (`NPM_USERNAME`/`NPM_PASSWORD` o `NPM_TOKEN`) +
  alinear notario/auth con modelo D-24 (a) de zeus.
- Publicar orden GL: `startpack-kit` → `startpack-ciudad` → `ciudad`
  (notario + `npm publish -w` o workflow extendido).
- `socket-server` sigue `zeus.role=app` (GO F5a override de private; role
  no reescrito).

## Dudas / bloqueos

1. **Bloqueo orquestador/ops:** GL sin secrets → ciudad/startpack no
   entran a C8 desde esta estación. PR #2 deja manifest listo.
2. **Sello PO:** operator-ui A vs B.
3. F5b parked hasta C8 mínimo: hoy **socket + mcp-launcher** OK;
   **ciudad/startpack** aún 404 → F5b «dos ciudades registry puro» sigue
   bloqueado por GL publish.

---

## Revisión del orquestador

**⚠️ parcial** · 2026-07-22 · city-orq

1. **zeus ✅** — tip `c13546b` · Release **29931698137** · C8:
   socket-server@0.1.1 · mcp-launcher@0.1.1 · embajador-kit@0.1.2 (+skill/).
   C2 **muerta**.
2. **GL prep pineado** `29edb7e` — ciudad `private:false`; **sin publish**
   (Actions secrets `total_count:0`).
3. **No ✅ total** · F5b **parked · NO despachado**.
4. Custodio: [AVISO-F5a-GL-NPM-secrets](AVISO-F5a-GL-NPM-secrets.md).
5. Operator-ui: propuesta **B** · [sello PO pendiente](../DECISIONES.md#dc-pco-f5a-operator-ui--2026-07-22--abierta-espera-sello-po).
6. Ejes I·V + ceguera: OK en obra zeus; gap GL = ops secrets (no fail de worker).
7. Z#4/#5/#6 OPEN · E_SDK veto.

---

## Addendum R18.5 · F5a ✅ total · 2026-07-22 · city-orq+worker

1. Secrets GL `NPM_USERNAME`/`NPM_PASSWORD` sembrados.
2. Tip GL `d178364` — workflow `Publish mesh ciudad` (D-24) · PR #3.
3. Release/run **29934850683** success.
4. `npm view` C8: `startpack-kit@0.1.0` · `startpack-ciudad@0.1.0` ·
   `ciudad@0.1.0`.
5. Sello PO operator-ui = **B** · mapa embajador tip zeus `d0d9de1` ·
   embajador-kit@0.1.3 (Release **29935568597**).
6. **F5a ✅ total** → F5b despachado.