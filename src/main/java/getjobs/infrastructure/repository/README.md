# Repository动态选择设计

## 设计目标

让Service层不直接依赖具体的数据库Repository实现，而是根据配置动态选择SQLite或MySQL的Repository实现。

## 设计架构

```
┌─────────────────────────────────────────────────────────────┐
│                     Service Layer                            │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  RepositoryServiceHelper (辅助类)                     │   │
│  │  - 根据模块名称和配置获取Repository                    │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                           │
                           │ 使用
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                  Factory Layer                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  RepositoryFactory (工厂类)                           │   │
│  │  - 根据配置选择RepositoryProvider                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                           │                                  │
│         ┌─────────────────┴─────────────────┐               │
│         ▼                                   ▼                │
│  ┌──────────────────┐            ┌──────────────────┐       │
│  │ SQLiteProvider   │            │  MySQLProvider   │       │
│  └──────────────────┘            └──────────────────┘       │
└─────────────────────────────────────────────────────────────┘
                           │
                           │ 获取
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                  Repository Layer                            │
│  ┌──────────────────┐            ┌──────────────────┐       │
│  │ SQLite Repository│            │  MySQL Repository│       │
│  │ (自动注入)        │            │  (自动注入)        │       │
│  └──────────────────┘            └──────────────────┘       │
└─────────────────────────────────────────────────────────────┘
```

## 配置方式

在 `application.yml` 中添加配置：

```yaml
repository:
  datasource:
    # 默认数据源类型
    default-type: sqlite  # 可选值: sqlite, mysql
    
    # 模块级别的数据源配置（可选）
    modules:
      sasl: mysql        # sasl模块使用MySQL
      auth: sqlite       # auth模块使用SQLite（如果不配置则使用default-type）
```

## 使用方式

### 方式1：使用RepositoryServiceHelper（推荐）

```java
@Service
@RequiredArgsConstructor
public class SaslService {
    
    private final RepositoryServiceHelper repositoryHelper;
    private static final String MODULE_NAME = "sasl";
    
    public List<SaslRecord> findAll() {
        // 根据配置自动获取SQLite或MySQL的Repository
        SaslRecordRepository repository = repositoryHelper.getRepository(
            SaslRecordRepository.class, MODULE_NAME);
        return repository.findAll();
    }
    
    public void save(SaslRecord record) {
        SaslRecordRepository repository = repositoryHelper.getRepository(
            SaslRecordRepository.class, MODULE_NAME);
        repository.save(record);
    }
}
```

### 方式2：直接使用RepositoryFactory

```java
@Service
@RequiredArgsConstructor
public class SaslService {
    
    private final RepositoryFactory repositoryFactory;
    private static final String MODULE_NAME = "sasl";
    
    public List<SaslRecord> findAll() {
        RepositoryFactory.RepositoryProvider provider = 
            repositoryFactory.getRepositoryProvider(MODULE_NAME);
        SaslRecordRepository repository = provider.getRepository(
            SaslRecordRepository.class, MODULE_NAME);
        return repository.findAll();
    }
}
```

### 方式3：使用@PostConstruct初始化（性能优化）

如果Service中频繁使用Repository，可以在初始化时获取一次，避免每次方法调用都查找：

```java
@Service
@RequiredArgsConstructor
public class SaslService {
    
    private final RepositoryServiceHelper repositoryHelper;
    private static final String MODULE_NAME = "sasl";
    
    private SaslRecordRepository recordRepository;
    
    @PostConstruct
    public void init() {
        // 在初始化时获取Repository，后续直接使用
        this.recordRepository = repositoryHelper.getRepository(
            SaslRecordRepository.class, MODULE_NAME);
    }
    
    public List<SaslRecord> findAll() {
        return recordRepository.findAll();
    }
}
```

## 核心组件说明

### 1. RepositoryDataSourceConfig

配置类，读取 `application.yml` 中的数据源选择配置。

```java
@Configuration
@ConfigurationProperties(prefix = "repository.datasource")
public class RepositoryDataSourceConfig {
    private String defaultType = "sqlite";
    private Map<String, String> modules = new HashMap<>();
    
    public String getDataSourceType(String moduleName) {
        return modules.getOrDefault(moduleName, defaultType);
    }
}
```

### 2. RepositoryFactory

工厂类，根据配置选择对应的RepositoryProvider。

### 3. RepositoryProvider

提供Repository实例的接口，有不同的实现：
- `SQLiteRepositoryProvider`: 从Spring容器获取SQLite Repository
- `MySQLRepositoryProvider`: 从Spring容器获取MySQL Repository

### 4. RepositoryServiceHelper

Service层辅助类，简化Repository的获取过程。

## 优势

1. **解耦**: Service层不直接依赖具体的Repository实现
2. **灵活**: 通过配置即可切换数据源，无需修改代码
3. **可扩展**: 可以轻松添加新的数据源类型
4. **类型安全**: 使用泛型保证类型安全
5. **性能**: 可以通过缓存Repository实例优化性能

## 注意事项

1. **Repository命名规范**: 
   - SQLite Repository: 位于默认包路径，如 `getjobs.modules.sasl.repository`
   - MySQL Repository: 位于特定包路径，如 `getjobs.modules.datasource.mysql.repository`，通常带有`MysqlRepository`后缀

2. **事务管理**: 
   - 如果使用不同数据源的Repository，需要注意事务管理器的配置
   - 跨数据源的操作可能需要分布式事务（如JTA）

3. **实体映射**: 
   - SQLite和MySQL的实体类可能不同，需要做好映射
   - 或者使用相同的实体类但不同的包路径

## 迁移建议

如果现有Service直接注入Repository，可以逐步迁移：

1. 第一步：添加配置和工厂类（不影响现有代码）
2. 第二步：在新功能中使用新的方式
3. 第三步：逐步重构现有Service使用新方式

## 示例项目结构

```
src/main/java/getjobs/
├── common/infrastructure/repository/
│   ├── config/
│   │   └── RepositoryDataSourceConfig.java
│   ├── factory/
│   │   ├── RepositoryFactory.java
│   │   ├── RepositoryProvider.java
│   │   └── impl/
│   │       ├── SQLiteRepositoryProvider.java
│   │       └── MySQLRepositoryProvider.java
│   └── service/
│       └── RepositoryServiceHelper.java
└── modules/
    ├── sasl/
    │   ├── repository/          # SQLite Repository
    │   │   └── SaslRecordRepository.java
    │   └── service/
    │       └── SaslService.java
    └── datasource/mysql/
        └── repository/          # MySQL Repository
            └── SaslRecordMysqlRepository.java
```

