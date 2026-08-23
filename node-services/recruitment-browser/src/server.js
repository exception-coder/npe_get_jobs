import http from 'node:http';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BrowserSessionRegistry } from './runtime/session-registry.js';
import { platformRegistry } from './platforms/index.js';

const host = '127.0.0.1';
const port = Number(process.env.NPE_PATCHRIGHT_PORT || 17321);
const serviceRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sessions = new BrowserSessionRegistry({
  profileRoot: process.env.NPE_BROWSER_PROFILE_ROOT || resolve(serviceRoot, '.profiles'),
  registry: platformRegistry,
});

const send = (response, status, body) => {
  response.writeHead(status, { 'content-type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(body));
};

const readJson = async (request) => {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 64 * 1024) throw new Error('Request body exceeds 64 KiB');
    chunks.push(chunk);
  }
  return chunks.length === 0 ? {} : JSON.parse(Buffer.concat(chunks).toString('utf8'));
};

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === 'GET' && request.url === '/health') {
      send(response, 200, { available: true, engine: 'patchright', version: '1.60.2' });
      return;
    }
    if (request.method === 'POST' && request.url === '/v1/sessions') {
      const body = await readJson(request);
      send(response, 201, await sessions.open(body));
      return;
    }
    if (request.method === 'GET' && request.url?.startsWith('/v1/sessions/')) {
      const sessionId = decodeURIComponent(request.url.slice('/v1/sessions/'.length));
      send(response, 200, sessions.describe(sessionId));
      return;
    }
    if (request.method === 'POST' && request.url === '/v1/actions') {
      const body = await readJson(request);
      send(response, 200, await sessions.execute(body));
      return;
    }
    send(response, 404, { error: 'route_not_found' });
  } catch (error) {
    send(response, 400, { error: 'request_failed', message: error instanceof Error ? error.message : String(error) });
  }
});

const shutdown = async () => {
  server.close();
  await sessions.closeAll();
};

process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
server.listen(port, host, () => process.stdout.write(`Patchright sidecar listening on http://${host}:${port}\n`));
