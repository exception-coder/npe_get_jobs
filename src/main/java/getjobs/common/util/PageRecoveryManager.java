package getjobs.common.util;

import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.PlaywrightException;
import com.microsoft.playwright.options.Cookie;
import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.function.Supplier;

/**
 * Page对象恢复管理器
 * 
 * 职责：
 * 1. 检测Page对象是否真正可用（不仅是未关闭，还要能正常交互）
 * 2. 在Page对象失效时，自动重建Page并恢复到原页面状态
 * 3. 保持用户在当前页面继续操作，无缝恢复
 * 
 * 使用场景：
 * - 长时间运行的任务（如岗位采集）
 * - 频繁的Page操作（如滚动、点击）
 * - 需要确保Page对象始终可用的场景
 * 
 * @author system
 * @since 1.0.29
 */
@Slf4j
public class PageRecoveryManager {

    /**
     * 页面状态快照
     */
    public static class PageSnapshot {
        private final String url;
        private final List<Cookie> cookies;
        private final long timestamp;

        public PageSnapshot(String url, List<Cookie> cookies) {
            this.url = url;
            this.cookies = cookies;
            this.timestamp = System.currentTimeMillis();
        }

        public String getUrl() {
            return url;
        }

        public List<Cookie> getCookies() {
            return cookies;
        }

        public long getTimestamp() {
            return timestamp;
        }
    }

    /**
     * 检测Page是否真正健康可用
     * 
     * 不仅检查Page是否关闭，还尝试执行简单操作验证Page是否能正常交互
     * 
     * @param page Page对象
     * @return true-健康可用, false-不健康或不可用
     */
    public static boolean isPageReallyHealthy(Page page) {
        if (page == null) {
            log.warn("Page对象为null");
            return false;
        }

        try {
            // 检查1：Page是否已关闭
            if (page.isClosed()) {
                log.warn("Page对象已关闭");
                return false;
            }

            // 检查2：尝试获取URL（验证基本通信）
            String url = page.url();
            if (url == null || url.isEmpty()) {
                log.warn("无法获取Page的URL");
                return false;
            }

            // 检查3：尝试执行简单的JavaScript（验证JS执行能力）
            Object result = page.evaluate("() => document.readyState");
            if (result == null) {
                log.warn("无法执行JavaScript");
                return false;
            }

            log.debug("Page健康检查通过 - URL: {}, readyState: {}", url, result);
            return true;

        } catch (PlaywrightException e) {
            log.warn("Page健康检查失败: {}", e.getMessage());
            return false;
        } catch (Exception e) {
            log.error("Page健康检查时发生未知异常", e);
            return false;
        }
    }

    /**
     * 保存Page状态快照
     * 
     * @param page Page对象
     * @return 页面状态快照
     */
    public static PageSnapshot captureSnapshot(Page page) {
        try {
            String url = page.url();
            List<Cookie> cookies = page.context().cookies();

            log.debug("已保存Page状态快照 - URL: {}, Cookie数量: {}", url, cookies.size());
            return new PageSnapshot(url, cookies);

        } catch (Exception e) {
            log.error("保存Page状态快照失败", e);
            return null;
        }
    }

    /**
     * 恢复Page到快照状态
     * 
     * @param page     Page对象
     * @param snapshot 页面状态快照
     * @return true-恢复成功, false-恢复失败
     */
    public static boolean restoreFromSnapshot(Page page, PageSnapshot snapshot) {
        if (page == null || snapshot == null) {
            log.error("Page对象或快照为null，无法恢复");
            return false;
        }

        try {
            log.info("开始恢复Page状态 - 目标URL: {}", snapshot.getUrl());

            // 1. 恢复Cookie
            if (snapshot.getCookies() != null && !snapshot.getCookies().isEmpty()) {
                page.context().addCookies(snapshot.getCookies());
                log.debug("已恢复 {} 个Cookie", snapshot.getCookies().size());
            }

            // 2. 导航到原页面
            page.navigate(snapshot.getUrl());
            log.debug("已导航到原URL: {}", snapshot.getUrl());

            // 3. 等待页面加载完成
            page.waitForLoadState();
            log.debug("页面加载完成");

            log.info("✓ Page状态恢复成功！耗时: {}ms",
                    System.currentTimeMillis() - snapshot.getTimestamp());
            return true;

        } catch (Exception e) {
            log.error("恢复Page状态失败", e);
            return false;
        }
    }

    /**
     * 重建Page对象并恢复状态
     * 
     * 当检测到当前Page不可用时，创建新的Page对象并恢复到原状态
     * 
     * @param currentPage 当前（可能已失效的）Page对象
     * @param context     BrowserContext对象
     * @param snapshot    页面状态快照
     * @param pageUpdater Page对象更新回调（用于更新全局引用）
     * @return 新的Page对象，如果恢复失败则返回null
     */
    public static Page rebuildAndRestore(
            Page currentPage,
            BrowserContext context,
            PageSnapshot snapshot,
            java.util.function.Consumer<Page> pageUpdater) {

        try {
            log.warn("检测到Page对象不健康，开始重建...");

            // 1. 关闭旧的Page（如果还未关闭）
            if (currentPage != null && !currentPage.isClosed()) {
                try {
                    currentPage.close();
                    log.debug("已关闭旧的Page对象");
                } catch (Exception e) {
                    log.warn("关闭旧Page失败（可能已失效）: {}", e.getMessage());
                }
            }

            // 2. 创建新的Page
            Page newPage = context.newPage();
            log.debug("已创建新的Page对象");

            // 3. 恢复状态
            boolean restored = restoreFromSnapshot(newPage, snapshot);
            if (!restored) {
                log.error("状态恢复失败，但新Page已创建");
                // 即使状态恢复失败，也返回新Page，让调用者决定如何处理
            }

            // 4. 更新全局引用
            if (pageUpdater != null) {
                pageUpdater.accept(newPage);
                log.debug("已更新全局Page引用");
            }

            log.info("✓ Page对象重建完成！");
            return newPage;

        } catch (Exception e) {
            log.error("重建Page对象失败", e);
            return null;
        }
    }

    /**
     * 执行操作，自动处理Page恢复
     * 
     * 如果操作失败且Page不健康，自动重建Page并重试操作
     * 
     * @param page          Page对象
     * @param context       BrowserContext对象
     * @param operation     要执行的操作
     * @param operationName 操作名称（用于日志）
     * @param pageGetter    获取当前Page的方法（因为Page可能被重建）
     * @param pageUpdater   更新Page引用的回调
     * @param <T>           返回类型
     * @return 操作结果
     * @throws PlaywrightException 如果重建和重试后仍然失败
     */
    public static <T> T executeWithAutoRecovery(
            Page page,
            BrowserContext context,
            Supplier<T> operation,
            String operationName,
            Supplier<Page> pageGetter,
            java.util.function.Consumer<Page> pageUpdater) {

        try {
            // 第一次尝试
            return operation.get();

        } catch (PlaywrightException e) {
            // 判断是否是Page对象失效导致的异常
            if (e.getMessage() != null && e.getMessage().contains("Object doesn't exist")) {
                log.warn("{} 执行失败，疑似Page对象失效: {}", operationName, e.getMessage());

                // 检查Page健康状态
                Page currentPage = pageGetter.get();
                if (!isPageReallyHealthy(currentPage)) {
                    log.warn("确认Page对象不健康，尝试自动恢复...");

                    // 保存当前状态
                    PageSnapshot snapshot = captureSnapshot(currentPage);
                    if (snapshot == null) {
                        log.error("无法保存Page状态，放弃恢复");
                        throw e;
                    }

                    // 重建Page
                    Page newPage = rebuildAndRestore(currentPage, context, snapshot, pageUpdater);
                    if (newPage == null) {
                        log.error("Page重建失败，放弃操作");
                        throw e;
                    }

                    // 使用新Page重试操作
                    try {
                        log.info("使用重建的Page重试操作: {}", operationName);
                        return operation.get();
                    } catch (Exception retryE) {
                        log.error("使用重建的Page重试仍然失败", retryE);
                        throw retryE;
                    }
                } else {
                    log.warn("Page对象健康，但操作仍失败，可能是其他原因");
                    throw e;
                }
            } else {
                // 其他类型的异常，直接抛出
                throw e;
            }
        }
    }
}
