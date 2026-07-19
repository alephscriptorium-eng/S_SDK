# ENTREGA del vigía — lote correctivo de gobierno (quietud post-I0)

> **SUPERADA (2026-07-19, intervención):** el lote (A) lo auto-corrigió el
> swarm (commit `092fe5f` asienta `plan/`); (B) y (C) los cerró la
> intervención (stash drenado, conector gitignoreado vía regla I24,
> PRACTICAS delta 7). Se conserva como evidencia del ciclo. Veredicto vivo:
> `INTERVENCION-2026-07-19-estabilizacion.md`.

Para el orquestador, vía custodio. Sin ceguera (mundo propio). Evidencia
completa: `plan/REPORTES/VIGIA-2026-07-19-arranque-I0.md`.

---

> **Lote correctivo — procesar ANTES de abrir Ola I1** (el GO de I1 queda
> condicionado por el custodio al cierre de A).
>
> **(A) PRIORIDAD · WP-I04 · Asentar el gobierno en git.** De facto,
> `git ls-tree -r main -- plan/` contiene SOLO los 3 reportes de I01–I03.
> BACKLOG, DECISIONES (DE-I0..I13), VISION, README, PRACTICAS, HANDOFF y
> BRIEFs están `??` untracked — el plan que gobierna los CA no existe en la
> historia y un `git clean`/reset lo borra sin traza. Commitear `plan/`
> completo a main.
> **CA:** `git show main:plan/BACKLOG.md`, `:plan/DECISIONES.md`,
> `:plan/VISION.md`, `:plan/README.md`, `:plan/PRACTICAS.md` devuelven
> contenido; acta de I00 recibe nota del orquestador citando este WP
> (I00 ✅ NO se reabre — invariante).
>
> **(B) Higiene en la misma quietud (micro, cabe en I04):**
> 1. `git stash list` tiene `stash@{0}: wip-pre-merge-i01` — drenar o
>    descartar tras (A), no dejarlo colgando. **CA:** stash list vacío o
>    decisión anotada.
> 2. `CONECTOR_ZEUS_SDK_BLOCKCHAIN_COMPORT_PLAN.md` untracked nombra
>    zeus (clase backstage), fuera de `.gitignore`/DE-I11 — un `git add -A`
>    lo publicaría. Gitignorar o archivar. **CA:** `git check-ignore` lo
>    cubre o está archivado en backstage.
>
> **(C) Retro doctrinal (sin código):** añadir a PRACTICAS la regla nacida
> de este arranque: **el gobierno va a git antes de abrir WPs sobre él**
> (el plan se commitea primero; la obra después). **CA:** el texto existe y
> este mismo lote lo estrena.
>
> Nota de reconocimiento: la ejecución de I01–I03 fue limpia (aislamiento
> correcto, unión de `.gitignore` bien resuelta, reportes honestos con `⏳`
> declarado). El hallazgo es de disciplina de plan, no de los workers.

---

Registro: primera ENTREGA del vigía en el mundo propio; DNS de DE-I2/DE-I9
ya verificado contra canal real (ver acta).
