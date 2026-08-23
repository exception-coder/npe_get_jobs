import { randomUUID } from 'node:crypto';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { chromium } from 'patchright';

export class BrowserSessionRegistry {
  constructor({ profileRoot, registry }) {
    this.profileRoot = profileRoot;
    this.registry = registry;
    this.sessions = new Map();
    this.sessionIdsByProfile = new Map();
  }

  async open({ platformId, profile, initialUrl, headless = false }) {
    const safeUrl = this.registry.validateUrl(platformId, initialUrl);
    const profileName = this.#profileName(profile || 'default');
    const profilePath = resolve(this.profileRoot, platformId, profileName);
    await mkdir(profilePath, { recursive: true });

    const profileKey = `${platformId}:${profileName}`;
    const existingSessionId = this.sessionIdsByProfile.get(profileKey);
    const existingSession = existingSessionId ? this.sessions.get(existingSessionId) : null;
    if (existingSession) {
      if (existingSession.page.isClosed()) {
        existingSession.page = existingSession.context.pages()[0] || await existingSession.context.newPage();
      }
      if (existingSession.page.url() !== safeUrl) {
        await existingSession.page.goto(safeUrl, { waitUntil: 'domcontentloaded', timeout: 45_000 });
      }
      return this.#describe(existingSessionId, existingSession);
    }

    const context = await chromium.launchPersistentContext(profilePath, {
      channel: 'chrome',
      headless: Boolean(headless),
      viewport: null,
      locale: 'zh-CN',
    });
    const page = context.pages()[0] || await context.newPage();
    await page.goto(safeUrl, { waitUntil: 'domcontentloaded', timeout: 45_000 });

    const sessionId = randomUUID();
    const session = { context, page, platformId, profileName, profileKey };
    this.sessions.set(sessionId, session);
    this.sessionIdsByProfile.set(profileKey, sessionId);
    context.on('close', () => this.#forget(sessionId));
    return this.#describe(sessionId, session);
  }

  async execute({ sessionId, platformId, action, input = {} }) {
    const session = this.sessions.get(sessionId);
    if (!session) throw new Error(`Browser session not found: ${sessionId}`);
    if (session.platformId !== platformId) throw new Error('Session platform does not match action platform');
    return this.registry.execute(platformId, action, { page: session.page, context: session.context }, input);
  }

  describe(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session) throw new Error(`Browser session not found: ${sessionId}`);
    return this.#describe(sessionId, session);
  }

  async closeAll() {
    await Promise.allSettled([...this.sessions.values()].map(({ context }) => context.close()));
    this.sessions.clear();
    this.sessionIdsByProfile.clear();
  }

  #describe(sessionId, session) {
    return {
      sessionId,
      platformId: session.platformId,
      profile: session.profileName,
      currentUrl: session.page.url(),
    };
  }

  #forget(sessionId) {
    const session = this.sessions.get(sessionId);
    if (session) this.sessionIdsByProfile.delete(session.profileKey);
    this.sessions.delete(sessionId);
  }

  #profileName(value) {
    if (!/^[a-zA-Z0-9_-]{1,48}$/.test(value)) {
      throw new Error('Profile must contain only letters, digits, underscores, or hyphens');
    }
    return value;
  }
}
