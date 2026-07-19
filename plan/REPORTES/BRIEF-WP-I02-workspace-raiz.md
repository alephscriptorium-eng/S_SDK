# Brief — WP-I02 · Workspace raíz

_Orquestador holón 07 · 2026-07-19 · lote arranque I0_

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I02 · Workspace raíz
Rama: wp/i02-workspace-raiz
Worktree: ../SCRIPT_SDK-wp-i02
Reporte: plan/REPORTES/WP-I02-workspace-raiz.md

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I0 (workspace raíz), DE-I1 (VitePress base),
  DE-I12 (auth registry — solo contexto; no publicar aquí)
- Fuentes de plantilla en BACKLOG (cabecera): games-library docs.yml /
  config — SOLO lectura; este WP no monta docs/ aún (eso es I10)
- Registry vivo (C8): npm.scriptorium.escrivivir.co

Notas del orquestador:
- Entregables: package.json (scripts docs:dev / docs:build planos;
  engines node 22), .npmrc (@zeus y @alephscript →
  https://npm.scriptorium.escrivivir.co), .gitignore incluyendo
  docs/.vitepress/dist/ (frágil #5).
- CA literal: `npm install` verde; `npm view @zeus/protocol
  --registry=https://npm.scriptorium.escrivivir.co` resuelve versión real
  (HANDOFF reportó 0.2.0 — verificar, no asumir).
- NO npm publish. NO git push. NO submodules (I03). NO higiene HIPOTESIS
  (I01) salvo si .gitignore de I02 colisiona: coordinar por hallazgos,
  no por scope creep.
- Si hace falta package-lock, commitéalo; si no hay deps aún, documenta
  en el reporte por qué install sigue verde.
- Commits: chore: workspace raíz … / feat: package.json raíz …

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```
