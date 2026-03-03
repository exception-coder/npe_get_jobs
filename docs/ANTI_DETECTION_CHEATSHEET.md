# Playwright 反检测配置速查表

## 🎯 核心配置（必须）

### 1. 启动参数
```java
.setHeadless(false)  // ⚠️ 必须！
.setArgs(List.of(
    "--disable-blink-features=AutomationControlled",  // ⚠️ 最重要！
    "--exclude-switches=enable-automation",
    "--disable-infobars"
))
```

### 2. 反检测脚本
```javascript
// 隐藏 webdriver
Object.defineProperty(navigator, 'webdriver', { get: () => undefined });

// 删除 ChromeDriver 变量
Object.keys(window).forEach(k => {
  if (k.startsWith('$cdc_') || k.startsWith('$chrome')) delete window[k];
});

// 伪装 plugins
Object.defineProperty(navigator, 'plugins', { get: () => [...] });
```

---

## 📊 检测点速查

| 检测点 | 正常值 | 异常值 | 风险 |
|--------|--------|--------|------|
| `navigator.webdriver` | `undefined` | `true` | 🔴 |
| `$cdc_*` 变量 | 不存在 | 存在 | 🔴 |
| `navigator.plugins.length` | `> 0` | `0` | 🔴 |
| `navigator.languages.length` | `> 1` | `≤ 1` | 🟡 |
| `navigator.hardwareConcurrency` | `4-16` | `1` | 🟡 |
| `window.chrome` | 存在 | 不存在 | 🔴 |

---

## 🔍 快速验证

### 浏览器控制台
```javascript
// 一键检测
console.log({
  webdriver: navigator.webdriver,
  cdc: Object.keys(window).filter(k => k.startsWith('$cdc_')),
  plugins: navigator.plugins.length,
  chrome: typeof window.chrome
});
```

### Java 代码
```java
// 快速验证
boolean passed = AntiDetectionValidator.quickValidate(page);

// 完整报告
Map<String, Object> results = AntiDetectionValidator.validate(page);
AntiDetectionValidator.printReport(results);
```

---

## ⚠️ 常见错误

### ❌ 错误配置
```java
.setHeadless(true)  // 容易被检测
.setSlowMo(0)       // 操作太快
```

### ✅ 正确配置
```java
.setHeadless(false)  // 使用有头模式
.setSlowMo(50)       // 减慢操作
```

---

## 🚀 快速开始

### 1. 启动服务
```java
@Autowired
private PlaywrightService playwrightService;
```

### 2. 获取页面
```java
Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);
```

### 3. 验证配置
```java
AntiDetectionValidator.quickValidate(page);
```

### 4. 正常使用
```java
page.navigate("https://www.zhipin.com/");
// 所有反检测配置已自动生效！
```

---

## 📝 检查清单

启动前检查：
- [ ] `setHeadless(false)` ✅
- [ ] `--disable-blink-features=AutomationControlled` ✅
- [ ] 加载 Chrome 扩展 ✅
- [ ] 添加反检测脚本 ✅
- [ ] 设置真实 User-Agent ✅

运行时检查：
- [ ] `navigator.webdriver === undefined` ✅
- [ ] 无 `$cdc_` 变量 ✅
- [ ] `plugins.length > 0` ✅
- [ ] `window.chrome` 存在 ✅
- [ ] 未被重定向到验证页面 ✅

---

## 🔧 故障排查

### 问题：仍然被检测
1. 运行 `AntiDetectionValidator.validate(page)`
2. 检查控制台是否有 `[STEALTH]` 日志
3. 查看 `logs/anti-crawler-detection/boss-forensic.log`
4. 手动验证关键属性

### 问题：页面加载慢
1. 检查是否使用了 `setSlowMo()`
2. 减少不必要的 `waitForTimeout()`
3. 使用 `waitForSelector()` 替代固定等待

### 问题：扩展未加载
1. 检查扩展文件是否存在
2. 查看启动参数是否正确
3. 验证 `window.chrome.runtime` 是否存在

---

## 📚 相关文档

- [完整配置指南](./ANTI_DETECTION_GUIDE.md)
- [Security-JS 分析报告](../logs/anti-crawler-analysis/security-js-analysis.md)
- [PlaywrightService 源码](../src/main/java/getjobs/common/service/PlaywrightService.java)

---

## 💡 最佳实践

1. **始终使用有头模式**
2. **加载真实 Chrome 扩展**
3. **定期验证反检测配置**
4. **模拟人类操作行为**
5. **监控取证日志**

---

**快速联系**: 查看 [完整文档](./ANTI_DETECTION_GUIDE.md) 获取更多信息





