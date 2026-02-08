# 多数据源事务管理器核心要点

## 📋 目录

- [核心问题](#核心问题)
- [为什么需要指定事务管理器](#为什么需要指定事务管理器)
- [单表操作 vs 多表操作](#单表操作-vs-多表操作)
- [最佳实践](#最佳实践)
- [常见错误场景](#常见错误场景)

---

## 🎯 核心问题

在多数据源环境下，**必须明确指定事务管理器**，否则可能导致事务未提交或数据不一致。

### 问题场景

```java
// ❌ 错误示例：未指定事务管理器
@Transactional
public void deleteRecordsByDocumentTitle(String documentTitle) {
    recordRepository.deleteByDocumentTitle(trimmedTitle);      // MySQL Repository
    importRecordRepository.deleteByDocumentTitle(trimmedTitle); // MySQL Repository
}
```

**问题：**
- Service 层的 `@Transactional` 默认使用 `@Primary` 事务管理器（SQLite 的 `transactionManager`）
- Repository 操作使用 MySQL 数据源，但事务管理器不匹配
- 导致事务未正确提交

### 正确做法

```java
// ✅ 正确示例：明确指定事务管理器
@Transactional(transactionManager = "mysqlTransactionManager")
public void deleteRecordsByDocumentTitle(String documentTitle) {
    recordRepository.deleteByDocumentTitle(trimmedTitle);
    importRecordRepository.deleteByDocumentTitle(trimmedTitle);
}
```

---

## 🔍 为什么需要指定事务管理器

### 1. Repository 的事务管理器配置

Repository 的事务管理器由 `@EnableJpaRepositories` 配置决定：

```java
// MySQLDataSourceConfig.java
@EnableJpaRepositories(
    basePackages = {"getjobs.modules.datasource.mysql.repository"},
    entityManagerFactoryRef = "mysqlEntityManagerFactory",
    transactionManagerRef = "mysqlTransactionManager"  // ← Repository 使用这个事务管理器
)
```

```java
// PrimaryDataSourceConfig.java
@EnableJpaRepositories(
    basePackages = {"getjobs.modules.sasl.repository", "getjobs.modules.auth.infrastructure"},
    entityManagerFactoryRef = "entityManagerFactory",
    transactionManagerRef = "transactionManager"  // ← Repository 使用这个事务管理器
)
```

### 2. Service 层的事务管理器

Service 层的 `@Transactional` 如果不指定，会使用默认的 `@Primary` 事务管理器：

```java
// PrimaryDataSourceConfig.java
@Bean(name = "transactionManager")
@Primary  // ← 默认事务管理器
public PlatformTransactionManager transactionManager(...) {
    return new JpaTransactionManager(entityManagerFactory);  // SQLite 事务管理器
}
```

### 3. 事务管理器不匹配的后果

| 场景 | Service 层事务管理器 | Repository 事务管理器 | 结果 |
|------|---------------------|----------------------|------|
| 未指定 | SQLite (`transactionManager`) | MySQL (`mysqlTransactionManager`) | ❌ 事务不一致 |
| 已指定 | MySQL (`mysqlTransactionManager`) | MySQL (`mysqlTransactionManager`) | ✅ 事务一致 |

---

## 📊 单表操作 vs 多表操作

### 单表操作（可能看起来能工作，但不推荐）

**示例：`AuthService.createUser`**

```java
@Transactional  // ❌ 未指定事务管理器，但可能看起来能工作
public User createUser(CreateUserRequest request) {
    // 多个查询操作
    userRepository.findByUsername(...);
    userRepository.findByEmail(...);
    userRepository.findByMobile(...);
    
    // 只有一个写操作（单表）
    User saved = userRepository.save(user);
    return saved;
}
```

**为什么可能看起来能工作：**
1. ✅ 只涉及一个表的操作
2. ✅ Repository 方法会在自己的事务管理器（`mysqlTransactionManager`）中执行
3. ✅ Repository 方法执行完成后会自动提交事务
4. ⚠️ Service 层虽然开启了 SQLite 事务，但没有实际操作，所以不会有影响

**但存在风险：**
- 代码可读性差：不清楚实际使用的事务管理器
- 如果将来添加其他操作，可能出问题
- 异常处理可能不一致

### 多表操作（必须指定事务管理器）

**示例：`SaslService.deleteRecordsByDocumentTitle`**

```java
@Transactional  // ❌ 未指定事务管理器，会导致问题
public void deleteRecordsByDocumentTitle(String documentTitle) {
    // 删除 sasl_record 表的数据
    recordRepository.deleteByDocumentTitle(trimmedTitle);
    
    // 删除 sasl_import_record 表的数据
    importRecordRepository.deleteByDocumentTitle(trimmedTitle);
}
```

**为什么必须指定：**
1. ❌ 涉及多个表的操作
2. ❌ 需要确保所有操作在同一个事务中（要么都成功，要么都失败）
3. ❌ 如果事务管理器不匹配：
   - Service 层开启 SQLite 事务（但没有实际操作）
   - 第一个删除操作在 MySQL 事务中执行并提交
   - 第二个删除操作在另一个 MySQL 事务中执行
   - 如果第二个操作失败，第一个操作已经提交，无法回滚

**正确做法：**

```java
@Transactional(transactionManager = "mysqlTransactionManager")  // ✅ 明确指定
public void deleteRecordsByDocumentTitle(String documentTitle) {
    recordRepository.deleteByDocumentTitle(trimmedTitle);
    importRecordRepository.deleteByDocumentTitle(trimmedTitle);
}
```

---

## ✅ 最佳实践

### 1. 始终明确指定事务管理器

**原则：** 在使用 MySQL Repository 的 Service 方法中，**始终**明确指定 `transactionManager = "mysqlTransactionManager"`

```java
// ✅ 推荐：明确指定事务管理器
@Transactional(transactionManager = "mysqlTransactionManager")
public User createUser(CreateUserRequest request) {
    // ...
}

@Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
public User getUserByUsername(String username) {
    // ...
}
```

### 2. 单表操作也要指定

即使只涉及单表操作，也应该明确指定事务管理器：

```java
// ✅ 推荐：即使单表操作也明确指定
@Transactional(transactionManager = "mysqlTransactionManager")
public User createUser(CreateUserRequest request) {
    User saved = userRepository.save(user);
    return saved;
}
```

**原因：**
- 代码可读性和可维护性
- 避免潜在问题（比如将来添加其他操作）
- 确保事务一致性

### 3. 多表操作必须指定

涉及多个表的操作，**必须**明确指定事务管理器：

```java
// ✅ 必须：多表操作必须指定事务管理器
@Transactional(transactionManager = "mysqlTransactionManager")
public void deleteRecordsByDocumentTitle(String documentTitle) {
    recordRepository.deleteByDocumentTitle(trimmedTitle);
    importRecordRepository.deleteByDocumentTitle(trimmedTitle);
}
```

### 4. 只读操作也要指定

即使是只读操作，也应该明确指定事务管理器：

```java
// ✅ 推荐：只读操作也明确指定
@Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
public List<User> findAllUsers() {
    return userRepository.findAll();
}
```

---

## 🚨 常见错误场景

### 错误 1：未指定事务管理器导致事务未提交

```java
// ❌ 错误
@Transactional
public void deleteRecordsByDocumentTitle(String documentTitle) {
    recordRepository.deleteByDocumentTitle(trimmedTitle);
    importRecordRepository.deleteByDocumentTitle(trimmedTitle);
}

// ✅ 正确
@Transactional(transactionManager = "mysqlTransactionManager")
public void deleteRecordsByDocumentTitle(String documentTitle) {
    recordRepository.deleteByDocumentTitle(trimmedTitle);
    importRecordRepository.deleteByDocumentTitle(trimmedTitle);
}
```

### 错误 2：单表操作看起来能工作，但存在风险

```java
// ❌ 不推荐：虽然可能能工作，但不明确
@Transactional
public User createUser(CreateUserRequest request) {
    return userRepository.save(user);
}

// ✅ 推荐：明确指定事务管理器
@Transactional(transactionManager = "mysqlTransactionManager")
public User createUser(CreateUserRequest request) {
    return userRepository.save(user);
}
```

### 错误 3：混合使用不同数据源的 Repository

```java
// ❌ 错误：不能在一个事务中混合使用不同数据源
@Transactional(transactionManager = "mysqlTransactionManager")
public void someMethod() {
    mysqlRepository.save(...);  // MySQL Repository
    sqliteRepository.save(...);  // SQLite Repository - 不会在同一个事务中！
}

// ✅ 正确：分别处理不同数据源的操作
@Transactional(transactionManager = "mysqlTransactionManager")
public void mysqlOperation() {
    mysqlRepository.save(...);
}

@Transactional  // 使用默认的 SQLite 事务管理器
public void sqliteOperation() {
    sqliteRepository.save(...);
}
```

---

## 📝 总结

### 核心要点

1. **多数据源环境下，必须明确指定事务管理器**
2. **单表操作虽然可能看起来能工作，但应该明确指定事务管理器**
3. **多表操作必须指定事务管理器，否则可能导致数据不一致**
4. **Repository 的事务管理器由 `@EnableJpaRepositories` 配置决定**
5. **Service 层的 `@Transactional` 如果不指定，会使用默认的 `@Primary` 事务管理器**

### 最佳实践检查清单

- [ ] 所有使用 MySQL Repository 的方法都指定了 `transactionManager = "mysqlTransactionManager"`
- [ ] 单表操作也明确指定了事务管理器
- [ ] 多表操作明确指定了事务管理器
- [ ] 只读操作也明确指定了事务管理器
- [ ] 没有在一个事务中混合使用不同数据源的 Repository

---

## 🔗 相关文档

- [多数据源配置完整指南](./MULTI_DATASOURCE_CONFIG_GUIDE.md)
- [多数据源配置详解](./MULTI_DATASOURCE_GUIDE.md)
- [MySQL 多数据源配置](./README.md)

---

**最后更新：** 2024年（基于实际项目经验总结）

