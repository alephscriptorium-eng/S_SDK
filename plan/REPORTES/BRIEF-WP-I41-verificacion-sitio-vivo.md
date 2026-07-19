# Brief — WP-I41 · Acta verificación C8 del sitio vivo

_Orquestador holón 07 · 2026-07-19 · ola I4 (post-✅ I40 formal)_
_SCRIPT_SDK `main` @ `0849e8b` (+ commit gobierno I40/I41/I27). Skills-library
`main` @ `019a90b` — no tocar._
_NO implementar I27/I50/I52. Solo acta C8 del sitio vivo._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I41 · Verificación C8 del sitio vivo + acta
Rama: wp/i41-verificacion-sitio-vivo
Worktree: ../SCRIPT_SDK-wp-i41
Reporte: plan/REPORTES/WP-I41-verificacion-sitio-vivo.md

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/BACKLOG.md WP-I41 (CA literal) + I40 ✅ (cierre formal)
- plan/REPORTES/VIGIA-ESTADO.md — INSUMO estación/vigilante (Pages,
  HTTPS, clase 200 citada). Úsalo como punto de partida; NO copies
  ciegamente: re-verifica en browser real.
- plan/DECISIONES.md DE-I2 (dominio), DE-I13 (push raíz)
- docs/.vitepress/config.mjs (mapa de rutas nav)
- WEBS/CANTERA/01-inventario-superficies.md (si existe; coherencia)

Notas del orquestador:
- Objetivo: acta C8 del sitio vivo `s-sdk.escrivivir.co` con browser
  real (Playwright / navegación). I40 ya cerró ops (verificado por
  custodio/estación · 2026-07-19); este WP aporta el acta formal.
- Insumo permitido: VIGIA-ESTADO + addendas/estación del custodio si
  existen en repo. NO inventar URLs ni estados no evidenciados.
- Recorrido mínimo sugerido (amplía si descubres más en nav):
  portada · 7 fichas /holones/0X-* · /autoridades/* ·
  /guide/publicar-la-web · /ensayo/ (+ assets) · assets del bundle.
  Links cruzados a portales externos: anotar HTTP status; no mutar
  esos mundos.
- Comandos de ejemplo del sitio (si los hay en guide/portada):
  ejecutarlos o declarar N/A con evidencia.

- CA (evidencia literal en reporte):
  1) Browser real: 0 enlaces rotos en el recorrido del sitio propio.
  2) 0 comandos de ejemplo que fallen (o N/A documentado).
  3) Acta con status HTTP / captura textual por ruta clave.
  4) Ceguera: no añadir paths absolutos host al reporte; no mutar
     docs/ ni skills-library.

- Cadencia: merge al ✅. Tú NO merges a main ni empujas raíz.
- NO I27 (Pages library / skill v0.2). NO I50/I52.
- NO editar BACKLOG (ya 🔶). NO push origin (orquestador).
- NO mutar S_SDK-skills-library. NO tocar HOLONES/ submodules.
- Commits: docs(plan): reporte WP-I41 …

Empieza: crea worktree `../SCRIPT_SDK-wp-i41` desde main, lee
VIGIA-ESTADO + PRACTICAS, navega el sitio vivo, evidencia CA, reporta.
NO implementes I27.
```
