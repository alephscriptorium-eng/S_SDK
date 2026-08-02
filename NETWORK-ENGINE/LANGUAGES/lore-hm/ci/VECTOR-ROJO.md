# Vector rojo plantado · CI LENGUA (s-sdk)

| dato | valor |
| ---- | ----- |
| marcador | `NETWORK-ENGINE/LANGUAGES/lore-hm/ci/ROJO-PLANTADO` |
| efecto | `npm run test:lore-hm-lengua` → exit 1 · job CI en rojo |
| guarda | el marcador **no** debe existir en la rama aceptada |

## Procedimiento (medido)

1. Commit verde con el arnés CI (sin marcador).
2. Commit que **añade** `ROJO-PLANTADO` → push → anotar **run-id** fallido.
3. Commit que **quita** el marcador → push → anotar run-id verde.

## Evidencia

| evento | run-id | conclusion | sha |
| ------ | ------ | ---------- | --- |
| arnés verde | _pendiente_ | | |
| rojo plantado | _pendiente_ | | |
| restaura verde | _pendiente_ | | |

## Verificadores cableados

- `verificar-dossier-l01.mjs`
- `verificar-inception-l02.mjs`
- `verificar-solid-l03.mjs`
- `verificar-vocab-l04.mjs`
- `verificar-sellado-l05.mjs`
