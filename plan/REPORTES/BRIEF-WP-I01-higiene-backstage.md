# Brief — WP-I01 · Higiene y línea público/backstage

_Orquestador holón 07 · 2026-07-19 · lote arranque I0_

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I01 · Higiene y línea público/backstage
Rama: wp/i01-higiene-backstage
Worktree: ../SCRIPT_SDK-wp-i01
Reporte: plan/REPORTES/WP-I01-higiene-backstage.md

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I10 (abstracción protocolo/datos) y DE-I11
  (destino backstage = local + .gitignore; NO remoto privado nuevo)
- plan/PRACTICAS.md deltas 1–6
- plan/HANDOFF-ARRANQUE.md (contexto; no improvisar con VIGILANCIA/ADDENDA)

Notas del orquestador:
- Alcance: higiene del árbol publicable. NO implementar I24 entero (eso es
  ola I2); aquí solo: scratch fuera + gitignore alineado a DE-I11 +
  HANDOFF_* tratados como histórico local (gitignore, no borrado).
- HIPOTESIS.md (scratch ~50 KB): sacar del árbol publicable → mover a
  VIGILANCIA/TRASH/ o fuera del repo; no destruir contenido sin rastro.
- HANDOFF_* (HANDOFF_VIGIA_*, etc.): NO borrar. Archivar/gitignore según
  DE-I10/DE-I11 — quedan en disco local, fuera del remoto.
- .gitignore: entradas para VIGILANCIA/, ADDENDA/, HANDOFF_*, y lo que
  ya sepa I24 que debe quedar backstage. Destino = local + gitignore
  (DE-I11). No crear remote privado.
- No tocar HOLONES/, docs VitePress, package.json (eso es I02/I03).
- No push. No editar BACKLOG (solo orquestador).
- Commits: chore(plan-root): … o chore: higiene backstage …

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```
