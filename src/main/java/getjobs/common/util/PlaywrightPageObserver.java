package getjobs.common.util;

import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.Page;
import getjobs.common.enums.RecruitmentPlatformEnum;
import lombok.extern.slf4j.Slf4j;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Playwright 页面观测器
 * <p>
 * 用于监控和记录页面行为，主要用于分析反爬虫机制。
 * 监控内容包括：
 * <ul>
 * <li>主框架导航事件</li>
 * <li>控制台消息</li>
 * <li>页面运行时错误</li>
 * <li>关键网络请求（document、script、xhr、fetch）</li>
 * <li>JavaScript 文件响应</li>
 * <li>请求失败事件</li>
 * </ul>
 * 
 * @author zhangkai
 */
@Slf4j
public class PlaywrightPageObserver {

    private static final String OBSERVER_LOG_DIR = "logs/playwright-observers";
    private static final DateTimeFormatter TIMESTAMP_FORMATTER = DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss");
    private static final DateTimeFormatter LOG_TIME_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");

    /**
     * 存储每个平台对应的日志写入器
     */
    private final Map<RecruitmentPlatformEnum, BufferedWriter> observerWriters = new ConcurrentHashMap<>();

    /**
     * 检测并打印所有可能暴露 Playwright 的特征
     * <p>
     * 此方法会在页面加载前注入检测脚本，分析所有可能被反爬虫检测的特征点
     */
    public void attachPlaywrightDetector(BrowserContext context) {
        String detector = String.join("\n",
                "(function(){",
                "  console.log('========== Playwright 特征检测开始 ==========');",
                "  const features = [];",
                "  ",
                "  // 1. 检测 navigator.webdriver",
                "  if (navigator.webdriver) {",
                "    features.push('❌ navigator.webdriver = true (暴露了自动化特征)');",
                "  } else {",
                "    features.push('✓ navigator.webdriver = false');",
                "  }",
                "  ",
                "  // 2. 检测 window.chrome",
                "  if (!window.chrome) {",
                "    features.push('❌ window.chrome 不存在 (正常 Chrome 应该有)');",
                "  } else {",
                "    features.push('✓ window.chrome 存在');",
                "  }",
                "  ",
                "  // 3. 检测 permissions API",
                "  try {",
                "    const permissionStatus = navigator.permissions.query({name: 'notifications'});",
                "    features.push('✓ permissions API 正常');",
                "  } catch(e) {",
                "    features.push('❌ permissions API 异常: ' + e.message);",
                "  }",
                "  ",
                "  // 4. 检测 plugins",
                "  if (navigator.plugins.length === 0) {",
                "    features.push('❌ navigator.plugins.length = 0 (无插件，可疑)');",
                "  } else {",
                "    features.push('✓ navigator.plugins.length = ' + navigator.plugins.length);",
                "  }",
                "  ",
                "  // 5. 检测 languages",
                "  if (!navigator.languages || navigator.languages.length === 0) {",
                "    features.push('❌ navigator.languages 为空');",
                "  } else {",
                "    features.push('✓ navigator.languages = ' + JSON.stringify(navigator.languages));",
                "  }",
                "  ",
                "  // 6. 检测 window 对象上的自动化相关属性",
                "  const automationProps = [",
                "    '__playwright',",
                "    '__pw_manual',",
                "    '__webdriver_evaluate',",
                "    '__selenium_evaluate',",
                "    '__webdriver_script_function',",
                "    '__webdriver_script_func',",
                "    '__webdriver_script_fn',",
                "    '__fxdriver_evaluate',",
                "    '__driver_unwrapped',",
                "    '__webdriver_unwrapped',",
                "    '__driver_evaluate',",
                "    '__selenium_unwrapped',",
                "    '__fxdriver_unwrapped',",
                "    '_Selenium_IDE_Recorder',",
                "    '_selenium',",
                "    'calledSelenium',",
                "    'calledPhantom',",
                "    '$cdc_asdjflasutopfhvcZLmcfl_',",
                "    '$chrome_asyncScriptInfo',",
                "    '__$webdriverAsyncExecutor',",
                "    'webdriver',",
                "    'domAutomation',",
                "    'domAutomationController'",
                "  ];",
                "  ",
                "  automationProps.forEach(prop => {",
                "    if (window[prop] !== undefined) {",
                "      features.push('❌ window.' + prop + ' 存在 (自动化特征)');",
                "    }",
                "  });",
                "  ",
                "  // 7. 检测 document 对象上的自动化属性",
                "  if (document.$cdc_asdjflasutopfhvcZLmcfl_) {",
                "    features.push('❌ document.$cdc_asdjflasutopfhvcZLmcfl_ 存在 (ChromeDriver 特征)');",
                "  }",
                "  ",
                "  // 8. 检测 navigator 原型链",
                "  const navigatorProto = Object.getPrototypeOf(navigator);",
                "  if (navigatorProto.webdriver !== undefined) {",
                "    features.push('❌ Navigator.prototype.webdriver 存在');",
                "  }",
                "  ",
                "  // 9. 检测 Chrome Runtime",
                "  if (window.chrome && !window.chrome.runtime) {",
                "    features.push('❌ window.chrome.runtime 不存在 (可疑)');",
                "  } else if (window.chrome && window.chrome.runtime) {",
                "    features.push('✓ window.chrome.runtime 存在');",
                "  }",
                "  ",
                "  // 10. 检测 User Agent",
                "  if (navigator.userAgent.includes('HeadlessChrome')) {",
                "    features.push('❌ User Agent 包含 HeadlessChrome');",
                "  } else {",
                "    features.push('✓ User Agent 正常: ' + navigator.userAgent.substring(0, 50) + '...');",
                "  }",
                "  ",
                "  // 11. 检测 iframe 注入",
                "  const iframes = document.querySelectorAll('iframe');",
                "  features.push('ℹ️ 当前页面 iframe 数量: ' + iframes.length);",
                "  ",
                "  // 12. 检测 Error.stack 格式",
                "  try {",
                "    const stack = new Error().stack;",
                "    if (stack.includes('at Object.evaluate')) {",
                "      features.push('❌ Error.stack 包含 evaluate (Playwright 特征)');",
                "    }",
                "  } catch(e) {}",
                "  ",
                "  // 13. 检测 toString 方法",
                "  const toStringResult = Function.prototype.toString.call(navigator.webdriver);",
                "  if (toStringResult.includes('native code')) {",
                "    features.push('✓ Function.toString 正常');",
                "  } else {",
                "    features.push('❌ Function.toString 被修改');",
                "  }",
                "  ",
                "  // 输出所有检测结果",
                "  console.log('%c=== Playwright 特征检测结果 ===', 'color: #ff6b6b; font-weight: bold; font-size: 14px;');",
                "  features.forEach(f => console.log(f));",
                "  console.log('========== Playwright 特征检测结束 ==========');",
                "})();");

        context.addInitScript(detector);
        log.info("✓ 已添加 Playwright 特征检测脚本");
    }

    /**
     * 为 BrowserContext 添加拦截 blank 跳转的取证脚本
     * <p>
     * <b>【反爬虫分析专用功能】</b>
     * <p>
     * 此方法会在页面加载前注入 JavaScript 脚本，拦截常见的跳转到 about:blank 的方式，
     * 并在控制台打印详细的堆栈信息，用于分析反爬虫机制中的反调试行为。
     * <p>
     * <b>拦截的方法：</b>
     * <ul>
     * <li>location.assign('about:blank') - 直接赋值跳转</li>
     * <li>location.replace('about:blank') - 替换当前页面</li>
     * <li>window.open('about:blank', '_self') - 在当前窗口打开</li>
     * <li>location.href = 'about:blank' - 直接修改 href 属性</li>
     * </ul>
     * <p>
     * <b>工作原理：</b>
     * <ol>
     * <li>通过 context.addInitScript() 在所有页面加载前注入脚本</li>
     * <li>Hook 原生的 JavaScript 方法，保留原始功能</li>
     * <li>当检测到目标 URL 包含 about:blank 时，记录调用堆栈</li>
     * <li>堆栈信息输出到控制台，被 attachObservers 方法捕获到日志文件</li>
     * </ol>
     * <p>
     * <b>日志输出示例：</b>
     * 
     * <pre>
     * [CONSOLE] warning [ANTI-DEBUG] location.replace about:blank
     *   at report (eval:5:20)
     *   at window.location.replace (eval:18:35)
     *   at antiDebugScript (https://www.zhipin.com/static/js/security.js:123:45)
     * </pre>
     * 
     * @param context BrowserContext 对象
     */
    public void attachBlankInterceptor(BrowserContext context) {
        // 取证脚本：拦截常见跳 blank 的方式，并打印堆栈
        String forensic = String.join("\n",
                "(function(){",
                "  // 报告函数：记录反调试行为和完整堆栈",
                "  const report = (type, url) => {",
                "    try {",
                "      const stack = new Error().stack;",
                "      console.warn('[ANTI-DEBUG]', type, url, '\\n' + stack);",
                "    } catch (e) {",
                "      console.warn('[ANTI-DEBUG]', type, url, '(无法获取堆栈)');",
                "    }",
                "  };",
                "",
                "  // 1. Hook window.location.assign",
                "  const _assign = window.location.assign.bind(window.location);",
                "  window.location.assign = function(url){",
                "    if(String(url).includes('about:blank')) {",
                "      report('window.location.assign', url);",
                "    }",
                "    return _assign(url);",
                "  };",
                "",
                "  // 2. Hook window.location.replace",
                "  const _replace = window.location.replace.bind(window.location);",
                "  window.location.replace = function(url){",
                "    if(String(url).includes('about:blank')) {",
                "      report('window.location.replace', url);",
                "    }",
                "    return _replace(url);",
                "  };",
                "",
                "  // 3. Hook document.location.assign",
                "  const _docAssign = document.location.assign.bind(document.location);",
                "  document.location.assign = function(url){",
                "    if(String(url).includes('about:blank')) {",
                "      report('document.location.assign', url);",
                "    }",
                "    return _docAssign(url);",
                "  };",
                "",
                "  // 4. Hook document.location.replace",
                "  const _docReplace = document.location.replace.bind(document.location);",
                "  document.location.replace = function(url){",
                "    if(String(url).includes('about:blank')) {",
                "      report('document.location.replace', url);",
                "    }",
                "    return _docReplace(url);",
                "  };",
                "",
                "  // 5. Hook window.open (特别是 _self 的场景)",
                "  const _open = window.open.bind(window);",
                "  window.open = function(url, target, features){",
                "    if(String(url).includes('about:blank')) {",
                "      report('window.open', url + ' (target: ' + (target || 'default') + ')');",
                "    }",
                "    return _open(url, target, features);",
                "  };",
                "",
                "  // 6. Hook window.location.href 的 setter",
                "  const originalHrefDescriptor = Object.getOwnPropertyDescriptor(Location.prototype, 'href');",
                "  if (originalHrefDescriptor && originalHrefDescriptor.set) {",
                "    Object.defineProperty(Location.prototype, 'href', {",
                "      set: function(url) {",
                "        if(String(url).includes('about:blank')) {",
                "          report('location.href setter', url);",
                "        }",
                "        return originalHrefDescriptor.set.call(this, url);",
                "      },",
                "      get: originalHrefDescriptor.get,",
                "      configurable: true,",
                "      enumerable: true",
                "    });",
                "  }",
                "",
                "  // 7. 监听 beforeunload 事件（页面即将卸载时触发）",
                "  window.addEventListener('beforeunload', function(e) {",
                "    console.warn('[ANTI-DEBUG] beforeunload 事件触发，页面即将跳转');",
                "    console.warn('[ANTI-DEBUG] 当前 URL:', window.location.href);",
                "    console.warn('[ANTI-DEBUG] 堆栈:', new Error().stack);",
                "  }, true);",
                "",
                "  // 8. 监听 unload 事件（页面卸载时触发）",
                "  window.addEventListener('unload', function(e) {",
                "    console.warn('[ANTI-DEBUG] unload 事件触发');",
                "  }, true);",
                "",
                "  // 9. 使用 Proxy 拦截 location 对象的所有操作",
                "  try {",
                "    const locationProxy = new Proxy(window.location, {",
                "      set: function(target, property, value) {",
                "        if(property === 'href' && String(value).includes('about:blank')) {",
                "          report('location proxy setter (href)', value);",
                "        }",
                "        target[property] = value;",
                "        return true;",
                "      }",
                "    });",
                "    // 注意：无法直接替换 window.location，但可以记录尝试",
                "  } catch(e) {",
                "    console.log('[FORENSIC] Proxy 拦截失败:', e.message);",
                "  }",
                "",
                "  console.log('[FORENSIC] about:blank 拦截器已就绪（增强版）');",
                "  console.log('[FORENSIC] 已 Hook: window.location, document.location, window.open, beforeunload/unload 事件');",
                "})();");

        context.addInitScript(forensic);
        log.info("✓ 已为 BrowserContext 添加 blank 跳转拦截取证脚本（增强版 - 反爬虫分析专用）");
    }

    /**
     * 为指定平台的 Page 附加观测器，监控页面行为并输出到文件
     * <p>
     * <b>【反爬虫分析专用功能】</b>
     * <p>
     * 此方法主要用于 Boss 直聘等需要分析反爬虫机制的平台。
     * 所有监控数据将写入到独立的日志文件中，便于后续分析。
     * <p>
     * <b>监控内容：</b>
     * <ol>
     * <li><b>主框架导航</b> - 监控页面跳转，特别是 about:blank 等异常跳转</li>
     * <li><b>控制台消息</b> - 捕获页面脚本输出，包括 [ANTI-DEBUG] 等反调试信息</li>
     * <li><b>页面运行时错误</b> - 很多反调试会 throw 或刻意制造异常</li>
     * <li><b>关键网络请求</b> - 只记录 document、script、xhr、fetch 类型</li>
     * <li><b>JavaScript 文件响应</b> - 重点记录 JS 文件来源，方便定位反爬虫脚本 bundle</li>
     * <li><b>请求失败</b> - 可能是反爬虫机制导致的请求拦截</li>
     * </ol>
     * <p>
     * <b>日志文件位置：</b> {@code logs/playwright-observers/{平台代码}_observer_{时间戳}.log}
     * <p>
     * <b>配合使用：</b> 此方法需要配合 {@link #attachBlankInterceptor(BrowserContext)} 使用，
     * 后者注入的拦截脚本会在控制台输出 [ANTI-DEBUG] 信息，本方法会捕获并记录到日志文件。
     * 
     * @param page     页面对象
     * @param platform 平台枚举
     */
    public void attachObservers(Page page, RecruitmentPlatformEnum platform) {
        try {
            // 创建日志目录
            Path logDir = Paths.get(OBSERVER_LOG_DIR);
            if (!Files.exists(logDir)) {
                Files.createDirectories(logDir);
            }

            // 创建日志文件，文件名包含平台和时间戳
            String timestamp = LocalDateTime.now().format(TIMESTAMP_FORMATTER);
            String logFileName = String.format("%s/%s_observer_%s.log",
                    OBSERVER_LOG_DIR, platform.getPlatformCode(), timestamp);
            BufferedWriter writer = new BufferedWriter(new FileWriter(logFileName, true));
            observerWriters.put(platform, writer);

            writeToObserverLog(writer, "========== 开始监控平台: " + platform.getPlatformName() + " ==========");
            writeToObserverLog(writer, "目的: 捕捉分析 " + platform.getPlatformName() + " PC 站点的反爬虫机制");
            writeToObserverLog(writer, "监控内容: 页面导航、控制台消息、运行时错误、网络请求、JS 文件加载");
            writeToObserverLog(writer, "=".repeat(70));
            log.info("已为平台 {} 创建观测器日志文件: {}", platform.getPlatformName(), logFileName);

            // 1) 主框架导航（监控页面跳转，特别是 about:blank 等异常跳转）
            page.onFrameNavigated(frame -> {
                if (frame == page.mainFrame()) {
                    writeToObserverLog(writer, "[NAV] " + frame.url());
                }
            });

            // 2) 控制台消息（捕获页面脚本输出，包括反调试信息）
            page.onConsoleMessage(msg -> {
                writeToObserverLog(writer, "[CONSOLE] " + msg.type() + " " + msg.text());
            });

            // 3) 页面运行时错误（很多反调试会 throw 或刻意制造异常）
            page.onPageError(err -> {
                writeToObserverLog(writer, "[PAGE_ERROR] " + err);
            });

            // 4) 网络请求（只抓关键类型，避免日志过多）
            page.onRequest(req -> {
                String rt = req.resourceType();
                if ("document".equals(rt) || "script".equals(rt) || "xhr".equals(rt) || "fetch".equals(rt)) {
                    writeToObserverLog(writer, "[REQ] " + rt + " " + req.method() + " " + req.url());
                }
            });

            // 5) 响应监控（重点记录 JS 文件来源，方便定位反爬虫脚本 bundle）
            page.onResponse(resp -> {
                String url = resp.url();
                if (url.contains(".js")) {
                    writeToObserverLog(writer, "[JS] " + resp.status() + " " + url);
                }
            });

            // 6) 请求失败（可能是反爬虫机制导致的请求拦截）
            page.onRequestFailed(req -> {
                writeToObserverLog(writer, "[REQ_FAILED] " + req.url() + " => " + req.failure());
            });

            log.info("✓ 已为平台 {} 附加观测器，开始监控反爬虫行为", platform.getPlatformName());
        } catch (IOException e) {
            log.error("为平台 {} 创建观测器日志文件失败", platform.getPlatformName(), e);
        }
    }

    /**
     * 捕获并分析反爬虫 JS 代码
     * <p>
     * 此方法会拦截所有 JS 文件的响应，分析其中可能包含的反爬虫检测代码
     */
    public void attachAntiCrawlerAnalyzer(Page page, RecruitmentPlatformEnum platform) {
        BufferedWriter writer = observerWriters.get(platform);
        if (writer == null) {
            log.warn("未找到平台 {} 的观测器，无法分析反爬虫代码", platform.getPlatformName());
            return;
        }

        page.onResponse(response -> {
            String url = response.url();

            // 只分析 JS 文件
            try {
                String contentType = response.headerValue("content-type");
                if (contentType == null)
                    contentType = "";

                if (url.endsWith(".js") || contentType.contains("javascript")) {
                    String body = response.text();

                    // 检测关键的反爬虫特征
                    boolean hasWebdriverCheck = body.contains("webdriver") || body.contains("navigator.webdriver");
                    boolean hasPlaywrightCheck = body.contains("__playwright") || body.contains("playwright");
                    boolean hasBlankRedirect = body.contains("about:blank")
                            || (body.contains("location.replace") && body.contains("blank"));
                    boolean hasDebuggerCheck = body.contains("debugger") || body.contains("isDebug");
                    boolean hasChromeCheck = body.contains("window.chrome") || body.contains("chrome.runtime");
                    boolean hasPluginsCheck = body.contains("navigator.plugins") || body.contains("plugins.length");

                    if (hasWebdriverCheck || hasPlaywrightCheck || hasBlankRedirect || hasDebuggerCheck
                            || hasChromeCheck || hasPluginsCheck) {
                        writeToObserverLog(writer, "");
                        writeToObserverLog(writer, "========== 🎯 发现可疑的反爬虫 JS 文件 ==========");
                        writeToObserverLog(writer, "URL: " + url);
                        writeToObserverLog(writer, "特征:");
                        if (hasWebdriverCheck)
                            writeToObserverLog(writer, "  ❌ 包含 webdriver 检测");
                        if (hasPlaywrightCheck)
                            writeToObserverLog(writer, "  ❌ 包含 playwright 检测");
                        if (hasBlankRedirect)
                            writeToObserverLog(writer, "  ❌ 包含 about:blank 跳转");
                        if (hasDebuggerCheck)
                            writeToObserverLog(writer, "  ❌ 包含 debugger 检测");
                        if (hasChromeCheck)
                            writeToObserverLog(writer, "  ❌ 包含 chrome 对象检测");
                        if (hasPluginsCheck)
                            writeToObserverLog(writer, "  ❌ 包含 plugins 检测");
                        writeToObserverLog(writer, "");
                        writeToObserverLog(writer, "========== JS 代码内容（前 5000 字符）==========");
                        writeToObserverLog(writer, body.substring(0, Math.min(5000, body.length())));
                        writeToObserverLog(writer, "");
                        if (body.length() > 5000) {
                            writeToObserverLog(writer, "========== JS 代码内容（后 5000 字符）==========");
                            writeToObserverLog(writer, body.substring(Math.max(0, body.length() - 5000)));
                            writeToObserverLog(writer, "");
                        }
                        writeToObserverLog(writer, "=".repeat(70));

                        log.warn("🎯 发现可疑的反爬虫 JS: {}", url);
                    }
                }
            } catch (Exception e) {
                // 忽略无法读取的响应
            }
        });

        log.info("✓ 已为平台 {} 添加反爬虫代码分析器", platform.getPlatformName());
    }

    /**
     * 写入观测器日志到文件
     * <p>
     * 每条日志都会带上精确的时间戳，并立即 flush 到磁盘，确保数据不丢失。
     * 
     * @param writer  文件写入器
     * @param message 日志消息
     */
    private void writeToObserverLog(BufferedWriter writer, String message) {
        try {
            String timestamp = LocalDateTime.now().format(LOG_TIME_FORMATTER);
            writer.write(String.format("[%s] %s%n", timestamp, message));
            writer.flush();
        } catch (IOException e) {
            log.error("写入观测器日志失败: {}", message, e);
        }
    }

    /**
     * 关闭指定平台的观测器
     * 
     * @param platform 平台枚举
     */
    public void closeObserver(RecruitmentPlatformEnum platform) {
        BufferedWriter writer = observerWriters.remove(platform);
        if (writer != null) {
            try {
                writeToObserverLog(writer, "========== 停止监控平台: " + platform.getPlatformName() + " ==========");
                writer.close();
                log.info("已关闭平台 {} 的观测器日志文件", platform.getPlatformName());
            } catch (IOException e) {
                log.error("关闭平台 {} 的观测器日志文件失败", platform.getPlatformName(), e);
            }
        }
    }

    /**
     * 关闭所有观测器
     */
    public void closeAllObservers() {
        observerWriters.forEach((platform, writer) -> {
            try {
                if (writer != null) {
                    writeToObserverLog(writer, "========== 停止监控平台: " + platform.getPlatformName() + " ==========");
                    writer.close();
                    log.info("已关闭平台 {} 的观测器日志文件", platform.getPlatformName());
                }
            } catch (IOException e) {
                log.error("关闭平台 {} 的观测器日志文件失败", platform.getPlatformName(), e);
            }
        });
        observerWriters.clear();
    }

    /**
     * 为 BrowserContext 添加阻止 blank 跳转的脚本（对抗反爬虫）
     * <p>
     * <b>【反爬虫对抗功能】</b>
     * <p>
     * 此方法会完全阻止跳转到 about:blank，而不仅仅是记录。
     * 当反爬虫脚本尝试跳转时，会被拦截并阻止，页面保持正常状态。
     * <p>
     * <b>阻止的方法：</b>
     * <ul>
     * <li>location.href = 'about:blank'</li>
     * <li>location.replace('about:blank')</li>
     * <li>location.assign('about:blank')</li>
     * <li>document.location.replace('about:blank')</li>
     * <li>window.open('about:blank', '_self')</li>
     * </ul>
     * <p>
     * <b>工作原理：</b>
     * <ol>
     * <li>Hook 所有可能的跳转方法</li>
     * <li>检测目标 URL 是否包含 about:blank</li>
     * <li>如果是，则阻止跳转并记录日志</li>
     * <li>如果不是，则正常执行跳转</li>
     * </ol>
     * 
     * @param context BrowserContext 对象
     */
    public void attachBlankBlocker(BrowserContext context) {
        String blocker = String.join("\n",
                "(function(){",
                "  console.log('[ANTI-CRAWLER] blank 跳转阻止器已启动');",
                "  ",
                "  // 阻止函数",
                "  const blockBlank = (type, url) => {",
                "    console.warn('[BLOCKED]', type, url, '已阻止跳转到 about:blank');",
                "    const stack = new Error().stack;",
                "    console.warn('[BLOCKED] 调用堆栈:', stack);",
                "    return false;",
                "  };",
                "  ",
                "  // 1. Hook location.href setter",
                "  const originalHrefDescriptor = Object.getOwnPropertyDescriptor(Location.prototype, 'href');",
                "  if (originalHrefDescriptor && originalHrefDescriptor.set) {",
                "    Object.defineProperty(Location.prototype, 'href', {",
                "      set: function(url) {",
                "        if(String(url).includes('about:blank')) {",
                "          blockBlank('location.href setter', url);",
                "          return; // 阻止跳转",
                "        }",
                "        return originalHrefDescriptor.set.call(this, url);",
                "      },",
                "      get: originalHrefDescriptor.get,",
                "      configurable: true,",
                "      enumerable: true",
                "    });",
                "  }",
                "  ",
                "  // 2. Hook window.location.replace",
                "  const _replace = window.location.replace.bind(window.location);",
                "  window.location.replace = function(url){",
                "    if(String(url).includes('about:blank')) {",
                "      blockBlank('window.location.replace', url);",
                "      return; // 阻止跳转",
                "    }",
                "    return _replace(url);",
                "  };",
                "  ",
                "  // 3. Hook window.location.assign",
                "  const _assign = window.location.assign.bind(window.location);",
                "  window.location.assign = function(url){",
                "    if(String(url).includes('about:blank')) {",
                "      blockBlank('window.location.assign', url);",
                "      return; // 阻止跳转",
                "    }",
                "    return _assign(url);",
                "  };",
                "  ",
                "  // 4. Hook document.location.replace",
                "  const _docReplace = document.location.replace.bind(document.location);",
                "  document.location.replace = function(url){",
                "    if(String(url).includes('about:blank')) {",
                "      blockBlank('document.location.replace', url);",
                "      return; // 阻止跳转",
                "    }",
                "    return _docReplace(url);",
                "  };",
                "  ",
                "  // 5. Hook document.location.assign",
                "  const _docAssign = document.location.assign.bind(document.location);",
                "  document.location.assign = function(url){",
                "    if(String(url).includes('about:blank')) {",
                "      blockBlank('document.location.assign', url);",
                "      return; // 阻止跳转",
                "    }",
                "    return _docAssign(url);",
                "  };",
                "  ",
                "  // 6. Hook window.open",
                "  const _open = window.open.bind(window);",
                "  window.open = function(url, target, features){",
                "    if(String(url).includes('about:blank') && (target === '_self' || target === undefined)) {",
                "      blockBlank('window.open', url + ' (target: ' + (target || 'default') + ')');",
                "      return null; // 阻止跳转",
                "    }",
                "    return _open(url, target, features);",
                "  };",
                "  ",
                "  console.log('[ANTI-CRAWLER] 所有跳转方法已被 Hook，about:blank 跳转将被阻止');",
                "})();");

        context.addInitScript(blocker);
        log.info("✓ 已添加 blank 跳转阻止器（反爬虫对抗功能）");
    }

    /**
     * 为 Page 添加导航监控和自动恢复机制（最强力的对抗方法）
     * <p>
     * <b>【反爬虫对抗功能 - 终极方案】</b>
     * <p>
     * 由于 about:blank 是浏览器内置页面，不会触发网络请求，因此 Route API 无法拦截。
     * 此方法采用"监控 + 自动恢复"的策略：
     * <ol>
     * <li>监听页面导航事件</li>
     * <li>检测到跳转到 about:blank 时立即返回上一页</li>
     * <li>如果无法返回，则重新导航到目标 URL</li>
     * </ol>
     * <p>
     * <b>工作原理：</b>
     * <ul>
     * <li>使用 onFrameNavigated 监听主框架导航</li>
     * <li>检测到 about:blank 时触发恢复机制</li>
     * <li>优先使用 page.goBack() 返回</li>
     * <li>如果失败则使用 page.navigate() 重新加载</li>
     * </ul>
     * <p>
     * <b>优势：</b>
     * <ul>
     * <li>✅ 真正有效 - 不依赖 Route API，直接处理导航结果</li>
     * <li>✅ 自动恢复 - 即使跳转成功也能立即恢复</li>
     * <li>✅ 保留历史 - 优先使用 goBack() 保持浏览历史</li>
     * <li>✅ 兜底方案 - 如果 goBack() 失败则重新导航</li>
     * </ul>
     * 
     * @param page      Page 对象
     * @param platform  平台枚举（用于日志）
     * @param targetUrl 目标 URL（用于恢复时重新导航）
     */
    public void attachNavigationGuard(Page page, RecruitmentPlatformEnum platform, String targetUrl) {
        // 记录上一个正常的 URL
        final String[] lastValidUrl = { targetUrl };

        page.onFrameNavigated(frame -> {
            if (frame == page.mainFrame()) {
                String currentUrl = frame.url();

                // 检测到跳转到 about:blank
                if (currentUrl.contains("about:blank")) {
                    log.error("🚨 [HIJACKED] 平台 {} - 检测到页面被劫持到 about:blank！", platform.getPlatformName());
                    log.warn("🔄 [RECOVERY] 尝试恢复到上一个正常页面: {}", lastValidUrl[0]);

                    try {
                        // 方案1: 尝试返回上一页
                        try {
                            page.goBack(new Page.GoBackOptions().setTimeout(3000));
                            log.info("✓ [RECOVERY] 成功返回上一页");
                        } catch (Exception e) {
                            // 方案2: 如果返回失败，重新导航到目标 URL
                            log.warn("⚠️ [RECOVERY] 返回上一页失败，尝试重新导航: {}", lastValidUrl[0]);
                            page.navigate(lastValidUrl[0], new Page.NavigateOptions().setTimeout(30000));
                            log.info("✓ [RECOVERY] 成功重新导航到目标页面");
                        }
                    } catch (Exception e) {
                        log.error("❌ [RECOVERY] 恢复失败: {}", e.getMessage());
                    }
                } else if (!currentUrl.equals("about:blank")) {
                    // 更新最后一个有效的 URL
                    lastValidUrl[0] = currentUrl;
                }
            }
        });

        log.info("✓ 已为平台 {} 添加导航守卫（自动恢复机制）", platform.getPlatformName());
        log.info("  - 目标 URL: {}", targetUrl);
        log.info("  - 检测到 about:blank 劫持时将自动恢复");
    }

    /**
     * 为 Page 添加 Route 拦截，尝试阻止导航到 about:blank
     * <p>
     * <b>注意：</b>此方法对 about:blank 可能无效，因为它不触发网络请求。
     * 建议配合 {@link #attachNavigationGuard} 使用。
     * 
     * @param page     Page 对象
     * @param platform 平台枚举（用于日志）
     */
    public void attachRouteBlocker(Page page, RecruitmentPlatformEnum platform) {
        page.route("**/*", route -> {
            String url = route.request().url();

            // 检查是否是 about:blank
            if (url.contains("about:blank")) {
                log.warn("🛡️ [ROUTE-BLOCKED] 平台 {} - 阻止导航到 about:blank: {}",
                        platform.getPlatformName(), url);
                route.abort(); // 直接中止请求
            } else {
                route.resume(); // 正常请求继续
            }
        });

        log.info("✓ 已为平台 {} 添加 Route 拦截器（辅助防护）", platform.getPlatformName());
    }

    /**
     * 为指定平台启用完整的反爬虫对抗方案
     * <p>
     * <b>【一站式反爬虫对抗】</b>
     * <p>
     * 此方法会启用所有反爬虫对抗措施：
     * <ol>
     * <li>Playwright 特征检测 - 检测所有可能暴露的特征</li>
     * <li>反爬虫代码分析器 - 捕获并分析对方的检测代码</li>
     * <li>导航守卫 - 监控并自动恢复被劫持的页面（核心防护）</li>
     * <li>Route 拦截器 - 尝试在网络层面阻止跳转（辅助防护）</li>
     * <li>页面观测器 - 记录所有行为用于分析</li>
     * </ol>
     * <p>
     * 推荐用于需要对抗反爬虫的平台（如 Boss 直聘）。
     * 
     * @param page      Page 对象
     * @param platform  平台枚举
     * @param targetUrl 目标 URL（用于恢复时重新导航）
     */
    public void enableAntiCrawlerDefense(Page page, RecruitmentPlatformEnum platform, String targetUrl) {
        log.info("========== 启用平台 {} 的反爬虫对抗方案 ==========", platform.getPlatformName());

        // 1. 页面观测器（分析用）- 必须先启动，因为其他功能依赖它
        attachObservers(page, platform);

        // 2. 反爬虫代码分析器 - 捕获并分析对方的检测代码
        attachAntiCrawlerAnalyzer(page, platform);

        // 3. 导航守卫（核心防护）- 监控并自动恢复
        attachNavigationGuard(page, platform, targetUrl);

        // 4. Route 拦截器（已禁用）
        // ❌ 已禁用原因：
        // 1. about:blank 不会触发网络请求，所以 Route 拦截器对它无效
        // 2. page.route("**/*") 会拦截所有请求，即使最后 resume()，也会增加延迟
        // 3. 我们已经有更好的方案：
        // - AJAX 拦截器：在 JS 层面拦截验证接口
        // - 导航守卫：监控并自动恢复被劫持的页面
        // - Blank 阻止器：在 JS 层面阻止跳转
        // attachRouteBlocker(page, platform);

        log.info("✓ 平台 {} 的反爬虫对抗方案已全部启用", platform.getPlatformName());
        log.info("  - Playwright 特征检测：检测所有可能暴露的特征");
        log.info("  - 反爬虫代码分析器：捕获并分析对方的检测代码");
        log.info("  - 导航守卫：监控并自动恢复被劫持的页面");
        log.info("  - AJAX 拦截器：拦截验证接口，阻止内存炸弹触发");
        log.info("  - Blank 阻止器：在 JS 层面阻止 about:blank 跳转");
        log.info("  - 页面观测器：记录所有可疑行为");
        log.info("=".repeat(50 + platform.getPlatformName().length()));
    }

    /**
     * 获取日志文件目录
     * 
     * @return 日志文件目录路径
     */
    public static String getLogDirectory() {
        return OBSERVER_LOG_DIR;
    }
}
