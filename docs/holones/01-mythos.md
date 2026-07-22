# 01 — Mythos

**Capa:** cosmológica — un solo cosmos, sin afuera.
**Origen:** fuente directa (mundo zeus).
**Estado:** ancla técnica viva · narrativa `<pendiente de ratificación>`.
**Registro interno (read-only):** `DEVOPS/METODOLOGIA/holones/01-mythos.md`.

## Identidad

Primer eslabón de la holarquía. Cosmos cerrado: una autoridad que muta el
mundo; el resto proyecta e intenta. La ceguera ascendente es ley: el árbol
del holón 01 no conoce a SCRIPT_SDK ni a la holarquía (DE-I5).

Interpretación narrativa del conjunto: `<pendiente de ratificación>`.

## Ancla técnica

Submodules read-only en este repo (DE-I5 · DE-I8 · WP-I03). I31 **no**
muta `HOLONES/`.

| Ancla | Remoto | Nota |
| ----- | ------ | ---- |
| `HOLONES/01-mythos/zeus-sdk` | [alephscriptorium-eng/Z_SDK](https://github.com/alephscriptorium-eng/Z_SDK) | núcleo |
| `HOLONES/01-mythos/games-library` | [alephscriptorium-eng/Z_SDK-games-library](https://github.com/alephscriptorium-eng/Z_SDK-games-library) | library de juegos |

**Sello anclas (git):** `.gitmodules` declara ambos; `git submodule status`
en worktree I31 @ `9c26edf`+ → gitlinks
`0afe1e1…` (zeus-sdk) y `b463a1a…` (games-library). Fecha: 2026-07-19.

## Confianza / tubería

Pregunta recurrente al entrar al juego: ¿van protegidas la tubería y la
mensajería? Respuesta honesta (hecho con evidencia · abierto con issue):

→ [La tubería, protegida](/guide/tuberia-protegida)

## Superficies públicas verificadas

Cada afirmación lleva sello. Lo no comprobado va como `<pendiente>`.

### Docs — Z_SDK

- **URL:** https://z-sdk.escrivivir.co/
- **Afirmación:** portal docs del núcleo Mythos (VitePress).
- **Sello:** navegada 2026-07-19 (browser Playwright) · título de página
  `Zeus SDK` · H1 «Z_SDK / Juegos de Ventana de Contexto» · tagline
  «FOSS Docs: framework ARG para comunidades.»

### Docs — games library

- **URL:** https://games.z-sdk.escrivivir.co/
- **Afirmación:** catálogo de juegos hermano del núcleo.
- **Sello:** navegada 2026-07-19 (browser Playwright) · título
  `Zeus Games Library` · H1 «Juegos Z_SDK / Catálogo» · cards delta /
  pozo / solve-coagula / call4makers visibles.

### Registry `@zeus`

- **Canal:** `https://npm.scriptorium.escrivivir.co`
- **Afirmación:** scope `@zeus` publica en el Verdaccio canónico
  (~20 paquetes resueltos hoy).
- **Sello:** comando real 2026-07-19 —
  `npm view @zeus/<pkg> version --registry=https://npm.scriptorium.escrivivir.co`
  para cada fila:

| paquete | versión |
| ------- | ------- |
| `@zeus/acta-kit` | `0.1.1` |
| `@zeus/app-shell` | `0.2.1` |
| `@zeus/authority-kit` | `0.2.0` |
| `@zeus/ciudad-lifecycle` | `0.1.1` |
| `@zeus/embajador-kit` | `0.1.1` |
| `@zeus/feed-kit` | `0.3.0` |
| `@zeus/firehose-core` | `0.1.2` |
| `@zeus/game-engine` | `0.1.1` |
| `@zeus/http-contract` | `0.1.2` |
| `@zeus/lifecycle-kit` | `0.1.1` |
| `@zeus/linea-kit` | `0.2.0` |
| `@zeus/operator-bridge` | `0.1.0` |
| `@zeus/parte-kit` | `0.1.1` |
| `@zeus/playbook-kit` | `0.1.2` |
| `@zeus/player-mcp-kit` | `0.1.2` |
| `@zeus/presets-sdk` | `0.1.2` |
| `@zeus/protocol` | `0.2.0` |
| `@zeus/room-client-browser` | `0.1.2` |
| `@zeus/rooms` | `0.1.0` |
| `@zeus/story-board-schema` | `0.2.0` |
| `@zeus/test-utils` | `0.1.2` |
| `@zeus/ui-3d-kit` | `0.1.1` |
| `@zeus/ui-kit` | `0.1.2` |
| `@zeus/view-kit` | `0.1.2` |
| `@zeus/volumes-ops` | `0.2.1` |
| `@zeus/webrtc-signaling` | `0.2.1` |

Conteo sellado (histórico I41): **21**. **Addenda 2026-07-22 (C04 /
kits FOSS):** `npm view` ×5 en
`https://npm.scriptorium.escrivivir.co` → `@zeus/embajador-kit@0.1.1` ·
`parte-kit@0.1.1` · `acta-kit@0.1.1` · `lifecycle-kit@0.1.1` ·
`ciudad-lifecycle@0.1.1` (Release
[29887037565](https://github.com/alephscriptorium-eng/Z_SDK/actions/runs/29887037565)
verde · tip zeus `73cb0c2`). Catálogo vivo arriba = 21 + 5 kits.

### GitHub — repos

- **Z_SDK:** https://github.com/alephscriptorium-eng/Z_SDK
  - **Sello:** navegada 2026-07-19 · título
    `GitHub - alephscriptorium-eng/Z_SDK: <out of order> <experimental> <no suitable for work>`
- **Z_SDK-games-library:** https://github.com/alephscriptorium-eng/Z_SDK-games-library
  - **Sello:** navegada 2026-07-19 · título
    `GitHub - alephscriptorium-eng/Z_SDK-games-library: Z_SDK games library — juegos Zeus y releases de datos (hermano de Z_SDK)`

### GitHub — Releases (núcleo)

- **URL:** https://github.com/alephscriptorium-eng/Z_SDK/releases
- **Afirmación:** releases por paquete `@zeus/*` en el remoto del núcleo.
- **Sello:** navegada 2026-07-19 · título `Releases · alephscriptorium-eng/Z_SDK`
  · Latest visible `@zeus/webrtc-signaling@0.2.1` · también listados
  `@zeus/volumes-ops@0.2.1`, `@zeus/view-kit@0.1.2`, `@zeus/protocol@0.2.0`,
  entre otros.

Start packs / releases de la games-library: ver catálogo vivo en
https://games.z-sdk.escrivivir.co/releases (enlace del portal navegado;
página releases del repo games: `<pendiente de re-navegar en I41>` si se
exige URL aparte).

## Qué no afirma esta ficha

- Roadmap de olas del mundo zeus: vive en su plan; aquí no se copia.
- Material narrativo (moira, panteón, verso): ver registro interno; la
  ratificación pública queda `<pendiente>`.
- Holones 02–07: fichas en `docs/holones/` (WP-I32); esta ficha no las
  edita.
