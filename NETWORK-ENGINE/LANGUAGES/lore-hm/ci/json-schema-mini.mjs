#!/usr/bin/env node
/**
 * Evaluador JSON Schema 2020-12 — subconjunto **fail-closed**.
 *
 * Por qué existe: la lengua LORE-HM se verifica sin dependencias externas
 * (todos los `verificar-*.mjs` lo declaran). Para poder *ejecutar* esquemas
 * de verdad —y no leer autodeclaraciones de un fixture— hace falta un
 * evaluador en el árbol.
 *
 * Propiedad de seguridad: **cualquier keyword no implementada lanza**.
 * Un esquema que use algo que este evaluador no entiende NO se evalúa como
 * «válido por omisión»: rompe el gate. Es lo contrario de un validador que
 * ignora en silencio lo que no conoce.
 *
 * Equivalencia con ajv 8.20.0 (2020-12): 93 comparaciones, 0 desviaciones.
 * Procedimiento y salida literal en `../REPORTE-ZV-S.md` §⓪.
 */

/** Keywords puramente anotativas: se aceptan y no afectan al veredicto. */
const ANNOTATIONS = new Set([
  '$schema',
  '$id',
  '$anchor',
  '$comment',
  '$vocabulary',
  'title',
  'description',
  'default',
  'examples',
  'deprecated',
  'readOnly',
  'writeOnly',
  '$defs',
]);

/**
 * `format` es anotación en 2020-12 salvo que se active el vocabulario de
 * aserción. Aquí NO se asevera; se declara explícitamente para que nadie crea
 * que `format` está validando algo.
 */
const ANNOTATION_ONLY_ASSERTIONS = new Set(['format']);

const APPLICATORS = new Set([
  'allOf',
  'anyOf',
  'oneOf',
  'not',
  'if',
  'then',
  'else',
  'properties',
  'patternProperties',
  'additionalProperties',
  'propertyNames',
  'items',
  'prefixItems',
  'contains',
  'minContains',
  'maxContains',
  'dependentSchemas',
  '$ref',
]);

const ASSERTIONS = new Set([
  'type',
  'enum',
  'const',
  'required',
  'dependentRequired',
  'minProperties',
  'maxProperties',
  'minItems',
  'maxItems',
  'uniqueItems',
  'minLength',
  'maxLength',
  'pattern',
  'minimum',
  'maximum',
  'exclusiveMinimum',
  'exclusiveMaximum',
  'multipleOf',
]);

function known(kw) {
  return (
    ANNOTATIONS.has(kw) ||
    ANNOTATION_ONLY_ASSERTIONS.has(kw) ||
    APPLICATORS.has(kw) ||
    ASSERTIONS.has(kw)
  );
}

function typeOf(v) {
  if (v === null) return 'null';
  if (Array.isArray(v)) return 'array';
  if (typeof v === 'number') return Number.isInteger(v) ? 'integer' : 'number';
  return typeof v; // object | string | boolean
}

function typeMatches(actual, expected) {
  if (expected === 'number') return actual === 'number' || actual === 'integer';
  return actual === expected;
}

function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a === 'number' && typeof b === 'number') return a === b;
  if (typeOf(a) !== typeOf(b)) return false;
  if (Array.isArray(a)) {
    return a.length === b.length && a.every((x, i) => deepEqual(x, b[i]));
  }
  if (a && typeof a === 'object') {
    const ka = Object.keys(a).sort();
    const kb = Object.keys(b).sort();
    if (ka.length !== kb.length || !ka.every((k, i) => k === kb[i])) return false;
    return ka.every((k) => deepEqual(a[k], b[k]));
  }
  return false;
}

/** Resuelve `$ref` locales: `#` y `#/$defs/<name>` (nada más — el resto lanza). */
function resolveRef(ref, root) {
  if (ref === '#') return root;
  const m = /^#\/\$defs\/([^/]+)$/.exec(ref);
  if (!m) {
    throw new Error(
      `json-schema-mini: $ref no soportado «${ref}» (sólo "#" y "#/$defs/<name>")`,
    );
  }
  const target = root?.$defs?.[m[1]];
  if (target === undefined) {
    throw new Error(`json-schema-mini: $ref sin destino: ${ref}`);
  }
  return target;
}

/**
 * @returns {{valid: boolean, errors: string[]}}
 */
export function validate(schema, instance, opts = {}) {
  const root = opts.root ?? schema;
  const path = opts.path ?? '#';
  const errors = [];

  if (schema === true) return { valid: true, errors: [] };
  if (schema === false) {
    return { valid: false, errors: [`${path}: schema=false rechaza todo`] };
  }
  if (schema === null || typeof schema !== 'object' || Array.isArray(schema)) {
    throw new Error(`json-schema-mini: schema inválido en ${path}`);
  }

  for (const kw of Object.keys(schema)) {
    if (!known(kw)) {
      throw new Error(
        `json-schema-mini: keyword no implementada «${kw}» en ${path} — ` +
          'fail-closed: el esquema NO se evalúa a la ligera',
      );
    }
  }

  const sub = (s, p, inst) => validate(s, inst, { root, path: p });
  const push = (msg) => errors.push(`${path}: ${msg}`);
  const t = typeOf(instance);

  if ('$ref' in schema) {
    const r = sub(resolveRef(schema.$ref, root), `${path}/$ref`, instance);
    if (!r.valid) errors.push(...r.errors);
  }

  // ---- aserciones genéricas ----
  if ('type' in schema) {
    const want = Array.isArray(schema.type) ? schema.type : [schema.type];
    if (!want.some((w) => typeMatches(t, w))) {
      push(`type: esperado ${want.join('|')}, recibido ${t}`);
    }
  }
  if ('enum' in schema) {
    if (!schema.enum.some((v) => deepEqual(v, instance))) {
      push(
        `enum: ${JSON.stringify(instance)} no está en ${JSON.stringify(schema.enum)}`,
      );
    }
  }
  if ('const' in schema) {
    if (!deepEqual(schema.const, instance)) {
      push(
        `const: esperado ${JSON.stringify(schema.const)}, recibido ${JSON.stringify(instance)}`,
      );
    }
  }

  // ---- strings ----
  if (t === 'string') {
    if ('minLength' in schema && [...instance].length < schema.minLength) {
      push(`minLength ${schema.minLength}`);
    }
    if ('maxLength' in schema && [...instance].length > schema.maxLength) {
      push(`maxLength ${schema.maxLength}`);
    }
    if ('pattern' in schema && !new RegExp(schema.pattern, 'u').test(instance)) {
      push(`pattern ${schema.pattern}`);
    }
  }

  // ---- números ----
  if (t === 'number' || t === 'integer') {
    if ('minimum' in schema && instance < schema.minimum) push(`minimum ${schema.minimum}`);
    if ('maximum' in schema && instance > schema.maximum) push(`maximum ${schema.maximum}`);
    if ('exclusiveMinimum' in schema && instance <= schema.exclusiveMinimum) {
      push(`exclusiveMinimum ${schema.exclusiveMinimum}`);
    }
    if ('exclusiveMaximum' in schema && instance >= schema.exclusiveMaximum) {
      push(`exclusiveMaximum ${schema.exclusiveMaximum}`);
    }
    if ('multipleOf' in schema) {
      const q = instance / schema.multipleOf;
      if (!Number.isFinite(q) || Math.abs(q - Math.round(q)) > 1e-9) {
        push(`multipleOf ${schema.multipleOf}`);
      }
    }
  }

  // ---- objetos ----
  if (t === 'object') {
    const keys = Object.keys(instance);
    if ('required' in schema) {
      for (const k of schema.required) {
        if (!keys.includes(k)) push(`required: falta «${k}»`);
      }
    }
    if ('dependentRequired' in schema) {
      for (const [k, reqs] of Object.entries(schema.dependentRequired)) {
        if (keys.includes(k)) {
          for (const r of reqs) {
            if (!keys.includes(r)) push(`dependentRequired: «${k}» exige «${r}»`);
          }
        }
      }
    }
    if ('minProperties' in schema && keys.length < schema.minProperties) {
      push(`minProperties ${schema.minProperties}`);
    }
    if ('maxProperties' in schema && keys.length > schema.maxProperties) {
      push(`maxProperties ${schema.maxProperties}`);
    }
    if ('propertyNames' in schema) {
      for (const k of keys) {
        const r = sub(schema.propertyNames, `${path}/propertyNames`, k);
        if (!r.valid) errors.push(...r.errors);
      }
    }

    const evaluated = new Set();
    if ('properties' in schema) {
      for (const [k, s] of Object.entries(schema.properties)) {
        if (keys.includes(k)) {
          evaluated.add(k);
          const r = sub(s, `${path}/properties/${k}`, instance[k]);
          if (!r.valid) errors.push(...r.errors);
        }
      }
    }
    if ('patternProperties' in schema) {
      for (const [re, s] of Object.entries(schema.patternProperties)) {
        const rx = new RegExp(re, 'u');
        for (const k of keys) {
          if (rx.test(k)) {
            evaluated.add(k);
            const r = sub(s, `${path}/patternProperties/${re}`, instance[k]);
            if (!r.valid) errors.push(...r.errors);
          }
        }
      }
    }
    if ('additionalProperties' in schema) {
      for (const k of keys) {
        if (evaluated.has(k)) continue;
        const r = sub(
          schema.additionalProperties,
          `${path}/additionalProperties/${k}`,
          instance[k],
        );
        if (!r.valid) errors.push(...r.errors);
      }
    }
    if ('dependentSchemas' in schema) {
      for (const [k, s] of Object.entries(schema.dependentSchemas)) {
        if (keys.includes(k)) {
          const r = sub(s, `${path}/dependentSchemas/${k}`, instance);
          if (!r.valid) errors.push(...r.errors);
        }
      }
    }
  }

  // ---- arrays ----
  if (t === 'array') {
    if ('minItems' in schema && instance.length < schema.minItems) {
      push(`minItems ${schema.minItems}`);
    }
    if ('maxItems' in schema && instance.length > schema.maxItems) {
      push(`maxItems ${schema.maxItems}`);
    }
    if (schema.uniqueItems === true) {
      for (let i = 0; i < instance.length; i++) {
        for (let j = i + 1; j < instance.length; j++) {
          if (deepEqual(instance[i], instance[j])) push(`uniqueItems: [${i}]≡[${j}]`);
        }
      }
    }
    let start = 0;
    if ('prefixItems' in schema) {
      for (let i = 0; i < schema.prefixItems.length && i < instance.length; i++) {
        const r = sub(schema.prefixItems[i], `${path}/prefixItems/${i}`, instance[i]);
        if (!r.valid) errors.push(...r.errors);
      }
      start = schema.prefixItems.length;
    }
    if ('items' in schema) {
      for (let i = start; i < instance.length; i++) {
        const r = sub(schema.items, `${path}/items/${i}`, instance[i]);
        if (!r.valid) errors.push(...r.errors);
      }
    }
    if ('contains' in schema) {
      let n = 0;
      for (const it of instance) {
        if (sub(schema.contains, `${path}/contains`, it).valid) n++;
      }
      const min = 'minContains' in schema ? schema.minContains : 1;
      const max = 'maxContains' in schema ? schema.maxContains : Infinity;
      if (n < min) push(`contains: ${n} coincidencia(s) < minContains ${min}`);
      if (n > max) push(`contains: ${n} coincidencia(s) > maxContains ${max}`);
    }
  }

  // ---- applicators lógicos ----
  if ('allOf' in schema) {
    for (const [i, s] of schema.allOf.entries()) {
      const r = sub(s, `${path}/allOf/${i}`, instance);
      if (!r.valid) errors.push(...r.errors);
    }
  }
  if ('anyOf' in schema) {
    const rs = schema.anyOf.map((s, i) => sub(s, `${path}/anyOf/${i}`, instance));
    if (!rs.some((r) => r.valid)) push('anyOf: ninguna alternativa valida');
  }
  if ('oneOf' in schema) {
    const rs = schema.oneOf.map((s, i) => sub(s, `${path}/oneOf/${i}`, instance));
    const n = rs.filter((r) => r.valid).length;
    if (n !== 1) push(`oneOf: ${n} alternativas validan (se exige 1)`);
  }
  if ('not' in schema) {
    if (sub(schema.not, `${path}/not`, instance).valid) push('not: el subesquema valida');
  }
  if ('if' in schema) {
    const cond = sub(schema.if, `${path}/if`, instance).valid;
    if (cond && 'then' in schema) {
      const r = sub(schema.then, `${path}/then`, instance);
      if (!r.valid) errors.push(...r.errors);
    }
    if (!cond && 'else' in schema) {
      const r = sub(schema.else, `${path}/else`, instance);
      if (!r.valid) errors.push(...r.errors);
    }
  }

  return { valid: errors.length === 0, errors };
}

/** Azúcar: comprueba el esquema entero y devuelve un predicado. */
export function compile(schema) {
  // Recorrido previo: si hay una keyword desconocida en cualquier rama
  // alcanzable, queremos saberlo al compilar, no en el primer caso que pase.
  assertKeywordsKnown(schema, '#');
  const fn = (instance) => validate(schema, instance);
  fn.schema = schema;
  return fn;
}

function assertKeywordsKnown(schema, path) {
  if (typeof schema === 'boolean') return;
  if (schema === null || typeof schema !== 'object' || Array.isArray(schema)) {
    throw new Error(`json-schema-mini: schema inválido en ${path}`);
  }
  for (const [kw, v] of Object.entries(schema)) {
    if (!known(kw)) {
      throw new Error(
        `json-schema-mini: keyword no implementada «${kw}» en ${path} — fail-closed`,
      );
    }
    if (kw === '$defs') {
      for (const [n, s] of Object.entries(v)) assertKeywordsKnown(s, `${path}/$defs/${n}`);
    } else if (['properties', 'patternProperties', 'dependentSchemas'].includes(kw)) {
      for (const [n, s] of Object.entries(v)) assertKeywordsKnown(s, `${path}/${kw}/${n}`);
    } else if (['allOf', 'anyOf', 'oneOf', 'prefixItems'].includes(kw)) {
      v.forEach((s, i) => assertKeywordsKnown(s, `${path}/${kw}/${i}`));
    } else if (
      [
        'not',
        'if',
        'then',
        'else',
        'items',
        'contains',
        'additionalProperties',
        'propertyNames',
      ].includes(kw)
    ) {
      assertKeywordsKnown(v, `${path}/${kw}`);
    }
  }
}
