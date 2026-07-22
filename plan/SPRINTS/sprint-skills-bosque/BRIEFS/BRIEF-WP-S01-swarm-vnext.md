# BRIEF · WP-S01 · swarm-orquestacion vNext · 🔶 (sin despacho)

> Brief B-1. **NO despachar worker** hasta gate **R13-bosque** PASS.
> Caso fundante anotado aquí y en BACKLOG; obra de edición del skill =
> post-R13.

```text
(rol) skills/swarm-orquestacion/reference/roles/WORKER.md
  (pegar también este brief en chat worker fresco — un WP = un chat)
  — NO DESPACHAR hasta R13-bosque PASS

WP: WP-S01 · swarm-orquestacion vNext (§convivencia multi-orquestador)
Rama: wp/sb-s01-swarm-vnext
Worktree: C:\Users\aleph\S_SDK-skills-library\.worktrees\sb-s01-swarm-vnext
Reporte: plan/SPRINTS/sprint-skills-bosque/REPORTES/WP-S01-swarm-vnext.md
Issue: ola B-1 (proyección gruesa)

MUNDO_RAIZ = C:\Users\aleph\S_SDK-skills-library
PLAN_DIR   = plan/SPRINTS/sprint-skills-bosque/   (gobierno en checkout S_SDK)
Proyección issues = opt-in PO · sync-map bajo este sprint

Dolor real: dos orquestadores (bosque ∥ city) sobre el mismo main de
gobierno sin partición explícita → riesgo de commits cruzados y despachos
sin gate. El intercambio 2026-07-22 (eval → enmiendas contrato v1.1 →
reconciliación vigía) es el **caso fundante** que debe entrar al método.

CA (norte):
  «el skill swarm documenta convivencia multi-orquestador: partición de
   obra, partición de gobierno, V2 por carril, vigía único Rn-*, higiene
   pre-despacho, e2e por vías permitidas — sin nombrar mundos reales»

CA formales: ejes I·III + ceguera (cara pública del paquete).

ALCANCE_DIFF (estricto):
  - skills/swarm-orquestacion/** (método vNext + reference)
  - CHANGELOG / semver paquete si el contrato de método amplia
  - plan/SPRINTS/sprint-skills-bosque/REPORTES/** (reporte del WP)
  VETO: zeus/** · games-library/** · pins submodules ·
        plan/DECISIONES.md raíz · BACKLOGs otros sprints ·
        plan/SPRINTS/sprint-ciudad-real/**

Deps: contrato v1.1 en git · higiene hermano ✅ · R13-bosque PASS

Caso fundante (obligatorio en la sección método — NO implementar aún):
  Convivencia multi-orquestador 2026-07-22:
  eval R12-bosque → 6 enmiendas v1.1 (§1bis territorio hermano, §2bis
  montaje, §2ter REPORTES bajo sprint, §2quater consumo raíz, §5c
  post-C05, §8 higiene pre-despacho) → reconciliación aceptada →
  camino PASS. Citar el contrato como lección, no copiar datos de instancia.

Lecturas (cuando R13):
  1. skills/swarm-orquestacion/SKILL.md + reference/reglas-metodo-v05.md
  2. BACKLOG + DC-SB-* de este sprint
  3. Contrato convivencia (lectura; no editar raíz)

Notas: no edites BACKLOG. Ceguera 0 en árbol + git log -p.
Empieza solo tras R13: worktree + PRACTICAS del hermano + este brief.
```
