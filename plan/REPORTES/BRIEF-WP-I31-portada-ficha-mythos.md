# Brief — WP-I31 · Portada + ficha 01 Mythos

_Orquestador holón 07 · 2026-07-19 · ola I3 (post-✅ I30; paralelo I32)_
_SCRIPT_SDK `main` @ origin (merge I30 + push). Skills-library `main` @
`019a90b` — solo lectura si hace falta. I30 dejó `WEBS/` + plan consumidor._
_NO implementar I32/I33/I27/I40. Solo portada + ficha 01 Mythos._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I31 · Portada + ficha 01 Mythos
Rama: wp/i31-portada-ficha-mythos
Worktree: ../SCRIPT_SDK-wp-i31
Reporte: plan/REPORTES/WP-I31-portada-ficha-mythos.md

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I1 (VitePress+zine), DE-I5/DE-I8 (anclas mythos;
  asentar sin inflar — I31 NO toca submodules), DE-I6 (WEBS método;
  I31 muta docs/ según ENTREGA, no inventa método)
- plan/BACKLOG.md WP-I31 (CA literal) + BRIEF-OLA-I3.md (cadencia/orden)
- WEBS/ENTREGA-CAPA-1/01-PAQUETE.md §2 (ANTES literal de portada —
  línea base I30; tu ENTREGA muta DESPUÉS)
- WEBS/CANTERA/01-inventario-superficies.md (fichas 01–07 = PENDIENTE)
- DEVOPS/METODOLOGIA/holones/01-mythos.md + TEMPLATE.md (fuente de ficha;
  no copiar rutas OASIS absolutas al docs público)
- HOLONES/01-mythos/ (read-only: zeus-sdk + games-library ya anclados)
- Skill site-web (SOLO lectura si calibras sello/estrato):
  C:\Users\aleph\S_SDK-skills-library\skills\site-web\

Notas del orquestador:
- Objetivo: primera capa de contenido verificada en docs/ — portada que
  presente la holarquía y ficha pública del holón 01 Mythos con
  referencias reales selladas (C8).
  (1) Portada `docs/index.md`: hero + features que enlacen a fichas
      holones (al menos 01 viva; 02–07 pueden apuntar a stubs I32 o
      placeholders `<pendiente>` claros — no inventes roadmaps ajenos).
      Actualiza nav/sidebar en `docs/.vitepress/config.mjs`.
  (2) Ficha `docs/holones/01-mythos.md` (o ruta coherente con nav):
      identidad, ancla técnica (submodules HOLONES/01-mythos/*),
      superficies públicas verificadas:
        - https://z-sdk.escrivivir.co
        - https://games.z-sdk.escrivivir.co
        - registry @zeus (~19 paquetes) vía npm.scriptorium.escrivivir.co
        - GitHub Releases / repos Z_SDK + Z_SDK-games-library
      Cada afirmación con sello (navegada / comando / fecha).
  (3) Si generas ENTREGA en WEBS/ (opcional pero preferible): paquete
      I31 verbatim ANTES→DESPUÉS sobre portada+ficha; no reescribas
      CANTERA ajena.

- CA (evidencia literal en reporte):
  1) Cada URL citada navegada (browser MCP o evidencia equivalente;
     no solo curl) — pegar título/status o captura textual.
  2) Cada comando npm citado probado contra el canal real
     (p.ej. `npm view @zeus/...` / listado registry) — salida pegada.
  3) Sello por afirmación: el lector distingue verificado vs
     `<pendiente>` (cero promesas vendidas sin sello).
  4) `npm run docs:build` verde; ceguera: sin rutas OASIS absolutas ni
     copy de mundo zeus pegado en docs/; HOLONES/ no mutado.

- Cadencia: merge al ✅ (brief de ola). Tras tu reporte, el orquestador
  revisa; tú NO merges a main ni empujas raíz.
- Paralelo: I32 corre a la vez — NO edites fichas 02–07 ni roadmaps
  (territorio I32). Coordina solo por no chocar en `docs/index.md` /
  config: si tocas portada/nav de holones, deja hooks claros para I32
  (enlaces a rutas que I32 creará). Preferible: I31 crea `docs/holones/`
  + 01 + entradas nav «Holones»; I32 añade 02–07.
- NO I33 (TEST-SWARM servido). NO I27. NO I40 (Pages/DNS).
- NO editar BACKLOG (ya 🔶). NO push origin (orquestador).
- NO mutar S_SDK-skills-library. NO tocar HOLONES/ submodules
  (cero commits dentro; dirty = devolución).
- Commits en rama WP: docs(docs): … / docs(WEBS): … según el árbol.

Empieza: crea worktree `../SCRIPT_SDK-wp-i31` desde main, lee PRACTICAS
entero + WEBS ENTREGA-CAPA-1 §2, verifica URLs/registry en browser+npm,
escribe portada + ficha 01, docs:build verde, evidencia los 4 CA, reporta.
NO implementes I32+.
```
