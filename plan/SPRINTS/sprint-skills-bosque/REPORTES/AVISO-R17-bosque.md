# AVISO R17-bosque Â· 2026-07-22 Â· listo para vigÃ­a

```text
AVISO Â· R17-bosque Â· bosque-orq â†’ vigÃ­a
Asunto: re-verif S03 âœ… + gate S07 broche 0.5.0 Â· pedir PASS R17-bosque
Carril: bosque Â· Territorio obra: hermano skills-library
Gobierno: plan/SPRINTS/sprint-skills-bosque/** (S_SDK)
```

## Claim

- **S03** skill `estacion-viva` mergeado a `main` hermano Â· ceguera 0 Â·
  boot fixture `BOOT_OK` (re-verificado en aceptaciÃ³n).
- **S07** publish `@alephscript/skills-scriptorium@0.5.0` con
  `estacion-viva` en tarball Â· Release + Docs CI + Publish CI VERDE Â·
  `npm view` = `0.5.0`.
- ParticiÃ³n respetada (sin city/zeus/GL/pins). Gobierno commiteado
  **antes** de este aviso (lecciÃ³n R14).

## Hashes POST-push

### Gobierno Â· `S_SDK` (`plan/SPRINTS/sprint-skills-bosque/**`)

| acto | hash |
| ---- | ---- |
| Gate exprÃ©s S03 (BRIEF) | `a37d4c2` |
| Despacho S03 | `d661c06` |
| Reporte S03 | `d09f4b8` |
| AceptaciÃ³n S03 âœ… | `8a2dc04` |
| **Tip gobierno (aceptaciÃ³n S07 âœ…)** | **`2b10330`** |
| **Tip gobierno (este aviso R17)** | **`bb7490f`** |

### Obra Â· `S_SDK-skills-library`

| acto | hash |
| ---- | ---- |
| S05b merge | `71824d0` |
| S06 merge | `2743176` |
| S03 tip | `be68f07` |
| **S03 merge** | **`9b89495`** |
| **S07 release tip** | **`4c2e322`** |
| Tag | `v0.5.0` |

## S07 Â· canales (regla 16)

| canal | evidencia |
| ----- | --------- |
| Release | https://github.com/alephscriptorium-eng/S_SDK-skills-library/releases/tag/v0.5.0 |
| Publish CI | [29927743629](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29927743629) success |
| Docs CI | [29927725261](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29927725261) success |
| npm view | `@alephscript/skills-scriptorium@0.5.0` â†’ `0.5.0` Â· registry `npm.scriptorium.escrivivir.co` |
| Portal | consumo/catÃ¡logo regenerados a `0.5.0` Â· pÃ¡gina skill `estacion-viva` |

## Re-verif S03 (aceptaciÃ³n)

```
ceguera Ã¡rbol: 0
git log -p hits: 0
reproduce-boot.sh â†’ BOOT_OK (7 fases)
ALCANCE = skills/estacion-viva/** + CHANGELOG Unreleased (pre-S07)
package.json 0.4.0 intacto en S03 (bump solo en S07)
```

## Pedido al vigÃ­a

1. Re-verificar S03 en tip merge `9b89495` (skill + ceguera + CA IÂ·IV).
2. Gate S07: version `0.5.0`, Release, npm view, Docs+Publish run-ids,
   tarball con `estacion-viva`.
3. Tras PASS: carril bosque listo para cierre de ola (higiene ya hecha
   worktree S03).

## Fuera de alcance

- city / zeus / games-library / pins / DECISIONES raÃ­z
- S04 (traspasado city)
