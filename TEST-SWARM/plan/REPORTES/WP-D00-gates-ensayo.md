# WP-D00 · gates-ensayo — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-D00 |
| fecha | 2026-07-16 |
| rama | `wp/d00-gates-ensayo` |
| commits | `2208952`, `2dfe8bd` |
| estado propuesto | listo para revisión |

## Qué se hizo

Se creó el worktree `../SCRIPT_SDK-wp-d00` en la rama `wp/d00-gates-ensayo`.
Se implementó `TEST-SWARM/validar-ensayo.sh`, script bash ejecutable en Git Bash
que valida los gates a–e del ensayo. Se añadió `TEST-SWARM/pruebas-violacion/`
con fixtures sintéticos y modo `--violacion` (a|b|c|d|e|todas) para demostrar
rojo por cada tipo. Sin desviaciones del WP; no se tocó GUION.md ni entregables
de D01.

## Archivos tocados

- `TEST-SWARM/validar-ensayo.sh` — creado: script raíz con gates a–e y modo violación
- `TEST-SWARM/pruebas-violacion/gate-a-fuera-test-swarm.txt` — creado: fixture gate (a)
- `TEST-SWARM/pruebas-violacion/gate-b-nombre-ingles/legacy-readme.md` — creado: fixture gate (b)
- `TEST-SWARM/pruebas-violacion/gate-c-ruta-fantasma.md` — creado: fixture gate (c)
- `TEST-SWARM/pruebas-violacion/gate-d-arbol-copiado/zeus/config.json` — creado: fixture gate (d)
- `TEST-SWARM/pruebas-violacion/gate-e-moneda.md` — creado: fixture gate (e)

## Evidencia

### Verde — TEST-SWARM actual (post-commit)

```
validar-ensayo.sh — repo: /c/Users/aleph/SCRIPT_SDK-wp-d00
base: main | ámbito: TEST-SWARM/

=== Gate (a): diff solo dentro de TEST-SWARM/ ===
  ✓ TEST-SWARM/pruebas-violacion/gate-a-fuera-test-swarm.txt
  ✓ TEST-SWARM/pruebas-violacion/gate-b-nombre-ingles/legacy-readme.md
  ✓ TEST-SWARM/pruebas-violacion/gate-c-ruta-fantasma.md
  ✓ TEST-SWARM/pruebas-violacion/gate-d-arbol-copiado/zeus/config.json
  ✓ TEST-SWARM/pruebas-violacion/gate-e-moneda.md
  ✓ TEST-SWARM/validar-ensayo.sh

=== Gate (b): nombres en castellano, sin restos ingleses ===
  ✓ sin restos ingleses detectados bajo /c/Users/aleph/SCRIPT_SDK-wp-d00/TEST-SWARM

=== Gate (c): rutas bajo sello Verificado existen ===
  ✓ ninguna ruta citada bajo sello Verificado en el ámbito escaneado

=== Gate (d): cero árboles copiados de otros mundos ===
  ✓ sin árboles copiados detectados

=== Gate (e): cero moneda / munición=dinero en el pack ===
  ✓ sin patrones monetarios/munición-dinero en el pack


--- Resumen ---
  OK:   10
  FAIL: 0
RESULTADO: VERDE
```

### Rojo sintético — `--violacion todas`

```
=== Gate (a): diff solo dentro de TEST-SWARM/ ===
  · modo violación: simulando diff con .../pruebas-violacion/gate-a-fuera-test-swarm.txt
  ✓ TEST-SWARM/validar-ensayo.sh
  ✗ fuera de TEST-SWARM/: HIPOTESIS.md
  ✗ fuera de TEST-SWARM/: DEVOPS/VISION.md
RESULTADO: ROJO

=== Gate (b): nombres en castellano, sin restos ingleses ===
  ✗ resto inglés o transición: legacy-readme.md
RESULTADO: ROJO

=== Gate (c): rutas bajo sello Verificado existen ===
  ✗ Verificado → ruta inexistente: SCRIPT_SDK/ruta/que/no/existe.md (en pruebas-violacion/gate-c-ruta-fantasma.md:3)
RESULTADO: ROJO

=== Gate (d): cero árboles copiados de otros mundos ===
  ✗ posible árbol copiado (zeus): zeus
  ✗ posible árbol copiado (zeus): zeus/config.json
RESULTADO: ROJO

=== Gate (e): cero moneda / munición=dinero en el pack ===
  ✗ pruebas-violacion/gate-e-moneda.md: 3:Contaminación sintética: €100, hockey stick, pólvora seca y unidades monetarias.
RESULTADO: ROJO
```

Comandos:

```bash
cd ../SCRIPT_SDK-wp-d00/TEST-SWARM && bash validar-ensayo.sh
cd ../SCRIPT_SDK-wp-d00/TEST-SWARM && bash validar-ensayo.sh --violacion todas
```

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo dentro de TEST-SWARM/: sí; solo `TEST-SWARM/validar-ensayo.sh` y `TEST-SWARM/pruebas-violacion/`
- [x] Cero árboles/ficheros copiados de otros mundos (salvo `fanzine.css` con cabecera): sí; fixtures son sintéticos mínimos
- [x] Sellos con fuente; rutas citadas existentes: gate (c) verde; sin sellos Verificado con rutas en plan/ actual
- [x] Nombres en castellano, sin transición: `validar-ensayo.sh`, `pruebas-violacion/`; sin `legacy` fuera de fixtures
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`; las Notas, no el pitch: sí (solo código instrumental)
- [x] Cero moneda; munición = idea/obra; cifras en puntos de scrum (gate e): gate (e) excluye `plan/` y acta v1 histórica del ámbito pack
- [x] La M como forma; física solo con procedencia citada: N/A en este WP
- [x] Web fiel a la plantilla fanzine (sin fuentes/CDNs/paleta ajena): N/A en este WP
- [x] Gates ejecutados de verdad: sí; salida literal arriba
- [x] Commits convencionales: `test(TEST-SWARM): gates a–e del ensayo con fixtures de violación`
- [x] Diff solo del alcance: sí; WP-D00 únicamente

## Hallazgos fuera de alcance

- Gate (e) requiere excluir `plan/` (meta que describe los patrones prohibidos) y el acta v1 histórica para ser verde sobre el árbol actual; documentado en el script.
- `grep` dentro de bucles `while read` cuelga en Git Bash Windows; el script usa `[[ =~ ]]` y lectura con `tr -d '\r'`.

## Dudas / bloqueos

Ninguno.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
