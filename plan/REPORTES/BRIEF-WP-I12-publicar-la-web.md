# Brief — WP-I12 · publicar-la-web propia

_Orquestador holón 07 · 2026-07-19 · ola I1 (paralelo I10 ∥ I12)_

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I12 · publicar-la-web propia
Rama: wp/i12-publicar-la-web
Worktree: ../SCRIPT_SDK-wp-i12
Reporte: plan/REPORTES/WP-I12-publicar-la-web.md

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I1/DE-I2 (web VitePress; dominio
  s-sdk.escrivivir.co) y DE-I13 (push raíz tras validación — documentar,
  no ejecutar push)
- Fuente canónica (SOLO lectura):
  C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk\docs\guide\publicar-la-web.md
  (ciclo editar/preview/build/publicar + checklist ops)
- plan/BACKLOG.md WP-I12 (CA literal) + WP-I11 (para alinear checklist
  al workflow futuro, sin escribir docs.yml aquí)
- package.json scripts docs:dev / docs:build (I02 ya en main)

Notas del orquestador:
- Entregable único: docs/guide/publicar-la-web.md al estilo zeus (la web
  se documenta a sí misma). Ciclo editar → preview → build → publicar +
  checklist ops: Settings→Pages→Source=Actions, Custom domain
  s-sdk.escrivivir.co, DNS CNAME → alephscriptorium-eng.github.io,
  Enforce HTTPS.
- CA: cada comando citado corre tal cual (C8); sin pasos inventados.
  Si I10 aún no mergeó el árbol VitePress, documentar comandos que
  calzan con package.json actual y dejar <pendiente> solo donde el
  artefacto aún no exista — no inventar workflow.
- NO escribir .github/workflows/docs.yml ni docs/public/CNAME (I11).
- NO montar theme/config VitePress (I10). No tocar HOLONES/. No push.
  No editar BACKLOG.
- Commits: docs(docs): … o docs: publicar-la-web …

Empieza: sitúate en rama/worktree, lee PRACTICAS entero, luego implementa.
```
