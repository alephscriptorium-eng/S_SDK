# Brief — WP-I29 · Skills v0.3.0 + reglas 13/14 (ceguera de activación)

_Orquestador holón 07 · 2026-07-19 · ola I2.5 residual (∥ I51)_
_GO custodio: sí — encolar bump v0.3 con reglas 13–14 (recomendado)._
_SCRIPT_SDK `main` tip al commit de este gobierno. Skills-library `main`
@ `6180f9b` (`@alephscript/skills-scriptorium@0.2.0`)._
_NO implementar I51 / I6 / I61 / I62. Solo skill bump v0.3 + publish._

---

## Fuentes (no inventar)

| Qué | Dónde |
|---|---|
| WP ya registrado (era ⬜ candidato) | `plan/BACKLOG.md` · WP-I29 (ola I2.5) |
| Regla 13 / 14 candidatas | `plan/RETRO-2026-07-19-metodo.md` §Addendum I60 |
| Eco vigía | `plan/REPORTES/VIGIA-ESTADO.md` §«Reglas candidatas v0.3» |
| Checklist v0.2 (12 reglas hoy) | skills-library `skills/swarm-orquestacion/reference/reglas-metodo-v02.md` |
| Procedimiento bump previo | WP-I27 · `BRIEF-WP-I27-skills-v02-pages-higiene.md` + reporte |

**Regla 13 (cita RETRO §Addendum I60):** la activación la ejecuta un agente
**fresco** que solo conoce el skill — jamás uno con contexto del marco.

**Regla 14 (cita RETRO §Addendum I60):** la ceguera se verifica sobre el
historial alcanzable (`git log -p`), no solo el árbol; fuga en commit
intermedio = **squash antes del merge**.

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I29 · Skill package bump v0.3.0 — reglas 13/14
Checkout hermano (paquete): C:\Users\aleph\S_SDK-skills-library
  Rama trabajo skill: wp/i29-skills-v03-reglas-13-14
  Base: main @ 6180f9b
  Paquete: @alephscript/skills-scriptorium (hoy 0.2.0 → 0.3.0)
Rama reporte / obra raíz (SCRIPT_SDK): wp/i29-skills-v03-reglas-13-14
Worktree raíz: ../SCRIPT_SDK-wp-i29
  (solo reporte + higiene mínima si hace falta; NO tocar HOLONES/)
Reporte: plan/REPORTES/WP-I29-skills-v03-reglas-13-14.md
  (vive en SCRIPT_SDK)

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/RETRO-2026-07-19-metodo.md §Addendum I60 (reglas 13/14 + práctica
  grep|head falso PASS)
- plan/REPORTES/VIGIA-ESTADO.md (§Reglas candidatas v0.3; F8 remediado)
- plan/BACKLOG.md WP-I29 (CA literal) + WP-I27 (procedimiento bump)
- plan/DECISIONES.md DE-I7 (push library), DE-I12 (publish Verdaccio /
  NPM_USERNAME+NPM_PASSWORD)
- skills-library:
    skills/swarm-orquestacion/reference/reglas-metodo-v02.md (12 reglas)
    skills/swarm-orquestacion/reference/ejes-ca.md
    skills/swarm-orquestacion/SKILL.md
    skills/swarm-orquestacion/scripts/comprobar-ceguera.sh

Notas del orquestador — alcance obligatorio:
  A) skills-library — bump v0.3.0:
     - Coser reglas 13 y 14 al skill swarm-orquestacion.
       Preferible: extender reglas-metodo-v02.md → v0.3 (o fichero
       sucesor reglas-metodo-v03.md) + actualizar SKILL.md / ciclo.md /
       índices que digan «doce reglas» → «catorce» (o «12+2»).
     - Regla 13: activación de mundo = agente fresco (solo skill).
     - Regla 14: CA ceguera = historial reachable (`git log -p`), no solo
       árbol; squash ante fuga intermedia; práctica: medir exit de grep
       (`grep -c` / `grep -q`), nunca `grep | head && echo OK`.
     - Reflejar 13/14 como CA obligatorio en reference/ejes-ca.md
       (donde encaje: activación / ceguera / Eje IV).
     - Bump package.json 0.2.0 → 0.3.0 + CHANGELOG (mismo estilo I27).
     - Publish 0.3.0 al registry (DE-I12). Secrets:
       NPM_USERNAME / NPM_PASSWORD del entorno custodio — NO inventar.
       Si falta auth escritura → «esperando: tick ops (.npmrc)» + resto
       del WP hecho (semver/notes/reglas cosidas).
  B) Ceguera del skill (CA duro):
     - bash skills/swarm-orquestacion/scripts/comprobar-ceguera.sh → 0
     - Además (regla 14): evidencia `git log -p` (o equivalente) sobre
       el historial reachable del skill/paquete sin tokens de marco.
  C) SCRIPT_SDK — solo reporte en plan/REPORTES/ (rama WP). NO editar
     BACKLOG (ya 🔶). NO mutar HOLONES/, OASIS, zeus, emmanuel.

- CA (evidencia literal en reporte):
  1) npm view @alephscript/skills-scriptorium@0.3.0 (canal real
     https://npm.scriptorium.escrivivir.co) o gate «esperando: tick ops»
     + semver/CHANGELOG/reglas listos en rama.
  2) Reglas 13 y 14 presentes en reference/ (v0.2 extendido o v0.3) y
     citadas desde SKILL.md / ejes-ca.md.
  3) Ceguera del skill = 0 (script + historial reachable).
  4) Grep mundos reales / rutas host en cara pública del paquete = 0.

- Cadencia: merge al ✅. Tú NO merges a main del raíz ni empujas raíz.
  Push de rama WP en skills-library OK (DE-I7) hasta merge orquestador.
- NO I51 (vigía zeus — otro agente; no solapáis). NO I6/I61/I62.
- NO editar BACKLOG / HANDOFF / VIGIA-ESTADO (gobierno = orquestador).
- NO inventar credenciales npm. NO force-push.
- NO mutar HOLONES/, OASIS, zeus, E_SDK.
- Commits:
  - skills-library: feat(skills): swarm-orquestacion v0.3.0 reglas 13-14 …
  - SCRIPT_SDK: docs(plan): reporte WP-I29 …

Empieza: provisiona worktree hermano (+ raíz reporte), lee RETRO
§Addendum I60 + reglas-metodo-v02, implementa A–B, evidencia CA, reporta.
NO implementes I51.
```

## Instrucción al padre

**Sí — encolado con el GO del custodio.** Lanzar **1 worker I29 ya**, en
**paralelo a I51** (no hace falta esperar el acta I51): I51 = lectura
submodules zeus; I29 = skills-library. Entregable = reporte
`WP-I29-skills-v03-reglas-13-14.md` + publish/`npm view` 0.3.0 + ceguera 0.
Tras PASS → orquestador marca I29 ✅.
