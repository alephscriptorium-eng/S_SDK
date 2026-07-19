# Brief — WP-I25 · Primer caso de verificación (Eje IV)

_Orquestador holón 07 · 2026-07-19 · ola I2 (tras merge I24)_
_Skills-library `main` @ `fcac110` (pushed). SCRIPT_SDK `main` @ `0c6e342` (sin push raíz)._
_NO implementar I26. Solo simulación Eje IV: skill + fixture → pulso/veredicto._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I25 · Primer caso de verificación (Eje IV)
Checkout hermano (skill + fixture): C:\Users\aleph\S_SDK-skills-library
  Rama trabajo skill: wp/i25-primer-caso-verificacion
  Base: main @ fcac110
  Path skill: skills/vigilancia/
  Path fixture: instancias/ejemplo-M/
Rama reporte (SCRIPT_SDK): wp/i25-primer-caso-verificacion
Worktree reporte (opcional): ../SCRIPT_SDK-wp-i25
Reporte: plan/REPORTES/WP-I25-primer-caso-verificacion.md
  (vive en SCRIPT_SDK; la simulación corre en el repo hermano)

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I10 (contrato skill↔instancia) y DE-I7 (push solo
  skills-library)
- plan/PRACTICAS.md deltas 1, 5 (ceguera), 6; Eje IV = segundo consumidor
- plan/BACKLOG.md WP-I25 (CA literal)
- plan/VISION.md (Eje IV: sensor de que el contrato es real)
- plan/REPORTES/WP-I23-skill-vigilancia.md (skill listo; watcher parametrizado)
- plan/REPORTES/WP-I24-separacion-datos.md (fixture ejemplo-M ceguera=0)
- En skills-library (lectura operativa):
  - skills/vigilancia/SKILL.md + reference/ + scripts/watcher.sh
  - instancias/ejemplo-M/ (bitácora, revisiones, addendas, handoffs, logs)

Notas del orquestador:
- Eje IV: el contrato no se cierra porque «compila»; se cierra porque un
  **segundo consumidor** (holón simulado) usa solo skill + instancia.
- Entregables:
  1) S_SDK-skills-library: rama `wp/i25-primer-caso-verificacion` desde
     main @ fcac110. Si hace falta un OUT_DIR de ensayo para el ciclo
     (logs/pulso sintético), que viva bajo la rama WP — **no** mutar
     `instancias/ejemplo-M/` como corpus canónico (solo leer/cargar).
  2) Simular segundo holón: cargar fixture `ejemplo-M` vía skill
     `vigilancia` (WORLD_ROOT / OUT_DIR / INTERVAL según SKILL.md).
     Producir un pulso + veredicto (addenda dos caras o acta equivalente
     del protocolo) **sin tocar SCRIPT_SDK** como mundo vigilado y **sin
     nombrar zeus** ni el marco SCRIPT_SDK en salidas del ciclo.
  3) Evidencia de ceguera: `rg` de nombres de marco / zeus / rutas OASIS
     en el acta del ciclo y en cualquier artefacto nuevo del WP = 0.
  4) SCRIPT_SDK: solo reporte `plan/REPORTES/WP-I25-primer-caso-verificacion.md`
     en rama/worktree WP (sin push raíz). Push skill OK solo si hubo
     commits en skills-library (DE-I7), solo rama WP.
- CA (evidencia literal en reporte):
  1) Un agente con **solo** el skill `vigilancia` + `instancias/ejemplo-M`
     reproduce un ciclo de vigilancia completo (pulso + veredicto/addenda).
  2) Cero referencias al marco (SCRIPT_SDK / zeus / holón 01 como mundo)
     en el acta del ciclo y en artefactos del WP.
  3) Acta en `plan/REPORTES/WP-I25-primer-caso-verificacion.md` con
     evidencia literal (comandos, greps, rutas usadas).
- NO I26 publish. NO editar BACKLOG (el orquestador ya marcó 🔶).
  NO push raíz SCRIPT_SDK. NO mutar HOLONES/. NO reescribir el skill
  entero (solo usarlo; fixes mínimos de ceguera OK si un hallazgo lo
  exige y se documenta). NO tocar `instancias/ejemplo-M/` como dato
  canónico (no «arreglar» la fixture en este WP salvo bug bloqueante
  documentado).
- Commits:
  - skills-library (si hubo artefacto de ensayo): docs/feat(i25): …
  - SCRIPT_SDK: docs(plan): reporte WP-I25 …

Empieza: crea rama/worktree (skill opcional + reporte), lee PRACTICAS
entero, carga ejemplo-M con vigilancia, simula segundo holón, evidencia
los 3 CA, reporta. NO implementes I26.
```
