# WP-I24 · separacion-datos — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i24 (holón 07) |
| fecha | 2026-07-19 |
| rama (SCRIPT_SDK) | `wp/i24-separacion-datos` @ `8735d45` (reporte; gitignore `c704ada`) |
| worktree | `C:\Users\aleph\SCRIPT_SDK-wp-i24` |
| base SCRIPT_SDK | `main` @ `e31933a` |
| rama (skills-library) | `wp/i24-separacion-datos` @ `fcac110` (pushed) |
| checkout skill | `C:\Users\aleph\S_SDK-skills-library` |
| base skills-library | `main` @ `cb03e49` |
| remote skill | origin `wp/i24-separacion-datos` (push DE-I7) |
| estado propuesto | listo para revisión |

## Qué se hizo

Separación protocolo/dato (DE-I10) y destino backstage local (DE-I11). Se
amplió `.gitignore` con `CONECTOR_*` (dato de sesión hacia mundos ajenos).
Histórico real (`VIGILANCIA/`, `ADDENDA/`, `HANDOFF_*`, RE-PLAN local) **no
se borró**. En skills-library: fixture de-identificada
`instancias/ejemplo-M/` (ceguera=0) y doctrina
`RE-PLAN-protocolo-swarm.md` anclada en
`skills/swarm-orquestacion/reference/` (skill que ya cita los 5 ejes).
Punteros mínimos en skill `vigilancia`. Sin I25/I26, sin BACKLOG, sin push
raíz, sin mutar HOLONES/zeus.

## Archivos tocados

### Repo SCRIPT_SDK (worktree `SCRIPT_SDK-wp-i24`)

- `.gitignore` — ampliado: `CONECTOR_*` (DE-I11 / hallazgo I01+VIGIA F5)
- `plan/REPORTES/WP-I24-separacion-datos.md` — este reporte

### Repo `S_SDK-skills-library` (rama `wp/i24-separacion-datos`)

- `instancias/ejemplo-M/**` — fixture scrubbed (bitácora, revisiones,
  addendas, handoffs, logs sample)
- `instancias/README.md` — índice ejemplo-M
- `skills/swarm-orquestacion/reference/RE-PLAN-protocolo-swarm.md` —
  doctrina (ceguera=0)
- `skills/swarm-orquestacion/reference/ejes-ca.md` — enlace a RE-PLAN
- `skills/swarm-orquestacion/SKILL.md` — recurso RE-PLAN
- `skills/vigilancia/{SKILL.md,README.md}` — ancla a `instancias/ejemplo-M/`

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

### CA-1 · grep datos zeus en núcleo publicable SCRIPT_SDK = 0

Árbol publicable = tracked (`git ls-files`). Backstage ya excluido por
I01; I24 añade `CONECTOR_*`.

```text
$ cd C:/Users/aleph/SCRIPT_SDK-wp-i24
$ git ls-files | rg -e '^(VIGILANCIA/|ADDENDA/|HANDOFF_|HIPOTESIS\.md$|CONECTOR_)' || echo "(ninguno — OK)"
(ninguno — OK)

$ git check-ignore -v VIGILANCIA/ ADDENDA/ HANDOFF_VIGIA_CIERRE_U101.md CONECTOR_ZEUS_SDK_BLOCKCHAIN_COMPORT_PLAN.md
.gitignore:2:VIGILANCIA/	VIGILANCIA/
.gitignore:3:ADDENDA/	ADDENDA/
.gitignore:4:HANDOFF_*	HANDOFF_VIGIA_CIERRE_U101.md
.gitignore:8:CONECTOR_*	CONECTOR_ZEUS_SDK_BLOCKCHAIN_COMPORT_PLAN.md

$ git ls-files -z | xargs -0 rg -n 'Bitácora del vigía — swarm zeus-sdk' || echo "(0 — OK)"
(0 — OK)
$ git ls-files -z | xargs -0 rg -n 're-plan del holón 01 \(zeus-sdk\) desde el registro' || echo "(0 — OK)"
(0 — OK)
$ git ls-files -z | xargs -0 rg -n 'cierre del frente transporte lado zeus \(U101' || echo "(0 — OK)"
(0 — OK)
$ git ls-files -z | xargs -0 rg -n 'RE-PLAN del protocolo SWARM — lecciones de la vigilancia de zeus-sdk' || echo "(0 — OK)"
(0 — OK)
```

### CA-2 · histórico preservado y localizable (no borrado)

```text
$ test -f C:/Users/aleph/SCRIPT_SDK/VIGILANCIA/bitacora.md && wc -c ...
OK .../VIGILANCIA/bitacora.md (22498 B)
OK .../VIGILANCIA/anomalias.log (1375630 B)
OK .../VIGILANCIA/watch.log (2145448 B)
OK .../VIGILANCIA/RE-PLAN-protocolo-swarm.md (9449 B)
OK .../VIGILANCIA/revisiones/registro-codereviews-2026-07-18.md (12546 B)
OK .../ADDENDA/A-02-contrato-unico-a-medio-aplicar.md (5494 B)
OK .../HANDOFF_VIGIA_CIERRE_U101.md (2313 B)
OK .../HANDOFF_VIGIA_TRANSPORTE_U100_U101.md (5565 B)
$ ls -d .../VIGILANCIA .../ADDENDA .../VIGILANCIA/revisiones .../VIGILANCIA/TRASH
(todos presentes)
```

### CA-3 · fixture `instancias/ejemplo-M/` ceguera = 0

```text
$ test -d C:/Users/aleph/S_SDK-skills-library/instancias/ejemplo-M && echo OK
OK

$ find instancias/ejemplo-M -type f | sort
instancias/ejemplo-M/README.md
instancias/ejemplo-M/addendas/A-01-contrato-sin-cablear.md
instancias/ejemplo-M/addendas/A-02-paths-duplicados.md
instancias/ejemplo-M/addendas/A-03-transporte-dual.md
instancias/ejemplo-M/addendas/README.md
instancias/ejemplo-M/bitacora.md
instancias/ejemplo-M/handoffs/HANDOFF-cierre-frente.md
instancias/ejemplo-M/logs/README.md
instancias/ejemplo-M/logs/anomalias.log.sample
instancias/ejemplo-M/logs/watch.log.sample
instancias/ejemplo-M/revisiones/registro-sintetico.md

$ rg -n -i -e 'zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura|OASIS' instancias/ejemplo-M/
→ 0 matches
```

### CA-4 · RE-PLAN como fuente del skill (no residuo publicable)

```text
$ test -f skills/swarm-orquestacion/reference/RE-PLAN-protocolo-swarm.md && echo OK
OK
$ rg -n -i -e 'zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura|OASIS' \
    skills/swarm-orquestacion/reference/RE-PLAN-protocolo-swarm.md
→ 0 matches

$ git -C SCRIPT_SDK-wp-i24 ls-files | rg 'RE-PLAN-protocolo-swarm' || echo "(no tracked — OK)"
(no tracked — OK)
$ test -f C:/Users/aleph/SCRIPT_SDK/VIGILANCIA/RE-PLAN-protocolo-swarm.md && echo "OK local backstage"
OK local backstage
```

## Auto-revisión (PRACTICAS §4 + deltas holón 07)

- [x] Diff solo en alcance autorizado (delta 1: S_SDK + skills-library): sí
- [x] Histórico real no borrado; fixture scrubbed (no copia literal): sí
- [x] Sellos con fuente (DE-I10/I11): sí
- [x] Nombres en castellano: sí (`separacion-datos`, `ejemplo-M`)
- [x] Sin fluff; I25/I26 fuera: sí
- [x] Cero moneda: sí
- [x] Skills marco-agnósticos (delta 5): ceguera 0 en fixture + RE-PLAN
- [x] Push solo skills-library rama WP (DE-I7); raíz sin push: sí
- [x] Gates CA ejecutados de verdad: sí (arriba)
- [x] Commits convencionales: `feat(instancias): …` / `chore(gitignore): …` /
      `docs(plan): reporte WP-I24 …`
- [x] Diff solo I24 (no BACKLOG, no I25/I26, no HOLONES): sí

## Hallazgos fuera de alcance

1. `plan/REPORTES/ENTREGA-VIGIA-*` y `VIGIA-2026-07-19-arranque-I0.md`
   siguen untracked en main (gobierno del vigía sobre este holón). No son
   dato de sesión zeus; I24 no los gitignora ni los commitea.
2. `TEST-SWARM/FEEDBACK/2026-07-16-grupo-control.md` untracked — fuera.
3. Menciones metodológicas a «zeus» en `DEVOPS/METODOLOGIA/holones/` y
   reportes de plan siguen en el núcleo (marco del holón 07, no bitácora
   de sesión). CA interpretado como **dato de sesión** (DE-I10), no como
   cero menciones del nombre del holón 01 en toda la docs.
4. I25 (simular segundo consumidor de ejemplo-M) y I26 (publish) no
   ejecutados — brief.

## Dudas / bloqueos

Ninguno que bloquee revisión. Merge skills → main y reporte → SCRIPT_SDK
main = ops/orquestador. Push raíz = no (DE-I13 / brief).

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
