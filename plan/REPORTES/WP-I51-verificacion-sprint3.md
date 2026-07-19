# WP-I51 · verificación Sprint 3 (U143+U144) — acta vigía

| dato | valor |
| ---- | ----- |
| rol | vigía (skill vigilancia · re-verif CA de facto) |
| fecha | 2026-07-19 |
| base SCRIPT_SDK | `main` @ `5f55cd2` |
| tip zeus-sdk | `503b6b87521272ee0f7374adca902f30770f838c` (`origin/main`) |
| tip games-library | `a25ca081347dd21873dff9c3bfadb755f00b3ce8` (`origin/main`) |
| método | ESTACION v1 · C8 canal real · CA-por-clase · ceguera en tocados |
| mutación | **ninguna** en HOLONES/* · **ningún** push · **ningún** bump de puntero submodule |
| I50 | no reabierto (ya ✅) |
| I6 | no abierto |
| BACKLOG | no editado |
| commits de este reporte | *ninguno aún* (acta en working tree; commit = orquestador) |

## Alcance

Re-ejecución read-only de CAs U143+U144 contra tips custodio (no copia a
ciegas de `VIGIA-ESTADO` §I51). Lectura: `git fetch` + checkout detached
`503b6b8` / `a25ca08`. Entregable = esta acta + coherencia con
`VIGIA-ESTADO.md` §«I51 — re-verificación final».

## Veredicto

| CA | resultado |
| -- | --------- |
| U143 CNAME ambos repos @ tip | **PASS** |
| U144 library `docs.yml` = `npm ci` (o comentario) | **PASS** (doble: `npm ci` + comentario) |
| Ceguera marco en tocados U143/U144 | **PASS** (0 hits) |
| **I51 (re-verif)** | **PASS** |

Coherente con §I51 de `VIGIA-ESTADO.md` (PASS de facto previo @ `e17a7d7`):
**confirmado por re-ejecución**, no heredado a ciegas. ✅ formal I51 =
orquestador.

---

## CA U143 — `docs/public/CNAME` en ambos @ tip

Comando (ambos repos @ tip):

```bash
git ls-files docs/public/CNAME
git show HEAD:docs/public/CNAME
```

| repo | tip | `git ls-files` | contenido (leído, no inventado) |
| ---- | --- | -------------- | ------------------------------- |
| zeus-sdk | `503b6b8` | `docs/public/CNAME` | `z-sdk.escrivivir.co` |
| games-library | `a25ca08` | `docs/public/CNAME` | `games.z-sdk.escrivivir.co` |

Anclas de aplicación (ancestros / merges, solo lectura):

- zeus: blob `bbad244` → merge `4d2d805` → aceptación tip `503b6b8`
- library: blob `963841f` → merge tip `a25ca08`

**PASS.**

### C8 canal real (dominio custom)

| URL | HTTP |
| --- | ---- |
| `https://z-sdk.escrivivir.co` | **200** (`Server: GitHub.com`) |
| `https://games.z-sdk.escrivivir.co` | **200** (`Server: GitHub.com`) |

Pulso CI (último main, lectura): Z_SDK CI+Docs **success** @ push
`503b6b8`; library Docs+CI **success** @ merge `a25ca08` (run CI de
`ad9627c` aparece `cancelled` por supersede del merge inmediato — no
bloquea el tip).

---

## CA U144 — library `docs.yml`: `npm ci` O comentario

Fichero: `HOLONES/01-mythos/games-library/.github/workflows/docs.yml`
@ `a25ca08` (ancestro U144 `ad9627c` ⊆ tip).

Evidencia literal (L33–L35):

```yaml
      # npm ci: lockfile + .npmrc (@zeus / @alephscript → registry); mismo canal que portal zeus.
      - name: Install
        run: npm ci
```

- `npm install` restante en ese yml: **0**
- zeus portal (referencia de canal): también `npm ci` @ tip
- CA §Nota ítem 2 (ENTREGA sprint3): «O bien `npm ci` … o comentario …» →
  **ambas ramas cumplidas**

**PASS.**

---

## CA ceguera (tocados U143/U144)

Patrón (PRACTICAS / brief):  
`SCRIPT_SDK|holón|holarquía|vigía|S_SDK|juntura`

Ámbito: ficheros tocados por U143/U144 = `docs/public/CNAME` (ambos) +
`.github/workflows/docs.yml` (library, commit `ad9627c`).

| superficie | hits |
| ---------- | ---- |
| árbol tip zeus: `docs/public/CNAME` + `docs.yml` | **0** |
| árbol tip library: `docs/public/CNAME` + `docs.yml` | **0** |
| diff `bbad244` (zeus CNAME) | **0** |
| diff `4d2d805` — path CNAME | **0** |
| diff `963841f` / merge `a25ca08` (library CNAME) | **0** |
| diff `ad9627c` (library docs.yml npm ci) | **0** |

**PASS.** (Commits de plan/aceptación en zeus fuera del artefacto Pages no
entran en el ámbito de fuga 07→01 del blob CNAME/yml.)

Nota método: esta acta es cara **interna** holón 07 (puede nombrar
mediación). No es §WP hacia zeus; no se exige ceguera sobre el texto del
acta.

---

## Qué no se hizo (límites del WP)

- No commits en submodules · no push a zeus/library · no commit de puntero
  submodule en SCRIPT_SDK
- No implementar CNAME / `npm ci` (ya en tip)
- No I6 · no reabrir I50 · no editar BACKLOG
- Submodules dejados en detached tip de lectura (`+` vs puntero grabado en
  raíz — esperado; el orquestador decide bump si aplica)

## Persisted

- Acta: `plan/REPORTES/WP-I51-verificacion-sprint3.md` (este fichero)
- Estado: coherente con `plan/REPORTES/VIGIA-ESTADO.md` §I51
- Siguiente (orquestador): marcar I51 ✅ si acepta este PASS; **no I6**
