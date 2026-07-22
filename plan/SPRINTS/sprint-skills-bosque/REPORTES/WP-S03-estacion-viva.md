# WP-S03 · estación-viva — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-S03 |
| fecha | 2026-07-22 |
| rama | `wp/sb-s03-estacion-viva` |
| worktree | `C:\Users\aleph\S_SDK-skills-library\.worktrees\sb-s03-estacion-viva` |
| commits | tip obra `be68f07` (base `2743176`) |
| eje(s) CA | **I** · **IV** + ceguera (delta 5 = 0) |
| estado propuesto | listo para revisión |
| issue | [#13](https://github.com/alephscriptorium-eng/S_SDK-skills-library/issues/13) |
| gate | PASS @ `a37d4c2` |

## Qué se hizo

Skill marco-agnóstico `skills/estacion-viva/` con boot de **7 fases**,
watcher de sesión + whitelist `.claude/skills/` (clase I71), contrato de
bitácora (línea + editor MCP del mundo; sin reimplementar runtime de
juego), conexión GAME_MCP + peercard firmada + kit
`player-mcp-kit@0.1.3` vía registry (C8; sin sibling path), modo debug y
salida dual PO/scrum. Fixture `examples/fixture-tick-cero/` +
`scripts/reproduce-boot.sh` para agente fresco (eje IV). Entrada
CHANGELOG Unreleased **WP-S03**. Sin bump `package.json` · sin publish ·
sin tocar BACKLOG · sin abrir S07 · sin pisar `docs/**` (S06).

## Archivos tocados (obra)

| path | cambio |
| ---- | ------ |
| `skills/estacion-viva/SKILL.md` | creado — params + boot 7 fases |
| `skills/estacion-viva/README.md` | creado — cara pública |
| `skills/estacion-viva/reference/BOOT.md` | contrato 7 fases |
| `skills/estacion-viva/reference/BITACORA.md` | línea + editor MCP |
| `skills/estacion-viva/reference/WATCHER.md` | sesión + whitelist I71 |
| `skills/estacion-viva/reference/GAME-MCP.md` | peercard + registry C8 |
| `skills/estacion-viva/reference/SALIDA-DUAL.md` | PO / scrum |
| `skills/estacion-viva/scripts/reproduce-boot.sh` | checklist ejecutable 7 fases |
| `skills/estacion-viva/scripts/watcher-sesion.sh` | watcher muere con sesión |
| `skills/estacion-viva/scripts/filtro-whitelist-skills.sh` | filtro `.claude/skills/` |
| `skills/estacion-viva/scripts/pulso-mundo.sh` | pulso one-shot |
| `skills/estacion-viva/scripts/comprobar-ceguera.sh` | ceguera fragmentada |
| `skills/estacion-viva/examples/fixture-tick-cero/**` | fixture vía b |
| `CHANGELOG.md` | Unreleased · Added · WP-S03 |

## Evidencia

### Ceguera (árbol)

```
$ bash skills/estacion-viva/scripts/comprobar-ceguera.sh
ceguera: 0
raiz: .../skills/estacion-viva
```

### Ceguera (git log -p reachable)

```
base=2743176e9c1a2c358877841c6e87cc31c5aed5e0
tip=be68f07fe3752cee715cc3c8d151e1241bb1b86b
git_log_p_hits=0
git log -p reachable: 0
```

(Medida: `git log -p base..HEAD -- skills/estacion-viva | grep -cEi <pattern>`;
pattern armado por fragmentos; nunca `grep | head && echo OK`.)

### Diff solo ALCANCE_DIFF

```
CHANGELOG.md
skills/estacion-viva/**   (19 paths en tip)
package.json version = 0.4.0 (intacto)
```

### Boot fixture (eje I · consumo real del contrato)

```
fase1: ok
fase2: estado=.../estado.json sha=75516a15739be79dc183de4bc5c04b99221e9a8025797103b19b73d504941e60
fase3: watcher.pid=2646
fase4: skills_materializados: 1
fase5: kit=player-mcp-kit@0.1.3 status=pendiente-c8-live
fase6: ok
fase7: ok
BOOT_OK
```

Whitelist I71 (contraste fixture):
- materializado `.claude/skills/demo-skill/SKILL.md` → **no** anomalía
- residuo `.claude/nota-sesion.md` → `!!RESIDUO` (filtrado = 1)
- `filtro-whitelist-skills.sh` emite solo paths fuera de `.claude/skills/`

### Ejes

| eje | evidencia |
| --- | --------- |
| **I** | `reproduce-boot.sh` + fixture ejercitan las 7 fases; watcher + filtro consumen el contrato WATCHER; estado deriva solo de bitácora (`fuente: bitacora` + sha) |
| **IV** | Protocolo agente fresco: solo `SKILL.md` + `scripts/reproduce-boot.sh` (+ fixture vía b). Documentado en BOOT.md / README. CA norte reproducible sin contexto de marco. |
| ceguera | árbol `ceguera: 0` + `git log -p` hits = 0 |

### package.json

```
"version": "0.4.0"   # sin bump (S07)
```

## Cómo probar

```powershell
cd C:\Users\aleph\S_SDK-skills-library\.worktrees\sb-s03-estacion-viva
$bash = "C:\Program Files\Git\bin\bash.exe"
& $bash -lc "cd skills/estacion-viva && bash scripts/comprobar-ceguera.sh"
& $bash -lc @"
cd skills/estacion-viva
OUT=`$(mktemp -d)
WORLD_ROOT=`$PWD/examples/fixture-tick-cero \
  GAME_MCP=mcp://fixture-tick-cero OUT_DIR=`$OUT \
  bash scripts/reproduce-boot.sh
"@
```

C8 live del kit (`npm view player-mcp-kit@0.1.3 --registry=…`):
`<pendiente>` en este entorno sin `NPM_REGISTRY`; contrato + peercard de
fixture verificados; vía registry documentada (no sibling).

## Auto-revisión (PRACTICAS)

- [x] Diff solo ALCANCE_DIFF (`skills/estacion-viva/**` + CHANGELOG Unreleased)
- [x] Cero árboles copiados de mundos ajenos; citar vigilancia / convivencia
- [x] Sellos con fuente; rutas del skill existen
- [x] C8 live marcado `<pendiente>` (no inventado)
- [x] Ejes I·IV + ceguera evidenciados con salida literal
- [x] Gates ejecutados (ceguera + boot fixture + log -p)
- [x] Commits convencionales en castellano
- [x] Sin BACKLOG · sin merge · sin push · sin package bump · sin S07

## Hallazgos fuera de alcance

- C8 live `player-mcp-kit@0.1.3` contra registry del ecosistema →
  orquestador / entorno con `NPM_REGISTRY` (o S07 al publicar).
- Materialización del skill en el portal docs (`docs/skills/`) = fuera
  de alcance (S06 mapa ya mergeado; no pisar).
- S07 broche 0.5.0 sigue 🔶 hasta S03 ✅.

## Dudas / bloqueos

Ninguno para revisión. Higiene worktree/rama = orquestador al aceptar.
Sin push.

---

## Revisión del orquestador

_(la rellena el orquestador: aceptado ✅ / devuelto con lista numerada)_
