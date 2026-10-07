import { readFile, realpath, stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = await realpath(fileURLToPath(new URL('..', import.meta.url)));
const catalog = JSON.parse(await readFile(resolve(root,'templates/catalog.json'),'utf8'));
const types = new Set(['website','app','agent','solution','connector']);
const statuses = new Set(['ready','planned','deprecated']);
const seen = new Set();

if (catalog.schemaVersion !== 3 || !/^\d+\.\d+\.\d+$/.test(catalog.emdashVersion) || !Array.isArray(catalog.templates)) throw new Error('Invalid catalog header');

for (const item of catalog.templates) {
  if (!types.has(item.type) || !statuses.has(item.status) || typeof item.name !== 'string' || !/^[A-Za-z][A-Za-z0-9-]*$/.test(item.name) || typeof item.description !== 'string' || !item.description.trim()) throw new Error('Invalid catalog item');
  const id = `${item.type}/${item.name}`;
  if (seen.has(id)) throw new Error(`Duplicate catalog item: ${id}`);
  seen.add(id);
  const parts = typeof item.path === 'string' ? item.path.split('/') : [];
  if (parts[0] !== 'templates' || parts[1] !== item.type || parts.at(-1) !== item.name || !parts.slice(2).every(part => /^[A-Za-z][A-Za-z0-9-]*$/.test(part))) throw new Error(`Unsafe catalog path: ${id}`);
  const directory = await realpath(resolve(root,item.path));
  if (!directory.startsWith(root + sep) || !(await stat(directory)).isDirectory()) throw new Error(`Invalid catalog directory: ${id}`);
  if (item.preview !== null) {
    const preview = typeof item.preview === 'string' ? item.preview.split('/') : [];
    if (preview[0] !== 'templates' || preview[1] !== item.type || !preview.slice(2).every(part => /^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(part))) throw new Error(`Unsafe catalog preview: ${id}`);
    const file = await realpath(resolve(root,item.preview));
    if (!file.startsWith(root + sep) || !(await stat(file)).isFile()) throw new Error(`Invalid catalog preview: ${id}`);
  }
  if (item.type === 'website' && item.status === 'ready' && !(await stat(resolve(directory,'package.json'))).isFile()) throw new Error(`Ready website has no package.json: ${id}`);
}

console.log(`Validated ${seen.size} Appstore catalog items.`);
