# Spring Boot 多数据源配置完整指南

## 📋 目录

- [项目背景](#项目背景)
- [配置目标](#配置目标)
- [最终配置方案](#最终配置方案)
- [配置历程](#配置历程)
- [常见错误及解决方案](#常见错误及解决方案)
- [最佳实践](#最佳实践)
- [验证测试](#验证测试)

---

## 🎯 项目背景

本项目需要同时支持两个数据源：
1. **SQLite**：作为主数据源，存储核心业务数据
2. **MySQL**：作为辅助数据源，用于特定业务模块

两个数据源需要完全隔离，互不干扰。

---

## 🎯 配置目标

- ✅ SQLite 作为主数据源（`@Primary`），存储核心业务数据
- ✅ MySQL 作为辅助数据源，仅用于特定模块
- ✅ 两个数据源完全隔离，互不影响
- ✅ 支持 JPA 和事务管理
- ✅ 每个数据源独立的 EntityManagerFactory 和 TransactionManager

---

## ✅ 最终配置方案

### 1. 项目结构

```
npe_get_jobs/
├── src/main/java/getjobs/
│   ├── GetJobsApplication.java                    # 主应用类
│   └── common/infrastructure/datasource/
│       ├── PrimaryDataSourceConfig.java           # SQLite 主数据源配置
│       ├── MySQLDataSourceConfig.java             # MySQL 数据源配置
│       └── MULTI_DATASOURCE_CONFIG_GUIDE.md       # 本文档
│   └── modules/
│       ├── auth/infrastructure/                   # SQLite Repository
│       ├── sasl/repository/                       # SQLite Repository
│       └── datasource/mysql/
│           ├── domain/                            # MySQL 实体
│           ├── repository/                        # MySQL Repository
│           └── web/                               # MySQL Controller
└── src/main/resources/
    └── application.yml                            # 配置文件
```

### 2. 配置文件（application.yml）

```yaml
spring:
  datasource:
    # SQLite 主数据源（默认数据源）
    url: 'jdbc:sqlite:${user.home}/getjobs/npe_get_jobs.db?journal_mode=WAL&synchronous=NORMAL&cache_size=-64000&foreign_keys=ON&busy_timeout=30000'
    driver-class-name: org.sqlite.JDBC
    hikari:
      maximum-pool-size: 5
      minimum-idle: 2
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000
    username:
    password:
    # MySQL 数据源配置
    mysql:
      url: jdbc:mysql://localhost:3306/npe_get_jobs?useSSL=false&serverTimezone=UTC&characterEncoding=utf8
      username: root
      password: your_password
      driver-class-name: com.mysql.cj.jdbc.Driver
      hikari:
        maximum-pool-size: 10
        minimum-idle: 5
        connection-timeout: 30000
        idle-timeout: 600000
        max-lifetime: 1800000
  jpa:
    # 默认 JPA 配置（SQLite）
    hibernate:
      ddl-auto: update
    show-sql: false
    properties:
      hibernate:
        format_sql: true
        dialect: org.hibernate.community.dialect.SQLiteDialect
    database-platform: org.hibernate.community.dialect.SQLiteDialect
```

### 3. 主数据源配置（PrimaryDataSourceConfig.java）

**关键点：**
- 手动创建 DataSource Bean 并标记为 `@Primary`
- 手动创建 EntityManagerFactory 和 TransactionManager
- 明确指定包扫描路径
- 使用 `@EnableJpaRepositories` 明确指定 `entityManagerFactoryRef` 和 `transactionManagerRef`

```java
@Configuration
@EnableTransactionManagement
@EntityScan(basePackages = {
    "getjobs.modules.auth",
    "getjobs.modules.sasl",
    "getjobs.repository.entity",
    "getjobs.modules.webdocs.domain"
})
@EnableJpaRepositories(
    basePackages = {
        "getjobs.modules.sasl.repository",
        "getjobs.modules.auth.infrastructure",
        "getjobs.repository",
        "getjobs.modules.webdocs.repository"
    },
    entityManagerFactoryRef = "entityManagerFactory",
    transactionManagerRef = "transactionManager"
)
public class PrimaryDataSourceConfig {
    
    @Bean(name = "dataSource")
    @Primary
    public DataSource primaryDataSource() {
        // 创建 SQLite 数据源
    }
    
    @Bean(name = "entityManagerFactory")
    @Primary
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(
            @Qualifier("dataSource") DataSource dataSource) {
        // 创建 EntityManagerFactory
    }
    
    @Bean(name = "transactionManager")
    @Primary
    @DependsOn("entityManagerFactory")
    public PlatformTransactionManager transactionManager(
            @Qualifier("entityManagerFactory") LocalContainerEntityManagerFactoryBean entityManagerFactoryBean) {
        // 创建 TransactionManager
    }
}
```

### 4. MySQL 数据源配置（MySQLDataSourceConfig.java）

**关键点：**
- 只扫描 MySQL 相关的包
- 明确指定 `entityManagerFactoryRef` 和 `transactionManagerRef`
- 使用不同的 Bean 名称避免冲突

```java
@Configuration
@EnableTransactionManagement
@EntityScan(basePackages = {
    "getjobs.modules.datasource.mysql.domain"
})
@EnableJpaRepositories(
    basePackages = {
        "getjobs.modules.datasource.mysql.repository"
    },
    entityManagerFactoryRef = "mysqlEntityManagerFactory",
    transactionManagerRef = "mysqlTransactionManager"
)
public class MySQLDataSourceConfig {
    
    @Bean(name = "mysqlDataSource")
    public DataSource mysqlDataSource() {
        // 创建 MySQL 数据源
    }
    
    @Bean(name = "mysqlEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean mysqlEntityManagerFactory(
            EntityManagerFactoryBuilder builder,
            @Qualifier("mysqlDataSource") DataSource dataSource) {
        // 创建 MySQL EntityManagerFactory
    }
    
    @Bean(name = "mysqlTransactionManager")
    public PlatformTransactionManager mysqlTransactionManager(
            @Qualifier("mysqlEntityManagerFactory") EntityManagerFactory entityManagerFactory) {
        // 创建 MySQL TransactionManager
    }
}
```

---

## 📚 配置历程

### 阶段 1：初始配置（失败 ❌）

**配置方式：**
- 只配置了 MySQL 数据源
- 依赖 Spring Boot 自动配置创建主数据源
- 在 `GetJobsApplication` 中使用 `@EnableJpaRepositories`

**问题：**
- Spring Boot 自动配置无法正确处理多数据源场景
- Repository 扫描混乱，部分 Repository 找不到对应的数据源

**错误信息：**
```
Parameter 0 of constructor in getjobs.modules.auth.service.RefreshTokenService 
required a bean of type 'getjobs.modules.auth.infrastructure.RefreshTokenRepository' 
that could not be found.
```

---

### 阶段 2：添加 MySQL 配置（失败 ❌）

**配置方式：**
- 创建了 `MySQLDataSourceConfig` 配置类
- 配置了 MySQL 的 DataSource、EntityManagerFactory 和 TransactionManager
- 在主应用类中移除了 `@EnableJpaRepositories`

**问题：**
- 主数据源的 Repository 无法被扫描到
- Spring Boot 不再自动创建主数据源的 EntityManagerFactory

**错误信息：**
```
Parameter 0 of constructor in getjobs.modules.auth.service.RefreshTokenService 
required a bean named 'entityManagerFactory' that could not be found.
```

**解决方案：**
- 需要明确配置主数据源的 EntityManagerFactory 和 TransactionManager
- 不能依赖 Spring Boot 的自动配置

---

### 阶段 3：添加主数据源配置（失败 ❌）

**配置方式：**
- 创建了 `PrimaryDataSourceConfig` 配置类
- 配置了主数据源的 EntityManagerFactory 和 TransactionManager
- 但没有手动创建主数据源的 DataSource Bean

**问题：**
- 禁用了 Spring Boot 自动配置后，主数据源的 DataSource 没有被创建
- EntityManagerFactory 找不到对应的 DataSource

**错误信息：**
```
Parameter 0 of constructor in getjobs.modules.auth.service.RefreshTokenService 
required a bean named 'entityManagerFactory' that could not be found.
```

**解决方案：**
- 需要手动创建主数据源的 DataSource Bean 并标记为 `@Primary`

---

### 阶段 4：手动创建主数据源（失败 ❌）

**配置方式：**
- 手动创建了主数据源的 DataSource Bean
- 但禁用了 Spring Boot 的自动配置（`DataSourceAutoConfiguration` 和 `HibernateJpaAutoConfiguration`）

**问题：**
- 数据源绑定错误，主数据源的 Repository 被错误地分配到了 MySQL 数据源
- 查询 SQLite 表时，却在 MySQL 数据库中查找

**错误信息：**
```
Table 'npe_get_jobs.sys_role' doesn't exist
```

**分析：**
- `sys_role` 表应该在 SQLite 数据库中
- 错误提示在 MySQL 数据库中查找，说明 `RoleRepository` 被错误地分配到了 MySQL 数据源

**解决方案：**
- 恢复 Spring Boot 的自动配置（因为我们的手动配置会覆盖自动配置）
- 确保主数据源的 DataSource、EntityManagerFactory 和 TransactionManager 都正确标记为 `@Primary`
- 在 `@EnableJpaRepositories` 中明确指定 `entityManagerFactoryRef` 和 `transactionManagerRef`

---

### 阶段 5：最终配置（成功 ✅）

**配置方式：**
- 手动创建主数据源的 DataSource Bean 并标记为 `@Primary`
- 手动创建主数据源的 EntityManagerFactory 和 TransactionManager 并标记为 `@Primary`
- 在 `@EnableJpaRepositories` 中明确指定 `entityManagerFactoryRef` 和 `transactionManagerRef`
- 不排除 Spring Boot 的自动配置（手动配置会优先）
- 添加数据源 URL 验证日志，便于调试

**关键改进：**
1. 明确创建所有 Bean，不依赖自动配置
2. 使用 `@Qualifier` 明确指定注入的 Bean
3. 添加详细的日志输出，便于排查问题
4. 使用 `@DependsOn` 确保 Bean 创建顺序

---

## 🚨 常见错误及解决方案

### 错误 1：Repository Bean 找不到

**错误信息：**
```
Parameter 0 of constructor in XxxService 
required a bean of type 'XxxRepository' that could not be found.
```

**原因：**
- Repository 没有被扫描到
- `@EnableJpaRepositories` 配置不完整
- Repository 所在的包路径没有包含在 `basePackages` 中

**解决方案：**
1. 检查 Repository 所在的包路径
2. 在 `@EnableJpaRepositories` 的 `basePackages` 中添加该包路径
3. 确保 `@EnableJpaRepositories` 明确指定了 `entityManagerFactoryRef` 和 `transactionManagerRef`

**示例：**
```java
@EnableJpaRepositories(
    basePackages = {
        "getjobs.modules.auth.infrastructure",  // 确保包含所有 Repository 包
        "getjobs.repository"
    },
    entityManagerFactoryRef = "entityManagerFactory",
    transactionManagerRef = "transactionManager"
)
```

---

### 错误 2：EntityManagerFactory Bean 找不到

**错误信息：**
```
Parameter 0 of constructor in XxxService 
required a bean named 'entityManagerFactory' that could not be found.
```

**原因：**
- 禁用了 Spring Boot 的自动配置
- 没有手动创建 EntityManagerFactory Bean
- Bean 名称不匹配

**解决方案：**
1. 手动创建 EntityManagerFactory Bean 并标记为 `@Primary`
2. 确保 Bean 名称为 `entityManagerFactory`
3. 在 `@EnableJpaRepositories` 中明确指定 `entityManagerFactoryRef = "entityManagerFactory"`

**示例：**
```java
@Bean(name = "entityManagerFactory")
@Primary
public LocalContainerEntityManagerFactoryBean entityManagerFactory(
        @Qualifier("dataSource") DataSource dataSource) {
    // 创建 EntityManagerFactory
}
```

---

### 错误 3：数据源绑定错误（Repository 使用了错误的数据源）

**错误信息：**
```
Table 'database_name.table_name' doesn't exist
```

**但表实际存在于另一个数据库中。**

**原因：**
- Repository 被错误地分配到了错误的数据源
- EntityManagerFactory 绑定到了错误的数据源
- `@EnableJpaRepositories` 的 `basePackages` 配置有重叠

**解决方案：**
1. 检查每个 `@EnableJpaRepositories` 的 `basePackages`，确保没有重叠
2. 确保主数据源的 DataSource、EntityManagerFactory 和 TransactionManager 都标记为 `@Primary`
3. 在创建 EntityManagerFactory 时，使用 `@Qualifier` 明确指定数据源
4. 添加数据源 URL 验证日志，确认数据源绑定正确

**示例：**
```java
@Bean(name = "entityManagerFactory")
@Primary
public LocalContainerEntityManagerFactoryBean entityManagerFactory(
        @Qualifier("dataSource") DataSource dataSource) {  // 明确指定数据源
    
    // 验证数据源 URL
    if (dataSource instanceof HikariDataSource) {
        HikariDataSource hikariDataSource = (HikariDataSource) dataSource;
        String url = hikariDataSource.getJdbcUrl();
        log.info("主数据源 URL: {}", url);
        if (!url.contains("sqlite") && !url.contains("SQLite")) {
            log.error("警告：主数据源 URL 不是 SQLite！URL: {}", url);
        }
    }
    
    // 创建 EntityManagerFactory
}
```

---

### 错误 4：多个数据源配置冲突

**错误信息：**
```
More than one 'primary' bean found among candidates
```

**原因：**
- 多个 DataSource、EntityManagerFactory 或 TransactionManager 都被标记为 `@Primary`
- Bean 名称重复

**解决方案：**
1. 确保只有主数据源的 Bean 标记为 `@Primary`
2. 确保每个数据源的 Bean 名称唯一
3. 使用 `@Qualifier` 明确指定注入的 Bean

**示例：**
```java
// 主数据源
@Bean(name = "dataSource")
@Primary
public DataSource primaryDataSource() { }

// MySQL 数据源
@Bean(name = "mysqlDataSource")  // 不同的名称
public DataSource mysqlDataSource() { }
```

---

### 错误 5：事务管理器找不到

**错误信息：**
```
No bean named 'transactionManager' available
```

**原因：**
- 没有创建 TransactionManager Bean
- Bean 名称不匹配
- TransactionManager 依赖于未初始化的 EntityManagerFactory

**解决方案：**
1. 手动创建 TransactionManager Bean 并标记为 `@Primary`
2. 使用 `@DependsOn` 确保 EntityManagerFactory 先创建
3. 在创建 TransactionManager 时，从 LocalContainerEntityManagerFactoryBean 中获取实际的 EntityManagerFactory

**示例：**
```java
@Bean(name = "transactionManager")
@Primary
@DependsOn("entityManagerFactory")
public PlatformTransactionManager transactionManager(
        @Qualifier("entityManagerFactory") LocalContainerEntityManagerFactoryBean entityManagerFactoryBean) {
    EntityManagerFactory entityManagerFactory = entityManagerFactoryBean.getObject();
    if (entityManagerFactory == null) {
        throw new IllegalStateException("EntityManagerFactory 未初始化");
    }
    return new JpaTransactionManager(entityManagerFactory);
}
```

---

## ✅ 最佳实践

### 1. 数据源隔离

- **包路径隔离**：不同数据源的 Repository 放在不同的包下
  ```
  getjobs/modules/
  ├── auth/infrastructure/          # SQLite Repository
  └── datasource/mysql/repository/  # MySQL Repository
  ```

- **配置隔离**：每个数据源使用独立的配置类
- **Bean 名称隔离**：使用不同的 Bean 名称，避免冲突

### 2. 明确配置

- **不使用自动配置**：手动创建所有 Bean，确保完全控制
- **明确指定引用**：在 `@EnableJpaRepositories` 中明确指定 `entityManagerFactoryRef` 和 `transactionManagerRef`
- **使用 @Qualifier**：在注入时明确指定 Bean 名称

### 3. 调试支持

- **添加日志**：在配置类中添加详细的日志输出
- **URL 验证**：在创建 EntityManagerFactory 时验证数据源 URL
- **启动日志**：查看启动日志，确认数据源配置正确

### 4. 事务管理

- **明确指定事务管理器**：在使用 `@Transactional` 时，明确指定 `transactionManager`
- **数据源隔离**：不同数据源的操作使用不同的事务管理器

**示例：**
```java
@Transactional(transactionManager = "mysqlTransactionManager")
public void mysqlOperation() {
    // MySQL 操作
}
```

---

## 🧪 验证测试

### 1. 验证数据源配置

启动应用，查看日志输出：

```
═══════════════════════════════════════════════════════════
        SQLite 主数据源配置完成
═══════════════════════════════════════════════════════════
数据库 URL: jdbc:sqlite:/Users/xxx/getjobs/npe_get_jobs.db
连接池最大连接数: 5
连接池最小空闲连接数: 2
═══════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════
        MySQL 数据源配置完成
═══════════════════════════════════════════════════════════
数据库 URL: jdbc:mysql://localhost:3306/npe_get_jobs
用户名: root
连接池最大连接数: 10
连接池最小空闲连接数: 5
═══════════════════════════════════════════════════════════
```

### 2. 验证 Repository 绑定

创建测试 Controller：

```java
@RestController
@RequestMapping("/api/datasource/mysql/verification")
public class DataSourceVerificationController {
    
    @Autowired
    private DataSourceVerificationRepository repository;  // MySQL Repository
    
    @PostMapping
    @Transactional(transactionManager = "mysqlTransactionManager")
    public ResponseEntity<DataSourceVerification> createVerification(@RequestParam String message) {
        DataSourceVerification verification = new DataSourceVerification(null, message, LocalDateTime.now());
        DataSourceVerification saved = repository.save(verification);
        return ResponseEntity.ok(saved);
    }
}
```

### 3. 验证数据源隔离

- SQLite Repository 查询 SQLite 数据库
- MySQL Repository 查询 MySQL 数据库
- 两个数据源的操作互不影响

---

## 📝 总结

配置 Spring Boot 多数据源的关键点：

1. ✅ **明确配置**：手动创建所有 Bean，不依赖自动配置
2. ✅ **@Primary 标记**：主数据源的所有 Bean 都标记为 `@Primary`
3. ✅ **包路径隔离**：不同数据源的 Repository 放在不同包下
4. ✅ **明确指定引用**：在 `@EnableJpaRepositories` 中明确指定 `entityManagerFactoryRef` 和 `transactionManagerRef`
5. ✅ **使用 @Qualifier**：在注入时明确指定 Bean 名称
6. ✅ **添加日志**：便于调试和排查问题

遵循以上原则，可以成功配置多数据源并避免常见错误。

---

## 📚 相关文档

- [Spring Boot DataSource Configuration](https://docs.spring.io/spring-boot/docs/current/reference/html/data.html#data.sql.datasource)
- [Spring Data JPA Multiple Databases](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.multiple-databases)
- [HikariCP Configuration](https://github.com/brettwooldridge/HikariCP)

---

**最后更新时间：** 2025-11-29  
**配置版本：** v1.0 (最终稳定版)

