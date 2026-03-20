package getjobs.infrastructure.playwright;

import com.microsoft.playwright.*;
import com.microsoft.playwright.options.Cookie;
import com.microsoft.playwright.options.WaitForSelectorState;
import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.common.util.JsCaptureManager;
import getjobs.common.util.PageRecoveryManager;
import getjobs.common.util.StealthScriptManager;
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

    private final CookieManager cookieManager;

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

    /** 定时关闭 about:blank 页签任务的句柄，用于 PreDestroy 时取消 */
    private volatile ScheduledFuture<?> closeAboutBlankTask;
    /** 定时任务调度器（用于关闭 about:blank 页签） */
    private final ScheduledExecutorService pageCleanupScheduler = Executors.newSingleThreadScheduledExecutor(r -> {
        Thread t = new Thread(r, "page-cleanup-scheduler");
        t.setDaemon(true);
        return t;
    });

    public PlaywrightService(CookieManager cookieManager) {
        this.cookieManager = cookieManager;
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

            // 等待扩展初始化完成，避免 launchPersistentContext 加载扩展时
            // 异步打开的后台页与 newPage() 产生内部 page 对象冲突
            // （Playwright: Cannot find object to call __adopt__: page@...）
            Thread.sleep(2000);

            // 保存 launchPersistentContext 默认打开的空白页面，稍后关闭
            List<Page> defaultPages = new ArrayList<>(context.pages());
            log.info("默认打开的页面数量: {}", defaultPages.size());

            // 为持久化上下文添加反检测脚本
            StealthScriptManager.addAllStealthScripts(context);

            // 启用 JS 捕获能力（捕获所有 JS 文件用于分析反爬虫机制）
//            log.info("启用 JS 捕获能力...");
//            JsCaptureManager jsCaptureManager = JsCaptureManager.captureAll(context);
//            log.info("✓ JS 捕获能力已启用");

            for (RecruitmentPlatformEnum platform : RecruitmentPlatformEnum.values()) {
                Page page = initializePlatformPage(context, platform);
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

            // 定时关闭 about:blank 页签（避免运行时新开的空白页积累）
            closeAboutBlankTask = pageCleanupScheduler.scheduleAtFixedRate(
                    this::closeAboutBlankPages,
                    60,
                    60,
                    TimeUnit.SECONDS);
            log.info("✓ 已启动定时任务：每 60 秒检查并关闭 about:blank 页签");

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

    private Page initializePlatformPage(BrowserContext context, RecruitmentPlatformEnum platform) {
        RuntimeException lastError = null;
        for (int attempt = 1; attempt <= 2; attempt++) {
            Page page = createNewPage(context);

            // 仅对 Boss 直聘启用取证/观测器（用于定位 about:blank、脚本错误、扩展检测等）
            if (platform == RecruitmentPlatformEnum.BOSS_ZHIPIN) {
                attachObservers(page);
            }

            try {
                // 先导航到目标域，再注入 Cookie，最后刷新页面，确保 Cookie 随请求发送
                // （Playwright 在 navigate 前 addCookies 时，首次请求可能不会带上 cookie）
                page.navigate(platform.getHomeUrl());
                page.waitForLoadState(com.microsoft.playwright.options.LoadState.DOMCONTENTLOADED);
                loadPlatformCookies(platform, page);

                if (!page.isClosed()) {
                    page.reload(new Page.ReloadOptions()
                            .setWaitUntil(com.microsoft.playwright.options.WaitUntilState.DOMCONTENTLOADED));
                }

                return page;
            } catch (com.microsoft.playwright.PlaywrightException e) {
                lastError = new RuntimeException(
                        String.format("平台 %s 初始化第 %d 次失败", platform.getPlatformName(), attempt), e);
                log.warn("平台 {} 初始化第 {} 次失败，准备重建页面", platform.getPlatformName(), attempt, e);
                safeClosePage(page);
            }
        }

        throw lastError != null
                ? lastError
                : new RuntimeException("平台 " + platform.getPlatformName() + " 初始化失败");
    }

    private void safeClosePage(Page page) {
        if (page == null) {
            return;
        }
        try {
            if (!page.isClosed()) {
                page.close();
            }
        } catch (Exception e) {
            log.warn("关闭页面失败", e);
        }
    }

    @PreDestroy
    public void close() {
        log.info("Closing Playwright service...");

        // 停止定时关闭 about:blank 页签任务
        if (closeAboutBlankTask != null && !closeAboutBlankTask.isCancelled()) {
            closeAboutBlankTask.cancel(false);
        }

        // 停止页面清理调度器
        pageCleanupScheduler.shutdownNow();

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
     * 定期获取浏览器中的 about:blank 页签并关闭（不关闭各平台主页签）。
     * 由定时任务调用，避免运行时新开的空白页积累。
     */
    private void closeAboutBlankPages() {
        if (context == null) {
            return;
        }
        try {
            Set<Page> mainPages = new HashSet<>(pageMap.values());
            List<Page> pages = new ArrayList<>(context.pages());
            int closed = 0;
            for (Page p : pages) {
                if (mainPages.contains(p)) {
                    continue;
                }
                String url = p.url();
                if (url == null || url.isEmpty() || "about:blank".equals(url)) {
                    try {
                        p.close();
                        closed++;
                    } catch (Exception e) {
                        log.warn("关闭 about:blank 页签失败: {}", e.getMessage());
                    }
                }
            }
            if (closed > 0) {
                log.debug("已关闭 {} 个 about:blank 页签", closed);
            }
        } catch (Exception e) {
            log.warn("检查/关闭 about:blank 页签时异常", e);
        }
    }

    /**
     * 为指定平台启动 Cookie 自动备份任务（每 5 秒备份一次）
     *
     * @param platform 平台枚举
     */
    private void startCookieAutoBackup(RecruitmentPlatformEnum platform) {
        // 启动 Cookie 自动备份任务，传入 Page 提供者
        cookieManager.startAutoBackup(platform, p -> pageMap.get(p));
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
            // 使用 CookieManager 加载 Cookie
            cookieManager.loadCookies(platform, page);
            log.info("已为平台 {} 加载Cookie", platform.getPlatformName());
        } catch (Exception e) {
            log.error("加载平台 {} 的Cookie失败，将使用无Cookie状态启动", platform.getPlatformName(), e);
        }
    }

    /**
     * 从JSON字符串加载Cookie到页面
     * <p>
     * Playwright 要求：每个 cookie 必须提供 {@code url}，或同时提供 {@code domain} 与 {@code path}。
     * 调用方应保证在「已导航到 targetUrl 对应域名」之后调用本方法，再执行一次 reload，
     * 否则首次请求可能带上注入的 cookie（Playwright 已知行为）。
     * </p>
     *
     * @param platform 平台枚举
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
            // 使用 CookieManager 保存 Cookie
            boolean success = cookieManager.saveCookies(platform, page);
            if (success) {
                log.debug("✓ 平台 {} 的Cookie已保存到配置实体", platform.getPlatformName());
            }
            return success;
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
