# BRIEF · WP-I70 · Dependencia + rango `0.x`

| dato | valor |
| ---- | ----- |
| ola | I7 (upgrade skills 0.3.4) |
| repos | **SCRIPT_SDK (raíz) únicamente** |
| rama | `wp/i70-dep-rango-0x` (crear desde `main`) |
| base decisión | DE-I17 · espejo zeus D-36 / U145 |
| push | **NO** (canal custodio media) |
| agente | fresco (regla 13) |

## Objetivo

Que holón 07 **declare** el skill como dependencia versionada con rango
`0.x` (no pin exacto), resolviendo la efectiva **0.3.4**, y alinee la prosa
del plan. Es la base de I71/I73/I74. **No** materializa `.claude/skills/`
(eso es I71) ni crea scripts nuevos.

## Trabajo

1. `package.json` raíz: añadir a `devDependencies`
   `"@alephscript/skills-scriptorium": "0.x"`. El `.npmrc` ya rutea
   `@alephscript` → `https://npm.scriptorium.escrivivir.co` (no lo toques).
2. `npm install` → debe resolver `0.3.4` y escribir `package-lock.json`.
3. Prosa (solo estas ediciones, sin reescrituras amplias):
   - `plan/README.md:14` — `@alephscript/skills-scriptorium@0.1.0` → «rango
     `0.x` (efectiva 0.3.4)» (arreglar el `0.1.0` stale).
   - `plan/DECISIONES.md` — donde cite `@0.3.0` como «referencia versionada»
     (líneas ~163, ~186), añadir nota de que DE-I17 lo lleva a rango `0.x`.
     **No** reescribas DE-I17 (ya está redactada); solo cose las citas
     viejas con una remisión a DE-I17.
   - `plan/PRACTICAS.md` — si dice «versión fijada», → «rango `0.x`».

## CA (evidencia literal, regla CASOS: no inventar)

- **CA1** `npm view @alephscript/skills-scriptorium --registry=https://npm.scriptorium.escrivivir.co version` → `0.3.4` (C8, canal real).
- **CA2** `npm install` EXIT=0; `package-lock.json` resuelve
  `skills-scriptorium` a `0.3.4` (pega la sección del lock).
- **CA3** `grep -rn "versión fijada\|0\.3\.0\b" plan/README.md plan/PRACTICAS.md` = 0 residual sin remitir a DE-I17.
- **CA4** `git diff --stat` = solo `package.json`, `package-lock.json`, y los 3 docs de `plan/`. Nada más.

## Restricciones

- **Sin push.** Sin bump de submódulos. Cero cambios fuera de SCRIPT_SDK raíz.
- Si `npm install` reescribe EOL de algún `bin/*.mjs` de submódulos (hallazgo
  conocido), `git restore` esos y no los incluyas.
- Reporte en `plan/REPORTES/WP-I70-dep-rango-0x.md` (plantilla REPORTES/).
- Auto-revisión PRACTICAS §4 al pie.
