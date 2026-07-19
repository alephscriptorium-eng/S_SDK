# RETRO del método — olas I0–I2 (intervención de estabilización, 2026-07-19)

Insumo canónico para **WP-I27** (versionar el skill `swarm-orquestacion` a
v0.2). Fuentes: log íntegro del orquestador (`TEMP_LAS_SWARM_LOG.md`,
backstage), digest y code-review de facto de la intervención
(`plan/REPORTES/INTERVENCION-2026-07-19-estabilizacion.md`), y la propia
doctrina previa (`VIGILANCIA/ESTACION.md`, RE-PLAN). Estamos migrando el
método a skill: estas reglas se cosen AL SKILL, no solo a este plan.

## Veredicto de base

El núcleo volvió a funcionar: 13 WPs (I0–I2) sin conflicto real, ✅ siempre
antes del merge, cero push indebido del raíz, workers honestos (declaran
`⏳` y hallazgos propios). Las 12 reglas siguientes son de **costuras**,
confirmando la tesis del RE-PLAN: el aislamiento funciona; los bordes no.

## Las 12 reglas para el skill v0.2

1. **El gobierno va a git antes que la obra.** El orquestador commitea
   `plan/` a main ANTES de abrir el primer brief de una ola. Evidencia del
   fallo: 3 WPs mergeados (18:39–18:47) con BACKLOG/DECISIONES untracked;
   el commit `092f5e5`→`092fe5f` lo confiesa («quedaban untracked»).
2. **Cada cambio de estado del BACKLOG (🔶/✅/brief) = commit atómico
   inmediato.** Prohibido el patrón «✅ en working copy, ya commitearé».
3. **Todo `git stash` de un agente se limpia (pop/drop) en el mismo WP que
   lo creó, o se registra como deuda explícita.** Evidencia: `stash@{0}
   wip-pre-merge-i01` sobrevivió 3 olas sin que nadie lo mencionara.
4. **El aislamiento 1 WP = 1 worktree aplica a TODO repo tocado, incluidos
   hermanos.** Evidencia: I22 e I23 compartieron el checkout de
   `S_SDK-skills-library` (untracked de uno visible para el otro); I21
   improvisó su worktree. El orquestador provisiona worktrees en el repo
   hermano ANTES de lanzar el lote.
5. **WPs paralelos que pueden crear el mismo fichero desde cero: el brief
   asigna quién lo crea y quién solo añade.** Evidencia: `.gitignore`
   nació 2 veces (I01∥I02); la unión salió bien por revisión, no por diseño.
6. **Cadencia de merge única y declarada por lote:** «merge cada ✅ al
   llegar» o «espera el lote entero» — se elige en el brief de ola, no
   ad hoc (I0 mergeó uno a uno; I2 esperó el lote: inconsistente).
7. **Integrador (merge) y planificador (siguiente brief) son pasos
   distintos**; si se fusionan por economía, commits separados y el
   protocolo lo autoriza explícitamente.
8. **Canal formal para inyectar ops (secrets, correcciones) a un worker
   vivo:** fichero de tick en `plan/` (trazado en git), no interrupción
   manual del chat. Evidencia: nota de secrets a I26 improvisada.
9. **La cadena de evidencia se audita sin releer transcripts:** el reporte
   de revisión lleva comando+salida literal en `plan/REPORTES/` y el commit
   de aceptación lo referencia. (Ya se hacía a medias; hacerlo regla.)
10. **Checklist de higiene al cierre de cada ola:** `git stash list` vacío
    · `plan/` sin diff pendiente · ramas `wp/*` mergeadas borradas o
    justificadas · `git status` explicado línea a línea.
11. **Patrón nuevo = decisión formal en DECISIONES.md al adoptarlo** (el
    «checkout hermano» y «briefs en REPORTES/» nacieron en READMEs
    laterales; deben tener rango DE-n).
12. **Las entregas entre mundos viajan SIN rutas de origen.** Evidencia
    (F6, la más grave): el plan público de zeus cita literalmente
    `SCRIPT_SDK\ADDENDA\...` y `SCRIPT_SDK\VIGILANCIA\...` en 8 ficheros —
    el puntero de vuelta que la ley prohíbe, sembrado porque el canal
    temp-review entregó ficheros por ruta y el receptor anotó la
    procedencia. Regla de skill (`vigilancia`/entrega): se entrega
    CONTENIDO (pegado o adjunto neutro); la cita de procedencia permitida
    es «nota externa recibida (temp-review, fecha)» — jamás una ruta.

## Además, para el skill `site-web` / library

- F7 (menor): la cara pública de la skills-library nombra «zeus» en
  comentarios de `publish.yml` — PRACTICAS delta 5 exige neutralidad
  («procedimiento Verdaccio canónico», sin mundo). Scrub en WP-I27.
- Pages de la skills-library en 404: activar Pages + CNAME
  (`skills.s-sdk.escrivivir.co`, DNS ya resuelve — verificado 2026-07-19).

## Addendum I60 (2026-07-19) — insumo para el skill v0.3

Segunda activación real del skill (emmanuel, primer consumidor ajeno). El
contrato funcionó (referencia versionada resoluble en vivo, dedup limpio, la
auto-revisión del worker cazó su propia fuga). Pero surgió **F8, crítico**,
del que salen dos reglas nuevas candidatas a coserse al skill:

- **F8 · la ceguera se rompe en el historial, no solo en el árbol.** La v1
  del acta de emmanuel contenía el nombre del marco en claro; el fix enmascaró
  el árbol pero el commit intermedio (`72c210e`) quedó como ancestro de `main`
  y **pusheado al remoto público** — `git show <sha>:...` seguía sirviendo el
  marco a cualquiera, incluidos los futuros agentes del propio emmanuel, que
  son a quienes la ley protege. **Causa raíz estructural:** el patrón de grep
  del worker (sabía exactamente qué tokens ocultar) delata que la activación
  la ejecutó un agente **que ya conocía el marco**. No fue descuido: fue quién
  ejecutó. Remediado en I60 con rewrite + force-push (repo recién nacido, 0
  forks) → `main` colapsado a `90e5354`, ceguera re-verificada sobre
  `git log -p` = 0.

- **Regla 13 (candidata v0.3) · la activación la ejecuta un agente fresco.**
  Un mundo se activa con el skill mediante un agente que **solo conoce el
  skill**, jamás uno con contexto del marco. Un ejecutor que conoce el marco
  no puede *no* filtrarlo (lo lleva en el prompt); la única garantía es la
  ignorancia del ejecutor. Pareja de la regla 12 (entregas sin rutas): 12
  protege el canal entre mundos; 13 protege el acto de activación.

- **Regla 14 (candidata v0.3) · la ceguera se verifica sobre el historial
  alcanzable, no solo el árbol.** El CA de ceguera corre `git log -p`
  (historia completa reachable), no solo `git grep` del working tree. Fuga en
  commit intermedio = **squash antes del merge** (nunca un fix-encima que deja
  el original en la historia). En remoto público ya empujado: rewrite +
  force-push mientras el repo sea joven.

**Práctica de la regla 14 (dos incidencias el mismo día, distintos
agentes):** los pipelines de evidencia validan el **exit del comando de
medida, no del filtro** — `grep | head && echo OK` evalúa el exit de
`head` (siempre 0) y canta falsos veredictos en ambos sentidos. Forma
canónica: `grep -c` y leer el conteo, o `grep -q`. Le pasó al vigía de 07
(falso PASS en un ls-tree) y al ejecutor del rewrite de emmanuel (falso
«QUEDA FUGA») en el mismo día; ambos lo cazaron re-midiendo — la regla es
no tener que cazarlo.

Menores de I60 (para el orquestador de emmanuel cuando toque, no bloquean):
el acta quedó sin la sección «Revisión del orquestador» rellenada pese al
merge ✅; y `REPORTES/PLANTILLA.md` no se dedupeó (mismo criterio de
referencia versionada que se aplicó a los roles debería aplicarle).
