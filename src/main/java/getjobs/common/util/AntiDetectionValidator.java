package getjobs.common.util;

import com.microsoft.playwright.Page;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;

/**
 * 反检测配置验证工具
 * 
 * <p>用于验证Playwright的反检测配置是否生效，检测所有可能被识别为自动化浏览器的特征。
 * 
 * <h3>使用方法：</h3>
 * <pre>
 * Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
 * Map&lt;String, Object&gt; result = AntiDetectionValidator.validate(page);
 * AntiDetectionValidator.printReport(result);
 * </pre>
 * 
 * @author AI Assistant
 * @since 2026-02-04
 */
@Slf4j
public class AntiDetectionValidator {

    /**
     * 验证所有反检测配置
     * 
     * @param page Playwright页面对象
     * @return 验证结果Map，key为检测项名称，value为检测结果
     */
    public static Map<String, Object> validate(Page page) {
        Map<String, Object> results = new HashMap<>();
        
        log.info("========== 开始验证反检测配置 ==========");
        
        // 1. WebDriver检测
        results.put("webdriver", checkWebDriver(page));
        
        // 2. ChromeDriver变量检测
        results.put("chromeDriver", checkChromeDriver(page));
        
        // 3. Phantom检测
        results.put("phantom", checkPhantom(page));
        
        // 4. Navigator.plugins
        results.put("plugins", checkPlugins(page));
        
        // 5. Navigator.languages
        results.put("languages", checkLanguages(page));
        
        // 6. Navigator.hardwareConcurrency
        results.put("hardwareConcurrency", checkHardwareConcurrency(page));
        
        // 7. Navigator.deviceMemory
        results.put("deviceMemory", checkDeviceMemory(page));
        
        // 8. Navigator.vendor
        results.put("vendor", checkVendor(page));
        
        // 9. Navigator.platform
        results.put("platform", checkPlatform(page));
        
        // 10. Navigator.maxTouchPoints
        results.put("maxTouchPoints", checkMaxTouchPoints(page));
        
        // 11. Chrome对象
        results.put("chrome", checkChrome(page));
        
        // 12. Playwright特征
        results.put("playwright", checkPlaywrightFeatures(page));
        
        // 13. WebGL
        results.put("webgl", checkWebGL(page));
        
        // 14. Screen属性
        results.put("screen", checkScreen(page));
        
        log.info("========== 验证完成 ==========");
        
        return results;
    }
    
    /**
     * 检测 navigator.webdriver
     */
    private static Map<String, Object> checkWebDriver(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            Object webdriver = page.evaluate("() => navigator.webdriver");
            result.put("value", webdriver);
            result.put("pass", webdriver == null);
            result.put("message", webdriver == null ? "✅ PASS" : "❌ FAIL - webdriver = " + webdriver);
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 ChromeDriver 变量
     */
    private static Map<String, Object> checkChromeDriver(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            String script = "() => {\n" +
                    "  const cdcKeys = Object.keys(window).filter(k => k.startsWith('$cdc_') || k.startsWith('$chrome'));\n" +
                    "  return cdcKeys.length > 0 ? cdcKeys : null;\n" +
                    "}";
            Object cdcVars = page.evaluate(script);
            result.put("value", cdcVars);
            result.put("pass", cdcVars == null);
            result.put("message", cdcVars == null ? "✅ PASS" : "❌ FAIL - 发现变量: " + cdcVars);
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 Phantom 特征
     */
    private static Map<String, Object> checkPhantom(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            String script = "() => {\n" +
                    "  return {\n" +
                    "    callPhantom: typeof window.callPhantom !== 'undefined',\n" +
                    "    _phantom: typeof window._phantom !== 'undefined'\n" +
                    "  };\n" +
                    "}";
            @SuppressWarnings("unchecked")
            Map<String, Object> phantom = (Map<String, Object>) page.evaluate(script);
            boolean hasPhantom = (Boolean) phantom.get("callPhantom") || (Boolean) phantom.get("_phantom");
            result.put("value", phantom);
            result.put("pass", !hasPhantom);
            result.put("message", !hasPhantom ? "✅ PASS" : "❌ FAIL - 发现Phantom特征");
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 navigator.plugins
     */
    private static Map<String, Object> checkPlugins(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            Integer pluginCount = (Integer) page.evaluate("() => navigator.plugins.length");
            result.put("value", pluginCount);
            result.put("pass", pluginCount != null && pluginCount > 0);
            result.put("message", pluginCount != null && pluginCount > 0 
                    ? "✅ PASS - " + pluginCount + " 个插件" 
                    : "❌ FAIL - 插件数量为0");
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 navigator.languages
     */
    private static Map<String, Object> checkLanguages(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            @SuppressWarnings("unchecked")
            java.util.List<String> languages = (java.util.List<String>) page.evaluate("() => Array.from(navigator.languages)");
            result.put("value", languages);
            result.put("pass", languages != null && languages.size() > 1);
            result.put("message", languages != null && languages.size() > 1 
                    ? "✅ PASS - " + languages 
                    : "❌ FAIL - 语言列表异常");
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 navigator.hardwareConcurrency
     */
    private static Map<String, Object> checkHardwareConcurrency(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            Integer cores = (Integer) page.evaluate("() => navigator.hardwareConcurrency");
            result.put("value", cores);
            result.put("pass", cores != null && cores > 1 && cores <= 32);
            result.put("message", cores != null && cores > 1 && cores <= 32 
                    ? "✅ PASS - " + cores + " 核" 
                    : "❌ FAIL - 核心数异常: " + cores);
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 navigator.deviceMemory
     */
    private static Map<String, Object> checkDeviceMemory(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            Object memory = page.evaluate("() => navigator.deviceMemory");
            result.put("value", memory);
            result.put("pass", memory != null);
            result.put("message", memory != null 
                    ? "✅ PASS - " + memory + " GB" 
                    : "❌ FAIL - deviceMemory 未定义");
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 navigator.vendor
     */
    private static Map<String, Object> checkVendor(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            String vendor = (String) page.evaluate("() => navigator.vendor");
            result.put("value", vendor);
            result.put("pass", "Google Inc.".equals(vendor));
            result.put("message", "Google Inc.".equals(vendor) 
                    ? "✅ PASS" 
                    : "❌ FAIL - vendor = " + vendor);
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 navigator.platform
     */
    private static Map<String, Object> checkPlatform(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            String platform = (String) page.evaluate("() => navigator.platform");
            result.put("value", platform);
            result.put("pass", platform != null && !platform.isEmpty());
            result.put("message", platform != null && !platform.isEmpty() 
                    ? "✅ PASS - " + platform 
                    : "❌ FAIL - platform 异常");
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 navigator.maxTouchPoints
     */
    private static Map<String, Object> checkMaxTouchPoints(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            Integer touchPoints = (Integer) page.evaluate("() => navigator.maxTouchPoints");
            result.put("value", touchPoints);
            result.put("pass", touchPoints != null);
            result.put("message", touchPoints != null 
                    ? "✅ PASS - " + touchPoints 
                    : "❌ FAIL - maxTouchPoints 未定义");
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 window.chrome
     */
    private static Map<String, Object> checkChrome(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            String script = "() => {\n" +
                    "  return {\n" +
                    "    exists: typeof window.chrome !== 'undefined',\n" +
                    "    hasRuntime: typeof window.chrome?.runtime !== 'undefined',\n" +
                    "    hasLoadTimes: typeof window.chrome?.loadTimes === 'function',\n" +
                    "    hasCsi: typeof window.chrome?.csi === 'function'\n" +
                    "  };\n" +
                    "}";
            @SuppressWarnings("unchecked")
            Map<String, Object> chrome = (Map<String, Object>) page.evaluate(script);
            boolean pass = (Boolean) chrome.get("exists") && (Boolean) chrome.get("hasRuntime");
            result.put("value", chrome);
            result.put("pass", pass);
            result.put("message", pass ? "✅ PASS" : "❌ FAIL - Chrome对象不完整");
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 Playwright 特征
     */
    private static Map<String, Object> checkPlaywrightFeatures(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            String script = "() => {\n" +
                    "  const features = [\n" +
                    "    '__playwright',\n" +
                    "    '__pw_manual',\n" +
                    "    '__PW_inspect',\n" +
                    "    'playwright'\n" +
                    "  ];\n" +
                    "  const found = features.filter(f => typeof window[f] !== 'undefined');\n" +
                    "  return found.length > 0 ? found : null;\n" +
                    "}";
            Object features = page.evaluate(script);
            result.put("value", features);
            result.put("pass", features == null);
            result.put("message", features == null ? "✅ PASS" : "❌ FAIL - 发现特征: " + features);
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 WebGL
     */
    private static Map<String, Object> checkWebGL(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            String script = "() => {\n" +
                    "  const canvas = document.createElement('canvas');\n" +
                    "  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n" +
                    "  if (!gl) return { supported: false };\n" +
                    "  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');\n" +
                    "  return {\n" +
                    "    supported: true,\n" +
                    "    vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'N/A',\n" +
                    "    renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'N/A'\n" +
                    "  };\n" +
                    "}";
            @SuppressWarnings("unchecked")
            Map<String, Object> webgl = (Map<String, Object>) page.evaluate(script);
            String renderer = (String) webgl.get("renderer");
            boolean pass = renderer != null && !renderer.contains("SwiftShader");
            result.put("value", webgl);
            result.put("pass", pass);
            result.put("message", pass ? "✅ PASS" : "⚠️ WARNING - 使用软件渲染器");
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 检测 Screen 属性
     */
    private static Map<String, Object> checkScreen(Page page) {
        Map<String, Object> result = new HashMap<>();
        try {
            String script = "() => {\n" +
                    "  return {\n" +
                    "    width: screen.width,\n" +
                    "    height: screen.height,\n" +
                    "    availWidth: screen.availWidth,\n" +
                    "    availHeight: screen.availHeight,\n" +
                    "    colorDepth: screen.colorDepth\n" +
                    "  };\n" +
                    "}";
            @SuppressWarnings("unchecked")
            Map<String, Object> screen = (Map<String, Object>) page.evaluate(script);
            Integer width = (Integer) screen.get("width");
            Integer availWidth = (Integer) screen.get("availWidth");
            boolean pass = width != null && availWidth != null && width.equals(availWidth);
            result.put("value", screen);
            result.put("pass", pass);
            result.put("message", pass ? "✅ PASS" : "⚠️ WARNING - Screen属性不一致");
        } catch (Exception e) {
            result.put("pass", false);
            result.put("message", "❌ ERROR - " + e.getMessage());
        }
        return result;
    }
    
    /**
     * 打印验证报告
     * 
     * @param results 验证结果
     */
    public static void printReport(Map<String, Object> results) {
        log.info("========================================");
        log.info("       反检测配置验证报告");
        log.info("========================================");
        
        int totalTests = results.size();
        int passedTests = 0;
        
        for (Map.Entry<String, Object> entry : results.entrySet()) {
            String testName = entry.getKey();
            @SuppressWarnings("unchecked")
            Map<String, Object> testResult = (Map<String, Object>) entry.getValue();
            Boolean pass = (Boolean) testResult.get("pass");
            String message = (String) testResult.get("message");
            
            if (Boolean.TRUE.equals(pass)) {
                passedTests++;
            }
            
            log.info("{}: {}", String.format("%-25s", testName), message);
        }
        
        log.info("========================================");
        log.info("总计: {}/{} 通过", passedTests, totalTests);
        
        if (passedTests == totalTests) {
            log.info("🎉 所有检测点均已通过！");
        } else {
            log.warn("⚠️ 有 {} 个检测点未通过，请检查配置", totalTests - passedTests);
        }
        
        log.info("========================================");
    }
    
    /**
     * 快速验证（只返回是否全部通过）
     * 
     * @param page Playwright页面对象
     * @return true-全部通过，false-有失败项
     */
    public static boolean quickValidate(Page page) {
        Map<String, Object> results = validate(page);
        return results.values().stream()
                .allMatch(result -> {
                    @SuppressWarnings("unchecked")
                    Map<String, Object> r = (Map<String, Object>) result;
                    return Boolean.TRUE.equals(r.get("pass"));
                });
    }
}


