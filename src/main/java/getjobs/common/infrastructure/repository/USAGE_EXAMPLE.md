# Repository动态选择使用示例

## 完整示例

### 1. 配置文件 (application.yml)

```yaml
repository:
  datasource:
    # 默认使用SQLite
    default-type: sqlite
    
    # 模块级别的配置
    modules:
      sasl: mysql      # sasl模块使用MySQL
      auth: sqlite     # auth模块使用SQLite
```

### 2. Service层代码示例

#### 示例1：基础使用

```java
package getjobs.modules.sasl.service;

import getjobs.common.infrastructure.repository.service.RepositoryServiceHelper;
import getjobs.modules.sasl.domain.SaslRecord;
import getjobs.modules.sasl.repository.SaslRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SaslService {
    
    private final RepositoryServiceHelper repositoryHelper;
    private static final String MODULE_NAME = "sasl";
    
    /**
     * 查询所有记录
     */
    public List<SaslRecord> findAll() {
        // 根据配置自动选择SQLite或MySQL的Repository
        SaslRecordRepository repository = repositoryHelper.getRepository(
            SaslRecordRepository.class, MODULE_NAME);
        return repository.findAll();
    }
    
    /**
     * 根据ID查找记录
     */
    public SaslRecord findById(Long id) {
        SaslRecordRepository repository = repositoryHelper.getRepository(
            SaslRecordRepository.class, MODULE_NAME);
        return repository.findById(id).orElse(null);
    }
    
    /**
     * 保存记录
     */
    public SaslRecord save(SaslRecord record) {
        SaslRecordRepository repository = repositoryHelper.getRepository(
            SaslRecordRepository.class, MODULE_NAME);
        return repository.save(record);
    }
}
```

#### 示例2：使用@PostConstruct优化性能

```java
package getjobs.modules.sasl.service;

import getjobs.common.infrastructure.repository.service.RepositoryServiceHelper;
import getjobs.modules.sasl.domain.SaslRecord;
import getjobs.modules.sasl.repository.SaslRecordRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SaslService {
    
    private final RepositoryServiceHelper repositoryHelper;
    private static final String MODULE_NAME = "sasl";
    
    // 在初始化时获取Repository，避免每次调用都查找
    private SaslRecordRepository recordRepository;
    private SaslImportRecordRepository importRecordRepository;
    
    @PostConstruct
    public void init() {
        // 初始化时根据配置获取Repository
        this.recordRepository = repositoryHelper.getRepository(
            SaslRecordRepository.class, MODULE_NAME);
        this.importRecordRepository = repositoryHelper.getRepository(
            SaslImportRecordRepository.class, MODULE_NAME);
        
        // 输出当前使用的数据源类型
        if (repositoryHelper.isMySQL(MODULE_NAME)) {
            log.info("SaslService 使用 MySQL 数据源");
        } else {
            log.info("SaslService 使用 SQLite 数据源");
        }
    }
    
    public List<SaslRecord> findAll() {
        // 直接使用缓存的Repository实例
        return recordRepository.findAll();
    }
    
    public SaslRecord save(SaslRecord record) {
        return recordRepository.save(record);
    }
}
```

#### 示例3：条件选择数据源

```java
@Service
@RequiredArgsConstructor
public class SaslService {
    
    private final RepositoryServiceHelper repositoryHelper;
    private static final String MODULE_NAME = "sasl";
    
    public void processData() {
        // 根据配置判断使用哪个数据源
        if (repositoryHelper.isMySQL(MODULE_NAME)) {
            log.info("使用MySQL数据源处理数据");
            // MySQL特定的逻辑
        } else {
            log.info("使用SQLite数据源处理数据");
            // SQLite特定的逻辑
        }
        
        // 获取Repository并执行操作
        SaslRecordRepository repository = repositoryHelper.getRepository(
            SaslRecordRepository.class, MODULE_NAME);
        // ... 使用repository
    }
}
```

#### 示例4：重构现有Service

如果你现有的Service直接注入了Repository：

**重构前：**
```java
@Service
@RequiredArgsConstructor
public class SaslService {
    
    private final SaslRecordRepository recordRepository;  // 直接注入
    
    public List<SaslRecord> findAll() {
        return recordRepository.findAll();
    }
}
```

**重构后：**
```java
@Service
@RequiredArgsConstructor
public class SaslService {
    
    private final RepositoryServiceHelper repositoryHelper;
    private static final String MODULE_NAME = "sasl";
    
    private SaslRecordRepository recordRepository;
    
    @PostConstruct
    public void init() {
        // 根据配置获取Repository
        this.recordRepository = repositoryHelper.getRepository(
            SaslRecordRepository.class, MODULE_NAME);
    }
    
    // 业务方法保持不变
    public List<SaslRecord> findAll() {
        return recordRepository.findAll();
    }
}
```

## 迁移步骤

### 步骤1：添加配置

在 `application.yml` 中添加Repository数据源配置：

```yaml
repository:
  datasource:
    default-type: sqlite
    modules:
      sasl: sqlite  # 先保持使用SQLite，确保不破坏现有功能
```

### 步骤2：修改Service

在Service中：
1. 移除直接的Repository注入
2. 注入 `RepositoryServiceHelper`
3. 在 `@PostConstruct` 方法中初始化Repository

### 步骤3：测试验证

确保功能正常后，可以尝试切换数据源：

```yaml
repository:
  datasource:
    modules:
      sasl: mysql  # 切换到MySQL测试
```

### 步骤4：逐步迁移其他模块

重复步骤1-3，逐步迁移其他模块。

## 注意事项

1. **事务管理**: 确保使用正确的事务管理器
   ```java
   @Transactional(transactionManager = "transactionManager")  // SQLite
   @Transactional(transactionManager = "mysqlTransactionManager")  // MySQL
   ```

2. **实体类映射**: 确保SQLite和MySQL的实体类字段一致，或者使用适配器转换

3. **性能考虑**: 如果频繁使用Repository，建议使用`@PostConstruct`缓存实例

4. **错误处理**: 如果配置的数据源不存在对应的Repository，会抛出异常

## 优势总结

1. ✅ Service层代码不依赖具体数据源
2. ✅ 通过配置即可切换数据源
3. ✅ 代码更加灵活和可维护
4. ✅ 便于测试（可以轻松Mock Repository）
5. ✅ 支持多数据源混合使用

