package getjobs.common.util;

import com.microsoft.playwright.BrowserContext;
import lombok.extern.slf4j.Slf4j;

/**
 * 高级反爬虫分析工具 - Hook 所有关键 API
 * 
 * 这个工具会 Hook 所有可能触发跳转的 API，并记录完整的调用栈
 * 帮助我们找到混淆 JS 中真正触发 about:blank 跳转的代码
 * 
 * 【重要】此版本已修复：
 * 1. setTimeout/setInterval Hook 导致的性能问题
 * 2. AJAX 拦截器误拦截其他请求的问题
 */
@Slf4j
public class AdvancedAntiCrawlerAnalyzer {

    /**
     * 注入高级监控脚本
     * 
     * 【已禁用所有 Hook】原因：
     * 1. Hook 原生方法（Object.defineProperty、eval、Function 等）会破坏页面功能
     * 2. 即使最后调用原始方法，中间的 try-catch 也可能改变执行上下文
     * 3. 产生大量日志，影响性能和可读性
     * 
     * 【替代方案】我们使用更安全的方法：
     * 1. AJAX 拦截器：在 JS 层面拦截验证接口，伪造成功响应
     * 2. Blank 阻止器：在 JS 层面阻止 about:blank 跳转
     * 3. 导航守卫：在 Playwright 层面监控并恢复被劫持的页面
     * 
     * 这个脚本现在只输出一条启动消息，不再 Hook 任何方法。
     * 
     * @param context 浏览器上下文
     */
    public static void attachAdvancedMonitor(BrowserContext context) {
        String script = buildAdvancedMonitorScript();
        context.addInitScript(script);
        log.info("✓ 已注入高级监控脚本（精简模式 - 所有 Hook 已禁用）");
    }

    private static String buildAdvancedMonitorScript() {
        return "(() => {\n" +
                "  console.log('[ADVANCED_MONITOR] 高级监控脚本已启动');\n" +
                "\n" +
                "  // ========== 工具函数 ==========\n" +
                "  \n" +
                "  // 获取调用栈（格式化）\n" +
                "  function getStackTrace() {\n" +
                "    try {\n" +
                "      throw new Error();\n" +
                "    } catch (e) {\n" +
                "      return e.stack.split('\\n').slice(2).join('\\n');\n" +
                "    }\n" +
                "  }\n" +
                "\n" +
                "  // 记录日志到控制台\n" +
                "  function logHook(api, args, stack) {\n" +
                "    console.log(`[HOOK] ${api}`);\n" +
                "    console.log('  参数:', args);\n" +
                "    console.log('  调用栈:', stack);\n" +
                "    console.log('---');\n" +
                "  }\n" +
                "\n" +
                "  // ========== Hook location 相关 API ==========\n" +
                "  // 【已禁用】这些 Hook 只是记录日志，不阻止跳转\n" +
                "  // 我们已经在 attachBlankBlocker 中实现了阻止功能\n" +
                "  // 这里的 Hook 只会产生大量日志，没有实际作用\n" +
                "  \n" +
                "  // Hook location.href setter\n" +
                "  // const originalHrefDescriptor = Object.getOwnPropertyDescriptor(Location.prototype, 'href');\n" +
                "  // if (originalHrefDescriptor && originalHrefDescriptor.set) {\n" +
                "  //   Object.defineProperty(Location.prototype, 'href', {\n" +
                "  //     get: originalHrefDescriptor.get,\n" +
                "  //     set: function(value) {\n" +
                "  //       const stack = getStackTrace();\n" +
                "  //       logHook('location.href = ' + value, [value], stack);\n" +
                "  //       if (value && value.toString().includes('about:blank')) {\n" +
                "  //         console.error('[BLOCKED] 阻止跳转到 about:blank');\n" +
                "  //         console.error('调用栈:', stack);\n" +
                "  //         return;\n" +
                "  //       }\n" +
                "  //       return originalHrefDescriptor.set.call(this, value);\n" +
                "  //     }\n" +
                "  //   });\n" +
                "  // }\n" +
                "  \n" +
                "  // Hook location.replace\n" +
                "  // const originalReplace = Location.prototype.replace;\n" +
                "  // Location.prototype.replace = function(url) {\n" +
                "  //   const stack = getStackTrace();\n" +
                "  //   logHook('location.replace', [url], stack);\n" +
                "  //   if (url && url.toString().includes('about:blank')) {\n" +
                "  //     console.error('[BLOCKED] 阻止 location.replace 到 about:blank');\n" +
                "  //     console.error('调用栈:', stack);\n" +
                "  //     return;\n" +
                "  //   }\n" +
                "  //   return originalReplace.call(this, url);\n" +
                "  // };\n" +
                "  \n" +
                "  // Hook location.assign\n" +
                "  // const originalAssign = Location.prototype.assign;\n" +
                "  // Location.prototype.assign = function(url) {\n" +
                "  //   const stack = getStackTrace();\n" +
                "  //   logHook('location.assign', [url], stack);\n" +
                "  //   if (url && url.toString().includes('about:blank')) {\n" +
                "  //     console.error('[BLOCKED] 阻止 location.assign 到 about:blank');\n" +
                "  //     console.error('调用栈:', stack);\n" +
                "  //     return;\n" +
                "  //   }\n" +
                "  //   return originalAssign.call(this, url);\n" +
                "  // };\n" +
                "\n" +
                "  // ========== Hook window.open ==========\n" +
                "  \n" +
                "  // const originalOpen = window.open;\n" +
                "  // window.open = function(url, target, features) {\n" +
                "  //   const stack = getStackTrace();\n" +
                "  //   logHook('window.open', [url, target, features], stack);\n" +
                "  //   if (url && url.toString().includes('about:blank')) {\n" +
                "  //     console.error('[BLOCKED] 阻止 window.open 到 about:blank');\n" +
                "  //     console.error('调用栈:', stack);\n" +
                "  //     return null;\n" +
                "  //   }\n" +
                "  //   return originalOpen.call(this, url, target, features);\n" +
                "  // };\n" +
                "\n" +
                "  // ========== Hook eval 和 Function ==========\n" +
                "  // 【已禁用】这些 Hook 可能会破坏页面功能\n" +
                "  \n" +
                "  // const originalEval = window.eval;\n" +
                "  // window.eval = function(code) {\n" +
                "  //   const stack = getStackTrace();\n" +
                "  //   if (code && code.toString().includes('about:blank')) {\n" +
                "  //     console.warn('[HOOK] eval 包含 about:blank');\n" +
                "  //     console.warn('代码:', code.toString().substring(0, 200));\n" +
                "  //     console.warn('调用栈:', stack);\n" +
                "  //   }\n" +
                "  //   return originalEval.call(this, code);\n" +
                "  // };\n" +
                "  \n" +
                "  // const OriginalFunction = Function;\n" +
                "  // window.Function = function(...args) {\n" +
                "  //   const code = args[args.length - 1];\n" +
                "  //   const stack = getStackTrace();\n" +
                "  //   if (code && code.toString().includes('about:blank')) {\n" +
                "  //     console.warn('[HOOK] Function 包含 about:blank');\n" +
                "  //     console.warn('代码:', code.toString().substring(0, 200));\n" +
                "  //     console.warn('调用栈:', stack);\n" +
                "  //   }\n" +
                "  //   return new OriginalFunction(...args);\n" +
                "  // };\n" +
                "\n" +
                "  // ========== Hook setTimeout / setInterval ==========\n" +
                "  // 【已禁用】这些 Hook 会产生大量日志，影响性能\n" +
                "  \n" +
                "  // const originalSetTimeout = window.setTimeout;\n" +
                "  // window.setTimeout = function(callback, delay, ...args) {\n" +
                "  //   try {\n" +
                "  //     if (delay < 100 || (callback && callback.toString().includes('about:blank'))) {\n" +
                "  //       const stack = getStackTrace();\n" +
                "  //       console.warn('[HOOK] 可疑的 setTimeout');\n" +
                "  //       console.warn('  延迟:', delay, 'ms');\n" +
                "  //       console.warn('  调用栈:', stack);\n" +
                "  //     }\n" +
                "  //   } catch(e) {\n" +
                "  //     // 忽略检查错误，继续执行原始 setTimeout\n" +
                "  //   }\n" +
                "  //   return originalSetTimeout.call(this, callback, delay, ...args);\n" +
                "  // };\n" +
                "  \n" +
                "  // const originalSetInterval = window.setInterval;\n" +
                "  // window.setInterval = function(callback, delay, ...args) {\n" +
                "  //   try {\n" +
                "  //     if (delay < 100 || (callback && callback.toString().includes('about:blank'))) {\n" +
                "  //       const stack = getStackTrace();\n" +
                "  //       console.warn('[HOOK] 可疑的 setInterval');\n" +
                "  //       console.warn('  延迟:', delay, 'ms');\n" +
                "  //       console.warn('  调用栈:', stack);\n" +
                "  //     }\n" +
                "  //   } catch(e) {\n" +
                "  //     // 忽略检查错误\n" +
                "  //   }\n" +
                "  //   return originalSetInterval.call(this, callback, delay, ...args);\n" +
                "  // };\n" +
                "\n" +
                "  // ========== Hook Object.defineProperty ==========\n" +
                "  // 【已禁用】这个 Hook 会破坏页面的正常功能\n" +
                "  // 原因：很多库（如 Vue）依赖 Object.defineProperty 的原生行为\n" +
                "  // 即使我们最后调用原始方法，中间的 try-catch 也可能改变执行上下文\n" +
                "  \n" +
                "  // const originalDefineProperty = Object.defineProperty;\n" +
                "  // Object.defineProperty = function(obj, prop, descriptor) {\n" +
                "  //   try {\n" +
                "  //     const stack = getStackTrace();\n" +
                "  //     if (obj === navigator || obj === window) {\n" +
                "  //       console.log('[HOOK] Object.defineProperty');\n" +
                "  //       console.log('  对象:', obj === navigator ? 'navigator' : 'window');\n" +
                "  //       console.log('  属性:', prop);\n" +
                "  //       console.log('  描述符:', descriptor);\n" +
                "  //       console.log('  调用栈:', stack);\n" +
                "  //     }\n" +
                "  //   } catch(e) {\n" +
                "  //     // 忽略检查错误\n" +
                "  //   }\n" +
                "  //   return originalDefineProperty.call(this, obj, prop, descriptor);\n" +
                "  // };\n" +
                "\n" +
                "  // ========== Hook document.write ==========\n" +
                "  // 【已禁用】这个 Hook 可能会破坏页面功能\n" +
                "  \n" +
                "  // const originalWrite = document.write;\n" +
                "  // document.write = function(content) {\n" +
                "  //   const stack = getStackTrace();\n" +
                "  //   if (content && content.toString().includes('about:blank')) {\n" +
                "  //     console.error('[BLOCKED] 阻止 document.write 包含 about:blank');\n" +
                "  //     console.error('内容:', content.toString().substring(0, 200));\n" +
                "  //     console.error('调用栈:', stack);\n" +
                "  //     return;\n" +
                "  //   }\n" +
                "  //   return originalWrite.call(this, content);\n" +
                "  // };\n" +
                "\n" +
                "  // ========== 监控 DOM 变化 ==========\n" +
                "  // 【修复】等待 DOM 加载完成后再启动 MutationObserver\n" +
                "  \n" +
                "  function startDOMObserver() {\n" +
                "    try {\n" +
                "      if (!document.documentElement) {\n" +
                "        // DOM 还未准备好，延迟执行\n" +
                "        setTimeout(startDOMObserver, 100);\n" +
                "        return;\n" +
                "      }\n" +
                "      \n" +
                "      const observer = new MutationObserver((mutations) => {\n" +
                "        mutations.forEach((mutation) => {\n" +
                "          // 检查是否有新增的 script 标签\n" +
                "          mutation.addedNodes.forEach((node) => {\n" +
                "            if (node.tagName === 'SCRIPT') {\n" +
                "              console.log('[HOOK] 检测到新增 script 标签');\n" +
                "              console.log('  src:', node.src);\n" +
                "              console.log('  内容:', node.textContent ? node.textContent.substring(0, 100) : '(外部脚本)');\n"
                +
                "            }\n" +
                "          });\n" +
                "        });\n" +
                "      });\n" +
                "      \n" +
                "      observer.observe(document.documentElement, {\n" +
                "        childList: true,\n" +
                "        subtree: true\n" +
                "      });\n" +
                "      \n" +
                "      console.log('[ADVANCED_MONITOR] ✓ DOM 监控已启动');\n" +
                "    } catch(e) {\n" +
                "      console.error('[ADVANCED_MONITOR] DOM 监控启动失败:', e.message);\n" +
                "    }\n" +
                "  }\n" +
                "  \n" +
                "  // 延迟启动 DOM 监控\n" +
                "  startDOMObserver();\n" +
                "  \n" +
                "  console.log('[ADVANCED_MONITOR] ✓ 高级监控脚本已启动（精简模式）');\n" +
                "  console.log('[ADVANCED_MONITOR] 所有 Hook 已禁用，避免破坏页面功能');\n" +
                "  console.log('[ADVANCED_MONITOR] 使用其他方案代替：');\n" +
                "  console.log('[ADVANCED_MONITOR]   - AJAX 拦截器：拦截验证接口');\n" +
                "  console.log('[ADVANCED_MONITOR]   - Blank 阻止器：阻止 about:blank 跳转');\n" +
                "  console.log('[ADVANCED_MONITOR]   - 导航守卫：监控并恢复被劫持的页面');\n" +
                "})();";
    }

    /**
     * 注入 AJAX 拦截器 - 针对 Boss 直聘的验证接口
     * 
     * Boss 直聘通过 /wapi/zpCommon/toggle/all 接口验证，
     * 如果验证失败会触发内存炸弹。我们需要拦截这个请求并伪造成功响应。
     * 
     * 【重要修复】只拦截特定的验证接口（URL + 请求数据都要匹配），不影响其他正常请求
     * 
     * @param context 浏览器上下文
     */
    public static void attachAjaxInterceptor(BrowserContext context) {
        String script = "(() => {\n" +
                "  console.log('[AJAX_INTERCEPTOR] AJAX 拦截器已启动');\n" +
                "  \n" +
                "  // Hook XMLHttpRequest\n" +
                "  const OriginalXHR = window.XMLHttpRequest;\n" +
                "  \n" +
                "  window.XMLHttpRequest = function() {\n" +
                "    const xhr = new OriginalXHR();\n" +
                "    const originalOpen = xhr.open;\n" +
                "    const originalSend = xhr.send;\n" +
                "    \n" +
                "    let requestUrl = '';\n" +
                "    let requestMethod = '';\n" +
                "    let requestData = null;\n" +
                "    let shouldIntercept = false;\n" +
                "    \n" +
                "    // Hook open 方法\n" +
                "    xhr.open = function(method, url, ...args) {\n" +
                "      requestUrl = url;\n" +
                "      requestMethod = method;\n" +
                "      return originalOpen.call(this, method, url, ...args);\n" +
                "    };\n" +
                "    \n" +
                "    // Hook send 方法\n" +
                "    xhr.send = function(data) {\n" +
                "      requestData = data;\n" +
                "      \n" +
                "      // 【关键修复】检查是否需要拦截（URL + 请求数据 + 方法都要匹配）\n" +
                "      const urlMatch = requestUrl.indexOf('/wapi/zpCommon/toggle/all') !== -1;\n" +
                "      const dataMatch = requestData && requestData.toString().indexOf('9E2145704D3D49648DD85D6DDAC1CF0D') !== -1;\n"
                +
                "      shouldIntercept = urlMatch && dataMatch && requestMethod === 'POST';\n" +
                "      \n" +
                "      if (shouldIntercept) {\n" +
                "        console.warn('[AJAX_INTERCEPTOR] 🎯 拦截到验证请求');\n" +
                "        console.warn('[AJAX_INTERCEPTOR] URL:', requestUrl);\n" +
                "        console.warn('[AJAX_INTERCEPTOR] 数据:', requestData);\n" +
                "        \n" +
                "        // 伪造成功响应\n" +
                "        setTimeout(() => {\n" +
                "          Object.defineProperty(xhr, 'readyState', { value: 4, writable: false });\n" +
                "          Object.defineProperty(xhr, 'status', { value: 200, writable: false });\n" +
                "          Object.defineProperty(xhr, 'responseText', { \n" +
                "            value: JSON.stringify({\n" +
                "              code: 0,\n" +
                "              zpData: {\n" +
                "                nd_result_13912_number_1: {\n" +
                "                  result: 'X' // 伪造验证通过\n" +
                "                }\n" +
                "              }\n" +
                "            }),\n" +
                "            writable: false \n" +
                "          });\n" +
                "          \n" +
                "          if (xhr.onreadystatechange) {\n" +
                "            xhr.onreadystatechange();\n" +
                "          }\n" +
                "          \n" +
                "          console.log('[AJAX_INTERCEPTOR] ✅ 已伪造成功响应，阻止内存炸弹触发');\n" +
                "        }, 100);\n" +
                "        \n" +
                "        return; // 不发送真实请求\n" +
                "      }\n" +
                "      \n" +
                "      // 【关键】其他请求正常发送\n" +
                "      return originalSend.call(this, data);\n" +
                "    };\n" +
                "    \n" +
                "    return xhr;\n" +
                "  };\n" +
                "  \n" +
                "  // Hook fetch API\n" +
                "  const originalFetch = window.fetch;\n" +
                "  window.fetch = function(url, options) {\n" +
                "    // 【关键修复】检查是否是目标验证接口（URL + 请求体都要匹配）\n" +
                "    const urlMatch = url.indexOf('/wapi/zpCommon/toggle/all') !== -1;\n" +
                "    const bodyMatch = options && options.body && \n" +
                "                     options.body.toString().indexOf('9E2145704D3D49648DD85D6DDAC1CF0D') !== -1;\n" +
                "    const methodMatch = !options || !options.method || options.method === 'POST';\n" +
                "    \n" +
                "    if (urlMatch && bodyMatch && methodMatch) {\n" +
                "      console.warn('[AJAX_INTERCEPTOR] 🎯 拦截到 fetch 验证请求:', url);\n" +
                "      \n" +
                "      // 返回伪造的成功响应\n" +
                "      return Promise.resolve(new Response(JSON.stringify({\n" +
                "        code: 0,\n" +
                "        zpData: {\n" +
                "          nd_result_13912_number_1: {\n" +
                "            result: 'X'\n" +
                "          }\n" +
                "        }\n" +
                "      }), {\n" +
                "        status: 200,\n" +
                "        headers: { 'Content-Type': 'application/json' }\n" +
                "      }));\n" +
                "    }\n" +
                "    \n" +
                "    // 【关键】其他请求正常发送\n" +
                "    return originalFetch.call(this, url, options);\n" +
                "  };\n" +
                "  \n" +
                "  console.log('[AJAX_INTERCEPTOR] ✓ AJAX 拦截器已就绪（仅拦截验证接口，不影响其他请求）');\n" +
                "})();";

        context.addInitScript(script);
        log.info("✓ 已注入 AJAX 拦截器（仅针对 Boss 直聘验证接口，不影响其他请求）");
    }

    /**
     * 注入代码美化脚本
     * 
     * 这个脚本会尝试美化页面中的所有 script 标签
     * 
     * @param context 浏览器上下文
     */
    public static void attachCodeBeautifier(BrowserContext context) {
        String script = "(() => {\n" +
                "  console.log('[CODE_BEAUTIFIER] 代码美化脚本已启动');\n" +
                "  \n" +
                "  // 等待页面加载完成\n" +
                "  window.addEventListener('load', () => {\n" +
                "    console.log('[CODE_BEAUTIFIER] 开始分析页面中的脚本');\n" +
                "    \n" +
                "    // 获取所有 script 标签\n" +
                "    const scripts = document.querySelectorAll('script');\n" +
                "    console.log(`[CODE_BEAUTIFIER] 找到 ${scripts.length} 个脚本`);\n" +
                "    \n" +
                "    scripts.forEach((script, index) => {\n" +
                "      if (script.src) {\n" +
                "        console.log(`[SCRIPT ${index + 1}] 外部脚本: ${script.src}`);\n" +
                "      } else if (script.textContent) {\n" +
                "        const content = script.textContent;\n" +
                "        console.log(`[SCRIPT ${index + 1}] 内联脚本 (${content.length} 字符)`);\n" +
                "        \n" +
                "        // 检查是否包含 about:blank\n" +
                "        if (content.includes('about:blank')) {\n" +
                "          console.warn(`[SCRIPT ${index + 1}] ⚠️ 包含 about:blank`);\n" +
                "          console.warn('内容预览:', content.substring(0, 500));\n" +
                "        }\n" +
                "      }\n" +
                "    });\n" +
                "  });\n" +
                "})();";

        context.addInitScript(script);
        log.info("✓ 已注入代码美化脚本");
    }
}
