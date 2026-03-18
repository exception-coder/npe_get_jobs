package getjobs.infrastructure.playwright;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.options.Cookie;
import com.microsoft.playwright.options.LoadState;
import com.microsoft.playwright.options.WaitUntilState;
import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.repository.entity.ConfigEntity;
import getjobs.service.ConfigService;
import lombok.extern.slf4j.Slf4j;
import com.github.openjson.JSONArray;
import com.github.openjson.JSONObject;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Component;

import jakarta.annotation.PreDestroy;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.*;
import java.util.function.Supplier;

/**
 * Cookie 管理器
 * <p>
 * 负责 Cookie 的加载、保存、备份等操作。
 * 作为 Playwright 基础设施的核心组件，提供统一的 Cookie 管理能力。
 */
@Component
@Slf4j
public class CookieManager {

    private final ConfigService configService;
    private final ScheduledExecutorService scheduler;
    private final Map<RecruitmentPlatformEnum, ScheduledFuture<?>> backupTasks = new ConcurrentHashMap<>();

    /**
     * 函数式接口：用于获取指定平台的 Page 对象
     */
    @FunctionalInterface
    public interface PageSupplier {
        Page get(RecruitmentPlatformEnum platform);
    }

    public CookieManager(ConfigService configService) {
        this.configService = configService;
        this.scheduler = Executors.newSingleThreadScheduledExecutor(r -> {
            Thread t = new Thread(r, "cookie-backup-scheduler");
            t.setDaemon(true);
            return t;
        });
    }

    /**
     * 启动指定平台的 Cookie 自动备份任务
     *
     * @param platform     平台枚举
     * @param pageSupplier Page 提供者，用于获取当前平台的 Page 对象
     */
    public void startAutoBackup(RecruitmentPlatformEnum platform, PageSupplier pageSupplier) {
        // 若该平台已有定时任务，先取消，避免重复调度
        ScheduledFuture<?> existing = backupTasks.get(platform);
        if (existing != null && !existing.isCancelled()) {
            existing.cancel(false);
        }

        Runnable task = () -> {
            try {
                Page page = pageSupplier.get(platform);
                if (page == null) {
                    log.warn("平台 {} 的Page对象不存在，无法捕获Cookie", platform.getPlatformName());
                    return;
                }
                boolean success = saveCookies(platform, page);
                if (!success) {
                    log.debug("平台 {} Cookie 自动备份本轮未成功，稍后重试", platform.getPlatformName());
                }
            } catch (Exception e) {
                log.warn("平台 {} Cookie 自动备份任务执行异常", platform.getPlatformName(), e);
            }
        };

        ScheduledFuture<?> future = scheduler.scheduleAtFixedRate(
                task,
                5, // 初始延迟 5 秒
                5, // 每 5 秒执行一次
                TimeUnit.SECONDS);
        backupTasks.put(platform, future);
        log.info("已启动平台 {} 的 Cookie 自动备份任务（每5秒）", platform.getPlatformName());
    }

    /**
     * 停止指定平台的 Cookie 自动备份任务
     *
     * @param platform 平台枚举
     */
    public void stopAutoBackup(RecruitmentPlatformEnum platform) {
        ScheduledFuture<?> future = backupTasks.remove(platform);
        if (future != null && !future.isCancelled()) {
            future.cancel(false);
            log.info("已停止平台 {} 的 Cookie 自动备份任务", platform.getPlatformName());
        }
    }

    /**
     * 停止所有 Cookie 自动备份任务
     */
    @PreDestroy
    public void shutdown() {
        backupTasks.values().forEach(future -> {
            if (future != null && !future.isCancelled()) {
                future.cancel(false);
            }
        });
        backupTasks.clear();
        scheduler.shutdownNow();
        log.info("Cookie 自动备份任务已关闭");
    }

    /**
     * 从配置实体加载平台 Cookie 并注入到页面
     *
     * @param platform 平台枚举
     * @param page     页面对象
     */
    public void loadCookies(RecruitmentPlatformEnum platform, Page page) {
        try {
            ConfigEntity config = configService.loadByPlatformType(platform.getPlatformCode());
            if (config == null || config.getCookieData() == null || config.getCookieData().trim().isEmpty()) {
                log.info("平台 {} 暂无Cookie配置，跳过加载", platform.getPlatformName());
                return;
            }

            String cookieData = config.getCookieData();

            // 额外检查：如果是空数组或无效JSON，也跳过
            String trimmed = cookieData.trim();
            if ("[]".equals(trimmed) || "{}".equals(trimmed) || trimmed.isEmpty()) {
                log.info("平台 {} 的Cookie数据为空，跳过加载", platform.getPlatformName());
                return;
            }

            loadCookiesFromJson(platform.getHomeUrl(), cookieData, page);
            log.info("已为平台 {} 加载Cookie", platform.getPlatformName());
        } catch (Exception e) {
            log.error("加载平台 {} 的Cookie失败，将使用无Cookie状态启动", platform.getPlatformName(), e);
        }
    }

    /**
     * 导航到目标域并加载 Cookie（完整流程）
     * <p>
     * Playwright 要求：每个 cookie 必须提供 {@code url}，或同时提供 {@code domain} 与 {@code path}。
     * 调用方应保证在「已导航到 targetUrl 对应域名」之后调用本方法，再执行一次 reload，
     * 否则首次请求可能不会带上注入的 cookie（Playwright 已知行为）。
     *
     * @param platform 平台枚举
     * @param page     页面对象
     */
    public void navigateAndLoadCookies(RecruitmentPlatformEnum platform, Page page) {
        // 先导航到目标域
        page.navigate(platform.getHomeUrl());
        page.waitForLoadState(LoadState.DOMCONTENTLOADED);

        // 再注入 Cookie
        loadCookies(platform, page);

        // 最后刷新页面，确保 Cookie 随请求发送
        page.reload(new Page.ReloadOptions().setWaitUntil(WaitUntilState.DOMCONTENTLOADED));
    }

    /**
     * 从 JSON 字符串加载 Cookie 到页面
     *
     * @param targetUrl  目标站点的 URL（用于设置 cookie 的 url 作用域）
     * @param cookieData Cookie 的 JSON 字符串
     * @param page       页面对象
     */
    public void loadCookiesFromJson(String targetUrl, String cookieData, Page page) {
        if (targetUrl == null || targetUrl.trim().isEmpty()) {
            log.warn("loadCookiesFromJson: targetUrl 为空，无法正确注入 Cookie");
            return;
        }
        try {
            JSONArray jsonArray = new JSONArray(cookieData);
            List<Cookie> cookies = new ArrayList<>();

            log.debug("开始解析Cookie JSON，原始数据长度: {}", cookieData.length());

            for (int i = 0; i < jsonArray.length(); i++) {
                try {
                    JSONObject jsonObject = jsonArray.getJSONObject(i);

                    String name = jsonObject.optString("name", "");
                    String value = jsonObject.optString("value", "");

                    if (name.isEmpty()) {
                        log.warn("Cookie[{}] 缺少 name 字段，跳过", i);
                        continue;
                    }

                    Cookie cookie = new Cookie(name, value);

                    if (!jsonObject.isNull("domain")) {
                        cookie.domain = jsonObject.getString("domain");
                    }
                    if (!jsonObject.isNull("path")) {
                        cookie.path = jsonObject.getString("path");
                    }
                    if (cookie.domain != null && (cookie.path == null || cookie.path.isEmpty())) {
                        cookie.path = "/";
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

                    // Playwright 要求：每个 cookie 只能提供 url 或 domain+path
                    // 有 domain 时不要设置 url（否则会触发 "either url or domain" 异常）
                    if (cookie.domain == null || cookie.domain.isEmpty()) {
                        cookie.url = targetUrl;
                    }

                    // 防御性校验
                    if ((cookie.url == null || cookie.url.isEmpty())
                            && (cookie.domain == null || cookie.domain.isEmpty())) {
                        log.warn("Cookie[{}] {} 既没有 url 也没有 domain，跳过", i, name);
                        continue;
                    }

                    log.trace("Cookie[{}] {} -> url={}, domain={}, path={}",
                            i, name, cookie.url, cookie.domain, cookie.path);

                    cookies.add(cookie);
                } catch (Exception e) {
                    log.warn("解析Cookie[{}]失败，跳过: {}", i, e.getMessage());
                }
            }

            if (cookies.isEmpty()) {
                log.warn("没有有效的Cookie可加载（原始数量: {}）", jsonArray.length());
                return;
            }

            log.debug("成功解析 {} 个Cookie，准备注入...", cookies.size());
            page.context().addCookies(cookies);
            log.info("成功加载 {} 个Cookie（targetUrl={}）", cookies.size(), targetUrl);
        } catch (Exception e) {
            log.error("从JSON加载Cookie失败，原始数据前100字符: {}",
                    cookieData.length() > 100 ? cookieData.substring(0, 100) : cookieData, e);
        }
    }

    /**
     * 保存平台 Cookie 到配置实体
     * <p>
     * 最佳实践：获取 Cookie 前先等待页面完全加载，确保所有异步 Cookie 都已写入。
     * 使用 NETWORKIDLE 而非 DOMCONTENTLOADED，因为很多 Cookie 是通过 XHR/ Fetch 请求后端接口设置的。
     *
     * @param platform 平台枚举
     * @param page    页面对象
     * @return true-保存成功, false-保存失败
     */
    public boolean saveCookies(RecruitmentPlatformEnum platform, Page page) {
        try {
            // 等待页面网络空闲，确保所有异步请求（包括设置Cookie的请求）都已完成
            // 使用 NETWORKIDLE 而不是 DOMCONTENTLOADED，因为很多平台的登录态Cookie是通过后端API返回的
            page.waitForLoadState(LoadState.NETWORKIDLE);

            // 额外等待一小段时间，确保JavaScript有足够时间处理并写入Cookie
            // 某些平台会在页面load后通过JS延迟设置Cookie
            page.waitForTimeout(500);

            ConfigEntity config = configService.loadByPlatformType(platform.getPlatformCode());
            if (config == null) {
                config = new ConfigEntity();
            }

            // 获取当前浏览器的 Cookie 并转换为 JSON 字符串
            String cookieJson = getCookiesAsJson(page);
            config.setCookieData(cookieJson);
            config.setPlatformType(platform.getPlatformCode());

            configService.save(config);

            // 打印完整的 Cookie 信息到日志
            printCookieDetails(platform, cookieJson);

            log.debug("✓ 平台 {} 的Cookie已保存到配置实体", platform.getPlatformName());
            return true;
        } catch (Exception e) {
            log.error("保存平台 {} 的Cookie到配置失败", platform.getPlatformName(), e);
            return false;
        }
    }

    /**
     * 获取页面 Cookie 并转换为 JSON 字符串
     *
     * @param page 页面对象
     * @return Cookie 的 JSON 字符串
     */
    public String getCookiesAsJson(Page page) {
        try {
            List<Cookie> cookies = page.context().cookies();
            JSONArray jsonArray = new JSONArray();

            for (Cookie cookie : cookies) {
                JSONObject jsonObject = getJsonObject(cookie);
                jsonArray.put(jsonObject);
            }

            return jsonArray.toString();
        } catch (Exception e) {
            log.error("获取Cookie失败", e);
            return "[]";
        }
    }

    @NotNull
    private static JSONObject getJsonObject(Cookie cookie) {
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
        return jsonObject;
    }

    /**
     * 打印保存的 Cookie 详细信息
     *
     * @param platform   平台枚举
     * @param cookieJson Cookie 的 JSON 字符串
     */
    private void printCookieDetails(RecruitmentPlatformEnum platform, String cookieJson) {
        try {
            JSONArray jsonArray = new JSONArray(cookieJson);
            int cookieCount = jsonArray.length();

            log.info("========== {} 保存Cookie详细信息 ==========", platform.getPlatformName());
            log.info("Cookie总数: {}", cookieCount);

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
                log.debug("  - value: {}", value.length() > 80 ? value.substring(0, 80) + "..." : value);
                log.debug("  - domain: {}", domain);
                log.debug("  - path: {}", path);
                log.debug("  - expires: {}", expires);
                log.debug("  - secure: {}", secure);
                log.debug("  - httpOnly: {}", httpOnly);
            }

            log.debug("完整Cookie JSON (前500字符): {}",
                    cookieJson.length() > 500 ? cookieJson.substring(0, 500) + "..." : cookieJson);
            log.info("=".repeat(50 + platform.getPlatformName().length()));
        } catch (Exception e) {
            log.error("打印 {} 的Cookie详细信息失败", platform.getPlatformName(), e);
        }
    }
}
