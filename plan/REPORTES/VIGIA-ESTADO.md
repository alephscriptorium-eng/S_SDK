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

## Re-verificación I52 (2026-07-19 noche · U140 mergeado @ `0e604ae`)

Contra el **main remoto** de zeus (canal real):
- Clase rutas absolutas (`[A-Za-z]:\Users` · `/c/Users/`): **0 hits** ✅
- `holón|holarquía`: **0 hits** ✅ (scrub U118 intacto)
- `SCRIPT_SDK`: **14 hits residuales en UN fichero** — el propio reporte
  `plan/REPORTES/WP-U140-scrub-rutas-locales.md`, que cita su evidencia de
  grep con el token en claro (`SCRIPT_SDK=0`). La recursión de la §Nota,
  un nivel arriba: el reporte que prueba la ausencia lo reintroduce.
- **Veredicto vigía: I52 NO cierra aún** — falta micro-enmascarado del
  token en ese reporte (línea ciega para zeus abajo). Los 8 ficheros
  originales del leak: limpios.

**Micro para zeus (vía custodio):** «El reporte U140 cita en claro el
token objetivo dentro de su evidencia. Enmascararlo (p.ej. `<token>` o
`S…_SDK`). CA: grep del token = 0 en TODO el árbol, incluido el propio
reporte.»

**Lección v0.2 reforzada:** ni notas ni reportes citan el token que mandan
borrar — la evidencia de grep se enmascara SIEMPRE (2 recursiones en un
mismo ciclo: §Nota y reporte).

I28 re-verificado de facto: 0 ramas `wp/*` en el hermano (local+remoto,
post-prune) ✅ · favicon raíz **200** tras redeploy ✅.

## Re-verificación FINAL I52 (2026-07-19 noche · U141 @ `d1eef8f`)

Grep sobre TODO el árbol remoto de zeus: `SCRIPT_SDK` = **0** · clase
rutas = **0** · `holón|holarquía` = **0**. U141 enmascaró su propia
evidencia. **F6 muerto. Veredicto vigía: I52 PASS — sellable por el
orquestador** (el ✅ es suyo).

## Triaje I50 (2026-07-19 noche — «no inventar frágiles» pagó)

4 de 6 ítems del plan original YA resueltos en los main vivos de zeus
(#2 guard existe · #5 dist=0 · #7 documentado · A-13 aplicado). §Nota
redactada con solo los 2 vivos (#1 CNAME ×2 repos · #4 npm ci consulta)
+ oferta del paquete v0.2 **solo por nombre npm** (sin dominios ni repos
— el token `skills-library` no debe entrar al árbol de zeus). Ceguera
grep = 0. Fichero: `ENTREGA-VIGIA-2026-07-19c-sprint3-GO-prep.md`.

## Revisión I60 — emmanuel, el segundo consumidor (2026-07-19 noche)

**Eje IV: VALIDADO CON RESERVA.** Lo que funcionó: referencia versionada
real (`@0.2.0` fijada, `npm view` resuelve en vivo), dedup de los 5 roles
(-305 líneas), calibración local intacta (E0–E3, DE-n sin tocar), y la
auto-revisión CA5 **cazó y corrigió** una fuga en su propio ciclo.

**F8 · CRÍTICO — fuga de ceguera en historial público de emmanuel:** el
commit `72c210e` (ancestro de main, **pusheado a E_SDK**) contiene
`SCRIPT_SDK` y `holón/holarquía` en claro (primera versión del acta I60);
el fix `8dc898c` enmascaró el árbol pero no purgó el historial —
`git show 72c210e:...` lo sirve. Además el patrón de grep usado delata que
la activación la ejecutó un agente **con contexto del marco** (sabía qué
tokens ocultar): la fuga era estructural, no accidental.
**Decisión del custodio:** (A) *recomendada* — rewrite/force-push YA
(repo recién nacido, 0 forks: barato hoy, imposible mañana) · (B) asumir
el residual y documentarlo como DE en emmanuel. Matiz de severidad: el
marco es público por diseño en s-sdk.escrivivir.co — la ley protege que
el ÁRBOL del mundo no lo contenga (dieta de sus agentes), no el secreto.

**Menores I60:** acta sin «Revisión del orquestador» rellenada pese al
merge ✅ · `REPORTES/PLANTILLA.md` no dedupeada (criterio inconsistente).

**Reglas candidatas v0.3 (del ciclo I6):**
13. La activación de un skill la ejecuta un **agente fresco que solo
    conoce el skill** — jamás uno con contexto del marco.
14. La ceguera se verifica sobre el **historial alcanzable** (`git log
    -p`), no solo el árbol — CA-por-clase aplicado a git; si hay fuga en
    commit intermedio, squash antes del merge.

## Gates externos vivos (nunca silencio)

- ~~«esperando: micro-enmascarado del token en reporte U140 (zeus)»~~ —
  **cerrado** (U141 ✅ · main `d1eef8f` · re-verif vigía PASS).
- ~~«U141 mergeado; esperando re-verif vigía»~~ — **cerrado** (PASS
  arriba). «esperando: ✅ I52 del orquestador» — trámite.
- ~~«esperando: custodio entrega §Nota Sprint 3 → zeus (U142)»~~ —
  **cerrado** (entregada; zeus U142 ✅ · tip `6015d53`; U143/U144 ⬜
  sin GO; I50 🔶 aplicada-en-zeus). I51 ⬜ hasta aplicación/descarte.
- «esperando: GO usuario zeus (U143/U144) o descarte explícito» — **vivo**.
- ~~I50 sin GO~~ — **cerrado** (GO aparte 2026-07-19; §Nota entregada).
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
