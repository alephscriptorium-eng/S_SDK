# Brief — WP-I32 · Fichas 02–07 + roadmaps placeholder

_Orquestador holón 07 · 2026-07-19 · ola I3 (post-✅ I30; paralelo I31)_
_SCRIPT_SDK `main` @ origin (merge I30 + push). Skills-library `main` @
`019a90b` — solo lectura si hace falta. I30 dejó `WEBS/` + plan consumidor._
_NO implementar I31 (portada/ficha 01)/I33/I27/I40. Solo fichas 02–07 +
roadmaps placeholder._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I32 · Fichas 02–07 + roadmaps placeholder
Rama: wp/i32-fichas-roadmaps
Worktree: ../SCRIPT_SDK-wp-i32
Reporte: plan/REPORTES/WP-I32-fichas-roadmaps.md

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I1, DE-I5/DE-I8 (asentar sin inflar: 03/05/06
  sin submodule add), DE-I6 (WEBS; ENTREGA si tocas capa)
- plan/BACKLOG.md WP-I32 (CA literal) + BRIEF-OLA-I3.md
- WEBS/CANTERA/01-inventario-superficies.md + ENTREGA-CAPA-1 (línea base)
- DEVOPS/METODOLOGIA/holones/02-logos.md … 07-script-sdk.md + TEMPLATE.md
- HOLONES/ placeholders 03/05/06 (read-only; NO `git submodule add`)
- Fuentes de estado (SOLO lectura, sellar o marcar `<pendiente>`):
  - emmanuel: planes E0–E3 si existen en árbol local accesible
  - aleph-scriptorium: S0–S4, S14 🔶; link Jekyll vivo si verificable
  - 04 AOS/NETWORK-ENGINE: lo que haya documentado sin inventar
  - 07: este repo + TEST-SWARM (método + pack; sin servir pack = I33)

Notas del orquestador:
- Objetivo: completar el mapa público de holones 02–07 con fichas honestas
  y roadmaps en formato uniforme (olas ⬜/🔶/✅) listos para rellenar.
  (1) Crear `docs/holones/02-*.md` … `07-*.md` (nombres alineados a
      DEVOPS/METODOLOGIA/holones/ y a lo que I31 deje en nav). Si I31
      aún no mergeó, crea el directorio y las fichas 02–07; no reescribas
      `01-mythos` ni el hero de portada (territorio I31).
  (2) Contenido por ficha (mínimo):
      - 02 Logos — juntura 01↔03 pendiente de destilar → declarar
        `<pendiente>` con sello de fuente (DEVOPS), no inventar puente.
      - 03 emmanuel — E0–E3 todo ⬜, «papel primero»; DE-I8 sin inflar.
      - 04 AOS/NETWORK-ENGINE — estado real o `<pendiente>` explícito.
      - 05–06 aleph-scriptorium — S0–S4, S14 🔶; link al Jekyll vivo
        solo si lo verificas (browser); si no, `<pendiente: verificar>`.
      - 07 el método + pack TEST-SWARM — apunta a este holón; pack
        servido = I33 (enlace `<pendiente>` o nota, no implements I33).
  (3) Roadmap uniforme en cada ficha (o sección compartida): tabla/lista
      de olas con ⬜/🔶/✅ — placeholders OK; cero promesas vendidas.
  (4) Nav/sidebar: añade entradas 02–07 sin pisar el trabajo de I31 en
      portada/01. Si config.mjs choca en paralelo, documenta en reporte
      el diff esperado post-merge (orquestador resuelve al merge).

- CA (evidencia literal en reporte):
  1) Cero promesas sin sello: toda afirmación viva tiene fuente o queda
     `<pendiente>` declarado (no vendido como hecho).
  2) Un lector distingue estratos (verificado / asentado DE-I8 /
     `<pendiente>` / roadmap vacío).
  3) Formato roadmap uniforme en 02–07.
  4) `npm run docs:build` verde (o ⏳ si falta 01 de I31 aún no en main —
     entonces build con stubs mínimos y declara gate). Ceguera: sin
     rutas OASIS absolutas en docs/; sin `git submodule add`; HOLONES/
     no mutado.

- Cadencia: merge al ✅. Tú NO merges ni push raíz.
- Paralelo I31: NO edites `docs/index.md` hero/features de Mythos ni
  `docs/holones/01-mythos.md`. Tu superficie = fichas 02–07 + roadmaps
  + enganches nav laterales.
- NO I33 (servir TEST-SWARM/docs). NO I27. NO I40.
- NO editar BACKLOG (ya 🔶). NO push origin.
- NO mutar skills-library. NO tocar submodules HOLONES/.
- Commits: docs(docs): … / docs(WEBS): … según árbol.

Empieza: crea worktree `../SCRIPT_SDK-wp-i32` desde main, lee PRACTICAS
+ holones 02–07 en DEVOPS, escribe fichas+roadmaps honestos, docs:build
(o gate declarado), evidencia los 4 CA, reporta. NO implementes I31/I33.
```
