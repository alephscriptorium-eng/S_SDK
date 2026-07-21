<!-- proyeccion:sprint-game-city-zeus-panorama -->
> **Panorama funcional** (vista ciega, sin detalle interno de proceso). Refleja
> lo aterrizado hoy en este repositorio y en su paquete de datos asociado.
> Comentad aquí lo que toca este repo; este issue se regenera periódicamente,
> no lo uséis como checklist editable.

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
- Gestor de caminos ("viaje"): rutas origen→destino derivadas de una fuente
  wiki, empaquetadas como librería reutilizable sobre el kit base, con
  pruebas de camino + wiki + verificación.
- Gate de vocabulario del repositorio: excepción léxica para el mensaje de
  delta de estado; integración continua en verde tras la corrección.

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

**Operación local**
- Réplica local ligera del servidor remoto para el componente de salas, con
  versiones fijadas y scripts de arranque.

## Pendiente

- **Suscripción por zona/distrito** sobre el canal de eventos en vivo (hoy
  sin filtrar) — en curso.
- **Autoría de rutas**: servidor de edición/mutación de caminos (contrapeso
  de escritura al gestor de caminos de solo lectura) — especificado, sin
  construir.
- **Re-chequeo amplio del panel en vivo**: tras la reparación de
  dependencias y la federación 8/8, falta confirmar vistas de solo lectura
  y de actuación del panel contra la malla en vivo.
- **Publicación de paquete** (registro) para el componente de salas de la
  réplica local — no hecha.
- **Arranque por contenedor** (compose/up) + prueba de humo del cliente
  federado para la réplica local — no hecha.
- **Roadmap de motor aparcado** (sin abrir): control de acceso, cargadores
  de contenido, particionado, variantes de lanzador por especificación.

## Nota

Vista ciega, funcional, sin nombres de proceso interno. El detalle vive en
el tracker de este mismo repositorio; este issue es un resumen de
aterrizaje, no un backlog editable.
