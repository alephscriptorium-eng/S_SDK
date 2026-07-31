# Checkpoint Release · ZT01–ZT04

Este checkpoint pertenece al orquestador. No es un WP worker y no autoriza
publicación por sí mismo.

## Precondiciones

- ZT01–ZT04 aceptados, mergeados y con contrarrevisión `PASS` documentada.
- Cero `🔶` del lote y cero worktree con cambios sin integrar.
- `git diff <base-pre-lote>..main -- packages/**/src packages/engine/volumes-ops`
  vacío para el alcance prohibido.
- `npm run gates` verde.
- Tests de los cuatro paquetes verdes.
- `npm run audit:publish-allowlist` confirma:
  - `linea-kit` y `acta-kit`: clase A por manifiesto + allowlist;
  - `linea-system` y `force-system`: clase C nominal y estado registry vivo.
- `npm run release:changeset-dry` incluye exactamente los cuatro bumps
  `patch` esperados.
- CI del tip de `main` en `success`.

## GO y publicación

1. Obtener GO publish explícito del custodio para este lote/versiones.
2. Usar exclusivamente Changesets + workflow Release del repo.
3. No ejecutar `npm publish` manual ni reutilizar credenciales fuera del
   runner autorizado.
4. Registrar PR/commit de versión, run-id Release, versiones publicadas y
   tags.
5. Verificar cada versión con `npm view` contra
   `https://npm.scriptorium.escrivivir.co`.

## Salida del checkpoint

Solo con Release `success` se abre ZT05. Si el registry o el runner no está
disponible, el estado es `esperando: Release/registry`, nunca PASS local.
