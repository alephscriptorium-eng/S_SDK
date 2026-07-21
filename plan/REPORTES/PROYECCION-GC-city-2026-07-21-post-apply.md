# PROYECCIÓN — acta post-apply · sprint-game-city · 2026-07-21

| dato | valor |
| ---- | ----- |
| estado | **apply OK** — auth write `alephscriptorium-eng` (scopes repo); push:true S_SDK + Z_SDK |
| pre | [PROYECCION-GC-city-2026-07-21-post-GC4.md](PROYECCION-GC-city-2026-07-21-post-GC4.md) (dry-run OK) |
| body panorámica | [BODY-Z_SDK-2-funcional.md](BODY-Z_SDK-2-funcional.md) (ciego funcional; no ACTA-INTERNA) |
| cierre evidencia | [CIERRE-sprint-game-city-2026-07-21.md](CIERRE-sprint-game-city-2026-07-21.md) |
| mapa | `plan/SPRINTS/sprint-game-city/.sync-map.json` — **no editado a mano**; script reafirmó WP-Z01…Z15 → 1…15 |

## Resultado apply (literal)

```
[proyectar] ceguera OK (15 WP validados contra el patrón del mundo).
[proyectar] export  · alcance=todos · 15 proyectado(s), 0 a cerrar · repo=alephscriptorium-eng/S_SDK
  ✓ actualizado WP-Z01 → #1 (closed)
  ✓ actualizado WP-Z02 → #2 (closed)
  ✓ actualizado WP-Z03 → #3 (closed)
  ✓ actualizado WP-Z04 → #4 (closed)
  ✓ actualizado WP-Z05 → #5 (open)
  ✓ actualizado WP-Z06 → #6 (closed)
  ✓ actualizado WP-Z07 → #7 (closed)
  ✓ actualizado WP-Z08 → #8 (closed)
  ✓ actualizado WP-Z09 → #9 (closed)
  ✓ actualizado WP-Z10 → #10 (closed)
  ✓ actualizado WP-Z11 → #11 (closed)
  ✓ actualizado WP-Z12 → #12 (closed)
  ✓ actualizado WP-Z13 → #13 (closed)
  ✓ actualizado WP-Z14 → #14 (closed)
  ✓ actualizado WP-Z15 → #15 (closed)
[proyectar] sync-map → plan/SPRINTS/sprint-game-city/.sync-map.json
[proyectar] OK.
```

Bodies editados: **15/15 OK**, 0 fallos. Cerrados en apply: #3,#4,#6,#7,#11,#12,#15 (resto ya closed; #5 permanece open).

## Valores reales post-apply

| ítem | valor |
| ---- | ----- |
| issue WP-Z15 | https://github.com/alephscriptorium-eng/S_SDK/issues/15 (`number`=15 verificado) |
| sync Z15→#15 | verdad remota: issue #15 existe; mapa `WP-Z15: 15` (sin diff post-script) |
| panorámica Z_SDK #2 | https://github.com/alephscriptorium-eng/Z_SDK/issues/2 — body-file `BODY-Z_SDK-2-funcional.md` |
| push gobierno | `62755e1..4cf7c69` (`origin/main` = `4cf7c6966e5d3368d14e980fdd680480afd32d6e`) |

## Invariantes (post-apply)

- [x] Z05-f1 **no** reabierto
- [x] GC-5 **no** abierto
- [x] Z05 issue #5 permanece **open** (parked 3–6)
- [x] `.sync-map.json` no editado a mano

## Cola D — ejecutada

1. Auth write verificada (`alephscriptorium-eng`, push:true).
2. Issue #15 = WP-Z15 creado y verificado **exactamente 15**.
3. Apply proyección S_SDK (`PROYECCION_GITHUB=1` + `--habilitar-github`).
4. Panorámica Z_SDK #2 con body ciego funcional.
5. Push gobierno acumulado (no force).