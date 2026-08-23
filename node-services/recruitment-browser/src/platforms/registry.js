export class PlatformRegistry {
  constructor(platforms = []) {
    this.platforms = new Map();
    for (const platform of platforms) {
      if (this.platforms.has(platform.id)) throw new Error(`Duplicate platform definition: ${platform.id}`);
      this.platforms.set(platform.id, Object.freeze({ ...platform }));
    }
  }

  require(platformId) {
    const platform = this.platforms.get(platformId);
    if (!platform) throw new Error(`Unsupported recruitment platform: ${platformId}`);
    return platform;
  }

  async execute(platformId, action, runtime, input = {}) {
    const platform = this.require(platformId);
    const handler = platform.actions?.[action];
    if (typeof handler !== 'function') {
      throw new Error(`Platform ${platformId} does not support action ${action}`);
    }
    return handler(runtime, input);
  }

  validateUrl(platformId, rawUrl) {
    const platform = this.require(platformId);
    const url = new URL(rawUrl);
    const allowed = platform.hosts.some((host) => url.hostname === host || url.hostname.endsWith(`.${host}`));
    if (!allowed || url.protocol !== 'https:') throw new Error(`URL is not allowed for platform ${platformId}`);
    return url.toString();
  }
}
