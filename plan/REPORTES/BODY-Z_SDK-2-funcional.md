<!-- proyeccion:sprint-game-city-zeus-panorama -->
> **Panorama funcional** (vista ciega, sin detalle interno de proceso). Refleja
> lo aterrizado hoy en este repositorio y en su paquete de datos asociado.
> Comentad aquí lo que toca este repo; este issue se regenera periódicamente,
> no lo uséis como checklist editable.
>
> Corte: tip del repositorio `1086392` · 2026-07-21 · **sprint ciudad CERRADO**.

## Aterrizado

**Datos y arranque de la ciudad**
- Paquete de datos mock de la ciudad conectado a los canales de eventos en
  vivo y al navegador de caché (dos consumidores reales arrancando contra
  el paquete).
- Paquete de arranque (`startpack`) que genera las semillas iniciales de la
  ciudad a partir de una especificación de mapa versionada; el estado de
  cada barrio queda trazado a una fuente de datos versionada y se
  regenera de forma determinista (ya no hay estado "de origen
  desconocido").

**Motor de juego**
- Juego de motor de la ciudad: flujo completo unirse → caminar → despertar,
  con pruebas extremo-a-extremo y de humo.
- Mensajes de delta de estado (protocolo de eventos incremental) integrados
  en el motor y en el kit de autoridad.
- Suscripción por zona/distrito sobre el canal de eventos en vivo —
  **aterrizada**.
- Loop de juego: decay de energía / objetivo colectivo en el paquete de
  datos de la ciudad.
- Gestor de caminos ("viaje"): rutas origen→destino derivadas de una fuente
  wiki, empaquetadas como librería reutilizable sobre el kit base, con
  pruebas de camino + wiki + verificación.
- Autoría de rutas: servidor de edición/mutación de caminos (contrapeso de
  escritura) — **aterrizado**.
- Gate de vocabulario del repositorio: excepciones léxicas para el mensaje
  de delta y para kits de lectura; integración continua y release en verde.

**Actores externos / federación**
- Tres tipos de agente externo ("conejos") federados contra el protocolo de
  salas como pares reales, con fixtures y pruebas extremo-a-extremo.
- Federación en vivo: los tres agentes externos corriendo contra el socket
  real tras la reparación de dependencias de runtime — batería de pruebas
  en vivo 8/8 en verde.

**Operación de la flota**
- Actuador de flota: capa de herramientas para lanzar y administrar el
  conjunto de servidores (principal + satélites) sin lógica específica del
  motor de juego dentro del actuador (frontera limpia mantenida).
- Lectura de "paradas intencionales" conectada al actuador de flota más un
  enganche de ciclo de vida (capa de API + chequeo de salud) — **completada**.
- Kit de ciclo de vida: arranque/parada real accionado por máquina de
  estados ("árbol de vida") — encendido de un nodo y cascada entre
  zonas/distritos con puente de despertar hacia el motor, propagación hacia
  arriba y reintento — **cascada completada**.

**Narrativa / lectura de historia**
- Instancia de dramaturgo (capa de lectura narrativa) para la ciudad: lee el
  registro de eventos y valida el tablero de historia; regenerada tras el
  aterrizaje de la federación.
- Mapeo de tres tipos de jugador (residente / visitante / flujo actual)
  hacia el registro y el tablero de historia, como brazo ejecutable de la
  trama de la ciudad.

**Panel visual**
- Constelación de paneles de flujo: vistas de solo lectura (oído, ojo,
  ciudad) y vistas de actuación (mano, ciudadano); población de datos por
  lotes; varios nodos coordinados.
- Vista del operador orientada a la ciudad (HUD) — **aterrizada**.
- El "parte" de plaza **suena** en el panel del operador (evento sonoro por
  clase de titular + silencio local) — **aterrizado** en tip `1086392`.

**Operación local**
- Réplica local ligera del servidor remoto para el componente de salas, con
  versiones fijadas y scripts de arranque.
- Paquetes del componente de salas **publicados en el registro** (versión
  0.3.0) con dependencia del kit de protocolo en rango acordado.

**Kits de presencia / parte / acta de barrio**
- Slice de kits reutilizables aterrizado: emisión y validación de "parte",
  presencia en barrio, y acta de barrio sobre el ledger — con batería de
  pruebas en verde. Integración continua y release del tip en verde tras
  la corrección de gates asociada.

**Página pública de seguridad de la tubería**
- Guía pública «La tubería, protegida» publicada en el sitio del marco
  (obra cerrada; el seguimiento residual de paraguas queda en cola abierta
  del tracker hermano, sin reabrir la página).

## Pendiente

- **Arranque por contenedor** (compose/up) + prueba de humo del cliente
  federado para la réplica local — diferido (daemon de contenedores caído
  en la estación de ops).
- **Cola abierta (parked, sin arrancar)** en el tracker hermano: paraguas
  de embajada · privacidad de federación (issues #22–#23 OPEN). No se abre
  el epic de embajada desde este corte. Campañas de narrativa del slice
  ciudad = **cerradas** (#25).
- **Roadmap de motor aparcado** (sin abrir): control de acceso, cargadores
  de contenido, particionado, variantes de lanzador por especificación
  (paraguas #5 en tracker hermano).

## Nota

Vista ciega, funcional, sin nombres de proceso interno. El detalle vive en
el tracker de este mismo repositorio; este issue es un resumen de
aterrizaje, no un backlog editable. Sprint ciudad del marco: **CERRADO**.
