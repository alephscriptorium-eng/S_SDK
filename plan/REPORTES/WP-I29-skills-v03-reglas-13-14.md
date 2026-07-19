# WP-I29 · skills-v03-reglas-13-14 — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i29 (holón 07) |
| fecha | 2026-07-19 |
| rama (skills-library) | `wp/i29-skills-v03-reglas-13-14` @ `5de379b` |
| checkout skill | `C:\Users\aleph\S_SDK-skills-library` |
| base skills-library | `main` @ `6180f9b` |
| rama (SCRIPT_SDK) | `wp/i29-skills-v03-reglas-13-14` |
| worktree raíz | `C:\Users\aleph\SCRIPT_SDK-wp-i29` |
| base SCRIPT_SDK | `main` @ `cbe7b48` |
| remote skill | origin `wp/i29-skills-v03-reglas-13-14` (push DE-I7) |
| estado propuesto | listo para revisión |

## Qué se hizo

Bump `@alephscript/skills-scriptorium` a **0.3.0**: skill `swarm-orquestacion`
con **reglas 13–14** (activación = agente fresco; ceguera sobre historial
reachable `git log -p` + práctica `grep -c`/`grep -q`). Contrato en
`reference/reglas-metodo-v03.md` (v0.2 queda histórico con puntero). CA
transversal en `ejes-ca.md`; refs en `SKILL.md` / `ciclo.md` /
`ORQUESTADOR.md`. Publish DE-I12 al registry (`npm view` → `0.3.0`).
Ceguera árbol + historial = 0.

No I51/I6/I61/I62. No BACKLOG. No push raíz SCRIPT_SDK. No mutación
OASIS/HOLONES/zeus.

## Archivos tocados

### Repo `S_SDK-skills-library` (rama `wp/i29-skills-v03-reglas-13-14`)

- `package.json` — `0.2.0` → `0.3.0`
- `CHANGELOG.md` — sección `0.3.0`
- `README.md` / `docs/index.md` — semver `0.3.0`
- `skills/swarm-orquestacion/reference/reglas-metodo-v03.md` — creado (14 reglas)
- `skills/swarm-orquestacion/reference/reglas-metodo-v02.md` — puntero a v0.3
- `skills/swarm-orquestacion/SKILL.md` — reglas 9–10 + recurso v0.3
- `skills/swarm-orquestacion/reference/ejes-ca.md` — CA 13/14 + tabla
- `skills/swarm-orquestacion/reference/ciclo.md` — §§6–7 + anti-patrones
- `skills/swarm-orquestacion/reference/roles/ORQUESTADOR.md` — ritual 8–9
- `skills/swarm-orquestacion/README.md` — ceguera historial (regla 14)

### Repo SCRIPT_SDK (worktree `SCRIPT_SDK-wp-i29`)

- `plan/REPORTES/WP-I29-skills-v03-reglas-13-14.md` — este reporte

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

### CA-1 · `npm view` canal real → `0.3.0`

```text
$ npm publish --registry https://npm.scriptorium.escrivivir.co
+ @alephscript/skills-scriptorium@0.3.0
PUBLISH_EXIT=0

$ npm view @alephscript/skills-scriptorium@0.3.0 --registry https://npm.scriptorium.escrivivir.co

@alephscript/skills-scriptorium@0.3.0 | UNLICENSED | deps: none | versions: 3
…
dist-tags:
latest: 0.3.0

$ npm view @alephscript/skills-scriptorium version --registry https://npm.scriptorium.escrivivir.co
0.3.0
```

Publish local DE-I12: overlay temporal `VERDACCIO_ADMIN_USER` +
`_password` (pass en base64) desde
`ScriptoriumVps/.env.generated-secrets` (mismo canónico I26/I27). Env
`NPM_USERNAME`/`NPM_PASSWORD` ausentes en el shell del worker; `~/.npmrc`
restaurado tras publish (`npmrc_restored=1`).

### CA-2 · Reglas 13 y 14 presentes + citadas

- `skills/swarm-orquestacion/reference/reglas-metodo-v03.md` — reglas
  **13** (agente fresco) y **14** (historial reachable + squash) +
  práctica de medida.
- Citadas desde `SKILL.md` (reglas de oro 9–10; §Método v0.3),
  `reference/ejes-ca.md` (Eje IV activación + §Ceguera transversal),
  `reference/ciclo.md` (§§6–7), `ORQUESTADOR.md` (puntos 8–9).

### CA-3 · Ceguera del skill = 0 (árbol + historial)

```text
$ bash skills/swarm-orquestacion/scripts/comprobar-ceguera.sh
ceguera: 0
raiz: …/skills/swarm-orquestacion
CEGUERA_EXIT=0

$ # regla 14 — git log -p medido con rg|wc (conteo), no grep|head&&echo OK
$ HIST_SKILL_HITS=$(git log -p -- skills/swarm-orquestacion/ | rg -i -e "$PATTERN" | wc -l)
HIST_SKILL_HITS=0
```

(`PATTERN` = mismos fragmentos que `comprobar-ceguera.sh`.)

### CA-4 · Grep mundos / rutas host en cara pública = 0 (skill)

```text
$ bash skills/swarm-orquestacion/scripts/comprobar-ceguera.sh → ceguera: 0
$ rg -n 'C:\\Users|C:/Users' skills/ README.md CHANGELOG.md .github/
→ (0)
```

Únicos hits residuales del patrón `S_SDK` fuera del skill: URL del repo
en `package.json` / `docs/index.md` — excepción de naming (PRACTICAS
delta 5); no van como path de host ni mundo ajeno en el skill.

### Commits

```text
skills-library: 5de379b feat(skills): swarm-orquestacion v0.3.0 reglas 13-14 ceguera activación
SCRIPT_SDK:     (este reporte) docs(plan): reporte WP-I29 …
```

Push library: `origin/wp/i29-skills-v03-reglas-13-14` @ `5de379b`
(`PUSH_EXIT=0`). Raíz SCRIPT_SDK: **sin push**.

## Auto-revisión (PRACTICAS §4 + deltas holón 07)

- [x] Diff solo en alcance (skills-library + reporte): sí
- [x] Cero mutación OASIS/HOLONES/zeus (solo lectura secrets/publish): sí
- [x] Sellos con fuente; `npm view` ejecutado: sí
- [x] Auth DE-I12 (username + `_password` base64; no `_authToken`): sí
- [x] Skills marco-agnósticos: ceguera 0 + historial 0: sí
- [x] Push solo skills-library rama WP (DE-I7); raíz sin push: sí
- [x] Commits convencionales: `feat(skills)` / `docs(plan)`
- [x] Sin I51/I6; sin BACKLOG: sí

## Hallazgos fuera de alcance

1. Secrets de GitHub Actions `NPM_USERNAME`/`NPM_PASSWORD` no verificados
   en este entorno (publish fue local). Tras merge, un
   `workflow_dispatch` «Publish package» puede validar CI (skip si
   `0.3.0` ya existe).
2. Pages library aún menciona semver en `docs/index.md` — redeploy Docs
   tras merge actualizará el portal vivo a `0.3.0` (no bloquea CA).

## Dudas / bloqueos

Ninguno para el CA. `npm view` 0.3.0 + ceguera 0 (árbol + historial) OK.

---

## Revisión del orquestador

**Aceptado ✅** — 2026-07-19 · orquestador holón 07

Verificado:
1. CA1 — `npm view @alephscript/skills-scriptorium@0.3.0` → `0.3.0`
   (registry `https://npm.scriptorium.escrivivir.co`; dist-tag `latest`).
2. CA2 — reglas 13–14 en `reference/reglas-metodo-v03.md`; citadas en
   `SKILL.md`, `ejes-ca.md`, `ciclo.md`, `ORQUESTADOR.md`.
3. CA3 — `comprobar-ceguera.sh` → `ceguera: 0`; `git log -p` skill con
   patrón del script → 0 hits.
4. CA4 — grep rutas host en cara pública skill = 0.
5. Diff acotado (skills-library + reporte); sin I6/I51/HOLONES.

Merge library: `wp/i29` → `main` @ `5de379b` (rama wp borrada).
Merge raíz: reporte → `main`; worktree retirado. **NO I6.**
