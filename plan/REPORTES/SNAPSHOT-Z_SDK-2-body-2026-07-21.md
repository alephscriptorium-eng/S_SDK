<!-- proyeccion:sprint-game-city-zeus-panorama -->
> **Panorama funcional** (vista ciega, sin detalle interno de proceso). Refleja
> lo aterrizado hoy en este repositorio y en su paquete de datos asociado.
> Comentad aqu├¡ lo que toca este repo; este issue se regenera peri├│dicamente,
> no lo us├®is como checklist editable.

## Aterrizado

**Datos y arranque de la ciudad**
- Paquete de datos mock de la ciudad conectado a los canales de eventos en
  vivo y al navegador de cach├® (dos consumidores reales arrancando contra
  el paquete).
- Paquete de arranque (`startpack`) que genera las semillas iniciales de la
  ciudad a partir de una especificaci├│n de mapa versionada; el estado de
  cada barrio queda trazado a una fuente de datos versionada y se
  regenera de forma determinista (ya no hay estado "de origen
  desconocido").

**Motor de juego**
- Juego de motor de la ciudad: flujo completo unirse ÔåÆ caminar ÔåÆ despertar,
  con pruebas extremo-a-extremo y de humo.
- Mensajes de delta de estado (protocolo de eventos incremental) integrados
  en el motor y en el kit de autoridad.
- Gestor de caminos ("viaje"): rutas origenÔåÆdestino derivadas de una fuente
  wiki, empaquetadas como librer├¡a reutilizable sobre el kit base, con
  pruebas de camino + wiki + verificaci├│n.

**Actores externos / federaci├│n**
- Tres tipos de agente externo ("conejos") federados contra el protocolo de
  salas como pares reales, con fixtures y pruebas extremo-a-extremo; la
  ejecuci├│n en vivo contra el socket real qued├│ pendiente de una reparaci├│n
  de dependencias de runtime (ver "Pendiente").

**Operaci├│n de la flota**
- Actuador de flota: capa de herramientas para lanzar y administrar el
  conjunto de servidores (principal + sat├®lites) sin l├│gica espec├¡fica del
  motor de juego dentro del actuador (frontera limpia mantenida).
- Lectura de "paradas intencionales" conectada al actuador de flota m├ís un
  enganche de ciclo de vida (capa de API + chequeo de salud).
- Kit de ciclo de vida: arranque/parada real accionado por m├íquina de
  estados ("├írbol de vida") ÔÇö encendido de un nodo, y luego cascada entre
  zonas/distritos con puente de despertar hacia el motor, propagaci├│n hacia
  arriba y reintento.

**Narrativa / lectura de historia**
- Instancia de dramaturgo (capa de lectura narrativa) para la ciudad: lee el
  registro de eventos y valida el tablero de historia; regenerada tras el
  aterrizaje de la federaci├│n.
- Mapeo de tres tipos de jugador (residente / visitante / flujo actual)
  hacia el registro y el tablero de historia, como brazo ejecutable de la
  trama de la ciudad.

**Panel visual**
- Constelaci├│n de paneles de flujo: vistas de solo lectura (o├¡do, ojo,
  ciudad) y vistas de actuaci├│n (mano, ciudadano); poblaci├│n de datos por
  lotes; varios nodos coordinados.

**Operaci├│n local**
- R├®plica local ligera del servidor remoto para el componente de salas, con
  versiones fijadas y scripts de arranque.

## Pendiente

- **Suscripci├│n por zona/distrito** sobre el canal de eventos en vivo (hoy
  sin filtrar) ÔÇö en curso.
- **Autor├¡a de rutas**: servidor de edici├│n/mutaci├│n de caminos (contrapeso
  de escritura al gestor de caminos de solo lectura) ÔÇö especificado, sin
  construir.
- **Reparaci├│n de dependencias de runtime**: un paquete incompleto + una
  dependencia de runtime faltante bloquean levantar la malla de servidores
  en vivo end-to-end; ya se restauraron los chequeos de salud y las pruebas
  de federaci├│n en vivo (8/8), pero el re-chequeo amplio de las vistas de
  solo lectura del panel y de las vistas de actuaci├│n en vivo sigue
  pendiente de confirmaci├│n.
- **Publicaci├│n de paquete** (registro) para el componente de salas de la
  r├®plica local ÔÇö no hecha.
- **Arranque por contenedor** (compose/up) + prueba de humo del cliente
  federado para la r├®plica local ÔÇö no hecha.
- **Roadmap de motor aparcado** (sin abrir): control de acceso, cargadores
  de contenido, particionado, variantes de lanzador por especificaci├│n.

## Nota

Vista ciega, funcional, sin nombres de proceso interno. El detalle vive en
el tracker de este mismo repositorio; este issue es un resumen de
aterrizaje, no un backlog editable.

