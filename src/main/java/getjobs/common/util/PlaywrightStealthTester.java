package getjobs.common.util;

import com.microsoft.playwright.*;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

/**
 * Playwright 隐藏特征测试工具
 * 
 * 用于验证我们的 Stealth 脚本是否成功隐藏了所有 Playwright 特征
 */
@Slf4j
public class PlaywrightStealthTester {

    public static void main(String[] args) {
        log.info("========== Playwright Stealth 测试开始 ==========");
        
        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
                    .setHeadless(false)
                    .setSlowMo(50)
                    .setArgs(List.of(
                            "--disable-blink-features=AutomationControlled",
                            "--exclude-switches=enable-automation",
                            "--disable-infobars",
                            "--window-size=1920,1080"
                    )));

            BrowserContext context = browser.newContext(new Browser.NewContextOptions()
                    .setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36")
                    .setViewportSize(1920, 1080)
                    .setDeviceScaleFactor(1.0)
                    .setHasTouch(false)
                    .setIsMobile(false)
                    .setLocale("zh-CN")
                    .setTimezoneId("Asia/Shanghai"));

            // 注入完整的 Stealth 脚本
            context.addInitScript(
                    "// ========== Playwright Stealth Mode ==========\n" +
                    "\n" +
                    "// 1. 隐藏 webdriver 属性\n" +
                    "Object.defineProperty(navigator, 'webdriver', {\n" +
                    "  get: () => undefined\n" +
                    "});\n" +
                    "\n" +
                    "// 2. 伪造 window.chrome 对象（重要！）\n" +
                    "window.chrome = {\n" +
                    "  runtime: {},\n" +
                    "  loadTimes: function() {},\n" +
                    "  csi: function() {},\n" +
                    "  app: {}\n" +
                    "};\n" +
                    "\n" +
                    "// 3. 伪造 navigator.plugins（重要！）\n" +
                    "Object.defineProperty(navigator, 'plugins', {\n" +
                    "  get: () => [1, 2, 3, 4, 5]\n" +
                    "});\n" +
                    "\n" +
                    "// 4. 伪造 navigator.languages\n" +
                    "Object.defineProperty(navigator, 'languages', {\n" +
                    "  get: () => ['zh-CN', 'zh', 'en']\n" +
                    "});\n" +
                    "\n" +
                    "// 5. 修复 permissions API\n" +
                    "const originalQuery = window.navigator.permissions.query;\n" +
                    "window.navigator.permissions.query = (parameters) => (\n" +
                    "  parameters.name === 'notifications' ?\n" +
                    "    Promise.resolve({ state: Notification.permission }) :\n" +
                    "    originalQuery(parameters)\n" +
                    ");\n" +
                    "\n" +
                    "// 6. 覆盖 toString 方法，使其看起来像原生代码\n" +
                    "const oldToString = Function.prototype.toString;\n" +
                    "Function.prototype.toString = function() {\n" +
                    "  if (this === window.navigator.permissions.query) {\n" +
                    "    return 'function query() { [native code] }';\n" +
                    "  }\n" +
                    "  return oldToString.call(this);\n" +
                    "};\n" +
                    "\n" +
                    "console.log('[STEALTH] ✓ All Playwright features hidden successfully');\n" +
                    "\n" +
                    "// ========== Playwright Stealth Mode End ==========");

            Page page = context.newPage();

            log.info("正在访问 Boss 直聘...");
            page.navigate("https://www.zhipin.com/");

            log.info("等待 5 秒，观察页面是否正常加载...");
            Thread.sleep(5000);

            // 检查当前 URL
            String currentUrl = page.url();
            log.info("当前 URL: {}", currentUrl);

            if (currentUrl.contains("about:blank")) {
                log.error("❌ 测试失败：页面被劫持到 about:blank");
            } else if (currentUrl.contains("zhipin.com")) {
                log.info("✅ 测试成功：页面正常加载");
            } else {
                log.warn("⚠️ 测试结果未知：页面跳转到了其他地址");
            }

            // 在浏览器控制台中检查特征
            log.info("\n========== 特征检测结果 ==========");
            
            Object webdriver = page.evaluate("navigator.webdriver");
            log.info("navigator.webdriver: {}", webdriver);
            
            Object chrome = page.evaluate("typeof window.chrome");
            log.info("window.chrome: {}", chrome);
            
            Object plugins = page.evaluate("navigator.plugins.length");
            log.info("navigator.plugins.length: {}", plugins);
            
            Object languages = page.evaluate("navigator.languages");
            log.info("navigator.languages: {}", languages);

            log.info("========================================\n");

            // 保持浏览器打开 30 秒，方便手动检查
            log.info("浏览器将保持打开 30 秒，请手动检查页面...");
            Thread.sleep(30000);

            log.info("测试完成，关闭浏览器");
            browser.close();

        } catch (Exception e) {
            log.error("测试过程中发生错误", e);
        }

        log.info("========== Playwright Stealth 测试结束 ==========");
    }
}

