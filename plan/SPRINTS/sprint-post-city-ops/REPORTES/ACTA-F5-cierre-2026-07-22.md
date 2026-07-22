# ACTA F5 · ciudad instanciable + federación · 2026-07-22

| dato | valor |
| ---- | ----- |
| paraguas | [WP-F5](../WP-F5.md) |
| sub-WPs | F5a ✅ · F5b ✅ · F5c ✅ |
| regla 16 | run-ids CI + Release por repo tocado |
| proyección | LOCAL-ONLY · [`.sync-map.json`](../.sync-map.json) |
| Z_SDK | #4/#5/#6 = **OPEN** (no cerrar) |
| E_SDK | **veto** |

## Resumen

Arco **PCO-2 / F5** cerrado: lote mesh en C8 (zeus + GL), sello PO
operator-ui **B**, e2e dos ciudades registry puro, check oasis F5c
(protocolos 200 · sidecar `<pendiente>` honesto). Camino a **R19**
(cierre arco city): [AVISO-R19](AVISO-R19.md).

## Pins tip

| repo | tip SHA | nota |
| ---- | ------- | ---- |
| **zeus-sdk** | `d0d9de1d3af0e75a9f5d7d7b4c2b4d3762beb90c` | embajador-kit@0.1.3 (mapa B) · mesh 0.1.1 |
| **games-library** | `d1783646f4364fce49ae9b421c863bc51bfad4aa` | publish mesh ciudad workflow + C8 |
| **S_SDK** | tip este commit gobierno | pins submodules + acta |

## npm view C8 (lote F5)

| paquete | versión |
| ------- | ------- |
| `@zeus/socket-server` | **0.1.1** |
| `@zeus/mcp-launcher` | **0.1.1** |
| `@zeus/embajador-kit` | **0.1.3** (post Release #14; ver run abajo) |
| `@zeus/startpack-kit` | **0.1.0** |
| `@zeus/startpack-ciudad` | **0.1.0** |
| `@zeus/ciudad` | **0.1.0** |
| `@zeus/operator-ui` | **private** · sello **B** (build-doc) |

## Run-ids verdes (regla 16)

| repo | fase | run-id | URL |
| ---- | ---- | ------ | --- |
| zeus | Release publish mesh (F5a) | **29931698137** | https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29931698137 |
| zeus | Release obra embajador B (#13) | **29935128037** | https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29935128037 |
| zeus | Release version/publish #14 | **29935568597** | https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29935568597 |
| GL | CI tip merge #3 | **29934835759** | https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29934835759 |
| GL | **Publish mesh ciudad** | **29934850683** | https://github.com/alephscriptorium-eng/Z_SDK-games-library/actions/runs/29934850683 |

## Sub-WPs

| id | evidencia |
| -- | --------- |
| **F5a** | [WP-F5a-publish-mesh](WP-F5a-publish-mesh.md) + GL publish `29934850683` · sello [DC-PCO-F5a-operator-ui](../DECISIONES.md#dc-pco-f5a-operator-ui--2026-07-22--cerrada-sello-po--b) = **B** |
| **F5b** | [ACTA-F5b-dos-ciudades-2026-07-22](ACTA-F5b-dos-ciudades-2026-07-22.md) · G0–G6 🟢 |
| **F5c** | [WP-F5c-sidecar-pub-oasis](WP-F5c-sidecar-pub-oasis.md) · PUB 200 · sidecar `<pendiente>` |

## Checklist C1–C8

→ [CHECKLIST-F5-C1-C8-T1](CHECKLIST-F5-C1-C8-T1.md) · **todas muertas o documentadas**.

## Vetos intactos

- No cerrar Z_SDK #4/#5/#6
- E_SDK veto
- No reopen S04 ✅ · S04-v2 sigue parked
