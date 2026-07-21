# SEMILLA-GAMIFICACION — de mecánica a juego (análisis del orquestador)

> Lectura crítica de la gamificación del sprint (2026-07-20). Veredicto: **la
> semilla es buena** — mapear la ciudad-censo sobre un gamemap con estados
> vivo/latente/muerto/roto y hacer que `wake` ofrezca un tool real por horse es
> una idea con verdad (el juego toca infra de verdad, no metáfora). Pero tal
> como está, Z03+Z08 entregan **mecánica y población, no un juego**: falta el
> loop, falta el porqué, y la conexión juego↔realidad se queda en un solo
> intent. Seis profundizaciones, ordenadas por palanca/coste.
>
> **Estado GO (2026-07-21):** GC-5 abre **solo §1 + §5** → WP-Z16 / WP-Z17
> (BACKLOG). **§1 ✅** (Z16) · **§5 ✅** (Z17 aceptado 2026-07-21). **§2–§4/§6 siguen parked.** **GC-5 cerrada.**
> Hermana (no enmienda): [SEMILLA-ARG.md](SEMILLA-ARG.md) — ola **ARG-1**
> abre §A1+§A2 (WP-A01·A02); no des-aparca §2/§6 de esta semilla.

## 1. Loop de juego: objetivo, decay, energía (palanca alta, coste bajo)

Hoy: un rabbit entra, camina, despierta un barrio → snapshot cambia. Fin. No
hay meta, ni coste, ni consecuencia — es un e2e disfrazado de juego.

Propuesta mínima de loop:

- **Decay:** un barrio `vivo` que nadie visita en N ticks degrada a `latente`
  (y `latente` → `muerto` más lento). El mantenimiento es la mecánica — igual
  que en la infra real: lo no visitado muere.
- **Energía:** `wake` cuesta energía al actor; `announce` en plaza la recarga
  (estar presente = contribuir). Presupuesto simple por actor, en el reducer.
- **Objetivo colectivo:** «mantener vivos ≥K barrios» como condición de estado
  de la ciudad (bien/mal común visible en snapshot). Sin ganador individual:
  la ciudad gana o decae — encaja con el censo (169 conviven, no compiten).

Todo cabe en `domain.mjs` (reducer puro, testeable) + 2 intents. No toca engine.

## 2. Estado del juego = estado real del sistema (la idea más potente)

`wake` ya ofrece «un tool real por horse». Esa es la punta de un iceberg que el
sprint no explota: **cada barrio puede mapear a una pieza real del ecosistema**
(paquete del registry, servicio del mesh, repo). Entonces:

- La **salud real** alimenta el estado inicial y el decay: CI verde / versión
  publicada resolviendo (C8) / servicio respondiendo = barrio sano; build rota
  = barrio `roto` en el mapa. El censo ya viene de `.agent.md` reales — cerrar
  el círculo con los servicios es el mismo movimiento.
- **Despertar un barrio = acción real acotada:** correr su smoke, resolver su
  `npm view`, levantar su servicio (vía Z06 launcher). El juego se vuelve un
  **dashboard jugable del Scriptorium**: gamificación de devops literal, que es
  exactamente la tesis de la plataforma (DEVOPS/VISION: «contenido y agencia»).
- Guardarraíl: acciones **read-only o idempotentes** por defecto (smoke, view,
  status); nada destructivo desde el juego sin capability explícita (ACL de
  Z05 item 3 cuando exista).

Esto convierte el pack de demo a herramienta: el mapa dice la verdad.

## 3. Ciudadanos con misión (Z10 como sistema de quests)

Z08-f5 puebla con random-walk: población decorativa. Con Z10 (caminos sobre el
grafo de 513 handoffs) los ciudadanos pueden llevar **misiones**: ir de A a B
por el grafo, con origen/destino elegidos por algo verdadero (su zona del
censo, un barrio que decae y «pide» visita). El random-walk queda como idle;
la misión como comportamiento. Es la diferencia entre un salvapantallas y una
simulación: el dramaturgo (Z07) pasa de narrar ruido a narrar intención.

## 4. El cronista: cerrar el loop narrativo (Z07 de vuelta al juego)

El dramaturgo lee ledger → story-board, pero nadie en el juego lee el
story-board: la narrativa sale y no vuelve. Propuesta: un actor `cronista`
(rol `dj`) que re-emite los actos como `announce` en la plaza — el lore se
vuelve visible dentro del juego (y en los dashboards Z08). Coste mínimo: es un
ciudadano más que lee story-board.json y habla.

## 5. La vista 3D que ya existe: operator-ui

zeus ya tiene `@zeus/operator-ui` («UI de operador gamificada», Angular+Three,
ThreeGamificationUI) — y el sprint no la menciona. Es el candidato natural a
**vista 3D de la ciudad** («varias vistas, un contrato»: player-ui, player-3d,
operator-ui). Con Z02 sembrando escena y Z03 emitiendo snapshot, operator-ui
tiene todo para pintar la ciudad sin código nuevo de contrato. Evita construir
un visor desde cero y le da a la UI gamificada el caso de uso que le faltaba.

## 6. Meta-juego del swarm (la síntesis, para cuando todo lo demás viva)

El skill de swarm ya proyecta el backlog a un tracker (backlog→Issues, modelo
«proyección, no sync», adaptador remote-agnóstico por diseño). Un **adaptador
`ciudad`** proyectaría WPs como **misiones en la plaza**: WP abierto = misión
disponible; WP ✅ = acto en el story-board; el vigía como NPC que observa. El
trabajo real del swarm se vuelve contenido del juego — la plataforma de
gamificación gamificándose a sí misma. Mismo candado que Issues: local-only
por defecto, opt-in explícito, gate de ceguera (regla de los dos mundos) antes
de proyectar nada al lado zeus.

## Orden sugerido (histórico GC-4 → vigente GC-5 parcial)

1. §1 loop (habilita todo lo demás; solo Z03) — **GC-5 → WP-Z16 ✅**
2. §5 operator-ui como vista (reusa lo que existe) — **GC-5 → WP-Z17 ✅**
3. §3 misiones (necesita Z10) — **parked**
4. §4 cronista (necesita Z07) — **parked**
5. §2 salud real (necesita Z06 y criterio de guardarraíles) — **parked**
6. §6 meta-juego (necesita §1-§4 vivos y decisión de gobernanza) — **parked**
