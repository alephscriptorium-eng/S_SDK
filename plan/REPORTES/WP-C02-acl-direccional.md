# WP-C02 · ACL direccional — reporte

| dato | valor |
| ---- | ----- |
| agente | worker WP-C02 (CIUDAD-REAL ola 1) |
| fecha | 2026-07-22 |
| rama | `wp/cr-c02-acl-direccional` (zeus-sdk) |
| worktree | `HOLONES/01-mythos/zeus-sdk/.worktrees/wp-cr-c02-acl-direccional` |
| commits | zeus `1df2fd2930842997f224f6c809aac4ef86c42e45` (base `6a6afab`) |
| eje(s) CA | **I** · **II** + ceguera (δ12 / DE-I20) |
| estado propuesto | listo para revisión |
| issue | LOCAL-ONLY · overlap [Z_SDK #5](https://github.com/alephscriptorium-eng/Z_SDK/issues/5) **OPEN** (citado; **no** cerrado) |
| guardarraíl | Z_SDK **#6** no tocado / no cerrado |
| GL / C01 / C03 | **no** |

## Qué se hizo

ACL direccional peer→recurso en engine (Z05 item 3 / Z_SDK #5), **sin**
esperar shape C01 (dep blanda; supuestos abajo).

1. **`@zeus/protocol` `acl.mjs`** — `POWER` (`read`/`idempotent`/`mutate`/
   `destructive`); `authorizeAcl` (default deny en poder real);
   `capabilityScope` / `hasCapability`; ownership helpers; `createAclPolicy` +
   `assertIntentAcl`. Gate documental `G-PROTO.6`.
2. **`@zeus/authority-kit`** — opt-in `acl: { policy, ownership? }` corre
   `assertIntentAcl` **antes** de `domain.applyIntent`; re-export ACL;
   test rojo→verde (mutate deny→owner; destructive exige `cap:destructive:`).
3. Types + AsyncAPI regenerados; changeset minor protocol + authority-kit.
4. Lockfile sincronizado a versiones post-release `0.3.0` del tip base.

**Sin desviación:** cero health/GL (C01) · cero §A4 (C03) · cero Z05 4–6 ·
cero cierre #5/#6 · cero force-push · cero merge.

## Archivos tocados

(zeus · SHA `1df2fd2` · tip base `6a6afab`)

| archivo | cambio |
| ------- | ------ |
| `packages/engine/protocol/src/acl.mjs` | ACL direccional (nuevo) |
| `packages/engine/protocol/src/index.mjs` · `gates.mjs` · `package.json` | exports + G-PROTO.6 + `./acl` |
| `packages/engine/protocol/test/acl.test.mjs` | CA default deny / capability |
| `packages/engine/protocol/spec/types-build.mjs` · `types/index.d.ts` · `spec/asyncapi.yaml` | tipos + sync |
| `packages/engine/protocol/README.md` | docs ACL |
| `packages/engine/authority-kit/src/create-authority.mjs` | gate `acl` opt-in |
| `packages/engine/authority-kit/src/index.mjs` · `README.md` · test | wire + CA |
| `.changeset/acl-direccional.md` | bump minor |
| `package-lock.json` | sync workspace versions 0.3.x |

## Supuestos de shape C01 (blandos — integración ajustará)

1. Resource ids de barrio/servicio son **opacos**; forma tentativa
   `go:barrio:<slug>` (o el id que C01 elija). Engine no hardcodea slugs.
2. Probes de salud (smoke / npm view / status) se anotan
   `power: idempotent|read` → default allow (alineado SEMILLA §2).
3. Campos de recurso en intent: `resourceId` | `barrioId` | `targetId` |
   `gameObjectId` (resolver default). C01 puede pasar `resourceFrom` custom
   en la policy.
4. «Despertar» / claim de barrio → `setOwner(ownership, resourceId, actorId)`
   del lado juego; mutate posterior del dueño pasa sin capability.
5. C01 **no** necesita actions `destructive` en la superficie default; si
   aparece stop/wipe, exige `cap:destructive:<resource>` en peer-card scopes
   (o `capabilities[]` del intent).
6. Wire C01→authority: `startAuthority({ acl: { policy, ownership } })` cuando
   el pack ciudad conecte; hasta entonces el kit sin `acl` no cambia comportamiento.

## ∩ C01 (exclusión de paths)

| | C02 (este) | C01 (GL ciudad health) |
| --- | --- | --- |
| paths | `zeus …/protocol/**` · `authority-kit/**` · changeset · lock | `games-library/packages/ciudad/**` · docs startpack health |
| ∩ | **∅** | — |

## Evidencia

```
$ git rev-parse HEAD
1df2fd2930842997f224f6c809aac4ef86c42e45

$ npm test -w @zeus/protocol
# tests 36 · pass 36 · fail 0

$ npm test -w @zeus/authority-kit
# tests 16 · pass 16 · fail 0  (incl. ACL direccional opt-in)

$ gh issue view 5 --repo alephscriptorium-eng/Z_SDK --json state
{"state":"OPEN"}   # citado; no cerrado

$ git log -p 6a6afab..HEAD -- packages/engine/protocol packages/engine/authority-kit \
    .changeset/acl-direccional.md | rg -i "WP-C0|SCRIPT_SDK|S_SDK|CIUDAD-REAL|holón|holarquía|juntura|games-library"
# (vacío) · ceguera δ12 PASS

$ rg -n "WP-C0[123]" packages/engine/protocol packages/engine/authority-kit .changeset
# exit 1 · DE-I20 obra limpia de ids C0x
```

## Auto-revisión (PRACTICAS)

- [x] Diff solo dentro de `ALCANCE_DIFF` (protocol / authority-kit / changeset / lock)
- [x] Cero árboles copiados de otros mundos
- [x] Sellos con fuente; #5 OPEN verificado vía `gh`
- [x] Sin promesa de futuro sin supuesto documentado (shape C01 = supuestos)
- [x] Eje I: consumidor real = authority-kit `assertIntentAcl` + test de comportamiento
- [x] Eje II: destino canónico de poder direccional = `protocol/src/acl.mjs`;
      `roles.mjs` permanece solo intent↔rol global (una definición de ACL de poder)
- [x] Gates ejecutados de verdad (protocol 36 · authority-kit 16)
- [x] Commit convencional
- [x] Ceguera árbol + `git log -p` OK; no cierra #6

## Cómo probar

```bash
cd HOLONES/01-mythos/zeus-sdk/.worktrees/wp-cr-c02-acl-direccional
npm test -w @zeus/protocol
npm test -w @zeus/authority-kit
```

Uso mínimo:

```js
import {
  startAuthority,
  createAclPolicy,
  POWER,
  setOwner,
  capabilityScope
} from '@zeus/authority-kit';

const policy = createAclPolicy({
  'health.smoke': { power: POWER.IDEMPOTENT },
  'barrio.annotate': { power: POWER.MUTATE },
  'svc.stop': { power: POWER.DESTRUCTIVE }
});
const ownership = new Map();
await startAuthority({ /* … */, acl: { policy, ownership } });
setOwner(ownership, 'go:barrio:salud', 'alice');
```

## Hallazgos fuera de alcance

- Integración real pack ciudad / C01 policy wiring = post-merge integración.
- Emisión automática de `cap:*` en `issuePeerCard` = no (guardarraíl: no
  escalar poder; caller/operator elige scopes).
- Z_SDK #6 niveles de federación = intacto.

## Dudas / bloqueos

Ninguno bloqueante. Ajuste de nombres de resource id / intents con C01 en
integración.

---

## Revisión del orquestador

**Aceptado ✅** · 2026-07-22 · OLA 1 CIUDAD-REAL gate.

| check | resultado |
| ----- | --------- |
| CA I·II | ✅ authority-kit consumidor real + test default-deny/owner/cap · protocol 36/36 · authority 16/16 |
| Z_SDK #5 | ✅ OPEN citado · **no cerrado** · #6 intacto |
| Ceguera δ12 + regla 14 | ✅ árbol+log-p =0 (`WP-C0*` / SCRIPT_SDK / CIUDAD-REAL / games-library) |
| ∩ C01 | ✅ ∅ (repos distintos) |
| Base tip | ✅ local main FF a `origin/main` `6a6afab` (release) · luego FF C02 · C04 wt intacto |
| Merge | ✅ FF `6a6afab..1df2fd2` → `origin/main` (no force) |

**No despacha C03** — aviso **listo-R11**.
