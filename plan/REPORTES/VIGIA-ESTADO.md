# ESTADO DEL VIGÍA — swarm holón 07 (rolling; léeme al retomar vigilancia)

Actualizado: 2026-07-19 (post-revisión Ola I3). Protocolo: skill
`vigilancia` (`@alephscript/skills-scriptorium@0.1.0`); doctrina previa en
backstage (`VIGILANCIA/ESTACION.md`, gitignored). Actas de este mundo:
`VIGIA-2026-07-19-arranque-I0.md` · `INTERVENCION-2026-07-19-estabilizacion.md`
· esta.

## Revisión Ola I3 (2026-07-19, de facto — vigía + worker independiente)

| WP | Veredicto vigía | Nota |
|---|---|---|
| I30 activación en casa | **Aceptable** | plan/roles ausente ✅; dedup = skill; WEBS/ instancia real |
| I31 portada + Mythos | **Aceptable** — el mejor sellado del lote | cifra **exacta**: 21 paquetes @zeus contados contra `/-/all` del registry, 1:1 con la ficha; URLs 200; control negativo E404 correcto |
| I32 fichas 02–07 | **Aceptable** | roadmaps uniformes; E0–E3 ⬜ fiel; S14 🔶 fiel; Jekyll aleph 200 |
| I33 pack servido | **Aceptable** | espejo por `scripts/sync-ensayo.mjs` en build (no copia tracked, gitignored); dist `cmp` **byte-a-byte idéntico** al original — DA-4 y procedencia intactas |
| **Ola I3** | **Aceptable-con-nota** | ver hallazgo V1 |

## Sitio en producción — verificado C8/C8-ampliado (2026-07-19 ~19:20Z)

- `https://s-sdk.escrivivir.co/` **VIVO**: Pages `build_type=workflow`,
  CNAME ok, **HTTPS enforced, cert aprobado (expira 2026-10-17)**.
- Clase completa 200: portada · 7 fichas `/holones/0X-*` · `/autoridades/*`
  · `/guide/publicar-la-web` · `/ensayo/` + `fanzine.css` · 4 assets del
  bundle. CI `Docs` success ×3 en main; `main` == `origin/main` = `4fc8d71`.

## Hallazgos abiertos (por severidad)

- **V1 (menor, público):** `docs/.vitepress/theme/custom.css:2` conserva la
  ruta absoluta `C:\Users\aleph\OASIS\...` como comentario de procedencia
  (herencia WP-I10; señalada por I31 e I32 como fuera de alcance — 3 WPs
  sin corregirla). El repo es público → la ruta está servida en GitHub.
  Destino: micro en WP-I27 o housekeeping pre-I40-cierre. Regla 12.
- **V2 (cosmético):** commit `666cefd` mezcla «aceptar I31» + «brief I33»
  — deuda de commit-atómico ya reconocida para el skill v0.2 (WP-I27).
- **V3 (higiene):** ramas `wp/i30-*` y `wp/i32-*` mergeadas sin borrar
  (checklist regla 10; i31/i33 sí se borraron).

## Gates externos vivos (nunca silencio)

- «esperando: entrega **I52** de custodio a zeus» — nota lista
  (`ENTREGA-VIGIA-2026-07-19b-scrub-rutas.md`); estado del leak en el
  remoto de zeus `⏳ sin re-verificar` en esta ronda.
- «esperando: **WP-I27**» (skill v0.2 + scrub «zeus» library + Pages
  library — estado Pages library `⏳ sin re-verificar` en esta ronda).
- WP-I40: Pages/DNS/HTTPS del raíz **hechos y verificados** (arriba);
  falta solo el cierre formal del WP con acta (I41: verificación completa
  + acta — la evidencia de esta estación le sirve de insumo).

## Rutina al retomar

Pulso: `git fetch` + main vs origin · worktrees/stash/ramas ·
`gh run list -R alephscriptorium-eng/S_SDK -L3` · curl clase del sitio.
Review de facto por WP cerrado. C8: canal real siempre; navegación para
SPA (lección U138). Falso positivo no es inocuo: elevar solo anomalía real.
