# WP-I12 · publicar-la-web — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i12 (holón 07) |
| fecha | 2026-07-19 |
| rama | `wp/i12-publicar-la-web` |
| worktree | `C:\Users\aleph\SCRIPT_SDK-wp-i12` |
| commits | `863a6ff` docs(docs): guía · _(este reporte)_ |
| estado propuesto | listo para revisión |

## Qué se hizo

Sin desviaciones de alcance. Se creó `docs/guide/publicar-la-web.md` al
estilo del portal zeus (ciclo editar → preview → build → publicar +
checklist ops DE-I2: Pages Source=Actions, Custom domain
`s-sdk.escrivivir.co`, DNS CNAME → `alephscriptorium-eng.github.io`,
Enforce HTTPS). Los comandos citados son exactamente los de
`package.json` (`docs:dev` / `docs:build`). Donde el artefacto aún no
existe se marcó `<pendiente I10>` (árbol VitePress / dep) o
`<pendiente I11>` (workflow, CNAME, deploy Actions); no se inventaron
pasos de workflow fuera del CA de I11. Push del raíz documentado como
GO DE-I13, no ejecutado. No se tocó BACKLOG, HOLONES/, I10 ni I11.

## Archivos tocados

- `docs/guide/publicar-la-web.md` — creado: guía operativa del portal
- `plan/REPORTES/WP-I12-publicar-la-web.md` — creado: este reporte

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

```text
$ node -v
v22.21.1

$ npm run docs:dev
> script-sdk@0.0.0 docs:dev
> vitepress dev docs
"vitepress" no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable.
EXIT_DEV=1

$ npm run docs:build
> script-sdk@0.0.0 docs:build
> vitepress build docs
"vitepress" no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable.
EXIT_BUILD=1

$ grep -E 'docs:(dev|build)' package.json
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs"

$ test -d docs/autoridades && echo OK_autoridades
OK_autoridades

$ test -f docs/guide/publicar-la-web.md && echo OK_guide
OK_guide

$ test -f .github/workflows/docs.yml || echo NO_WORKFLOW
NO_WORKFLOW

$ test -f docs/public/CNAME || echo NO_CNAME
NO_CNAME

$ test -d docs/.vitepress || echo NO_VITEPRESS
NO_VITEPRESS

# Enlace https://s-sdk.escrivivir.co/ (browser Playwright)
net::ERR_CERT_COMMON_NAME_INVALID
# curl -sI https://z-sdk.escrivivir.co/ → HTTP/1.1 200 OK (hermano vivo)
# curl -sI https://alephscriptorium-eng.github.io/ → HTTP/1.1 404 Not Found
```

CA C8: ambos comandos citados **corren** contra el canal real (scripts
del `package.json`); fallan con EXIT=1 porque `vitepress` no está
instalado ni hay `docs/.vitepress/` — esperado en paralelo a I10
(`<pendiente I10>` declarado en la guía). Dominio custom aún sin cert
válido (ops + I11).

Fuente de estilo (solo lectura, no copiada como árbol):
`C:\Users\aleph\OASIS\SCRIPTORIUM_V0\zeus-sdk\docs\guide\publicar-la-web.md`.

## Auto-revisión (PRACTICAS §4 — con honestidad)

- [x] Diff solo dentro de TEST-SWARM/: **N/A por delta 1 de
      `plan/PRACTICAS.md`** — este mundo escribe en todo S_SDK; el diff
      vive en `docs/guide/` + `plan/REPORTES/`. Cero toques a `HOLONES/*`.
- [x] Cero árboles/ficheros copiados de otros mundos: se **citó** el
      estilo zeus (lectura OASIS); el Markdown se redactó propio, no se
      copió el fichero.
- [x] Sellos con fuente; rutas citadas existentes: `package.json`,
      `docs/autoridades/`, guía creada; workflow/CNAME/vitepress marcados
      `<pendiente>` con evidencia NO_* arriba.
- [x] Nombres en castellano, sin transición: `publicar-la-web.md`,
      carpetas `guide/` / `REPORTES/` al uso de la casa.
- [x] Sin fluff ni promesa de futuro sin `<pendiente>`: I10/I11/DE-I13
      explícitos; dominio no se afirma vivo (cert inválido observado).
- [x] Cero moneda; munición = idea/obra; cifras en puntos de scrum: N/A.
- [x] La M como forma; física solo con procedencia: N/A.
- [x] Web fiel a la plantilla fanzine: este WP solo Markdown de guía; no
      monta theme/CSS (I10).
- [x] Gates ejecutados de verdad: `docs:dev` / `docs:build` + navegación
      dominio literales arriba.
- [x] Commits convencionales: `docs(docs):` / `docs(plan):`.
- [x] Diff solo del alcance: guía + reporte; sin `docs.yml`, sin CNAME,
      sin theme, sin BACKLOG, sin push.

## Hallazgos fuera de alcance

1. **`vitepress` ausente en deps** — `docs:*` fallan hasta I10 instale y
   monte `docs/.vitepress/`. No es bug de esta guía; es el paralelo I10.
2. **`s-sdk.escrivivir.co`**: DNS/cert aún no válidos
   (`ERR_CERT_COMMON_NAME_INVALID`). Ops + I11 (CNAME en repo + Pages).
3. **Org Pages** `alephscriptorium-eng.github.io` responde 404 en la
   raíz; no bloquea el checklist (el target es el hostname custom).

## Dudas / bloqueos

Ninguno que bloquee la revisión de I12. El CA «calza con el workflow
real» se cumple declarando la forma prevista de I11 como
`<pendiente I11>` (no hay `docs.yml` que inventar aquí).

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
