# JsCaptureManager 使用指南

## 📋 概述

`JsCaptureManager` 是一个用于在 BrowserContext 级别捕获和保存 JavaScript 文件的工具类。

**核心优势：**
- ✅ **Context级别** - 一次配置，所有Page自动继承
- ✅ **灵活过滤** - 支持域名白名单、排除规则
- ✅ **自动保存** - 自动保存JS文件和元数据
- ✅ **不影响页面** - 捕获失败不影响页面正常加载
- ✅ **详细报告** - 自动生成捕获报告

---

## 🚀 快速开始

### 在 PlaywrightService 中集成

```java
@Slf4j
@Service
public class PlaywrightService {
    
    // 新增：JS捕获管理器
    private JsCaptureManager jsCaptureManager;
    
    @PostConstruct
    public void init() {
        // ... 现有初始化代码 ...
        
        // 为持久化上下文添加反检测脚本
        addStealthScripts(context);
        
        // ✨ 新增：启用JS捕获
        enableJsCapture(context);
        
        // ... 其余代码 ...
    }
    
    /**
     * 启用JS捕获
     */
    private void enableJsCapture(BrowserContext context) {
        try {
            // 只捕获Boss直聘的JS（推荐）
            JsCaptureManager.JsCaptureConfig config = 
                JsCaptureManager.JsCaptureConfig.builder()
                    .addTargetDomain("zhipin.com")
                    .addTargetDomain("static.zhipin.com")
                    .addExcludePattern("jquery")
                    .addExcludePattern("analytics")
                    .saveMetadata(true)
                    .build();
            
            jsCaptureManager = new JsCaptureManager(config);
            jsCaptureManager.enableCapture(context);
            
            log.info("✓ JS捕获已启用");
        } catch (Exception e) {
            log.error("启用JS捕获失败", e);
        }
    }
    
    @PreDestroy
    public void close() {
        // 生成并保存捕获报告
        if (jsCaptureManager != null && jsCaptureManager.isEnabled()) {
            log.info(jsCaptureManager.generateReport());
            jsCaptureManager.saveReport();
        }
        // ... 其余清理代码 ...
    }
}
```

---

## 📖 配置方式

### 方式1：捕获所有JS

```java
JsCaptureManager.JsCaptureConfig config = 
    JsCaptureManager.JsCaptureConfig.captureAll();
```

### 方式2：只捕获指定域名（推荐）

```java
JsCaptureManager.JsCaptureConfig config = 
    JsCaptureManager.JsCaptureConfig.captureByDomains(
        "zhipin.com", 
        "static.zhipin.com"
    );
```

### 方式3：高级配置

```java
JsCaptureManager.JsCaptureConfig config = 
    JsCaptureManager.JsCaptureConfig.builder()
        .addTargetDomain("zhipin.com")
        .addExcludePattern("jquery")
        .addExcludePattern("analytics")
        .saveMetadata(true)
        .build();
```

---

## 📂 输出文件结构

```
logs/anti-crawler-analysis/captured-js/20250203_143022/
├── 0001_main.min_a3f2b8c9.js
├── 0001_main.min_a3f2b8c9.js.meta.json
├── 0002_bundle_d4e5f6a7.js
├── 0002_bundle_d4e5f6a7.js.meta.json
└── capture-report.txt
```

---

## 🎯 使用场景

### 场景1：分析反爬虫机制

```java
jsCaptureManager.enableCapture(context);
page.navigate("https://www.zhipin.com");
log.info("已捕获 {} 个JS文件", jsCaptureManager.getCaptureCount());
```

### 场景2：定位关键JS文件

```java
Map<String, JsFileInfo> files = jsCaptureManager.getCapturedFiles();
for (Map.Entry<String, JsFileInfo> entry : files.entrySet()) {
    if (entry.getKey().contains("main")) {
        log.info("关键JS: {}", entry.getValue().getFileName());
    }
}
```

---

## ⚠️ 注意事项

1. **磁盘空间** - 建议使用过滤规则
2. **性能影响** - 略微增加页面加载时间（<100ms）
3. **错误处理** - 捕获失败不影响页面加载
4. **并发安全** - 线程安全，可多Page使用
5. **定期清理** - 建议保留最近7天记录

---

## 📊 API 文档

### JsCaptureConfig.Builder

| 方法 | 说明 |
|------|------|
| `captureAll(boolean)` | 是否捕获所有JS |
| `addTargetDomain(String)` | 添加目标域名 |
| `addExcludePattern(String)` | 添加排除规则 |
| `saveMetadata(boolean)` | 是否保存元数据 |
| `build()` | 构建配置对象 |

### JsCaptureManager

| 方法 | 说明 |
|------|------|
| `enableCapture(BrowserContext)` | 启用JS捕获 |
| `getCaptureCount()` | 获取捕获数量 |
| `getCapturedFiles()` | 获取已捕获文件 |
| `generateReport()` | 生成捕获报告 |
| `saveReport()` | 保存报告到文件 |

---

## 🎓 最佳实践

1. **开发阶段**：使用 `captureAll()` 全面收集
2. **生产环境**：使用精确的域名过滤
3. **定期清理**：保留最近的捕获记录
4. **配合分析**：结合 `boss-forensic.log` 一起分析
5. **版本控制**：不要将捕获的JS提交到Git
