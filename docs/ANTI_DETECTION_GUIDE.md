# Playwright 反检测配置完整指南

## 📋 目录

1. [概述](#概述)
2. [检测点对照表](#检测点对照表)
3. [配置说明](#配置说明)
4. [使用方法](#使用方法)
5. [验证测试](#验证测试)
6. [常见问题](#常见问题)
7. [最佳实践](#最佳实践)

---

## 概述

本文档详细说明了如何配置 Playwright 以避免被 BOSS直聘等网站的 security-js 检测为自动化浏览器。

### 核心原理

反爬虫检测主要通过以下方式识别自动化浏览器：
1. **直接特征检测**：检查 `navigator.webdriver`、`$cdc_` 等明显的自动化标识
2. **环境一致性检测**：验证浏览器属性（plugins、languages等）的合理性
3. **指纹技术**：通过 Canvas、WebGL、Audio 生成浏览器指纹
4. **行为模式分析**：检测鼠标移动、键盘输入等行为特征

---

## 检测点对照表

| # | 检测点 | 检测内容 | 风险等级 | 配置方式 | 状态 |
|---|--------|---------|---------|---------|------|
| 1 | WebDriver标识 | `navigator.webdriver` | 🔴 高 | 启动参数 + 脚本 | ✅ 已配置 |
| 2 | ChromeDriver变量 | `$cdc_*`, `$chrome*` | 🔴 高 | 脚本删除 | ✅ 已配置 |
| 3 | Phantom特征 | `window.callPhantom` | 🔴 高 | 脚本删除 | ✅ 已配置 |
| 4 | Plugins | `navigator.plugins.length` | 🔴 高 | 脚本伪造 | ✅ 已配置 |
| 5 | Languages | `navigator.languages` | 🟡 中 | Context配置 + 脚本 | ✅ 已配置 |
| 6 | HardwareConcurrency | CPU核心数 | 🟡 中 | 脚本伪造 | ✅ 已配置 |
| 7 | DeviceMemory | 设备内存 | 🟡 中 | 脚本伪造 | ✅ 已配置 |
| 8 | Vendor | 浏览器厂商 | 🟡 中 | 脚本伪造 | ✅ 已配置 |
| 9 | Platform | 操作系统平台 | 🟡 中 | 脚本伪造 | ✅ 已配置 |
| 10 | MaxTouchPoints | 触摸点数 | 🟢 低 | 脚本伪造 | ✅ 已配置 |
| 11 | Chrome对象 | `window.chrome` | 🔴 高 | 扩展 + 脚本 | ✅ 已配置 |
| 12 | 扩展检测 | `chrome-extension://` | 🔴 高 | 真实扩展 + 拦截 | ✅ 已配置 |
| 13 | Canvas指纹 | Canvas渲染 | 🟡 中 | 脚本随机化 | ✅ 已配置 |
| 14 | WebGL指纹 | WebGL渲染器 | 🟡 中 | 启动参数 + 脚本 | ✅ 已配置 |
| 15 | Permissions API | 权限查询 | 🟢 低 | Context配置 + 脚本 | ✅ 已配置 |
| 16 | Screen属性 | 屏幕尺寸一致性 | 🟢 低 | 脚本修正 | ✅ 已配置 |
| 17 | Function.toString | 函数源码检测 | 🟡 中 | 脚本修复 | ✅ 已配置 |
| 18 | 自动化工具特征 | Playwright/Selenium属性 | 🔴 高 | 启动参数 + 脚本 | ✅ 已配置 |

---

## 配置说明

### 1. 浏览器启动参数

在 `PlaywrightService.java` 的 `init()` 方法中配置：

```java
context = playwright.chromium().launchPersistentContext(
    userDataDir,
    new BrowserType.LaunchPersistentContextOptions()
        .setHeadless(false)  // ⚠️ 必须使用有头模式
        .setSlowMo(50)       // 减慢操作，模拟人类
        .setUserAgent(randomUserAgent)
        .setLocale("zh-CN")
        .setTimezoneId("Asia/Shanghai")
        .setBypassCSP(true)
        .setPermissions(List.of("geolocation", "notifications"))
        .setIgnoreDefaultArgs(List.of("--enable-automation"))
        .setArgs(List.of(
            // 核心参数
            "--disable-blink-features=AutomationControlled",
            "--disable-infobars",
            "--exclude-switches=enable-automation",
            
            // 扩展加载
            "--disable-extensions-except=" + extensionPath,
            "--load-extension=" + extensionPath,
            
            // 其他参数...
        ))
);
```

### 2. 反检测脚本

通过 `context.addInitScript()` 注入，在页面加载前执行：

#### 2.1 WebDriver 隐藏
```javascript
Object.defineProperty(navigator, 'webdriver', {
  get: () => undefined,
  configurable: true
});
delete navigator.__proto__.webdriver;
delete window.__webdriver;
delete document.__webdriver;
```

#### 2.2 ChromeDriver 变量清除
```javascript
Object.keys(window).forEach(key => {
  if (key.startsWith('$cdc_') || key.startsWith('$chrome')) {
    delete window[key];
  }
});
```

#### 2.3 Navigator 属性伪装
```javascript
// Plugins
Object.defineProperty(navigator, 'plugins', {
  get: () => [
    { name: 'Chrome PDF Plugin', ... },
    { name: 'Chrome PDF Viewer', ... },
    { name: 'Native Client', ... }
  ]
});

// Languages
Object.defineProperty(navigator, 'languages', {
  get: () => ['zh-CN', 'zh', 'en-US', 'en']
});

// HardwareConcurrency
Object.defineProperty(navigator, 'hardwareConcurrency', {
  get: () => 8
});

// DeviceMemory
Object.defineProperty(navigator, 'deviceMemory', {
  get: () => 8
});
```

#### 2.4 Canvas 指纹随机化
```javascript
const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
HTMLCanvasElement.prototype.toDataURL = function(type) {
  const context = this.getContext('2d');
  if (context) {
    const imageData = context.getImageData(0, 0, this.width, this.height);
    // 添加微小随机噪点
    for (let i = 0; i < imageData.data.length; i += 4) {
      if (Math.random() < 0.001) {
        imageData.data[i] = imageData.data[i] ^ 1;
      }
    }
    context.putImageData(imageData, 0, 0);
  }
  return originalToDataURL.apply(this, arguments);
};
```

#### 2.5 WebGL 指纹伪装
```javascript
const getParameter = WebGLRenderingContext.prototype.getParameter;
WebGLRenderingContext.prototype.getParameter = function(parameter) {
  if (parameter === 37445) {  // UNMASKED_VENDOR_WEBGL
    return 'Intel Inc.';
  }
  if (parameter === 37446) {  // UNMASKED_RENDERER_WEBGL
    return 'Intel Iris OpenGL Engine';
  }
  return getParameter.call(this, parameter);
};
```

### 3. Chrome 扩展

加载真实的 Chrome 扩展（如 uBlock Origin）：

```
resources/extensions/ublock-origin/
├── manifest.json
├── background.js
├── content.js
└── icon*.png
```

### 4. AJAX 拦截器

拦截反爬虫验证接口，动态返回正确响应：

```javascript
const OriginalXHR = window.XMLHttpRequest;
window.XMLHttpRequest = function() {
  const xhr = new OriginalXHR();
  // 拦截 /wapi/zpCommon/toggle/all 请求
  // 返回匹配 Sign.encryptPs 的响应
  // ...
};
```

---

## 使用方法

### 基本使用

```java
@Autowired
private PlaywrightService playwrightService;

public void example() {
    // 获取页面
    Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    
    // 正常使用，所有反检测配置已自动生效
    page.navigate("https://www.zhipin.com/");
    
    // 执行操作...
}
```

### 验证配置

```java
// 方式1：完整验证
Map<String, Object> results = AntiDetectionValidator.validate(page);
AntiDetectionValidator.printReport(results);

// 方式2：快速验证
boolean passed = AntiDetectionValidator.quickValidate(page);
```

### 运行测试

```bash
# 运行所有反检测测试
mvn test -Dtest=AntiDetectionTest

# 运行特定测试
mvn test -Dtest=AntiDetectionTest#testBossZhipinAntiDetection
```

---

## 验证测试

### 1. 自动化验证

使用 `AntiDetectionValidator` 工具类：

```java
Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
Map<String, Object> results = AntiDetectionValidator.validate(page);
AntiDetectionValidator.printReport(results);
```

输出示例：
```
========================================
       反检测配置验证报告
========================================
webdriver                : ✅ PASS
chromeDriver             : ✅ PASS
phantom                  : ✅ PASS
plugins                  : ✅ PASS - 3 个插件
languages                : ✅ PASS - [zh-CN, zh, en-US, en]
hardwareConcurrency      : ✅ PASS - 8 核
deviceMemory             : ✅ PASS - 8 GB
vendor                   : ✅ PASS
platform                 : ✅ PASS - MacIntel
maxTouchPoints           : ✅ PASS - 0
chrome                   : ✅ PASS
playwright               : ✅ PASS
webgl                    : ✅ PASS
screen                   : ✅ PASS
========================================
总计: 14/14 通过
🎉 所有检测点均已通过！
========================================
```

### 2. 手动验证

在浏览器控制台执行：

```javascript
// 检查 webdriver
console.log('webdriver:', navigator.webdriver);  // 应该是 undefined

// 检查 ChromeDriver 变量
console.log('$cdc_ vars:', Object.keys(window).filter(k => k.startsWith('$cdc_')));  // 应该是 []

// 检查 plugins
console.log('plugins:', navigator.plugins.length);  // 应该 > 0

// 检查 chrome 对象
console.log('chrome:', typeof window.chrome);  // 应该是 'object'
console.log('chrome.runtime:', typeof window.chrome?.runtime);  // 应该是 'object'
```

### 3. 实际测试

访问目标网站，观察是否被重定向到验证页面：

```java
page.navigate("https://www.zhipin.com/");
page.waitForTimeout(5000);

String currentUrl = page.url();
if (currentUrl.contains("security") || currentUrl.contains("verify")) {
    log.error("❌ 被识别为异常浏览器");
} else {
    log.info("✅ 成功访问，未被识别");
}
```

---

## 常见问题

### Q1: 为什么必须使用有头模式（headless=false）？

**A:** Headless 模式有很多特征容易被检测：
- 缺少某些浏览器API
- Canvas/WebGL渲染异常
- 窗口尺寸固定
- 缺少用户交互特征

建议始终使用有头模式，或使用 Chrome 的新 headless 模式（`--headless=new`）。

### Q2: 为什么需要加载真实的 Chrome 扩展？

**A:** 网站会通过以下方式检测扩展：
1. 检查 `window.chrome.runtime` 是否存在
2. 发送 `chrome-extension://` 请求测试
3. 检查扩展注入的DOM元素

加载真实扩展可以完美模拟正常浏览器环境。

### Q3: Canvas 指纹随机化会影响页面显示吗？

**A:** 不会。我们只在 `toDataURL()` 时添加微小噪点（0.1%的像素），不影响视觉效果，但可以防止指纹追踪。

### Q4: 为什么要禁用 GPU（--disable-gpu）？

**A:** 禁用 GPU 可以避免使用 SwiftShader 软件渲染器，SwiftShader 是明显的自动化特征。同时我们通过脚本伪装 WebGL 渲染器信息。

### Q5: 配置后仍然被检测怎么办？

**A:** 按以下步骤排查：

1. **运行验证测试**
   ```java
   AntiDetectionValidator.validate(page);
   ```

2. **检查控制台日志**
   查看是否有 `[STEALTH]` 相关的日志输出

3. **检查浏览器特征**
   在控制台手动检查关键属性

4. **查看取证日志**
   ```
   logs/anti-crawler-detection/boss-forensic.log
   ```

5. **更新 User-Agent**
   使用最新的真实浏览器 User-Agent

### Q6: 如何处理动态加载的反爬虫脚本？

**A:** 我们的配置在页面加载前就已生效（`addInitScript`），可以拦截所有后续加载的脚本。同时 AJAX 拦截器会处理动态验证请求。

---

## 最佳实践

### 1. 启动配置

✅ **推荐做法：**
```java
.setHeadless(false)           // 使用有头模式
.setSlowMo(50)                // 减慢操作速度
.setUserAgent(realUserAgent)  // 使用真实 UA
.setLocale("zh-CN")           // 设置正确的语言
.setTimezoneId("Asia/Shanghai") // 设置正确的时区
```

❌ **避免做法：**
```java
.setHeadless(true)            // 不要使用旧的 headless
.setSlowMo(0)                 // 不要操作太快
.setUserAgent("...")          // 不要使用过时的 UA
```

### 2. 操作模拟

✅ **推荐做法：**
```java
// 模拟人类行为
page.mouse().move(x, y);
page.waitForTimeout(random(500, 1500));
page.click(selector);
page.keyboard().type(text, new Keyboard.TypeOptions().setDelay(100));
```

❌ **避免做法：**
```java
// 机器人式操作
page.click(selector);  // 立即点击
page.fill(selector, text);  // 瞬间填充
```

### 3. Cookie 管理

✅ **推荐做法：**
```java
// 定期保存 Cookie
playwrightService.capturePlatformCookies(platform);

// 使用持久化上下文
launchPersistentContext(userDataDir, ...);
```

### 4. 错误处理

✅ **推荐做法：**
```java
try {
    page.navigate(url);
    
    // 检查是否被重定向到验证页面
    if (page.url().contains("security")) {
        log.warn("检测到验证页面，尝试刷新...");
        playwrightService.refreshPage(platform);
    }
} catch (Exception e) {
    log.error("操作失败", e);
    // 重试或恢复
}
```

### 5. 定期验证

✅ **推荐做法：**
```java
@Scheduled(fixedRate = 3600000)  // 每小时
public void validateAntiDetection() {
    for (RecruitmentPlatformEnum platform : RecruitmentPlatformEnum.values()) {
        Page page = playwrightService.getPage(platform);
        boolean passed = AntiDetectionValidator.quickValidate(page);
        if (!passed) {
            log.warn("平台 {} 的反检测配置失效，尝试刷新", platform);
            playwrightService.refreshPage(platform);
        }
    }
}
```

### 6. 日志监控

✅ **推荐做法：**
```java
// 监控取证日志
tail -f logs/anti-crawler-detection/boss-forensic.log

// 关注关键事件
[NAV] about:blank          // 页面被重定向
[PAGE_ERROR] ...           // 脚本错误
[REQ_FAILED] ...          // 请求失败
```

---

## 总结

### 配置清单

- [x] 浏览器启动参数（18个关键参数）
- [x] 反检测脚本（17个检测点）
- [x] Chrome 扩展加载
- [x] AJAX 拦截器
- [x] 扩展检测绕过
- [x] Canvas 指纹随机化
- [x] WebGL 指纹伪装
- [x] 自动化工具特征清除

### 验证工具

- [x] AntiDetectionValidator（自动化验证）
- [x] AntiDetectionTest（单元测试）
- [x] 取证日志（boss-forensic.log）

### 文档

- [x] 代码注释（JavaDoc）
- [x] 配置说明（本文档）
- [x] Security-JS 分析报告

---

## 参考资料

- [Security-JS 分析报告](../logs/anti-crawler-analysis/security-js-analysis.md)
- [Playwright 官方文档](https://playwright.dev/java/)
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)

---

**最后更新**: 2026-02-04  
**维护者**: AI Assistant  
**版本**: 1.0.0




