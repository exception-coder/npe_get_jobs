# Hibernate 懒加载异常 - 快速参考

## 🎯 一句话理解

**懒加载异常 = 在 Session 关闭后，尝试访问未加载的关联数据**

---

## 📖 核心概念

### 什么是懒加载？

```
懒加载 = "需要的时候再加载，不需要就不加载"

类比：借书时只给你一本书，需要相关书籍时再去找管理员要
```

### 为什么会异常？

```
时间线：
1. 查询 PlanSection（Session 开启）✅
2. 方法返回（Session 关闭）❌
3. 访问 rows 集合（Session 已关闭）💥 → 异常！
```

---

## 🔧 解决方案（按优先级）

### 方案 1：JOIN FETCH（最推荐）⭐

```java
@Query("SELECT DISTINCT ps FROM PlanSection ps " +
       "LEFT JOIN FETCH ps.rows " +
       "WHERE ps.isDeleted = false")
List<PlanSection> findAllActiveOrderByIdAsc();
```

**优点**：一次查询加载所有数据，性能最好

---

### 方案 2：@Transactional

```java
@Transactional(readOnly = true)
public List<PlanSectionResponse> listPlanSections() {
    // Session 在整个方法执行期间保持开启
    return planSectionRepository.findAllActiveOrderByIdAsc().stream()
            .map(PlanSectionResponse::from)
            .toList();
}
```

**优点**：简单直接  
**缺点**：可能导致 N+1 查询

---

### 方案 3：@EntityGraph

```java
@Entity
@NamedEntityGraph(
    name = "PlanSection.withRows",
    attributeNodes = @NamedAttributeNode("rows")
)
public class PlanSection { ... }

@Repository
@EntityGraph("PlanSection.withRows")
@Query("SELECT ps FROM PlanSection ps WHERE ps.isDeleted = false")
List<PlanSection> findAllActiveOrderByIdAsc();
```

---

## ❌ 常见误区

| 误区 | 正确理解 |
|------|---------|
| 数据库响应慢 | Session 正常关闭，不是超时 |
| 需要增加连接超时 | 这是 Session 生命周期问题，不是超时问题 |
| 所有关联都用 EAGER | 保持 LAZY，按需通过查询加载 |
| Controller 层加 @Transactional | 事务应该在 Service 层管理 |

---

## ✅ 最佳实践

1. **默认使用 LAZY**：保持实体类关联为懒加载
2. **查询时加载**：使用 JOIN FETCH 在需要时加载
3. **事务在 Service 层**：Controller 不管理事务
4. **为不同场景创建专门查询**：基础查询 + 带关联查询

---

## 🔍 快速诊断

遇到 `LazyInitializationException` 时：

1. ✅ 找到访问懒加载属性的代码位置
2. ✅ 检查是否在 Session 关闭后访问
3. ✅ 使用 JOIN FETCH 或 @Transactional 修复

---

## 📝 实际案例

### 问题代码

```java
// ❌ 没有 @Transactional，Session 在 Repository 返回后关闭
public List<PlanSectionResponse> listPlanSections() {
    List<PlanSection> sections = planSectionRepository.findAllActiveOrderByIdAsc();
    return sections.stream()
            .map(PlanSectionResponse::from)  // ← 这里访问 rows 会失败
            .toList();
}
```

### 修复代码

```java
// ✅ 方案 1：使用 JOIN FETCH（推荐）
@Query("SELECT DISTINCT ps FROM PlanSection ps " +
       "LEFT JOIN FETCH ps.rows " +
       "WHERE ps.isDeleted = false")
List<PlanSection> findAllActiveOrderByIdAsc();

// ✅ 方案 2：添加 @Transactional
@Transactional(readOnly = true)
public List<PlanSectionResponse> listPlanSections() {
    // ...
}
```

---

**详细文档**：参见 `HIBERNATE_LAZY_LOADING_EXCEPTION.md`

