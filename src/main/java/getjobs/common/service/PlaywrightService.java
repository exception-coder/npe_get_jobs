package getjobs.common.service;

import com.microsoft.playwright.*;
import com.microsoft.playwright.options.Cookie;
import com.microsoft.playwright.options.WaitForSelectorState;
import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.common.util.PageRecoveryManager;
import getjobs.repository.entity.ConfigEntity;
import getjobs.service.ConfigService;
import lombok.extern.slf4j.Slf4j;
import com.github.openjson.JSONArray;
import com.github.openjson.JSONObject;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Playwright服务，统一管理Playwright实例、浏览器、上下文和页面。
 * 为每个招聘平台提供独立的BrowserContext和Page。
 * 
 * 依赖于 dataRestoreInitializer，确保在数据库数据恢复完成后再初始化
 */
@Slf4j
@Service
@DependsOn("dataRestoreInitializer")
public class PlaywrightService {

    private final ConfigService configService;

    private Playwright playwright;
    private Browser browser;

    private BrowserContext context;
    private final Map<RecruitmentPlatformEnum, Page> pageMap = new ConcurrentHashMap<>();

    private static final int DEFAULT_TIMEOUT = 30000;

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

            browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
                    .setHeadless(false)
                    .setSlowMo(50)
                    .setArgs(List.of(
                            "--disable-blink-features=AutomationControlled",
                            "--disable-web-security",
                            "--disable-features=VizDisplayCompositor",
                            "--disable-dev-shm-usage",
                            "--no-sandbox",
                            "--disable-extensions",
                            "--disable-plugins",
                            "--disable-default-apps",
                            "--disable-background-timer-throttling",
                            "--disable-renderer-backgrounding",
                            "--disable-backgrounding-occluded-windows",
                            "--disable-ipc-flooding-protection")));

            context = createNewContext();
            for (RecruitmentPlatformEnum platform : RecruitmentPlatformEnum.values()) {
                Page page = createNewPage(context);

                // 先加载Cookie，再导航到页面
                loadPlatformCookies(platform, page);

                page.navigate(platform.getHomeUrl());
                pageMap.put(platform, page);
                log.info("✓ 已为平台 {} 初始化页面: {}", platform.getPlatformName(),
                        platform.getHomeUrl());
            }

            log.info("✓ Playwright 服务初始化成功");
            log.info("=== Playwright 服务初始化完成 ===");
        } catch (Exception e) {
            log.error("Failed to initialize Playwright service", e);
            // Ensure cleanup is called on initialization failure
            close();
            throw new RuntimeException("Failed to initialize Playwright service", e);
        }
    }

    private BrowserContext createNewContext() {
        String randomUserAgent = getRandomUserAgent();
        BrowserContext context = browser.newContext(new Browser.NewContextOptions()
                .setUserAgent(randomUserAgent)
                .setJavaScriptEnabled(true)
                .setBypassCSP(true)
                .setPermissions(List.of("geolocation", "notifications"))
                .setLocale("zh-CN")
                .setTimezoneId("Asia/Shanghai"));
        return context;
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
        pageMap.values().forEach(Page::close);

        if (context != null) {
            context.close();
        }

        if (browser != null) {
            browser.close();
        }
        if (playwright != null) {
            playwright.close();
        }
        log.info("Playwright service closed.");
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
                    page -> pageMap.put(platform, page) // 更新全局引用
            );

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

            log.info("✓ 平台 {} 的Cookie已保存到配置实体", platform.getPlatformName());
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
}
