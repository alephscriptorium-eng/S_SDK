# Acta · PROYECCIÓN-ARCO CIUDAD-REAL · 2026-07-22

| dato | valor |
| ---- | ----- |
| GO | **PROYECCIÓN-ARCO** (opt-in PO · carril city) |
| fuente DC | **DC-CR-proyeccion-arco** (SUPERSEDE DC-CR-proyeccion-local) |
| house | **DE-I23** |
| precondición | DE-I22 convivencia v1.1 @ `b59affc` |
| tip S | ver commit gobierno de este acta |

## Claim → acta (regla 17 · post-apply)

| claim | URL | estado |
| ----- | --- | ------ |
| Umbrella CR-1 + C04 | https://github.com/alephscriptorium-eng/S_SDK/issues/30 | **CLOSED** (✅ evidencia) |
| C05 ciudadano-agente | https://github.com/alephscriptorium-eng/S_SDK/issues/31 | **OPEN** |
| Panorámica Z_SDK #2 | https://github.com/alephscriptorium-eng/Z_SDK/issues/2#issuecomment-5041634410 | publicado (ciego) |
| Panorámica GL #1 | https://github.com/alephscriptorium-eng/Z_SDK-games-library/issues/1#issuecomment-5041634562 | publicado (ciego) |

## Evidencia umbrella #30 (✅→closed)

| id | tip | nota |
| -- | --- | ---- |
| C01 | GL `19317c1` | salud real ↔ mapa |
| C02 | zeus `1df2fd2` | ACL · Z_SDK #5 OPEN |
| C03 | GL `f388451` | edificios ↔ catálogo |
| C04 | zeus `73cb0c2` | kits FOSS · PR#8+#9 |

Actas previas: [ACTA-OLA1](./ACTA-OLA1-CIUDAD-REAL-cierre-2026-07-22.md) ·
[ACTA-CR1](./ACTA-CR1-CIUDAD-REAL-cierre-2026-07-22.md) ·
[WP-C04](./WP-C04-kits-publicos.md).

## Hermanos (citar; no duplicar)

| arco | issues |
| ---- | ------ |
| VIDA-1 | [#28](https://github.com/alephscriptorium-eng/S_SDK/issues/28) · [#29](https://github.com/alephscriptorium-eng/S_SDK/issues/29) |
| EE-1 | [#22](https://github.com/alephscriptorium-eng/S_SDK/issues/22) · [#23](https://github.com/alephscriptorium-eng/S_SDK/issues/23) |

## Ceguera panorámicas (ANTES de publicar)

| check | resultado |
| ----- | --------- |
| `CEGUERA_PATTERN` env | **unset** → house-fallback |
| patrón house | `swarm\|BRIEF\|WP-\|plan/\|DE-I\|vig[íi]a\|orquestador\|custodio\|SCRIPT_SDK\|HOLONES\|hol[oó]n\|holarqu[ií]a\|juntura\|aleph-scriptorium\|BACKLOG\|worktree\|sync-map\|LOCAL-ONLY\|DC-CR\|PROYECCI\|mediaci\|\bmarco\b\|addenda\|instancia-ejemplo` |
| draft Z#2 | **0 hits** |
| draft GL#1 | **0 hits** |
| método | .NET `Regex.Matches` IgnoreCase sobre drafts TEMP · gate PASS → `gh issue comment` |

Patrón camino-U: idioma del repo (zeus / games-library), sin tokens de
método/marco.

## Sync-map (post-apply)

Mapa: `plan/SPRINTS/sprint-ciudad-real/.sync-map.json`

```json
{
  "CR1_C04_umbrella": 30,
  "C01": 30,
  "C02": 30,
  "C02_overlap": "Z_SDK#5",
  "C03": 30,
  "C04": 30,
  "C05": 31
}
```

## Vetos respetados

- [x] no merge C05
- [x] no E_SDK
- [x] no force
- [x] Z_SDK #5/#6 OPEN (no cerrar)
- [x] no tocar worktrees/paths C05 (player-mcp room-bridge / ciudad wiring)
