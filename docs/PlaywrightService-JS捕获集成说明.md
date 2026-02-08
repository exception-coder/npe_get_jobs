# PlaywrightService JS 捕获集成说明

## 概述

`PlaywrightService` 现在提供了便捷的 JS 捕获能力入口，让你无需手动获取 `BrowserContext`，就能快速启用 JS 捕获功能。

## 架构设计

### 职责分离

- **`PlaywrightService`**：提供便捷的入口方法，简化使用流程
- **`JsCaptureManager`**：封装所有 JS 捕获逻辑，完全独立

### 优势

1. ✅ **简化使用**：无需手动获取 `BrowserContext`
2. ✅ **职责清晰**：Service 只提供入口，不包含业务逻辑
3. ✅ **灵活性高**：既可以通过 Service 使用，也可以直接使用 `JsCaptureManager`

---

## 使用方式

### 方式 1：通过 PlaywrightService（推荐）

#### 1.1 捕获所有 JS（最简单）

```java
@Autowired
private PlaywrightService playwrightService;

public void captureAllJs() {
    // 启用 JS 捕获（一行代码！）
    JsCaptureManager manager = playwrightService.enableJsCapture();
    
    // 访问页面
    Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    page.navigate("https://www.zhipin.com/web/geek/job");
    page.waitForTimeout(5000);
    
    // 保存报告
    manager.saveReport();
    
    log.info("✓ 已捕获 {} 个 JS 文件", manager.getCaptureCount());
    log.info("✓ 捕获目录: {}", manager.getCaptureDir());
}
```

#### 1.2 只捕获指定域名

```java
public void captureBossJs() {
    // 只捕获 Boss 直聘的 JS
    JsCaptureManager manager = playwrightService.enableJsCaptureForDomains(
        "zhipin.com", 
        "bosszp.com"
    );
    
    // 访问页面
    Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    page.navigate("https://www.zhipin.com/web/geek/job");
    page.waitForTimeout(5000);
    
    // 保存报告
    manager.saveReport();
}
```

#### 1.3 使用自定义配置

```java
public void captureWithConfig() {
    // 构建自定义配置
    JsCaptureManager.JsCaptureConfig config = 
        JsCaptureManager.JsCaptureConfig.builder()
            .captureAll(true)
            .addExcludePattern("jquery")
            .addExcludePattern("bootstrap")
            .saveMetadata(true)
            .build();
    
    // 启用捕获
    JsCaptureManager manager = playwrightService.enableJsCaptureWithConfig(config);
    
    // 访问页面
    Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    page.navigate("https://www.zhipin.com/web/geek/job");
    page.waitForTimeout(5000);
    
    // 保存报告
    manager.saveReport();
}
```

---

### 方式 2：直接使用 JsCaptureManager（高级用法）

如果你需要更多控制权，可以直接使用 `JsCaptureManager`：

```java
public void advancedUsage() {
    // 手动获取 BrowserContext
    BrowserContext context = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    
    // 直接使用 JsCaptureManager
    JsCaptureManager manager = JsCaptureManager.captureAll(context);
    
    // 访问页面...
    Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    page.navigate("https://www.zhipin.com/web/geek/job");
    page.waitForTimeout(5000);
    
    // 保存报告
    manager.saveReport();
}
```

---

## PlaywrightService 提供的方法

### 1. `enableJsCapture()`

捕获所有域名的 JS 文件。

```java
JsCaptureManager manager = playwrightService.enableJsCapture();
```

**适用场景：**
- 初次分析网站
- 快速测试
- 不确定需要捕获哪些域名

---

### 2. `enableJsCaptureForDomains(String... domains)`

只捕获指定域名的 JS 文件。

```java
JsCaptureManager manager = playwrightService.enableJsCaptureForDomains(
    "zhipin.com", 
    "bosszp.com"
);
```

**适用场景：**
- 生产环境
- 只关注特定网站的 JS
- 减少磁盘占用

---

### 3. `enableJsCaptureWithConfig(JsCaptureConfig config)`

使用自定义配置启用捕获。

```java
JsCaptureConfig config = JsCaptureConfig.builder()
    .captureAll(true)
    .addExcludePattern("jquery")
    .build();

JsCaptureManager manager = playwrightService.enableJsCaptureWithConfig(config);
```

**适用场景：**
- 需要精细化配置
- 排除特定文件
- 自定义元数据保存

---

## 完整示例

### 示例 1：分析 Boss 直聘的反爬虫 JS

```java
@Service
public class BossAntiCrawlerAnalyzer {
    
    @Autowired
    private PlaywrightService playwrightService;
    
    public void analyze() {
        // 启用 JS 捕获（只捕获 Boss 直聘）
        JsCaptureManager manager = playwrightService.enableJsCaptureForDomains(
            "zhipin.com", 
            "bosszp.com"
        );
        
        // 访问页面
        Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
        page.navigate("https://www.zhipin.com/web/geek/job");
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
        log.info("✓ 请查看捕获的 JS 文件，重点关注包含 'security' 或 'encrypt' 的文件");
    }
}
```

---

### 示例 2：在测试中使用

```java
@SpringBootTest
public class JsCaptureIntegrationTest {
    
    @Autowired
    private PlaywrightService playwrightService;
    
    @Test
    public void testCaptureJs() {
        // 启用 JS 捕获
        JsCaptureManager manager = playwrightService.enableJsCapture();
        
        // 访问页面
        Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
        page.navigate("https://www.zhipin.com/web/geek/job");
        page.waitForTimeout(5000);
        
        // 断言
        assertTrue(manager.getCaptureCount() > 0, "应该捕获到 JS 文件");
        assertTrue(Files.exists(manager.getCaptureDir()), "捕获目录应该存在");
        
        // 保存报告
        manager.saveReport();
        
        log.info("✓ 测试通过！捕获了 {} 个 JS 文件", manager.getCaptureCount());
    }
}
```

---

### 示例 3：排除常见库

```java
public void captureWithoutCommonLibs() {
    // 构建配置：捕获所有，但排除常见库
    JsCaptureManager.JsCaptureConfig config = 
        JsCaptureManager.JsCaptureConfig.builder()
            .captureAll(true)
            .addExcludePattern("jquery")
            .addExcludePattern("bootstrap")
            .addExcludePattern("react")
            .addExcludePattern("vue")
            .addExcludePattern("angular")
            .addExcludePattern("analytics")
            .addExcludePattern("google")
            .build();
    
    // 启用捕获
    JsCaptureManager manager = playwrightService.enableJsCaptureWithConfig(config);
    
    // 访问页面
    Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
    page.navigate("https://www.zhipin.com/web/geek/job");
    page.waitForTimeout(5000);
    
    // 保存报告
    manager.saveReport();
    
    log.info("✓ 已捕获 {} 个 JS 文件（排除了常见库）", manager.getCaptureCount());
}
```

---

## 输出文件结构

捕获的文件会保存在以下目录结构中：

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

## 方法对比

| 方法 | 代码量 | 灵活性 | 适用场景 |
|------|--------|--------|----------|
| `enableJsCapture()` | 1 行 | 低 | 快速测试、初次分析 |
| `enableJsCaptureForDomains()` | 1 行 | 中 | 生产环境、精确捕获 |
| `enableJsCaptureWithConfig()` | 5-10 行 | 高 | 精细化配置、高级用法 |
| 直接使用 `JsCaptureManager` | 2-3 行 | 最高 | 需要完全控制 |

---

## 常见问题

### Q: 通过 Service 和直接使用 JsCaptureManager 有什么区别？

A: 
- **通过 Service**：无需手动获取 `BrowserContext`，代码更简洁
- **直接使用**：需要手动获取 `BrowserContext`，但更灵活

两种方式功能完全相同，选择你喜欢的即可。

---

### Q: 可以同时启用多个 JsCaptureManager 吗？

A: 不建议。一个 `BrowserContext` 只应该有一个 `JsCaptureManager` 实例。如果需要不同的配置，请先停止旧的，再启动新的。

---

### Q: 捕获会影响页面加载速度吗？

A: 不会。拦截器会立即将响应传递给页面，只在后台保存文件，不会阻塞页面加载。

---

## 总结

`PlaywrightService` 现在提供了三个便捷方法来启用 JS 捕获：

1. **`enableJsCapture()`** - 捕获所有 JS（最简单）
2. **`enableJsCaptureForDomains()`** - 只捕获指定域名（推荐）
3. **`enableJsCaptureWithConfig()`** - 使用自定义配置（最灵活）

选择适合你的方式，开始捕获 JS 吧！🚀

---

## 相关文档

- [JsCaptureManager 快速开始](./JsCaptureManager快速开始.md)
- [JsCaptureManager 使用示例](./JsCaptureManager使用示例.md)

