# WP-F5a — PUBLICAR lote mesh

| dato | valor |
|---|---|
| estado | 🔶 · **sin despacho** hasta **R17-city** PASS |
| track | PUBLISH / changesets + bot Release + `npm view` C8 |
| depende de | R17-city PASS · T1 ✅ (fricciones C1/C2/C6) · DC-CR-kits-foss |
| paraguas | [WP-F5](WP-F5.md) |
| issue | LOCAL-ONLY |
| brief | [BRIEF-F5a](BRIEFS/BRIEF-WP-F5a.md) |

## Objetivo

Publicar (canal C8 · `npm.scriptorium.escrivivir.co`) el lote mesh que
T1 halló **404**:

| paquete | nota T1 | intención F5a |
|---|---|---|
| `@zeus/ciudad` | 404 | **public** · clase semilla (DC-CR-kits-foss) |
| `@zeus/startpack-ciudad` | 404 | **public** · semilla |
| `@zeus/socket-server` | 404 · `private:true` árbol | des-private + publish (o acta PO si veto) |
| `@zeus/mcp-launcher` | 404 · tumba `ciudad-lifecycle` (C2) | **des-404 C2** · publish |
| `@zeus/operator-ui` | 404 · private · sin dist | worker **propone** publish `dist/` vs build-doc; **PO sella** |

Tren opcional mismo changeset batch:

- `@zeus/embajador-kit` — follow-up S04: tarball con `skill/`
  ([ACTA-S04](REPORTES/ACTA-S04-aceptacion-2026-07-22.md) · sin reopen S04)

Entregable: changesets + Release bot + evidencia `npm view` C8 por
paquete (o gap explícito sellado por PO).

## CA (ejes I·V + ceguera)

- [ ] Changesets (+ bot Release) para el lote acordado; tip SHA citable.
- [ ] `npm view <pkg> version --registry https://npm.scriptorium.escrivivir.co`
      = versión publicada **o** veto PO documentado (no claim fantasma).
- [ ] C2 muerto o documentado: `@zeus/mcp-launcher` resoluble desde C8
      (o dependencia alternativa sellada).
- [ ] Operator-ui: propuesta worker + **sello PO** en reporte (dist vs doc).
- [ ] Embajador-kit `skill/` en tarball **si** viaja en este tren (nota;
      no bloquea lote mesh).
- [ ] Ceguera regla 1 = 0 en obra producto. Z#4/#5/#6 OPEN citados.

## Fuera

- Despacho sin R17-city PASS.
- E_SDK · cerrar Z#4/#5/#6 · reopen S04 ✅ · obra WW docs.
- Config custodio / secretos oasis en árbol (eso es F5c, fuera).
- Inventar publish de apps sin sello PO.
