# Spring 事务常见问题指南

本文档记录在使用 Spring 事务管理时常见的问题、原因分析和解决方案。

---

## 目录

1. [定时任务中事务不生效问题](#1-定时任务中事务不生效问题)
2. [最佳实践总结](#最佳实践总结)

---

## 1. 定时任务中事务不生效问题

### 问题描述

在使用 Spring 的 `@Scheduled` 定时任务时，如果同时在方法上添加 `@Transactional` 注解，执行 JPA 的 `@Modifying` 查询（UPDATE/DELETE 操作）会抛出以下异常：

```
jakarta.persistence.TransactionRequiredException: Executing an update/delete query
```

### 错误示例

```java
@Service
@RequiredArgsConstructor
public class RefreshTokenService {
    
    private final IRefreshTokenRepository<RefreshToken> refreshTokenRepository;
    
    // ❌ 错误：事务可能不会生效
    @Scheduled(cron = "0 0 3 * * ?")
    @Transactional(transactionManager = "mysqlTransactionManager")
    public void cleanupRevokedTokens() {
        Instant beforeTime = Instant.now().minusSeconds(7 * 24 * 60 * 60);
        // 这里会抛出 TransactionRequiredException
        int deletedCount = refreshTokenRepository.deleteRevokedTokensBefore(beforeTime);
        log.info("清理已撤销 Refresh Token，删除数量={}", deletedCount);
    }
}
```

Repository 接口定义：

```java
public interface IRefreshTokenRepository<T> extends JpaRepository<T, Long> {
    
    @Modifying
    @Query("DELETE FROM RefreshToken rt WHERE rt.revoked = true AND rt.revokedAt <= :beforeTime")
    int deleteRevokedTokensBefore(@Param("beforeTime") Instant beforeTime);
}
```

### 错误原因分析

#### 1. Spring AOP 代理机制问题

Spring 的 `@Transactional` 是通过 **AOP 代理** 实现的：

- Spring 会为带有 `@Transactional` 的 Bean 创建一个代理对象
- 只有通过代理对象调用方法时，事务拦截器才会生效
- 当 `@Scheduled` 直接调用同一个类中的 `@Transactional` 方法时，可能绕过了代理机制

#### 2. 方法调用链路问题

```
定时调度器 
    → 直接调用 cleanupRevokedTokens()
    → 未经过 Spring 事务代理
    → Repository 执行 @Modifying 查询
    → 没有事务上下文
    → 抛出 TransactionRequiredException
```

#### 3. JPA @Modifying 查询的事务要求

JPA 的 `@Modifying` 查询（UPDATE/DELETE）**必须在事务上下文中执行**，否则 Hibernate 会抛出 `TransactionRequiredException`。

### 解决方案：自注入模式

核心思路：**将定时任务调度和事务执行分离**，通过 Spring 容器获取自身的代理对象来调用事务方法。

#### 完整实现代码

```java
@Slf4j
@Service
@RequiredArgsConstructor
public class RefreshTokenService {

    private static final String MODULE_NAME = "auth";

    private final RepositoryServiceHelper repositoryHelper;
    private final JwtProperties jwtProperties;
    private final ApplicationContext applicationContext;  // ✅ 注入 ApplicationContext
    
    // ✅ 自注入：用于在定时任务中调用事务方法，确保事务代理生效
    private RefreshTokenService self;

    private IRefreshTokenRepository<RefreshToken> refreshTokenRepository;

    /**
     * 初始化Repository实例和自注入代理
     */
    @PostConstruct
    @SuppressWarnings("unchecked")
    public void initRepositories() {
        this.refreshTokenRepository = repositoryHelper.getRepository(
            IRefreshTokenRepository.class, MODULE_NAME
        );
        
        // ✅ 获取自身的代理实例，确保事务注解生效
        this.self = applicationContext.getBean(RefreshTokenService.class);

        log.info("RefreshTokenService 初始化完成");
    }

    /**
     * 清理已撤销的 Refresh Token（定时任务）
     * ✅ 只负责调度，不带 @Transactional
     */
    @Scheduled(cron = "0 0 3 * * ?")
    public void cleanupRevokedTokens() {
        // ✅ 通过自注入的代理调用事务方法，确保事务生效
        self.doCleanupRevokedTokens();
    }

    /**
     * 执行清理已撤销 Token 的实际逻辑（事务方法）
     * ✅ 带 @Transactional，由定时任务通过代理调用
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public void doCleanupRevokedTokens() {
        Instant beforeTime = Instant.now().minusSeconds(7 * 24 * 60 * 60);
        int deletedCount = refreshTokenRepository.deleteRevokedTokensBefore(beforeTime);
        log.info("清理已撤销 Refresh Token，删除数量={}", deletedCount);
    }
}
```

#### 关键步骤

1. **注入 `ApplicationContext`**：用于获取自身的 Spring 代理对象
2. **声明自注入字段 `self`**：存储自身的代理实例
3. **在 `@PostConstruct` 中初始化**：`self = applicationContext.getBean(RefreshTokenService.class)`
4. **定时任务方法不带 `@Transactional`**：只负责调度
5. **创建单独的事务方法**：带 `@Transactional`，执行实际业务逻辑
6. **通过 `self` 代理调用**：`self.doCleanupRevokedTokens()`

#### 调用链路（修复后）

```
定时调度器 
    → 调用 cleanupRevokedTokens()（无事务）
    → 通过 self 代理调用 doCleanupRevokedTokens()
    → 经过 Spring 事务代理
    → 事务拦截器开启事务
    → Repository 执行 @Modifying 查询
    → 事务提交/回滚
    → ✅ 成功执行
```

### 其他解决方案对比

| 解决方案 | 优点 | 缺点 | 推荐度 |
|---------|------|------|--------|
| **自注入模式** | 代码清晰，易于理解，不引入额外依赖 | 需要额外的字段和方法 | ⭐⭐⭐⭐⭐ |
| 创建单独的事务 Service | 职责分离更彻底 | 增加类的数量，过度设计 | ⭐⭐⭐⭐ |
| 使用 `AopContext.currentProxy()` | 无需自注入字段 | 需要启用 `exposeProxy=true`，运行时获取代理 | ⭐⭐⭐ |
| 使用编程式事务 | 更灵活的事务控制 | 代码冗长，失去声明式事务的简洁性 | ⭐⭐ |

### 何时会遇到此问题

- ✅ `@Scheduled` 定时任务中执行 `@Modifying` 查询
- ✅ `@EventListener` 事件监听器中执行事务操作
- ✅ `@Async` 异步方法中调用同类的 `@Transactional` 方法
- ✅ 同类中的普通方法调用 `@Transactional` 方法（this 调用）

### 相关知识点

#### Spring AOP 代理的两种模式

1. **JDK 动态代理**（默认）：基于接口，只能代理接口方法
2. **CGLIB 代理**：基于子类，可以代理类方法

启用 CGLIB 代理：

```java
@EnableTransactionManagement(proxyTargetClass = true)
```

#### 为什么 this 调用不走代理

```java
@Service
public class MyService {
    
    // 外部调用：走代理 ✅
    public void methodA() {
        methodB();  // this.methodB()，不走代理 ❌
    }
    
    @Transactional
    public void methodB() {
        // 事务逻辑
    }
}
```

原因：`this` 指向的是**原始对象**，而不是 Spring 创建的**代理对象**。

---

## 最佳实践总结

### ✅ 推荐做法

1. **定时任务和事务方法分离**
   ```java
   @Scheduled(cron = "...")
   public void scheduleMethod() {
       self.transactionalMethod();  // 通过代理调用
   }
   
   @Transactional
   public void transactionalMethod() {
       // 事务逻辑
   }
   ```

2. **使用自注入获取代理对象**
   ```java
   private final ApplicationContext applicationContext;
   private MyService self;
   
   @PostConstruct
   public void init() {
       this.self = applicationContext.getBean(MyService.class);
   }
   ```

3. **Repository 的 @Modifying 查询必须在事务中**
   ```java
   @Modifying
   @Query("DELETE FROM Entity e WHERE ...")
   int deleteByCondition(...);  // 调用此方法的 Service 方法必须有 @Transactional
   ```

4. **明确指定事务管理器**（多数据源场景）
   ```java
   @Transactional(transactionManager = "mysqlTransactionManager")
   ```

### ❌ 避免的做法

1. **不要在 @Scheduled 方法上直接加 @Transactional**
   ```java
   // ❌ 错误：事务可能不生效
   @Scheduled(cron = "...")
   @Transactional
   public void scheduledTask() {
       repository.deleteByCondition();
   }
   ```

2. **不要在同类中通过 this 调用 @Transactional 方法**
   ```java
   // ❌ 错误：不走代理
   public void methodA() {
       this.transactionalMethod();  // 事务不生效
   }
   ```

3. **不要忘记 @Modifying 注解**
   ```java
   // ❌ 错误：UPDATE/DELETE 查询必须加 @Modifying
   @Query("DELETE FROM Entity e WHERE ...")
   int deleteByCondition(...);
   ```

### 调试技巧

1. **启用事务日志**
   ```yaml
   logging:
     level:
       org.springframework.transaction: DEBUG
       org.springframework.orm.jpa: DEBUG
   ```

2. **检查是否使用了代理**
   ```java
   @PostConstruct
   public void checkProxy() {
       log.info("是否为代理对象: {}", AopUtils.isAopProxy(self));
       log.info("代理类型: {}", self.getClass().getName());
   }
   ```

3. **使用 TransactionSynchronizationManager 检查事务状态**
   ```java
   boolean isTransactionActive = TransactionSynchronizationManager.isActualTransactionActive();
   log.info("当前是否有活动事务: {}", isTransactionActive);
   ```

---

## 参考资料

- [Spring Framework Transaction Management](https://docs.spring.io/spring-framework/reference/data-access/transaction.html)
- [Spring AOP Proxying Mechanisms](https://docs.spring.io/spring-framework/reference/core/aop/proxying.html)
- [Spring Data JPA @Modifying Queries](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.modifying-queries)

---

**文档版本**: 1.0  
**最后更新**: 2025-12-02  
**维护者**: getjobs team

