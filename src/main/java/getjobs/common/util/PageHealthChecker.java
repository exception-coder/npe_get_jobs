package getjobs.common.util;

import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.PlaywrightException;
import lombok.extern.slf4j.Slf4j;

import java.util.function.Supplier;

/**
 * Page健康检查工具类
 * 
 * 职责：
 * 1. 检测Page对象是否处于健康可用状态
 * 2. 处理Playwright的"Object doesn't exist"异常
 * 3. 提供安全的Page操作包装方法
 * 4. 支持Page对象自动恢复机制
 * 
 * @author system
 * @since 1.0.29
 */
@Slf4j
public class PageHealthChecker {

    /**
     * 检查Page是否健康可用
     * 
     * @param page Playwright Page对象
     * @return true-健康, false-不健康
     */
    public static boolean isPageHealthy(Page page) {
        if (page == null) {
            log.warn("Page对象为null，判定为不健康");
            return false;
        }

        try {
            // 尝试获取页面URL，如果Page已失效会抛出异常
            String url = page.url();

            // 检查Page是否已关闭
            if (page.isClosed()) {
                log.warn("Page对象已关闭，判定为不健康");
                return false;
            }

            log.debug("Page健康检查通过，当前URL: {}", url);
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
     * 安全执行Page操作（带重试机制）
     * 
     * @param page          Page对象
     * @param operation     要执行的操作
     * @param operationName 操作名称（用于日志）
     * @param maxRetries    最大重试次数
     * @param <T>           返回类型
     * @return 操作结果
     * @throws PlaywrightException 当所有重试都失败时抛出
     */
    public static <T> T executeWithRetry(Page page, PageOperation<T> operation, String operationName, int maxRetries) {
        int attempt = 0;
        PlaywrightException lastException = null;

        while (attempt <= maxRetries) {
            try {
                if (attempt > 0) {
                    log.info("正在重试 {} (第{}/{}次)", operationName, attempt, maxRetries);
                }

                // 执行操作前检查Page健康状态
                if (!isPageHealthy(page)) {
                    log.warn("Page不健康，{} 操作跳过当前尝试", operationName);
                    throw new PlaywrightException("Page对象不健康");
                }

                // 执行实际操作
                T result = operation.execute();

                if (attempt > 0) {
                    log.info("{} 重试成功！", operationName);
                }

                return result;
            } catch (PlaywrightException e) {
                lastException = e;
                String errorMsg = e.getMessage();

                // 判断是否是"Object doesn't exist"异常
                if (errorMsg != null && errorMsg.contains("Object doesn't exist")) {
                    log.warn("{} 执行时遇到Page对象失效异常 (尝试{}/{}): {}",
                            operationName, attempt + 1, maxRetries + 1, errorMsg);

                    // 等待一小段时间再重试
                    if (attempt < maxRetries) {
                        try {
                            Thread.sleep(1000);
                        } catch (InterruptedException ie) {
                            Thread.currentThread().interrupt();
                            throw new PlaywrightException("重试等待被中断", ie);
                        }
                    }
                } else {
                    // 其他类型的异常，直接抛出
                    log.error("{} 执行失败（非对象失效异常）: {}", operationName, errorMsg);
                    throw e;
                }
            }

            attempt++;
        }

        // 所有重试都失败了
        log.error("{} 在{}次尝试后仍然失败", operationName, maxRetries + 1);
        if (lastException != null) {
            throw lastException;
        } else {
            throw new PlaywrightException("操作失败: " + operationName);
        }
    }

    /**
     * 安全执行Page操作（带重试机制，无返回值版本）
     * 
     * @param page          Page对象
     * @param operation     要执行的操作
     * @param operationName 操作名称（用于日志）
     * @param maxRetries    最大重试次数
     */
    public static void executeWithRetry(Page page, PageVoidOperation operation, String operationName, int maxRetries) {
        executeWithRetry(page, () -> {
            operation.execute();
            return null;
        }, operationName, maxRetries);
    }

    /**
     * Page操作函数式接口（有返回值）
     */
    @FunctionalInterface
    public interface PageOperation<T> {
        T execute() throws PlaywrightException;
    }

    /**
     * Page操作函数式接口（无返回值）
     */
    @FunctionalInterface
    public interface PageVoidOperation {
        void execute() throws PlaywrightException;
    }

    /**
     * 执行Page操作，支持重试和Page自动恢复（高级版本）
     * 
     * 相比普通的 executeWithRetry，此方法增加了Page对象恢复能力：
     * 1. 普通重试失败后，检查Page健康状态
     * 2. 如果Page不健康，尝试恢复Page对象
     * 3. 使用恢复后的Page重新执行操作
     * 
     * @param page          Page对象
     * @param context       BrowserContext对象（用于重建Page）
     * @param operation     要执行的操作
     * @param operationName 操作名称
     * @param maxRetries    最大重试次数
     * @param pageGetter    获取最新Page对象的方法（因为Page可能被重建）
     * @param pageUpdater   更新Page对象引用的回调
     * @param <T>           返回类型
     * @return 操作结果
     * @throws PlaywrightException 如果所有尝试都失败
     */
    public static <T> T executeWithAutoRecovery(
            Page page,
            BrowserContext context,
            PageOperation<T> operation,
            String operationName,
            int maxRetries,
            Supplier<Page> pageGetter,
            java.util.function.Consumer<Page> pageUpdater) {

        try {
            // 先尝试普通重试
            return executeWithRetry(page, operation, operationName, maxRetries);

        } catch (PlaywrightException e) {
            // 普通重试失败，尝试Page恢复
            if (e.getMessage() != null && e.getMessage().contains("Object doesn't exist")) {
                log.warn("{} 经过{}次重试仍失败，尝试恢复Page对象...", operationName, maxRetries + 1);

                // 使用 PageRecoveryManager 执行自动恢复
                return PageRecoveryManager.executeWithAutoRecovery(
                        page,
                        context,
                        operation::execute,
                        operationName,
                        pageGetter,
                        pageUpdater);
            } else {
                // 非Page对象失效异常，直接抛出
                throw e;
            }
        }
    }
}
