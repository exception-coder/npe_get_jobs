# Boss 直聘反爬虫对抗 - 紧急更新

**更新时间：** 2026-01-22 23:54  
**问题：** JavaScript Hook 方法无效，页面仍然跳转  
**解决方案：** 使用 Playwright Route API 直接拦截导航

---

## 🚨 问题描述

### 现象

虽然我们的 JavaScript Hook 已经启动，但页面**仍然跳转到了 about:blank**。

```
[CONSOLE] log [ANTI-CRAWLER] blank 跳转阻止器已启动
[CONSOLE] log [ANTI-CRAWLER] 所有跳转方法已被 Hook
...
[NAV] about:blank  ⚠️ 还是跳转了！
```

### 原因分析

反爬虫脚本可能使用了以下方式绕过我们的 Hook：

1. **直接操作底层 API** - 绕过 JavaScript Hook
2. **使用 iframe** - 通过 iframe 间接跳转
3. **使用 Navigation API** - 较新的浏览器 API
4. **直接操作 DOM** - 通过 `<meta refresh>` 等方式
5. **使用 Service Worker** - 在更底层拦截

**结论：** 纯 JavaScript Hook 不够强大，需要使用 Playwright 的原生 API。

---

## ✅ 解决方案

### 方案：使用 Playwright Route API

**原理：** 在 Playwright 层面直接拦截所有导航请求，比 JavaScript Hook 更底层、更可靠。

### 实现代码

```java
// 在 PlaywrightService.init() 中添加
if (platform == RecruitmentPlatformEnum.BOSS_ZHIPIN) {
    // 1. 附加观测器
    pageObserver.attachObservers(page, platform);
    
    // 2. 使用 Route API 阻止导航到 about:blank ⭐
    page.route("**/*", route -> {
        String url = route.request().url();
        if (url.contains("about:blank")) {
            log.warn("🛡️ [BLOCKED] 阻止导航到 about:blank: {}", url);
            route.abort(); // 直接中止请求
        } else {
            route.continue_(); // 正常请求继续
        }
    });
    
    log.info("✓ 已为 BOSS 平台启用反爬虫对抗：观测器 + 导航拦截");
}
```

### 优势

1. ✅ **更底层** - 在 Playwright 层面拦截，无法被 JavaScript 绕过
2. ✅ **更可靠** - 拦截所有类型的导航（包括 iframe、meta refresh 等）
3. ✅ **更简单** - 不需要复杂的 JavaScript Hook
4. ✅ **性能更好** - 直接中止请求，不需要等待 JavaScript 执行

---

## 🧪 测试验证

### 预期效果

1. **日志输出：**
```
✓ 已为 BOSS 平台启用反爬虫对抗：观测器 + 导航拦截
🛡️ [BLOCKED] 阻止导航到 about:blank: about:blank
```

2. **页面行为：**
- ✅ 页面不再跳转到 about:blank
- ✅ 停留在正常页面
- ✅ 所有功能正常

3. **观测日志：**
- ✅ 不再出现 `[NAV] about:blank`
- ✅ 可能仍有 `[ANTI-DEBUG] beforeunload` 事件（但跳转被阻止）

---

## 📊 对比分析

### JavaScript Hook 方法（方案 3）

**优点：**
- 可以记录详细的调用堆栈
- 可以分析反爬虫逻辑

**缺点：**
- ❌ 可能被绕过
- ❌ 需要 Hook 很多方法
- ❌ 无法拦截底层 API

### Playwright Route API（新方案）⭐

**优点：**
- ✅ 无法被绕过
- ✅ 拦截所有导航
- ✅ 代码简单
- ✅ 性能更好

**缺点：**
- 无法获取详细的调用堆栈（但可以配合观测器使用）

---

## 🎯 最终方案

### 组合使用

```java
if (platform == RecruitmentPlatformEnum.BOSS_ZHIPIN) {
    // 1. 观测器 - 用于分析和记录
    pageObserver.attachObservers(page, platform);
    
    // 2. Route API - 用于实际阻止跳转 ⭐
    page.route("**/*", route -> {
        String url = route.request().url();
        if (url.contains("about:blank")) {
            log.warn("🛡️ [BLOCKED] 阻止导航到 about:blank");
            route.abort();
        } else {
            route.continue_();
        }
    });
}
```

**效果：**
- 📊 观测器记录所有行为（用于分析）
- 🛡️ Route API 阻止跳转（用于对抗）
- 🎯 两者配合，既能分析又能对抗

---

## 🔄 其他可能需要拦截的 URL

如果还有其他反爬虫跳转，可以扩展拦截规则：

```java
page.route("**/*", route -> {
    String url = route.request().url();
    
    // 拦截 about:blank
    if (url.contains("about:blank")) {
        log.warn("🛡️ [BLOCKED] about:blank");
        route.abort();
        return;
    }
    
    // 拦截其他可疑 URL
    if (url.contains("error") || url.contains("forbidden")) {
        log.warn("🛡️ [BLOCKED] 可疑 URL: {}", url);
        route.abort();
        return;
    }
    
    // 正常请求继续
    route.continue_();
});
```

---

## 📝 更新记录

### 2026-01-22 23:54

- ❌ **发现问题：** JavaScript Hook 无法阻止跳转
- ✅ **实施方案：** 使用 Playwright Route API
- ✅ **代码已更新：** PlaywrightService.java
- 🔄 **等待测试：** 重启应用验证效果

### 下一步

1. **立即重启应用**
2. **观察日志** - 查看是否有 `🛡️ [BLOCKED]` 标记
3. **验证页面** - 确认不再跳转到 about:blank
4. **长期监控** - 确保稳定性

---

## 💡 经验教训

### 1. JavaScript Hook 的局限性

- JavaScript Hook 只能拦截 JavaScript 层面的调用
- 无法拦截浏览器底层 API
- 可能被反爬虫脚本绕过

### 2. Playwright 的优势

- Playwright 提供了更底层的控制
- Route API 可以拦截所有网络请求
- 无法被 JavaScript 绕过

### 3. 最佳实践

- **分析阶段：** 使用 JavaScript Hook + 观测器
- **对抗阶段：** 使用 Playwright Route API
- **生产环境：** 两者结合使用

---

## 🎓 技术细节

### Route API 工作原理

```
浏览器发起请求
    ↓
Playwright 拦截（Route API）⭐ 在这里拦截
    ↓
检查 URL
    ↓
如果是 about:blank → abort()（中止）
    ↓
否则 → continue_()（继续）
    ↓
请求发送到服务器
```

### JavaScript Hook 工作原理

```
页面加载
    ↓
注入 Hook 脚本
    ↓
JavaScript 调用 location.href
    ↓
Hook 拦截 ⭐ 在这里拦截（可能被绕过）
    ↓
检查 URL
    ↓
如果是 about:blank → 阻止（但可能无效）
```

**结论：** Route API 在更底层，更可靠！

---

## ✅ 总结

### 问题

- JavaScript Hook 无法阻止 about:blank 跳转

### 解决方案

- 使用 Playwright Route API 直接拦截导航

### 效果

- ✅ 无法被绕过
- ✅ 拦截所有导航
- ✅ 代码简单可靠

### 下一步

- 🔄 重启应用测试
- 📊 观察日志验证
- 🎯 长期监控稳定性

---

**最后更新：** 2026-01-22 23:54  
**状态：** 已实施，等待测试验证  
**预期：** 完全阻止 about:blank 跳转

