# JsCaptureManager 快速开始

## 🚀 30秒快速上手

### 最简单的用法（3行代码）

```java
BrowserContext context = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);
JsCaptureManager manager = JsCaptureManager.captureAll(context);
// 访问页面，JS 会自动被捕获...
```

## 📦 三种使用方式

### 方式 1️⃣：捕获所有 JS（推荐用于初次分析）

```java
// 获取 BrowserContext
BrowserContext context = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);

// 启用捕获（一行代码搞定！）
JsCaptureManager manager = JsCaptureManager.captureAll(context);

// 访问页面
Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
page.navigate("https://www.zhipin.com/web/geek/job");
page.waitForTimeout(5000);

// 保存报告
manager.saveReport();

// 查看结果
log.info("✓ 已捕获 {} 个 JS 文件", manager.getCaptureCount());
log.info("✓ 捕获目录: {}", manager.getCaptureDir());
```

**输出示例：**
```
✓ 已捕获 15 个 JS 文件
✓ 捕获目录: /path/to/logs/anti-crawler-analysis/captured-js/20250203_143022
```

---

### 方式 2️⃣：只捕获指定域名（推荐用于生产环境）

```java
BrowserContext context = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);

// 只捕获 Boss 直聘的 JS（排除第三方库）
JsCaptureManager manager = JsCaptureManager.captureByDomains(
    context, 
    "zhipin.com",      // Boss 直聘主域名
    "bosszp.com"       // Boss 直聘 CDN 域名
);

// 访问页面
Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
page.navigate("https://www.zhipin.com/web/geek/job");
page.waitForTimeout(5000);

// 保存报告
manager.saveReport();
```

**优点：**
- ✅ 只捕获目标网站的 JS，避免捕获大量无关文件
- ✅ 减少磁盘占用
- ✅ 提高分析效率

---

### 方式 3️⃣：高级配置（推荐用于精细化分析）

```java
BrowserContext context = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);

// 构建自定义配置
JsCaptureManager.JsCaptureConfig config = 
    JsCaptureManager.JsCaptureConfig.builder()
        .captureAll(true)                    // 捕获所有域名
        .addExcludePattern("jquery")         // 排除 jQuery
        .addExcludePattern("bootstrap")      // 排除 Bootstrap
        .addExcludePattern("analytics")      // 排除统计脚本
        .addExcludePattern("google")         // 排除 Google 相关
        .saveMetadata(true)                  // 保存元数据（JSON）
        .build();

// 启用捕获
JsCaptureManager manager = JsCaptureManager.captureWithConfig(context, config);

// 访问页面
Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
page.navigate("https://www.zhipin.com/web/geek/job");
page.waitForTimeout(5000);

// 保存报告
manager.saveReport();
```

**优点：**
- ✅ 精确控制捕获范围
- ✅ 排除无关文件（如第三方库、统计脚本）
- ✅ 可选保存元数据（包含 URL、大小、时间等信息）

---

## 📊 查看捕获结果

### 方法 1：查看报告文件

捕获完成后，会在捕获目录下生成 `capture-report.txt` 文件：

```
logs/anti-crawler-analysis/captured-js/20250203_143022/capture-report.txt
```

**报告内容示例：**
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

### 方法 2：在代码中查看

```java
// 打印报告到日志
String report = manager.generateReport();
log.info(report);

// 获取统计信息
log.info("捕获数量: {}", manager.getCaptureCount());
log.info("捕获目录: {}", manager.getCaptureDir());

// 获取所有文件信息
Map<String, JsCaptureManager.JsFileInfo> files = manager.getCapturedFiles();
files.forEach((url, info) -> {
    log.info("文件: {} -> {} ({} bytes)", 
        info.getFileName(), url, info.getSize());
});
```

---

## 🎯 实战场景

### 场景 1：分析 Boss 直聘的反爬虫机制

```java
@Service
public class BossAntiCrawlerAnalyzer {
    
    @Autowired
    private PlaywrightService playwrightService;
    
    public void analyze() {
        BrowserContext context = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);
        
        // 只捕获 Boss 直聘的 JS
        JsCaptureManager manager = JsCaptureManager.captureByDomains(
            context, "zhipin.com", "bosszp.com"
        );
        
        // 访问页面
        Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
        page.navigate("https://www.zhipin.com/web/geek/job");
        page.waitForLoadState(LoadState.NETWORKIDLE);
        
        // 保存报告
        manager.saveReport();
        
        log.info("✓ 分析完成！捕获目录: {}", manager.getCaptureDir());
        log.info("✓ 请查看捕获的 JS 文件，重点关注包含 'security' 或 'encrypt' 的文件");
    }
}
```

### 场景 2：在测试中使用

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
        
        // 断言
        assertTrue(manager.getCaptureCount() > 0, "应该捕获到 JS 文件");
        
        // 保存报告
        manager.saveReport();
    }
}
```

---

## 📁 输出文件结构

```
logs/anti-crawler-analysis/captured-js/
└── 20250203_143022/                    # 时间戳目录
    ├── 0001_main_a3f2b1c8.js          # JS 文件
    ├── 0001_main_a3f2b1c8.js.meta.json # 元数据（可选）
    ├── 0002_security_b4e3c2d9.js
    ├── 0002_security_b4e3c2d9.js.meta.json
    └── capture-report.txt              # 捕获报告
```

---

## ⚡ 性能说明

- **不影响页面加载**：拦截器会立即将响应传递给页面，只在后台保存文件
- **线程安全**：内部使用 `ConcurrentHashMap`，可安全地在多线程环境中使用
- **自动去重**：相同 URL 的 JS 只会保存一次

---

## 🔧 常用配置组合

### 组合 1：只捕获核心业务 JS

```java
JsCaptureConfig config = JsCaptureConfig.builder()
    .addTargetDomain("zhipin.com")
    .addExcludePattern("jquery")
    .addExcludePattern("react")
    .addExcludePattern("vue")
    .build();
```

### 组合 2：捕获所有 JS，但排除第三方库

```java
JsCaptureConfig config = JsCaptureConfig.builder()
    .captureAll(true)
    .addExcludePattern("jquery")
    .addExcludePattern("bootstrap")
    .addExcludePattern("analytics")
    .addExcludePattern("google")
    .addExcludePattern("facebook")
    .build();
```

### 组合 3：只捕获安全相关的 JS

```java
JsCaptureConfig config = JsCaptureConfig.builder()
    .addTargetDomain("zhipin.com")
    .build();

// 然后手动过滤包含 'security' 或 'encrypt' 的文件
```

---

## 💡 小贴士

1. **首次分析**：使用 `captureAll()` 捕获所有 JS，了解网站的 JS 结构
2. **精细分析**：使用 `captureByDomains()` 只捕获目标网站的 JS
3. **排除无关文件**：使用 `addExcludePattern()` 排除第三方库和统计脚本
4. **保存元数据**：使用 `.saveMetadata(true)` 保存详细的元数据信息
5. **查看报告**：使用 `saveReport()` 生成可读的文本报告

---

## 🎉 总结

`JsCaptureManager` 提供了三种使用方式：

| 方式 | 代码量 | 适用场景 |
|------|--------|----------|
| `captureAll()` | 1 行 | 初次分析、快速测试 |
| `captureByDomains()` | 1 行 | 生产环境、精确捕获 |
| `captureWithConfig()` | 5-10 行 | 高级配置、精细化分析 |

选择适合你的方式，开始捕获 JS 吧！🚀

