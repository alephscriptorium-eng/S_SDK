# LORE-HM · capa SOLID (WP-SDK-L03)

> Diseño **desde v1** con adapters escalonados. Incubación bajo
> `NETWORK-ENGINE/LANGUAGES/lore-hm/solid/`. **No** es runtime Solid/CSS.
> **No** afirma que [Z_SDK#55](https://github.com/alephscriptorium-eng/Z_SDK/pull/55)
> esté implementado — es insumo **OPEN** por curar.

## Mandato

Dos representaciones coordinadas (wire autoritativo · vista no autoritativa),
identidad triple jamás fusionada, `PodProtocol` ≠ providers, relay WAC/ACP sin
autoridad, planos Room/L2 ≠ Notifications/L1, bridge MCP↔Solid con tools ≠
predicados RDF automáticos, política DIC-4, conformidad escalonada con lo que
cada peldaño **no** garantiza.

| atributo | valor | estado |
| -------- | ----- | ------ |
| WP | WP-SDK-L03 | **verificada** |
| Base incubación | L02 (`lore-hm/`) | **verificada** |
| Runtime CSS/LDP | ninguno en este WP | **verificada** |
| Insumo Z_SDK#55 | OPEN · commit `34613c1` · por curar | **verificada** (2026-08-02) |
| Package npm | ninguno | **verificada** |

## Árbol

| ruta | función |
| ---- | ------- |
| [`docs/CONFORMIDAD-ESCALONADA.md`](docs/CONFORMIDAD-ESCALONADA.md) | v1→v3 + lo que cada peldaño NO garantiza |
| [`docs/DIC-4-HASH.md`](docs/DIC-4-HASH.md) | sha256 bytes default · RDFC-1.0 medido · vista ≠ huellaLedger |
| [`docs/Z_SDK-55-INSUMO.md`](docs/Z_SDK-55-INSUMO.md) | cita URL+commit+OPEN; prohibido afirmar implementado |
| [`docs/VOCABULARIO.md`](docs/VOCABULARIO.md) | reuso AS2 / PROV-O / DCTERMS antes de acuñar |
| [`docs/IDENTIDAD-TRIPLE.md`](docs/IDENTIDAD-TRIPLE.md) | WebID · PeerCard · ssbId |
| [`docs/POD-WAC-ACP.md`](docs/POD-WAC-ACP.md) | PodProtocol, providers, relay |
| [`docs/PLANOS-EVENTOS.md`](docs/PLANOS-EVENTOS.md) | Room/L2 vs Notifications/L1 |
| [`docs/BRIDGE-MCP.md`](docs/BRIDGE-MCP.md) | resources passthrough · tools ≠ RDF auto |
| [`schemas/`](schemas/) | JSON Schema wire · context JSON-LD · SHACL |
| [`src/`](src/) | contratos TypeScript mínimos |
| [`fixtures/`](fixtures/) | ejemplo wire + vista |
| [`scripts/verificar-solid-l03.mjs`](scripts/verificar-solid-l03.mjs) | check local |

## Verificación local

```bash
node NETWORK-ENGINE/LANGUAGES/lore-hm/solid/scripts/verificar-solid-l03.mjs
```

## Herencia

- L02 tipestate / cinco primitivas (no se alteran aquí)
- L01 `SOLID.md` dossier (RO conceptual; este árbol materializa el diseño L03)
- Verde **local** hasta espejo CI
