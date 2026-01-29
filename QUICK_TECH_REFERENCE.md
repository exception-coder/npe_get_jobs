# 技术问题快速参考卡片

快速查阅常见技术问题的解决方案。详细说明请查看 `TECHNICAL_ISSUES.md`。

---

## 🔥 最常见问题

### 问题 1: Spring Bean 名称冲突

**错误信息**: `Cannot register alias 'xxx' for name 'yyy'`

**快速修复**:
```java
// ❌ 错误
@Bean
public TaskExecutor taskExecutor() { }

// ✅ 正确
@Bean(name = "infrastructureTaskExecutor")
public TaskExecutor infrastructureTaskExecutor() { }
```

**原因**: 与 Spring 框架保留名称冲突（`taskExecutor`、`applicationTaskExecutor`）

---

### 问题 2: @ConfigurationProperties 创建重复 Bean

**错误信息**: `required a single bean, but 2 were found`

**快速修复**:
```java
// ❌ 错误 - 同时使用两个注解
@Component
@ConfigurationProperties(prefix = "xxx")
public class XxxProperties { }

// ✅ 正确 - 方案 1（推荐）
@ConfigurationProperties(prefix = "xxx")  // 移除 @Component
public class XxxProperties { }

@Configuration
@EnableConfigurationProperties(XxxProperties.class)
public class XxxConfig { }

// ✅ 正确 - 方案 2
@Component
@ConfigurationProperties(prefix = "xxx")
public class XxxProperties { }
// 不使用 @EnableConfigurationProperties
```

**原因**: `@Component` 和 `@EnableConfigurationProperties` 都会创建 Bean

---

### 问题 3: Playwright Page 对象失效

**错误信息**: `PlaywrightException: Object doesn't exist: response@xxx`

**快速修复**:
```java
// ❌ 错误 - 直接调用
page.querySelector(".job-card");

// ✅ 正确 - 使用重试
PageHealthChecker.executeWithRetry(
    page,
    () -> page.querySelector(".job-card"),
    "查询岗位卡片",
    2  // 重试 2 次
);
```

**原因**: Playwright 内部对象被清理，但页签还在

---

### 问题 4: Spring Bean 初始化顺序

**错误信息**: 数据库查询为空，但数据明明存在

**快速修复**:
```java
// ✅ 数据恢复服务 - 最高优先级
@Component("dataRestoreInitializer")
@Order(Ordered.HIGHEST_PRECEDENCE)
public class DataRestoreListener {
    @PostConstruct
    public void init() {
        // 恢复数据
    }
}

// ✅ 依赖数据的服务 - 显式依赖
@Service
@DependsOn("dataRestoreInitializer")
public class PlaywrightService {
    @PostConstruct
    public void init() {
        // 使用数据
    }
}
```

**原因**: Bean 初始化顺序导致数据还未恢复就被使用

---

### 问题 5: Univer 表格切换触发 unit id 冲突

**错误信息**: `[UniverInstanceService]: cannot create a unit with the same unit id`

**快速修复**:
```ts
// ❌ 错误 - 直接复用快照里的 workbook id
const workbookConfig = JSON.parse(document.content);

// ✅ 正确 - 每次挂载生成唯一 ID
const workbookConfig = snapshot ? { ...snapshot } : {};
workbookConfig.id = `team-spreadsheet-${document.id}-${Date.now()}-${seed++}`;
```

**原因**: 切换文档时沿用了旧快照中的 `workbook.id`，Univer 认为这是同一个 unit，导致 `createWorkbook` 拒绝创建；强制覆盖成全局唯一 ID 即可。

---

## 🛠️ 配置相关

### SQLite 性能优化配置

```yaml
spring:
  datasource:
    url: >
      jdbc:sqlite:${user.home}/getjobs/npe_get_jobs.db
      ?journal_mode=WAL           # ← WAL 模式，支持并发读
      &synchronous=NORMAL         # ← 平衡性能与安全
      &cache_size=-64000          # ← 64MB 缓存
      &foreign_keys=ON
      &busy_timeout=30000
    
    hikari:
      maximum-pool-size: 5        # ← WAL 模式用 5-10
      minimum-idle: 2
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000
  
  jpa:
    hibernate:
      ddl-auto: update            # ← 保留数据
```

---

### Actuator 健康检查配置

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,info,refresh
  endpoint:
    health:
      enabled: true
      show-details: always

health:
  ai-models:
    enabled: true
    check-type: PING              # ← 生产环境用 PING
    connection-timeout: 5000
    slow-response-threshold: 3000
```

---

### 默认 HTTP 压缩

```yaml
server:
  compression:
    enabled: true                  # ← 默认启用 GZIP 压缩
    mime-types: >
      application/json,application/xml,text/html,
      text/xml,text/plain,application/javascript,text/css
    min-response-size: 2048        # ← 超过 2KB 的响应才压缩
```

**知识点**: Spring Boot 自带的 `server.compression` 能满足大多数 REST 响应压缩需求，选择常见文本 MIME + 2KB 阈值即可平衡 CPU 与带宽。

---

## 📋 常用代码片段

### Playwright 操作重试

```java
// 导航重试
PageHealthChecker.executeWithRetry(
    page,
    () -> {
        page.navigate(url);
        return null;
    },
    "导航到目标页面",
    2
);

// 查询重试
ElementHandle element = PageHealthChecker.executeWithRetry(
    page,
    () -> page.querySelector(selector),
    "查询元素",
    2
);

// 滚动重试
PageHealthChecker.executeWithRetry(
    page,
    () -> {
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
        return null;
    },
    "滚动到底部",
    2
);
```

---

### Cookie 保存和恢复

```java
// 保存 Cookie
public void saveCookie(Page page, RecruitmentPlatformEnum platform) {
    String cookieJson = getCookiesAsJson(page);
    ConfigEntity config = configService.loadByPlatformType(platform.getPlatformCode());
    config.setCookieData(cookieJson);
    configService.save(config);
}

// 恢复 Cookie（在 navigate 之前）
public void loadCookie(Page page, RecruitmentPlatformEnum platform) {
    ConfigEntity config = configService.loadByPlatformType(platform.getPlatformCode());
    if (config != null && config.getCookieData() != null) {
        List<Cookie> cookies = loadCookiesFromJson(config.getCookieData());
        page.context().addCookies(cookies);  // ← 在 navigate 之前
    }
}
```

---

### 配置属性类标准写法

```java
// 配置属性类
@Data
@ConfigurationProperties(prefix = "app.feature")
public class FeatureProperties {
    private boolean enabled = true;
    private int timeout = 5000;
}

// 配置类
@Configuration
@EnableConfigurationProperties(FeatureProperties.class)
public class FeatureConfig {
    
    private final FeatureProperties properties;
    
    public FeatureConfig(FeatureProperties properties) {
        this.properties = properties;
    }
}
```

---

## 🎯 设计模式快速参考

### 模板方法模式

```java
// 抽象基类
public abstract class AbstractService {
    
    // 模板方法
    public final Result execute() {
        prepare();
        Result result = doExecute();  // 抽象方法
        cleanup();
        return result;
    }
    
    protected abstract Result doExecute();
    
    protected void prepare() { }      // 钩子方法
    protected void cleanup() { }      // 钩子方法
}

// 具体实现
public class ConcreteService extends AbstractService {
    
    @Override
    protected Result doExecute() {
        // 具体实现
    }
}
```

---

### 策略模式

```java
// 策略接口
public interface CheckStrategy {
    boolean check(Model model);
}

// 具体策略
public class PingCheckStrategy implements CheckStrategy {
    public boolean check(Model model) { }
}

public class ApiCallCheckStrategy implements CheckStrategy {
    public boolean check(Model model) { }
}

// 使用策略
public class HealthChecker {
    private final CheckStrategy strategy;
    
    public boolean check(Model model) {
        return strategy.check(model);
    }
}
```

---

## 🚨 注意事项

### Spring 保留 Bean 名称

**避免使用**以下名称：
- `taskExecutor`
- `applicationTaskExecutor`
- `dataSource`
- `entityManagerFactory`
- `transactionManager`

### @PostConstruct 执行顺序

```
Bean 实例化 → 依赖注入 → @PostConstruct（按 @Order 排序）→ 事件监听
```

### Playwright 最佳实践

1. ✅ 所有 Page 操作包装重试
2. ✅ 导航前加载 Cookie
3. ✅ 登录成功立即保存 Cookie
4. ✅ 长时间操作定期检查 Page 健康
5. ✅ 使用单一共享 BrowserContext

### SQLite 最佳实践

1. ✅ 生产环境使用 WAL 模式
2. ✅ 使用 `ddl-auto: update`（不要用 `create-drop`）
3. ✅ 连接池大小：WAL 模式 5-10，传统模式 1
4. ✅ 增大缓存提升性能（64MB+）
5. ✅ 备份时备份 3 个文件（.db、.db-wal、.db-shm）

---

## 🔍 问题排查清单

### 应用启动失败

- [ ] 检查是否有 Bean 名称冲突
- [ ] 检查是否有重复 Bean 定义
- [ ] 检查 Bean 初始化顺序
- [ ] 查看完整的启动日志
- [ ] 检查配置文件语法

### 数据查询为空

- [ ] 检查数据是否已恢复
- [ ] 检查 Bean 初始化顺序
- [ ] 检查配置文件路径
- [ ] 查看数据库文件是否存在

### Page 操作失败

- [ ] 检查 Page 是否 closed
- [ ] 查看是否有 "Object doesn't exist" 异常
- [ ] 检查是否添加重试机制
- [ ] 查看操作前是否有异常

### Cookie 未保存/加载

- [ ] 检查保存时机（登录成功后）
- [ ] 检查加载时机（navigate 之前）
- [ ] 查看 Cookie 字段是否为空
- [ ] 检查 JSON 序列化是否正确

---

## 📚 相关文档

- **完整技术问题**: `TECHNICAL_ISSUES.md`
- **更新日志**: `CHANGELOG.md`
- **Playwright 分析**: `docs/PLAYWRIGHT_PAGE_LIFECYCLE_ANALYSIS.md`
- **健康检查**: `src/main/java/getjobs/common/infrastructure/health/`

---

**使用建议**:
1. 遇到问题先查本文档
2. 找不到再查 `TECHNICAL_ISSUES.md`
3. 问题解决后更新本文档
4. 定期回顾，避免重复踩坑

---

**最后更新**: 2025-11-14

