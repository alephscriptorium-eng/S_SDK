# SEMILLA-ARG — la ciudad como interfaz del trabajo real

> Extiende [SEMILLA-GAMIFICACION](SEMILLA-GAMIFICACION.md) §2 y §6; **no** las
> enmienda. Hermana de la SEMILLA. Fuente de contratos: GO custodio **ARG-1**
> (2026-07-21) — despiece §A1–§A3 masticado a nivel calculadora.
>
> **Estado GO (2026-07-21):** ola **ARG-1 cerrada** (slice masticado) —
> **§A1 ✅** WP-A01 · **§A2 ✅** WP-A02 · **§A3 ✅** WP-A03.
> **§A4–§A6 parked** sin GO (no encarnar). SEMILLA §2–§4/§6, Z05 items 3–6 y
> epic embajador siguen parked sin GO propio.

## Tesis

La ciudad ya tiene mecánica (loop Z16 ✅), población (169), actores federados
(Z04), tools reales por edificio (Z06/Z15), narrativa (Z07/Z13), rutas (Z10),
autoría (Z11) y vistas (Z08, Z17 ✅). Lo que falta para un ARG de verdad es
nombrar el recurso que ya gobierna todo lo demás: **la ventana de contexto**.
Quien trabaja un barrio lo mantiene vivo mientras lo sostiene en contexto; lo
que nadie carga, decae. El juego es la gestión colectiva de una memoria finita.

**Jugadores = clases de ventana** (mapa directo sobre Z13):

- **residente** = contexto persistente (humano con el repo abierto, agente de
  sesión larga): conoce su barrio, paga mantenimiento.
- **visitante** = ventana fresca (agente recién instanciado): llega sin
  memoria, lee la plaza, reconstruye desde lo persistido.
- **flujo** = sistema experto sin conversación (CI, watcher, flows): toca,
  transforma, pasa. No retiene: emite eventos.

**Estados de la información = estados urbanos** (unifica el censo con el
manejo real de información):

- `vivo` = está en la ventana de alguien ahora.
- `latente` = persistido y caliente (acta/plaza reciente; se recarga barato).
- `muerto` = solo en historial profundo (recuperable excavando).
- `roto` = **drift**: lo escrito dice X, el canal real dice Y.

## Piezas (orden)

| § | Pieza | Palanca | Estado ARG-1 |
|---|---|---|---|
| **A1** | Mensaje común de la plaza (`parte-kit`) | alta / coste bajo | ✅ WP-A01 |
| **A2** | Presencia = contexto (señal → decay Z16) | alta / coste bajo | ✅ WP-A02 |
| **A3** | Acta de barrio + estado `roto` | nuclear ARG | ✅ WP-A03 |
| **A4** | Edificios = submódulos, gentes = tools | extiende SEMILLA §2 | parked · sin GO |
| **A5** | Puerta de externos (Z04 + webs + tracker + Z17) | superficie existente | parked · sin GO |
| **A6** | Economía de contexto (presupuesto ventana ↔ Z16) | cierra círculo | parked · sin GO |

Orden: §A1 → §A2 → §A3 → §A4 → §A5 → §A6 (A1 hace visible todo lo demás;
A6 es ajuste de números sobre Z16).

---

## §A1 · El mensaje común de la plaza

Agregador que consume los deltas de estado (protocolo ya en el motor) +
eventos de trabajo simulados por el pack mock (Z01/Z02), y redacta UN parte
de ciudad en formato dual: prosa (el «periódico», redactor = dramaturgo Z07)
+ JSON delta. Ese parte es la interfaz común de las tres clases de jugador:
el humano lo lee, la ventana fresca lo carga como primer contexto (el
periódico ES el relevo), el flujo lo parsea. Guardarraíl: el parte pasa el
patrón de ceguera del proyector antes de publicarse. Dep: Z01/Z02/Z07 +
deltas Z05-f1.

### Contrato de datos (ParteDeCiudad v1 — congelar en `tipos.mjs` con JSDoc)

```js
// ParteDeCiudad v1
{
  version: 'parte/1',
  tick: 123,                       // monotónico, del reloj de juego
  censo: { vivos: n, latentes: n, muertos: n, rotos: n },
  barrios: [{
    id: 'barrio-x',
    estado: 'vivo'|'latente'|'muerto'|'roto',
    delta: 'subio'|'bajo'|'igual', // vs parte anterior
    gentesActivas: n               // señales de presencia en la ventana
  }],
  titulares: ['string', ...],      // máx 5, generados por plantilla
  pendientes: [{ barrioId, texto }] // qué espera cada barrio (para el
}                                   // jugador que llega sin memoria)
```

**Firma única:** `redactarParte(estadoAnterior, deltas[]) → { parte, estado }`
— función **pura** (mismo input, mismo parte; sin `Date.now` ni random
dentro: tick y azar entran como argumento). Render aparte:
`renderProsa(parte) → markdown` con **plantillas fijas** por tipo de titular.
Nada de generación libre en v1: calculadora, no poeta.

**Guardarraíl:** `validarParte(parte, patronCeguera) → {ok, matches}` con el
mismo patrón por env del proyector; si `!ok`, el parte NO se publica y se
emite evento `parte_rechazado`.

**No hacer:** no LLM, no tocar `domain.mjs`, no canal nuevo, no estado propio
persistente (el parte se deriva, no se guarda como verdad).

---

## §A2 · Presencia = contexto (conecta con el loop Z16 ✅)

El decay de Z16 pasa de tick simulado a señal de presencia: un barrio está
`vivo` mientras alguna sesión real lo sostiene (health del launcher Z06,
paradas intencionales Z15, actividad de zona vía suscripción Z05-f2). Mock
primero: la señal se simula con el pack de datos; el contrato de «señal de
presencia» queda definido para enchufar la real después.

### Contrato (SeñalDePresencia v1)

```js
// SeñalDePresencia v1
{ barrioId, fuente: 'mock'|'health'|'paradas'|'zona',
  agenteId, clase: 'residente'|'visitante'|'flujo', tick }
// FuentePresencia (interfaz): { suscribir(cb) → desuscribir() }
```

**Regla de decay (parametrizada, no hardcode):** barrio con ≥1 señal en los
últimos `TICKS_PRESENCIA` ticks no degrada; sin señal, degrada según la
tabla del loop de Z16. La constante vive en la config del juego.

**No hacer:** no leer procesos reales todavía; no acoplar el reducer a
ninguna fuente concreta; no añadir clases de jugador nuevas.

---

## §A3 · Relevo y barrios rotos (🔶 WP-A03 — A1 viva)

Regla de persistencia: las ventanas terminan; solo sobrevive lo que llegó a
la plaza o al ledger. Un visitante que adopta un barrio recibe su «acta de
barrio»; si el residente anterior no persistió, el barrio despierta `roto`
(drift doc↔realidad). Tipo de misión nuevo: **reparar un barrio roto**.
Dep: §A1 (el acta viaja por la plaza) + Z10 (la reparación como viaje).

### Contrato (ActaDeBarrio v1 — congelar en `tipos.mjs` con JSDoc)

```js
// ActaDeBarrio v1
{ version: 'acta/1', barrioId, estado, resumen,        // ≤400 chars
  pendientes: ['texto', ...], ultimaClase, tickEmision,
  huellaLedger }  // hash del último evento del barrio en el ledger
```

---

## §A4–§A6 (parked — masticar tras A1–A3 vivos)

- **§A4** — edificios ↔ submódulos/paquetes; gentes = tools de catálogo Z06;
  invariante: solo ids de catálogo.
- **§A5** — puerta externos = Z04 + webs + tracker proyectado + Z17; ninguna
  superficie nueva.
- **§A6** — energía del loop = presupuesto de ventana; excavación cara,
  plaza barata, `announce` recarga.

## Candidata hermana (no despiece ARG) — CAMPANAS S-03

> **Parked** (GO-6b · 2026-07-21). No es §A4–§A6. Primera juntura jugable
> 01↔03 del [mapa siete plantas](MAPA-SIETE-PLANTAS.md): las campanas dan
> voz al parte de plaza (A01 ✅). **No abrir** hasta runner verde
> HOTFIX-ARG-1 **y** tick custodio DE-I8 (inflar `HOLONES/03-emmanuel/`,
> destino emmanuel-sdk). Brief masticado **al abrir**, no aquí.
> DC: [DC-GC-campanas-s03](DECISIONES.md#dc-gc-campanas-s03--2026-07-21--cerrada-candidata-parked).

## Trazabilidad

| WP | § | Ficha | Brief |
|---|---|---|---|
| WP-A01 | A1 | [WP-A01-parte-kit.md](WP-A01-parte-kit.md) | [BRIEF-WP-A01](../../REPORTES/BRIEF-WP-A01-parte-kit.md) |
| WP-A02 | A2 | [WP-A02-presencia.md](WP-A02-presencia.md) | [BRIEF-WP-A02](../../REPORTES/BRIEF-WP-A02-presencia.md) |
| WP-A03 | A3 | [WP-A03-acta-barrio.md](WP-A03-acta-barrio.md) | [BRIEF-WP-A03](../../REPORTES/BRIEF-WP-A03-acta-barrio.md) |
