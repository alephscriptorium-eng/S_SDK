# WP-S01 · swarm-vnext — reporte

| dato | valor |
| ---- | ----- |
| agente | bosque-orq (rescate tras worker abandonado) |
| fecha | 2026-07-22 |
| rama | `wp/sb-s01-swarm-vnext` |
| commits | tip `5db593d` · merge `6fe0b31` |
| eje(s) CA | I · III + ceguera |
| estado propuesto | listo para revisión → **aceptado ✅** |

## Qué se hizo

Se documentó el contrato de **convivencia multi-orquestador** (método v0.6)
como fuente única: partición de obra/gobierno, V2 por carril, vigía único
`Rn-<carril>`, higiene §8, e2e por vías permitidas, freeze por locks.
Caso fundante 2026-07-22 como lección abstracta (eval → enmiendas v1.1 →
reconciliación → PASS), sin datos de instancia. ORQUESTADOR/ciclo enlazan
sin re-declarar el cuerpo.

## Archivos tocados

- `skills/swarm-orquestacion/reference/convivencia-multi-orquestador.md` (creado)
- `SKILL.md`, `README.md`, `reference/ciclo.md`, `reglas-metodo-v05.md`, `roles/ORQUESTADOR.md`
- `CHANGELOG.md` `[Unreleased]` WP-S01

## Evidencia

```
ceguera árbol skills/swarm-orquestacion: 0
git log -p (WP tip vs base) tokens marco: 0
∩ paths vs S02/S05: ∅
```

## Auto-revisión

- [x] Diff solo `skills/swarm-orquestacion/**` + CHANGELOG
- [x] Eje I: ORQUESTADOR/ciclo consumen el contrato
- [x] Eje III: fuente única convivencia (sin one-liners duplicados)
- [x] Ceguera árbol + log-p

## Revisión del orquestador

**Aceptado ✅** · merge `6fe0b31` en main hermano.
