# WP-E01-f2 — Peercard (tarjeta viajera + TTL)

| dato | valor |
|---|---|
| estado canónico | [BACKLOG.md](BACKLOG.md) · 🔶 GO-E1 |
| track / prio | FED / 1 · ola **EE-1** |
| depende de | **E02** (firma) · E01-f1 (kit) |
| issue | LOCAL bajo S_SDK **#22** |
| guardarraíl | Z_SDK **#6** — lo automático nunca escala a poder (diseño f2/f3) |

## Objetivo

Tarjeta viajera con ciclo de vida (campos + TTL/caducidad) portable hacia
plaza/startpack. Firma crypto = **E02** (no duplicar).

## Entregables

1. Modelo peercard + TTL en `authority-kit` (`issue-peer-card`) / campos
   protocol no-crypto (merge **tras** E02).
2. Wiring mínimo consumidor vía kit (f1).
3. Documentar que niveles/poder = f3 / #6 (no aquí).
4. Reporte: `plan/REPORTES/WP-E01-f2-peercard.md`.

## Criterios de aceptación

- [ ] TTL/ciclo de vida verificable (smoke/test).
- [ ] Firma delegada a E02; rechazo sin firma documentado (consume E02).
- [ ] Ejes **I · II** + ceguera.
- [ ] Diff no pisa paths exclusivos E02.
- [ ] No implementa escalado automático a poder (#6).

## Fuera de alcance

- Crypto/handshake (E02) · f3 niveles · f4 visual · E_SDK · DE-I8 · Z17 reopen.

## Notas

- **Serie tras E02.** Rama: `wp/ee-e01-f2-peercard`.
