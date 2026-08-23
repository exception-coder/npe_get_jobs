import { access, readdir } from 'node:fs/promises';
import { PlatformRegistry } from './registry.js';

async function discoverPlatformPlugins() {
  const directory = new URL('.', import.meta.url);
  const entries = await readdir(directory, { withFileTypes: true });
  const pluginEntries = [];
  for (const entry of entries.filter((candidate) => candidate.isDirectory())) {
    const entryUrl = new URL(`./${entry.name}/index.js`, directory);
    if (await access(entryUrl).then(() => true).catch(() => false)) pluginEntries.push(entryUrl);
  }
  const plugins = await Promise.all(pluginEntries.map(async (entryUrl) => (await import(entryUrl)).default));
  return plugins.sort((left, right) => left.id.localeCompare(right.id));
}

export const platformRegistry = new PlatformRegistry(await discoverPlatformPlugins());
