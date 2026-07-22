# BRIEF · WP-S03 · estación viva · 🔶 DESPACHADO

> Gate exprés S03 **PASS** @ `a37d4c2` (PO). Worker autorizado.
> S07 sigue 🔶 hasta S03 ✅ — no abrir broche desde este WP.

```text
(rol) skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)
  — Gate PASS · DESPACHADO

WP: WP-S03 · estación viva / watcher calibrado al hermano
Rama: wp/sb-s03-estacion-viva
Worktree: C:\Users\aleph\S_SDK-skills-library\.worktrees\sb-s03-estacion-viva
Reporte: plan/SPRINTS/sprint-skills-bosque/REPORTES/WP-S03-estacion-viva.md
Issue: ola B-2 [#13](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/13)

MUNDO_RAIZ = C:\Users\aleph\S_SDK-skills-library
PLAN_DIR   = plan/SPRINTS/sprint-skills-bosque/
Proyección issues = opt-in PO · sync-map bajo este sprint

Dolor real: al cargar la estación, el estado y el watcher deben nacer
de una sola fuente (bitácora) sin drift; el watcher muere con la sesión;
el boot conecta al juego (GAME_MCP + peercard firmada) y deja salida dual
PO/scrum de serie. Hoy el skill `estacion-viva` no existe en el paquete
— S07 no puede publicar 0.5.0 sin él.

CA (norte):
  «un agente fresco, SOLO con el skill estacion-viva, reproduce el boot
   completo (cargar estación → regenerar estado desde bitácora →
   relanzar watcher → pulso del mundo → conexión al juego → modo debug
   → salida dual PO/scrum) — eje IV real: consumidor = PO en próxima sesión»

CA formales: ejes I·IV + ceguera (delta 5 = 0).

--- Boot (contrato del skill — obligatorio) ---
  1. Cargar estación
  2. REGENERAR ESTADO desde bitácora (una fuente; sin drift)
  3. RELANZAR watcher (clase: muere con la sesión)
  4. Pulso del mundo
  5. Conexión al juego:
       · GAME_MCP + peercard firmada
       · kits DEL REGISTRY (no checkout hermano/raíz ajeno):
         player-mcp-kit@0.1.3 · C8
  6. Modo debug
  7. Salida dual PO/scrum de serie

--- Bitácora ---
  Publicable como línea; autoría vía el editor MCP del mundo
  (linea-editor / preset del mundo). El skill documenta el contrato;
  no reimplementa zeus.

--- Watcher ---
  Whitelist de materialización `.claude/skills/` (clase I71 /
  feedback S02: ~3.110 falsos positivos si se barre sin whitelist —
  documentar y filtrar).

--- Params (obligatorios) ---
  WORLD_ROOT · GAME_MCP · OUT_DIR
  Ceguera: delta 5 = 0 (árbol + git log -p reachable)

ALCANCE_DIFF (estricto · PINEADO):
  - skills/estacion-viva/**  (o path real bajo skills/ si el worker
    nombra el dir; canónico esperado: estacion-viva)
  - CHANGELOG Unreleased (entrada S03) si el paquete lo documenta
  - plan/SPRINTS/sprint-skills-bosque/REPORTES/WP-S03-estacion-viva.md
  VETO: zeus/** · games-library/** · pins · DECISIONES raíz ·
        otros sprints · sprint-ciudad-real/** · package.json bump
        (eso es S07) · publish / Release ·
        docs/** ya mergeado por S06 (salvo consumo lectura; no pisar mapa)

Compatible ∥ restos B-3: no pisar mapa docs mergeado (S06 ✅) salvo
consumo. ∩ con S06 = ∅ si S03 ⊂ skills/estacion-viva/**.

Deps:
  - C05 ✅ ciudadano-agente · puntero [S_SDK#31](https://github.com/alephscriptorium-eng/S_SDK/issues/31)
  - Issue library B-2 [#13](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/13)
  - B-1 ✅ · S05b ✅ · S06 ✅ (mapa en docs; no tocar)
  - Gate exprés S03 PASS antes de obra

Lecturas (cuando gate PASS):
  1. skills/vigilancia/SKILL.md + reference/ESTACION.md (pulso / watcher)
  2. skills/swarm-orquestacion/reference/convivencia-multi-orquestador.md
     (contrato; lección — no copiar datos de instancia)
  3. Lecciones R14: gobierno antes de aviso; hash POST-push en aviso
  4. BACKLOG + DC-SB-* este sprint · PRACTICAS del hermano
  5. C05 / peercard: acta + reporte WP-C05 (vía c contrato; registry)

Notas:
- No edites BACKLOG.
- No despaches ni abras S07.
- E2E: solo (a) registry limpio · (b) fixture tick-cero copiada.
  Kits: player-mcp-kit@0.1.3 desde registry (C8), no sibling path.
- Ceguera 0 en árbol + git log -p; CEGUERA_PATTERN por env.
- Empieza solo tras gate exprés S03 PASS: worktree + PRACTICAS + este brief.
```
