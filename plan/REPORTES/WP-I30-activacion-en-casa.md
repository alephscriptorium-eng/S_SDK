# WP-I30 · activacion-en-casa — reporte

| dato | valor |
| ---- | ----- |
| agente | worker-i30 (holón 07) |
| fecha | 2026-07-19 |
| rama | `wp/i30-activacion-en-casa` |
| worktree | `C:\Users\aleph\SCRIPT_SDK-wp-i30` |
| base | `main` @ `538ee08` |
| skills-library (solo lectura) | `main` @ `019a90b` · `@alephscript/skills-scriptorium@0.1.0` |
| estado propuesto | listo para revisión |
| push rama `wp/*` | no (brief: NO push origin; merge = orquestador) |

## Qué se hizo

Cierre de interinidad del `plan/` como consumidor del skill
`swarm-orquestacion` @ `0.1.0` (referencia canónica; sin `plan/roles/`
propio; puntero explícito en `TEST-SWARM/plan/roles/`). Instancia
`WEBS/` generada con método del skill `site-web` (plantillas + bases +
CANTERA + ENTREGA-CAPA-1) con copy de **este** mundo; cero datos de
cantera ajena. Comandos de ambos skills ejecutados (Eje IV). No I31+;
no BACKLOG; no mutación skills-library; no mutación `docs/` (portada/
fichas reservadas).

## Archivos tocados

### `WEBS/` (creado)

- `README.md` · `CALIBRACION.md` — contrato instancia / parámetros
- `BASE-1-ARGUMENTO.md` · `BASE-2-SISTEMA.md` · `BASE-3-MECANISMO.md` —
  fundación desde plantillas del skill, datos s-sdk
- `CANTERA/00-contexto.md` · `CANTERA/01-inventario-superficies.md`
- `ENTREGA-CAPA-1/00-NOTA.md` · `ENTREGA-CAPA-1/01-PAQUETE.md`

### `plan/` + puntero ensayo

- `plan/README.md` — interinidad cerrada; activado vía skill @ 0.1.0
- `plan/REPORTES/README.md` — plantilla canónica = skill
- `TEST-SWARM/plan/roles/README.md` — aviso puntero ≠ canónico
- `plan/REPORTES/WP-I30-activacion-en-casa.md` — este reporte

## Evidencia

> No inventes observaciones. Salida literal o `⏳ sin verificar`.

### CA-1 · Eje IV — primer consumidor verificado (comandos del skill)

Checkout skill: `C:\Users\aleph\S_SDK-skills-library` @ `019a90b`.

```text
$ bash skills/site-web/scripts/generar-sitio.sh /tmp/tmp.ssYLUzttQH
SITIO_OK destino=/tmp/tmp.ssYLUzttQH
siguiente: cd "/tmp/tmp.ssYLUzttQH" && npm install && npm run docs:build
…/docs/public/CNAME
…/BASE-1-ARGUMENTO.md
…/entrega/01-PAQUETE.md

$ bash skills/site-web/scripts/ceguera.sh 'zeus|holón|holarquía|SCRIPT_SDK|S_SDK|juntura'
CEGUERA_OK matches=0

$ bash skills/swarm-orquestacion/scripts/montar-plan.sh /tmp/tmp.X6TJDFnWIa
plan montado en: /tmp/tmp.X6TJDFnWIa/plan
roles:
BRIEF.md
ciclo.md
CORRECCION.md
ejes-ca.md
ORQUESTADOR.md
README.md
REVISION.md
WORKER.md

$ bash skills/swarm-orquestacion/scripts/comprobar-ceguera.sh
ceguera: 0
raiz: …/skills/swarm-orquestacion

$ node -p "require('./package.json').version"
0.1.0
```

Instancia real en este repo: `WEBS/` (abajo) + `plan/` referenciando el
skill (no se re-montó `plan/` con montar-plan.sh sobre el vivo — ya
existía; el montaje temporal verifica el contrato del skill).

### CA-2 · Existe `WEBS/` con CANTERA + ENTREGA-CAPA-1 (DE-I6)

```text
$ find WEBS -type f | sort
WEBS/BASE-1-ARGUMENTO.md
WEBS/BASE-2-SISTEMA.md
WEBS/BASE-3-MECANISMO.md
WEBS/CALIBRACION.md
WEBS/CANTERA/00-contexto.md
WEBS/CANTERA/01-inventario-superficies.md
WEBS/ENTREGA-CAPA-1/00-NOTA.md
WEBS/ENTREGA-CAPA-1/01-PAQUETE.md
WEBS/README.md
```

Método citado: skill `site-web` plantillas + `reference/metodo-*.md`.
Datos: VISION / DECISIONES / inventario `docs/` de este repo.

### CA-3 · Grep dedup protocolo = 1 definición canónica (el skill)

```text
$ test ! -d plan/roles && echo absent_OK
absent_OK

$ rg -n "name: swarm-orquestacion" \
    C:/Users/aleph/S_SDK-skills-library/skills/swarm-orquestacion/SKILL.md
2:name: swarm-orquestacion

$ rg -l "Eres un \*\*agente del swarm\*\*" plan/; echo EXIT=$?
EXIT=1
# (0 hits bajo plan/ — no replica el prompt WORKER)

# Canónico:
#   skills-library/…/reference/roles/WORKER.md
# Puntero ensayo (no canónico, declarado en README):
#   TEST-SWARM/plan/roles/WORKER.md
```

`plan/README.md` declara: activado vía
`@alephscript/skills-scriptorium@0.1.0` / library `019a90b`.

### CA-4 · Ceguera en `WEBS/` nuevos = 0

```text
$ rg -n -e 'OASIS/SCRIPTORIUM_V0/WEBS' -e 'startpack-' -e '@zeus/' \
    -e 'solve-coagula' -e 'games\.z-sdk' -e 'ENTREGA-SPRINT' \
    -e 'nexo-atlas' WEBS/ || echo "CEGUERA_OK matches=0"
CEGUERA_OK matches=0
```

Procedencia del método: citada como skill `site-web` (DE-I6); sin pegar
contenido de cantera/entrega de mundo ajeno.

## Auto-revisión (PRACTICAS holón 07 + §4 heredada)

- [x] Diff en alcance I30 (`WEBS/`, `plan/README*`, puntero TEST-SWARM
      roles README, este reporte) — no BACKLOG, no I31+, no skills-library
- [x] Cero árboles copiados de otros mundos; método vía skill/plantillas
- [x] Sellos con fuente (DE-I*, VISION, commits library `019a90b`)
- [x] Nombres: `WEBS/` / CANTERA / ENTREGA-CAPA-1 = vocabulario DE-I6
- [x] Futuros de fichas/Pages marcados `<pendiente>` (I31–I40)
- [x] Cero moneda / fundraising en copy WEBS
- [x] Sin mutar `docs/` ni piel (I30 no publica capas editoriales)
- [x] Gates: greps CA ejecutados; scripts skill ejecutados (arriba)
- [x] Commits convencionales `docs(WEBS|plan): …`
- [x] Diff solo del alcance del brief

## Hallazgos fuera de alcance

- `docs:build` no corrido en capa-1 (diff no toca `docs/**`) — I31+.
- Puntero `TEST-SWARM/plan/roles/` sigue siendo copia completa del ensayo;
  alineación/sustitución → candidata I27 (skill v0.2) o higiene posterior.
- Push de rama `wp/*` no hecho (brief lo reserva al orquestador).

## Dudas / bloqueos

Ninguno bloqueante. Brief decía «NO push origin»; el mensaje de lanzamiento
del orquestador permitía push de `wp/*` «si el brief lo pide» — no lo pide;
rama solo local hasta revisión.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
