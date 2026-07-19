# WP-I21 · skill-swarm-orquestacion — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i21 (holón 07) |
| fecha | 2026-07-19 |
| rama (skills-library) | `wp/i21-skill-swarm-orquestacion` @ `c5d44e3` |
| checkout skill | `C:\Users\aleph\S_SDK-skills-library-wp-i21` (worktree; main checkout ocupado por I23) |
| base skills-library | `main` @ `88217dd` (scaffold I20) |
| rama (reporte SCRIPT_SDK) | `wp/i21-skill-swarm-orquestacion` |
| worktree reporte | `C:\Users\aleph\SCRIPT_SDK-wp-i21` |
| base SCRIPT_SDK | `main` @ `48004ea` |
| eje(s) CA | I (skill = extracción de protocolo con cableado vía montar-plan) |
| estado propuesto | listo para revisión |

## Qué se hizo

Skill `swarm-orquestacion` en el repo hermano: protocolo canónico abstraído
(roles ORQUESTADOR/WORKER/REVISION/CORRECCION/BRIEF + ciclo + plantilla de
reporte) con los **cinco ejes** del RE-PLAN cosidos como CA por tipo de WP
(`reference/ejes-ca.md`). Marco-agnóstico (parametriza `MUNDO_RAIZ`,
`PLAN_DIR`, `ALCANCE_DIFF`, `WORKTREE_BASE`). Scripts: `montar-plan.sh`
(CA de montaje) y `comprobar-ceguera.sh`. Cero datos de mundo / cero
histórico de vigilancia. No se tocaron I22/I23, `_plantilla`, `instancias/`,
ni BACKLOG. Push skills-library OK (DE-I7); sin push del raíz SCRIPT_SDK.

Desviación operativa: el checkout `S_SDK-skills-library` estaba en rama
I23; se usó worktree hermano `S_SDK-skills-library-wp-i21` en la rama I21
para no pisar paralelo.

## Archivos tocados

### Repo `S_SDK-skills-library` (worktree wp-i21)

- `skills/swarm-orquestacion/SKILL.md` — frontmatter + método
- `skills/swarm-orquestacion/README.md` — activación
- `skills/swarm-orquestacion/reference/roles/*` — seis prompts de rol
- `skills/swarm-orquestacion/reference/ejes-ca.md` — ejes I–V → CA
- `skills/swarm-orquestacion/reference/ciclo.md` — prep→merge + anti-patrones
- `skills/swarm-orquestacion/reference/plantilla-reporte.md` — plantilla
- `skills/swarm-orquestacion/examples/` — esqueleto + simulación documentada
- `skills/swarm-orquestacion/scripts/montar-plan.sh` — monta `plan/`
- `skills/swarm-orquestacion/scripts/comprobar-ceguera.sh` — ceguera = 0

### Repo SCRIPT_SDK (solo reporte)

- `plan/REPORTES/WP-I21-skill-swarm-orquestacion.md` — este reporte

## Evidencia

### CA-1 · montaje de plan/ solo con el skill

```text
$ TMP=$(mktemp -d)
$ bash skills/swarm-orquestacion/scripts/montar-plan.sh "$TMP"
plan montado en: …/plan
roles: BRIEF.md ciclo.md CORRECCION.md ejes-ca.md ORQUESTADOR.md
       README.md REVISION.md WORKER.md

$ find "$TMP/plan" -type f | sort
…/plan/BACKLOG.md
…/plan/DECISIONES.md
…/plan/PRACTICAS.md
…/plan/REPORTES/PLANTILLA.md
…/plan/roles/BRIEF.md
…/plan/roles/ciclo.md
…/plan/roles/CORRECCION.md
…/plan/roles/ejes-ca.md
…/plan/roles/ORQUESTADOR.md
…/plan/roles/README.md
…/plan/roles/REVISION.md
…/plan/roles/WORKER.md
…/plan/VISION.md
```

Simulación documentada en
`skills/swarm-orquestacion/examples/simulacion-montaje.md`. Un agente
fresco puede abrir `plan/roles/ORQUESTADOR.md` + BRIEF + WORKER sin consultar
fuentes de mundos reales.

### CA-2 · ceguera (PRACTICAS delta 5) = 0

```text
$ bash skills/swarm-orquestacion/scripts/comprobar-ceguera.sh
ceguera: 0
raiz: …/skills/swarm-orquestacion
EXIT=0

$ rg -n -i -e 'zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura' \
    skills/swarm-orquestacion/
→ (0 matches)
```

### CA-3 · formato skill + npm pack

```text
skills/swarm-orquestacion/SKILL.md frontmatter:
---
name: swarm-orquestacion
description: >-
  Protocolo de swarm marco-agnóstico: …
---
Árbol: SKILL.md, README.md, reference/{roles,ejes-ca,ciclo,plantilla},
       examples/, scripts/

$ npm pack
npm notice package: @alephscript/skills-scriptorium@0.1.0
npm notice filename: alephscript-skills-scriptorium-0.1.0.tgz
npm notice total files: 23
(incluye skills/swarm-orquestacion/SKILL.md y recursos)

$ npm install <tarball> en dir temporal → EXIT=0
node_modules/@alephscript/skills-scriptorium/skills/swarm-orquestacion/SKILL.md
→ presente
```

### Push skills-library (DE-I7)

```text
$ git push -u origin wp/i21-skill-swarm-orquestacion
→ origin/wp/i21-skill-swarm-orquestacion @ c5d44e3
https://github.com/alephscriptorium-eng/S_SDK-skills-library
```

Sin push del raíz SCRIPT_SDK.

## Auto-revisión (PRACTICAS §4 + deltas holón 07)

- [x] Diff solo en alcance autorizado (delta 1: skills-library
      `skills/swarm-orquestacion/` + reporte en `plan/REPORTES/`): sí
- [x] Cero árboles copiados de mundos reales (roles abstraídos/reescritos;
      fuentes solo lectura): sí
- [x] Sellos con fuente; rutas citadas existentes: sí
- [x] Sin fluff ni datos de vigilancia/histórico: sí
- [x] Cero moneda: sí
- [x] Skills marco-agnósticos (delta 5): ceguera 0 en cara del skill
- [x] Push solo skills-library (DE-I7 / delta 6); raíz sin push: sí
- [x] No I22/I23, no I24, no BACKLOG, no `_plantilla`: sí
- [x] Gates CA ejecutados de verdad: sí (arriba)
- [x] Commits convencionales: `feat(skills): …` / `docs(plan): …`
- [x] Diff solo del alcance I21: sí

## Hallazgos fuera de alcance

- Checkout único de `S_SDK-skills-library` no escala a 3 WPs paralelos sin
  worktrees; conviene documentar en PRACTICAS/roles del holón 07 el patrón
  `S_SDK-skills-library-wp-<id>` (hallazgo de ops, no bloquea I21).
- Default-branch remota skills-library aún puede ser la rama wp de I20
  (hallazgo I20 / ops): no tocado aquí.

## Dudas / bloqueos

Ninguno. CA en verde; skill empujado en rama propia.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
