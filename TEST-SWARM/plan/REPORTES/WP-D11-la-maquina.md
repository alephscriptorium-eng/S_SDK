# WP-D11 · la-maquina — reporte

| dato | valor |
| ---- | ----- |
| agente | worker D11 (subagente) |
| fecha | 2026-07-16 |
| rama | `wp/d11-la-maquina` |
| commits | `0b8dc16` |
| estado propuesto | listo para revisión |

## Qué se hizo

Se creó el worktree `../SCRIPT_SDK-wp-d11` con rama `wp/d11-la-maquina` desde
`main` (`43a3906`). Se redactó `TEST-SWARM/NOTAS/nota-2-la-maquina.md`:
descripción estilo Menabrea del método (dos leyes, junturas, sellos, registry,
asiento 05–07), espejo M↔casa término a término con anclas absolutas
existentes, diagrama lado a lado con centro vacío en ambas rotulaciones, tabla
de operaciones para la Nota 3, y estado honesto de máquina en construcción.
Gates (c)(d) verdes sobre el árbol completo.

## Archivos tocados

- `TEST-SWARM/NOTAS/nota-2-la-maquina.md` — creado: Nota 2 del pack
- `TEST-SWARM/plan/REPORTES/WP-D11-la-maquina.md` — creado: este reporte

## Evidencia

```
$ cd C:/Users/aleph/SCRIPT_SDK && git worktree add ../SCRIPT_SDK-wp-d11 -b wp/d11-la-maquina
Preparing worktree (new branch 'wp/d11-la-maquina')
HEAD is now at 43a3906 docs(TEST-SWARM): aceptar WP-D00 en backlog y reporte

$ cd C:/Users/aleph/SCRIPT_SDK-wp-d11 && git commit ...
[wp/d11-la-maquina 0b8dc16] docs(TEST-SWARM): Nota 2 — máquina Menabrea y espejo M↔casa
 1 file changed, 223 insertions(+)

$ cd C:/Users/aleph/SCRIPT_SDK-wp-d11/TEST-SWARM && bash validar-ensayo.sh
...
=== Gate (c): rutas bajo sello Verificado existen ===
  ✓ todas las rutas Verificado comprobadas (40)
=== Gate (d): cero árboles copiados de otros mundos ===
  ✓ sin árboles copiados detectados
...
RESULTADO: VERDE
  OK:   45
  FAIL: 0

$ test -f C:/Users/aleph/OASIS/SCRIPTORIUM_V0/zeus-sdk/plan/BACKLOG.md && echo ZEUS_OK
ZEUS_OK
$ test -f C:/Users/aleph/OASIS/SCRIPTORIUM_V0/emmanuel-sdk/plan/BACKLOG.md && echo EMMANUEL_OK
EMMANUEL_OK
$ test -f C:/Users/aleph/OASIS/SCRIPTORIUM_V0/transmedia-system/SCRIPTORIUM-CORE/NETWORK-ENGINE/plan/BACKLOG.md && echo NETWORK_OK
NETWORK_OK
```

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo dentro de TEST-SWARM/: sí — `NOTAS/nota-2-la-maquina.md` y
      reporte
- [x] Cero árboles/ficheros copiados de otros mundos: sí — solo citas con
      ruta absoluta
- [x] Sellos con fuente; rutas citadas existentes: sí — gate (c) verde (40
      rutas Verificado); GRAVEDAD/GRAVITÓN y narrativas 05–06 con
      `<pendiente>` declarado
- [x] Nombres en castellano, sin transición: sí — `nota-2-la-maquina.md`
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`; las Notas, no el
      pitch: sí — cierre «pide que se mire el disco»; capa macro/micro
      pendiente
- [x] Cero moneda; munición = idea/obra; cifras en puntos de scrum (gate e):
      gate (e) verde; sin cifras en la Nota
- [x] La M como forma; física solo con procedencia citada: sí — espejo
      conceptual; GRAVEDAD/GRAVITÓN remitidos a VISION §hipótesis OSI con
      pendientes explícitos
- [x] Web fiel a la plantilla fanzine: N/A — este WP no entrega HTML
- [x] Gates ejecutados de verdad: sí — `validar-ensayo.sh` VERDE (a–e)
- [x] Commits convencionales: `docs(TEST-SWARM): …`
- [x] Diff solo del alcance: sí

## Hallazgos fuera de alcance

- Nota 1 (WP-D10) aún no existe: el diagrama usa abreviaturas T₁…T₄ con
  remisión explícita a la rotulación completa de D10.
- Los slots 02 (Logos) y holones sin `plan/` no tienen ancla — declarado en
  la Nota, no tapado.
- Rutas de mundos bajo `C:/Users/aleph/OASIS/SCRIPTORIUM_V0/` (no bajo
  `OASIS/` directo): verificadas en disco; HOLONES.md usa otra grafía de
  ruta relativa al anclaje narrativo.

## Dudas / bloqueos

Ninguno. Listo para revisión del orquestador.

---

## Revisión del orquestador

- **Estado:** Aceptado ✅
- **CA:** verificados (`validar-ensayo.sh` VERDE en worktree; diff `main...wp/d11-la-maquina` solo `TEST-SWARM/NOTAS/nota-2-la-maquina.md` + reporte; gate (c) 40 rutas Verificado; gates a–e verdes)
- **Merge a `main`:** 2026-07-16 (fast-forward `wp/d11-la-maquina` → `main`, `1c8e80d`)
