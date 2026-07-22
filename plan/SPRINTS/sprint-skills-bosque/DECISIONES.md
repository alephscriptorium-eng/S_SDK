# DECISIONES — sprint-skills-bosque

Espejo operativo del contrato convivencia multi-orq v1.1 (DE-I22 en raíz;
lectura; escritura raíz = city-orq/custodio).

### DC-SB-apertura · 2026-07-22 · **cerrada** (B-1 merged · aviso R14)

**Tema:** abrir sprint skills-bosque tras reconciliación R12-conv-2.

**Decisión:** montar `plan/SPRINTS/sprint-skills-bosque/` (patrón
vida-1/ciudad-real; estructura sí, contenido city no). Parámetros:
`MUNDO_RAIZ` = checkout hermano skills-library; `ALCANCE_DIFF` con veto
zeus/GL/pins/DECISIONES-raíz; REPORTES bajo el sprint (§2ter). Briefs B-1
(S01/S02/S05) despachados tras R13 PASS; merges en hermano tip `af1fd5a`.

**Norte CA:** skills-scriptorium como cara pública de método; convivencia
multi-orq documentada en swarm vNext (S01); ceguera 0 en publish.

**Cierre B-1:** S01/S02/S05 ✅ · ∩=∅ · ceguera 0 · issue #11 C05→S_SDK#31.
Aviso R14-bosque emitido. Vetos vigentes: B-2/B-3 · peercard pre-C05.

### DC-SB-higiene · 2026-07-22 · **cerrada** (evidencia en reporte montaje)

**Tema:** §1bis/§8 precondición despacho.

**Decisión:** poda autorizada de worktree `fervent-*`, ramas
`claude/fervent-*` + `claude/unruffled-*` (0 commits sobre main = merged)
y ref fantasma `remotes/origin-local/main`. main = origin/main = `cf058df`.

### DC-SB-proyeccion · 2026-07-22 · **abierta** (opt-in PO · paso 5 gate)

**Tema:** proyección gruesa a issues del hermano.

**Decisión:** umbrella «bosque de skills» + 1 issue por ola (B-1/B-2/B-3),
todas OPEN. Sync-map bajo este sprint post-apply (regla 17). Gate ceguera
con `CEGUERA_PATTERN` por env antes de publicar cuerpos.

### DC-SB-B3-replan-R15 · 2026-07-22 · **abierta** (GO PO)

**Tema:** replan R15 — B-3 desbloqueado sin esperar PRUEBA-DE-DOS previa.

**Decisión:**

1. **S06** mapa/sync-map ritual: **GO** (doc en `docs/` o raíz hermano;
   veto `skills/` para no pisar S03). Puede ir ∥ S03.
2. **S07** publish `0.5.0`: **GO condicionado** a S03 ✅ + S06 ✅ + S05b ✅.
   Último acto del carril (regla 16). El `0.5.0` debe incluir
   `estacion-viva`. **No despachar** hasta las tres ✅.
3. **S04** SALE del backlog bosque → **city-orq / zeus** (contrato §1).
   Puntero: [S_SDK#22](https://github.com/alephscriptorium-eng/S_SDK/issues/22)
   (epic embajador) · insumo WP-T1 en carril city (R15). Bosque no toca
   obra zeus.
4. **S05b** merge a `main` hermano = prerequisito C8 vivo del catálogo
   (encoding). Tip merge post-push: ver BACKLOG / aviso.
