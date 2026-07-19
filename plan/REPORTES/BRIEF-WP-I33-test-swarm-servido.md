# Brief — WP-I33 · El pack TEST-SWARM servido

_Orquestador holón 07 · 2026-07-19 · ola I3 (post-✅ I31∥I32)_
_SCRIPT_SDK `main` @ origin (merge I31 + push). Skills-library `main` @
`019a90b` — solo lectura si hace falta._
_NO implementar I27/I40/I41. Solo servir el pack TEST-SWARM desde la web._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I33 · El pack TEST-SWARM servido
Rama: wp/i33-test-swarm-servido
Worktree: ../SCRIPT_SDK-wp-i33
Reporte: plan/REPORTES/WP-I33-test-swarm-servido.md

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I4 (pack conservado servido) + DE-I1 (VitePress)
- TEST-SWARM/plan/DECISIONES.md DA-4 (ensayo se publica junto con docs/)
- plan/BACKLOG.md WP-I33 (CA literal) + BRIEF-OLA-I3.md
- docs/index.md + docs/holones/07-script-sdk.md (enlace `<pendiente>` I33)
- TEST-SWARM/docs/index.html (+ assets/) — fuente del pack; no reescribir
  el ensayo
- WEBS/CANTERA/01-inventario-superficies.md (ruta TEST-SWARM = PENDIENTE)
- docs/.vitepress/config.mjs (publicDir / static copy — patrón VitePress)

Notas del orquestador:
- Objetivo: honrar DA-4 — el pack del ensayo accesible desde la web del
  holón 07 sin duplicar ni reescribir el contenido del ensayo.
  (1) Servir `TEST-SWARM/docs/` (al menos `index.html` + `assets/`) como
      ruta estática bajo el sitio VitePress. Preferible: copiar/sincronizar
      a `docs/public/ensayo/` (o ruta coherente) de modo que el build
      emita p.ej. `/ensayo/` o `/ensayo/index.html`. Documenta el mecanismo
      (script npm, copy en prebuild, o publicDir) — no inventes un segundo
      pack.
  (2) Enlace desde portada (`docs/index.md`) y/o ficha 07 hacia esa ruta.
      Quita o actualiza el `<pendiente>` de I33 en `07-script-sdk.md`.
  (3) Moira: el JS del pack (`#moira` / countdown) debe funcionar al abrir
      la ruta servida. Verifica en `docs:dev` o preview del `docs:build`
      (browser). Sitio vivo en Pages/DNS = I40 — no bloquees I33 por I40;
      sella «moira OK en preview local» y declara Pages como `<pendiente
      I40>` si el dominio aún no sirve.

- CA (evidencia literal en reporte):
  1) Pack accesible desde portada (enlace real → HTML del ensayo).
  2) Moira funcional en la ruta servida (browser; pegar captura textual /
     comportamiento del countdown/stats-bar).
  3) `npm run docs:build` verde; ceguera: sin rutas OASIS absolutas nuevas
     en docs/; no mutar el contenido doctrinal del pack (solo servir /
     enlazar); HOLONES/ no mutado.
  4) Inventario WEBS/CANTERA actualizado (ruta TEST-SWARM = VIVA-OK o
     equivalente honesto).

- Cadencia: merge al ✅. Tú NO merges a main ni empujas raíz.
- NO I27. NO I40 (Pages/DNS — solo nota si preview local).
- NO editar BACKLOG (ya 🔶). NO push origin (orquestador).
- NO mutar S_SDK-skills-library. NO tocar HOLONES/ submodules.
- NO reescribir GUION/NOTAS/acta del ensayo; cero «mejoras» de copy.
- Commits: docs(docs): … / docs(WEBS): … según árbol.

Empieza: crea worktree `../SCRIPT_SDK-wp-i33` desde main, lee PRACTICAS
+ DA-4, sirve el pack, enlaza desde portada/07, docs:build + moira en
browser, evidencia los CA, reporta. NO implementes I27/I40.
```
