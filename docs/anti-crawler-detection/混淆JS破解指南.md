# 🔓 混淆 JavaScript 破解完全指南

## 📋 目录
1. [问题描述](#问题描述)
2. [破解方案](#破解方案)
3. [工具推荐](#工具推荐)
4. [实战步骤](#实战步骤)
5. [高级技巧](#高级技巧)

---

## 问题描述

Boss 直聘的反爬虫 JS 文件是**高度混淆**的：
- 变量名被替换成无意义的字符（如 `a`, `b`, `c`）
- 代码被压缩成一行
- 使用了各种混淆技术（字符串编码、控制流平坦化等）

**示例**：
```javascript
!function(){try{!function(){try{if(-1===(o=navigator.userAgent.toLowerCase()).indexOf("msie")...
```

这让我们**无法直接阅读代码**，也就无法知道它是如何检测 Playwright 的。

---

## 破解方案

### 方案 1：在线反混淆工具（最简单）⭐

#### 1.1 JS Nice（最强大）
**网址**：http://jsnice.org/

**特点**：
- ✅ 使用机器学习还原变量名
- ✅ 自动推断类型
- ✅ 格式化代码
- ✅ 添加注释

**使用方法**：
1. 打开 http://jsnice.org/
2. 粘贴混淆的 JS 代码
3. 点击 "Nicify JavaScript"
4. 查看还原后的代码

**效果对比**：
```javascript
// 混淆前
function a(b,c){return b+c}

// 还原后
function add(number1, number2) {
  return number1 + number2;
}
```

#### 1.2 JS Beautifier（格式化）
**网址**：https://beautifier.io/

**特点**：
- ✅ 只格式化，不还原变量名
- ✅ 速度快
- ✅ 支持多种语言

**使用方法**：
1. 打开 https://beautifier.io/
2. 粘贴混淆的 JS 代码
3. 点击 "Beautify Code"
4. 查看格式化后的代码

#### 1.3 UnPacker（解包）
**网址**：https://matthewfl.com/unPacker.html

**特点**：
- ✅ 专门处理 `eval()` 和 `packed` 代码
- ✅ 自动检测编码方式

**使用方法**：
1. 打开 https://matthewfl.com/unPacker.html
2. 粘贴混淆的 JS 代码
3. 点击 "UnPack"
4. 查看解包后的代码

---

### 方案 2：Chrome DevTools 动态调试（最有效）⭐⭐⭐

这是**最强大**的方法，因为可以看到**运行时的真实逻辑**！

#### 2.1 基础调试

**步骤**：

1. **打开 Chrome DevTools**
   ```
   F12 → Sources 标签
   ```

2. **找到反爬虫脚本**
   ```
   Ctrl+P → 输入 "main.js" 或 "index.js"
   ```

3. **格式化代码**
   ```
   点击左下角的 {} 按钮（Pretty print）
   ```

4. **设置断点**
   - 在可疑的地方点击行号设置断点
   - 特别是 `location.href` 或 `window.location` 相关的代码

5. **刷新页面**
   - 代码会在断点处暂停
   - 可以查看变量值、调用栈等

#### 2.2 高级调试技巧

##### A. 使用条件断点
```javascript
// 右键点击行号 → Add conditional breakpoint
// 输入条件，例如：
url.includes('about:blank')
```

##### B. 使用 XHR/Fetch 断点
```
Sources → XHR/fetch Breakpoints → 添加断点
```

##### C. 使用事件监听器断点
```
Sources → Event Listener Breakpoints
→ 勾选 "Script" → "Script First Statement"
```

##### D. 使用 DOM 断点
```
Elements → 右键点击元素 → Break on
→ subtree modifications / attribute modifications / node removal
```

##### E. 查看调用栈
```
当断点触发时，查看右侧的 Call Stack
可以看到完整的函数调用链
```

#### 2.3 实战示例

**目标**：找到触发 `about:blank` 跳转的代码

**步骤**：

1. **在 Console 中 Hook location.href**
   ```javascript
   const originalHrefDescriptor = Object.getOwnPropertyDescriptor(Location.prototype, 'href');
   Object.defineProperty(Location.prototype, 'href', {
     get: originalHrefDescriptor.get,
     set: function(value) {
       if (value.includes('about:blank')) {
         debugger; // 触发断点
       }
       return originalHrefDescriptor.set.call(this, value);
     }
   });
   ```

2. **刷新页面**
   - 当代码尝试跳转到 `about:blank` 时，会自动触发断点

3. **查看调用栈**
   - 在 Call Stack 中可以看到完整的调用链
   - 点击每一层可以查看对应的代码

4. **分析代码**
   - 找到触发跳转的条件
   - 找到检测 Playwright 的逻辑

---

### 方案 3：使用我提供的高级监控脚本（已实现）⭐⭐

我已经创建了 `AdvancedAntiCrawlerAnalyzer.java`，它会：

1. **Hook 所有关键 API**
   - `location.href` / `location.replace` / `location.assign`
   - `window.open`
   - `eval` / `Function`
   - `setTimeout` / `setInterval`
   - `Object.defineProperty`
   - `document.write`

2. **记录完整的调用栈**
   - 每次 API 被调用时，记录调用栈
   - 可以追溯到混淆代码的具体位置

3. **阻止 about:blank 跳转**
   - 自动阻止所有到 `about:blank` 的跳转
   - 同时记录触发跳转的代码位置

**使用方法**：

```java
// 在 PlaywrightService.createNewContext() 中添加
AdvancedAntiCrawlerAnalyzer.attachAdvancedMonitor(context);
AdvancedAntiCrawlerAnalyzer.attachCodeBeautifier(context);
```

**效果**：
```log
[HOOK] location.href = about:blank
  参数: ["about:blank"]
  调用栈:
    at checkBrowser (main.js:1234:56)
    at init (main.js:789:12)
    at <anonymous> (main.js:1:1)
[BLOCKED] 阻止跳转到 about:blank
```

---

### 方案 4：使用命令行工具（批量处理）

#### 4.1 安装工具

```bash
# 安装 js-beautify
npm install -g js-beautify

# 安装 prettier
npm install -g prettier
```

#### 4.2 反混淆文件

```bash
# 使用 js-beautify
js-beautify 20260123_003117_main.js > main_beautified.js

# 使用 prettier
prettier --write 20260123_003117_main.js
```

#### 4.3 批量处理

```bash
# 批量反混淆所有 JS 文件
for file in *.js; do
  js-beautify "$file" > "${file%.js}_beautified.js"
done
```

---

## 工具推荐

### 在线工具

| 工具 | 网址 | 特点 | 推荐度 |
|------|------|------|--------|
| JS Nice | http://jsnice.org/ | 还原变量名 | ⭐⭐⭐⭐⭐ |
| JS Beautifier | https://beautifier.io/ | 格式化 | ⭐⭐⭐⭐ |
| UnPacker | https://matthewfl.com/unPacker.html | 解包 | ⭐⭐⭐ |
| JSDetox | http://relentless-coding.org/projects/jsdetox | 分析恶意代码 | ⭐⭐⭐ |

### 浏览器扩展

| 扩展 | 功能 | 推荐度 |
|------|------|--------|
| JavaScript Deobfuscator | 自动反混淆 | ⭐⭐⭐⭐ |
| Tampermonkey | 注入自定义脚本 | ⭐⭐⭐⭐⭐ |
| EditThisCookie | 管理 Cookie | ⭐⭐⭐⭐ |

### 命令行工具

| 工具 | 安装命令 | 推荐度 |
|------|---------|--------|
| js-beautify | `npm install -g js-beautify` | ⭐⭐⭐⭐ |
| prettier | `npm install -g prettier` | ⭐⭐⭐⭐ |
| uglify-js | `npm install -g uglify-js` | ⭐⭐⭐ |

---

## 实战步骤

### 步骤 1：下载混淆的 JS 文件

**已完成**：
```
logs/anti-crawler-analysis/20260123_003117_main.js
logs/anti-crawler-analysis/20260123_003117_index.js
logs/anti-crawler-analysis/20260123_003117_browser-check.min.js
```

### 步骤 2：使用 JS Nice 反混淆

1. 打开 http://jsnice.org/
2. 复制 `main.js` 的内容（可能太大，先复制一部分）
3. 粘贴到 JS Nice
4. 点击 "Nicify JavaScript"
5. 查看还原后的代码

### 步骤 3：使用 Chrome DevTools 动态调试

1. 打开 Boss 直聘网站
2. 打开 DevTools（F12）
3. 在 Console 中粘贴以下代码：

```javascript
// Hook location.href
const originalHrefDescriptor = Object.getOwnPropertyDescriptor(Location.prototype, 'href');
Object.defineProperty(Location.prototype, 'href', {
  get: originalHrefDescriptor.get,
  set: function(value) {
    console.log('[HOOK] location.href =', value);
    console.trace(); // 打印调用栈
    
    if (value && value.includes('about:blank')) {
      debugger; // 触发断点
      console.error('[BLOCKED] 阻止跳转到 about:blank');
      return; // 阻止跳转
    }
    
    return originalHrefDescriptor.set.call(this, value);
  }
});

console.log('✓ Hook 已安装，现在会拦截所有 location.href 的修改');
```

4. 刷新页面
5. 当触发跳转时，会自动暂停在 `debugger` 处
6. 查看 Call Stack，找到触发跳转的代码

### 步骤 4：分析调用栈

当断点触发时，你会看到类似这样的调用栈：

```
(anonymous) @ main.js:1234
checkBrowser @ main.js:789
init @ main.js:456
(anonymous) @ main.js:1
```

点击每一层，查看对应的代码，找到检测逻辑。

### 步骤 5：找到检测逻辑

常见的检测逻辑：

```javascript
// 检测 webdriver
if (navigator.webdriver) {
  location.href = 'about:blank';
}

// 检测 chrome 对象
if (!window.chrome) {
  location.href = 'about:blank';
}

// 检测 plugins
if (navigator.plugins.length === 0) {
  location.href = 'about:blank';
}
```

### 步骤 6：针对性隐藏特征

根据找到的检测逻辑，在 Stealth 脚本中添加对应的隐藏代码。

---

## 高级技巧

### 技巧 1：使用 Proxy 拦截所有属性访问

```javascript
// 监控 navigator 的所有属性访问
const handler = {
  get(target, prop) {
    console.log(`[PROXY] navigator.${prop} 被访问`);
    console.trace();
    return target[prop];
  }
};

const proxiedNavigator = new Proxy(navigator, handler);

// 替换 window.navigator
Object.defineProperty(window, 'navigator', {
  get: () => proxiedNavigator
});
```

### 技巧 2：使用 Performance API 分析

```javascript
// 记录所有性能条目
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('[PERFORMANCE]', entry.name, entry.entryType);
  }
});

observer.observe({ entryTypes: ['resource', 'navigation', 'mark', 'measure'] });
```

### 技巧 3：使用 MutationObserver 监控 DOM 变化

```javascript
// 监控所有 DOM 变化
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    console.log('[MUTATION]', mutation.type, mutation.target);
    
    // 检查新增的 script 标签
    mutation.addedNodes.forEach((node) => {
      if (node.tagName === 'SCRIPT') {
        console.log('[SCRIPT] 新增脚本:', node.src || node.textContent.substring(0, 100));
      }
    });
  });
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeOldValue: true
});
```

### 技巧 4：使用 Fiddler/Charles 抓包

**Fiddler**（Windows）或 **Charles**（Mac）可以：
- 拦截所有 HTTP/HTTPS 请求
- 修改请求和响应
- 替换 JS 文件（用反混淆后的版本）

**步骤**：
1. 安装 Fiddler 或 Charles
2. 配置 HTTPS 解密
3. 拦截 `main.js` 的响应
4. 替换为反混淆后的版本
5. 在反混淆的代码中添加 `console.log` 或 `debugger`

---

## 总结

### 推荐的破解流程

1. **第一步：使用 JS Nice 反混淆**
   - 快速了解代码结构
   - 还原变量名

2. **第二步：使用 Chrome DevTools 动态调试**
   - Hook 关键 API
   - 设置断点
   - 查看调用栈

3. **第三步：使用我提供的高级监控脚本**
   - 自动记录所有可疑的 API 调用
   - 阻止 about:blank 跳转
   - 记录完整的调用栈

4. **第四步：分析并针对性隐藏特征**
   - 根据找到的检测逻辑
   - 在 Stealth 脚本中添加对应的隐藏代码

### 核心思想

> **不要盲目地隐藏特征，而是要先找到对方检测了哪些特征，然后针对性地隐藏。**

这就是为什么动态调试比静态分析更有效的原因！

---

## 下一步

### 立即行动

1. ✅ 在 `PlaywrightService.createNewContext()` 中添加：
   ```java
   AdvancedAntiCrawlerAnalyzer.attachAdvancedMonitor(context);
   ```

2. ✅ 重启应用

3. ✅ 查看日志，找到触发 `about:blank` 的调用栈

4. ✅ 根据调用栈，找到混淆代码的具体位置

5. ✅ 使用 Chrome DevTools 在该位置设置断点

6. ✅ 分析检测逻辑

7. ✅ 针对性地隐藏特征

---

**祝破解顺利！🔓**

