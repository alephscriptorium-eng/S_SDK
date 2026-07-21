# WP-E02 — Privacidad de federación

| dato | valor |
|---|---|
| estado | ⬜ **parked** — sin GO · no abrir · sin brief |
| track / prio | FED / — |
| depende de | Z04 ✅ · D-40 (firma conector) · pavimentación GO-4 |
| overlap pack | **Z_SDK #4** (ssbId + firma tarjeta) — mismo tema · **citar, no cerrar** |

## Objetivo

Cerrar el hueco de privacidad en el borde federado (tracking en este sprint):

1. **`ssbId` en el handshake** — identidad = clave pública en el saludo, no solo token de sala.
2. **Firma de la tarjeta viajera** — la peercard viaja firmada; el visor verifica, no confía a ciegas.

Obra de código / issue canónico del pack = **Z_SDK #4**. Este WP es la ficha
parked de proyección en game-city; **no duplica ni cierra** #4.

## Criterios de aceptación (cuando abra)

- [ ] Handshake lleva `ssbId` (o equivalente documentado) verificable.
- [ ] Tarjeta viajera firmada; rechazo documentado si la firma falla.
- [ ] Evidencia citable (test o demo) + ceguera en entregables de pack.
- [ ] No abre E01 ni fases del embajador por sí solo.
- [ ] Z_SDK #4 permanece hasta cierre en el pack (no cerrar desde aquí).

## Fuera de alcance

- Abrir sin GO · brief · HOTFIX.
- ACL direccional (Z_SDK #5) · niveles (Z_SDK #6 / E01 item 3) — otros issues.
- Página pública (E03; obra I75 ✅).

## Related

- Epic embajador (paraguas): [WP-E01](WP-E01-embajador.md)
- Página tubería: [WP-E03](WP-E03-tuberia-protegida.md) · WP-I75 ✅
- Pack: https://github.com/alephscriptorium-eng/Z_SDK/issues/4
