# Repository统一接口设计说明

## 问题分析

当前设计中，SQLite和MySQL使用不同的Repository接口：
- **SQLite**: `getjobs.modules.auth.infrastructure.UserRepository`
- **MySQL**: `getjobs.modules.datasource.mysql.repository.UserMysqlRepository`

Service层如果直接依赖SQLite的Repository类型，当切换到MySQL时会出现类型不匹配的问题。

## 解决方案

### 方案1：使用SQLite Repository接口作为统一接口（当前实现）

**原理**：
- 将SQLite的Repository接口作为"规范接口"
- MySQL的Repository实现相同的方法签名
- 通过类型转换，将MySQL Repository转换为SQLite Repository接口类型
- Service层统一使用SQLite Repository接口类型

**优点**：
- ✅ 实现简单，不需要修改现有Repository
- ✅ Service层代码清晰，类型明确
- ✅ 运行时安全（方法签名相同）

**缺点**：
- ⚠️ Service层在代码层面仍然"看到"SQLite Repository类型
- ⚠️ 需要MySQL Repository方法签名与SQLite完全一致

**代码示例**：
```java
// Service层使用SQLite Repository接口作为统一类型
private UserRepository userRepository;  // 统一接口类型

@PostConstruct
public void initRepositories() {
    // RepositoryServiceHelper根据配置自动返回SQLite或MySQL实现
    // 如果是MySQL，会通过类型转换返回（运行时安全）
    this.userRepository = repositoryHelper.getRepository(UserRepository.class, MODULE_NAME);
}
```

### 方案2：创建真正的统一接口层（推荐用于新项目）

如果需要完全解耦，可以创建统一的Repository接口层：

**步骤**：

1. **创建统一接口**：
```java
// getjobs.common.infrastructure.repository.common.IUserRepository.java
public interface IUserRepository<T extends User> {
    Optional<T> findByUsername(String username);
    Optional<T> findByEmail(String email);
    // ... 其他方法
}
```

2. **SQLite Repository实现统一接口**：
```java
public interface UserRepository extends IUserRepository<User>, JpaRepository<User, Long> {
    // 方法已在IUserRepository中定义
}
```

3. **MySQL Repository实现统一接口**：
```java
public interface UserMysqlRepository extends IUserRepository<User>, JpaRepository<User, Long> {
    // 方法已在IUserRepository中定义
}
```

4. **Service层使用统一接口**：
```java
private IUserRepository<User> userRepository;  // 完全解耦

@PostConstruct
public void initRepositories() {
    this.userRepository = repositoryHelper.getRepository(IUserRepository.class, MODULE_NAME);
}
```

**优点**：
- ✅ Service层完全不依赖具体数据库实现
- ✅ 类型系统层面完全解耦

**缺点**：
- ⚠️ 需要重构现有Repository
- ⚠️ 实体类型需要统一（或使用泛型）

### 方案3：使用类型擦除（不推荐）

Service层使用Object或通配符类型，但会失去类型安全。

## 当前实现的说明

当前的实现采用了**方案1**，原因：

1. **最小改动**：不需要重构现有Repository结构
2. **类型安全**：Service层仍然有明确的类型
3. **运行时安全**：通过类型转换返回，但MySQL Repository的方法签名与SQLite相同，运行时不会有问题
4. **配置驱动**：通过配置即可切换数据源，无需修改Service代码

## 工作流程

```
Service层代码：
  private UserRepository userRepository;  // 统一使用SQLite接口类型

配置SQLite时：
  UserRepository (SQLite实现) ← RepositoryServiceHelper.getRepository()
  ✅ 类型完全匹配

配置MySQL时：
  UserMysqlRepository (MySQL实现) 
    ↓ (类型转换)
  UserRepository (SQLite接口类型)
  ✅ 运行时安全（方法签名相同）
```

## 重要提示

1. **方法签名必须一致**：SQLite和MySQL的Repository接口必须定义完全相同的方法签名
2. **实体类型**：虽然实体类不同，但字段和结构应该保持一致
3. **配置验证**：切换数据源后，应该测试所有Repository方法是否正常工作

## 最佳实践

1. **保持SQLite Repository接口作为规范**：所有业务方法都在SQLite Repository中定义
2. **MySQL Repository完全匹配**：MySQL Repository的方法签名必须与SQLite完全一致
3. **统一实体结构**：虽然实体类不同，但字段名和类型应该保持一致
4. **使用配置切换**：通过`application.yml`配置切换，无需修改代码

## 迁移到方案2的时机

如果项目需要：
- 完全的类型解耦
- 支持更多数据源类型（如PostgreSQL、MongoDB等）
- 更灵活的实体类型映射

可以考虑重构为方案2，但需要更多的开发工作量。

