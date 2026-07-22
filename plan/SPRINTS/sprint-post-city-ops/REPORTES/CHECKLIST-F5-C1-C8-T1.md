# CHECKLIST F5 · fricciones T1 C1–C8 → cierre

> Absorción de [ACTA-T1-FRICCION-2026-07-22](ACTA-T1-FRICCION-2026-07-22.md)
> §«Qué costó». Al cerrar ola F5 (GO-5/GO-6), cada fila = **muerta**
> (evidencia) o **documentada** (gap sellado / parked explícito).
> No reabrir T1 ✅.

| id | fricción T1 (resumen) | vehículo F5 | estado cierre |
|---|---|---|---|
| **C1** | Stack live no es C8-puro (`ciudad` / startpack / socket / operator-ui 404) | **F5a** publish lote · **F5b** prueba live C8 | ⬜ abierta |
| **C2** | `ciudad-lifecycle` tumba install → `@zeus/mcp-launcher@*` 404 | **F5a** des-404 `mcp-launcher` | ⬜ abierta |
| **C3** | Nombres brief ≠ npm (`parte`/`acta` vs `*-kit`) | S04 mapa ✅ · F5 docs publish / skill | ⬜ documentar en F5a reporte o citar S04 |
| **C4** | Deriva pin protocol 0.3.0 vs 0.4.0 | F5a changeset rango / nota semver | ⬜ abierta |
| **C5** | Tip zeus incompleto room (`mcp-core-sdk` ausente) | **F5a** socket-server publicado + deps · **F5b** scratch C8 | ⬜ abierta |
| **C6** | operator-ui private / sin dist / build Angular | **F5a** propuesta dist vs build-doc · **PO sella** | ⬜ abierta |
| **C7** | e2e monorepo asume hermano `../Z_SDK-games-library` | **F5b** scratch sin hermano · path portable | ⬜ abierta |
| **C8** | PowerShell expande `@zeus` | nota tooling (S04 F8) · repetir en F5b acta si aplica | ⬜ documentar / muerta si ya en skill |

## Regla de cierre

- **Muerta** = comando/evidencia en acta F5a o F5b que muestra el síntoma
  T1 ya no ocurre en C8.
- **Documentada** = gap consciente con dueño (PO sello / parked / veto)
  y path citable — no «se arreglará».
- F5c **no** es vehículo de C1–C8 (oasis distinto).

## Vetos al cerrar

Z_SDK #4/#5/#6 OPEN · E_SDK · claim sin acta/SHA · reopen T1/S04.
