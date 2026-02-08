# PlaywrightPageObserver 使用指南

**版本：** v2.0  
**更新时间：** 2026-01-22  
**统一管理：** 所有反爬虫对抗功能

---

## 📚 概述

`PlaywrightPageObserver` 是一个统一管理反爬虫检测和对抗功能的工具类。

**核心功能：**
- 🛡️ **反爬虫对抗** - 阻止 about:blank 跳转
- 📊 **行为监控** - 记录所有可疑行为
- 🔍 **堆栈分析** - 定位反爬虫触发点

---

## 🎯 快速使用

### 方法 1：一站式启用（推荐）⭐

```java
PlaywrightPageObserver observer = new PlaywrightPageObserver();

// 一行代码启用所有功能
observer.enableAntiCrawlerDefense(page, RecruitmentPlatformEnum.BOSS_ZHIPIN);
```

**效果：**
- ✅ 自动启用 Route 拦截器（阻止跳转）
- ✅ 自动启用页面观测器（记录行为）
- ✅ 输出详细的启用日志

**日志输出：**
```
========== 启用平台 Boss直聘 的反爬虫对抗方案 ==========
✓ 已为平台 Boss直聘 添加 Route 拦截器（终极对抗方案）
已为平台 Boss直聘 创建观测器日志文件: logs/playwright-observers/boss_observer_20260122_235424.log
✓ 已为平台 Boss直聘 附加观测器，开始监控反爬虫行为
✓ 平台 Boss直聘 的反爬虫对抗方案已全部启用
  - Route 拦截器：阻止 about:blank 跳转
  - 页面观测器：记录所有可疑行为
==================================================================
```

---

## 🔧 高级使用

### 方法 2：单独使用各个功能

#### 2.1 Route 拦截器（最强力）

```java
PlaywrightPageObserver observer = new PlaywrightPageObserver();

// 只启用 Route 拦截器
observer.attachRouteBlocker(page, RecruitmentPlatformEnum.BOSS_ZHIPIN);
```

**特点：**
- 🛡️ 在 Playwright 层面拦截
- 🚫 无法被 JavaScript 绕过
- ⚡ 性能最好

**适用场景：**
- 只需要阻止跳转，不需要分析
- 生产环境

#### 2.2 页面观测器（分析用）

```java
PlaywrightPageObserver observer = new PlaywrightPageObserver();

// 只启用观测器
observer.attachObservers(page, RecruitmentPlatformEnum.BOSS_ZHIPIN);
```

**特点：**
- 📊 记录所有页面行为
- 📝 输出到日志文件
- 🔍 用于分析反爬虫机制

**适用场景：**
- 研究反爬虫机制
- 开发和测试环境

#### 2.3 JavaScript Hook 阻止器（辅助）

```java
PlaywrightPageObserver observer = new PlaywrightPageObserver();

// 在 BrowserContext 上添加 JavaScript Hook
observer.attachBlankBlocker(context);
```

**特点：**
- 🎯 Hook JavaScript 跳转方法
- 📋 可以记录调用堆栈
- ⚠️ 可能被绕过

**适用场景：**
- 配合 Route 拦截器使用
- 需要详细堆栈信息

#### 2.4 JavaScript Hook 拦截器（记录）

```java
PlaywrightPageObserver observer = new PlaywrightPageObserver();

// 只记录，不阻止
observer.attachBlankInterceptor(context);
```

**特点：**
- 📝 只记录，不阻止跳转
- 🔍 获取详细堆栈信息
- 📊 用于分析

**适用场景：**
- 纯分析场景
- 不需要对抗

---

## 📊 方法对比

| 方法 | 层级 | 阻止跳转 | 记录堆栈 | 性能 | 可靠性 |
|------|------|---------|---------|------|--------|
| `enableAntiCrawlerDefense()` | 组合 | ✅ | ✅ | ⭐⭐⭐ | ⭐⭐⭐ |
| `attachRouteBlocker()` | Playwright | ✅ | ❌ | ⭐⭐⭐ | ⭐⭐⭐ |
| `attachObservers()` | Page | ❌ | ✅ | ⭐⭐ | N/A |
| `attachBlankBlocker()` | JavaScript | ⚠️ | ✅ | ⭐⭐ | ⭐ |
| `attachBlankInterceptor()` | JavaScript | ❌ | ✅ | ⭐⭐ | N/A |

**推荐组合：**
- 🥇 **生产环境：** `enableAntiCrawlerDefense()` 或 `attachRouteBlocker()`
- 🥈 **开发环境：** `enableAntiCrawlerDefense()`
- 🥉 **研究分析：** `attachObservers()` + `attachBlankInterceptor()`

---

## 🎓 完整示例

### 示例 1：在 PlaywrightService 中使用

```java
@Service
public class PlaywrightService {
    private final PlaywrightPageObserver pageObserver = new PlaywrightPageObserver();
    
    @PostConstruct
    public void init() {
        // ... 初始化代码 ...
        
        for (RecruitmentPlatformEnum platform : RecruitmentPlatformEnum.values()) {
            Page page = createNewPage(context);
            
            // 针对 BOSS 平台启用反爬虫对抗
            if (platform == RecruitmentPlatformEnum.BOSS_ZHIPIN) {
                pageObserver.enableAntiCrawlerDefense(page, platform);
            }
            
            // ... 其他初始化 ...
        }
    }
    
    @PreDestroy
    public void close() {
        // 关闭所有观测器
        pageObserver.closeAllObservers();
    }
}
```

### 示例 2：自定义组合

```java
PlaywrightPageObserver observer = new PlaywrightPageObserver();

// 在 Context 层面添加 JavaScript Hook
observer.attachBlankBlocker(context);
observer.attachBlankInterceptor(context);

// 在 Page 层面添加 Route 拦截和观测器
observer.attachRouteBlocker(page, platform);
observer.attachObservers(page, platform);
```

### 示例 3：只用于分析

```java
PlaywrightPageObserver observer = new PlaywrightPageObserver();

// 只记录，不对抗
observer.attachObservers(page, RecruitmentPlatformEnum.BOSS_ZHIPIN);
observer.attachBlankInterceptor(context);

// 分析完成后关闭
observer.closeObserver(RecruitmentPlatformEnum.BOSS_ZHIPIN);
```

---

## 📝 日志说明

### 日志文件

**位置：** `logs/playwright-observers/{平台代码}_observer_{时间戳}.log`

**示例：** `logs/playwright-observers/boss_observer_20260122_235424.log`

### 日志标记

| 标记 | 含义 | 来源 |
|------|------|------|
| `[NAV]` | 页面导航 | 观测器 |
| `[CONSOLE]` | 控制台消息 | 观测器 |
| `[REQ]` | 网络请求 | 观测器 |
| `[JS]` | JavaScript 文件 | 观测器 |
| `[ANTI-DEBUG]` | 反调试行为 | JavaScript Hook |
| `[BLOCKED]` | 阻止的跳转 | JavaScript Hook |
| `[ROUTE-BLOCKED]` | Route 拦截 | Route API |
| `[FORENSIC]` | 取证信息 | JavaScript Hook |

### 关键日志示例

```
# Route 拦截成功
🛡️ [ROUTE-BLOCKED] 平台 Boss直聘 - 阻止导航到 about:blank: about:blank

# 捕获到反调试行为
[CONSOLE] warning [ANTI-DEBUG] beforeunload 事件触发，页面即将跳转
[CONSOLE] warning [ANTI-DEBUG] 堆栈: Error
    at <anonymous>:83:38
    at https://static.zhipin.com/zhipin-geek-seo/v5404/web/geek/js/main.js:1:357108

# JavaScript Hook 阻止
[CONSOLE] warning [BLOCKED] location.href setter about:blank 已阻止跳转到 about:blank
```

---

## 🔧 配置选项

### 自定义日志目录

```java
// 获取当前日志目录
String logDir = PlaywrightPageObserver.getLogDirectory();

// 如需修改，可以在类中修改常量
private static final String OBSERVER_LOG_DIR = "your/custom/path";
```

### 扩展拦截规则

```java
// 在 attachRouteBlocker() 中扩展
page.route("**/*", route -> {
    String url = route.request().url();
    
    // 拦截 about:blank
    if (url.contains("about:blank")) {
        log.warn("🛡️ [ROUTE-BLOCKED] 阻止 about:blank");
        route.abort();
        return;
    }
    
    // 拦截其他可疑 URL
    if (url.contains("error") || url.contains("forbidden")) {
        log.warn("🛡️ [ROUTE-BLOCKED] 可疑 URL: {}", url);
        route.abort();
        return;
    }
    
    route.continue_();
});
```

---

## 🐛 故障排查

### 问题 1：页面仍然跳转到 about:blank

**检查：**
1. 确认 `enableAntiCrawlerDefense()` 或 `attachRouteBlocker()` 已调用
2. 查看日志是否有 `🛡️ [ROUTE-BLOCKED]` 标记
3. 确认 Route 拦截器在页面导航之前添加

**解决：**
```java
// 确保顺序正确
Page page = context.newPage();
observer.attachRouteBlocker(page, platform);  // 先添加拦截器
page.navigate(url);  // 再导航
```

### 问题 2：日志文件没有生成

**检查：**
1. 确认 `attachObservers()` 已调用
2. 检查 `logs/playwright-observers/` 目录权限
3. 查看应用日志是否有错误

### 问题 3：没有捕获到堆栈信息

**原因：**
- Route API 无法获取 JavaScript 堆栈
- 需要配合 JavaScript Hook 使用

**解决：**
```java
// 同时使用两种方法
observer.attachRouteBlocker(page, platform);      // 阻止跳转
observer.attachBlankInterceptor(context);         // 记录堆栈
```

---

## 📚 API 参考

### enableAntiCrawlerDefense()

```java
public void enableAntiCrawlerDefense(Page page, RecruitmentPlatformEnum platform)
```

**参数：**
- `page` - Playwright Page 对象
- `platform` - 平台枚举

**功能：** 一站式启用所有反爬虫对抗措施

**包含：**
- Route 拦截器
- 页面观测器

---

### attachRouteBlocker()

```java
public void attachRouteBlocker(Page page, RecruitmentPlatformEnum platform)
```

**参数：**
- `page` - Playwright Page 对象
- `platform` - 平台枚举（用于日志）

**功能：** 使用 Route API 阻止导航到 about:blank

**特点：** 最可靠的对抗方法

---

### attachObservers()

```java
public void attachObservers(Page page, RecruitmentPlatformEnum platform)
```

**参数：**
- `page` - Playwright Page 对象
- `platform` - 平台枚举

**功能：** 监控并记录所有页面行为

**输出：** 日志文件

---

### attachBlankBlocker()

```java
public void attachBlankBlocker(BrowserContext context)
```

**参数：**
- `context` - Playwright BrowserContext 对象

**功能：** 使用 JavaScript Hook 阻止跳转

**特点：** 可以记录堆栈，但可能被绕过

---

### attachBlankInterceptor()

```java
public void attachBlankInterceptor(BrowserContext context)
```

**参数：**
- `context` - Playwright BrowserContext 对象

**功能：** 使用 JavaScript Hook 记录跳转尝试

**特点：** 只记录，不阻止

---

### closeObserver() / closeAllObservers()

```java
public void closeObserver(RecruitmentPlatformEnum platform)
public void closeAllObservers()
```

**功能：** 关闭观测器并释放资源

**调用时机：** 应用关闭时

---

## 🎯 最佳实践

### 1. 生产环境

```java
// 简单可靠
observer.enableAntiCrawlerDefense(page, platform);
```

### 2. 开发环境

```java
// 完整功能，便于调试
observer.enableAntiCrawlerDefense(page, platform);
```

### 3. 研究分析

```java
// 只记录，不对抗
observer.attachObservers(page, platform);
observer.attachBlankInterceptor(context);
```

### 4. 资源清理

```java
@PreDestroy
public void close() {
    observer.closeAllObservers();
}
```

---

## 📞 支持

如有问题或建议，请查看：
- [反爬虫检测功能说明](./反爬虫检测功能说明.md)
- [Boss直聘反爬虫分析报告](./Boss直聘反爬虫分析报告.md)
- [Boss直聘反爬虫对抗方案](./Boss直聘反爬虫对抗方案.md)

---

**最后更新：** 2026-01-22  
**版本：** v2.0 - 统一管理版本

