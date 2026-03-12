package getjobs.common.service;

import com.microsoft.playwright.*;
import com.microsoft.playwright.options.Cookie;
import com.microsoft.playwright.options.WaitForSelectorState;
import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.common.util.JsCaptureManager;
import getjobs.common.util.PageRecoveryManager;
import getjobs.common.util.StealthScriptManager;
import getjobs.repository.entity.ConfigEntity;
import getjobs.service.ConfigService;
import lombok.extern.slf4j.Slf4j;
import com.github.openjson.JSONArray;
import com.github.openjson.JSONObject;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

/**
 * Playwright服务，统一管理Playwright实例、浏览器、上下文和页面。
 * 为每个招聘平台提供独立的BrowserContext和Page。
 * 
 * <h2>反爬虫检测对抗配置说明</h2>
 * 
 * <p>
 * 本服务针对BOSS直聘等网站的security-js反爬虫检测机制，实施了全面的反检测配置。
 * 
 * <h3>检测点覆盖清单：</h3>
 * <ol>
 * <li><b>WebDriver检测</b> - navigator.webdriver, window.__webdriver
 * <ul>
 * <li>配置: --disable-blink-features=AutomationControlled</li>
 * <li>脚本: 删除webdriver属性，设置为undefined</li>
 * </ul>
 * </li>
 * 
 * <li><b>ChromeDriver变量检测</b> - $cdc_, $chrome
 * <ul>
 * <li>脚本: 删除所有$cdc_和$chrome开头的变量</li>
 * </ul>
 * </li>
 * 
 * <li><b>Phantom/Headless检测</b> - window.callPhantom, window._phantom
 * <ul>
 * <li>配置: setHeadless(false) - 使用有头模式</li>
 * <li>脚本: 删除callPhantom和_phantom属性</li>
 * </ul>
 * </li>
 * 
 * <li><b>Navigator.plugins检测</b> - plugins.length === 0
 * <ul>
 * <li>脚本: 伪造3个常见插件（PDF Plugin, PDF Viewer, Native Client）</li>
 * </ul>
 * </li>
 * 
 * <li><b>Navigator.languages检测</b> - languages为空或只有一个
 * <ul>
 * <li>配置: setLocale("zh-CN")</li>
 * <li>脚本: 设置为['zh-CN', 'zh', 'en-US', 'en']</li>
 * </ul>
 * </li>
 * 
 * <li><b>Navigator.hardwareConcurrency检测</b> - 值为1或异常
 * <ul>
 * <li>脚本: 设置为8（模拟8核CPU）</li>
 * </ul>
 * </li>
 * 
 * <li><b>Navigator.deviceMemory检测</b> - 缺失或异常
 * <ul>
 * <li>脚本: 设置为8（模拟8GB内存）</li>
 * </ul>
 * </li>
 * 
 * <li><b>Navigator.vendor检测</b>
 * <ul>
 * <li>脚本: 设置为'Google Inc.'</li>
 * </ul>
 * </li>
 * 
 * <li><b>Navigator.platform检测</b>
 * <ul>
 * <li>脚本: 设置为'MacIntel'</li>
 * </ul>
 * </li>
 * 
 * <li><b>Navigator.maxTouchPoints检测</b>
 * <ul>
 * <li>脚本: 设置为0（桌面设备）</li>
 * </ul>
 * </li>
 * 
 * <li><b>Chrome对象完整性检测</b> - window.chrome
 * <ul>
 * <li>配置: 加载真实Chrome扩展（uBlock Origin）</li>
 * <li>脚本: 伪造chrome.runtime, chrome.loadTimes, chrome.csi, chrome.app</li>
 * </ul>
 * </li>
 * 
 * <li><b>扩展检测</b> - chrome-extension:// 请求
 * <ul>
 * <li>配置: 加载真实扩展</li>
 * <li>脚本: 拦截chrome-extension://请求，返回成功响应</li>
 * </ul>
 * </li>
 * 
 * <li><b>Canvas指纹检测</b>
 * <ul>
 * <li>脚本: 在toDataURL时添加微小随机噪点</li>
 * </ul>
 * </li>
 * 
 * <li><b>WebGL指纹检测</b>
 * <ul>
 * <li>配置: --disable-gpu（避免SwiftShader）</li>
 * <li>脚本: 伪装UNMASKED_VENDOR_WEBGL和UNMASKED_RENDERER_WEBGL</li>
 * </ul>
 * </li>
 * 
 * <li><b>Permissions API检测</b>
 * <ul>
 * <li>配置: setPermissions(["geolocation", "notifications"])</li>
 * <li>脚本: 修改permissions.query返回值</li>
 * </ul>
 * </li>
 * 
 * <li><b>Screen属性一致性检测</b>
 * <ul>
 * <li>脚本: 确保availWidth/availHeight与width/height一致</li>
 * </ul>
 * </li>
 * 
 * <li><b>Function.toString检测</b>
 * <ul>
 * <li>脚本: 让被修改的函数看起来像[native code]</li>
 * </ul>
 * </li>
 * 
 * <li><b>自动化工具特征检测</b>
 * <ul>
 * <li>配置: --exclude-switches=enable-automation</li>
 * <li>脚本: 删除所有Playwright/Selenium/WebDriver特有属性</li>
 * </ul>
 * </li>
 * </ol>
 * 
 * <h3>配置优先级：</h3>
 * <ol>
 * <li>浏览器启动参数（BrowserType.LaunchPersistentContextOptions）</li>
 * <li>Context初始化脚本（addInitScript）</li>
 * <li>扩展加载（Chrome Extension）</li>
 * <li>AJAX拦截器（拦截反爬虫验证接口）</li>
 * </ol>
 * 
 * @see <a href="logs/anti-crawler-analysis/security-js-analysis.md">Security-JS
 *      分析报告</a>
 */
@Slf4j
@Service
public class PlaywrightService {

    private final ConfigService configService;

    private Playwright playwright;
    // 注意：使用 launchPersistentContext 时，Browser 嵌入在 BrowserContext 中
    private BrowserContext context;
    private final Map<RecruitmentPlatformEnum, Page> pageMap = new ConcurrentHashMap<>();

    private static final int DEFAULT_TIMEOUT = 30000;

    // 扩展相关路径
    private Path extensionPath;
    private Path userDataDir;
    // 取证/观测日志（BOSS 专用）
    private Path bossForensicLogFile;
    private final Object bossForensicLogLock = new Object();

    // 平台 Cookie 自动备份任务（定时从当前页面抓取 Cookie 写入配置）
    private final ScheduledExecutorService cookieBackupScheduler = Executors.newSingleThreadScheduledExecutor(
            r -> {
                Thread t = new Thread(r, "cookie-backup-scheduler");
                t.setDaemon(true);
                return t;
            });
    private final Map<RecruitmentPlatformEnum, ScheduledFuture<?>> cookieBackupTasks = new ConcurrentHashMap<>();

    public PlaywrightService(ConfigService configService) {
        this.configService = configService;
    }

    private static final String[] USER_AGENTS = {
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
    };

    @PostConstruct
    public void init() {
        try {
            log.info("=== 开始初始化 Playwright 服务 ===");
            log.info("（数据库已就绪，可以加载平台配置和Cookie）");
            playwright = Playwright.create();

            // 准备Chrome扩展
            extensionPath = prepareExtension();
            userDataDir = Files.createTempDirectory("playwright-user-data");
            log.info("✓ Chrome扩展已准备: {}", extensionPath);
            log.info("✓ 用户数据目录: {}", userDataDir);
            bossForensicLogFile = initBossForensicLogFile();
            log.info("✓ BOSS取证日志文件: {}", bossForensicLogFile.toAbsolutePath());

            String randomUserAgent = getRandomUserAgent();

            // 使用 launchPersistentContext 加载扩展
            // 注意：launchPersistentContext 同时创建 browser 和 context
            context = playwright.chromium().launchPersistentContext(
                    userDataDir,
                    new BrowserType.LaunchPersistentContextOptions()
                            .setHeadless(false) // 必须使用有头模式，headless 容易被检测
                            .setSlowMo(50) // 减慢操作速度，模拟人类行为
                            .setUserAgent(randomUserAgent)
                            .setLocale("zh-CN")
                            .setTimezoneId("Asia/Shanghai")
                            .setBypassCSP(true)
                            .setPermissions(List.of("geolocation", "notifications"))
                            .setIgnoreDefaultArgs(List.of("--enable-automation")) // 禁用自动化标记
                            .setArgs(List.of(
                                    // ========== 核心反检测参数 ==========
                                    "--disable-blink-features=AutomationControlled", // 最重要！禁用自动化控制特征
                                    "--disable-infobars", // 隐藏 "Chrome 正受到自动测试软件的控制" 提示

                                    // ========== 扩展相关 ==========
                                    "--disable-extensions-except=" + extensionPath.toAbsolutePath(),
                                    "--load-extension=" + extensionPath.toAbsolutePath(),

                                    // ========== 性能和稳定性 ==========
                                    "--disable-dev-shm-usage", // 解决共享内存不足问题
                                    "--no-sandbox", // 禁用沙箱（Docker环境需要）
                                    "--disable-setuid-sandbox",

                                    // ========== 隐藏自动化特征 ==========
                                    "--disable-web-security", // 禁用Web安全策略
                                    "--disable-features=VizDisplayCompositor",
                                    "--disable-features=IsolateOrigins,site-per-process", // 禁用站点隔离
                                    "--disable-site-isolation-trials",

                                    // ========== 用户体验优化 ==========
                                    "--no-first-run", // 跳过首次运行向导
                                    "--no-default-browser-check", // 跳过默认浏览器检查
                                    "--password-store=basic", // 使用基本密码存储
                                    "--use-mock-keychain", // 使用模拟钥匙串

                                    // ========== 后台进程优化 ==========
                                    "--disable-background-timer-throttling", // 禁用后台定时器节流
                                    "--disable-renderer-backgrounding", // 禁用渲染器后台化
                                    "--disable-backgrounding-occluded-windows", // 禁用被遮挡窗口的后台化
                                    "--disable-ipc-flooding-protection", // 禁用IPC洪水保护

                                    // ========== GPU 和渲染 ==========
                                    "--disable-gpu", // 禁用GPU加速（避免WebGL检测异常）
                                    "--disable-software-rasterizer", // 禁用软件光栅化

                                    // ========== 其他反检测参数 ==========
                                    "--disable-blink-features=AutomationControlled", // 再次强调
                                    "--exclude-switches=enable-automation", // 排除自动化开关
                                    "--disable-component-extensions-with-background-pages", // 禁用带后台页面的组件扩展
                                    "--disable-default-apps", // 禁用默认应用
                                    "--disable-sync", // 禁用同步
                                    "--metrics-recording-only", // 仅记录指标
                                    "--mute-audio", // 静音
                                    "--no-report-upload", // 不上传报告
                                    "--test-type" // 测试类型（有助于绕过某些检测）
                            )));

            // 保存 launchPersistentContext 默认打开的空白页面，稍后关闭
            List<Page> defaultPages = new ArrayList<>(context.pages());
            log.info("默认打开的页面数量: {}", defaultPages.size());

            // 为持久化上下文添加反检测脚本
//            addStealthScripts(context);
            StealthScriptManager.addAllStealthScripts(context);

            // 启用 JS 捕获能力（捕获所有 JS 文件用于分析反爬虫机制）
//            log.info("启用 JS 捕获能力...");
//            JsCaptureManager jsCaptureManager = JsCaptureManager.captureAll(context);
//            log.info("✓ JS 捕获能力已启用");

            for (RecruitmentPlatformEnum platform : RecruitmentPlatformEnum.values()) {
                Page page = createNewPage(context);

                // 仅对 Boss 直聘启用取证/观测器（用于定位 about:blank、脚本错误、扩展检测等）
                if (platform == RecruitmentPlatformEnum.BOSS_ZHIPIN) {
                    attachObservers(page);
                }

                // 先加载Cookie，再导航到页面
                loadPlatformCookies(platform, page);

                page.navigate(platform.getHomeUrl());
                pageMap.put(platform, page);
                log.info("✓ 已为平台 {} 初始化页面: {}", platform.getPlatformName(),
                        platform.getHomeUrl());

                // 启动当前平台页面 Cookie 的定时备份任务（每5秒备份一次）
                startCookieAutoBackup(platform);
            }

            // 关闭默认的空白页面（about:blank）
            for (Page defaultPage : defaultPages) {
                try {
                    String url = defaultPage.url();
                    if ("about:blank".equals(url) || url.isEmpty()) {
                        defaultPage.close();
                        log.info("✓ 已关闭默认空白页面");
                    }
                } catch (Exception e) {
                    log.warn("关闭默认页面失败", e);
                }
            }

            log.info("✓ Playwright 服务初始化成功（已加载Chrome扩展）");
            log.info("=== Playwright 服务初始化完成 ===");
        } catch (Exception e) {
            log.error("Failed to initialize Playwright service", e);
            // Ensure cleanup is called on initialization failure
            close();
            throw new RuntimeException("Failed to initialize Playwright service", e);
        }
    }

    /**
     * 准备Chrome扩展目录
     * 从classpath的resources/extensions复制到临时目录
     */
    private Path prepareExtension() throws IOException {
        Path tempExtensionDir = Files.createTempDirectory("chrome-extension-");
        Path extensionDir = tempExtensionDir.resolve("ublock-origin");
        Files.createDirectories(extensionDir);

        // 需要复制的扩展文件列表
        String[] extensionFiles = {
                "manifest.json",
                "background.js",
                "content.js",
                "icon16.png",
                "icon48.png",
                "icon128.png"
        };

        for (String fileName : extensionFiles) {
            String resourcePath = "extensions/ublock-origin/" + fileName;
            try (InputStream is = getClass().getClassLoader().getResourceAsStream(resourcePath)) {
                if (is != null) {
                    Files.copy(is, extensionDir.resolve(fileName), StandardCopyOption.REPLACE_EXISTING);
                    log.debug("已复制扩展文件: {}", fileName);
                } else {
                    log.warn("扩展文件不存在: {}", resourcePath);
                }
            }
        }

        log.info("扩展目录已准备: {}", extensionDir);
        return extensionDir;
    }

    /**
     * 为BrowserContext添加反检测脚本
     * 支持持久化上下文和普通上下文
     */
    private void addStealthScripts(BrowserContext context) {
        // ========== 反爬虫对抗：通过 AJAX 拦截绕过检测 ==========
        //
        // 【分析 main.js 发现的核心检测逻辑】
        // Boss 直聘的反爬虫机制：
        // 1. var c = Sign.encryptPs; var l = "X";
        // 2. 发送 AJAX 请求到 /wapi/zpCommon/toggle/all
        // 3. 验证 response.zpData.nd_result_13912_number_1.result === c
        // 4. 如果通过，l = c；否则触发内存炸弹
        //
        // 【解决方案】
        // 在 AJAX 拦截器中动态读取 Sign.encryptPs 的值，然后返回匹配的响应
        // 这样就不需要 Hook Sign/Detail 对象，避免影响页面正常功能

        // AJAX 拦截器 - 拦截验证接口，动态读取 Sign.encryptPs 并返回匹配的响应
        context.addInitScript(
                "(() => {\n" +
                        "  console.log('[AJAX_INTERCEPTOR] 启动...');\n" +
                        "  \n" +
                        "  // 动态获取 Sign.encryptPs 的值\n" +
                        "  function getEncryptPsValue() {\n" +
                        "    try {\n" +
                        "      if (window.Sign && window.Sign.encryptPs) {\n" +
                        "        return window.Sign.encryptPs;\n" +
                        "      }\n" +
                        "    } catch(e) {}\n" +
                        "    return 'FALLBACK_VALUE';\n" +
                        "  }\n" +
                        "  \n" +
                        "  // Hook XMLHttpRequest\n" +
                        "  const OriginalXHR = window.XMLHttpRequest;\n" +
                        "  window.XMLHttpRequest = function() {\n" +
                        "    const xhr = new OriginalXHR();\n" +
                        "    const originalOpen = xhr.open;\n" +
                        "    const originalSend = xhr.send;\n" +
                        "    \n" +
                        "    let requestUrl = '';\n" +
                        "    let requestMethod = '';\n" +
                        "    let shouldIntercept = false;\n" +
                        "    \n" +
                        "    xhr.open = function(method, url, ...args) {\n" +
                        "      requestUrl = url;\n" +
                        "      requestMethod = method;\n" +
                        "      return originalOpen.call(this, method, url, ...args);\n" +
                        "    };\n" +
                        "    \n" +
                        "    xhr.send = function(data) {\n" +
                        "      // 检查是否是反爬虫验证接口\n" +
                        "      const urlMatch = requestUrl.indexOf('/wapi/zpCommon/toggle/all') !== -1;\n" +
                        "      const dataMatch = data && data.toString().indexOf('9E2145704D3D49648DD85D6DDAC1CF0D') !== -1;\n"
                        +
                        "      shouldIntercept = urlMatch && dataMatch && requestMethod.toUpperCase() === 'POST';\n" +
                        "      \n" +
                        "      if (shouldIntercept) {\n" +
                        "        // 动态读取 Sign.encryptPs，让 result === c 成立\n" +
                        "        const encryptPsValue = getEncryptPsValue();\n" +
                        "        console.warn('[AJAX_INTERCEPTOR] 🎯 拦截验证请求，Sign.encryptPs =', encryptPsValue);\n" +
                        "        \n" +
                        "        // 构造正确的响应，让验证逻辑通过\n" +
                        "        // 关键：返回 nd_result_13912_number_1.result = Sign.encryptPs\n" +
                        "        const fakeResponse = {\n" +
                        "          code: 0,\n" +
                        "          message: 'success',\n" +
                        "          zpData: {\n" +
                        "            nd_result_13912_number_1: {\n" +
                        "              result: encryptPsValue\n" +
                        "            }\n" +
                        "          }\n" +
                        "        };\n" +
                        "        \n" +
                        "        // 异步伪造响应\n" +
                        "        setTimeout(() => {\n" +
                        "          try {\n" +
                        "            Object.defineProperty(xhr, 'readyState', { value: 4, writable: false, configurable: true });\n"
                        +
                        "            Object.defineProperty(xhr, 'status', { value: 200, writable: false, configurable: true });\n"
                        +
                        "            Object.defineProperty(xhr, 'statusText', { value: 'OK', writable: false, configurable: true });\n"
                        +
                        "            Object.defineProperty(xhr, 'responseText', { \n" +
                        "              value: JSON.stringify(fakeResponse),\n" +
                        "              writable: false,\n" +
                        "              configurable: true\n" +
                        "            });\n" +
                        "            Object.defineProperty(xhr, 'response', { \n" +
                        "              value: JSON.stringify(fakeResponse),\n" +
                        "              writable: false,\n" +
                        "              configurable: true\n" +
                        "            });\n" +
                        "            \n" +
                        "            // 触发回调\n" +
                        "            if (typeof xhr.onreadystatechange === 'function') {\n" +
                        "              xhr.onreadystatechange();\n" +
                        "            }\n" +
                        "            if (typeof xhr.onload === 'function') {\n" +
                        "              xhr.onload();\n" +
                        "            }\n" +
                        "            \n" +
                        "            console.log('[AJAX_INTERCEPTOR] ✅ 验证通过，已阻止内存炸弹');\n" +
                        "          } catch(e) {\n" +
                        "            console.error('[AJAX_INTERCEPTOR] 伪造响应失败:', e);\n" +
                        "          }\n" +
                        "        }, 50);\n" +
                        "        \n" +
                        "        return; // 不发送真实请求\n" +
                        "      }\n" +
                        "      \n" +
                        "      // 其他请求正常发送\n" +
                        "      return originalSend.call(this, data);\n" +
                        "    };\n" +
                        "    \n" +
                        "    return xhr;\n" +
                        "  };\n" +
                        "  \n" +
                        "  // Hook fetch API（虽然 main.js 用的是 $.ajax，但以防万一）\n" +
                        "  const originalFetch = window.fetch;\n" +
                        "  window.fetch = function(url, options) {\n" +
                        "    const urlStr = typeof url === 'string' ? url : url.url || '';\n" +
                        "    const urlMatch = urlStr.indexOf('/wapi/zpCommon/toggle/all') !== -1;\n" +
                        "    const bodyMatch = options && options.body && \n" +
                        "                     options.body.toString().indexOf('9E2145704D3D49648DD85D6DDAC1CF0D') !== -1;\n"
                        +
                        "    const methodMatch = options && options.method && options.method.toUpperCase() === 'POST';\n"
                        +
                        "    \n" +
                        "    if (urlMatch && bodyMatch && methodMatch) {\n" +
                        "      const encryptPsValue = getEncryptPsValue();\n" +
                        "      console.warn('[AJAX_INTERCEPTOR] 🎯 拦截 fetch 验证请求，Sign.encryptPs =', encryptPsValue);\n"
                        +
                        "      \n" +
                        "      const fakeResponse = {\n" +
                        "        code: 0,\n" +
                        "        message: 'success',\n" +
                        "        zpData: {\n" +
                        "          nd_result_13912_number_1: {\n" +
                        "            result: encryptPsValue\n" +
                        "          }\n" +
                        "        }\n" +
                        "      };\n" +
                        "      \n" +
                        "      console.log('[AJAX_INTERCEPTOR] ✅ 验证通过，已阻止内存炸弹');\n" +
                        "      return Promise.resolve(new Response(JSON.stringify(fakeResponse), {\n" +
                        "        status: 200,\n" +
                        "        statusText: 'OK',\n" +
                        "        headers: { 'Content-Type': 'application/json' }\n" +
                        "      }));\n" +
                        "    }\n" +
                        "    \n" +
                        "    return originalFetch.call(this, url, options);\n" +
                        "  };\n" +
                        "  \n" +
                        "  console.log('[AJAX_INTERCEPTOR] ✓ 已就绪');\n" +
                        "})();");

        // 2.5 扩展检测绕过 - 拦截 chrome-extension:// 请求
        // 网站通过请求 chrome-extension://invalid/ 来检测是否有扩展
        // 如果没有扩展，请求会失败，网站就认为这是自动化浏览器
        context.addInitScript(
                "(() => {\n" +
                        "  console.log('[EXTENSION_BYPASS] 启动扩展检测绕过...');\n" +
                        "  \n" +
                        "  // 模拟一些常见扩展的ID（让检测认为浏览器有扩展）\n" +
                        "  const fakeExtensionIds = [\n" +
                        "    'cjpalhdlnbpafiamejdnhcphjbkeiagm', // uBlock Origin\n" +
                        "    'gighmmpiobklfepjocnamgkkbiglidom', // AdBlock\n" +
                        "    'cfhdojbkjhnklbpkdaibdccddilifddb', // AdBlock Plus\n" +
                        "  ];\n" +
                        "  \n" +
                        "  // Hook fetch 来拦截扩展检测请求\n" +
                        "  const originalFetch = window.fetch;\n" +
                        "  window.fetch = function(url, options) {\n" +
                        "    // 转换 URL 为字符串，处理各种可能的 URL 类型\n" +
                        "    let urlStr;\n" +
                        "    if (typeof url === 'string') {\n" +
                        "      urlStr = url;\n" +
                        "    } else if (url && typeof url === 'object') {\n" +
                        "      // URL 对象或 Request 对象\n" +
                        "      urlStr = url.url || url.href || String(url);\n" +
                        "    } else {\n" +
                        "      urlStr = String(url);\n" +
                        "    }\n" +
                        "    \n" +
                        "    // 拦截所有 chrome-extension:// 请求（不仅仅是 invalid/test）\n" +
                        "    if (urlStr.startsWith('chrome-extension://')) {\n" +
                        "      console.warn('[EXTENSION_BYPASS] 🎯 拦截 chrome-extension:// 请求:', urlStr);\n" +
                        "      // 返回一个成功的空响应，让网站认为扩展存在\n" +
                        "      return Promise.resolve(new Response('{}', {\n" +
                        "        status: 200,\n" +
                        "        statusText: 'OK',\n" +
                        "        headers: { 'Content-Type': 'application/json' }\n" +
                        "      }));\n" +
                        "    }\n" +
                        "    \n" +
                        "    return originalFetch.call(this, url, options);\n" +
                        "  };\n" +
                        "  \n" +
                        "  // Hook XMLHttpRequest 来拦截扩展检测请求\n" +
                        "  const OriginalXHR = window.XMLHttpRequest;\n" +
                        "  const originalXHROpen = OriginalXHR.prototype.open;\n" +
                        "  \n" +
                        "  OriginalXHR.prototype.open = function(method, url, ...args) {\n" +
                        "    this._extensionBypassUrl = url;\n" +
                        "    return originalXHROpen.call(this, method, url, ...args);\n" +
                        "  };\n" +
                        "  \n" +
                        "  const originalXHRSend = OriginalXHR.prototype.send;\n" +
                        "  OriginalXHR.prototype.send = function(data) {\n" +
                        "    const url = this._extensionBypassUrl || '';\n" +
                        "    \n" +
                        "    // 拦截所有 chrome-extension:// 请求（不仅仅是 invalid/test）\n" +
                        "    if (url.startsWith('chrome-extension://')) {\n"
                        +
                        "      console.warn('[EXTENSION_BYPASS] 🎯 拦截 XHR chrome-extension:// 请求:', url);\n" +
                        "      \n" +
                        "      // 模拟成功响应\n" +
                        "      setTimeout(() => {\n" +
                        "        Object.defineProperty(this, 'readyState', { value: 4, configurable: true });\n" +
                        "        Object.defineProperty(this, 'status', { value: 200, configurable: true });\n" +
                        "        Object.defineProperty(this, 'statusText', { value: 'OK', configurable: true });\n" +
                        "        Object.defineProperty(this, 'responseText', { value: '{}', configurable: true });\n" +
                        "        Object.defineProperty(this, 'response', { value: '{}', configurable: true });\n" +
                        "        \n" +
                        "        if (typeof this.onreadystatechange === 'function') this.onreadystatechange();\n" +
                        "        if (typeof this.onload === 'function') this.onload();\n" +
                        "        \n" +
                        "        console.log('[EXTENSION_BYPASS] ✅ XHR 模拟响应已触发');\n" +
                        "      }, 10);\n" +
                        "      return;\n" +
                        "    }\n" +
                        "    \n" +
                        "    return originalXHRSend.call(this, data);\n" +
                        "  };\n" +
                        "  \n" +
                        "  console.log('[EXTENSION_BYPASS] ✓ 扩展检测绕过已就绪');\n" +
                        "})();");

        // 3. 完整的 Stealth 脚本 - 针对 security-js 的所有检测点进行防护
        context.addInitScript(
                "(() => {\n" +
                        "  console.log('[STEALTH] 🛡️ 启动完整反检测脚本...');\n" +
                        "  \n" +
                        "  // ========== 1. WebDriver 检测防护 ==========\n" +
                        "  // 对应检测: navigator.webdriver, window.__webdriver, document.__webdriver\n" +
                        "  Object.defineProperty(navigator, 'webdriver', {\n" +
                        "    get: () => undefined,\n" +
                        "    configurable: true\n" +
                        "  });\n" +
                        "  delete navigator.__proto__.webdriver;\n" +
                        "  delete window.__webdriver;\n" +
                        "  delete document.__webdriver;\n" +
                        "  \n" +
                        "  // ========== 2. ChromeDriver 变量检测防护 ==========\n" +
                        "  // 对应检测: $cdc_, $chrome 等 ChromeDriver 注入的变量\n" +
                        "  // 删除所有 $cdc_ 开头的属性\n" +
                        "  Object.keys(window).forEach(key => {\n" +
                        "    if (key.startsWith('$cdc_') || key.startsWith('$chrome')) {\n" +
                        "      delete window[key];\n" +
                        "    }\n" +
                        "  });\n" +
                        "  \n" +
                        "  // ========== 3. Phantom/Headless 检测防护 ==========\n" +
                        "  // 对应检测: window.callPhantom, window._phantom\n" +
                        "  delete window.callPhantom;\n" +
                        "  delete window._phantom;\n" +
                        "  delete window.__phantomas;\n" +
                        "  \n" +
                        "  // ========== 4. Chrome 对象完整伪装 ==========\n" +
                        "  // 对应检测: window.chrome 的完整性\n" +
                        "  if (!window.chrome) {\n" +
                        "    window.chrome = {};\n" +
                        "  }\n" +
                        "  \n" +
                        "  // 模拟 chrome.runtime（让网站认为有扩展存在）\n" +
                        "  window.chrome.runtime = window.chrome.runtime || {\n" +
                        "    id: 'cjpalhdlnbpafiamejdnhcphjbkeiagm',\n" +
                        "    connect: function() { return { onMessage: { addListener: function() {} }, postMessage: function() {} }; },\n"
                        +
                        "    sendMessage: function(extId, msg, callback) { if (callback) setTimeout(callback, 10); },\n"
                        +
                        "    onMessage: { addListener: function() {}, removeListener: function() {} },\n" +
                        "    onConnect: { addListener: function() {} },\n" +
                        "    getManifest: function() { return { version: '1.57.2', name: 'uBlock Origin' }; },\n" +
                        "    getURL: function(path) { return 'chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/' + path; },\n"
                        +
                        "    lastError: null\n" +
                        "  };\n" +
                        "  \n" +
                        "  window.chrome.loadTimes = window.chrome.loadTimes || function() {\n" +
                        "    return {\n" +
                        "      commitLoadTime: Date.now() / 1000 - Math.random() * 10,\n" +
                        "      connectionInfo: 'h2',\n" +
                        "      finishDocumentLoadTime: Date.now() / 1000 - Math.random() * 5,\n" +
                        "      finishLoadTime: Date.now() / 1000 - Math.random() * 2,\n" +
                        "      firstPaintAfterLoadTime: 0,\n" +
                        "      firstPaintTime: Date.now() / 1000 - Math.random() * 8,\n" +
                        "      navigationType: 'Other',\n" +
                        "      npnNegotiatedProtocol: 'h2',\n" +
                        "      requestTime: Date.now() / 1000 - Math.random() * 15,\n" +
                        "      startLoadTime: Date.now() / 1000 - Math.random() * 12,\n" +
                        "      wasAlternateProtocolAvailable: false,\n" +
                        "      wasFetchedViaSpdy: true,\n" +
                        "      wasNpnNegotiated: true\n" +
                        "    };\n" +
                        "  };\n" +
                        "  \n" +
                        "  window.chrome.csi = window.chrome.csi || function() {\n" +
                        "    return {\n" +
                        "      onloadT: Date.now(),\n" +
                        "      pageT: Math.random() * 1000 + 500,\n" +
                        "      startE: Date.now() - Math.random() * 5000,\n" +
                        "      tran: 15\n" +
                        "    };\n" +
                        "  };\n" +
                        "  \n" +
                        "  window.chrome.app = window.chrome.app || {\n" +
                        "    isInstalled: false,\n" +
                        "    InstallState: { DISABLED: 'disabled', INSTALLED: 'installed', NOT_INSTALLED: 'not_installed' },\n"
                        +
                        "    RunningState: { CANNOT_RUN: 'cannot_run', READY_TO_RUN: 'ready_to_run', RUNNING: 'running' }\n"
                        +
                        "  };\n" +
                        "  \n" +
                        "  // ========== 5. Navigator.plugins 完整伪装 ==========\n" +
                        "  // 对应检测: navigator.plugins.length === 0\n" +
                        "  const plugins = [\n" +
                        "    { name: 'Chrome PDF Plugin', description: 'Portable Document Format', filename: 'internal-pdf-viewer', length: 1 },\n"
                        +
                        "    { name: 'Chrome PDF Viewer', description: '', filename: 'mhjfbmdgcfjbbpaeojofohoefgiehjai', length: 1 },\n"
                        +
                        "    { name: 'Native Client', description: '', filename: 'internal-nacl-plugin', length: 1 }\n"
                        +
                        "  ];\n" +
                        "  \n" +
                        "  Object.defineProperty(navigator, 'plugins', {\n" +
                        "    get: () => {\n" +
                        "      const arr = plugins.map(p => ({\n" +
                        "        ...p,\n" +
                        "        item: (i) => (i === 0 ? { type: 'application/pdf' } : null),\n" +
                        "        namedItem: (name) => (name === 'application/pdf' ? { type: 'application/pdf' } : null),\n"
                        +
                        "        [Symbol.iterator]: function* () { yield this; }\n" +
                        "      }));\n" +
                        "      arr.length = plugins.length;\n" +
                        "      arr.item = (i) => arr[i] || null;\n" +
                        "      arr.namedItem = (name) => arr.find(p => p.name === name) || null;\n" +
                        "      arr.refresh = () => {};\n" +
                        "      return arr;\n" +
                        "    },\n" +
                        "    configurable: true\n" +
                        "  });\n" +
                        "  \n" +
                        "  // ========== 6. Navigator.languages 伪装 ==========\n" +
                        "  // 对应检测: languages 为空或只有一个\n" +
                        "  Object.defineProperty(navigator, 'languages', {\n" +
                        "    get: () => ['zh-CN', 'zh', 'en-US', 'en'],\n" +
                        "    configurable: true\n" +
                        "  });\n" +
                        "  \n" +
                        "  // ========== 7. Navigator.hardwareConcurrency 伪装 ==========\n" +
                        "  // 对应检测: hardwareConcurrency 为 1 或异常值\n" +
                        "  Object.defineProperty(navigator, 'hardwareConcurrency', {\n" +
                        "    get: () => 8,\n" +
                        "    configurable: true\n" +
                        "  });\n" +
                        "  \n" +
                        "  // ========== 8. Navigator.deviceMemory 伪装 ==========\n" +
                        "  // 对应检测: deviceMemory 缺失或异常\n" +
                        "  Object.defineProperty(navigator, 'deviceMemory', {\n" +
                        "    get: () => 8,\n" +
                        "    configurable: true\n" +
                        "  });\n" +
                        "  \n" +
                        "  // ========== 9. Navigator.vendor 伪装 ==========\n" +
                        "  Object.defineProperty(navigator, 'vendor', {\n" +
                        "    get: () => 'Google Inc.',\n" +
                        "    configurable: true\n" +
                        "  });\n" +
                        "  \n" +
                        "  // ========== 10. Navigator.platform 伪装 ==========\n" +
                        "  Object.defineProperty(navigator, 'platform', {\n" +
                        "    get: () => 'MacIntel',\n" +
                        "    configurable: true\n" +
                        "  });\n" +
                        "  \n" +
                        "  // ========== 11. Navigator.maxTouchPoints 伪装 ==========\n" +
                        "  Object.defineProperty(navigator, 'maxTouchPoints', {\n" +
                        "    get: () => 0,\n" +
                        "    configurable: true\n" +
                        "  });\n" +
                        "  \n" +
                        "  // ========== 12. Permissions API 伪装 ==========\n" +
                        "  const originalQuery = navigator.permissions.query;\n" +
                        "  navigator.permissions.query = function(parameters) {\n" +
                        "    if (parameters.name === 'notifications') {\n" +
                        "      return Promise.resolve({ state: Notification.permission, onchange: null });\n" +
                        "    }\n" +
                        "    return originalQuery.call(this, parameters);\n" +
                        "  };\n" +
                        "  \n" +
                        "  // ========== 13. Canvas 指纹随机化（添加噪点） ==========\n" +
                        "  const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;\n" +
                        "  HTMLCanvasElement.prototype.toDataURL = function(type) {\n" +
                        "    // 添加微小的随机噪点\n" +
                        "    const context = this.getContext('2d');\n" +
                        "    if (context) {\n" +
                        "      const imageData = context.getImageData(0, 0, this.width, this.height);\n" +
                        "      for (let i = 0; i < imageData.data.length; i += 4) {\n" +
                        "        // 随机修改 0.1% 的像素\n" +
                        "        if (Math.random() < 0.001) {\n" +
                        "          imageData.data[i] = imageData.data[i] ^ 1;\n" +
                        "        }\n" +
                        "      }\n" +
                        "      context.putImageData(imageData, 0, 0);\n" +
                        "    }\n" +
                        "    return originalToDataURL.apply(this, arguments);\n" +
                        "  };\n" +
                        "  \n" +
                        "  // ========== 14. WebGL 指纹伪装 ==========\n" +
                        "  const getParameter = WebGLRenderingContext.prototype.getParameter;\n" +
                        "  WebGLRenderingContext.prototype.getParameter = function(parameter) {\n" +
                        "    // 伪装 UNMASKED_VENDOR_WEBGL 和 UNMASKED_RENDERER_WEBGL\n" +
                        "    if (parameter === 37445) {\n" +
                        "      return 'Intel Inc.';\n" +
                        "    }\n" +
                        "    if (parameter === 37446) {\n" +
                        "      return 'Intel Iris OpenGL Engine';\n" +
                        "    }\n" +
                        "    return getParameter.call(this, parameter);\n" +
                        "  };\n" +
                        "  \n" +
                        "  // ========== 15. 隐藏所有自动化工具特征 ==========\n" +
                        "  const automationProps = [\n" +
                        "    '__playwright',\n" +
                        "    '__pw_manual',\n" +
                        "    '__PW_inspect',\n" +
                        "    'playwright',\n" +
                        "    '__webdriverFunc',\n" +
                        "    '__driver_evaluate',\n" +
                        "    '__webdriver_evaluate',\n" +
                        "    '__selenium_evaluate',\n" +
                        "    '__fxdriver_evaluate',\n" +
                        "    '__driver_unwrapped',\n" +
                        "    '__webdriver_unwrapped',\n" +
                        "    '__selenium_unwrapped',\n" +
                        "    '__fxdriver_unwrapped',\n" +
                        "    '__webdriver_script_fn',\n" +
                        "    '__webdriver_script_func',\n" +
                        "    'domAutomation',\n" +
                        "    'domAutomationController'\n" +
                        "  ];\n" +
                        "  \n" +
                        "  automationProps.forEach(prop => {\n" +
                        "    try {\n" +
                        "      delete window[prop];\n" +
                        "      delete document[prop];\n" +
                        "      Object.defineProperty(window, prop, {\n" +
                        "        get: () => undefined,\n" +
                        "        configurable: true\n" +
                        "      });\n" +
                        "    } catch(e) {}\n" +
                        "  });\n" +
                        "  \n" +
                        "  // ========== 16. Function.prototype.toString 修复 ==========\n" +
                        "  const originalToString = Function.prototype.toString;\n" +
                        "  Function.prototype.toString = function() {\n" +
                        "    // 让所有被修改的函数看起来像原生代码\n" +
                        "    if (this === navigator.permissions.query ||\n" +
                        "        this === HTMLCanvasElement.prototype.toDataURL ||\n" +
                        "        this === WebGLRenderingContext.prototype.getParameter) {\n" +
                        "      return 'function ' + this.name + '() { [native code] }';\n" +
                        "    }\n" +
                        "    return originalToString.call(this);\n" +
                        "  };\n" +
                        "  \n" +
                        "  // ========== 17. Screen 属性一致性 ==========\n" +
                        "  // 确保 screen 和 window 尺寸合理\n" +
                        "  Object.defineProperty(screen, 'availWidth', {\n" +
                        "    get: () => screen.width,\n" +
                        "    configurable: true\n" +
                        "  });\n" +
                        "  Object.defineProperty(screen, 'availHeight', {\n" +
                        "    get: () => screen.height - 23, // 减去菜单栏高度\n" +
                        "    configurable: true\n" +
                        "  });\n" +
                        "  \n" +
                        "  console.log('[STEALTH] ✅ 完整反检测脚本已加载');\n" +
                        "  console.log('[STEALTH] 📊 检测点覆盖:');\n" +
                        "  console.log('[STEALTH]   ✓ WebDriver 标识');\n" +
                        "  console.log('[STEALTH]   ✓ ChromeDriver 变量');\n" +
                        "  console.log('[STEALTH]   ✓ Phantom/Headless 特征');\n" +
                        "  console.log('[STEALTH]   ✓ Navigator 属性 (plugins, languages, hardware, etc.)');\n" +
                        "  console.log('[STEALTH]   ✓ Canvas 指纹随机化');\n" +
                        "  console.log('[STEALTH]   ✓ WebGL 指纹伪装');\n" +
                        "  console.log('[STEALTH]   ✓ Chrome 对象完整性');\n" +
                        "  console.log('[STEALTH]   ✓ 自动化工具特征清除');\n" +
                        "})();");

        log.info("✓ 已添加反检测脚本到BrowserContext");
    }

    private Page createNewPage(BrowserContext context) {
        Page page = context.newPage();
        page.setDefaultTimeout(DEFAULT_TIMEOUT);
        page.onConsoleMessage(message -> {
            if ("error".equals(message.type())) {
                log.error("Browser console error: {}", message.text());
            }
        });
        return page;
    }

    @PreDestroy
    public void close() {
        log.info("Closing Playwright service...");

        // 停止 Cookie 自动备份任务
        cookieBackupTasks.values().forEach(future -> {
            if (future != null && !future.isCancelled()) {
                future.cancel(false);
            }
        });
        cookieBackupScheduler.shutdownNow();

        pageMap.values().forEach(Page::close);

        if (context != null) {
            context.close();
        }

        // 注意：使用 launchPersistentContext 时，browser 对象是内嵌的，不需要单独关闭
        // browser.close() 会在 context.close() 时自动处理

        if (playwright != null) {
            playwright.close();
        }

        // 清理临时目录
        cleanupTempDirectories();

        log.info("Playwright service closed.");
    }

    /**
     * 为指定平台启动 Cookie 自动备份任务（每 5 秒备份一次）
     *
     * @param platform 平台枚举
     */
    private void startCookieAutoBackup(RecruitmentPlatformEnum platform) {
        // 若该平台已有定时任务，先取消，避免重复调度
        ScheduledFuture<?> existing = cookieBackupTasks.get(platform);
        if (existing != null && !existing.isCancelled()) {
            existing.cancel(false);
        }

        Runnable task = () -> {
            try {
                boolean success = capturePlatformCookies(platform);
                if (!success) {
                    log.debug("平台 {} Cookie 自动备份本轮未成功，稍后重试", platform.getPlatformName());
                }
            } catch (Exception e) {
                log.warn("平台 {} Cookie 自动备份任务执行异常", platform.getPlatformName(), e);
            }
        };

        ScheduledFuture<?> future = cookieBackupScheduler.scheduleAtFixedRate(
                task,
                5, // 初始延迟 5 秒
                5, // 每 5 秒执行一次
                TimeUnit.SECONDS);
        cookieBackupTasks.put(platform, future);
    }

    /**
     * 清理临时目录
     */
    private void cleanupTempDirectories() {
        try {
            if (extensionPath != null && Files.exists(extensionPath)) {
                deleteDirectoryRecursively(extensionPath.getParent()); // 删除包含扩展的父目录
                log.debug("已清理扩展临时目录: {}", extensionPath.getParent());
            }
            if (userDataDir != null && Files.exists(userDataDir)) {
                deleteDirectoryRecursively(userDataDir);
                log.debug("已清理用户数据临时目录: {}", userDataDir);
            }
        } catch (Exception e) {
            log.warn("清理临时目录失败", e);
        }
    }

    /**
     * 递归删除目录
     */
    private void deleteDirectoryRecursively(Path path) throws IOException {
        if (Files.exists(path)) {
            Files.walk(path)
                    .sorted(Comparator.reverseOrder())
                    .forEach(p -> {
                        try {
                            Files.delete(p);
                        } catch (IOException e) {
                            log.warn("无法删除文件: {}", p);
                        }
                    });
        }
    }

    /**
     * 初始化 Boss 直聘取证日志文件
     * <p>
     * 注意：这里刻意不写到 logback 的业务日志里，避免和业务日志混杂；
     * 取证日志用于“复盘/定位反爬虫链路”，内容更偏事件流（NAV/REQ/ERR 等）。
     */
    private Path initBossForensicLogFile() throws IOException {
        Path dir = Paths.get("logs", "anti-crawler-detection");
        Files.createDirectories(dir);
        Path file = dir.resolve("boss-forensic.log");
        if (!Files.exists(file)) {
            Files.createFile(file);
        }
        return file;
    }

    private void writeBossForensic(String line) {
        if (bossForensicLogFile == null) {
            return;
        }
        String msg = String.format("%s %s%n", new java.util.Date(), line);
        synchronized (bossForensicLogLock) {
            try {
                Files.writeString(
                        bossForensicLogFile,
                        msg,
                        StandardOpenOption.CREATE,
                        StandardOpenOption.WRITE,
                        StandardOpenOption.APPEND);
            } catch (Exception e) {
                // 取证日志写入失败不要影响主流程
                log.warn("写入BOSS取证日志失败: {}", e.getMessage());
            }
        }
    }

    /**
     * 取证/观测器：用于定位反爬虫触发点（如 about:blank、脚本异常、扩展探测请求等）
     * <p>
     * 注意：输出统一写入 {@link #bossForensicLogFile}，避免 System.out 丢失/刷屏。
     */
    private void attachObservers(Page page) {
        // 1) 主框架导航（看到何时变 about:blank）
        page.onFrameNavigated(frame -> {
            if (frame == page.mainFrame()) {
                writeBossForensic("[NAV] " + frame.url());
            }
        });

        // 2) console（拿到页面里打印的 [FORENSIC] / [STEALTH] / [AJAX_INTERCEPTOR] 等）
        page.onConsoleMessage(msg -> {
            writeBossForensic("[CONSOLE] " + msg.type() + " " + msg.text());
        });

        // 3) 页面运行时错误（很多反调试会 throw 或刻意制造异常）
        page.onPageError(err -> {
            writeBossForensic("[PAGE_ERROR] " + String.valueOf(err));
        });

        // 4) 请求 / 响应（建议先只抓关键类型，避免刷屏）
        page.onRequest(req -> {
            String rt = req.resourceType();
            if ("document".equals(rt) || "script".equals(rt) || "xhr".equals(rt) || "fetch".equals(rt)) {
                writeBossForensic("[REQ] " + rt + " " + req.method() + " " + req.url());
            }
        });

        page.onResponse(resp -> {
            String url = resp.url();
            // 重点记录脚本来源，方便定位 bundle
            if (url != null && url.contains(".js")) {
                writeBossForensic("[JS] " + resp.status() + " " + url);
            }
        });

        page.onRequestFailed(req -> {
            writeBossForensic("[REQ_FAILED] " + req.url() + " => " + req.failure());
        });
    }

    public Page getPage(RecruitmentPlatformEnum platform) {
        return pageMap.get(platform);
    }

    public BrowserContext getContext(RecruitmentPlatformEnum platform) {
        return context;
    }

    public void addCookies(RecruitmentPlatformEnum platform, List<Cookie> cookies) {
        if (context != null) {
            context.addCookies(cookies);
            log.info("Added cookies for platform: {}", platform.getPlatformName());
        } else {
            log.warn("BrowserContext not initialized");
        }
    }

    private String getRandomUserAgent() {
        Random random = new Random();
        return USER_AGENTS[random.nextInt(USER_AGENTS.length)];
    }

    /**
     * 从配置实体加载平台Cookie到页面
     *
     * @param platform 平台枚举
     * @param page     页面对象
     */
    private void loadPlatformCookies(RecruitmentPlatformEnum platform, Page page) {
        try {
            ConfigEntity config = configService.loadByPlatformType(platform.getPlatformCode());
            if (config == null || config.getCookieData() == null || config.getCookieData().trim().isEmpty()) {
                log.info("平台 {} 暂无Cookie配置，跳过加载", platform.getPlatformName());
                return;
            }

            String cookieData = config.getCookieData();
            loadCookiesFromJson(cookieData, page);
            log.info("已为平台 {} 加载Cookie", platform.getPlatformName());
        } catch (Exception e) {
            log.error("加载平台 {} 的Cookie失败，将使用无Cookie状态启动", platform.getPlatformName(), e);
        }
    }

    /**
     * 从JSON字符串加载Cookie到页面
     *
     * @param cookieData Cookie的JSON字符串
     * @param page       页面对象
     */
    private void loadCookiesFromJson(String cookieData, Page page) {
        try {
            JSONArray jsonArray = new JSONArray(cookieData);
            List<Cookie> cookies = new ArrayList<>();

            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject jsonObject = jsonArray.getJSONObject(i);

                Cookie cookie = new Cookie(
                        jsonObject.getString("name"),
                        jsonObject.getString("value"));

                if (!jsonObject.isNull("domain")) {
                    cookie.domain = jsonObject.getString("domain");
                }

                if (!jsonObject.isNull("path")) {
                    cookie.path = jsonObject.getString("path");
                }

                if (!jsonObject.isNull("expires")) {
                    cookie.expires = jsonObject.getDouble("expires");
                }

                if (!jsonObject.isNull("secure")) {
                    cookie.secure = jsonObject.getBoolean("secure");
                }

                if (!jsonObject.isNull("httpOnly")) {
                    cookie.httpOnly = jsonObject.getBoolean("httpOnly");
                }

                cookies.add(cookie);
            }

            page.context().addCookies(cookies);
            log.debug("成功加载 {} 个Cookie", cookies.size());
        } catch (Exception e) {
            log.error("从JSON加载Cookie失败", e);
        }
    }

    /**
     * 检查指定平台的Page是否健康
     *
     * @param platform 平台枚举
     * @return true-健康, false-不健康
     */
    public boolean isPageHealthy(RecruitmentPlatformEnum platform) {
        Page page = pageMap.get(platform);
        return PageRecoveryManager.isPageReallyHealthy(page);
    }

    /**
     * 刷新/重建指定平台的Page对象
     * 
     * 当检测到Page对象不健康时，可以调用此方法重建Page并恢复到当前状态
     *
     * @param platform 平台枚举
     * @return true-刷新成功, false-刷新失败
     */
    public boolean refreshPage(RecruitmentPlatformEnum platform) {
        Page currentPage = pageMap.get(platform);
        if (currentPage == null) {
            log.error("平台 {} 的Page对象不存在，无法刷新", platform.getPlatformName());
            return false;
        }

        try {
            log.info("开始刷新平台 {} 的Page对象...", platform.getPlatformName());

            // 1. 保存当前状态
            PageRecoveryManager.PageSnapshot snapshot = PageRecoveryManager.captureSnapshot(currentPage);
            if (snapshot == null) {
                log.error("无法保存Page状态，刷新失败");
                return false;
            }

            // 2. 重建Page
            Page newPage = PageRecoveryManager.rebuildAndRestore(
                    currentPage,
                    context,
                    snapshot,
                    page -> {
                        // 重建后的新Page也需要重新挂载观测器（否则刷新后就丢取证能力了）
                        if (platform == RecruitmentPlatformEnum.BOSS_ZHIPIN) {
                            attachObservers(page);
                        }
                        pageMap.put(platform, page); // 更新全局引用
                    });

            if (newPage == null) {
                log.error("Page重建失败");
                return false;
            }

            log.info("✓ 平台 {} 的Page对象刷新成功！", platform.getPlatformName());
            return true;

        } catch (Exception e) {
            log.error("刷新Page对象时发生异常", e);
            return false;
        }
    }

    /**
     * 自动检查并刷新不健康的Page
     * 
     * 可以在定时任务中调用此方法，主动检查和恢复不健康的Page
     *
     * @param platform 平台枚举
     * @return true-Page健康或已成功刷新, false-Page不健康且刷新失败
     */
    public boolean ensurePageHealthy(RecruitmentPlatformEnum platform) {
        if (isPageHealthy(platform)) {
            log.debug("平台 {} 的Page对象健康", platform.getPlatformName());
            return true;
        }

        log.warn("检测到平台 {} 的Page对象不健康，尝试自动刷新...", platform.getPlatformName());
        return refreshPage(platform);
    }

    /**
     * 自动捕获并保存指定平台的Cookie到配置实体
     * 
     * 此方法会获取当前Page的所有Cookie，序列化为JSON后保存到数据库
     * 目的是防止第三方页面变更导致登录判定失败而丢失已登录的Cookie
     *
     * @param platform 平台枚举
     * @return true-保存成功, false-保存失败
     */
    public boolean capturePlatformCookies(RecruitmentPlatformEnum platform) {
        try {
            Page page = pageMap.get(platform);
            if (page == null) {
                log.warn("平台 {} 的Page对象不存在，无法捕获Cookie", platform.getPlatformName());
                return false;
            }

            return savePlatformCookieToConfig(platform, page);
        } catch (Exception e) {
            log.error("自动捕获平台 {} 的Cookie失败", platform.getPlatformName(), e);
            return false;
        }
    }

    /**
     * 保存平台Cookie到配置实体
     *
     * @param platform 平台枚举
     * @param page     页面对象
     * @return true-保存成功, false-保存失败
     */
    public boolean savePlatformCookieToConfig(RecruitmentPlatformEnum platform, Page page) {
        try {
            ConfigEntity config = configService.loadByPlatformType(platform.getPlatformCode());
            if (config == null) {
                config = new ConfigEntity();
            }

            // 获取当前浏览器的Cookie并转换为JSON字符串
            String cookieJson = getCookiesAsJson(page);
            config.setCookieData(cookieJson);
            config.setPlatformType(platform.getPlatformCode());

            configService.save(config);

            // 打印完整的Cookie信息到日志
            printSavedCookieDetails(platform, cookieJson);

            log.debug("✓ 平台 {} 的Cookie已保存到配置实体", platform.getPlatformName());
            return true;
        } catch (Exception e) {
            log.error("保存平台 {} 的Cookie到配置失败", platform.getPlatformName(), e);
            return false;
        }
    }

    /**
     * 获取页面Cookie并转换为JSON字符串
     *
     * @param page 页面对象
     * @return Cookie的JSON字符串
     */
    public String getCookiesAsJson(Page page) {
        try {
            List<Cookie> cookies = page.context().cookies();
            JSONArray jsonArray = new JSONArray();

            for (Cookie cookie : cookies) {
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("name", cookie.name);
                jsonObject.put("value", cookie.value);
                jsonObject.put("domain", cookie.domain);
                jsonObject.put("path", cookie.path);
                if (cookie.expires != null) {
                    jsonObject.put("expires", cookie.expires);
                }
                jsonObject.put("secure", cookie.secure);
                jsonObject.put("httpOnly", cookie.httpOnly);
                jsonArray.put(jsonObject);
            }

            return jsonArray.toString();
        } catch (Exception e) {
            log.error("获取Cookie失败", e);
            return "[]";
        }
    }

    /**
     * 打印保存的Cookie详细信息
     *
     * @param platform   平台枚举
     * @param cookieJson Cookie的JSON字符串
     */
    private void printSavedCookieDetails(RecruitmentPlatformEnum platform, String cookieJson) {
        try {
            JSONArray jsonArray = new JSONArray(cookieJson);
            int cookieCount = jsonArray.length();

            log.debug("========== {} 保存Cookie详细信息 ==========", platform.getPlatformName());
            log.debug("Cookie总数: {}", cookieCount);

            for (int i = 0; i < cookieCount; i++) {
                JSONObject cookie = jsonArray.getJSONObject(i);

                String name = cookie.optString("name", "");
                String value = cookie.optString("value", "");
                String domain = cookie.optString("domain", "");
                String path = cookie.optString("path", "");
                String expires = cookie.has("expires") ? String.valueOf(cookie.getDouble("expires")) : "无";
                boolean secure = cookie.optBoolean("secure", false);
                boolean httpOnly = cookie.optBoolean("httpOnly", false);

                log.debug("Cookie[{}]:", i + 1);
                log.debug("  - name: {}", name);
                log.debug("  - value: {}", value.length() > 50 ? value.substring(0, 50) + "..." : value);
                log.debug("  - domain: {}", domain);
                log.debug("  - path: {}", path);
                log.debug("  - expires: {}", expires);
                log.debug("  - secure: {}", secure);
                log.debug("  - httpOnly: {}", httpOnly);
            }

            log.debug("完整Cookie JSON (前500字符): {}",
                    cookieJson.length() > 500 ? cookieJson.substring(0, 500) + "..." : cookieJson);
            log.debug("=".repeat(50 + platform.getPlatformName().length()));
        } catch (Exception e) {
            log.error("打印 {} 的Cookie详细信息失败", platform.getPlatformName(), e);
        }
    }

    /**
     * 检查元素是否在指定超时时间内可见
     * 
     * 替代已废弃的 isVisible(new Locator.IsVisibleOptions().setTimeout())
     *
     * @param locator   元素定位器
     * @param timeoutMs 超时时间（毫秒）
     * @return true-元素可见, false-元素不可见或超时
     */
    public static boolean isVisibleWithTimeout(Locator locator, double timeoutMs) {
        try {
            locator.waitFor(new Locator.WaitForOptions()
                    .setState(WaitForSelectorState.VISIBLE)
                    .setTimeout(timeoutMs));
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    // ==================== JS 捕获能力（便捷入口） ====================

    /**
     * 启用 JS 捕获能力（捕获所有 JS）
     * 
     * 这是一个便捷方法，内部调用 JsCaptureManager.captureAll()
     * 适用于快速启用 JS 捕获，无需手动获取 BrowserContext
     * 
     * 使用示例：
     * 
     * <pre>
     * JsCaptureManager manager = playwrightService.enableJsCapture();
     * // 访问页面，JS 会自动被捕获...
     * manager.saveReport();
     * </pre>
     *
     * @return JsCaptureManager 实例，可用于后续操作（如生成报告等）
     */
    public JsCaptureManager enableJsCapture() {
        if (context == null) {
            log.error("BrowserContext 未初始化，无法启用 JS 捕获");
            return null;
        }

        log.info("启用 JS 捕获能力（捕获所有 JS）...");
        return JsCaptureManager.captureAll(context);
    }

    /**
     * 启用 JS 捕获能力（只捕获指定域名）
     * 
     * 这是一个便捷方法，内部调用 JsCaptureManager.captureByDomains()
     * 适用于只想捕获特定网站 JS 的场景
     * 
     * 使用示例：
     * 
     * <pre>
     * JsCaptureManager manager = playwrightService.enableJsCaptureForDomains("zhipin.com", "bosszp.com");
     * // 访问页面，只有指定域名的 JS 会被捕获...
     * manager.saveReport();
     * </pre>
     *
     * @param domains 目标域名（可变参数）
     * @return JsCaptureManager 实例
     */
    public JsCaptureManager enableJsCaptureForDomains(String... domains) {
        if (context == null) {
            log.error("BrowserContext 未初始化，无法启用 JS 捕获");
            return null;
        }

        log.info("启用 JS 捕获能力（只捕获指定域名：{}）...", Arrays.toString(domains));
        return JsCaptureManager.captureByDomains(context, domains);
    }

    /**
     * 启用 JS 捕获能力（使用自定义配置）
     * 
     * 这是一个便捷方法，内部调用 JsCaptureManager.captureWithConfig()
     * 适用于需要精细化配置的场景
     * 
     * 使用示例：
     * 
     * <pre>
     * JsCaptureConfig config = JsCaptureConfig.builder()
     *         .captureAll(true)
     *         .addExcludePattern("jquery")
     *         .addExcludePattern("bootstrap")
     *         .build();
     * JsCaptureManager manager = playwrightService.enableJsCaptureWithConfig(config);
     * // 访问页面，JS 会按配置被捕获...
     * manager.saveReport();
     * </pre>
     *
     * @param config JS 捕获配置
     * @return JsCaptureManager 实例
     */
    public JsCaptureManager enableJsCaptureWithConfig(JsCaptureManager.JsCaptureConfig config) {
        if (context == null) {
            log.error("BrowserContext 未初始化，无法启用 JS 捕获");
            return null;
        }

        log.info("启用 JS 捕获能力（使用自定义配置）...");
        return JsCaptureManager.captureWithConfig(context, config);
    }

    /**
     * 为指定平台启用 JS 捕获能力
     * 
     * 这个方法会为特定平台的 BrowserContext 启用 JS 捕获
     * 适用于只想捕获某个平台 JS 的场景
     * 
     * 使用示例：
     * 
     * <pre>
     * JsCaptureManager manager = playwrightService.enableJsCaptureForPlatform(
     *         RecruitmentPlatformEnum.BOSS_ZHIPIN,
     *         "zhipin.com", "bosszp.com");
     * // 访问 Boss 直聘页面，JS 会被捕获...
     * manager.saveReport();
     * </pre>
     *
     * @param platform 平台枚举
     * @param domains  目标域名（可变参数，为空则捕获所有）
     * @return JsCaptureManager 实例
     */
    public JsCaptureManager enableJsCaptureForPlatform(RecruitmentPlatformEnum platform, String... domains) {
        if (context == null) {
            log.error("BrowserContext 未初始化，无法启用 JS 捕获");
            return null;
        }

        log.info("为平台 {} 启用 JS 捕获能力...", platform.getPlatformName());

        if (domains == null || domains.length == 0) {
            return JsCaptureManager.captureAll(context);
        } else {
            return JsCaptureManager.captureByDomains(context, domains);
        }
    }
}
