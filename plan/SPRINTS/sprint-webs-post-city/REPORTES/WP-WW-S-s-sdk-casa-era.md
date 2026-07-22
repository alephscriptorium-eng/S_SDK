# WP-WW-S · s-sdk-casa-era — reporte

| dato | valor |
| ---- | ----- |
| agente | WW-S (worker) |
| fecha | 2026-07-22 |
| rama | `wp/ww-s-casa-era` |
| commits | _(rellenar post-commit)_ |
| eje(s) CA | III · IV · ceguera · regla 15 |
| estado propuesto | listo para revisión |
| issue | LOCAL-ONLY |

## Qué se hizo

Destilación pública de la era post-city en la casa (S_SDK `docs/**`),
sin inventar tramos no sellados en plan.

1. **Ficha 07** — sección «Era post-city»: cinco tramos sellados (city ·
   vida-1 · embajador-entrada · ciudad-real CR-1+C04 · bosque B-1), método
   v0.6 / DE-I22, enlaces [#27](https://github.com/alephscriptorium-eng/S_SDK/issues/27)
   y [#30](https://github.com/alephscriptorium-eng/S_SDK/issues/30).
2. **Portada** — arco en una pantalla (hero + features: arco · #27 · #30 ·
   tubería · vigía juega · mythos).
3. **Página nueva** `guide/el-vigia-juega` — entrada a la plaza por
   MCP+peercard; lore-te-ipsum como horizonte DE-I19 (sin WP/GO);
   **regla 15** explícita (cero sesión/IDE).
4. **Nav/sidebar** + enlace cruzado desde tubería-protegida.

**Desviación env tip:** brief esperaba S tip post-montaje; tip local al
commit de obra = HEAD de esta rama. zeus=`2aec4cb` · GL=`20c095c` (match
brief). **Gate R15-city:** AVISO sigue pidiendo PASS; despacho recibido
del orquestador padre — marcado aquí; no se editó BACKLOG.

## Archivos tocados

| path | cambio |
| ---- | ------ |
| `docs/holones/07-script-sdk.md` | modificado — era post-city + v0.6 + #27/#30 |
| `docs/index.md` | modificado — portada arco |
| `docs/guide/el-vigia-juega.md` | creado — vigía juega (MCP+peercard · r15) |
| `docs/guide/tuberia-protegida.md` | modificado — ver también → vigía |
| `docs/.vitepress/config.mjs` | modificado — nav/sidebar |
| `plan/SPRINTS/sprint-webs-post-city/REPORTES/WP-WW-S-s-sdk-casa-era.md` | creado — este reporte |

## Evidencia

```
$ git -C HOLONES/01-mythos/zeus-sdk rev-parse HEAD
2aec4cb7d049861a5ea29bdc207c46fad1c22856

$ git -C HOLONES/01-mythos/games-library rev-parse HEAD
20c095cf698ed5b09a18fe409c8a7de37eb003bf

$ npm run docs:build
# vitepress v1.6.4 · build complete · dist guide/el-vigia-juega.html OK

$ rg 'WP-[A-Z]{1,2}\d' docs/index.md docs/holones/07-script-sdk.md \
    docs/guide/el-vigia-juega.md docs/guide/tuberia-protegida.md
# (sin hits en prosa tocada)

$ rg -i '\.claude/|agent-transcript|scratchpad/' \
    docs/index.md docs/holones/07-script-sdk.md \
    docs/guide/el-vigia-juega.md docs/guide/tuberia-protegida.md
# 0 hits

# C8 canal real (HTTP)
# S_SDK#27 → 200 · S_SDK#30 → 200 · s-sdk.escrivivir.co → 200
# z-sdk …/external-handshake → 200 · startpack-ciudad-v0.1.0 → 200
# registry npm.scriptorium.escrivivir.co/@zeus/protocol → 200
# npm view @zeus/protocol --registry … → 0.4.0
# npm view @zeus/authority-kit --registry … → 0.4.1

$ gh issue view 27 --repo alephscriptorium-eng/S_SDK
# OPEN · «El camino de los U-sprints»
$ gh issue view 30 --repo alephscriptorium-eng/S_SDK
# CLOSED · «CIUDAD-REAL · CR-1 + C04»
```

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: `docs/**` + reporte sprint
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia
- [x] Sellos con fuente; #27/#30 URLs reales; tramos = actas/DECISIONES
- [x] Sin fluff ni promesa de futuro sin horizonte marcado (lore-te-ipsum = DE-I19 sin WP/GO)
- [x] Eje III: nav/sidebar única entrada vigía (sin duplicar bloques devops)
- [x] Eje IV: segunda superficie independiente (ficha 07 + portada + vigía + tubería) sobre peercard/MCP ya documentados
- [x] Ceguera + regla 15: 0 hits sesión/IDE; 0 `WP-*` nuevos en prosa tocada
- [x] Gates: `docs:build` verde; C8 HTTP + npm view
- [x] Commits convencionales: `docs(ww-s): …`
- [x] Diff solo del alcance del WP (sin bosque / zeus docs / GL docs)

## Hallazgos fuera de alcance

- `AVISO-R15-city.md` aún «listo para vigía» sin acta PASS en árbol — el
  orquestador despachó igual; vigía puede documentar PASS a posteriori.
- Comment preexistente `WP-I10` en `docs/.vitepress/config.mjs` (no tocado
  el texto; solo nav).
- Tip S_SDK avanzó respecto al brief (montaje `3cc556c`); obra sobre tip
  corriente de la rama.

## Dudas / bloqueos

Ninguno bloqueante para revisión. Sin merge (worker).

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
