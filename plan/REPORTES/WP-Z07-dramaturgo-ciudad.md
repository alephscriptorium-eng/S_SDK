# WP-Z07 · dramaturgo-ciudad — reporte

| dato | valor |
| ---- | ----- |
| agente | worker gc-z07 (swarm fresco) |
| fecha | 2026-07-21 |
| rama | `wp/gc-z07-dramaturgo-ciudad` (games-library) · reporte en SCRIPT_SDK `wp/gc-z07-dramaturgo-ciudad` |
| commits | games-library `006aef1354394c2e273af1b65b7b5e282fe90eb2` · SCRIPT_SDK tip rama `wp/gc-z07-dramaturgo-ciudad` |
| eje(s) CA | kit (instantiate + validate-story-board) · proyección ledger→actos |
| estado propuesto | listo para revisión |

## Qué se hizo

**Desviación CA ficha (Z04):** Z04 aún 🔶 (no ✅) → se usó fixture ledger Z03
(`join→announce→walk→walk→wake`) y se dejó gap literal
`pendiente Z04 e2e` en fixture + acto `act-3` / metadato `projection.gap`.

Se generó la instancia `kits/carpeta-dramaturgo/instances/ciudad/` con el CLI
del kit (`instantiate.mjs --slug ciudad` + REIC de TRAMA-AGUA §5.5), sin tocar
scripts/plantilla del kit. Se añadió mapeo mínimo ledger/track→actos
(`ledger/MAPEO.md` + proyector) y se regeneró `story-board.json` con actos
announce / cruce de distrito / un barrio despertó. `validate-story-board.mjs`
pasa (dialecto solve-inline). Sin gamemap en la instancia (capa lectura).

## Archivos tocados

- `kits/carpeta-dramaturgo/instances/ciudad/**` (creado): instancia CLI + REIC
- `…/ciudad/ledger/fixture-z03-mvp.json` (creado): outbox domain Z03 + gap Z04
- `…/ciudad/ledger/MAPEO.md` (creado): tabla evento→acto + rutas
- `…/ciudad/scripts/project-ledger-to-story-board.mjs` (creado): proyector
- `…/ciudad/readerapp/story-board.json` (generado): act-0..act-3
- `…/ciudad/uichain/panel-{announce,cruce,wake}.prompt.md` (creado): widgets
- `plan/REPORTES/WP-Z07-dramaturgo-ciudad.md` (creado, superproyecto): este reporte

## Evidencia

> Worktree GL: `C:\Users\aleph\SCRIPT_SDK\HOLONES\01-mythos\games-library\.worktrees\wp-gc-z07-dramaturgo-ciudad`
> Rama código: `wp/gc-z07-dramaturgo-ciudad` @ `006aef1`
> Env A1 (`git -C <path> rev-parse HEAD`):

```
S_SDK   = tip rama `wp/gc-z07-dramaturgo-ciudad` (padre cd378493fb5cd9fca747a1f5d79186ff71ec4a08)
GL_WT   = 006aef1354394c2e273af1b65b7b5e282fe90eb2
GL_MAIN = 5b5bf4e23e311f05d5e7e96320a74ac253b3faa7
ZEUS    = fa73062124a10839c3f821d5e61c250ea14f734b
Z04_WT  = 5b5bf4e23e311f05d5e7e96320a74ac253b3faa7  (vivo; obra Z04 aún no en tip)
```

```
$ node kits/carpeta-dramaturgo/scripts/instantiate.mjs \
    --slug ciudad --title "Ciudad" \
    --theme "agua/caudal — trama de ventana de contexto (lectura del ledger del engine)" \
    --reic-r "agua/caudal" --reic-e "compuertas/gates" \
    --reic-i "ventanas/vasos" --reic-c "ciclo/retorno" --force
✅ instancia creada: …/instances/ciudad
   fuente=plantilla:plantilla

$ node packages/ciudad …  # domain fixture
ok join / announce / walk / walk / wake
# ledger: announce seq1 + wake seq2; tracks: walk zigurat, walk editores+barrioId, horse-offer

$ node kits/carpeta-dramaturgo/instances/ciudad/scripts/project-ledger-to-story-board.mjs
wrote …/readerapp/story-board.json
acts=act-0:Semilla · act-1:Presencia en plaza · act-2:Cruce de distrito · act-3:Un barrio despertó
gap: pendiente Z04 e2e — acto «un barrio despertó» vía rabbits r/s/h …

$ node kits/carpeta-dramaturgo/scripts/validate-story-board.mjs \
    kits/carpeta-dramaturgo/instances/ciudad/readerapp/story-board.json
✅ …/story-board.json
   dialect=solve-inline  act-0→[panel-seed,panel-reic]; act-1→[panel-announce];
   act-2→[panel-cruce]; act-3→[panel-wake]

$ rg -n "SCRIPT_SDK|S_SDK|holarquía|juntura|holón" instances/ciudad/ → 0 hits
$ find …/ciudad -iname '*gamemap*' → 0
$ git diff 5b5bf4e..HEAD -- kits/carpeta-dramaturgo/scripts/ → vacío (kit no forkeado)
```

Push tip / CI: **no afirmado** (brief: gate ola custodio; worker no push).

## Criterios de aceptación (ficha)

| CA | estado |
| -- | ------ |
| Instancia con CLI del kit, sin tocar el kit | ✅ |
| Tras e2e Z04, acto «un barrio despertó» en story-board | ⏳ gap `pendiente Z04 e2e` — acto presente desde fixture Z03 |
| `validate-story-board.mjs` pasa | ✅ |
| Dramaturgo NO produce mundos gamemap | ✅ (0 gamemap bajo instancia) |

## Auto-revisión (PRACTICAS del mundo — con honestidad)

- [x] Diff solo dentro de `ALCANCE_DIFF`: instancia + mapeo junto a ella + reporte; sin engine Z03/Z04/Z08, sin BACKLOG
- [x] Cero árboles/ficheros copiados de otros mundos sin procedencia: plantilla vía CLI; ledger desde domain Z03
- [x] Sellos con fuente; rutas citadas existentes: worktree + SHA + MAPEO
- [x] Sin fluff ni promesa de futuro sin `<pendiente>` / gap literal Z04
- [x] Eje(s) aplicables evidenciado(s): instantiate + validate + proyección documentada
- [x] Gates ejecutados de verdad: validate-story-board ✅
- [x] Commits convencionales: `feat(dramaturgo): …`
- [x] Diff solo del alcance del WP: sí (kit scripts intactos)

## Hallazgos fuera de alcance

- **Z04 e2e rabbits:** regenerar fixture/story-board desde ledger peer cuando Z04 ✅.
- **Rol `dj` / intents Z03:** mapeo narra origen `rabbit` del fixture; tipología maquinaria/operador/rabbit (TRAMA-AGUA §5.2) queda para Z13 contrato de mapeo.
- **ORIGIN.md del CLI** escribió path absoluto del worktree; sanitizado a ruta relativa (ceguera local).

## Dudas / bloqueos

- Ningún bloqueo para revisión. ¿Orquestador actualiza puntero submodule al merge GL, o solo mergea la rama?
- Confirmar con custodio push GL tip cuando quieran afirmar CI (gate ola).

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
