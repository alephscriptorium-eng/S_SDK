# BRIEF · WP-Z11 · linea-editor (autoría MCP por horse)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z11 · linea-editor: autoría de líneas como server MCP por horse
Rama: wp/gc-z11-linea-editor
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\zeus-sdk\.worktrees\wp-gc-z11-linea-editor
Reporte: plan/REPORTES/WP-Z11-linea-editor.md
Issue: (sync-map si aplica; si no, anotá en reporte)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS/sprint-game-city/
Proyección issues = LOCAL-ONLY (no GitHub)

ALCANCE_DIFF =
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/linea-editor/** (nuevo pack
    candidato; sibling de linea-system — eje III: compartir loader/validate,
    no duplicar resolución)
  - HOLONES/01-mythos/zeus-sdk/packages/engine/linea-kit/** SOLO consumo /
    thin wrap de tools existentes (crearLinea, segmentar, …) — no fork schemas
  - HOLONES/01-mythos/zeus-sdk/packages/engine/presets-sdk/** /
    horse/** SOLO preset oferta + broadcast (mínimo)
  - HOLONES/01-mythos/zeus-sdk/packages/mesh/mcp-launcher/** SOLO registro
    catálogo / launch a demanda (no reabrir Z06/Z15)
  - HOLONES/01-mythos/games-library/** SOLO e2e rabbit→tools/call (Z04
    cadena) + fixture línea starterkit si hace falta
  - plan/REPORTES/WP-Z11-linea-editor.md
  Fuera: Z10 reopen (caminos/lectura), cronista/misiones SEMILLA, Z05,
    NovelistEditor como dep, BACKLOG, flows Z08 como obra.

Eje CA aplicable: I (export story-board real) · II (envolver linea-kit) ·
  III (no duplicar resolución) · IV (2º cliente: CLI kit o editor-ui) ·
  V (gates mutación visibles) · ceguera ampliada.

Deps (✅ — arrancable; no bloquean):
  - Z06 ✅ mcp-launcher · Z04 ✅ rabbits e2e · Z03 ✅ room/juego
  - Z10 ✅ modelo viaje / deuda linea:* consumible (no reimplementar caminos)
  - Tick A1b ✅ PASS — acta plan/REPORTES/ACTA-A1b-PASS-2026-07-21.md
    · zeus `af0bad9` · GL `439788f` · tip gobierno brief ~`59fd564`

Env (obligatorio — NUNCA `test -d .git`):
  git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
  git -C HOLONES/01-mythos/games-library rev-parse HEAD
  git -C . rev-parse HEAD
  Esperado al brief: zeus≈af0bad9 · GL≈439788f · S_SDK tip post-GO.

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §Ola GC-4 + reglas §1–7 (glosario viaje regla 5) + ficha WP-Z11
  3. ACTA-A1b-PASS-2026-07-21.md
  4. WP-Z10 / reporte Z10 (frontera dura lectura vs autoría)
  5. WP-Z06 / WP-Z04 (launcher + rabbit horse)
  6. DECISIONES.md DC-GC-ceguera-marca
  7. Plantilla reporte del skill

Notas del orquestador (GO GC-4 · deps OK · V2 gobierno propio):
  - **Slice e2e primero (bloqueante):** rabbit Z04 → tools/call UNA tool
    edición gateada → approve evidenciado → mutación en volumen → valida
    schemas kit sin tocarlos.
  - Frontera Z10: este WP = mutación + export; Z10 = caminos/lectura.
  - Glosario: tools nuevas = «viaje» camino (Z10); NO sentido campaña-cache
    de linea-system (renombrar a «campaña» solo si tocás esos prompts).
  - Portá CONCEPTO NovelistEditor; cero dep al boceto aleph.
  - Horse: solo refs/URIs (SPEC-horse-blobs); medí con grep -c/-q.
  - Scope: slice + export mínimo. Cronista/misiones = SEMILLA parked.
  - Ceguera ampliada: árbol + `git log -p` reachable; cero novela /
    NovelistEditor / ciudad-como-método / marco / `WP-Z\d+` en pack.
    Marca aleph/scriptorium OK como datos.
  - Paralelo con Z05-f1/f2 OK (paths distintos).
  - No edites BACKLOG. No push tip gobierno. Rama exacta arriba.

Empieza: rama/worktree zeus-sdk, PRACTICAS + ficha Z11 + linea-kit tools,
implementá solo el slice Z11.
```
