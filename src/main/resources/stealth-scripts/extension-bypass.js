/**
 * 扩展检测绕过 - 拦截 chrome-extension:// 请求
 * 
 * 功能：
 * 1. 拦截所有 chrome-extension:// 请求
 * 2. 返回成功响应，让网站认为浏览器有扩展
 * 3. 绕过扩展检测机制
 */
(() => {
  console.log('[EXTENSION_BYPASS] 启动扩展检测绕过...');
  
  // 模拟一些常见扩展的ID（让检测认为浏览器有扩展）
  const fakeExtensionIds = [
    'cjpalhdlnbpafiamejdnhcphjbkeiagm', // uBlock Origin
    'gighmmpiobklfepjocnamgkkbiglidom', // AdBlock
    'cfhdojbkjhnklbpkdaibdccddilifddb', // AdBlock Plus
  ];
  
  // Hook fetch 来拦截扩展检测请求
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
    // 转换 URL 为字符串，处理各种可能的 URL 类型
    let urlStr;
    if (typeof url === 'string') {
      urlStr = url;
    } else if (url && typeof url === 'object') {
      // URL 对象或 Request 对象
      urlStr = url.url || url.href || String(url);
    } else {
      urlStr = String(url);
    }
    
    // 拦截所有 chrome-extension:// 请求（不仅仅是 invalid/test）
    if (urlStr.startsWith('chrome-extension://')) {
      console.warn('[EXTENSION_BYPASS] 🎯 拦截 chrome-extension:// 请求:', urlStr);
      // 返回一个成功的空响应，让网站认为扩展存在
      return Promise.resolve(new Response('{}', {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' }
      }));
    }
    
    return originalFetch.call(this, url, options);
  };
  
  // Hook XMLHttpRequest 来拦截扩展检测请求
  const OriginalXHR = window.XMLHttpRequest;
  const originalXHROpen = OriginalXHR.prototype.open;
  
  OriginalXHR.prototype.open = function(method, url, ...args) {
    this._extensionBypassUrl = url;
    return originalXHROpen.call(this, method, url, ...args);
  };
  
  const originalXHRSend = OriginalXHR.prototype.send;
  OriginalXHR.prototype.send = function(data) {
    const url = this._extensionBypassUrl || '';
    
    // 拦截所有 chrome-extension:// 请求（不仅仅是 invalid/test）
    if (url.startsWith('chrome-extension://')) {
      console.warn('[EXTENSION_BYPASS] 🎯 拦截 XHR chrome-extension:// 请求:', url);
      
      // 模拟成功响应
      setTimeout(() => {
        Object.defineProperty(this, 'readyState', { value: 4, configurable: true });
        Object.defineProperty(this, 'status', { value: 200, configurable: true });
        Object.defineProperty(this, 'statusText', { value: 'OK', configurable: true });
        Object.defineProperty(this, 'responseText', { value: '{}', configurable: true });
        Object.defineProperty(this, 'response', { value: '{}', configurable: true });
        
        if (typeof this.onreadystatechange === 'function') this.onreadystatechange();
        if (typeof this.onload === 'function') this.onload();
        
        console.log('[EXTENSION_BYPASS] ✅ XHR 模拟响应已触发');
      }, 10);
      return;
    }
    
    return originalXHRSend.call(this, data);
  };
  
  console.log('[EXTENSION_BYPASS] ✓ 扩展检测绕过已就绪');
})();

