# Brief — WP-I52 · ENTREGA scrub de rutas (GO I5)

_Orquestador holón 07 · 2026-07-19 · ola I5 (GO custodio)_
_SCRIPT_SDK `main` post-I41 ✅. Worker vivo: **I27** — no interrumpir._
_NO implementar scrub en zeus. NO I50/I51. NO I152 (no existe)._

---

```text
(rol) — ESTE WP NO LANZA WORKER SCRIPT_SDK

WP: WP-I52 · ENTREGA scrub de rutas (F6 / higiene portabilidad)
Tipo: canal ENTREGA/vigía (custodio → orquestador zeus)
Entregable: plan/REPORTES/ENTREGA-VIGIA-2026-07-19b-scrub-rutas.md
  (§Nota solamente; §Lectura interna NO sale)
Brief: plan/REPORTES/BRIEF-WP-I52-entrega-scrub-rutas.md
Reporte CA (tras merge zeus): plan/REPORTES/WP-I52-scrub-rutas-reverif.md
  (lo emite el vigía / orquestador — no un worker de implementación)

Lecturas:
- plan/BACKLOG.md WP-I52 (CA literal) + orden I5 (I52 → I50 → I51)
- plan/REPORTES/ENTREGA-VIGIA-2026-07-19b-scrub-rutas.md
- plan/REPORTES/INTERVENCION-2026-07-19-estabilizacion.md (F6)
- plan/REPORTES/VIGIA-ESTADO.md (gate I52)
- plan/DECISIONES.md — GO I5; ceguera 07→01

Notas del orquestador:
- I52 = nota F6 independiente. NO es parte de I50 (Sprint 3).
- Ceguera: jamás editar HOLONES/01-mythos/zeus-sdk ni Z_SDK remoto
  desde este swarm. Grep marco en §Nota = 0 (salvo cadena a borrar).
- Paralelo path-safe con I27 (I27 = skills-library + custom.css raíz;
  I52 = solo plan/REPORTES ENTREGA). Aun así: NO lanzar worker I52
  mientras I27 viva — este WP no necesita worker de código.
- Acción inmediata (padre / custodio):
  1) Custodio entrega §Nota al orquestador zeus.
  2) Zeus abre micro-WP propio y hace scrub por clase.
  3) Tras merge zeus: vigía re-verifica CA (grep rutas absolutas = 0).
- Lanzar worker I52: NUNCA para implementar en zeus.
  Solo eventual seguimiento de acta re-verif cuando padre libre /
  I27 no compita por atención — y solo docs en plan/REPORTES/.

- CA (evidencia):
  1) Grep clase rutas absolutas locales en main zeus = 0.
  2) Re-verif vigía persistida (acta / VIGIA-ESTADO).
  3) Regla «entregas sin rutas» cosida en skill (cubre I27 regla 12).

- Cadencia: CA abierto hasta (1)+(2). Orquestador marca ✅; no push
  zeus desde aquí.
- NO I50/I51 (sin GO). NO tocar I27. NO mutar submodules HOLONES/.
```

## Instrucción al padre

**NO lanzar worker I52 ahora.** I41 ya ✅; I27 sigue vivo — no interrumpir.
I52 es entrega de custodio (§Nota), no obra de worker. Path-safe ∥ I27,
pero sin solape de implementación: no hay rama `wp/i52-*` de código.
Tras merge del micro-WP en zeus → vigía re-verifica CA; entonces el padre
puede pedir acta `WP-I52-*-reverif.md` si hace falta.
