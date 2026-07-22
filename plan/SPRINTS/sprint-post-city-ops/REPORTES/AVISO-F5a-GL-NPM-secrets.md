# AVISO · F5a · sembrar NPM_* en GL · 2026-07-22 · city-orq → custodio/PO

```text
AVISO · F5a-GL-NPM · city-orq → custodio / PO
Asunto: desbloquear publish C8 en Z_SDK-games-library (ciudad / startpack)
Carril: city-ops · PCO-2 · WP-F5a parcial (zeus ✅ · GL blocked)
Gobierno: plan/SPRINTS/sprint-post-city-ops/REPORTES/
Veto: no inventar ni versionar secretos en árbol
```

## Hecho (zeus · C8)

| paquete | versión C8 | tip / Release |
| ------- | ---------- | ------------- |
| `@zeus/socket-server` | **0.1.1** | zeus `c13546b` · Release **29931698137** |
| `@zeus/mcp-launcher` | **0.1.1** | idem (C2 **muerta**) |
| `@zeus/embajador-kit` | **0.1.2** | tarball con `skill/` |

## Bloqueo (GL)

| dato | valor |
| ---- | ----- |
| tip GL `origin/main` | `29edb7e` — `@zeus/ciudad` `private:false` + publishConfig ([#2](https://github.com/alephscriptorium-eng/Z_SDK-games-library/pull/2)) |
| secrets Actions GL | **lista vacía** (`total_count: 0`) — sin `NPM_*` / `NPM_TOKEN` |
| `@zeus/ciudad` · `startpack-ciudad` · `startpack-kit` | **404** en `npm.scriptorium.escrivivir.co` |

Sin credenciales de publish en el repo GL, el manifest listo **no** publica.

## Pedido al custodio / PO (ops)

Sembrar en **`alephscriptorium-eng/Z_SDK-games-library`** → Settings → Secrets and variables → Actions, el mismo modelo que zeus (D-24):

- `NPM_USERNAME` + `NPM_PASSWORD`, **o**
- `NPM_TOKEN` (si el workflow GL/notario lo espera)

**No** pegar valores aquí. **No** commitear `.npmrc` con auth. Canal: GitHub secrets (o token publish equivalente fuera de git).

Tras sembrar: alinear notario/auth y publicar en orden

1. `@zeus/startpack-kit`
2. `@zeus/startpack-ciudad`
3. `@zeus/ciudad`

Evidencia de cierre: `npm view <pkg> version --registry https://npm.scriptorium.escrivivir.co` ≠ 404.

## Relacionado (no secrets)

- **Operator-ui:** propuesta worker **B** (build-doc) — **sello PO pendiente** ([DECISIONES](../DECISIONES.md#dc-pco-f5a-operator-ui--2026-07-22--abierta-espera-sello-po)).
- **F5b:** **parked** hasta F5a ✅ total (ciudad/startpack en C8). **NO despachado.**

## Refs

- [WP-F5a-publish-mesh](WP-F5a-publish-mesh.md) · pins + gap secrets
- [CHECKLIST-F5-C1-C8-T1](CHECKLIST-F5-C1-C8-T1.md) · C1 parcial · C2 muerta
