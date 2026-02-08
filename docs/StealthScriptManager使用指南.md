# StealthScriptManager 使用指南

## 概述

`StealthScriptManager` 是一个专门用于管理反检测脚本的工具类。它将原本硬编码在 Java 代码中的 JavaScript 脚本提取到独立的 JS 文件中，便于维护和扩展。

## 架构优势

### 之前的问题
- ❌ 脚本硬编码在 Java 代码中（600+ 行字符串）
- ❌ 难以维护和调试
- ❌ 修改脚本需要重新编译 Java 代码
- ❌ 代码可读性差

### 现在的优势
- ✅ 脚本存储在独立的 JS 文件中
- ✅ 易于维护和调试
- ✅ 修改脚本无需重新编译
- ✅ 代码结构清晰
- ✅ 支持脚本缓存，提高性能

---

## 文件结构

```
src/main/resources/stealth-scripts/
├── ajax-interceptor.js          # AJAX 拦截器
├── extension-bypass.js          # 扩展检测绕过
├── webdriver-hide.js            # WebDriver 隐藏
├── chrome-runtime.js            # Chrome Runtime 模拟
├── navigator-override.js        # Navigator 属性覆盖
└── playwright-stealth.js        # 完整的 Stealth 脚本（包含所有功能）
```

---

## 使用方式

### 方式 1：添加所有反检测脚本（推荐）

```java
BrowserContext context = playwright.chromium().launchPersistentContext(...);

// 添加所有反检测脚本
StealthScriptManager.addAllStealthScripts(context);
```

**输出日志：**
```
开始添加反检测脚本...
✓ 已添加脚本: AJAX_INTERCEPTOR
✓ 已添加脚本: EXTENSION_BYPASS
✓ 已添加脚本: WEBDRIVER_HIDE
✓ 已添加脚本: CHROME_RUNTIME
✓ 已添加脚本: NAVIGATOR_OVERRIDE
✓ 已添加脚本: PLAYWRIGHT_STEALTH
✓ 反检测脚本添加完成：成功 6 个，失败 0 个
```

---

### 方式 2：只添加特定脚本

```java
// 只添加 AJAX 拦截器和扩展检测绕过
StealthScriptManager.addScripts(context, 
    StealthScriptManager.ScriptType.AJAX_INTERCEPTOR,
    StealthScriptManager.ScriptType.EXTENSION_BYPASS
);
```

---

### 方式 3：添加单个脚本

```java
// 只添加 WebDriver 隐藏脚本
StealthScriptManager.addScript(context, 
    StealthScriptManager.ScriptType.WEBDRIVER_HIDE
);
```

---

### 方式 4：添加自定义脚本

```java
// 添加自定义脚本（放在 resources/stealth-scripts/ 目录下）
StealthScriptManager.addCustomScript(context, "my-custom-script.js");
```

---

## 脚本类型说明

### 1. AJAX_INTERCEPTOR（AJAX 拦截器）

**功能：**
- 拦截 Boss 直聘的反爬虫验证接口 `/wapi/zpCommon/toggle/all`
- 动态读取 `Sign.encryptPs` 的值
- 返回匹配的响应，让验证逻辑通过
- 阻止内存炸弹触发

**适用场景：** Boss 直聘反爬虫绕过

---

### 2. EXTENSION_BYPASS（扩展检测绕过）

**功能：**
- 拦截所有 `chrome-extension://` 请求
- 返回成功响应，让网站认为浏览器有扩展
- 绕过扩展检测机制

**适用场景：** 绕过扩展检测

---

### 3. WEBDRIVER_HIDE（WebDriver 隐藏）

**功能：**
- 隐藏 `navigator.webdriver` 属性（最重要的反检测）
- 删除 Playwright 特有的属性

**适用场景：** 基础反检测（必须）

---

### 4. CHROME_RUNTIME（Chrome Runtime 模拟）

**功能：**
- 创建 `window.chrome` 对象
- 模拟 `chrome.runtime`（让网站认为有扩展存在）
- 模拟 `chrome.loadTimes`、`chrome.csi`、`chrome.app` 等

**适用场景：** 模拟真实 Chrome 环境

---

### 5. NAVIGATOR_OVERRIDE（Navigator 属性覆盖）

**功能：**
- 修改 `permissions` 查询结果
- 创建真实的 `PluginArray`
- 修改 `languages`、`hardwareConcurrency`、`deviceMemory`、`platform` 等
- 修复 `Function.prototype.toString` 检测

**适用场景：** 高级反检测

---

### 6. PLAYWRIGHT_STEALTH（完整的 Stealth 脚本）

**功能：**
- 包含上述所有功能（除了 AJAX_INTERCEPTOR 和 EXTENSION_BYPASS）
- 一个脚本搞定所有基础反检测

**适用场景：** 如果只想加载一个脚本，使用这个

---

## 在 PlaywrightService 中的使用

### 当前实现

```java
private void addStealthScripts(BrowserContext context) {
    // 使用 StealthScriptManager 添加所有反检测脚本
    // 脚本从独立的 JS 文件加载，无需硬编码
    StealthScriptManager.addAllStealthScripts(context);
    
    log.info("✓ 已通过 StealthScriptManager 添加反检测脚本");
}
```

### 自定义配置示例

```java
private void addStealthScripts(BrowserContext context) {
    // 只添加特定脚本
    StealthScriptManager.addScripts(context, 
        StealthScriptManager.ScriptType.AJAX_INTERCEPTOR,
        StealthScriptManager.ScriptType.EXTENSION_BYPASS,
        StealthScriptManager.ScriptType.PLAYWRIGHT_STEALTH
    );
}
```

---

## 高级功能

### 1. 预加载所有脚本到缓存

```java
// 在应用启动时预加载所有脚本
StealthScriptManager.preloadAllScripts();
```

**优点：**
- 提高首次加载速度
- 避免运行时 IO 操作

---

### 2. 检查脚本是否存在

```java
boolean exists = StealthScriptManager.scriptExists(
    StealthScriptManager.ScriptType.AJAX_INTERCEPTOR
);

if (exists) {
    log.info("脚本存在");
}
```

---

### 3. 获取脚本内容（用于调试）

```java
String scriptContent = StealthScriptManager.getScriptContent(
    StealthScriptManager.ScriptType.WEBDRIVER_HIDE
);

log.debug("脚本内容: {}", scriptContent);
```

---

### 4. 获取所有可用的脚本

```java
List<StealthScriptManager.ScriptType> availableScripts = 
    StealthScriptManager.getAvailableScripts();

log.info("可用脚本: {}", availableScripts);
```

---

### 5. 清空脚本缓存

```java
// 清空缓存（例如在热更新脚本后）
StealthScriptManager.clearCache();
```

---

### 6. 获取缓存大小

```java
int cacheSize = StealthScriptManager.getCacheSize();
log.info("已缓存 {} 个脚本", cacheSize);
```

---

## 如何添加新的反检测脚本

### 步骤 1：创建 JS 文件

在 `src/main/resources/stealth-scripts/` 目录下创建新的 JS 文件，例如 `my-new-script.js`：

```javascript
/**
 * 我的新脚本 - 描述功能
 */
(() => {
  console.log('[MY_SCRIPT] 启动...');
  
  // 你的反检测逻辑
  
  console.log('[MY_SCRIPT] ✓ 已就绪');
})();
```

---

### 步骤 2：在 StealthScriptManager 中添加枚举

```java
public enum ScriptType {
    // ... 现有的脚本类型 ...
    
    /**
     * 我的新脚本 - 描述功能
     */
    MY_NEW_SCRIPT("my-new-script.js");
    
    // ...
}
```

---

### 步骤 3：使用新脚本

```java
// 添加新脚本
StealthScriptManager.addScript(context, 
    StealthScriptManager.ScriptType.MY_NEW_SCRIPT
);

// 或者添加到所有脚本中
StealthScriptManager.addAllStealthScripts(context);
```

---

## 脚本编写规范

### 1. 使用 IIFE（立即执行函数）

```javascript
(() => {
  // 你的代码
})();
```

**原因：** 避免污染全局作用域

---

### 2. 添加日志标识

```javascript
console.log('[SCRIPT_NAME] 启动...');
console.log('[SCRIPT_NAME] ✓ 已就绪');
```

**原因：** 便于调试和追踪

---

### 3. 添加详细注释

```javascript
/**
 * 脚本名称 - 功能描述
 * 
 * 功能：
 * 1. 功能点 1
 * 2. 功能点 2
 */
```

**原因：** 便于理解和维护

---

### 4. 错误处理

```javascript
try {
  // 可能出错的代码
} catch(e) {
  console.error('[SCRIPT_NAME] 错误:', e);
}
```

**原因：** 避免脚本错误影响其他脚本

---

## 常见问题

### Q: 脚本加载失败怎么办？

A: 检查以下几点：
1. 文件是否存在于 `src/main/resources/stealth-scripts/` 目录
2. 文件名是否正确
3. 文件编码是否为 UTF-8
4. 查看日志中的错误信息

---

### Q: 如何调试脚本？

A: 
1. 在浏览器控制台查看日志输出
2. 使用 `StealthScriptManager.getScriptContent()` 获取脚本内容
3. 在 Boss 取证日志中查看 `[CONSOLE]` 输出

---

### Q: 脚本会被缓存吗？

A: 是的。脚本首次加载后会被缓存，避免重复读取文件。如果需要重新加载，调用 `StealthScriptManager.clearCache()`。

---

### Q: 可以动态修改脚本吗？

A: 可以。修改 JS 文件后，调用 `StealthScriptManager.clearCache()` 清空缓存，然后重新加载即可。

---

## 性能优化建议

1. **预加载脚本**：在应用启动时调用 `preloadAllScripts()`
2. **只加载需要的脚本**：使用 `addScripts()` 而不是 `addAllStealthScripts()`
3. **避免重复加载**：脚本会自动缓存，无需担心重复加载

---

## 总结

`StealthScriptManager` 提供了一个优雅的方式来管理反检测脚本：

- ✅ **易于维护**：脚本存储在独立的 JS 文件中
- ✅ **灵活配置**：支持加载所有脚本或特定脚本
- ✅ **高性能**：自动缓存，避免重复读取
- ✅ **易于扩展**：添加新脚本只需创建 JS 文件和添加枚举
- ✅ **便于调试**：支持获取脚本内容、检查脚本存在等

后续只需要维护 `resources/stealth-scripts/` 目录下的 JS 文件即可，无需修改 Java 代码！🎉

