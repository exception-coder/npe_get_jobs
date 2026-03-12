# npe_get_jobs 后端项目架构与编码规则

## 核心原则（必须遵守）

- **职责分离**：每层只做本层该做的事，不在 Controller 写业务/编排逻辑。
- **低耦合高内聚**：领域间通过接口通信，不直接依赖实现类。
- **领域自治**：按业务能力拆分，每个领域自行维护本领域的处理逻辑与依赖关系。
- **可维护性优先**：结构简单、边界清晰、便于单测与后续扩展。
- **代码质量**：遵循 SOLID 原则，保持代码简洁、可读、可测试。
- **团队维护**：义务团队维护开发，代码必须易于理解和扩展。

---

## 分层架构（DDD-lite）

```
Request → Controller → Application Service → Domain Service → Repository → Database
                                          ↓
                                    Infrastructure
```

| 层 | 包/位置 | 职责 | 禁止 | 示例 |
|----|---------|------|------|------|
| **API / Controller** | `controller/`、`modules/*/web/` | 协议处理：入参校验、调用应用层、返回 HTTP 响应 | 业务逻辑、直接调 Repository、领域规则、跨领域编排 | `UserController.register()` 只做参数校验和调用 `UserApplicationService` |
| **Application（应用/编排）** | `service/`、`modules/*/service/` | 编排用例：调领域/仓储、发事件、事务边界、跨领域协调 | 直接操作 Environment、复杂领域规则实现、技术细节 | `UserApplicationService.registerUser()` 编排注册流程 |
| **Domain（领域）** | `modules/*/domain/`、`modules/*/service/` | 业务规则、领域模型、领域服务、值对象 | 依赖 HTTP、依赖具体基础设施实现类、技术框架 | `UserDomainService.validateEmail()` 实现邮箱验证规则 |
| **Infrastructure（基础设施）** | `config/`、`common/infrastructure/`、`repository/` | 技术实现：DB、HTTP、Spring 配置、外部系统、缓存 | 业务决策、领域规则、跨领域逻辑 | `UserRepository` 实现数据持久化 |

---

## 项目结构规范

### 后端源代码结构

```
src/main/java/getjobs/
├── controller/                    # API 层（协议处理）
│   ├── UserController.java
│   ├── JobController.java
│   └── ...
├── service/                       # 应用层（编排用例）
│   ├── UserApplicationService.java
│   ├── JobApplicationService.java
│   └── impl/
│       ├── UserApplicationServiceImpl.java
│       └── ...
├── modules/                       # 领域模块（按业务能力拆分）
│   ├── user/
│   │   ├── web/                   # 本领域 Controller
│   │   │   └── UserModuleController.java
│   │   ├── service/               # 本领域应用/领域服务
│   │   │   ├── UserApplicationService.java
│   │   │   ├── UserDomainService.java
│   │   │   └── impl/
│   │   ├── domain/                # 领域模型
│   │   │   ├── User.java          # 聚合根
│   │   │   ├── UserProfile.java   # 值对象
│   │   │   └── UserRepository.java # 仓储接口
│   │   ├── dto/                   # 数据传输对象
│   │   │   ├── UserCreateRequest.java
│   │   │   └── UserResponse.java
│   │   ├── assembler/             # DTO 转换
│   │   │   └── UserAssembler.java
│   │   └── infrastructure/        # 本领域基础设施
│   │       ├── repository/
│   │       │   └── UserRepositoryImpl.java
│   │       └── ...
│   ├── job/
│   │   ├── web/
│   │   ├── service/
│   │   ├── domain/
│   │   ├── dto/
│   │   ├── assembler/
│   │   └── infrastructure/
│   └── ...
├── common/                        # 通用模块
│   ├── dto/                       # 通用 DTO
│   ├── util/                      # 工具类
│   ├── enums/                     # 枚举
│   ├── service/                   # 通用服务
│   └── infrastructure/            # 通用基础设施
│       ├── auth/                  # 认证
│       ├── webclient/             # HTTP 客户端
│       ├── repository/            # 通用仓储
│       ├── task/                  # 异步任务
│       ├── queue/                 # 消息队列
│       └── ...
├── config/                        # Spring 配置
│   ├── WebConfig.java
│   ├── SecurityConfig.java
│   └── ...
├── repository/                    # 通用数据访问
│   └── entity/                    # JPA Entity
└── utils/                         # 工具函数
```

### 前端源代码结构

```
frontend/src/
├── api/                           # HTTP 请求层
│   ├── http.ts                    # HTTP 客户端配置
│   ├── userApi.ts
│   ├── jobApi.ts
│   └── ...
├── modules/                       # 业务模块（按功能拆分）
│   ├── user/
│   │   ├── views/                 # 页面容器
│   │   │   └── UserPage.vue
│   │   ├── components/            # UI 组件
│   │   │   ├── UserForm.vue
│   │   │   └── UserList.vue
│   │   ├── composables/           # 业务逻辑
│   │   │   ├── useUserData.ts
│   │   │   └── useUserForm.ts
│   │   ├── service/               # 工具函数
│   │   │   └── userService.ts
│   │   ├── api/                   # 本模块 API
│   │   │   └── userApi.ts
│   │   ├── types/                 # 类型定义
│   │   │   └── user.ts
│   │   └── constants/             # 常量
│   │       └── userConstants.ts
│   ├── job/
│   │   ├── views/
│   │   ├── components/
│   │   ├── composables/
│   │   ├── service/
│   │   ├── api/
│   │   ├── types/
│   │   └── constants/
│   └── ...
├── components/                    # 通用组件
│   ├── GlobalSnackbar.vue
│   ├── StatusChip.vue
│   └── ...
├── composables/                   # 通用组合式函数
│   ├── useTaskExecutor.ts
│   └── ...
├── common/                        # 通用模块
│   ├── infrastructure/
│   │   └── auth/
│   │       └── auth.ts
│   └── ...
├── plugins/                       # Vue 插件
│   ├── vuetify.ts
│   └── vxe-table.ts
├── router/                        # 路由配置
│   └── index.ts
├── stores/                        # 全局状态（Pinia）
│   └── snackbar.ts
├── styles/                        # 全局样式
│   └── main.scss
├── types/                         # 全局类型
│   └── ...
├── App.vue
└── main.ts
```

---

## 后端编码规范

### Controller 规范

**职责：**
- 接收 HTTP 请求
- 参数校验（使用 `@Valid`）
- 调用应用层服务
- 返回 HTTP 响应

**禁止：**
- ❌ 业务逻辑
- ❌ 直接调用 Repository
- ❌ 复杂数据转换
- ❌ 跨领域编排

**示例：**

```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    private final UserApplicationService userApplicationService;
    
    public UserController(UserApplicationService userApplicationService) {
        this.userApplicationService = userApplicationService;
    }
    
    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@Valid @RequestBody UserCreateRequest request) {
        User user = userApplicationService.registerUser(request);
        return ResponseEntity.ok(UserAssembler.toResponse(user));
    }
}
```

### Application Service 规范

**职责：**
- 编排业务用例
- 调用领域服务和仓储
- 管理事务边界
- 发送领域事件
- 跨领域协调

**禁止：**
- ❌ 复杂业务规则实现
- ❌ 直接操作数据库
- ❌ 技术细节处理

**示例：**

```java
@Service
public class UserApplicationService {
    
    private final UserRepository userRepository;
    private final UserDomainService userDomainService;
    private final EventPublisher eventPublisher;
    
    @Transactional
    public User registerUser(UserCreateRequest request) {
        // 1. 调用领域服务进行业务规则验证
        userDomainService.validateEmail(request.getEmail());
        
        // 2. 创建领域模型
        User user = User.create(request.getName(), request.getEmail());
        
        // 3. 保存到仓储
        User savedUser = userRepository.save(user);
        
        // 4. 发送领域事件
        eventPublisher.publish(new UserRegisteredEvent(savedUser.getId()));
        
        return savedUser;
    }
}
```

### Domain Service 规范

**职责：**
- 实现复杂业务规则
- 不涉及技术细节
- 可被多个应用服务复用

**禁止：**
- ❌ 依赖 HTTP、数据库等技术
- ❌ 依赖具体基础设施实现类

**示例：**

```java
@Service
public class UserDomainService {
    
    public void validateEmail(String email) {
        if (!email.matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
            throw new InvalidEmailException("邮箱格式不正确");
        }
    }
    
    public boolean isPasswordStrong(String password) {
        return password.length() >= 8 && 
               password.matches(".*[A-Z].*") && 
               password.matches(".*[0-9].*");
    }
}
```

### Repository 规范

**职责：**
- 数据持久化
- 数据查询
- 实现仓储接口

**禁止：**
- ❌ 业务逻辑
- ❌ 跨领域查询

**示例：**

```java
public interface UserRepository {
    User save(User user);
    Optional<User> findById(Long id);
    Optional<User> findByEmail(String email);
}

@Repository
public class UserRepositoryImpl implements UserRepository {
    
    private final UserJpaRepository jpaRepository;
    
    @Override
    public User save(User user) {
        UserEntity entity = UserAssembler.toEntity(user);
        UserEntity saved = jpaRepository.save(entity);
        return UserAssembler.toDomain(saved);
    }
    
    @Override
    public Optional<User> findById(Long id) {
        return jpaRepository.findById(id)
            .map(UserAssembler::toDomain);
    }
}
```

### 命名规范

| 类型 | 格式 | 示例 |
|------|------|------|
| Controller | `{Domain}Controller` | `UserController` |
| Application Service | `{Domain}ApplicationService` | `UserApplicationService` |
| Domain Service | `{Domain}DomainService` | `UserDomainService` |
| Repository Interface | `{Domain}Repository` | `UserRepository` |
| Repository Impl | `{Domain}RepositoryImpl` | `UserRepositoryImpl` |
| Entity | `{Domain}Entity` | `UserEntity` |
| Domain Model | `{Domain}` | `User` |
| DTO | `{Domain}{Operation}Request/Response` | `UserCreateRequest`, `UserResponse` |
| Assembler | `{Domain}Assembler` | `UserAssembler` |
| Exception | `{Domain}Exception` | `UserNotFoundException` |

### 方法规范

- **单一职责**：每个方法只做一件事
- **参数数量**：不超过 3 个，超过 3 个使用 DTO
- **方法长度**：不超过 50 行
- **返回值**：避免返回 null，使用 Optional
- **命名**：动词开头，清晰表达意图

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
```

### 异常处理

- **不要吞异常**：捕获后必须处理或重新抛出
- **使用具体异常**：避免捕获 Exception
- **业务异常**：使用自定义业务异常

**示例：**

```java
// ✅ 好的异常处理
try {
    userRepository.save(user);
} catch (DataIntegrityViolationException e) {
    throw new UserAlreadyExistsException("用户已存在", e);
}

// ❌ 不好的异常处理
try {
    userRepository.save(user);
} catch (Exception e) {
    // 吞异常，不处理
}
```

---

## 领域模块开发指南

### 新增领域模块步骤

1. **创建模块目录**：`src/main/java/getjobs/modules/{domain}/`
2. **定义领域模型**：`domain/` 目录下创建聚合根和值对象
3. **定义仓储接口**：`domain/` 目录下创建 Repository 接口
4. **实现应用服务**：`service/` 目录下创建 ApplicationService
5. **实现领域服务**：`service/` 目录下创建 DomainService（如需要）
6. **实现仓储**：`infrastructure/repository/` 目录下实现 Repository
7. **创建 Controller**：`web/` 目录下创建 Controller
8. **创建 DTO 和 Assembler**：`dto/` 和 `assembler/` 目录

### 领域间通信

**通过接口通信，不直接依赖实现类：**

```java
// ✅ 好的做法：通过接口依赖
@Service
public class OrderApplicationService {
    private final UserRepository userRepository;  // 接口
    
    public OrderApplicationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

// ❌ 不好的做法：直接依赖实现类
@Service
public class OrderApplicationService {
    private final UserRepositoryImpl userRepository;  // 实现类
}
```

---

## 代码质量检查清单

- [ ] Controller 只做协议处理，不包含业务逻辑
- [ ] Application Service 编排用例，调用领域服务和仓储
- [ ] Domain Service 实现业务规则，不依赖技术细节
- [ ] Repository 只做数据持久化，不包含业务逻辑
- [ ] 方法参数不超过 3 个
- [ ] 方法长度不超过 50 行
- [ ] 使用 Optional 而不是返回 null
- [ ] 异常处理正确，不吞异常
- [ ] 命名清晰，遵循规范
- [ ] 单元测试覆盖率 > 80%

---

## 参考资源

- [Spring Boot 官方文档](https://spring.io/projects/spring-boot)
- [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Domain-Driven Design](https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215)
- [SOLID 原则](https://en.wikipedia.org/wiki/SOLID)
