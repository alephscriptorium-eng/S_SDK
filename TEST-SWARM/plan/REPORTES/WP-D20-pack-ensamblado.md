# WP-D20 · pack-ensamblado — reporte

| dato | valor |
| ---- | ----- |
| agente | worker D20 (subagente) |
| fecha | 2026-07-16 |
| rama | `wp/d20-pack-ensamblado` |
| commits | `0796ebf` |
| estado propuesto | listo para revisión |

## Qué se hizo

Se creó el worktree `../SCRIPT_SDK-wp-d20` con rama `wp/d20-pack-ensamblado` desde
`main` (`28cf2df`). Se ensambló el pack navegable en `TEST-SWARM/docs/`:
`index.html` (guion → Nota 1 → Nota 2 → Nota 3 → superposición con conmutador
M ↔ casa → acta v2 como sección final) y `assets/fanzine.css` (copia-release DE-8
desde `OASIS_PUB/EXTENSIONS/LANDINGPAGE/docs/poster-template/fanzine.css` con
cabecera de procedencia y extensiones mínimas para moira/nav). Moira operativa
(360 s, velo, reapertura) y sellos fanzine (`.kw`/`.kw-inv`/`.stamp`). Pendientes
declarados en pantalla: slot 02 Logos, GRAVEDAD/GRAVITÓN, Future Machine (cuarto
munición). Ruta volumes corregida a `zeus-sdk/VOLUMES/volumes.json` (existía en
disco; ACTA-V2 citaba ruta obsoleta).

## Archivos tocados

- `TEST-SWARM/docs/index.html` — creado: pack ensamblado navegable (DA-1, DA-3)
- `TEST-SWARM/docs/assets/fanzine.css` — creado: plantilla fanzine mono (DE-8)
- `TEST-SWARM/plan/REPORTES/WP-D20-pack-ensamblado.md` — creado: este reporte

## Evidencia

```
$ cd C:/Users/aleph/SCRIPT_SDK && git worktree add ../SCRIPT_SDK-wp-d20 -b wp/d20-pack-ensamblado 28cf2df
Preparing worktree (new branch 'wp/d20-pack-ensamblado')
HEAD is now at 28cf2df docs(TEST-SWARM): aceptar WP-D13 en backlog y reporte

$ cd C:/Users/aleph/SCRIPT_SDK-wp-d20 && bash TEST-SWARM/validar-ensayo.sh 2>&1 | tail -6
--- Resumen ---
  OK:   80
  FAIL: 0
RESULTADO: VERDE
```

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo dentro de TEST-SWARM/: sí — `docs/` + reporte
- [x] Cero árboles/ficheros copiados de otros mundos (salvo `fanzine.css`
      con cabecera): sí — gate (d) VERDE
- [x] Sellos con fuente; rutas citadas existentes: pendientes declarados en HTML;
      volumes en `VOLUMES/volumes.json`; emmanuel SKILL verificado en disco
- [x] Nombres en castellano, sin transición: sí
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`; las Notas, no el
      pitch: sí — comparecencia explícita; pendientes visibles
- [x] Cero moneda; munición = idea/obra; cifras en puntos de scrum (gate e):
      gate (e) VERDE; reparto 40+25+25+10 = 100.000
- [x] La M como forma; física solo con procedencia citada: sí — dos estratos en Nota 1
- [x] Web fiel a la plantilla fanzine (sin fuentes/CDNs/paleta ajena): sí — Courier,
      #000/#fff, sin CDN
- [x] Gates ejecutados de verdad: sí — `validar-ensayo.sh` VERDE (a–e) post-commit
- [x] Commits convencionales: `docs(TEST-SWARM): …`
- [x] Diff solo del alcance: sí — solo sitio + reporte

## Hallazgos fuera de alcance

- `ACTA-V2.md` cita `zeus-sdk/packages/volumes/volumes.json` (inexistente); en
  HTML se usó `zeus-sdk/VOLUMES/volumes.json`. Corregir ACTA en WP futuro si el
  orquestador lo pide.
- Contenido de Notas en HTML es resumen maquetado, no copia literal del markdown;
  fuentes completas siguen en `TEST-SWARM/NOTAS/*.md`.

## Dudas / bloqueos

_(ninguno)_

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
