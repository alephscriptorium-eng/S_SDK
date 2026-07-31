# Backlog candidato · frontera TypeScript Zeus

Convención de esta cola: `⬜` candidato · `🔶` **prohibido aquí** · `✅` solo
tras aceptación en el backlog canónico de Zeus. Los ids serán remapeados por
el orquestador antes del despacho.

| id cola | WP | deps | ejes | riesgo | estado |
| ------- | -- | ---- | ---- | ------ | ------ |
| ZT01 | Tipos públicos completos de `@zeus/linea-kit` | — | IV | independiente | ⬜ |
| ZT02 | Tipos públicos completos de `@zeus/acta-kit` | — | IV | independiente | ⬜ |
| ZT03 | Tipos de fachada MCP `@zeus/linea-system` | ZT01 ✅ | I · IV | independiente | ⬜ |
| ZT04 | Tipos de fachada MCP `@zeus/force-system` | ZT01 ✅ | I · IV | independiente | ⬜ |
| ZT05 | Certificación C8 de los cuatro paquetes publicados | Release ZT01–ZT04 | IV · C8 | independiente | ⬜ |

## Olas sugeridas

1. **Ola A:** ZT01 ∥ ZT02, con worktrees distintos.
2. **Ola B:** ZT03 ∥ ZT04, después de integrar ZT01 para consumir sus tipos
   canónicos y no duplicar shapes.
3. **Checkpoint Release:** gate del orquestador; requiere GO publish
   explícito y [`PUBLISH-GATE.md`](PUBLISH-GATE.md) completo.
4. **Ola C:** ZT05 desde el `main` post-release.

## CA transversales ZT01–ZT04

1. Cero cambios en runtime `src/**`, schemas y Lane D.
2. Cada export JS usado tiene condición `types` resoluble bajo `NodeNext`.
3. Las declaraciones reflejan el runtime; usan `unknown` donde no exista
   garantía verificable y no exponen `any` de escape.
4. Un gate exports↔declarations falla al retirar una `.d.ts` o añadir un
   subpath JS sin declaración.
5. Dos consumidores TypeScript independientes compilan con `strict`,
   `noImplicitAny` y `tsc --noEmit`; uno ejercita root/browser-safe y otro
   los subpaths Node o de fachada.
6. Los tests existentes del paquete siguen verdes y `npm run gates` pasa.
7. Todo paquete publicable tocado recibe changeset `patch`; la adición de
   tipos no cambia semántica runtime.
8. `npm pack --dry-run` o inspección equivalente confirma que `types/**`
   entra en el tarball.
9. Contrarrevisión independiente intenta refutar resolución de subpaths,
   exactitud de firmas, ausencia de tipos y frontera de diff.

## CA de cierre del lote

- Cuatro paquetes instalables desde registry con sus declaraciones.
- Consumidor limpio C8 compila sin `file:`, tarball local ni `any`.
- CI y Release del tip correspondiente tienen run-id `success`.
- `main` queda limpio; ramas/worktrees del lote, fusionados o justificados.
- Lane D conserva exactamente su estado previo y U204 sigue sin diff.

## Exclusiones conscientes

- `@zeus/lifecycle-kit`: su ciclo de procesos no sustituye el tipestate
  LORE-HM; candidato posterior con consumidor real.
- `@zeus/story-board-schema`: proyección UI opcional, no contrato de
  Universo/Corto.
- `parte-kit`, `embajador-kit`, `linea-editor`: fuera del consumidor v1.
