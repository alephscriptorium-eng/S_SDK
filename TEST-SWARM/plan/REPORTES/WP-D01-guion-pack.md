# WP-D01 · guion-pack — reporte

| dato | valor |
| ---- | ----- |
| agente | worker D01 (subagente) |
| fecha | 2026-07-16 |
| rama | `wp/d01-guion-pack` |
| commits | `cdb2d7e` (GUION.md), `9529679` (reporte) |
| estado propuesto | listo para revisión |

## Qué se hizo

Se creó el worktree `../SCRIPT_SDK-wp-d01` con rama `wp/d01-guion-pack` desde
`main` (`4855e94`). Se redactó `TEST-SWARM/GUION.md`: partitura completa de
las tres Notas con efecto declarado (legitimidad · verificabilidad · prueba de
capacidad), sello y fuente o `<pendiente>` por tramo, remate hacia
superposición y acta v2, y candados DE-4/DE-5/DE-6. No se tocó D00 ni gates.
La fuente física de la M queda para D10, como exige el brief.

## Archivos tocados

- `TEST-SWARM/GUION.md` — creado: partitura del pack para el ángel
- `TEST-SWARM/plan/REPORTES/WP-D01-guion-pack.md` — creado: este reporte

## Evidencia

```
$ cd C:/Users/aleph/SCRIPT_SDK && git worktree add ../SCRIPT_SDK-wp-d01 -b wp/d01-guion-pack
Preparing worktree (new branch 'wp/d01-guion-pack')
HEAD is now at 4855e94 --

$ cd C:/Users/aleph/SCRIPT_SDK-wp-d01 && git add TEST-SWARM/GUION.md && git commit -m "docs(TEST-SWARM): partitura GUION con tres Notas para el ángel ..."
[wp/d01-guion-pack cdb2d7e] docs(TEST-SWARM): partitura GUION con tres Notas para el ángel
 1 file changed, 210 insertions(+)
 create mode 100644 TEST-SWARM/GUION.md

$ test -f C:/Users/aleph/SCRIPT_SDK/DEVOPS/VISION.md && echo OK
OK
$ test -f C:/Users/aleph/SCRIPT_SDK/DEVOPS/METODOLOGIA/HOLONES.md && echo OK
OK
$ test -d C:/Users/aleph/OASIS/aleph-scriptorium/plan && echo OK
OK

$ rg -i '€|\$|hockey|TAM' TEST-SWARM/GUION.md
(sin coincidencias)

Gates D00: ⏳ sin verificar — fuera de alcance WP-D01; no se modificó script de gates.
```

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo dentro de TEST-SWARM/: sí — solo `GUION.md` y reporte
- [x] Cero árboles/ficheros copiados de otros mundos: sí
- [x] Sellos con fuente; rutas citadas existentes: rutas Verificado/Doctrina
      comprobadas en disco (DEVOPS/VISION, HOLONES, aleph-scriptorium/plan,
      TEST-SWARM/plan/*); tramos D10/D11/D13 marcados `<pendiente>` como
      corresponde
- [x] Nombres en castellano, sin transición: sí
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`; las Notas, no el
      pitch: sí — cierre explícito «No se pide inversión»; GRAVEDAD/GRAVITÓN
      y entregables futuros con `<pendiente>`
- [x] Cero moneda; munición = idea/obra; cifras en puntos de scrum (gate e):
      única cifra = 100.000 puntos de scrum (DE-6); «pólvora» y «dinero» solo
      al nombrar contaminación v1 a corregir
- [x] La M como forma; física solo con procedencia citada: sí — lección/apuesta
      separadas (DA-2); física remitida a DEVOPS §lore con pendientes
- [x] Web fiel a la plantilla fanzine: N/A — este WP no entrega HTML
- [ ] Gates ejecutados de verdad: ⏳ sin verificar — D00 en paralelo, no
      requerido por CA de D01
- [x] Commits convencionales: `docs(TEST-SWARM): …`
- [x] Diff solo del alcance: sí

## Hallazgos fuera de alcance

- El acta v1 (`Municiones — acta de inversión en una página.htm`) es un shell
  de artifact Claude: el texto útil (sellos, moira) no es grep-able en el
  HTML guardado; el guion toma la semántica de moira y sellos del plan
  (VISION, BACKLOG D20, DECISIONES) y declara el acta v1 como fuente
  histórica de patrón visual, no de moneda.
- `HIPOTESIS.md` se cita como mapa de planes vivos; no estaba en la lista de
  lecturas obligatorias pero ancla verificable el espejo M↔casa (tramo 2.x).

## Dudas / bloqueos

Ninguno bloqueante.

---

## Revisión del orquestador

- **Estado:** Aceptado ✅
- **CA:** verificados (diff solo `TEST-SWARM/`, entregable `GUION.md` + reporte)
- **Merge a `main`:** 2026-07-16 (fast-forward `wp/d01-guion-pack` → `main`)
