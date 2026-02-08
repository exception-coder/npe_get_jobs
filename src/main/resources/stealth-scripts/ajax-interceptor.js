/**
 * AJAX 拦截器 - 拦截反爬虫验证接口
 * 
 * 功能：
 * 1. 拦截 Boss 直聘的反爬虫验证接口 /wapi/zpCommon/toggle/all
 * 2. 动态读取 Sign.encryptPs 的值
 * 3. 返回匹配的响应，让验证逻辑通过
 * 4. 阻止内存炸弹触发
 */
(() => {
  console.log('[AJAX_INTERCEPTOR] 启动...');
  
  // 动态获取 Sign.encryptPs 的值
  function getEncryptPsValue() {
    try {
      if (window.Sign && window.Sign.encryptPs) {
        return window.Sign.encryptPs;
      }
    } catch(e) {}
    return 'FALLBACK_VALUE';
  }
  
  // Hook XMLHttpRequest
  const OriginalXHR = window.XMLHttpRequest;
  window.XMLHttpRequest = function() {
    const xhr = new OriginalXHR();
    const originalOpen = xhr.open;
    const originalSend = xhr.send;
    
    let requestUrl = '';
    let requestMethod = '';
    let shouldIntercept = false;
    
    xhr.open = function(method, url, ...args) {
      requestUrl = url;
      requestMethod = method;
      return originalOpen.call(this, method, url, ...args);
    };
    
    xhr.send = function(data) {
      // 检查是否是反爬虫验证接口
      const urlMatch = requestUrl.indexOf('/wapi/zpCommon/toggle/all') !== -1;
      const dataMatch = data && data.toString().indexOf('9E2145704D3D49648DD85D6DDAC1CF0D') !== -1;
      shouldIntercept = urlMatch && dataMatch && requestMethod.toUpperCase() === 'POST';
      
      if (shouldIntercept) {
        // 动态读取 Sign.encryptPs，让 result === c 成立
        const encryptPsValue = getEncryptPsValue();
        console.warn('[AJAX_INTERCEPTOR] 🎯 拦截验证请求，Sign.encryptPs =', encryptPsValue);
        
        // 构造正确的响应，让验证逻辑通过
        const fakeResponse = {
          code: 0,
          message: 'success',
          zpData: {
            nd_result_13912_number_1: {
              result: encryptPsValue
            }
          }
        };
        
        // 异步伪造响应
        setTimeout(() => {
          try {
            Object.defineProperty(xhr, 'readyState', { value: 4, writable: false, configurable: true });
            Object.defineProperty(xhr, 'status', { value: 200, writable: false, configurable: true });
            Object.defineProperty(xhr, 'statusText', { value: 'OK', writable: false, configurable: true });
            Object.defineProperty(xhr, 'responseText', { 
              value: JSON.stringify(fakeResponse),
              writable: false,
              configurable: true
            });
            Object.defineProperty(xhr, 'response', { 
              value: JSON.stringify(fakeResponse),
              writable: false,
              configurable: true
            });
            
            // 触发回调
            if (typeof xhr.onreadystatechange === 'function') {
              xhr.onreadystatechange();
            }
            if (typeof xhr.onload === 'function') {
              xhr.onload();
            }
            
            console.log('[AJAX_INTERCEPTOR] ✅ 验证通过，已阻止内存炸弹');
          } catch(e) {
            console.error('[AJAX_INTERCEPTOR] 伪造响应失败:', e);
          }
        }, 50);
        
        return; // 不发送真实请求
      }
      
      // 其他请求正常发送
      return originalSend.call(this, data);
    };
    
    return xhr;
  };
  
  // Hook fetch API（虽然 main.js 用的是 $.ajax，但以防万一）
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
    const urlStr = typeof url === 'string' ? url : url.url || '';
    const urlMatch = urlStr.indexOf('/wapi/zpCommon/toggle/all') !== -1;
    const bodyMatch = options && options.body && 
                     options.body.toString().indexOf('9E2145704D3D49648DD85D6DDAC1CF0D') !== -1;
    const methodMatch = options && options.method && options.method.toUpperCase() === 'POST';
    
    if (urlMatch && bodyMatch && methodMatch) {
      const encryptPsValue = getEncryptPsValue();
      console.warn('[AJAX_INTERCEPTOR] 🎯 拦截 fetch 验证请求，Sign.encryptPs =', encryptPsValue);
      
      const fakeResponse = {
        code: 0,
        message: 'success',
        zpData: {
          nd_result_13912_number_1: {
            result: encryptPsValue
          }
        }
      };
      
      console.log('[AJAX_INTERCEPTOR] ✅ 验证通过，已阻止内存炸弹');
      return Promise.resolve(new Response(JSON.stringify(fakeResponse), {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' }
      }));
    }
    
    return originalFetch.call(this, url, options);
  };
  
  console.log('[AJAX_INTERCEPTOR] ✓ 已就绪');
})();

