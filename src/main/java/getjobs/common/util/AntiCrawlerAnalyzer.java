package getjobs.common.util;

import com.microsoft.playwright.Page;
import com.microsoft.playwright.Response;
import lombok.extern.slf4j.Slf4j;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * 反爬虫代码分析器
 * <p>
 * 专门用于下载和分析反爬虫 JS 代码
 */
@Slf4j
public class AntiCrawlerAnalyzer {

    private static final String ANALYSIS_DIR = "logs/anti-crawler-analysis";
    private static final DateTimeFormatter TIMESTAMP_FORMATTER = DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss");

    /**
     * 下载并分析指定 URL 的 JS 文件
     */
    public static void downloadAndAnalyzeJS(Page page, String jsUrl) {
        try {
            log.info("开始下载并分析 JS 文件: {}", jsUrl);
            
            // 创建分析目录
            Path analysisDir = Paths.get(ANALYSIS_DIR);
            if (!Files.exists(analysisDir)) {
                Files.createDirectories(analysisDir);
            }

            // 使用 Playwright 的 evaluate 来获取 JS 内容
            String jsContent = (String) page.evaluate("async (url) => {" +
                    "  const response = await fetch(url);" +
                    "  return await response.text();" +
                    "}", jsUrl);

            // 生成文件名
            String timestamp = LocalDateTime.now().format(TIMESTAMP_FORMATTER);
            String fileName = jsUrl.substring(jsUrl.lastIndexOf("/") + 1);
            if (fileName.contains("?")) {
                fileName = fileName.substring(0, fileName.indexOf("?"));
            }
            String outputPath = String.format("%s/%s_%s", ANALYSIS_DIR, timestamp, fileName);

            // 保存完整的 JS 文件
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(outputPath))) {
                writer.write("// URL: " + jsUrl + "\n");
                writer.write("// 下载时间: " + LocalDateTime.now() + "\n");
                writer.write("// ========================================\n\n");
                writer.write(jsContent);
                writer.flush();
            }

            log.info("✓ JS 文件已保存到: {}", outputPath);
            log.info("  - 文件大小: {} 字符", jsContent.length());

            // 分析关键特征
            analyzeJSContent(jsContent, jsUrl);

        } catch (Exception e) {
            log.error("下载或分析 JS 文件失败: {}", jsUrl, e);
        }
    }

    /**
     * 分析 JS 内容中的关键特征
     */
    private static void analyzeJSContent(String jsContent, String jsUrl) {
        log.info("========== 分析 JS 文件: {} ==========", jsUrl);

        // 检测关键特征
        boolean hasWebdriverCheck = jsContent.contains("webdriver") || jsContent.contains("navigator.webdriver");
        boolean hasPlaywrightCheck = jsContent.contains("__playwright") || jsContent.contains("playwright");
        boolean hasBlankRedirect = jsContent.contains("about:blank");
        boolean hasLocationReplace = jsContent.contains("location.replace") || jsContent.contains("location.href");
        boolean hasDebuggerCheck = jsContent.contains("debugger");
        boolean hasChromeCheck = jsContent.contains("window.chrome") || jsContent.contains("chrome.runtime");
        boolean hasPluginsCheck = jsContent.contains("navigator.plugins") || jsContent.contains("plugins.length");
        boolean hasPermissionsCheck = jsContent.contains("navigator.permissions");
        boolean hasLanguagesCheck = jsContent.contains("navigator.languages");

        log.info("特征检测结果:");
        if (hasWebdriverCheck) log.warn("  ❌ 包含 webdriver 检测");
        if (hasPlaywrightCheck) log.warn("  ❌ 包含 playwright 检测");
        if (hasBlankRedirect) log.warn("  ❌ 包含 about:blank 跳转");
        if (hasLocationReplace) log.warn("  ❌ 包含 location 跳转");
        if (hasDebuggerCheck) log.warn("  ❌ 包含 debugger 检测");
        if (hasChromeCheck) log.warn("  ❌ 包含 chrome 对象检测");
        if (hasPluginsCheck) log.warn("  ❌ 包含 plugins 检测");
        if (hasPermissionsCheck) log.warn("  ❌ 包含 permissions 检测");
        if (hasLanguagesCheck) log.warn("  ❌ 包含 languages 检测");

        log.info("=".repeat(50));
    }

    /**
     * 下载 Boss 直聘的核心反爬虫 JS 文件
     */
    public static void downloadBossAntiCrawlerJS(Page page) {
        // 核心反爬虫文件
        String[] jsUrls = {
                "https://static.zhipin.com/zhipin-geek-seo/v5404/web/geek/js/main.js",
                "https://www.zhipin.com/zhipin-security/web/geek/polyfill/index.js",
                "https://img.bosszhipin.com/static/zhipin/geek/sdk/browser-check.min.js"
        };

        for (String url : jsUrls) {
            downloadAndAnalyzeJS(page, url);
        }
    }

}

