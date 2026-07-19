/**
 * WP-I33 / DA-4 — espejo estático del pack TEST-SWARM bajo VitePress.
 * Origen canónico: TEST-SWARM/docs/ (no reescribir; solo servir).
 * Destino: docs/public/ensayo/ → build emite /ensayo/index.html
 */
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'TEST-SWARM', 'docs');
const dest = join(root, 'docs', 'public', 'ensayo');

if (!existsSync(src)) {
  console.error(`[sync-ensayo] origen ausente: ${src}`);
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });

writeFileSync(
  join(dest, 'PROCEDENCIA.txt'),
  [
    'Espejo de TEST-SWARM/docs/ (DA-4 / WP-I33).',
    'Origen canónico = TEST-SWARM/docs/. No editar aquí: re-sync con',
    '  npm run docs:sync-ensayo',
    'Invocado automáticamente por docs:dev y docs:build.',
    ''
  ].join('\n'),
  'utf8'
);

console.log(`[sync-ensayo] ${src} → ${dest}`);
