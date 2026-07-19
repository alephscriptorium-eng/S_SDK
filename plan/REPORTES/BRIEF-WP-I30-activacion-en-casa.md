# Brief — WP-I30 · Activación en casa

_Orquestador holón 07 · 2026-07-19 · ola I3 (primer WP; bloquea I31∥I32→I33)_
_SCRIPT_SDK `main` ya en origin (push DE-I13 cumplido). Skills-library
`main` @ `019a90b` — solo lectura del skill `site-web` + `swarm-orquestacion`._
_NO implementar I31/I32/I33/I27/I40. Solo activación en casa._

---

```text
(rol) TEST-SWARM/plan/roles/WORKER.md

WP: WP-I30 · Activación en casa
Rama: wp/i30-activacion-en-casa
Worktree: ../SCRIPT_SDK-wp-i30
Reporte: plan/REPORTES/WP-I30-activacion-en-casa.md

Lecturas extra (además de PRACTICAS + WP en BACKLOG + VISION):
- plan/DECISIONES.md DE-I6 (capa WEBS: método en skill, instancia en WEBS/)
  y DE-I3/DE-I10 (skills fuera de datos; plan/ consume skill)
- plan/BACKLOG.md WP-I30 (CA literal) + BRIEF-OLA-I3.md (cadencia/orden)
- plan/README.md (interinidad roles → se cierra en este WP)
- plan/RETRO-2026-07-19-metodo.md (reglas 1–12; no implementes I27)
- Skill site-web (SOLO lectura, checkout hermano):
  C:\Users\aleph\S_SDK-skills-library\skills\site-web\
  (SKILL.md, scripts/generar-sitio.sh, examples/, reference/)
- Skill swarm-orquestacion (SOLO lectura):
  C:\Users\aleph\S_SDK-skills-library\skills\swarm-orquestacion\
  (referencia: este plan/ pasa a ser consumidor verificado del skill)
- Fuente método WEBS (SOLO lectura si hace falta calibrar CANTERA):
  C:\Users\aleph\OASIS\SCRIPTORIUM_V0\WEBS\ — NO copiar datos de zeus;
  la instancia es de ESTE mundo (S_SDK / holón 07)

Notas del orquestador:
- Objetivo: primer consumidor real del contrato skill↔mundo (Eje IV en casa).
  (1) Este `plan/` deja de ser solo interino respecto al protocolo: documenta
      que la definición canónica del protocolo está en el skill
      `swarm-orquestacion` (grep dedup = 1 definición); roles siguen en
      TEST-SWARM solo como puntero/interino explícito o se actualiza README
      para decir «activado vía skill @ semver».
  (2) Generar capa de contenido con skill `site-web`: crear `WEBS/` en
      SCRIPT_SDK con CANTERA + ENTREGA-CAPA-1 para la web de este holón
      (s-sdk.escrivivir.co). Usar el skill (scripts/plantillas), no inventar
      un método paralelo. Copy = de ESTE mundo; cero CANTERA/ENTREGA de zeus.
  (3) No hace falta publicar Pages ni tocar docs/ de fichas (eso es I31+).
      Si el skill genera esqueleto docs/, limitar a lo mínimo que el skill
      exija para «capa-1»; no rellenar portada/fichas holones (I31/I32).

- CA (evidencia literal en reporte):
  1) Eje IV: el propio repo es primer consumidor verificado del skill
     (comandos del skill ejecutados; salidas pegadas).
  2) Existe `WEBS/` con CANTERA + ENTREGA-CAPA-1 coherente con DE-I6.
  3) Grep dedup del protocolo: 1 definición canónica (el skill); este plan
     referencia, no replica `roles/` (sigue sin `plan/roles/` propio).
  4) Ceguera: grep de datos/copy de zeus (CANTERA zeus, rutas OASIS de
     instancia) en WEBS/ nuevos = 0; procedencia del método citada sin
     pegar contenido de mundo ajeno.

- Cadencia: merge al ✅ (brief de ola). Tras tu reporte, el orquestador
  revisa; tú NO merges a main ni empujas raíz.
- NO I31/I32/I33 (fichas, roadmaps, TEST-SWARM servido).
- NO I27 (skill v0.2 / Pages library). NO I40 (Pages/DNS raíz).
- NO editar BACKLOG (ya 🔶). NO push origin (orquestador).
- NO mutar S_SDK-skills-library (solo leer). NO tocar HOLONES/ submodules.
- Commits en rama WP: docs(plan): … / docs(WEBS): … según el árbol tocado.

Empieza: crea worktree `../SCRIPT_SDK-wp-i30` desde main, lee PRACTICAS
entero + skill site-web, genera WEBS/ + cierra interinidad del plan/ como
consumidor del skill, evidencia los 4 CA, reporta. NO implementes I31+.
```
