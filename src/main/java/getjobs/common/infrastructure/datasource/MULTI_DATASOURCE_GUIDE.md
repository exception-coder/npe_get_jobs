# 多数据源配置详解

## 你的两个问题

### 问题 1：MySQL 的 repository 配置的扫描，没配置的会用默认的主数据源吗？

**答案：是的，完全正确！**

- ✅ **MySQL Repository**：只有位于 `getjobs.modules.datasource.mysql.repository` 包下的 Repository 才会使用 MySQL 数据源
- ✅ **其他所有 Repository**：会自动使用默认的 SQLite 主数据源

**工作原理：**
```java
@EnableJpaRepositories(
    basePackages = {"getjobs.modules.datasource.mysql.repository"},  // 只扫描这个包
    entityManagerFactoryRef = "mysqlEntityManagerFactory",
    transactionManagerRef = "mysqlTransactionManager"
)
```

Spring Boot 会：
1. 扫描 `getjobs.modules.datasource.mysql.repository` 包下的 Repository，使用 MySQL 数据源
2. 其他所有 Repository（如 `getjobs.modules.sasl.repository.SaslRecordRepository`）会被 Spring Boot 自动配置处理，使用主数据源（SQLite）

### 问题 2：声明了 entityManagerFactoryRef、transactionManagerRef 是否就不会被主数据源覆盖？

**答案：是的，绝对不会被覆盖！**

一旦在 `@EnableJpaRepositories` 中明确指定了：
- `entityManagerFactoryRef = "mysqlEntityManagerFactory"`
- `transactionManagerRef = "mysqlTransactionManager"`

那么所有被这个配置扫描到的 Repository 都会**强制使用**指定的 MySQL 数据源，不会被主数据源覆盖。

## 数据源隔离机制

### 1. 包路径隔离

```
getjobs/
├── modules/
│   ├── sasl/
│   │   └── repository/              ← SQLite 主数据源
│   │       └── SaslRecordRepository
│   ├── auth/
│   │   └── infrastructure/          ← SQLite 主数据源
│   │       └── RoleRepository
│   └── datasource/
│       └── mysql/
│           ├── domain/              ← MySQL 实体
│           └── repository/          ← MySQL 数据源（仅此包）
│               └── DataSourceVerificationRepository
└── repository/                      ← SQLite 主数据源
    ├── JobRepository
    └── UserProfileRepository
```

### 2. 配置隔离

**MySQL 配置（MySQLDataSourceConfig）：**
```java
@EnableJpaRepositories(
    basePackages = {"getjobs.modules.datasource.mysql.repository"},  // 只扫描这个包
    entityManagerFactoryRef = "mysqlEntityManagerFactory",            // 明确指定
    transactionManagerRef = "mysqlTransactionManager"                 // 明确指定
)
```

**SQLite 主数据源：**
- 由 Spring Boot 自动配置
- 扫描所有其他包下的 Repository
- 使用默认的 `entityManagerFactory` 和 `transactionManager`

## 验证示例

### MySQL Repository（使用 MySQL 数据源）

```java
package getjobs.modules.datasource.mysql.repository;

@Repository
public interface DataSourceVerificationRepository 
    extends JpaRepository<DataSourceVerification, Long> {
    // 这个 Repository 会使用 MySQL 数据源
    // 因为它在 @EnableJpaRepositories 的 basePackages 中
}
```

### SQLite Repository（使用 SQLite 主数据源）

```java
package getjobs.modules.sasl.repository;

@Repository
public interface SaslRecordRepository 
    extends JpaRepository<SaslRecord, Long> {
    // 这个 Repository 会使用 SQLite 主数据源
    // 因为它不在 MySQL 的扫描包路径中
}
```

## 使用事务管理器

### MySQL Repository 使用事务

```java
@Service
public class MyService {
    
    @Autowired
    private DataSourceVerificationRepository mysqlRepo;  // MySQL Repository
    
    @Transactional(transactionManager = "mysqlTransactionManager")
    public void mysqlOperation() {
        mysqlRepo.save(new DataSourceVerification());
        // 必须指定 transactionManager，否则可能使用默认的事务管理器
    }
}
```

### SQLite Repository 使用事务

```java
@Service
public class MyService {
    
    @Autowired
    private SaslRecordRepository sqliteRepo;  // SQLite Repository
    
    @Transactional  // 使用默认的事务管理器（SQLite）
    public void sqliteOperation() {
        sqliteRepo.save(new SaslRecord());
    }
}
```

## 最佳实践

1. **包路径隔离**：将不同数据源的 Repository 放在不同的包下
2. **明确指定事务管理器**：使用 MySQL 数据源时，明确指定 `transactionManager = "mysqlTransactionManager"`
3. **避免跨数据源事务**：不要在一个事务中同时操作两个数据源（需要使用分布式事务）

## 常见问题

### Q: 如果 Repository 不在指定的包路径中会怎样？

A: 它会使用 Spring Boot 自动配置的默认数据源（SQLite）。

### Q: 如果忘记了指定 transactionManager 会怎样？

A: 会使用默认的事务管理器，如果默认是 SQLite，可能会导致数据写入错误的数据库。

### Q: 能否在一个 Service 中同时使用两个数据源？

A: 可以，但要小心：
- 不要在同一个 `@Transactional` 方法中操作两个数据源
- 为每个数据源的操作使用对应的事务管理器

## 总结

✅ **问题 1 答案**：是的，没配置的 Repository 会使用默认的主数据源（SQLite）

✅ **问题 2 答案**：是的，明确指定了 `entityManagerFactoryRef` 和 `transactionManagerRef` 的 Repository **绝对不会**被主数据源覆盖

当前配置是**完全正确**的，数据源隔离机制已经生效！

