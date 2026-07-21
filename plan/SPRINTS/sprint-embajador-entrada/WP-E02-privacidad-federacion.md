# WP-E02 — Privacidad de federación

| dato | valor |
|---|---|
| estado canónico | [BACKLOG.md](BACKLOG.md) · 🔶 GO-E1 |
| track / prio | FED / 1 · ola **EE-1** |
| depende de | Z04 ✅ · D-40 · pavimentación GO-4 |
| overlap pack | **Z_SDK #4** — citar; **no cerrar** |
| issue casa | S_SDK **#23** (umbrella) |

## Objetivo

1. **`ssbId` en el handshake** — identidad = clave pública en el saludo.
2. **Firma de la tarjeta viajera** — peercard firmada; el visor verifica.

Obra de código canónica del pack = **Z_SDK #4**. Este WP trackea el
corte en el sprint; **no duplica ni cierra** #4.

## Entregables

1. Handshake lleva `ssbId` (o equivalente documentado) verificable.
2. Tarjeta viajera firmada; rechazo documentado si la firma falla.
3. Evidencia (test/demo) + ceguera en entregables pack.
4. Reporte: `plan/REPORTES/WP-E02-privacidad-federacion.md`.

## Criterios de aceptación

- [ ] ssbId en handshake verificable.
- [ ] Firma peercard + rechazo si falla.
- [ ] Ejes **I · IV** + ceguera (regla 14 árbol + `git log -p`).
- [ ] Diff solo en `ALCANCE_DIFF` del brief.
- [ ] Z_SDK #4 permanece OPEN hasta cierre en el pack.
- [ ] No abre f3/f4 ni E_SDK.

## Fuera de alcance

- ACL (Z_SDK #5) · niveles (Z_SDK #6 / E01-f3) · visual f4.
- `embajador-kit/**` (f1) · TTL/issue-peer-card campos no-crypto (f2).
- Página pública (E03/I75 ✅).

## Related

- Epic: S_SDK #22 · ficha city fuente parked
- Pack: https://github.com/alephscriptorium-eng/Z_SDK/issues/4
- Norte: startpack-ciudad-v0.1.0 default (corte)
