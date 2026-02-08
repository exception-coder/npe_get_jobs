package getjobs.common.util;

import com.microsoft.playwright.BrowserContext;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.*;

/**
 * 反检测脚本管理器
 * 
 * 负责加载和管理各种反检测脚本，脚本存储在独立的 JS 文件中
 * 便于维护和扩展，无需修改 Java 代码
 * 
 * @author system
 */
@Slf4j
public class StealthScriptManager {

    /**
     * 脚本基础路径
     */
    private static final String SCRIPT_BASE_PATH = "stealth-scripts/";

    /**
     * 脚本缓存（避免重复加载）
     */
    private static final Map<String, String> scriptCache = new HashMap<>();

    /**
     * 预定义的脚本类型
     */
    public enum ScriptType {
        /**
         * AJAX 拦截器 - 拦截反爬虫验证接口
         */
        AJAX_INTERCEPTOR("ajax-interceptor.js"),
        
        /**
         * 扩展检测绕过 - 拦截 chrome-extension:// 请求
         */
        EXTENSION_BYPASS("extension-bypass.js"),
        
        /**
         * Playwright 特征隐藏 - 隐藏所有自动化特征
         */
        PLAYWRIGHT_STEALTH("playwright-stealth.js"),
        
        /**
         * WebDriver 隐藏 - 隐藏 navigator.webdriver
         */
        WEBDRIVER_HIDE("webdriver-hide.js"),
        
        /**
         * Chrome 对象模拟 - 模拟真实 Chrome 环境
         */
        CHROME_RUNTIME("chrome-runtime.js"),
        
        /**
         * Navigator 属性修改 - 修改 navigator 相关属性
         */
        NAVIGATOR_OVERRIDE("navigator-override.js");

        private final String fileName;

        ScriptType(String fileName) {
            this.fileName = fileName;
        }

        public String getFileName() {
            return fileName;
        }
    }

    /**
     * 为 BrowserContext 添加所有反检测脚本
     * 
     * @param context BrowserContext 对象
     */
    public static void addAllStealthScripts(BrowserContext context) {
        log.info("开始添加反检测脚本...");
        
        int successCount = 0;
        int failCount = 0;
        
        for (ScriptType scriptType : ScriptType.values()) {
            try {
                addScript(context, scriptType);
                successCount++;
                log.debug("✓ 已添加脚本: {}", scriptType.name());
            } catch (Exception e) {
                failCount++;
                log.error("✗ 添加脚本失败: {} - {}", scriptType.name(), e.getMessage());
            }
        }
        
        log.info("✓ 反检测脚本添加完成：成功 {} 个，失败 {} 个", successCount, failCount);
    }

    /**
     * 为 BrowserContext 添加指定的反检测脚本
     * 
     * @param context    BrowserContext 对象
     * @param scriptType 脚本类型
     */
    public static void addScript(BrowserContext context, ScriptType scriptType) {
        String script = loadScript(scriptType);
        if (script != null && !script.trim().isEmpty()) {
            context.addInitScript(script);
            log.debug("✓ 已添加脚本: {}", scriptType.name());
        } else {
            log.warn("✗ 脚本为空，跳过: {}", scriptType.name());
        }
    }

    /**
     * 为 BrowserContext 添加多个指定的反检测脚本
     * 
     * @param context     BrowserContext 对象
     * @param scriptTypes 脚本类型列表
     */
    public static void addScripts(BrowserContext context, ScriptType... scriptTypes) {
        for (ScriptType scriptType : scriptTypes) {
            try {
                addScript(context, scriptType);
            } catch (Exception e) {
                log.error("添加脚本失败: {} - {}", scriptType.name(), e.getMessage());
            }
        }
    }

    /**
     * 为 BrowserContext 添加自定义脚本
     * 
     * @param context    BrowserContext 对象
     * @param scriptPath 脚本路径（相对于 resources/stealth-scripts/）
     */
    public static void addCustomScript(BrowserContext context, String scriptPath) {
        String script = loadScriptFromPath(scriptPath);
        if (script != null && !script.trim().isEmpty()) {
            context.addInitScript(script);
            log.debug("✓ 已添加自定义脚本: {}", scriptPath);
        } else {
            log.warn("✗ 自定义脚本为空，跳过: {}", scriptPath);
        }
    }

    /**
     * 加载脚本内容
     * 
     * @param scriptType 脚本类型
     * @return 脚本内容
     */
    private static String loadScript(ScriptType scriptType) {
        String fileName = scriptType.getFileName();
        
        // 检查缓存
        if (scriptCache.containsKey(fileName)) {
            log.debug("从缓存加载脚本: {}", fileName);
            return scriptCache.get(fileName);
        }
        
        // 从文件加载
        String script = loadScriptFromPath(fileName);
        
        // 缓存脚本
        if (script != null) {
            scriptCache.put(fileName, script);
        }
        
        return script;
    }

    /**
     * 从指定路径加载脚本
     * 
     * @param scriptPath 脚本路径（相对于 resources/stealth-scripts/）
     * @return 脚本内容
     */
    private static String loadScriptFromPath(String scriptPath) {
        String fullPath = SCRIPT_BASE_PATH + scriptPath;
        
        try (InputStream is = StealthScriptManager.class.getClassLoader().getResourceAsStream(fullPath)) {
            if (is == null) {
                log.error("脚本文件不存在: {}", fullPath);
                return null;
            }
            
            String script = new String(is.readAllBytes(), StandardCharsets.UTF_8);
            log.debug("✓ 成功加载脚本: {} ({} bytes)", scriptPath, script.length());
            return script;
            
        } catch (IOException e) {
            log.error("加载脚本失败: {} - {}", fullPath, e.getMessage());
            return null;
        }
    }

    /**
     * 清空脚本缓存
     */
    public static void clearCache() {
        scriptCache.clear();
        log.debug("✓ 脚本缓存已清空");
    }

    /**
     * 获取已缓存的脚本数量
     * 
     * @return 缓存数量
     */
    public static int getCacheSize() {
        return scriptCache.size();
    }

    /**
     * 预加载所有脚本到缓存
     */
    public static void preloadAllScripts() {
        log.info("开始预加载所有脚本...");
        
        int successCount = 0;
        int failCount = 0;
        
        for (ScriptType scriptType : ScriptType.values()) {
            try {
                loadScript(scriptType);
                successCount++;
            } catch (Exception e) {
                failCount++;
                log.error("预加载脚本失败: {} - {}", scriptType.name(), e.getMessage());
            }
        }
        
        log.info("✓ 脚本预加载完成：成功 {} 个，失败 {} 个", successCount, failCount);
    }

    /**
     * 获取脚本内容（用于调试）
     * 
     * @param scriptType 脚本类型
     * @return 脚本内容
     */
    public static String getScriptContent(ScriptType scriptType) {
        return loadScript(scriptType);
    }

    /**
     * 检查脚本是否存在
     * 
     * @param scriptType 脚本类型
     * @return true-存在, false-不存在
     */
    public static boolean scriptExists(ScriptType scriptType) {
        String fullPath = SCRIPT_BASE_PATH + scriptType.getFileName();
        try (InputStream is = StealthScriptManager.class.getClassLoader().getResourceAsStream(fullPath)) {
            return is != null;
        } catch (IOException e) {
            return false;
        }
    }

    /**
     * 获取所有可用的脚本类型
     * 
     * @return 脚本类型列表
     */
    public static List<ScriptType> getAvailableScripts() {
        List<ScriptType> available = new ArrayList<>();
        for (ScriptType scriptType : ScriptType.values()) {
            if (scriptExists(scriptType)) {
                available.add(scriptType);
            }
        }
        return available;
    }
}

