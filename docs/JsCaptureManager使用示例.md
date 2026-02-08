# JsCaptureManager 使用示例

## 概述

`JsCaptureManager` 是一个独立的工具类，用于在 Playwright 的 BrowserContext 级别捕获和保存 JavaScript 文件。它完全独立于 `PlaywrightService`，可以在任何地方使用。

## 核心特性

- ✅ **Context 级别拦截**：在 BrowserContext 级别拦截，所有 Page 共享
- ✅ **灵活过滤**：支持域名白名单、排除规则
- ✅ **自动保存**：JS 文件和元数据自动保存到磁盘
- ✅ **不影响页面**：拦截后会正常传递响应，不影响页面加载
- ✅ **详细报告**：自动生成捕获报告，包含文件列表、大小、URL 等信息
- ✅ **线程安全**：使用 ConcurrentHashMap 保证线程安全

## 快速开始

### 方式 1：捕获所有 JS 文件（最简单）

```java
@Autowired
private PlaywrightService playwrightService;

public void captureAllJs() {
    // 获取 BrowserContext
    BrowserContext context = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    
    // 启用 JS 捕获（捕获所有域名）
    JsCaptureManager manager = JsCaptureManager.captureAll(context);
    
    // 访问页面...
    Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    page.navigate("https://www.zhipin.com/web/geek/job");
    page.waitForTimeout(5000);
    
    // 生成并保存报告
    manager.saveReport();
    
    // 打印统计信息
    log.info("已捕获 {} 个 JS 文件", manager.getCaptureCount());
    log.info("捕获目录: {}", manager.getCaptureDir());
}
```

### 方式 2：只捕获指定域名的 JS 文件

```java
public void captureBossZhipinJs() {
    BrowserContext context = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    
    // 只捕获 Boss 直聘相关域名的 JS
    JsCaptureManager manager = JsCaptureManager.captureByDomains(
        context, 
        "zhipin.com", 
        "bosszp.com"
    );
    
    // 访问页面...
    Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    page.navigate("https://www.zhipin.com/web/geek/job");
    page.waitForTimeout(5000);
    
    // 保存报告
    manager.saveReport();
}
```

### 方式 3：使用高级配置

```java
public void captureWithAdvancedConfig() {
    BrowserContext context = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    
    // 构建自定义配置
    JsCaptureManager.JsCaptureConfig config = 
        JsCaptureManager.JsCaptureConfig.builder()
            .captureAll(true)                    // 捕获所有域名
            .addExcludePattern("jquery")         // 排除 jQuery
            .addExcludePattern("bootstrap")      // 排除 Bootstrap
            .addExcludePattern("analytics")      // 排除统计脚本
            .saveMetadata(true)                  // 保存元数据
            .build();
    
    // 启用捕获
    JsCaptureManager manager = JsCaptureManager.captureWithConfig(context, config);
    
    // 访问页面...
    Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    page.navigate("https://www.zhipin.com/web/geek/job");
    page.waitForTimeout(5000);
    
    // 保存报告
    manager.saveReport();
}
```

## 配置选项详解

### JsCaptureConfig.Builder 方法

| 方法 | 说明 | 示例 |
|------|------|------|
| `captureAll(boolean)` | 是否捕获所有域名的 JS | `.captureAll(true)` |
| `addTargetDomain(String)` | 添加目标域名（只捕获这些域名） | `.addTargetDomain("zhipin.com")` |
| `addTargetDomains(Collection)` | 批量添加目标域名 | `.addTargetDomains(Set.of("zhipin.com", "bosszp.com"))` |
| `addExcludePattern(String)` | 添加排除规则（URL 包含此字符串则不捕获） | `.addExcludePattern("jquery")` |
| `addExcludePatterns(Collection)` | 批量添加排除规则 | `.addExcludePatterns(Set.of("jquery", "bootstrap"))` |
| `saveMetadata(boolean)` | 是否保存元数据（JSON 文件） | `.saveMetadata(true)` |

### 快速配置方法

```java
// 1. 捕获所有 JS
JsCaptureConfig config = JsCaptureConfig.captureAll();

// 2. 只捕获指定域名
JsCaptureConfig config = JsCaptureConfig.captureByDomains("zhipin.com", "bosszp.com");

// 3. 自定义配置
JsCaptureConfig config = JsCaptureConfig.builder()
    .captureAll(true)
    .addExcludePattern("jquery")
    .build();
```

## 实战示例

### 示例 1：分析 Boss 直聘的反爬虫 JS

```java
@Service
public class BossAntiCrawlerAnalyzer {
    
    @Autowired
    private PlaywrightService playwrightService;
    
    public void analyzeBossAntiCrawler() {
        BrowserContext context = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);
        
        // 配置：只捕获 Boss 直聘的 JS，排除常见库
        JsCaptureManager.JsCaptureConfig config = 
            JsCaptureManager.JsCaptureConfig.builder()
                .addTargetDomain("zhipin.com")
                .addTargetDomain("bosszp.com")
                .addExcludePattern("jquery")
                .addExcludePattern("react")
                .addExcludePattern("vue")
                .saveMetadata(true)
                .build();
        
        // 启用捕获
        JsCaptureManager manager = JsCaptureManager.captureWithConfig(context, config);
        
        // 访问页面
        Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
        page.navigate("https://www.zhipin.com/web/geek/job");
        
        // 等待页面完全加载
        page.waitForLoadState(LoadState.NETWORKIDLE);
        
        // 生成报告
        String report = manager.generateReport();
        log.info(report);
        
        // 保存报告到文件
        manager.saveReport();
        
        // 获取捕获的文件信息
        Map<String, JsCaptureManager.JsFileInfo> files = manager.getCapturedFiles();
        files.forEach((url, info) -> {
            log.info("捕获文件: {} -> {} ({} bytes)", 
                info.getFileName(), url, info.getSize());
        });
        
        log.info("✓ 分析完成！捕获目录: {}", manager.getCaptureDir());
    }
}
```

### 示例 2：对比不同页面的 JS 加载

```java
public void compareJsLoading() {
    BrowserContext context = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    
    // 启用捕获
    JsCaptureManager manager = JsCaptureManager.captureByDomains(context, "zhipin.com");
    
    Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    
    // 访问首页
    page.navigate("https://www.zhipin.com/");
    page.waitForTimeout(3000);
    int homePageJsCount = manager.getCaptureCount();
    log.info("首页加载了 {} 个 JS 文件", homePageJsCount);
    
    // 访问职位列表页
    page.navigate("https://www.zhipin.com/web/geek/job");
    page.waitForTimeout(3000);
    int jobPageJsCount = manager.getCaptureCount();
    log.info("职位列表页加载了 {} 个 JS 文件", jobPageJsCount);
    
    // 访问职位详情页
    page.navigate("https://www.zhipin.com/job_detail/xxx.html");
    page.waitForTimeout(3000);
    int detailPageJsCount = manager.getCaptureCount();
    log.info("职位详情页加载了 {} 个 JS 文件", detailPageJsCount);
    
    // 保存报告
    manager.saveReport();
}
```

### 示例 3：在测试中使用

```java
@SpringBootTest
public class JsCaptureTest {
    
    @Autowired
    private PlaywrightService playwrightService;
    
    @Test
    public void testCaptureJs() {
        BrowserContext context = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);
        
        // 启用捕获
        JsCaptureManager manager = JsCaptureManager.captureAll(context);
        
        // 访问页面
        Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
        page.navigate("https://www.zhipin.com/web/geek/job");
        page.waitForTimeout(5000);
        
        // 断言：至少捕获了一些 JS 文件
        assertTrue(manager.getCaptureCount() > 0, "应该捕获到 JS 文件");
        
        // 断言：捕获目录存在
        assertTrue(Files.exists(manager.getCaptureDir()), "捕获目录应该存在");
        
        // 保存报告
        manager.saveReport();
        
        log.info("✓ 测试通过！捕获了 {} 个 JS 文件", manager.getCaptureCount());
    }
}
```

## 输出文件结构

捕获的文件会保存在以下目录结构中：

```
logs/anti-crawler-analysis/captured-js/
└── 20250203_143022/                    # 时间戳目录
    ├── 0001_main_a3f2b1c8.js          # JS 文件（序号_原始名_hash）
    ├── 0001_main_a3f2b1c8.js.meta.json # 元数据文件
    ├── 0002_security_b4e3c2d9.js
    ├── 0002_security_b4e3c2d9.js.meta.json
    ├── 0003_bundle_c5f4d3e0.js
    ├── 0003_bundle_c5f4d3e0.js.meta.json
    └── capture-report.txt              # 捕获报告
```

### 元数据文件示例

```json
{
  "fileName": "0001_main_a3f2b1c8.js",
  "url": "https://www.zhipin.com/static/js/main.js?v=123",
  "size": 245678,
  "status": 200,
  "captureTime": 1706943622000,
  "captureTimeReadable": "2025-02-03 14:30:22"
}
```

### 捕获报告示例

```
========== JS捕获报告 ==========
捕获目录: /path/to/logs/anti-crawler-analysis/captured-js/20250203_143022
捕获总数: 15
配置模式: 按规则过滤

已捕获的文件列表:
[1] 0001_main_a3f2b1c8.js
    URL: https://www.zhipin.com/static/js/main.js?v=123
    大小: 245678 bytes
    状态: 200
[2] 0002_security_b4e3c2d9.js
    URL: https://www.zhipin.com/web/common/security-js/security.js
    大小: 89012 bytes
    状态: 200
...
================================
```

## API 参考

### 静态工厂方法

```java
// 捕获所有 JS
JsCaptureManager manager = JsCaptureManager.captureAll(context);

// 捕获指定域名
JsCaptureManager manager = JsCaptureManager.captureByDomains(context, "zhipin.com", "bosszp.com");

// 使用自定义配置
JsCaptureManager manager = JsCaptureManager.captureWithConfig(context, config);
```

### 实例方法

```java
// 启用捕获（通常不需要手动调用，静态工厂方法会自动调用）
manager.enableCapture(context);

// 生成报告（返回字符串）
String report = manager.generateReport();

// 保存报告到文件
manager.saveReport();

// 获取捕获目录
Path dir = manager.getCaptureDir();

// 获取捕获数量
int count = manager.getCaptureCount();

// 获取所有捕获的文件信息
Map<String, JsFileInfo> files = manager.getCapturedFiles();

// 检查是否已启用
boolean enabled = manager.isEnabled();
```

## 注意事项

1. **Context 级别**：`JsCaptureManager` 在 BrowserContext 级别工作，所有使用该 Context 的 Page 都会被拦截
2. **不影响页面**：拦截后会正常传递响应给页面，不会影响页面加载
3. **线程安全**：内部使用 `ConcurrentHashMap`，可以安全地在多线程环境中使用
4. **自动创建目录**：捕获目录会自动创建，无需手动创建
5. **文件命名**：文件名格式为 `序号_原始名_hash.js`，避免重复和冲突
6. **元数据可选**：可以通过 `saveMetadata(false)` 禁用元数据保存，减少文件数量

## 常见问题

### Q: 如何只捕获特定的 JS 文件？

A: 使用 `addTargetDomain()` 指定域名，或使用 `addExcludePattern()` 排除不需要的文件。

```java
JsCaptureConfig config = JsCaptureConfig.builder()
    .addTargetDomain("zhipin.com")
    .addExcludePattern("jquery")
    .addExcludePattern("bootstrap")
    .build();
```

### Q: 捕获的文件保存在哪里？

A: 默认保存在 `logs/anti-crawler-analysis/captured-js/{timestamp}/` 目录下。

### Q: 如何在捕获过程中查看进度？

A: 可以通过 `getCaptureCount()` 实时获取已捕获的文件数量。

```java
log.info("已捕获 {} 个文件", manager.getCaptureCount());
```

### Q: 捕获会影响页面加载速度吗？

A: 不会。拦截器会立即将响应传递给页面，只是在后台保存文件，不会阻塞页面加载。

### Q: 可以在多个 Context 上使用吗？

A: 可以。每个 Context 可以有自己的 `JsCaptureManager` 实例。

```java
JsCaptureManager manager1 = JsCaptureManager.captureAll(context1);
JsCaptureManager manager2 = JsCaptureManager.captureAll(context2);
```

## 总结

`JsCaptureManager` 是一个独立、灵活、易用的 JS 捕获工具，完全独立于 `PlaywrightService`。它提供了：

- ✅ 简洁的 API（静态工厂方法）
- ✅ 灵活的配置（Builder 模式）
- ✅ 详细的报告（文本 + 元数据）
- ✅ 线程安全（ConcurrentHashMap）
- ✅ 不影响页面加载

适用于反爬虫分析、JS 调试、性能优化等多种场景。

