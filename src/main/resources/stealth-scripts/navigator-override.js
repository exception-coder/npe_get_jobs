/**
 * Navigator 属性覆盖 - 修改 navigator 相关属性
 * 
 * 功能：
 * 1. 修改 permissions 查询结果
 * 2. 创建真实的 PluginArray
 * 3. 修改 languages、hardwareConcurrency、deviceMemory、platform 等
 * 4. 修复 Function.prototype.toString 检测
 */
(() => {
  console.log('[NAVIGATOR_OVERRIDE] 启动...');
  
  // 1. 修改 permissions 查询结果
  const originalQuery = navigator.permissions.query;
  navigator.permissions.query = function(parameters) {
    if (parameters.name === 'notifications') {
      return Promise.resolve({ state: Notification.permission, onchange: null });
    }
    return originalQuery.call(this, parameters);
  };
  
  // 2. 创建真实的 PluginArray
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
  
  // 3. 修改 languages
  Object.defineProperty(navigator, 'languages', {
    get: () => ['zh-CN', 'zh', 'en-US', 'en'],
    configurable: true
  });
  
  // 4. 修改 hardwareConcurrency
  Object.defineProperty(navigator, 'hardwareConcurrency', {
    get: () => 8,
    configurable: true
  });
  
  // 5. 修改 deviceMemory
  Object.defineProperty(navigator, 'deviceMemory', {
    get: () => 8,
    configurable: true
  });
  
  // 6. 修改 platform
  Object.defineProperty(navigator, 'platform', {
    get: () => 'MacIntel',
    configurable: true
  });
  
  // 7. 修复 Function.prototype.toString 检测
  const originalToString = Function.prototype.toString;
  Function.prototype.toString = function() {
    if (this === navigator.permissions.query) {
      return 'function query() { [native code] }';
    }
    return originalToString.call(this);
  };
  
  console.log('[NAVIGATOR_OVERRIDE] ✓ Navigator 属性已覆盖');
})();

