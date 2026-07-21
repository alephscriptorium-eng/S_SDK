# BRIEF · WP-Z13 · Los tres jugadores (trama del SDK)

```text
(rol) .claude/skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)

WP: WP-Z13 · Los tres jugadores: fusión en la trama del SDK
Rama: wp/gc-z13-tres-jugadores
Worktree: C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-z13-tres-jugadores
Reporte: plan/REPORTES/WP-Z13-tres-jugadores.md
Issue: (sync-map / S_SDK#13 si aplica)

MUNDO_RAIZ = C:\Users\aleph\SCRIPT_SDK
PLAN_DIR   = plan/SPRINTS\sprint-game-city/

ALCANCE_DIFF =
  - HOLONES/01-mythos/games-library/packages/ciudad/** (lore + contrato
    mapeo tipo-jugador → rol catálogo / features[]; flujo residente)
  - HOLONES/01-mythos/games-library/kits/carpeta-dramaturgo/** SOLO
    consumo/guion acto V (ledger → TransmediaEvent → story-board); no fork kit
  - HOLONES/01-mythos/games-library/instances/ciudad/** si el acto V vive ahí
  - HOLONES/01-mythos/games-library/packages/startpack-ciudad/** SOLO si hace
    falta seed/feature mínimo del mapeo (no regenerar startpack entero)
  - plan/REPORTES/WP-Z13-tres-jugadores.md
  Fuera: reopen Z12/Z03/Z04/Z07 ✅; spawn/lifecycle (Z06/Z12); flows NR (Z08);
    autoría líneas (Z11); BACKLOG; tercer canal de transporte.

Eje CA aplicable: IV (≥2 tipos de jugador + ≥2 clientes: tablero/cronista) ·
  ceguera lore (regla 1 / DC-GC-ceguera-marca).

Deps (ya ✅ — no bloquean apertura):
  - Z12-f1 ✅ (y Z12-f2 ✅ / Z12 completo) — residentes = edificios running
  - Z03 ✅ — juego/authority / ledger
  - Z04 ✅ — corrientes / horse peer
  - Gancho Z07 ✅ (cronista/story-board) · Z11 parked (export si ya alcanza)

Lecturas obligatorias:
  1. plan/PRACTICAS.md (entero)
  2. BACKLOG §Ola GC-3 + ficha WP-Z13 + TRAMA-AGUA.md (porqué; brazo = este WP)
  3. WP-Z12 ficha (residentes = árboles en running) + reporte Z12-f1/f2
  4. WP-Z03 / WP-Z04 / WP-Z07 fichas (authority, peer, dramaturgo)
  5. DECISIONES.md DC-GC-ceguera-marca
  6. Plantilla reporte del skill

Notas del orquestador (GC-3 · post-Z12 completo · V2 gobierno propio):
  - **NO** tres contratos nuevos: armonizar lore + mapeo sobre protocolo
    existente (rooms/protocol/horse). Si pedís transporte nuevo → parar.
  - **≥2 tipos de jugador** por contrato (regla 6 sprint / TRAMA-AGUA).
  - **Eje IV:** mapeo ejercitado por dos clientes independientes (p.ej.
    tablero Z08 como consumidor + cronista Z07) — sin feature NR obligatoria
    si hay segundo cliente de contrato (test/CLI vale).
  - **Ceguera lore:** cero marco/holones/mundos en lore y contrato.
  - Una fuente de verdad: apagar edificio = retirar residente mismo tick
    (estado narrativo ≡ técnico vía Z12).
  - A1b puede diferir vivos e2e con intento documentado; no bloquea merge
    de lore/contrato/tests.
  - Ceguera método. No edites BACKLOG. Push tip gobierno = gate custodio.
  - Rama exactamente: `wp/gc-z13-tres-jugadores`.

Empieza: rama/worktree games-library, PRACTICAS + TRAMA-AGUA + ficha Z13,
implementá solo Z13.
```
