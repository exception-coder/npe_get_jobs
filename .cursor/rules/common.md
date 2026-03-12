# npe_get_jobs 通用编码规范

## 核心原则

- **代码质量优先**：遵循 SOLID 原则，保持代码简洁、可读、可测试。
- **团队协作**：义务团队维护开发，代码必须易于理解和扩展。
- **一致性**：统一的编码风格、命名规范、项目结构。
- **可维护性**：清晰的代码注释、完整的文档、易于调试。

---

## 代码质量规范

### 通用命名规范

| 类型 | 格式 | 示例 | 说明 |
|------|------|------|------|
| 类/接口 | PascalCase | `UserService`、`IUserRepository` | 首字母大写 |
| 方法/函数 | camelCase | `getUserById`、`saveUser` | 首字母小写，动词开头 |
| 变量 | camelCase | `userName`、`isActive` | 首字母小写，有意义 |
| 常量 | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT`、`API_TIMEOUT` | 全大写，下划线分隔 |
| 文件名 | kebab-case 或 PascalCase | `user-service.ts`、`UserService.java` | 与主要导出一致 |
| 目录名 | kebab-case | `user-module`、`common-utils` | 全小写，下划线分隔 |

### 方法规范

**单一职责原则：**
- 每个方法只做一件事
- 方法名清晰表达意图
- 避免副作用

**参数规范：**
- 参数数量不超过 3 个
- 超过 3 个参数使用 DTO/对象
- 避免使用 boolean 参数（使用枚举或对象）

**方法长度：**
- 不超过 50 行
- 复杂逻辑提取为独立方法
- 使用辅助方法提高可读性

**返回值：**
- 避免返回 null，使用 Optional（Java）或 null coalescing（TypeScript）
- 返回类型明确
- 文档说明返回值含义

**示例：**

```java
// ✅ 好的方法
public Optional<User> findByEmail(String email) {
    return userRepository.findByEmail(email);
}

// ❌ 不好的方法
public User findByEmailOrNameOrPhone(String email, String name, String phone, 
                                     String address, String city, String country) {
    // 参数过多，应该使用 DTO
}

// ✅ 改进版本
public Optional<User> findBySearchCriteria(UserSearchCriteria criteria) {
    return userRepository.findByCriteria(criteria);
}
```

### 异常处理

**原则：**
- 不要吞异常：捕获后必须处理或重新抛出
- 使用具体异常：避免捕获 Exception
- 业务异常：使用自定义业务异常
- 记录异常：使用日志记录异常信息

**示例：**

```java
// ✅ 好的异常处理
try {
    userRepository.save(user);
} catch (DataIntegrityViolationException e) {
    log.error("用户已存在", e);
    throw new UserAlreadyExistsException("用户已存在", e);
} catch (Exception e) {
    log.error("保存用户失败", e);
    throw new SystemException("保存用户失败", e);
}

// ❌ 不好的异常处理
try {
    userRepository.save(user);
} catch (Exception e) {
    // 吞异常，不处理
}
```

### 注释规范

**何时写注释：**
- 复杂的业务逻辑
- 非显而易见的实现
- 重要的设计决策
- 已知的限制或 TODO

**何时不写注释：**
- 代码本身清晰明了
- 方法名已经表达意图
- 简单的 getter/setter

**示例：**

```java
// ✅ 好的注释
/**
 * 根据邮箱查找用户
 * 
 * @param email 用户邮箱
 * @return 用户信息，如果不存在返回空
 */
public Optional<User> findByEmail(String email) {
    return userRepository.findByEmail(email);
}

// ❌ 不好的注释
// 根据邮箱查找用户
public Optional<User> findByEmail(String email) {
    return userRepository.findByEmail(email);
}
```

---

## 版本控制规范

### Commit 消息格式

遵循 Conventional Commits 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type 类型：**

| Type | 说明 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat(user): 添加用户注册功能` |
| `fix` | Bug 修复 | `fix(auth): 修复登录验证失败` |
| `docs` | 文档 | `docs: 更新 README` |
| `style` | 格式 | `style: 调整代码缩进` |
| `refactor` | 重构 | `refactor(user): 优化用户查询逻辑` |
| `perf` | 性能优化 | `perf: 优化数据库查询性能` |
| `test` | 测试 | `test(user): 添加用户注册测试` |
| `build` | 构建 | `build: 升级依赖版本` |
| `ci` | CI/CD | `ci: 更新 GitHub Actions 配置` |
| `chore` | 其他 | `chore: 更新 .gitignore` |

**Subject 主题：**
- 使用祈使句，不超过 50 字符
- 不以句号结尾
- 中文项目用中文，英文项目用英文

**Body 正文（可选）：**
- 详细说明变更原因和影响
- 每行不超过 72 字符
- 使用 `-` 列表说明主要变更点

**示例：**

```
feat(user): 添加用户注册功能

- 实现用户名密码注册
- 添加邮箱验证
- 集成 JWT 认证

Closes #123
```

### 分支命名规范

```
<type>/<description>
```

**Type 类型：**
- `feature/` - 新功能
- `fix/` - Bug 修复
- `refactor/` - 代码重构
- `docs/` - 文档更新
- `test/` - 测试相关

**示例：**
- `feature/user-registration`
- `fix/login-validation-error`
- `refactor/database-layer`
- `docs/api-documentation`

---

## 文档规范

### README 规范

每个项目和模块都应该有 README.md，包含：

1. **项目描述**：简要说明项目的目的和功能
2. **快速开始**：如何快速启动项目
3. **项目结构**：目录结构说明
4. **开发指南**：开发环境配置、常用命令
5. **API 文档**：主要 API 说明（如适用）
6. **贡献指南**：如何贡献代码
7. **许可证**：项目许可证

### 代码注释规范

**Java 文档注释：**

```java
/**
 * 用户服务
 * 
 * 提供用户相关的业务操作，包括注册、登录、查询等。
 */
@Service
public class UserService {
    
    /**
     * 根据邮箱查找用户
     * 
     * @param email 用户邮箱
     * @return 用户信息，如果不存在返回空
     * @throws InvalidEmailException 如果邮箱格式不正确
     */
    public Optional<User> findByEmail(String email) {
        // ...
    }
}
```

**TypeScript 文档注释：**

```typescript
/**
 * 用户数据管理
 * 
 * 管理用户数据的获取、保存和更新
 */
export function useUserData() {
    // ...
}
```

---

## 测试规范

### 单元测试

**原则：**
- 测试覆盖率 > 80%
- 每个方法至少一个测试
- 测试应该独立、快速、可重复

**命名规范：**
- 测试类：`{ClassName}Test`
- 测试方法：`test{MethodName}{Scenario}{Expected}`

**示例：**

```java
class UserServiceTest {
    
    @Test
    void testFindByEmailWhenUserExistsShouldReturnUser() {
        // Arrange
        String email = "user@example.com";
        User expected = new User(1L, "John", email);
        when(userRepository.findByEmail(email)).thenReturn(Optional.of(expected));
        
        // Act
        Optional<User> result = userService.findByEmail(email);
        
        // Assert
        assertTrue(result.isPresent());
        assertEquals(expected, result.get());
    }
    
    @Test
    void testFindByEmailWhenUserNotExistsShouldReturnEmpty() {
        // Arrange
        String email = "notfound@example.com";
        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());
        
        // Act
        Optional<User> result = userService.findByEmail(email);
        
        // Assert
        assertTrue(result.isEmpty());
    }
}
```

### 集成测试

**原则：**
- 测试真实的系统交互
- 使用测试数据库或 Mock 外部服务
- 测试应该快速且可靠

---

## 性能优化

### 后端性能优化

**数据库查询：**
- 使用索引优化查询
- 避免 N+1 查询问题
- 使用分页处理大数据集
- 考虑使用缓存

**代码优化：**
- 避免在循环中创建对象
- 使用集合的合适实现
- 避免过度的对象创建

### 前端性能优化

**加载性能：**
- 代码分割（Code Splitting）
- 懒加载（Lazy Loading）
- 压缩资源文件
- 使用 CDN

**运行时性能：**
- 避免不必要的重新渲染
- 使用 `computed` 缓存计算结果
- 使用 `watch` 监听状态变化
- 避免在模板中执行复杂计算

---

## 安全规范

### 后端安全

**认证和授权：**
- 使用 JWT 或 OAuth 2.0
- 实现权限检查
- 避免硬编码密钥

**数据安全：**
- 使用参数化查询防止 SQL 注入
- 验证和清理用户输入
- 使用 HTTPS 传输敏感数据
- 加密敏感数据

**错误处理：**
- 不要暴露系统内部信息
- 使用通用错误消息
- 记录详细的错误日志

### 前端安全

**XSS 防护：**
- 避免使用 `v-html`
- 使用 Vue 的自动转义
- 验证用户输入

**CSRF 防护：**
- 使用 CSRF Token
- 验证请求来源

---

## 开发日志

**所有代码变更必须登记到开发日志。**

- 每次编码任务完成后，在项目根目录下 `docs/dev-log.md` 中**追加**一条记录。
- 若 `docs/` 或 `dev-log.md` 不存在，则先创建再追加。
- 每条记录需包含：日期、任务描述、创建/修改的文件、关键设计决策、变更原因。
- 使用简明语言书写，便于非开发人员理解；每条约 5～10 行，追加写入，不覆盖已有日志。

---

## 代码审查清单

- [ ] 代码遵循命名规范
- [ ] 方法长度不超过 50 行
- [ ] 参数数量不超过 3 个
- [ ] 异常处理正确
- [ ] 注释清晰完整
- [ ] 单元测试覆盖率 > 80%
- [ ] 没有硬编码的值
- [ ] 没有 TODO 或 FIXME 注释
- [ ] 代码易于理解和维护
- [ ] 遵循项目的架构规范

---

## 参考资源

- [SOLID 原则](https://en.wikipedia.org/wiki/SOLID)
- [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
