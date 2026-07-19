# Brief — WP-I61 · Activación del skill en aleph-scriptorium (05–06)

_Orquestador holón 07 · 2026-07-19 · ola I6 (GO custodio)_
_`@alephscript/skills-scriptorium@0.3.0` ya publicado (WP-I29 ✅)._
_I60 ✅ (emmanuel @ 0.2.0; Eje IV validado). I62 NO se impone (Eje V)._
_Canal: custodio media hacia aleph (PRACTICAS delta 1). Ceguera → zeus intacta._

---

## Fuentes (orquestador; no pasar marco al worker)

| Qué | Dónde |
|---|---|
| WP | `plan/BACKLOG.md` · WP-I61 |
| Regla 13 / 14 | skill `swarm-orquestacion` @ 0.3.0 + RETRO §Addendum I60 |
| Precedente (cerrado) | `BRIEF-WP-I60-activacion-emmanuel.md` (CERRADO ✅) |
| PRACTICAS delta 1 | solo `plan/roles/` del mundo ajeno; custodio media |

**Regla 13:** ejecutor **fresco** — solo conoce el skill y el brief de abajo.
No heredar contexto del marco ni de I60/I29.

**Regla 14:** ceguera = árbol **y** `git log -p` reachable; fuga intermedia =
squash antes de merge (nunca fix-encima).

---

```text
(rol) — prompts del paquete @alephscript/skills-scriptorium@0.3.0
        › skills/swarm-orquestacion/reference/roles/WORKER.md
        (NO uses roles copiados de ningún otro mundo)

WP: WP-I61 · Activación skill en aleph-scriptorium
Checkout: C:\Users\aleph\OASIS\aleph-scriptorium
  ALCANCE_DIFF = plan/   (solo plan/; cero submodules)
  Rama: wp/i61-activacion-skill
  (worktree opcional: ../aleph-wp-i61 desde ese repo)
Reporte: plan/REPORTES/WP-I61-activacion-skill.md
  (vive EN aleph-scriptorium, no en otro repo)

Objetivo:
  plan/roles/ de este mundo es hoy una copia derivada del protocolo genérico
  (README + ORQUESTADOR/WORKER/REVISION/CORRECCION/BRIEF). Ese protocolo ya
  vive versionado en el paquete. Desduplicar: referencia versionada +
  calibración local. Conservar PARTES/ y RECURSOS/ intactos. No interrumpir
  WPs vivos del backlog de este mundo (p.ej. S14).

Paquete canónico (fijado; nunca latest):
  @alephscript/skills-scriptorium@0.3.0
  registry: https://npm.scriptorium.escrivivir.co
  skill: skills/swarm-orquestacion

Lecturas (solo estas; no inventar otras rutas de mundos):
  1) Este plan/: PRACTICAS.md (entero), README.md, roles/ actual
  2) Paquete @0.3.0 (npm view / install temporal, o checkout hermano del
     skills-library SOLO lectura si el custodio lo apunta):
     skills/swarm-orquestacion/ (SKILL.md + reference/roles/ + reglas-metodo-v03)
  3) Calibración local a CONSERVAR visible sin abrir el paquete:
     - PRACTICAS §2 submodules (multi-repo; bump de puntero = orquestador)
     - PRACTICAS §1.2 asimetría (no tocar ni nombrar zeus-sdk por ruta)
     - PARTES/ y RECURSOS/ (siguen en plan/; no son el protocolo genérico)
     - Convivencia ARCHIVO/sala/dossiers (README del plan)

Trabajo:
  A) Análisis dedup: qué de plan/roles/ es copia genérica vs delta local.
  B) Sustituir plan/roles/ por un README.md que:
     - Cite @alephscript/skills-scriptorium@0.3.0 › skills/swarm-orquestacion
       (versión fijada) + línea npm view/install del registry real.
     - Conserve EXPLÍCITA la calibración local (submodules, asimetría,
       PARTES/RECURSOS, convivencia) como delta — sin re-copiar prompts.
     - Elimine los 5 prompts duplicados (ORQUESTADOR/WORKER/REVISION/
       CORRECCION/BRIEF) del árbol (git rm).
  C) Coser plan/README.md (y PRACTICAS si hace falta) para que
     «autocontenido» = vía referencia versionada resoluble (C8), no copia.

CA (evidencia literal en el reporte):
  CA1 · dedup: prompts genéricos definidos UNA vez (ref al paquete), no
       copiados. Pegar grep + salida.
  CA2 · C8: npm view @alephscript/skills-scriptorium@0.3.0
       --registry=https://npm.scriptorium.escrivivir.co
       resuelve. Pegar salida literal.
  CA3 · calibración local visible (submodules §2, asimetría, PARTES/,
       RECURSOS/) sin abrir el paquete.
  CA4 · alcance: diff SOLO plan/ de este repo; cero submodules; cero
       otros mundos tocados.
  CA5 · ceguera (regla 14): git log -p (reachable) sin filtrar el marco
       ajeno en claro en lo NUEVO que escribas; medir con grep -c / grep -q
       (no grep|head && echo OK). Squash si hubo fuga intermedia.
  CA6 · no interrumpir cola viva: no editar BACKLOG de este mundo ni
       cerrar/abrir WPs ajenos a I61.

Git:
  - Commits solo en este repo, rama wp/i61-activacion-skill.
  - Convencional: docs(plan): …
  - NO push a origin salvo que el brief del custodio lo autorice; el
    orquestador de este mundo / custodio media el canal.
  - NO editar BACKLOG/DECISIONES de ningún otro repo.

NO:
  - NO tocar zeus-sdk ni ningún árbol bajo HOLONES/.
  - NO tocar emmanuel-sdk / E_SDK.
  - NO bump a latest; fijar 0.3.0.
  - NO implementar I62 ni nada fuera de plan/roles + cosido README/PRACTICAS.

Empieza: sitúate en el checkout de aleph-scriptorium, lee PRACTICAS + roles
actuales + skill @0.3.0, haz A–C, evidencia CA1–CA6, reporta. Agente fresco
(regla 13): si traes contexto de otro marco, PARA y pide reasignación.
```

## Instrucción al padre (orquestador 07)

1. Lanzar **un worker fresco** (regla 13) solo con el bloque `text` de arriba.
2. No lanzar worker I60 (ya ✅) ni worker I62 (Eje V: ofrecer, no imponer).
3. Tras reporte: revisar CA; aceptar en BACKLOG de SCRIPT_SDK; no editar
   `plan/roles/` de zeus.
