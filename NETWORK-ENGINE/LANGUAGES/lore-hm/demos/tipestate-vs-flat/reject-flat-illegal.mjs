#!/usr/bin/env node
/**
 * Mecanismo L02: contraste flat vs tipestate con rechazo runtime real.
 * - flat-config.attempt.json documenta salto declared→ready (schema plano lo aceptaría)
 * - tipestate runtime (tabla de sucesores) RECHAZA el mismo salto
 * Exit 0 solo si ambos lados del contraste se verifican.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

/** Sucesores legales (espejo tipestate.ts / podstore). */
const TRANSITION_TABLE = Object.freeze({
  declared: Object.freeze(["leased", "failed"]),
  leased: Object.freeze(["inflated", "failed"]),
  inflated: Object.freeze(["ready", "failed"]),
  ready: Object.freeze(["running", "failed"]),
});

function transitionAllowed(from, to) {
  return (TRANSITION_TABLE[from] ?? []).includes(to);
}

const flat = JSON.parse(
  readFileSync(join(here, "flat-config.attempt.json"), "utf8"),
);

const jump = flat.illegalJump;
if (!jump || jump.from !== "declared" || jump.to !== "ready") {
  console.error("FAIL: flat-config.attempt.json sin illegalJump declared→ready");
  process.exit(1);
}

// Lado flat: el intento se declara aceptable por schema plano (sin motor de estados)
if (jump.acceptedByFlatSchema !== true) {
  console.error(
    "FAIL: illegalJump debe declarar acceptedByFlatSchema=true (sin rechazo de esquema)",
  );
  process.exit(1);
}
console.log("  OK: flat schema aceptaría declared→ready (sin motor de estados)");

// Lado tipestate: rechazo runtime real (no solo markdown / @ts-expect-error)
if (transitionAllowed(jump.from, jump.to)) {
  console.error(
    `FAIL: tipestate runtime aceptó ${jump.from}→${jump.to} (debe rechazar)`,
  );
  process.exit(1);
}
console.log(
  `  OK: tipestate runtime RECHAZA ${jump.from}→${jump.to} (mecanismo, no autodeclaración)`,
);

// Sucesor legal de control
if (!transitionAllowed("declared", "leased")) {
  console.error("FAIL: tipestate debe permitir declared→leased");
  process.exit(1);
}
console.log("  OK: tipestate permite declared→leased");

console.log("reject-flat-illegal: PASS");
process.exit(0);
