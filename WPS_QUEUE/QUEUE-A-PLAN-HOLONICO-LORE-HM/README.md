# Cola A · plan holónico LORE-HM en bruto

| dato | valor |
| ---- | ----- |
| Estado | `QUEUED` · pendiente de revisión del custodio |
| Clase | programa ASI / plan multi-mundo, todavía no backlog |
| Payload | [`../plan.md`](../plan.md) |
| Mundo notarial | `C:\S_LAB\s-sdk` |
| Escritura autorizada por esta cola | ninguna fuera de `WPS_QUEUE/` |

## Mandato

Entregar el plan **tal cual está**, sin convertir sus fases en WPs durante el
intake. El payload conserva hipótesis, decisiones, fronteras y secuencia de
promoción entre S-SDK, Network-Engine, E-SDK, Zeus y el playground.

Esta cola no concede GO de implementación, no infla `HOLONES/03-emmanuel`,
no crea un holón 08 y no abre ramas en mundos hermanos. El orquestador que la
reciba debe separar después, con decisión del custodio, qué parte se convierte
en notaría S, inception de lenguaje, obra E o playground.

## Contrato de entrada

1. Leer el payload completo y [`FUENTES.md`](FUENTES.md).
2. Tratar `WPS_QUEUE/` como cantera, no como fuente de verdad operativa.
3. Revalidar rutas, estados de PRs y decisiones abiertas antes de promover
   cualquier afirmación.
4. Mantener las fronteras de ownership: S registra; 04 incuba; 02 destila;
   E encarna; Zeus publica contratos; el playground verifica.
5. No despachar workers hasta que exista un backlog en el mundo propietario,
   identidad de raíz `PASS`, claim de carril, lote y GO explícito.

## Resultado esperado del intake

- Veredicto del custodio sobre el programa completo.
- Decisiones abiertas numeradas, sin resolverlas por inferencia.
- Partición posterior por mundo y por ownership.
- Trazabilidad desde cada WP futuro hasta este payload y sus fuentes.

## Fuera de alcance

- Editar `z-sdk`, `e-sdk`, Network-Engine o el hub.
- Ejecutar la campaña de tipos de la cola B.
- Crear package `@logos/*`, provider Document Machine o playground.
- Copiar árboles históricos desde OASIS.
