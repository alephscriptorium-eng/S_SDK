# CHECKLIST F5 · fricciones T1 C1–C8 → cierre

> Absorción de [ACTA-T1-FRICCION-2026-07-22](ACTA-T1-FRICCION-2026-07-22.md)
> §«Qué costó». Al cerrar ola F5 (GO-5/GO-6), cada fila = **muerta**
> (evidencia) o **documentada** (gap sellado / parked explícito).
> No reabrir T1 ✅.
> Actualizado post-F5a parcial · 2026-07-22 · [reporte F5a](WP-F5a-publish-mesh.md).

| id | fricción T1 (resumen) | vehículo F5 | estado cierre |
|---|---|---|---|
| **C1** | Stack live no es C8-puro (`ciudad` / startpack / socket / operator-ui 404) | **F5a** publish lote · **F5b** prueba live C8 | 🔶 **parcial** · socket+mcp-launcher C8 ✅ · ciudad/startpack/operator-ui **404** (GL secrets + sello PO) |
| **C2** | `ciudad-lifecycle` tumba install → `@zeus/mcp-launcher@*` 404 | **F5a** des-404 `mcp-launcher` | ✅ **muerta** · `@zeus/mcp-launcher@0.1.1` en C8 (`npm view`) |
| **C3** | Nombres brief ≠ npm (`parte`/`acta` vs `*-kit`) | S04 mapa ✅ · F5 docs publish / skill | ✅ **documentada** · citar [ACTA-S04](ACTA-S04-aceptacion-2026-07-22.md) mapa `*-kit` |
| **C4** | Deriva pin protocol 0.3.0 vs 0.4.0 | F5a changeset rango / nota semver | ✅ **documentada** · fixture 0.3 vs registry 0.4; sin bump semver en F5a |
| **C5** | Tip zeus incompleto room (`mcp-core-sdk` ausente) | **F5a** socket-server publicado + deps · **F5b** scratch C8 | 🔶 **mitigada en canal** · socket-server@0.1.1 declara `mcp-core-sdk@^1.5.0` (C8 tiene 1.5.0); tip monorepo incompleto = fuera · F5b re-verifica scratch |
| **C6** | operator-ui private / sin dist / build Angular | **F5a** propuesta dist vs build-doc · **PO sella** | ⬜ **abierta** · propuesta worker **B** (build-doc) · [sello PO pendiente](../DECISIONES.md#dc-pco-f5a-operator-ui--2026-07-22--abierta-espera-sello-po) |
| **C7** | e2e monorepo asume hermano `../Z_SDK-games-library` | **F5b** scratch sin hermano · path portable | ⬜ **abierta** · vehículo F5b (parked) |
| **C8** | PowerShell expande `@zeus` | nota tooling (S04 F8) · repetir en F5b acta si aplica | ✅ **documentada** · citar S04 F8 / quoting `"@zeus/..."` |

## Regla de cierre

- **Muerta** = comando/evidencia en acta F5a o F5b que muestra el síntoma
  T1 ya no ocurre en C8.
- **Documentada** = gap consciente con dueño (PO sello / parked / veto)
  y path citable — no «se arreglará».
- F5c **no** es vehículo de C1–C8 (oasis distinto).

## Vetos al cerrar

Z_SDK #4/#5/#6 OPEN · E_SDK · claim sin acta/SHA · reopen T1/S04.
· **NO** marcar F5a ✅ total ni despachar F5b hasta ciudad/startpack en C8.
