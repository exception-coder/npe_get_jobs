# JsDeobfuscator 静态方法快速参考

## 🚀 最常用的方法

### 1️⃣ 自动反混淆（推荐）
```java
String result = JsDeobfuscator.deobfuscateWithAutoFallback(jsCode);
```
✅ 自动选择最佳工具  
✅ 失败自动降级  
✅ 无需配置  

---

### 2️⃣ 默认反混淆
```java
String result = JsDeobfuscator.deobfuscateStatic(jsCode);
```
✅ 使用webcrack工具  
✅ 120秒超时  
✅ 自动解包和美化  

---

### 3️⃣ 指定工具
```java
String result = JsDeobfuscator.deobfuscateStatic(
    jsCode,
    JsDeobfuscator.DeobfuscatorType.JS_BEAUTIFY
);
```
可选工具：
- `WEBCRACK` - webpack混淆（推荐）
- `JS_BEAUTIFY` - 快速美化
- `BABEL` - AST转换
- `SYNCHRONY` - 异步代码

---

### 4️⃣ 完整控制
```java
String result = JsDeobfuscator.deobfuscateStatic(
    jsCode,
    JsDeobfuscator.DeobfuscatorType.WEBCRACK,
    180  // 超时秒数
);
```

---

### 5️⃣ 文件反混淆（自动生成输出路径）
```java
// 自动在同目录生成 deobfuscated_xxx.js
String outputPath = JsDeobfuscator.deobfuscateFileStatic("input.js");
```
✅ 无需指定输出路径  
✅ 自动添加前缀  
✅ 返回输出文件路径  

### 5️⃣-2 文件反混淆（指定输出路径）
```java
boolean success = JsDeobfuscator.deobfuscateFileStatic(
    "input.js",
    "output.js"
);
```

---

### 6️⃣ 批量反混淆
```java
boolean success = JsDeobfuscator.deobfuscateDirectoryStatic(
    "input_dir",
    "output_dir"
);
```

---

### 7️⃣ 检查工具
```java
boolean installed = JsDeobfuscator.isToolInstalledStatic(
    JsDeobfuscator.DeobfuscatorType.WEBCRACK
);
```

---

## 📋 返回值说明

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `deobfuscateWithAutoFallback()` | `String` | 成功返回代码，失败返回null |
| `deobfuscateStatic()` | `String` | 成功返回代码，失败返回null |
| `deobfuscateFileStatic(inputPath)` | `String` | 成功返回输出路径，失败返回null ⭐ |
| `deobfuscateFileStatic(input, output)` | `boolean` | 成功返回true，失败返回false |
| `deobfuscateDirectoryStatic()` | `boolean` | 成功返回true，失败返回false |
| `isToolInstalledStatic()` | `boolean` | 已安装返回true，未安装返回false |

---

## 💡 使用建议

### 场景1: 不确定用什么工具
```java
// 使用自动降级
String result = JsDeobfuscator.deobfuscateWithAutoFallback(jsCode);
```

### 场景2: 简单的代码美化
```java
// 使用js-beautify（速度快）
String result = JsDeobfuscator.deobfuscateStatic(
    jsCode,
    JsDeobfuscator.DeobfuscatorType.JS_BEAUTIFY
);
```

### 场景3: 复杂的webpack混淆
```java
// 使用webcrack（效果好）
String result = JsDeobfuscator.deobfuscateStatic(
    jsCode,
    JsDeobfuscator.DeobfuscatorType.WEBCRACK,
    180  // 增加超时时间
);
```

### 场景4: 批量处理（最简单）
```java
// 方式1: 自动生成输出路径（推荐）
String inputPath = "logs/captured-js/script.js";
String outputPath = JsDeobfuscator.deobfuscateFileStatic(inputPath);
// 输出：logs/captured-js/deobfuscated_script.js

// 方式2: 指定输出路径
JsDeobfuscator.deobfuscateFileStatic(
    "logs/captured-js/script.js",
    "logs/deobfuscated/script.js"
);

// 方式3: 批量处理整个目录
JsDeobfuscator.deobfuscateDirectoryStatic(
    "logs/captured-js",
    "logs/deobfuscated"
);
```

---

## ⚠️ 注意事项

1. **首次使用前必须安装npm工具**
   ```bash
   ./scripts/install-deobfuscator-tools.sh
   ```

2. **检查返回值**
   ```java
   String result = JsDeobfuscator.deobfuscateStatic(jsCode);
   if (result == null) {
       // 处理失败情况
   }
   ```

3. **大文件增加超时**
   ```java
   // 对于大文件，设置更长的超时时间
   String result = JsDeobfuscator.deobfuscateStatic(jsCode, type, 300);
   ```

4. **查看日志**
   - 成功和失败都会记录日志
   - 日志级别：INFO（成功）、ERROR（失败）

---

## 🔥 实战示例

### 分析反爬虫JS
```java
public void analyzeAntiCrawlerJs(String jsUrl, String jsContent) {
    // 1. 反混淆
    String deobfuscated = JsDeobfuscator.deobfuscateWithAutoFallback(jsContent);
    
    if (deobfuscated == null) {
        log.error("反混淆失败");
        return;
    }
    
    // 2. 分析检测逻辑
    if (deobfuscated.contains("navigator.webdriver")) {
        log.info("发现WebDriver检测");
    }
    if (deobfuscated.contains("canvas")) {
        log.info("发现Canvas指纹");
    }
    
    // 3. 保存结果
    String outputPath = "logs/deobfuscated/" + extractFileName(jsUrl) + ".js";
    JsDeobfuscator.deobfuscateFileStatic(
        saveTemp(jsContent),
        outputPath
    );
}
```

### 批量处理捕获的JS
```java
public void processCapturedJs() {
    // 方式1: 单个文件，自动生成输出路径（最简单）
    String inputPath = "logs/anti-crawler-analysis/captured-js/20260204_013834/0076_ca3b236c_97ac1696.js";
    String outputPath = JsDeobfuscator.deobfuscateFileStatic(inputPath);
    
    if (outputPath != null) {
        log.info("反混淆成功: {}", outputPath);
        // 输出：logs/anti-crawler-analysis/captured-js/20260204_013834/deobfuscated_0076_ca3b236c_97ac1696.js
    }
    
    // 方式2: 批量处理整个目录
    String inputDir = "logs/anti-crawler-analysis/captured-js/20260204_013834";
    String outputDir = "logs/anti-crawler-analysis/deobfuscated/20260204_013834";
    
    boolean success = JsDeobfuscator.deobfuscateDirectoryStatic(inputDir, outputDir);
    
    if (success) {
        log.info("批量反混淆完成，请查看: {}", outputDir);
    }
}
```

---

## 📞 获取帮助

- 查看完整文档：`docs/JsDeobfuscator使用说明.md`
- 查看示例代码：`getjobs/common/util/JsDeobfuscatorExample.java`
- 安装工具：`./scripts/install-deobfuscator-tools.sh`

