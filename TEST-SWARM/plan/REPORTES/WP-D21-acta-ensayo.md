# WP-D21 · acta-ensayo — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-D21 |
| fecha | 2026-07-16 |
| rama | `wp/d21-acta-ensayo` |
| commits | `bbca9de` |
| estado propuesto | listo para revisión |

## Qué se hizo

Se creó el worktree `../SCRIPT_SDK-wp-d21` en la rama `wp/d21-acta-ensayo` desde
`main` (`8631a1b`). Se redactó `TEST-SWARM/ACTA-ENSAYO.md`: retrospectiva del ensayo
general con inventario de WPs D00–D20 (los únicos existentes en el backlog del
ensayo), línea temporal desde commits, devolución D00 documentada, tabla de
fricciones del protocolo, huecos de roles y veredicto explícito de cambios antes
del estreno real (D22 + primer swarm). Sin desviaciones del WP; no se tocó BACKLOG,
no merge, no push.

## Archivos tocados

- `TEST-SWARM/ACTA-ENSAYO.md` — creado: acta retrospectiva del ensayo general
- `TEST-SWARM/plan/REPORTES/WP-D21-acta-ensayo.md` — creado: este reporte

## Evidencia

### Fuentes consultadas (reportes WP-D00..D20)

| WP | reporte |
| -- | ------- |
| D00 | `plan/REPORTES/WP-D00-gates-ensayo.md` |
| D01 | `plan/REPORTES/WP-D01-guion-pack.md` |
| D10 | `plan/REPORTES/WP-D10-la-forma-m.md` |
| D11 | `plan/REPORTES/WP-D11-la-maquina.md` |
| D12 | `plan/REPORTES/WP-D12-acta-v2.md` |
| D13 | `plan/REPORTES/WP-D13-ejecucion.md` |
| D20 | `plan/REPORTES/WP-D20-pack-ensamblado.md` |

No existen reportes D02–D09 ni D14–D19 en el árbol (no hubo WPs en backlog).

### Commits del ensayo (muestra)

```
8631a1b docs(TEST-SWARM): aceptar WP-D20 — revisión orquestador
0796ebf docs(TEST-SWARM): ensamblar pack fanzine en docs/ (WP-D20)
c95e6a8 docs(TEST-SWARM): Nota 3 — ejecución trazada modo Nota G
fd8336f docs(TEST-SWARM): acta v2 con munición-obra y puntos de scrum
5f94ec4 docs(TEST-SWARM): Nota 1 — la forma M en dos estratos DA-2
9ec2cd3 fix(TEST-SWARM): excluir plan/REPORTES/ del gate (c)
2208952 test(TEST-SWARM): gates a–e del ensayo con fixtures de violación
cdb2d7e docs(TEST-SWARM): partitura GUION con tres Notas para el ángel
```

### Devolución D00

Estado en reporte D00: **devuelto-corregido** (`9ec2cd3`). Causa y corrección
citadas en `ACTA-ENSAYO.md` §IV.

### Gates sobre entregable D21

```
$ cd C:/Users/aleph/SCRIPT_SDK-wp-d21/TEST-SWARM && bash validar-ensayo.sh
validar-ensayo.sh — repo: /c/Users/aleph/SCRIPT_SDK-wp-d21
base: main | ámbito: TEST-SWARM/

=== Gate (a): diff solo dentro de TEST-SWARM/ ===
  ✓ TEST-SWARM/ACTA-ENSAYO.md
  ✓ TEST-SWARM/plan/REPORTES/WP-D21-acta-ensayo.md

=== Gate (c): rutas bajo sello Verificado existen ===
  ✓ todas las rutas Verificado comprobadas (post-corrección pseudo-ruta en §V)

=== Gate (e): cero moneda / munición=dinero en el pack ===
  ✓ sin patrones monetarios/munición-dinero en el pack

--- Resumen ---
  OK:   81
  FAIL: 0
RESULTADO: VERDE
```

**Nota:** primera pasada ROJA en gate (c) por `s://…` en tabla §V (misma clase de
falso positivo que D10); corregido antes del commit `bbca9de`.

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo dentro de TEST-SWARM/: sí — `ACTA-ENSAYO.md` y reporte
- [x] Cero árboles/ficheros copiados de otros mundos: sí — solo lectura de reportes
- [x] Sellos con fuente; rutas citadas existentes: sí — enlaces a reportes y commits
      verificables en repo
- [x] Nombres en castellano, sin transición: sí — `ACTA-ENSAYO.md`
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`; las Notas, no el
      pitch: sí — veredicto operativo, no fundraising
- [x] Cero moneda; munición = idea/obra; cifras en puntos de scrum (gate e): sí
- [x] La M como forma; física solo con procedencia citada: N/A — meta del ensayo
- [x] Web fiel a la plantilla fanzine: N/A — este WP entrega markdown
- [x] Gates ejecutados de verdad: sí — post-commit
- [x] Commits convencionales: `docs(TEST-SWARM): …`
- [x] Diff solo del alcance: sí — solo acta + reporte; sin BACKLOG

## Hallazgos fuera de alcance

- Los cuatro ítems obligatorios del veredicto (PRACTICAS §gates, parser gate c,
  ACTA-V2 volumes, dry-run D22) son candidatos a WPs de mantenimiento o a D22;
  no se implementaron aquí (alcance = retrospectiva).
- Tiempos son aproximados desde timestamps de commit; no hay métricas de tokens
  ni duración por agente más allá de la línea temporal agregada.

## Dudas / bloqueos

Ninguno.

---

## Revisión del orquestador

_(pendiente)_
