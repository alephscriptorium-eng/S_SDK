# WP-S05 · site-web — reporte

| dato | valor |
| ---- | ----- |
| agente | bosque-orq (rescate tras worker abandonado) |
| fecha | 2026-07-22 |
| rama | `wp/sb-s05-site-web` |
| commits | tip `1915575` · merge `b52c4cf` |
| eje(s) CA | III · IV + ceguera |
| estado propuesto | listo para revisión → **aceptado ✅** |

## Qué se hizo

Portal `docs/` alineado a consumo canónico `@0.4.0` (única fuente
`guide/consumo`); badge método swarm → **v0.6**; método `site-web` engancha
`docs:verificar` en plantilla CI; piel zine sin CDN. Gates build +
verificar-sitio verdes en worktree.

## Archivos tocados

- `docs/guide/consumo.md`, `activar.md`, `index.md`, `proyecto.md`, `verdad-checks.json`
- `docs/.vitepress/skills-meta.js`, `theme/custom.css`
- `skills/site-web/SKILL.md`, `protocolo-ghpages.md`, plantillas `docs.yml`

## Evidencia

```
npm run docs:build → build complete
npm run docs:verificar → OK (internos/anclas 0; verdad consistente)
ceguera skills/site-web + docs: 0
git log -p tokens marco: 0
∩ paths vs S01/S02: ∅
```

## Auto-revisión

- [x] Diff `skills/site-web/**` + `docs/**` (sin CHANGELOG en tip; consolidado post-merge)
- [x] Eje III: consumo canónico una sola fuente
- [x] Eje IV: build + verificar-sitio como segundo cliente del método
- [x] Ceguera 0

## Revisión del orquestador

**Aceptado ✅** · merge `b52c4cf`.
