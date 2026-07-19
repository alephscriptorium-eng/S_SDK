# Brief — WP-I24 · Separación de datos + corrección DS-5

_Orquestador holón 07 · 2026-07-19 · ola I2 (tras merge lote I21∥I22∥I23)_
_Skills-library `main` @ `cb03e49` (pushed). SCRIPT_SDK reportes merged local (sin push raíz)._
_NO implementar I25/I26. Solo separación + fixture + reubicación doctrina._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I24 · Separación de datos + corrección del error fundamental (DS-5)
Checkout hermano (fixture): C:\Users\aleph\S_SDK-skills-library
  Rama skill/fixture: wp/i24-separacion-datos
  Path fixture: instancias/ejemplo-M/
Rama reporte (SCRIPT_SDK): wp/i24-separacion-datos
Worktree reporte (opcional): ../SCRIPT_SDK-wp-i24
Reporte: plan/REPORTES/WP-I24-separacion-datos.md
  (vive en SCRIPT_SDK; la fixture vive en el repo hermano)

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I10 (protocolo→skill · dato→instancia · DS-5) y
  DE-I11 (histórico real = LOCAL + .gitignore; NO remoto privado ni rama
  privada dedicada)
- plan/PRACTICAS.md deltas 1, 5 (ceguera), 6
- plan/BACKLOG.md WP-I24 (CA literal) + nota I01 (gitignore DE-I11 ya
  parcial; grep semántico «datos zeus» diferido a este WP)
- plan/REPORTES/WP-I01-higiene-backstage.md (qué ya está gitignoreado)
- plan/REPORTES/WP-I23-skill-vigilancia.md (skill listo; cero histórico
  dentro del skill — el corpus va a instancias/)
- Doctrina a reubicar (lectura → fuente del skill, no residuo suelto):
  - VIGILANCIA/RE-PLAN-protocolo-swarm.md → skill (p. ej.
    skills/swarm-orquestacion/reference/ o skills/vigilancia/reference/
    según quepa sin duplicar; preferir el skill que ya cita los 5 ejes)
- Dato REAL a preservar backstage (NO borrar; NO publicar; NO meter en
  fixture tal cual):
  - VIGILANCIA/{bitacora.md,revisiones/,anomalias.log,watch.log}
  - ADDENDA/ (addendas + ENTREGAs)
  - HANDOFF_* (raíz y donde existan)
  - Nota: ESTACION.md + watcher.sh ya abstraídos en skill vigilancia
    (I23); no re-copiar como dato. TRASH/ sigue backstage.

Notas del orquestador:
- Corazón DE-I10 / DS-5: la vigilancia de zeus es DATO de otro mundo;
  no pertenece al núcleo publicable de SCRIPT_SDK.
- Entregables:
  1) SCRIPT_SDK: confirmar/ampliar `.gitignore` DE-I11 (VIGILANCIA/,
     ADDENDA/, HANDOFF_*, y lo que salga del núcleo en este WP).
     Histórico real permanece en disco local — **no borrar**.
  2) SCRIPT_SDK: núcleo publicable sin datos zeus (grep CA = 0). Si algo
     sigue trackeado en el índice, sacarlo del index (`git rm --cached`)
     sin destruir el fichero en disco.
  3) S_SDK-skills-library: fixture de-identificada
     `instancias/ejemplo-M/` (mundo real → parámetro «M»): bitácora /
     revisiones / addendas / handoffs **sintéticos o scrubbed** — sin
     nombres reales de mundos/holones/rutas OASIS/zeus.
  4) Reubicar `RE-PLAN-protocolo-swarm.md` como fuente del skill
     (doctrina), no como residuo suelto en VIGILANCIA/ del núcleo
     publicable. Si VIGILANCIA/ queda solo backstage, la doctrina pública
     vive en el skill.
  5) Push skill/fixture a origin skills-library OK (DE-I7), solo rama WP.
     Reporte en SCRIPT_SDK sin push raíz.
- CA (evidencia literal en reporte):
  1) `rg` / grep de datos zeus (nombres reales, rutas OASIS/zeus de
     sesión, bitácoras reales) en el núcleo **publicable** de SCRIPT_SDK
     = 0 (árbol que no está gitignoreado / que iría al remoto).
  2) Histórico real preservado en disco y localizable bajo paths
     gitignoreados (mostrar `test -f` / `ls`; no borrar).
  3) Existe `S_SDK-skills-library/instancias/ejemplo-M/` y su grep de
     nombres reales / marco = 0 (ceguera delta 5).
  4) `RE-PLAN-protocolo-swarm.md` (o equivalente) vive como fuente del
     skill, no como residuo suelto publicable en SCRIPT_SDK.
- NO I25 (no simular segundo holón aún). NO I26 publish. NO editar
  BACKLOG. NO push raíz SCRIPT_SDK. NO remoto privado nuevo (DE-I11).
  NO mutar HOLONES/zeus. NO tocar skills I21–I23 salvo para anclar
  RE-PLAN como reference (sin reescribir el skill entero).
- Commits:
  - skills-library: feat(instancias): ejemplo-M … / docs(skills): RE-PLAN …
  - SCRIPT_SDK: docs(plan): reporte WP-I24 … (+ chore gitignore/index si
    hace falta)

Empieza: crea ramas/worktrees (fixture + reporte), lee PRACTICAS entero,
separa dato vs doctrina, evidencia los 4 CA, reporta.
```
