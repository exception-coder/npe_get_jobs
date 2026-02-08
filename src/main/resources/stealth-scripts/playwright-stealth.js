/**
 * Playwright Stealth - 完整的 Playwright 特征隐藏
 * 
 * 这是一个综合脚本，包含了所有反检测功能
 * 如果只想加载一个脚本，使用这个即可
 * 
 * 功能：
 * 1. 隐藏 webdriver 属性
 * 2. 模拟 Chrome 环境
 * 3. 覆盖 Navigator 属性
 * 4. 隐藏 Playwright 特征
 */
(() => {
  console.log('[STEALTH] ========== Playwright Stealth Mode ==========');
  
  // 1. 隐藏 webdriver 属性（最重要！）
  Object.defineProperty(navigator, 'webdriver', {
    get: () => undefined,
    configurable: true
  });
  
  // 删除 Playwright 特有的属性
  delete navigator.__proto__.webdriver;
  
  // 2. 覆盖 chrome 对象（模拟真实 Chrome 和扩展环境）
  if (!window.chrome) {
    window.chrome = {};
  }
  
  // 模拟 chrome.runtime（让网站认为有扩展存在）
  window.chrome.runtime = window.chrome.runtime || {
    id: 'cjpalhdlnbpafiamejdnhcphjbkeiagm', // uBlock Origin ID
    connect: function() { return { onMessage: { addListener: function() {} }, postMessage: function() {} }; },
    sendMessage: function(extId, msg, callback) { if (callback) setTimeout(callback, 10); },
    onMessage: { addListener: function() {}, removeListener: function() {} },
    onConnect: { addListener: function() {} },
    getManifest: function() { return { version: '1.57.2', name: 'uBlock Origin' }; },
    getURL: function(path) { return 'chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/' + path; },
    lastError: null
  };
  
  window.chrome.loadTimes = window.chrome.loadTimes || function() {
    return {
      commitLoadTime: Date.now() / 1000 - Math.random() * 10,
      connectionInfo: 'h2',
      finishDocumentLoadTime: Date.now() / 1000 - Math.random() * 5,
      finishLoadTime: Date.now() / 1000 - Math.random() * 2,
      firstPaintAfterLoadTime: 0,
      firstPaintTime: Date.now() / 1000 - Math.random() * 8,
      navigationType: 'Other',
      npnNegotiatedProtocol: 'h2',
      requestTime: Date.now() / 1000 - Math.random() * 15,
      startLoadTime: Date.now() / 1000 - Math.random() * 12,
      wasAlternateProtocolAvailable: false,
      wasFetchedViaSpdy: true,
      wasNpnNegotiated: true
    };
  };
  
  window.chrome.csi = window.chrome.csi || function() {
    return {
      onloadT: Date.now(),
      pageT: Math.random() * 1000 + 500,
      startE: Date.now() - Math.random() * 5000,
      tran: 15
    };
  };
  
  window.chrome.app = window.chrome.app || {
    isInstalled: false,
    InstallState: { DISABLED: 'disabled', INSTALLED: 'installed', NOT_INSTALLED: 'not_installed' },
    RunningState: { CANNOT_RUN: 'cannot_run', READY_TO_RUN: 'ready_to_run', RUNNING: 'running' }
  };
  
  // 3. 修改 permissions 查询结果
  const originalQuery = navigator.permissions.query;
  navigator.permissions.query = function(parameters) {
    if (parameters.name === 'notifications') {
      return Promise.resolve({ state: Notification.permission, onchange: null });
    }
    return originalQuery.call(this, parameters);
  };
  
  // 4. 创建真实的 PluginArray
  const plugins = [
    { name: 'Chrome PDF Plugin', description: 'Portable Document Format', filename: 'internal-pdf-viewer' },
    { name: 'Chrome PDF Viewer', description: '', filename: 'mhjfbmdgcfjbbpaeojofohoefgiehjai' },
    { name: 'Native Client', description: '', filename: 'internal-nacl-plugin' }
  ];
  
  Object.defineProperty(navigator, 'plugins', {
    get: () => {
      const arr = plugins.map(p => ({
        ...p,
        length: 1,
        item: () => null,
        namedItem: () => null,
        [Symbol.iterator]: function* () { yield this; }
      }));
      arr.item = (i) => arr[i];
      arr.namedItem = (name) => arr.find(p => p.name === name);
      arr.refresh = () => {};
      return arr;
    },
    configurable: true
  });
  
  // 5. 修改 languages
  Object.defineProperty(navigator, 'languages', {
    get: () => ['zh-CN', 'zh', 'en-US', 'en'],
    configurable: true
  });
  
  // 6. 修改 hardwareConcurrency
  Object.defineProperty(navigator, 'hardwareConcurrency', {
    get: () => 8,
    configurable: true
  });
  
  // 7. 修改 deviceMemory
  Object.defineProperty(navigator, 'deviceMemory', {
    get: () => 8,
    configurable: true
  });
  
  // 8. 修改 platform
  Object.defineProperty(navigator, 'platform', {
    get: () => 'MacIntel',
    configurable: true
  });
  
  // 9. 隐藏 Playwright 特有的函数和属性
  const playwrightProps = [
    '__playwright',
    '__pw_manual',
    '__PW_inspect',
    'playwright',
    '__webdriverFunc',
    '__driver_evaluate',
    '__webdriver_evaluate',
    '__selenium_evaluate',
    '__fxdriver_evaluate',
    '__driver_unwrapped',
    '__webdriver_unwrapped',
    '__selenium_unwrapped',
    '__fxdriver_unwrapped'
  ];
  
  playwrightProps.forEach(prop => {
    try {
      delete window[prop];
      Object.defineProperty(window, prop, {
        get: () => undefined,
        configurable: true
      });
    } catch(e) {}
  });
  
  // 10. 修复 Function.prototype.toString 检测
  const originalToString = Function.prototype.toString;
  Function.prototype.toString = function() {
    if (this === navigator.permissions.query) {
      return 'function query() { [native code] }';
    }
    return originalToString.call(this);
  };
  
  console.log('[STEALTH] ✓ Playwright 特征伪装完成');
})();

