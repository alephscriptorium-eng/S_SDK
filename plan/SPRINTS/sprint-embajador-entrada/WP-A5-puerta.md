# WP-A5 — Puerta de externos (SEMILLA-ARG §A5)

| dato | valor |
|---|---|
| estado canónico | [BACKLOG.md](BACKLOG.md) · 🔶 GO-E1 |
| track / prio | FED / 1 · ola **EE-1** |
| depende de | **E02 · E01-f1 reales** (no stubs) · E01-f2 preferible (consumo) |
| fuente | [SEMILLA-ARG §A5](../sprint-game-city/SEMILLA-ARG.md) |
| issue | LOCAL bajo S_SDK **#22** |
| árbol dominante | **Z17-zeus** (`zeus-sdk`) · satélites Z04-GL · webs/S_SDK |

## Objetivo

Unir superficies **ya existentes** (Z04 rabbits · webs · tracker proyectado ·
Z17 operator-ui) en una **puerta** donde el amigo entra con peercard y
arranca con `startpack-ciudad-v0.1.0` como base default.
**Ninguna superficie nueva.**

## Entregables

1. Cableado documentado + mínimo wiring de entrada (paths pineados en
   [BRIEF-A5](../../REPORTES/BRIEF-WP-A5-puerta.md) · DC-EE-A5-paths).
2. Default startpack tag/ref `startpack-ciudad-v0.1.0` visible en el flujo.
3. 2º cliente / evidencia eje IV (puerta usable por más de un consumidor).
4. Reporte: `plan/REPORTES/WP-A5-puerta.md`.

## Criterios de aceptación

- [ ] Norte CA experiencia: peercard → startpack-ciudad-v0.1.0 default.
- [ ] Cero superficie nueva (solo existentes).
- [ ] Diff solo en paths pineados (zeus operator-ui · GL federation/docs ·
      S_SDK tuberia + reporte).
- [ ] Ejes **I · IV** + ceguera.
- [ ] No inventa canal · no E_SDK · no reopen city WPs.

## Fuera de alcance

- E01-f3/f4 · E_SDK · DE-I8 · crypto E02 (salvo consumir) · kit greenfield ·
  **f2** (`authority-kit` / `protocol` peercard) · `external-handshake.md`
  (E02) · `ciudad/src/**` · `startpack-ciudad/**`.

## Notas

- Rama: `wp/ee-a5-puerta`. Worktree dominante zeus; satélites GL/S_SDK
  solo si hay diff. Firma+kit **reales** post-E02+f1; A5 no stubbea.
