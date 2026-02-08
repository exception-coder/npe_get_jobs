# JavaScript反混淆工具使用说明

## 📦 工具简介

`JsDeobfuscator` 是一个Java工具类，用于调用npm命令对混淆的JavaScript代码进行反混淆。支持多种反混淆工具，可以有效还原被混淆的JS代码。

## 🛠️ 支持的工具

| 工具 | 特点 | 适用场景 |
|------|------|---------|
| **webcrack** | 专门用于webpack打包的代码，效果最好 | webpack混淆、复杂混淆 |
| **js-beautify** | 通用美化工具，速度快 | 简单混淆、代码格式化 |
| **babel** | AST转换工具，可自定义 | 需要自定义转换规则 |
| **synchrony-js** | 专门处理异步代码 | 异步代码同步化 |

## 📥 安装

### 方式1: 使用安装脚本（推荐）

```bash
cd /Users/zhangkai/IdeaProjects/npe_get_jobs
./scripts/install-deobfuscator-tools.sh
```

### 方式2: 手动安装

```bash
# 安装webcrack（推荐）
npm install -g webcrack

# 安装js-beautify
npm install -g js-beautify

# 安装babel相关工具
npm install -g @babel/cli @babel/core
npm install -g @babel/plugin-transform-arrow-functions
npm install -g @babel/plugin-transform-block-scoping
npm install -g @babel/plugin-transform-template-literals
```

## 💻 使用方法

### 方式A: 静态方法（推荐，无需依赖注入）

#### 1. 最简单的使用（自动选择最佳工具）

```java
// 自动选择可用的工具进行反混淆
String obfuscatedCode = "!function(){...}()";
String deobfuscatedCode = JsDeobfuscator.deobfuscateWithAutoFallback(obfuscatedCode);

if (deobfuscatedCode != null) {
    System.out.println("反混淆成功！");
    System.out.println(deobfuscatedCode);
} else {
    System.err.println("反混淆失败");
}
```

#### 2. 使用默认配置（webcrack工具）

```java
String obfuscatedCode = "!function(){...}()";
String deobfuscatedCode = JsDeobfuscator.deobfuscateStatic(obfuscatedCode);

if (deobfuscatedCode != null) {
    System.out.println("反混淆成功！");
}
```

#### 3. 指定工具类型

```java
// 使用js-beautify工具（速度快，适合简单混淆）
String deobfuscatedCode = JsDeobfuscator.deobfuscateStatic(
    obfuscatedCode,
    JsDeobfuscator.DeobfuscatorType.JS_BEAUTIFY
);
```

#### 4. 完整参数控制

```java
// 使用webcrack，设置180秒超时
String deobfuscatedCode = JsDeobfuscator.deobfuscateStatic(
    obfuscatedCode,
    JsDeobfuscator.DeobfuscatorType.WEBCRACK,
    180  // 超时时间（秒）
);
```

#### 5. 反混淆文件（静态方法 - 自动生成输出路径）

```java
// 最简单的方式：自动在同目录生成 deobfuscated_xxx.js
String outputPath = JsDeobfuscator.deobfuscateFileStatic(
    "logs/anti-crawler-analysis/captured-js/20260204_013834/0076_ca3b236c_97ac1696.js"
);

if (outputPath != null) {
    System.out.println("反混淆成功，输出文件: " + outputPath);
    // 输出：logs/anti-crawler-analysis/captured-js/20260204_013834/deobfuscated_0076_ca3b236c_97ac1696.js
}
```

#### 5-2. 反混淆文件（静态方法 - 指定输出路径）

```java
boolean success = JsDeobfuscator.deobfuscateFileStatic(
    "input.js",
    "output.js"
);
```

#### 6. 批量反混淆目录（静态方法）

```java
boolean success = JsDeobfuscator.deobfuscateDirectoryStatic(
    "logs/captured-js",
    "logs/deobfuscated"
);
```

#### 7. 检查工具安装状态（静态方法）

```java
boolean installed = JsDeobfuscator.isToolInstalledStatic(
    JsDeobfuscator.DeobfuscatorType.WEBCRACK
);

if (!installed) {
    System.out.println("请安装: npm install -g webcrack");
}
```

---

### 方式B: 依赖注入（适合Spring环境）

#### 1. 基本使用

```java
@Autowired
private JsDeobfuscator jsDeobfuscator;

// 反混淆代码字符串
String obfuscatedCode = "!function(){...}()";
JsDeobfuscator.DeobfuscateResult result = jsDeobfuscator.deobfuscate(obfuscatedCode);

if (result.isSuccess()) {
    System.out.println("反混淆成功！");
    System.out.println(result.getDeobfuscatedCode());
} else {
    System.err.println("反混淆失败: " + result.getErrorMessage());
}
```

#### 2. 使用自定义配置

```java
// 配置反混淆参数
JsDeobfuscator.DeobfuscateConfig config = JsDeobfuscator.DeobfuscateConfig.defaultConfig()
    .type(JsDeobfuscator.DeobfuscatorType.WEBCRACK)  // 使用webcrack
    .timeout(120)                                     // 超时时间120秒
    .unpack(true)                                     // 解包
    .beautify(true);                                  // 美化代码

JsDeobfuscator.DeobfuscateResult result = jsDeobfuscator.deobfuscate(obfuscatedCode, config);
```

#### 3. 反混淆单个文件

```java
// 反混淆单个JS文件
String inputPath = "logs/anti-crawler-analysis/captured-js/20260204_013834/0076_ca3b236c_97ac1696.js";
String outputPath = "logs/anti-crawler-analysis/deobfuscated/0076_deobfuscated.js";

jsDeobfuscator.deobfuscateFile(inputPath, outputPath);
```

#### 4. 批量反混淆目录

```java
// 批量反混淆整个目录
String inputDir = "logs/anti-crawler-analysis/captured-js/20260204_013834";
String outputDir = "logs/anti-crawler-analysis/deobfuscated/20260204_013834";

JsDeobfuscator.DeobfuscateConfig config = JsDeobfuscator.DeobfuscateConfig.defaultConfig()
    .type(JsDeobfuscator.DeobfuscatorType.WEBCRACK)
    .timeout(120);

jsDeobfuscator.deobfuscateDirectory(inputDir, outputDir, config);
```

#### 5. 自动降级（推荐）

```java
// 自动尝试多个工具，失败后自动降级
JsDeobfuscator.DeobfuscateResult result = jsDeobfuscator.deobfuscateWithFallback(obfuscatedCode);

if (result.isSuccess()) {
    System.out.println("使用工具: " + result.getToolUsed());
    System.out.println("耗时: " + result.getExecutionTime() + "ms");
}
```

#### 6. 检查工具安装状态

```java
// 检查所有工具的安装状态
Map<String, Boolean> status = jsDeobfuscator.checkToolsStatus();
status.forEach((tool, installed) -> {
    System.out.println(tool + ": " + (installed ? "已安装" : "未安装"));
});
```

#### 7. 多步骤反混淆

```java
// 先用webcrack解包，再用js-beautify美化
String jsCode = Files.readString(Paths.get(inputPath));

// 步骤1: webcrack解包
JsDeobfuscator.DeobfuscateConfig webcrackConfig = JsDeobfuscator.DeobfuscateConfig.defaultConfig()
    .type(JsDeobfuscator.DeobfuscatorType.WEBCRACK)
    .unpack(true);

JsDeobfuscator.DeobfuscateResult step1 = jsDeobfuscator.deobfuscate(jsCode, webcrackConfig);

if (step1.isSuccess()) {
    // 步骤2: js-beautify美化
    JsDeobfuscator.DeobfuscateConfig beautifyConfig = JsDeobfuscator.DeobfuscateConfig.defaultConfig()
        .type(JsDeobfuscator.DeobfuscatorType.JS_BEAUTIFY);
    
    JsDeobfuscator.DeobfuscateResult step2 = jsDeobfuscator.deobfuscate(
        step1.getDeobfuscatedCode(), 
        beautifyConfig
    );
    
    if (step2.isSuccess()) {
        Files.writeString(Paths.get(outputPath), step2.getDeobfuscatedCode());
    }
}
```

## 🔧 配置选项

### DeobfuscatorType（工具类型）

- `WEBCRACK` - 专门用于webpack混淆（推荐）
- `JS_BEAUTIFY` - 通用美化工具
- `BABEL` - AST转换工具
- `SYNCHRONY` - 异步代码同步化

### DeobfuscateConfig（配置参数）

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | DeobfuscatorType | WEBCRACK | 使用的工具类型 |
| timeout | int | 120 | 超时时间（秒） |
| beautify | boolean | true | 是否美化代码 |
| unpack | boolean | true | 是否解包（webcrack） |
| mangle | boolean | false | 是否混淆变量名 |

### DeobfuscateResult（返回结果）

| 字段 | 类型 | 说明 |
|------|------|------|
| success | boolean | 是否成功 |
| deobfuscatedCode | String | 反混淆后的代码 |
| errorMessage | String | 错误信息 |
| executionTime | long | 执行时间（毫秒） |
| toolUsed | String | 使用的工具 |

## 📝 实际应用示例

### 示例1: 反混淆反爬虫JS

```java
@Service
public class AntiCrawlerService {
    
    @Autowired
    private JsDeobfuscator jsDeobfuscator;
    
    public void analyzeSecurityJs(String jsUrl) {
        // 1. 下载JS文件
        String obfuscatedJs = downloadJs(jsUrl);
        
        // 2. 反混淆
        JsDeobfuscator.DeobfuscateResult result = 
            jsDeobfuscator.deobfuscateWithFallback(obfuscatedJs);
        
        if (result.isSuccess()) {
            // 3. 分析反混淆后的代码
            String deobfuscatedCode = result.getDeobfuscatedCode();
            
            // 查找关键检测逻辑
            if (deobfuscatedCode.contains("webdriver")) {
                log.info("检测到WebDriver检测逻辑");
            }
            if (deobfuscatedCode.contains("canvas")) {
                log.info("检测到Canvas指纹检测");
            }
            
            // 4. 保存结果
            saveDeobfuscatedCode(deobfuscatedCode);
        }
    }
}
```

### 示例2: 批量处理捕获的JS

```java
@Service
public class JsCaptureProcessor {
    
    @Autowired
    private JsDeobfuscator jsDeobfuscator;
    
    public void processAllCapturedJs() {
        String captureDir = "logs/anti-crawler-analysis/captured-js";
        String outputDir = "logs/anti-crawler-analysis/deobfuscated";
        
        try {
            // 批量反混淆
            jsDeobfuscator.deobfuscateDirectory(captureDir, outputDir);
            
            log.info("批量反混淆完成");
        } catch (IOException e) {
            log.error("批量反混淆失败", e);
        }
    }
}
```

## ⚠️ 注意事项

1. **工具安装**: 使用前必须先安装npm工具，建议使用安装脚本
2. **超时设置**: 对于大型JS文件，建议增加超时时间（如180秒）
3. **内存占用**: 反混淆大文件时可能占用较多内存
4. **工具选择**: 
   - webpack打包的代码优先使用 `WEBCRACK`
   - 简单混淆使用 `JS_BEAUTIFY` 即可
   - 不确定时使用 `deobfuscateWithFallback()` 自动选择
5. **临时文件**: 工具会自动清理临时文件，无需手动处理

## 🐛 常见问题

### Q1: 提示工具未安装？
**A**: 运行安装脚本或手动安装npm工具：
```bash
npm install -g webcrack js-beautify
```

### Q2: 反混淆失败？
**A**: 尝试以下方法：
1. 使用 `deobfuscateWithFallback()` 自动降级
2. 增加超时时间
3. 尝试不同的工具类型
4. 检查JS代码是否完整

### Q3: 执行超时？
**A**: 增加超时时间：
```java
config.timeout(300); // 设置为5分钟
```

### Q4: 如何查看详细日志？
**A**: 在 `application.yml` 中配置日志级别：
```yaml
logging:
  level:
    getjobs.common.util.JsDeobfuscator: DEBUG
```

## 📚 参考资源

- [webcrack GitHub](https://github.com/j4k0xb/webcrack)
- [js-beautify GitHub](https://github.com/beautify-web/js-beautify)
- [Babel 官方文档](https://babeljs.io/)

## 🔄 更新日志

- **v1.0.0** (2026-02-04)
  - 初始版本
  - 支持webcrack、js-beautify、babel
  - 支持单文件和批量反混淆
  - 支持自动降级

