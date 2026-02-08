# Boss 直聘反爬虫对抗方案

**分析时间：** 2026-01-22 23:37:42  
**核心发现：** 成功定位反爬虫触发脚本和位置  
**状态：** ✅ 已捕获堆栈，准备实施对抗

---

## 🎯 核心发现总结

### 反爬虫触发脚本

**脚本 URL：** `https://static.zhipin.com/zhipin-geek-seo/v5404/web/geek/js/main.js`  
**触发位置：** 第 1 行，字符 357108-357112  
**触发时机：** 脚本加载后 36 毫秒

### 堆栈信息

```javascript
Error
    at <anonymous>:83:38
    at https://static.zhipin.com/zhipin-geek-seo/v5404/web/geek/js/main.js:1:357108
    at https://static.zhipin.com/zhipin-geek-seo/v5404/web/geek/js/main.js:1:357112
```

### 触发流程

```
1. 加载 main.js
2. 执行反爬虫检测（位置 357108）
3. 检测到自动化特征
4. 触发 beforeunload 事件
5. 跳转到 about:blank
```

---

## 🛡️ 对抗方案

### 方案 1：阻止 main.js 加载（推荐）⭐

**原理：** 在 main.js 加载前拦截，阻止反爬虫代码执行。

**实现方式：**

```java
// 在 PlaywrightService 中添加
page.route("**/main.js", route -> {
    log.info("拦截 main.js 加载，阻止反爬虫检测");
    route.abort(); // 直接阻止加载
});
```

**优点：**
- ✅ 简单直接，100% 阻止反爬虫
- ✅ 不需要分析混淆代码

**缺点：**
- ❌ 可能影响页面正常功能
- ❌ 需要测试页面是否能正常使用

---

### 方案 2：修改 main.js 内容（精准）⭐⭐⭐

**原理：** 拦截 main.js，下载后删除反爬虫代码，再返回修改后的内容。

**实现步骤：**

1. **下载 main.js**
```bash
curl -o main.js https://static.zhipin.com/zhipin-geek-seo/v5404/web/geek/js/main.js
```

2. **定位反爬虫代码**
```bash
# 查看第 357108 字符附近的代码
head -c 357200 main.js | tail -c 200
```

3. **删除或修改反爬虫代码**
```javascript
// 找到类似这样的代码并删除或注释
if (检测到自动化) {
    location.href = 'about:blank';
}
```

4. **拦截并替换**
```java
page.route("**/main.js", route -> {
    try {
        // 读取修改后的 main.js
        String modifiedJs = Files.readString(Paths.get("modified-main.js"));
        
        route.fulfill(new Route.FulfillOptions()
            .setStatus(200)
            .setContentType("application/javascript")
            .setBody(modifiedJs));
            
        log.info("✓ 已替换 main.js，移除反爬虫代码");
    } catch (Exception e) {
        log.error("替换 main.js 失败", e);
        route.continue_();
    }
});
```

**优点：**
- ✅ 精准移除反爬虫代码
- ✅ 保留页面正常功能
- ✅ 最佳方案

**缺点：**
- ❌ 需要手动分析和修改代码
- ❌ 版本更新后需要重新修改

---

### 方案 3：阻止跳转（临时）⭐

**原理：** 不阻止检测，但阻止跳转到 about:blank。

**实现方式：**

```java
// 在 PlaywrightPageObserver 中修改拦截脚本
String forensic = String.join("\n",
    "(function(){",
    "  // 完全阻止跳转到 about:blank",
    "  const blockBlank = (type, url) => {",
    "    console.warn('[ANTI-DEBUG-BLOCKED]', type, url, '已阻止跳转');",
    "    return false; // 阻止跳转",
    "  };",
    "",
    "  // Hook location.href setter - 阻止跳转",
    "  const originalHrefDescriptor = Object.getOwnPropertyDescriptor(Location.prototype, 'href');",
    "  if (originalHrefDescriptor && originalHrefDescriptor.set) {",
    "    Object.defineProperty(Location.prototype, 'href', {",
    "      set: function(url) {",
    "        if(String(url).includes('about:blank')) {",
    "          blockBlank('location.href setter', url);",
    "          return; // 不执行跳转",
    "        }",
    "        return originalHrefDescriptor.set.call(this, url);",
    "      },",
    "      get: originalHrefDescriptor.get",
    "    });",
    "  }",
    "",
    "  // Hook location.replace - 阻止跳转",
    "  const _replace = window.location.replace.bind(window.location);",
    "  window.location.replace = function(url){",
    "    if(String(url).includes('about:blank')) {",
    "      blockBlank('location.replace', url);",
    "      return; // 不执行跳转",
    "    }",
    "    return _replace(url);",
    "  };",
    "",
    "  // 其他 Hook 方法...",
    "})();"
);
```

**优点：**
- ✅ 实现简单
- ✅ 不需要修改外部文件

**缺点：**
- ❌ 反爬虫脚本仍在运行
- ❌ 可能有其他检测手段
- ❌ 治标不治本

---

### 方案 4：隐藏更多自动化特征（辅助）⭐⭐

**原理：** 让浏览器看起来更像真实用户。

**实现方式：**

```java
// 在 createNewContext() 中添加更多隐藏特征
context.addInitScript(
    "// 隐藏 webdriver\n" +
    "Object.defineProperty(navigator, 'webdriver', { get: () => undefined });\n" +
    "\n" +
    "// 修改 plugins\n" +
    "Object.defineProperty(navigator, 'plugins', {\n" +
    "  get: () => [1, 2, 3, 4, 5] // 模拟有插件\n" +
    "});\n" +
    "\n" +
    "// 修改 languages\n" +
    "Object.defineProperty(navigator, 'languages', {\n" +
    "  get: () => ['zh-CN', 'zh', 'en']\n" +
    "});\n" +
    "\n" +
    "// 添加 chrome 对象\n" +
    "window.chrome = {\n" +
    "  runtime: {},\n" +
    "  loadTimes: function() {},\n" +
    "  csi: function() {},\n" +
    "  app: {}\n" +
    "};\n" +
    "\n" +
    "// 修改 permissions\n" +
    "const originalQuery = window.navigator.permissions.query;\n" +
    "window.navigator.permissions.query = (parameters) => (\n" +
    "  parameters.name === 'notifications' ?\n" +
    "    Promise.resolve({ state: Notification.permission }) :\n" +
    "    originalQuery(parameters)\n" +
    ");"
);
```

**优点：**
- ✅ 提高整体隐蔽性
- ✅ 可以配合其他方案使用

**缺点：**
- ❌ 单独使用可能不够
- ❌ 需要持续更新特征列表

---

## 🚀 推荐实施方案

### 阶段 1：快速验证（立即执行）

**使用方案 3：阻止跳转**

1. 修改 `PlaywrightPageObserver.attachBlankInterceptor()` 方法
2. 将所有 Hook 方法改为阻止跳转而不是记录
3. 重启应用测试

**预期结果：** 页面不再跳转到 about:blank

---

### 阶段 2：精准对抗（推荐）

**使用方案 2：修改 main.js**

1. **下载 main.js**
```bash
curl -o main.js https://static.zhipin.com/zhipin-geek-seo/v5404/web/geek/js/main.js
```

2. **反混淆**
```bash
# 使用在线工具
# https://deobfuscate.io/
# 或使用 js-beautify
npm install -g js-beautify
js-beautify main.js > main-beautified.js
```

3. **定位反爬虫代码**
```bash
# 查看第 357108 字符附近
head -c 357200 main-beautified.js | tail -c 200
```

4. **删除反爬虫代码**
   - 找到跳转到 about:blank 的代码
   - 删除或注释掉
   - 保存为 `main-modified.js`

5. **实现拦截替换**（见下方代码）

---

### 阶段 3：长期维护

**使用方案 4：隐藏特征 + 方案 2**

1. 持续更新隐藏特征列表
2. 监控 main.js 版本变化
3. 自动化修改和替换流程

---

## 📝 实现代码

### 1. 阻止跳转（方案 3）

在 `PlaywrightPageObserver.java` 中添加新方法：

```java
/**
 * 为 BrowserContext 添加阻止 blank 跳转的脚本
 * <p>
 * 此方法会完全阻止跳转到 about:blank，而不仅仅是记录
 * 
 * @param context BrowserContext 对象
 */
public void attachBlankBlocker(BrowserContext context) {
    String blocker = String.join("\n",
        "(function(){",
        "  console.log('[ANTI-CRAWLER] blank 跳转阻止器已启动');",
        "  ",
        "  // 阻止函数",
        "  const blockBlank = (type, url) => {",
        "    console.warn('[BLOCKED]', type, url);",
        "    return false;",
        "  };",
        "  ",
        "  // Hook location.href setter",
        "  const originalHrefDescriptor = Object.getOwnPropertyDescriptor(Location.prototype, 'href');",
        "  if (originalHrefDescriptor && originalHrefDescriptor.set) {",
        "    Object.defineProperty(Location.prototype, 'href', {",
        "      set: function(url) {",
        "        if(String(url).includes('about:blank')) {",
        "          blockBlank('location.href', url);",
        "          return;",
        "        }",
        "        return originalHrefDescriptor.set.call(this, url);",
        "      },",
        "      get: originalHrefDescriptor.get,",
        "      configurable: true",
        "    });",
        "  }",
        "  ",
        "  // Hook location.replace",
        "  const _replace = window.location.replace.bind(window.location);",
        "  window.location.replace = function(url){",
        "    if(String(url).includes('about:blank')) {",
        "      blockBlank('location.replace', url);",
        "      return;",
        "    }",
        "    return _replace(url);",
        "  };",
        "  ",
        "  // Hook location.assign",
        "  const _assign = window.location.assign.bind(window.location);",
        "  window.location.assign = function(url){",
        "    if(String(url).includes('about:blank')) {",
        "      blockBlank('location.assign', url);",
        "      return;",
        "    }",
        "    return _assign(url);",
        "  };",
        "  ",
        "  // Hook document.location",
        "  const _docReplace = document.location.replace.bind(document.location);",
        "  document.location.replace = function(url){",
        "    if(String(url).includes('about:blank')) {",
        "      blockBlank('document.location.replace', url);",
        "      return;",
        "    }",
        "    return _docReplace(url);",
        "  };",
        "  ",
        "  console.log('[ANTI-CRAWLER] 所有跳转方法已被 Hook');",
        "})();"
    );
    
    context.addInitScript(blocker);
    log.info("✓ 已添加 blank 跳转阻止器");
}
```

### 2. 拦截并替换 main.js（方案 2）

在 `PlaywrightService.java` 的 `init()` 方法中添加：

```java
// 针对 BOSS 平台，拦截并替换 main.js
if (platform == RecruitmentPlatformEnum.BOSS_ZHIPIN) {
    page.route("**/main.js", route -> {
        try {
            // 读取修改后的 main.js
            Path modifiedJsPath = Paths.get("config/modified-main.js");
            
            if (Files.exists(modifiedJsPath)) {
                String modifiedJs = Files.readString(modifiedJsPath);
                
                route.fulfill(new Route.FulfillOptions()
                    .setStatus(200)
                    .setContentType("application/javascript; charset=utf-8")
                    .setBody(modifiedJs));
                    
                log.info("✓ 已替换 main.js，移除反爬虫代码");
            } else {
                log.warn("修改后的 main.js 不存在，使用原始文件");
                route.continue_();
            }
        } catch (Exception e) {
            log.error("替换 main.js 失败", e);
            route.continue_();
        }
    });
}
```

### 3. 增强隐藏特征（方案 4）

在 `createNewContext()` 中添加：

```java
// 增强版反检测脚本
context.addInitScript(
    "// 1. 隐藏 webdriver\n" +
    "Object.defineProperty(navigator, 'webdriver', { get: () => undefined });\n" +
    "\n" +
    "// 2. 修改 plugins\n" +
    "Object.defineProperty(navigator, 'plugins', {\n" +
    "  get: () => [1, 2, 3, 4, 5]\n" +
    "});\n" +
    "\n" +
    "// 3. 修改 languages\n" +
    "Object.defineProperty(navigator, 'languages', {\n" +
    "  get: () => ['zh-CN', 'zh', 'en']\n" +
    "});\n" +
    "\n" +
    "// 4. 添加 chrome 对象\n" +
    "window.chrome = { runtime: {}, loadTimes: function() {}, csi: function() {}, app: {} };\n" +
    "\n" +
    "// 5. 修改 permissions\n" +
    "const originalQuery = window.navigator.permissions.query;\n" +
    "window.navigator.permissions.query = (parameters) => (\n" +
    "  parameters.name === 'notifications' ?\n" +
    "    Promise.resolve({ state: Notification.permission }) :\n" +
    "    originalQuery(parameters)\n" +
    ");\n" +
    "\n" +
    "console.log('[STEALTH] 反检测特征已注入');"
);
```

---

## 🧪 测试步骤

### 测试 1：验证阻止跳转

1. 实施方案 3（阻止跳转）
2. 重启应用
3. 观察是否还会跳转到 about:blank
4. 查看日志中的 `[BLOCKED]` 标记

**预期结果：** 页面停留在正常页面，不跳转

### 测试 2：验证页面功能

1. 检查页面是否能正常显示
2. 测试搜索功能
3. 测试职位列表加载
4. 测试其他交互功能

**预期结果：** 所有功能正常

### 测试 3：长期稳定性

1. 运行 1 小时，观察是否有异常
2. 多次刷新页面，测试稳定性
3. 检查是否有新的反爬虫手段

---

## 📊 效果评估

### 成功指标

- ✅ 页面不再跳转到 about:blank
- ✅ 页面功能正常
- ✅ 可以正常抓取数据
- ✅ 长期运行稳定

### 失败指标

- ❌ 仍然跳转到 about:blank
- ❌ 页面功能异常
- ❌ 出现新的反爬虫手段
- ❌ 频繁触发验证码

---

## 🔄 持续优化

### 监控指标

1. **跳转次数** - 监控是否还有跳转
2. **页面加载时间** - 确保性能正常
3. **功能可用性** - 定期测试核心功能
4. **版本变化** - 监控 main.js 版本更新

### 更新策略

1. **每周检查** - main.js 版本是否更新
2. **自动化测试** - 定期运行测试脚本
3. **日志分析** - 分析是否有新的反爬虫特征
4. **社区交流** - 关注其他开发者的经验

---

## 📚 相关资源

### 工具

1. **JavaScript Deobfuscator** - https://deobfuscate.io/
2. **js-beautify** - `npm install -g js-beautify`
3. **Chrome DevTools** - 浏览器开发者工具

### 参考

1. **Puppeteer Extra Stealth** - https://github.com/berstend/puppeteer-extra
2. **Playwright Stealth** - https://github.com/AtomicJar/playwright-stealth
3. **反爬虫对抗技术** - 各种博客和论坛

---

## ✅ 下一步行动

### 立即执行

1. ✅ **实施方案 3** - 添加 `attachBlankBlocker()` 方法
2. ✅ **修改 PlaywrightService** - 调用阻止器而不是观测器
3. ✅ **重启测试** - 验证是否阻止跳转

### 本周内

1. 📥 **下载 main.js** - 准备分析和修改
2. 🔍 **反混淆分析** - 定位具体的反爬虫代码
3. ✂️ **修改并测试** - 实施方案 2

### 持续优化

1. 📊 **建立监控** - 监控跳转和异常
2. 🔄 **自动化流程** - 自动检测版本更新
3. 📝 **文档更新** - 记录新发现和解决方案

---

**最后更新：** 2026-01-22  
**状态：** 已定位问题，准备实施对抗方案  
**下次更新：** 实施方案 3 后

