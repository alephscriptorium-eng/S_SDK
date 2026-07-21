# WP-I76 · skills-040-reglas-16-17 — reporte

| dato | valor |
| ---- | ----- |
| agente | gobierno+obra holón 07 / skills (ola I-skills) |
| fecha | 2026-07-21 |
| estado | ✅ |

## Qué se hizo

Subida de PRACTICAS δ10–δ11 al paquete como **reglas de método 16–17**
(contrato v0.5 / semver **0.4.0**), regeneración de
`skills.s-sdk.escrivivir.co` (hueco GO-5) y consumo en casa.

### Gap localizado

| Casa (PRACTICAS) | Paquete antes | Paquete ahora |
| ---------------- | ------------- | ------------- |
| δ1–δ9 (espejo parcial de método 1–15 / ejes / ceguera) | ya en `@0.3.4` / v0.4 | intacto |
| δ10 cierre run-id verde | **faltaba** | **regla 16** |
| δ11 sync-map post-apply | **faltaba** | **regla 17** |

«9 reglas» del briefing = δ1–δ9 ya asentadas en método; lo que **subió**
en esta ola = δ10–δ11 → 16–17.

### Skills-library (obra)

| SHA | nota |
| --- | ---- |
| `e1308cc` | WP-16 feat reglas 16–17 |
| `d3295eb` | WP-17 chore(release) 0.4.0 |
| `cf058df` | reporte WP-17 + run-ids |

- Publish: [29865483731](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29865483731) success
- Docs: [29865486164](https://github.com/alephscriptorium-eng/S_SDK-skills-library/actions/runs/29865486164) success
- `npm view @alephscript/skills-scriptorium@0.4.0` → `0.4.0`
- Portal: https://skills.s-sdk.escrivivir.co/skills/swarm-orquestacion → badge **v0.5.0**

### Holón 07 (consumo)

- `package-lock.json` → tarball `0.4.0` (rango `0.x` en `package.json`)
- `npm run skills:sync` → `.claude/skills/` @ 0.4.0 + `reglas-metodo-v05.md`
- `plan/PRACTICAS.md` δ9–δ11 citan el contrato nuevo

## CA

- [x] Reglas 16–17 en paquete + espejo local
- [x] Portal regenerado (HTTP 200, badge v0.5.0)
- [x] Run-ids Publish + Docs citados (δ10 / regla 16)
- [x] Rango `0.x` conservado (DE-I17)
