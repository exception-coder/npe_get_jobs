package getjobs.common.service;

import com.microsoft.playwright.*;
import com.microsoft.playwright.options.Cookie;
import getjobs.common.enums.RecruitmentPlatformEnum;
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
}
