# WP-S04 · skill-embajador — reporte

| dato | valor |
| ---- | ----- |
| agente | city-orq (worker en esta tarea) |
| fecha | 2026-07-22 |
| rama gobierno | `wp/pco-s04-skill-embajador` |
| rama obra (zeus) | `wp/pco-s04-skill-embajador` |
| commits obra | zeus `3c9387b` |
| tip gobierno (despacho) | `013532e` · tip T1 ✅ `71d7e96` · merge acta `ff1cb66` · S `dbadefa` |
| eje(s) CA | **I** · **V** + ceguera regla 1 (δ12) |
| estado propuesto | **listo para revisión** (sin merge zeus — orq-merge) |
| issue | LOCAL-ONLY · cite skills [#14](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/14) |
| Z_SDK | [#4](https://github.com/alephscriptorium-eng/Z_SDK/issues/4) · [#5](https://github.com/alephscriptorium-eng/Z_SDK/issues/5) · [#6](https://github.com/alephscriptorium-eng/Z_SDK/issues/6) = **OPEN** |
| E_SDK | **veto** (no tocado) |
| WW-* | **no tocado** |

## Qué se hizo

Tras T1 ✅ (acta de fricción), se despachó S04 (re-check higiene ligero,
sin gate nuevo) y se implementó el **skill usuario** en el paquete
`@zeus/embajador-kit`: peercard (entrar) + mapa «dónde está cada cosa»
(catálogo public/private, recetas puerta / sensor campana / mesh live,
URLs estables anti-deprecated con DRY semver vía `kits-foss` + `npm view`).
Insumo = F1–F8 del acta T1 (sin inventar fricciones). Ceguera de producto
ampliada en tests del kit. Espejo local `.claude/skills/embajador/` no
versionado (`.claude/` gitignore en zeus).

## Path skill (canónico)

```text
HOLONES/01-mythos/zeus-sdk/packages/engine/embajador-kit/skill/SKILL.md
HOLONES/01-mythos/zeus-sdk/packages/engine/embajador-kit/skill/reference/donde-esta-cada-cosa.md
```

SHA zeus: **`3c9387b`** · rama `origin/wp/pco-s04-skill-embajador`.

## Archivos tocados

### zeus (`3c9387b`)

- `packages/engine/embajador-kit/skill/SKILL.md` · creado — skill entrada
- `packages/engine/embajador-kit/skill/reference/donde-esta-cada-cosa.md` · creado — mapa F1–F8
- `packages/engine/embajador-kit/package.json` · `files` incluye `skill`
- `packages/engine/embajador-kit/README.md` · puntero al skill
- `packages/engine/embajador-kit/test/ceguera.test.mjs` · skill + WP-ids = 0

### gobierno (este reporte + despacho previo en main)

- `plan/SPRINTS/sprint-post-city-ops/REPORTES/WP-S04-skill-embajador.md` · este fichero
- despacho ya en main `013532e` (BACKLOG / BRIEF / ficha)

## Evidencia

```text
# Pins
git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
→ 3c9387b0c797407dd77fefb88a583ac4421a8e76   (obra S04)

git -C . rev-parse HEAD
→ (rama reporte; despacho main 013532e)

# Acta insumo
Test-Path plan/SPRINTS/sprint-post-city-ops/REPORTES/ACTA-T1-FRICCION-2026-07-22.md
→ True · merge ff1cb66 · aceptación 71d7e96

# Tests kit
npm test -w @zeus/embajador-kit
→ 13 pass · 0 fail (ceguera método + WP-ids + peercard smoke)

# Ceguera grep skill
rg "WP-[A-Z]{1,2}\d|SCRIPT_SDK|HOLONES|orquestador|BACKLOG|juntura" \
  packages/engine/embajador-kit/skill
→ 0 hits

# URLs estables citadas en skill
https://z-sdk.escrivivir.co/guide/external-handshake
https://z-sdk.escrivivir.co/guide/kits-foss
https://z-sdk.escrivivir.co/
https://games.z-sdk.escrivivir.co/startpacks
https://npm.scriptorium.escrivivir.co
```

## Auto-revisión (PRACTICAS)

- [x] Diff obra solo `embajador-kit/**` (skill + README + package.json + ceguera test)
- [x] ∩ `docs/**` WW-* = ∅ · ∩ bosque = ∅ · E_SDK veto
- [x] Insumo acta T1 citado (path + SHAs gobierno)
- [x] Peercard + mapa URLs estables · DRY semver (corte fechado + `npm view` / kits-foss)
- [x] Eje I: consumidor real = tests emitir→consumir peercard del kit + skill apunta APIs reales
- [x] Eje V: mediación transparente — mapa ofrece canal C8 vs private; no impone publish
- [x] Ceguera regla 1 (δ12): `WP-*` = 0 en packages tocados; tokens método = 0
- [x] Cite #14 / Z#4/#5/#6 OPEN — no cerrar
- [x] No BACKLOG edit desde rol worker en obra (despacho fue tick orq V2 previo)
- [ ] Merge zeus → main · pin submodule gobierno — **pendiente orq-merge**

## Hallazgos fuera de alcance

- Publish de `ciudad` / `socket-server` / `operator-ui` (F5 acta) — PO.
- Materializar skill en npm tarball ya vía `files: ["skill"]`; publish patch
  del kit = follow-up release, no este WP.
- Espejo `.claude/skills/embajador` en tip zeus: bloqueado por `.gitignore`
  de `.claude/` (U147 histórico vs tip actual).

## Dudas / bloqueos

Ninguno para **listo revisión**. Merge zeus a criterio del orq.

---

## Revisión del orquestador

**Aceptado ✅** 2026-07-22.

- Re-verif ceguera regla 1: skill tree + `git log -p` = 0 hits.
- CA brief I·V OK (peercard + mapa URLs · mediación C8/private).
- Zeus: rebase obra sobre `2917634` (docs UTF-8 ya en main ≡ `ccb4113`) →
  tip `cbde42e` · **FF** → `origin/main` · rama podada · WW wt no tocada.
- Pin submodule + acta: [ACTA-S04-aceptacion](ACTA-S04-aceptacion-2026-07-22.md).
- Follow-up: publish tarball skill vía Release/changeset (obra sin `.changeset`).
- Z#4/#5/#6 OPEN · E_SDK veto · WW no tocado.
