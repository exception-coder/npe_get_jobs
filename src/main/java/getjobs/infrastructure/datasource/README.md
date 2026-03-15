# MySQL 多数据源配置

## 概述

本项目配置了双数据源：
- **SQLite**：主数据源（默认），用于主要业务数据存储
- **MySQL**：第二个数据源，用于特定业务场景

## 配置说明

### 1. 依赖配置

已在 `pom.xml` 中添加 MySQL 驱动依赖：

```xml
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
</dependency>
```

### 2. 数据源配置

在 `application.yml` 中配置了两个数据源：

```yaml
spring:
  datasource:
    # SQLite 主数据源（默认数据源）
    url: 'jdbc:sqlite:${user.home}/getjobs/npe_get_jobs.db?...'
    driver-class-name: org.sqlite.JDBC
    # ... SQLite 配置 ...
    
    # MySQL 数据源配置
    mysql:
      url: 'jdbc:mysql://localhost:3306/npe_get_jobs?...'
      driver-class-name: com.mysql.cj.jdbc.Driver
      username: root
      password: root
      hikari:
        maximum-pool-size: 10
        minimum-idle: 5
        # ... 其他连接池配置 ...
```

### 3. 数据源隔离

- **SQLite 实体和仓库**：位于默认包路径下（如 `getjobs.modules.sasl.domain`）
- **MySQL 实体和仓库**：位于专门包路径下（`getjobs.modules.datasource.mysql.*`）

## 使用方式

### 在 MySQL 数据源中使用

1. **实体类**：放在 `getjobs.modules.datasource.mysql.domain` 包下
   ```java
   @Entity
   @Table(name = "your_table")
   public class YourEntity {
       // ...
   }
   ```

2. **仓库接口**：放在 `getjobs.modules.datasource.mysql.repository` 包下
   ```java
   @Repository
   public interface YourRepository extends JpaRepository<YourEntity, Long> {
       // ...
   }
   ```

3. **服务类中使用事务**：指定 MySQL 事务管理器
   ```java
   @Transactional(transactionManager = "mysqlTransactionManager")
   public void yourMethod() {
       // 使用 MySQL 数据源
   }
   ```

### 在 SQLite 数据源中使用

SQLite 数据源是默认数据源，无需特殊配置：

```java
@Repository
public interface YourRepository extends JpaRepository<YourEntity, Long> {
    // 默认使用 SQLite 数据源
}
```

## 验证数据源

项目已包含数据源验证模块，可以通过以下 API 验证 MySQL 数据源是否正常工作：

### 创建验证记录
```bash
POST /api/datasource/mysql/verification?message=测试消息
```

### 查询所有验证记录
```bash
GET /api/datasource/mysql/verification
```

### 查询最新验证记录
```bash
GET /api/datasource/mysql/verification/latest
```

### 统计信息
```bash
GET /api/datasource/mysql/verification/stats
```

## 验证表结构

MySQL 数据源中包含 `datasource_verification` 表，用于验证数据源连接：

```sql
CREATE TABLE datasource_verification (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    message VARCHAR(500) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME,
    remark VARCHAR(1000)
);
```

## 注意事项

1. **事务管理**：使用 MySQL 数据源时，必须在 `@Transactional` 注解中指定 `transactionManager = "mysqlTransactionManager"`
   
   > 📌 **重要：** 详细的事务管理器核心要点请参考 [事务管理器核心要点文档](./TRANSACTION_MANAGER_CORE_POINTS.md)

2. **实体包路径**：MySQL 实体必须放在 `getjobs.modules.datasource.mysql.domain` 包下，否则不会使用 MySQL 数据源

3. **仓库包路径**：MySQL 仓库必须放在 `getjobs.modules.datasource.mysql.repository` 包下

4. **数据库初始化**：首次使用前，确保 MySQL 数据库已创建：
   ```sql
   CREATE DATABASE npe_get_jobs CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

5. **连接配置**：根据实际环境修改 `application.yml` 中的 MySQL 连接信息（URL、用户名、密码等）

## 配置类说明

`MySQLDataSourceConfig` 负责配置 MySQL 数据源：
- 数据源 Bean：`mysqlDataSource`
- EntityManagerFactory：`mysqlEntityManagerFactory`
- 事务管理器：`mysqlTransactionManager`
- 实体扫描包：`getjobs.modules.datasource.mysql.domain`
- 仓库扫描包：`getjobs.modules.datasource.mysql.repository`

