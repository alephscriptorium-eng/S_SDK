# ACTA INTERNA — borrador previo (NO body público Z_SDK#2)

> **Uso:** acta / trazo gordo de gobierno local. **No** usar como `--body-file` público.
> Body ciego listo para apply: `plan/REPORTES/BODY-Z_SDK-2-funcional.md`.
> Ex-`PANORAMICA-Z_SDK-2-post-GC4.md` (renombrada 2026-07-21).

---
# Z_SDK — panorámica post-GC-4 + HOTFIX-GATES-2 (2026-07-21) [ACTA INTERNA]
Trazo gordo (sin issues finos de prosa de plan). Estado del submÃ³dulo **zeus-sdk** tras sprint-game-city / GC-4.

## HOTFIX-GATES-2

| dato | valor |
| ---- | ----- |
| commit | `0b566e6` (`0b566e6b090b7ff4ffbe9e1837ff121636852ac1`) |
| Actions CI | run [29839611853](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29839611853) â€” **success** |
| acta gobierno | S_SDK `plan/REPORTES/ACTA-HOTFIX-GATES-2-2026-07-21.md` |

## Sprint-game-city â†’ consumo

Pack ciudad (games-library / S_SDK plan) como primer consumidor cruzado de la constelaciÃ³n. Cierre evidencia: S_SDK `plan/REPORTES/CIERRE-sprint-game-city-2026-07-21.md`.

## Issues espejo S_SDK (#1â€“#15)

ProyecciÃ³n completa (dry-run OK; apply pendiente auth en el momento de redactar este body):

| WP | issue S_SDK | nota |
| -- | ----------- | ---- |
| Z01 | [#1](https://github.com/alephscriptorium-eng/S_SDK/issues/1) | closed (plan) |
| Z02 | [#2](https://github.com/alephscriptorium-eng/S_SDK/issues/2) | closed |
| Z03 | [#3](https://github.com/alephscriptorium-eng/S_SDK/issues/3) | closed |
| Z04 | [#4](https://github.com/alephscriptorium-eng/S_SDK/issues/4) | closed â€” peer rooms/protocol (S20 de facto) |
| Z05 | [#5](https://github.com/alephscriptorium-eng/S_SDK/issues/5) | **open** â€” parked 3â€“6; f1/f2 âœ… (no reopen f1) |
| Z06 | [#6](https://github.com/alephscriptorium-eng/S_SDK/issues/6) | closed â€” mcp-launcher |
| Z07 | [#7](https://github.com/alephscriptorium-eng/S_SDK/issues/7) | closed |
| Z08 | [#8](https://github.com/alephscriptorium-eng/S_SDK/issues/8) | closed |
| Z09 | [#9](https://github.com/alephscriptorium-eng/S_SDK/issues/9) | closed |
| Z10 | [#10](https://github.com/alephscriptorium-eng/S_SDK/issues/10) | closed |
| Z11 | [#11](https://github.com/alephscriptorium-eng/S_SDK/issues/11) | closed â€” cierra GC-4 |
| Z12 | [#12](https://github.com/alephscriptorium-eng/S_SDK/issues/12) | closed (paraguas f1+f2) |
| Z13 | [#13](https://github.com/alephscriptorium-eng/S_SDK/issues/13) | closed |
| Z14 | [#14](https://github.com/alephscriptorium-eng/S_SDK/issues/14) | closed |
| Z15 | [#15](https://github.com/alephscriptorium-eng/S_SDK/issues/15) | closed en plan; sync-map Z15â†’#15 al apply |

## Fuera de alcance de este issue

- No abrir GC-5.
- No reopen Z05-f1.
- Issues finos de BACKLOG / DECISIONES viven en S_SDK, no aquÃ­.

## Comando (cuando haya auth write)

```powershell
gh issue edit 2 --repo alephscriptorium-eng/Z_SDK --body-file plan/REPORTES/BODY-Z_SDK-2-funcional.md
```