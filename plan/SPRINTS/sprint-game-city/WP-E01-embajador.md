# WP-E01 — Epic embajador (paraguas)

| dato | valor |
|---|---|
| estado | ⬜ **parked** — sin GO · no abrir · sin brief |
| track / prio | FED / — |
| depende de | pavimentación GO-4 (ops) · Z04 ✅ · D-40 firma conector |
| patrón | paraguas tipo [WP-Z05](WP-Z05-engine-evoluciones.md): fases = items; cada una se abre como WP propio con GO |
| overlap pack | Z_SDK #5 (ACL) · Z_SDK #6 (niveles) — **citar, no cerrar** |

## Objetivo

Epic de federación / peercard: kit, tarjeta viajera, niveles y cara visual.
**No se abre el epic** hasta GO del custodio. Las fases viven aquí como items
parked (mismo patrón que Z05 items 3–6).

## Items (fases del paraguas — parked)

| # | Item | Qué ataca | Nota / overlap |
|---|---|---|---|
| 1 | **Kit embajador** | API/contrato mínimo para emitir y consumir credencial de peer | base del resto |
| 2 | **Peercard** | Tarjeta viajera (campos + ciclo de vida; TTL / caducidad) | D-40 = «visor pide card»; firma → [WP-E02](WP-E02-privacidad-federacion.md) / Z_SDK #4 |
| 3 | **Niveles de federación** | Gradiente de confianza / capacidades por peer | overlap Z_SDK #6 (no cerrar) |
| 4 | **Visual** | Cara UI de la tarjeta / presencia federada en visor | no confundir con WP-Z17 |

## Criterios de aceptación (del WP paraguas)

- [ ] Cada fase abierta tiene WP propio + caso de dolor citado (no motivación abstracta).
- [ ] El epic no se 🔶 sin GO explícito del custodio.
- [ ] ACL Z05 item 3 se des-aparca solo cuando este epic abra (enlace BACKLOG).
- [ ] Issues Z_SDK #5/#6 siguen abiertos hasta que el pack los cierre; este epic no los cierra.

## Fuera de alcance

- Abrir el epic o cualquier fase sin GO.
- HOTFIX · CAMPANAS · DE-I8.
- Reopen Z05-f1 / Z09 D3–D4 diferidos.
- Cerrar issues de Z_SDK.

## Related

- Acta pavimentación: `plan/REPORTES/ACTA-OPS-GO4-embajador-pavement-2026-07-21.md`
- Privacidad (handshake/firma): [WP-E02](WP-E02-privacidad-federacion.md) · Z_SDK #4
- Página pública: [WP-E03](WP-E03-tuberia-protegida.md) · WP-I75 ✅
- Pack: Z_SDK #5 · Z_SDK #6
