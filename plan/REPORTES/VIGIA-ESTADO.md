# ESTADO DEL VIGÍA — swarm holón 07 (rolling; léeme al retomar vigilancia)

Actualizado: 2026-07-19 (post-I28 ✅ · ola housekeeping V4+V5+V6 cerrada).

## Revisión I40/I41/I27 (2026-07-19 noche, de facto — vigía + worker)

| WP | Veredicto vigía | Nota |
|---|---|---|
| I40 cierre formal | **Aceptable** | delega en I41 sin inventar ni duplicar |
| I41 acta C8 sitio | **Aceptable-con-nota** | acta exacta (spot-check re-ejecutado 1:1); ver V5/V6 |
| I27 skill v0.2 | **Aceptable-con-nota** | 12 reglas cosidas **verbatim** al skill (`reglas-metodo-v02.md`, cruzadas en SKILL/ciclo/ORQUESTADOR); scrub F7 limpio; tarball = declarado; commits de aceptación atómicos (regla 2 cumplida); ver V4 |

Canales reales re-verificados por el vigía: registry `['0.1.0','0.2.0']` ·
`skills.s-sdk.escrivivir.co` **200** (era 404) · custom.css servido sin
rutas · favicon raíz 404 (declarado).

Cerrados: ~~V1~~ (custom.css neutral, `5d7b211`) · ~~V2~~ (atomicidad
cumplida en I27) · ~~V3~~ (ramas i30/i32 borradas). Protocolo: skill
`vigilancia` (`@alephscript/skills-scriptorium@0.1.0`); doctrina previa en
backstage (`VIGILANCIA/ESTACION.md`, gitignored). Actas de este mundo:
`VIGIA-2026-07-19-arranque-I0.md` · `INTERVENCION-2026-07-19-estabilizacion.md`
· esta.

## Revisión Ola I3 (2026-07-19, de facto — vigía + worker independiente)

| WP | Veredicto vigía | Nota |
|---|---|---|
| I30 activación en casa | **Aceptable** | plan/roles ausente ✅; dedup = skill; WEBS/ instancia real |
| I31 portada + Mythos | **Aceptable** — el mejor sellado del lote | cifra **exacta**: 21 paquetes @zeus contados contra `/-/all` del registry, 1:1 con la ficha; URLs 200; control negativo E404 correcto |
| I32 fichas 02–07 | **Aceptable** | roadmaps uniformes; E0–E3 ⬜ fiel; S14 🔶 fiel; Jekyll aleph 200 |
| I33 pack servido | **Aceptable** | espejo por `scripts/sync-ensayo.mjs` en build (no copia tracked, gitignored); dist `cmp` **byte-a-byte idéntico** al original — DA-4 y procedencia intactas |
| **Ola I3** | **Aceptable-con-nota** | ver hallazgo V1 |

## Sitio en producción — verificado C8/C8-ampliado (2026-07-19 ~19:20Z)

- `https://s-sdk.escrivivir.co/` **VIVO**: Pages `build_type=workflow`,
  CNAME ok, **HTTPS enforced, cert aprobado (expira 2026-10-17)**.
- Clase completa 200: portada · 7 fichas `/holones/0X-*` · `/autoridades/*`
  · `/guide/publicar-la-web` · `/ensayo/` + `fanzine.css` · 4 assets del
  bundle. CI `Docs` success ×3 en main; `main` == `origin/main` = `4fc8d71`.

## Hallazgos abiertos (por severidad)

- ~~**V4**~~ · ~~**V5**~~ · ~~**V6**~~ — **cerrados** por **WP-I28 ✅**
  (2026-07-19): ramas `wp/i20`–`i27` borradas en skills-library
  local+remoto; favicon raíz en `docs/public/` (vivo 404 hasta redeploy
  Pages); scrub `<pendiente I40>`; nav `/guide/publicar-la-web`.
  **Ola housekeeping cerrada.**
- *(v0.2 candidata, del ciclo I52):* las notas de scrub no citan
  literalmente aquello que mandan borrar (lección de la §Nota que
  reintrodujo el patrón); y **regla 1 confirmada en dos mundos** (hueco
  post-merge nuestro + plan sin commitear en zeus pre-U140).

## Gates externos vivos (nunca silencio)

- **GO I5 abierto (2026-07-19):** «esperando: custodio entrega §Nota
  **I52** → zeus» (`ENTREGA-VIGIA-2026-07-19b-scrub-rutas.md`) +
  «esperando: merge micro-WP zeus + re-verif vigía (CA I52 · grep clase
  rutas absolutas = 0)». Leak remoto zeus `⏳ sin re-verificar` hasta
  ese merge. I52 ≠ I50; I152 no existe.
- ~~«esperando: **WP-I27**»~~ — **cerrado** (I27 ✅ · v0.2 + Pages +
  higiene).
- ~~WP-I40 / I41~~ — **cerrados** (ops + acta C8 ✅).
- ~~«esperando: **WP-I28**»~~ — **cerrado** (ola housekeeping
  V4+V5+V6 ✅).

## Rutina al retomar

Pulso: `git fetch` + main vs origin · worktrees/stash/ramas ·
`gh run list -R alephscriptorium-eng/S_SDK -L3` · curl clase del sitio.
Review de facto por WP cerrado. C8: canal real siempre; navegación para
SPA (lección U138). Falso positivo no es inocuo: elevar solo anomalía real.
