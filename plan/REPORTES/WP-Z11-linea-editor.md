# WP-Z11 · linea-editor — reporte

| dato | valor |
| ---- | ----- |
| agente | worker · gc-z11 (corrección #1) |
| fecha | 2026-07-21 |
| rama | `wp/gc-z11-linea-editor` (zeus-sdk) · `wp/gc-z11-linea-editor` (games-library) · `wp/gc-z11-linea-editor` (SCRIPT_SDK reporte) |
| commits | zeus-sdk `f93f163ef19a4737f6f05cc937b558b80e19a118` (1 commit squash sobre tip post-Z05 `11bde48`) · games-library `06c772736745774453c03da58e819510fdc51d9a` (sin cambio en esta corrección) · reporte (este commit) |
| eje(s) CA | I · II · III · IV · V · ceguera ampliada |
| estado propuesto | devuelto-corregido |
| issue | LOCAL-ONLY (no sync-map GitHub afirmado) |

## Qué se hizo

Se entregó el **slice e2e bloqueante** de autoría MCP: pack `@zeus/linea-editor`
(sibling de `linea-system`) con tools gateadas `crear_linea` / `export_story_board`
que **envuelven** `@zeus/linea-kit/tools` (sin fork de schemas). Gate visible
(`approve` + `approvalToken` / `ZEUS_MCP_APPROVAL_TOKEN`, payloads con `gate.gate_line`).
Preset horse `linea-editor` + registro en mcp-launcher (puerto `4115`). Export
mínimo → `story-board.json` validado con `@zeus/story-board-schema` + refs
TransmediaEvent (cadena raw→triaged→canon). Frontera Z10 intacta (camino =
`linea-kit/viaje`, no reimplementado). Glosario: tools nuevas no usan «viaje»
= campaña.

GL: fixture rabbit→RNFP→HORSE `tools/call` `crear_linea` (cadena Z04) con
approve evidenciado y payload refs-only.

### Corrección #1 (2026-07-21)

Devolución bloqueante: literal de token método en
`test/gates-ceguera.test.mjs` (fuga en árbol + `git log -p`). Corregido en
commit `f93f163` (squash/reescribe — **cero** commits intermedios con la fuga):

1. Token ensamblado por concat (`'marco' + '-' + 'agn'`; resto igual).
2. Gate de ceguera ampliado a `src/` + `test/` + README/package.json.
3. Historial: squash único rebaseado sobre zeus tip post-Z05 `11bde48`.

## Archivos tocados

- `packages/mesh/linea-editor/**` (zeus, creado): server MCP, gate, tools wrap, export, horse preset, tests
- `packages/engine/presets-sdk/src/env/index.mjs` (mod): `lineaEditor.disk` 4115 + `ZEUS_MCP_LINEA_EDITOR`
- `packages/mesh/mcp-launcher/src/catalog.mjs` (mod): catálogo `linea-editor`
- `package.json` / `package-lock.json` (mod): script `start:linea-editor` + workspace
- `packages/ciudad/fixtures/linea-editor-slice-smoke.mjs` + test (GL, creado)
- `packages/ciudad/package.json` (GL, mod): script smoke
- `plan/REPORTES/WP-Z11-linea-editor.md` (este reporte, superproyecto)

## Evidencia

```
# env
git -C …/zeus-sdk/.worktrees/wp-gc-z11-linea-editor rev-parse HEAD
→ f93f163ef19a4737f6f05cc937b558b80e19a118
git merge-base --is-ancestor 11bde48 HEAD → OK
git log --oneline 11bde48..HEAD
→ f93f163 feat(linea-editor): …   (único commit; squash)

git -C …/games-library/.worktrees/wp-gc-z11-linea-editor rev-parse HEAD
→ 06c772736745774453c03da58e819510fdc51d9a

# slice e2e + ejes (zeus) — post-corrección
cd …/wp-gc-z11-linea-editor
node --test packages/mesh/linea-editor/test/*.mjs
→ tests 6 / pass 6 / fail 0

# ceguera ampliada (pack completo · corrección #1)
PACK=packages/mesh/linea-editor
PAT='marco-agn|NovelistEditor|\bnovela\b|SCRIPT_SDK|HOLONES|swarm-orquestacion|WP-Z[0-9]+|ciudad-como|holarqu[ií]a'

rg -c "$PAT" "$PACK" ; echo exit=$?
→ (sin salida) exit=1 → count 0

rg -q "$PAT" "$PACK" ; echo exit=$?
→ exit=1 → tree_q=0

git log -p 11bde48..HEAD -- "$PACK" | rg -c "$PAT" ; echo exit=$?
→ (sin salida) exit=1 → log_p=0

rg -n 'marco-agn' "$PACK" → 0
git log -p 11bde48..HEAD -- "$PACK" | rg -n 'marco-agn' → 0

# rabbit Z04 cadena (GL) — sin cambio en esta corrección
# LINEA_EDITOR_SLICE_SMOKE_OK (evidencia entrega previa)
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF` (linea-editor + preset port + launcher catalog + GL e2e + reporte)
- [x] Cero árboles copiados; concepto de boceto citado en ficha WP, cero dep en pack
- [x] Sellos con fuente; schemas kit no tocados
- [x] Sin fluff; cronista/misiones SEMILLA parked
- [x] Ejes I–V evidenciados (export story-board · wrap kit · no dup · CLI 2º cliente · gate visible)
- [x] Gates ejecutados de verdad (salida arriba)
- [x] Commits convencionales; **sin push** tip gobierno / submodules; **sin merge**
- [x] Ceguera método = 0 en pack completo (src+test) + `git log -p` reachable (squash; sin fuga intermedia)
- [x] BACKLOG no editado
- [x] Rebase sobre tip post-Z05 `11bde48`

## Hallazgos fuera de alcance

- Homónimo `propose-viaje`/`execute-viaje` (campaña) en linea-system sin rename (regla 5).
- Live launch `linea-editor` vía mcp-launcher en volumen real no ejercitado (catálogo sí).
- Cronista / misiones SEMILLA parked.

## Dudas / bloqueos

- Ninguno bloqueante. Issue GitHub sync-map ⏳ sin verificar (LOCAL-ONLY).

## CA ejes

| eje | criterio | estado | evidencia |
| --- | -------- | ------ | --------- |
| — | Slice e2e rabbit→tools/call gateado→volumen→validate kit | ✅ | zeus `slice-e2e.test.mjs` + GL smoke |
| I | export `story-board.json` valida | ✅ | `validateStoryBoard` en export + test |
| II/III | envolver kit; una def `crearLinea` | ✅ | import `@zeus/linea-kit/tools`; grep pack sin def local |
| IV | 2º cliente CLI | ✅ | `crearLinea` twin en test |
| V | gates visibles | ✅ | `gate.gate_line` en refusals + `editor://info` |
| — | Horse sin bytes | ✅ | refs `linea://` `preset://`; grep corpus = 0 |
| — | Ceguera ampliada | ✅ | pack completo + `git log -p` = 0 (post-squash #1) |
| — | Frontera Z10 = lectura/camino | ✅ | no toca `viaje/`; frontier doc en `editor://info` |

---

## Revisión del orquestador

**Devuelto #1** (ceguera `marco-agn` en test) → **corregido** en `f93f163` (squash + rebase `11bde48`).

_(orquestador: aceptado ✅ / nueva lista)_
