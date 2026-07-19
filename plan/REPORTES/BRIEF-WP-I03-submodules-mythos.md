# Brief — WP-I03 · Submodules holón 01 (Mythos)

_Orquestador holón 07 · 2026-07-19 · lote arranque I0_

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I03 · Submodules holón 01
Rama: wp/i03-submodules-mythos
Worktree: ../SCRIPT_SDK-wp-i03
Reporte: plan/REPORTES/WP-I03-submodules-mythos.md

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I5 (submodules anclas read-only), DE-I8
  (asentar sin inflar: solo holón 01; emmanuel/aleph NO submodule add)
- plan/PRACTICAS.md delta 2 (cero commits dentro de HOLONES/*)
- Remotes vivos (HANDOFF): github.com/alephscriptorium-eng/Z_SDK y
  Z_SDK-games-library

Notas del orquestador:
- Solo holón 01: HOLONES/01-mythos/zeus-sdk → Z_SDK;
  HOLONES/01-mythos/games-library → Z_SDK-games-library.
- DE-I8: emmanuel (03) y aleph-scriptorium (05–06) — placeholder de ruta
  reservada en HOLONES/ si hace falta asiento, SIN `git submodule add`.
- Cero commits dentro de los submodules. Diff dentro de submodule =
  devolución automática.
- Ceguera: tras init,
  `git -C HOLONES/01-mythos/zeus-sdk grep -i "script_sdk|holón|holarquía"`
  = 0 (evidencia literal en reporte).
- CA: `git submodule update --init` funciona en clon fresco (documentar
  pasos; si no puedes clonar fresco, deja ⏳ con lo ejecutado).
- No push. No higiene I01. No package.json I02 (salvo .gitmodules en raíz).
- Commits: chore: submodules mythos 01 …

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```
