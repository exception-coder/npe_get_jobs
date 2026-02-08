/**
 * Chrome Runtime 模拟 - 模拟真实 Chrome 和扩展环境
 * 
 * 功能：
 * 1. 创建 window.chrome 对象
 * 2. 模拟 chrome.runtime（让网站认为有扩展存在）
 * 3. 模拟 chrome.loadTimes、chrome.csi、chrome.app 等
 */
(() => {
  console.log('[CHROME_RUNTIME] 启动...');
  
  // 创建 chrome 对象（如果不存在）
  if (!window.chrome) {
    window.chrome = {};
  }
  
  // 模拟 chrome.runtime（让网站认为有扩展存在）
  window.chrome.runtime = window.chrome.runtime || {
    id: 'cjpalhdlnbpafiamejdnhcphjbkeiagm', // uBlock Origin ID
    connect: function() { 
      return { 
        onMessage: { addListener: function() {} }, 
        postMessage: function() {} 
      }; 
    },
    sendMessage: function(extId, msg, callback) { 
      if (callback) setTimeout(callback, 10); 
    },
    onMessage: { 
      addListener: function() {}, 
      removeListener: function() {} 
    },
    onConnect: { addListener: function() {} },
    getManifest: function() { 
      return { version: '1.57.2', name: 'uBlock Origin' }; 
    },
    getURL: function(path) { 
      return 'chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/' + path; 
    },
    lastError: null
  };
  
  // 模拟 chrome.loadTimes
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
  
  // 模拟 chrome.csi
  window.chrome.csi = window.chrome.csi || function() {
    return {
      onloadT: Date.now(),
      pageT: Math.random() * 1000 + 500,
      startE: Date.now() - Math.random() * 5000,
      tran: 15
    };
  };
  
  // 模拟 chrome.app
  window.chrome.app = window.chrome.app || {
    isInstalled: false,
    InstallState: { 
      DISABLED: 'disabled', 
      INSTALLED: 'installed', 
      NOT_INSTALLED: 'not_installed' 
    },
    RunningState: { 
      CANNOT_RUN: 'cannot_run', 
      READY_TO_RUN: 'ready_to_run', 
      RUNNING: 'running' 
    }
  };
  
  console.log('[CHROME_RUNTIME] ✓ Chrome 环境已模拟');
})();

