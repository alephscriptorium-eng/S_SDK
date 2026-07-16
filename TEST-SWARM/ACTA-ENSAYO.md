# ACTA DEL ENSAYO — retrospectiva del ensayo general

> **Sello:** Verificado · **Fuente:** commits y reportes bajo `TEST-SWARM/plan/REPORTES/`
> del mismo ensayo (2026-07-16). Este documento no gobierna mundos reales (DE-0).

---

## I · Objeto y alcance

**Objeto:** registrar qué enseñó el **ensayo general** TEST-SWARM — réplica del protocolo
canónico reinicializado (`emmanuel-sdk/plan` @ 2026-07-16) — como insumo para el
primer swarm real y para el estreno público (WP-D22).

**Alcance cubierto:** ola D0 (suelo) + ola D1 (Notas y acta v2) + ensamblado D20.
**Fuera de alcance de este ensayo:** WP-D21 (este acta) y WP-D22 (runbook de
publicación). No existieron WPs D02–D09 ni D14–D19 en el backlog del ensayo.

**Veredicto en una línea:** el protocolo **funciona** — gates, worktrees, reportes y
orquestador cerraron el pack navegable en una tarde — con **una devolución corregida**
(D00) y fricciones documentadas abajo que conviene sanear antes del estreno real.

---

## II · Inventario de WPs ejecutados

| WP | entregable | rama | commits clave | reporte | estado |
| -- | ---------- | ---- | ------------- | ------- | ------ |
| D00 | `validar-ensayo.sh` + fixtures | `wp/d00-gates-ensayo` | `2208952`, `9ec2cd3` | [WP-D00-gates-ensayo.md](plan/REPORTES/WP-D00-gates-ensayo.md) | ✅ aceptado · **devuelto-corregido** |
| D01 | `GUION.md` | `wp/d01-guion-pack` | `cdb2d7e` | [WP-D01-guion-pack.md](plan/REPORTES/WP-D01-guion-pack.md) | ✅ aceptado |
| D10 | `NOTAS/nota-1-la-forma-m.md` | `wp/d10-la-forma-m` | `5f94ec4` | [WP-D10-la-forma-m.md](plan/REPORTES/WP-D10-la-forma-m.md) | ✅ aceptado |
| D11 | `NOTAS/nota-2-la-maquina.md` | `wp/d11-la-maquina` | `5b1b2da` | [WP-D11-la-maquina.md](plan/REPORTES/WP-D11-la-maquina.md) | ✅ aceptado |
| D12 | `ACTA-V2.md` | `wp/d12-acta-v2` | `fd8336f` | [WP-D12-acta-v2.md](plan/REPORTES/WP-D12-acta-v2.md) | ✅ aceptado |
| D13 | `NOTAS/nota-3-la-ejecucion.md` | `wp/d13-ejecucion` | `c95e6a8` | [WP-D13-ejecucion.md](plan/REPORTES/WP-D13-ejecucion.md) | ✅ aceptado |
| D20 | `docs/index.html` + `assets/fanzine.css` | `wp/d20-pack-ensamblado` | `0796ebf` | [WP-D20-pack-ensamblado.md](plan/REPORTES/WP-D20-pack-ensamblado.md) | ✅ aceptado |

**Merge a `main`:** orquestador, commits `c486c1e` (D00), fast-forward/merge sucesivos
hasta `8631a1b` (aceptación D20). Workers **no** hicieron push (DA-5).

---

## III · Línea temporal

**Sello:** Verificado · **Fuente:** `git log --format="%ci %s" -- TEST-SWARM/` en
`SCRIPT_SDK` @ `8631a1b`.

| fase | inicio (UTC+2) | fin (UTC+2) | duración aprox. | hito |
| ---- | -------------- | ----------- | --------------- | ---- |
| Preparación | 20:01 | 20:49 | ~48 min | rama `draft` @ `e18ff9c`; plan y roles en sitio |
| Ola D0 (paralelo) | 20:55 | 21:18 | ~23 min | D01 guion + D00 gates; D00 devuelto y corregido |
| Ola D1 lote 1 (paralelo) | 21:20 | 21:25 | ~5 min | D10, D11, D12 en worktrees desde `43a3906` |
| Ola D1 D13 | 21:31 | 21:39 | ~8 min | Nota 3 tras aceptación D11 |
| Ola D2 D20 | 21:42 | 21:48 | ~6 min | pack ensamblado en `docs/` |
| **Ensayo productivo** | **20:55** | **21:48** | **~53 min** | siete WPs aceptados + sitio navegable |

La ventana total backstage → pack listo fue **menos de una hora** de trabajo
agente-orquestador en un solo día; el cuello no fue el volumen de texto sino la
**coordinación** (devolución D00, merges, asignación de lotes).

---

## IV · Devoluciones

### D00 · Gates del ensayo — devuelto-corregido

**Causa:** gate (c) escaneaba `plan/REPORTES/`; la evidencia literal del propio
reporte (salida de `--violacion c`) se interpretaba como ruta bajo sello Verificado
inexistente.

**Corrección:** commit `9ec2cd3` — excluir `plan/REPORTES/` del escaneo gate (c) en
modo normal, análogo a la exclusión de `plan/` en gate (e). Re-ejecutado VERDE.

**Lección:** la meta del ensayo (reportes con salidas de gate) y el pack (Notas, acta,
sitio) comparten árbol pero **no** el mismo ámbito de validación. Las exclusiones deben
estar en el script **y** documentadas en PRACTICAS.

---

## V · Fricciones del protocolo (sin devolución formal)

| # | dónde | fricción | mitigación en ensayo | cambio recomendado antes del estreno real |
| - | ----- | -------- | -------------------- | ----------------------------------------- |
| 1 | D00 | `grep` dentro de `while read` cuelga en Git Bash Windows | script usa `[[ =~ ]]` y `tr -d '\r'` | mantener; añadir nota en PRACTICAS §gates |
| 2 | D00 | gate (e) falla si escanea `plan/` (describe patrones prohibidos) | exclusión `plan/` en script | documentar exclusiones meta en PRACTICAS |
| 3 | D10 | gate (c) confunde URL con esquema en línea Verificado con pseudo-ruta | citar dominios sin esquema en líneas escaneadas | **arreglar parser** o convención explícita en PRACTICAS §sellos |
| 4 | D01 | gates no ejecutados (paralelo con D00) | aceptado; D00 cerró antes de merges D1 | exigir `validar-ensayo.sh` en todo WP salvo D00 mismo |
| 5 | D10–D12 | tres workers desde el mismo `main` sin Notas aún mergeadas | D11 remite a D10 por abreviatura; merges ordenados por orquestador | en swarm real: **secuencia guion → Nota 1 → 2 → 3** o brief que prohíba dependencias cruzadas |
| 6 | D12/D20 | rutas `emmanuel-sdk/*` en acta con `<pendiente>` | declarado, no bloqueó | verificar en disco antes de D22 o bajar sello en HTML |
| 7 | D20 | `ACTA-V2.md` cita `zeus-sdk/packages/volumes/volumes.json` (fantasma) | HTML usa `zeus-sdk/VOLUMES/volumes.json` (existe) | **corregir ACTA-V2** en WP menor pre-D22 |
| 8 | D20 | Notas en HTML = resumen; markdown en `NOTAS/` = fuente completa | aceptado por CA | declarar en VISION que el sitio es maqueta, no duplicado literal |
| 9 | roles | brief D13 nombra reporte `WP-D13-la-ejecucion.md`; entregado `WP-D13-ejecucion.md` | orquestador aceptó el slug real | alinear PLANTILLA/brief con convención `<id>-<slug>` |
| 10 | pack | slot 02 Logos sin `plan/`; GRAVEDAD/GRAVITÓN `<pendiente>` | visible en Notas y en `index.html` | no es fallo de protocolo; es deuda de contenido declarada |

---

## VI · Qué funcionó

1. **Gates a–e** con modo `--violacion` demostraron rojo sintético y verde sobre el
   pack real; el ensayo tiene suelo ejecutable.
2. **Worktree por WP** evitó pisarse entre chats paralelos (`../SCRIPT_SDK-wp-d00` …
   `wp-d20`); patrón reproducible para el swarm real.
3. **Reportes desde PLANTILLA** con auto-revisión PRACTICAS §4 dieron evidencia
   literal al orquestador sin tocar BACKLOG desde workers.
4. **Decisiones cerradas (DA-1…DA-5)** desbloquearon D10–D20 sin reabrir formato,
   analogía M, acta como sección, conservación del ensayo y credencial de push.
5. **Orquestador único** para ✅ y merge mantuvo `main` lineal y backlog honesto.
6. **DE-0** se respetó: cero diffs fuera de `TEST-SWARM/` en todos los merges
   verificados.

---

## VII · Huecos de roles observados

| rol | observación |
| --- | ----------- |
| **Worker** | Ciclo claro (implementar → gates → reporte → parar). Riesgo: arreglar hallazgos fuera de alcance; en ensayo se respetó en su mayoría. |
| **Orquestador** | Asignación por lotes (`chore` commits) funcionó. Falta runbook escrito de **orden de merge** cuando hay paralelismo con dependencias blandas (Nota 1 ↔ 2). |
| **Revisión** | Una devolución (D00) con corrección documentada; resto aceptación en primera pasada. |
| **Custodio** | Fuera del ensayo: push, Pages, dry-run D22. DA-5 confirmado: 403 ajeno al plan. |

---

## VIII · Veredicto — qué cambiar antes del estreno real

**Sello:** Doctrina · **Fuente:** síntesis de §IV–§VII; decisión de plan, no auditoría
externa.

### Obligatorio (bloquea confianza en el primer swarm real)

1. **Documentar exclusiones de gates** (`plan/`, `plan/REPORTES/`, acta v1 histórica)
   en `plan/PRACTICAS.md` §gates — hoy viven solo en comentarios del script y en
   reportes.
2. **Corregir o blindar gate (c)** frente a URLs con esquema en líneas
   Verificado (parser o convención obligatoria).
3. **Corregir ruta volumes** en `ACTA-V2.md` (`VOLUMES/volumes.json`, no
   `packages/volumes/`).
4. **Ejecutar WP-D22 en seco** (rama `main-sitio` huérfana, verificar árbol, borrar
   sin tocar `main`/`draft`) antes de que el custodio haga push.

### Recomendado (reduce fricción, no bloquea)

5. Gates obligatorios en **todo** WP tras D00, incluso documentales en paralelo.
6. Brief alineado con nombre de reporte (`WP-<id>-<slug>.md` sin ambigüedad).
7. Tras cada Nota aceptada, **opcional** actualizar `<pendiente>` en `GUION.md` en
   WP de mantenimiento — hoy el guion quedó con tramos pendientes ya resueltos en
   Notas.
8. Verificar rutas `emmanuel-sdk/*` citadas en acta o marcar Pendiente visible en
   `index.html` (ya parcialmente hecho).

### No cambiar (el ensayo lo validó)

- Autocontención `TEST-SWARM/` (gate a).
- Munición = obra; puntos de scrum (gates e, DE-5/DE-6).
- Plantilla fanzine mono (DE-8).
- Workers sin push; merge solo orquestador.
- Conservar ensayo completo en `main` huérfana junto a `docs/` (DA-4).

---

## IX · Estado al cierre de este acta

| ítem | estado |
| ---- | ------ |
| Pack navegable `TEST-SWARM/docs/` | ✅ |
| Gates `validar-ensayo.sh` | ✅ VERDE sobre árbol @ D20 |
| WPs D00–D01, D10–D13, D20 | ✅ aceptados |
| WP-D21 (este acta) | entregado en rama `wp/d21-acta-ensayo` |
| WP-D22 (estreno público) | ⬜ pendiente — siguiente paso del plan |

**Cierre:** el ensayo general cumplió su mandato (DE-0): demostrar que el protocolo
escala de gates a pack publicable **sin contaminar** el backstage. El estreno real
empieza cuando D22 deje probado el mecanismo de `main` huérfana y el custodio empuje.

---

*Acta redactada en WP-D21 · 2026-07-16 · rama `wp/d21-acta-ensayo`.*
