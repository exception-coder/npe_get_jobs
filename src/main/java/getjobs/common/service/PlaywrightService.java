package getjobs.common.service;

import com.microsoft.playwright.*;
import com.microsoft.playwright.options.Cookie;
import getjobs.common.enums.RecruitmentPlatformEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Playwright服务，统一管理Playwright实例、浏览器、上下文和页面。
 * 为每个招聘平台提供独立的BrowserContext和Page。
 */
@Slf4j
@Service
public class PlaywrightService {

    private Playwright playwright;
    private Browser browser;

    private BrowserContext context;
    private final Map<RecruitmentPlatformEnum, Page> pageMap = new ConcurrentHashMap<>();

    private static final int DEFAULT_TIMEOUT = 30000;

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
            log.info("Initializing Playwright service...");
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
                            "--disable-ipc-flooding-protection"
                    )));

            context = createNewContext();
            for (RecruitmentPlatformEnum platform : RecruitmentPlatformEnum.values()) {
                Page page = createNewPage(context);
                page.navigate(platform.getHomeUrl());
                pageMap.put(platform, page);
                log.info("Initialized page for platform: {}, url: {}", platform.getPlatformName(), platform.getHomeUrl());
            }

            log.info("Playwright service initialized successfully.");
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
}
