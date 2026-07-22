# CHECKLIST F5 · fricciones T1 C1–C8 → cierre

> Absorción de [ACTA-T1-FRICCION-2026-07-22](ACTA-T1-FRICCION-2026-07-22.md)
> §«Qué costó». Al cerrar ola F5 (GO-5/GO-6), cada fila = **muerta**
> (evidencia) o **documentada** (gap sellado / parked explícito).
> No reabrir T1 ✅.
> Actualizado cierre F5 · 2026-07-22 · [ACTA-F5](ACTA-F5-cierre-2026-07-22.md).

| id | fricción T1 (resumen) | vehículo F5 | estado cierre |
|---|---|---|---|
| **C1** | Stack live no es C8-puro (`ciudad` / startpack / socket / operator-ui 404) | **F5a** publish · **F5b** live C8 | ✅ **muerta** (mesh) · ciudad/startpack/socket/mcp-launcher C8 · UI = B |
| **C2** | `ciudad-lifecycle` tumba install → `@zeus/mcp-launcher@*` 404 | **F5a** des-404 `mcp-launcher` | ✅ **muerta** · `@zeus/mcp-launcher@0.1.1` |
| **C3** | Nombres brief ≠ npm (`parte`/`acta` vs `*-kit`) | S04 mapa ✅ | ✅ **documentada** · [ACTA-S04](ACTA-S04-aceptacion-2026-07-22.md) |
| **C4** | Deriva pin protocol 0.3.0 vs 0.4.0 | nota semver | ✅ **documentada** · fixture 0.3 vs registry 0.4 |
| **C5** | Tip zeus incompleto room (`mcp-core-sdk` ausente) | **F5a**+**F5b** scratch C8 | ✅ **muerta** en scratch · socket C8 arranca |
| **C6** | operator-ui private / sin dist / build Angular | sello PO | ✅ **documentada** · sello **B** build-doc ([DC](../DECISIONES.md#dc-pco-f5a-operator-ui--2026-07-22--cerrada-sello-po--b)) |
| **C7** | e2e monorepo asume hermano `../Z_SDK-games-library` | **F5b** scratch | ✅ **muerta** · [ACTA-F5b](ACTA-F5b-dos-ciudades-2026-07-22.md) |
| **C8** | PowerShell expande `@zeus` | S04 F8 · F5b | ✅ **documentada** · quoting `"@zeus/..."` |

## Regla de cierre

- **Muerta** = comando/evidencia en acta F5a o F5b que muestra el síntoma
  T1 ya no ocurre en C8.
- **Documentada** = gap consciente con dueño (PO sello / parked / veto)
  y path citable — no «se arreglará».
- F5c **no** es vehículo de C1–C8 (oasis distinto).

## Vetos al cerrar

Z_SDK #4/#5/#6 OPEN · E_SDK · claim sin acta/SHA · reopen T1/S04.
