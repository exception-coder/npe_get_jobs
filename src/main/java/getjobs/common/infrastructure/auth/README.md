# 认证拦截器模块

## 📋 概述

基于 JWT 的认证拦截器基础设施模块，用于在请求处理前验证用户身份，并将认证信息存储到 `RequestContextHolder` 中，供后续业务逻辑使用。

## ✨ 主要特性

- 🔐 **JWT 验证**：自动验证 JWT Token 的有效性（签名、过期时间等）
- 🍪 **多源支持**：支持从 Cookie 或请求头中获取 Token
- 📦 **上下文存储**：将认证信息存储到 RequestContextHolder，方便后续获取
- 🛠️ **便捷工具**：提供 `AuthContext` 工具类，简化认证信息获取
- ⚙️ **灵活配置**：支持自定义拦截路径和排除路径
- 🚫 **非阻断式**：不会拒绝未认证的请求，由业务层决定如何处理

## 📦 模块结构

```
auth/
├── AuthInterceptor.java          # 认证拦截器（核心组件）
├── AuthInterceptorConfig.java    # 拦截器配置类
├── AuthContext.java              # 认证上下文工具类
├── AuthContextHolder.java        # 认证上下文常量定义
├── package-info.java             # 包文档
└── README.md                     # 使用文档
```

## 🚀 快速开始

### 1. 基本使用

拦截器会自动注册并处理所有配置的路径。在 Controller 或 Service 中使用 `AuthContext` 获取认证信息：

```java
@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/info")
    public ResponseEntity<UserInfo> getUserInfo() {
        // 获取当前用户名
        String username = AuthContext.getUsername();
        
        if (username == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        // 获取用户角色和权限
        List<String> roles = AuthContext.getRoles();
        List<String> permissions = AuthContext.getPermissions();

        // 检查用户是否拥有指定角色
        if (AuthContext.hasRole("ADMIN")) {
            // 管理员逻辑
        }

        // 检查用户是否拥有指定权限
        if (AuthContext.hasPermission("user:edit")) {
            // 编辑权限逻辑
        }

        return ResponseEntity.ok(userInfo);
    }
}
```

### 2. 配置拦截路径（可选）

在 `application.yml` 中配置：

```yaml
# 认证拦截器配置
auth:
  interceptor:
    enabled: true                    # 是否启用（默认 true）
    include-patterns:                # 需要拦截的路径（Ant 路径模式）
      - /api/**
    exclude-patterns:                # 排除的路径（Ant 路径模式）
      - /api/auth/**                 # 认证相关接口
      - /actuator/**                 # 监控端点
      - /error                       # 错误处理
      - /favicon.ico                 # 网站图标
    token-cookie-name: token         # Cookie 中的 Token 名称（默认 token）
```

**注意**：如果不配置，将使用默认值。默认配置如下：
- `include-patterns`: `["/api/**"]`
- `exclude-patterns`: `["/api/auth/**", "/actuator/**", "/error", "/favicon.ico"]`
- `token-cookie-name`: `"token"`

### 3. Token 传递方式

拦截器支持三种方式获取 Token，优先级如下：

#### 方式 1：Authorization 请求头（推荐）

```bash
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  http://localhost:8080/api/user/info
```

#### 方式 2：X-Auth-Token 请求头

```bash
curl -H "X-Auth-Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  http://localhost:8080/api/user/info
```

#### 方式 3：Cookie

```bash
curl -H "Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  http://localhost:8080/api/user/info
```

## 📖 API 参考

### AuthContext 工具类

#### 基本信息获取

| 方法 | 返回类型 | 说明 |
|------|----------|------|
| `getUsername()` | `String` | 获取当前用户名 |
| `getRoles()` | `List<String>` | 获取用户角色列表 |
| `getPermissions()` | `List<String>` | 获取用户权限列表 |
| `getToken()` | `String` | 获取原始 JWT Token |
| `isAuthenticated()` | `boolean` | 检查是否已认证 |
| `getAuthError()` | `String` | 获取认证错误信息 |

#### 权限检查方法

| 方法 | 说明 |
|------|------|
| `hasRole(String roleCode)` | 检查是否拥有指定角色 |
| `hasPermission(String permissionCode)` | 检查是否拥有指定权限 |
| `hasAnyRole(String... roleCodes)` | 检查是否拥有任意一个角色 |
| `hasAnyPermission(String... permissionCodes)` | 检查是否拥有任意一个权限 |

### 使用示例

```java
@Service
public class UserService {

    public void updateUser(Long userId, UpdateUserRequest request) {
        // 检查是否已认证
        if (!AuthContext.isAuthenticated()) {
            throw new UnauthorizedException("未认证");
        }

        // 获取当前用户名
        String currentUsername = AuthContext.getUsername();

        // 检查是否为管理员
        if (AuthContext.hasRole("ADMIN")) {
            // 管理员可以更新任何用户
            updateUserInternal(userId, request);
        } else {
            // 普通用户只能更新自己
            if (!currentUsername.equals(getUserById(userId).getUsername())) {
                throw new ForbiddenException("无权更新其他用户");
            }
            updateUserInternal(userId, request);
        }
    }

    public void deleteUser(Long userId) {
        // 检查是否拥有删除权限
        if (!AuthContext.hasPermission("user:delete")) {
            throw new ForbiddenException("无删除权限");
        }

        // 检查是否拥有管理员角色或删除权限
        if (!AuthContext.hasAnyRole("ADMIN", "USER_MANAGER") 
            && !AuthContext.hasPermission("user:delete")) {
            throw new ForbiddenException("无权删除用户");
        }

        deleteUserInternal(userId);
    }
}
```

## 🔧 配置说明

### 配置属性

所有配置项都通过 `auth.interceptor.*` 前缀进行配置：

| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `enabled` | `boolean` | `true` | 是否启用认证拦截器 |
| `include-patterns` | `List<String>` | `["/api/**"]` | 需要拦截的路径（Ant 路径模式） |
| `exclude-patterns` | `List<String>` | `["/api/auth/**", "/actuator/**", "/error", "/favicon.ico"]` | 排除的路径（Ant 路径模式） |
| `token-cookie-name` | `String` | `"token"` | Cookie 中的 Token 名称 |

### 默认配置

如果不进行任何配置，拦截器将使用以下默认值：

- **包含路径**：`/api/**`（所有 API 接口）
- **排除路径**：
  - `/api/auth/**`（认证相关接口）
  - `/actuator/**`（监控端点）
  - `/error`（错误处理）
  - `/favicon.ico`（网站图标）
- **Cookie 名称**：`token`

### 自定义配置示例

```yaml
auth:
  interceptor:
    enabled: true
    include-patterns:
      - /api/**
      - /admin/**
    exclude-patterns:
      - /api/public/**
      - /api/auth/**
      - /actuator/**
    token-cookie-name: auth_token  # 自定义 Cookie 名称
```

### 完全自定义配置

```yaml
auth:
  interceptor:
    enabled: true
    include-patterns:
      - /api/v1/**
      - /api/v2/**
      - /admin/**
    exclude-patterns:
      - /api/v1/public/**
      - /api/v1/auth/**
      - /api/v2/public/**
      - /actuator/**
      - /error
      - /favicon.ico
      - /swagger-ui/**
      - /v3/api-docs/**
    token-cookie-name: jwt_token
```

## 🎯 最佳实践

### 1. 在 Controller 层进行认证检查

```java
@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/info")
    public ResponseEntity<UserInfo> getUserInfo() {
        // 检查是否已认证
        if (!AuthContext.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String username = AuthContext.getUsername();
        // ... 业务逻辑
        return ResponseEntity.ok(userInfo);
    }
}
```

### 2. 在 Service 层进行权限检查

```java
@Service
public class UserService {

    @Transactional
    public void deleteUser(Long userId) {
        // 权限检查
        if (!AuthContext.hasPermission("user:delete")) {
            throw new ForbiddenException("无删除权限");
        }

        // 业务逻辑
        userRepository.deleteById(userId);
    }
}
```

### 3. 使用自定义注解进行权限控制

可以结合 AOP 实现更优雅的权限控制：

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RequirePermission {
    String[] value();
}

@Aspect
@Component
public class PermissionAspect {

    @Around("@annotation(requirePermission)")
    public Object checkPermission(ProceedingJoinPoint joinPoint, RequirePermission requirePermission) {
        String[] permissions = requirePermission.value();
        
        if (!AuthContext.hasAnyPermission(permissions)) {
            throw new ForbiddenException("无权限");
        }

        return joinPoint.proceed();
    }
}

// 使用
@RestController
public class UserController {
    
    @RequirePermission("user:delete")
    @DeleteMapping("/api/user/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}
```

### 4. 处理认证失败

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UnauthorizedException.class)
    public ResponseEntity<ErrorResponse> handleUnauthorized(UnauthorizedException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(new ErrorResponse("UNAUTHORIZED", e.getMessage()));
    }

    @ExceptionHandler(ForbiddenException.class)
    public ResponseEntity<ErrorResponse> handleForbidden(ForbiddenException e) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
            .body(new ErrorResponse("FORBIDDEN", e.getMessage()));
    }
}
```

## 🔍 工作原理

### 处理流程

1. **请求到达**：拦截器拦截匹配的请求路径
2. **提取 Token**：从 Cookie 或请求头中提取 JWT Token
3. **验证 Token**：使用 `JwtTokenService` 验证 Token 的有效性
4. **解析信息**：从 Token 中提取用户名、角色、权限等信息
5. **存储上下文**：将信息存储到 `RequestContextHolder`
6. **继续处理**：继续处理请求，不中断流程

### 上下文存储

拦截器将以下信息存储到 `RequestContextHolder`：

| Key | 类型 | 说明 |
|-----|------|------|
| `AUTH_USERNAME` | `String` | 用户名 |
| `AUTH_ROLES` | `List<String>` | 角色列表 |
| `AUTH_PERMISSIONS` | `List<String>` | 权限列表 |
| `AUTH_TOKEN` | `String` | 原始 Token |
| `AUTH_AUTHENTICATED` | `Boolean` | 是否已认证 |
| `AUTH_ERROR` | `String` | 错误信息（如果认证失败） |

## 🐛 故障排查

### 1. 拦截器未生效

**检查项**：
- 确认 `auth.interceptor.enabled=true`（或未配置，默认启用）
- 确认请求路径匹配 `include-patterns`
- 确认请求路径不在 `exclude-patterns` 中
- 查看日志确认拦截器已注册

### 2. 无法获取认证信息

**可能原因**：
- Token 未传递或传递方式不正确
- Token 格式错误或已过期
- 请求不在拦截器作用范围内

**解决方案**：
```java
// 检查认证状态
if (!AuthContext.isAuthenticated()) {
    String error = AuthContext.getAuthError();
    log.warn("认证失败: {}", error);
}
```

### 3. Token 验证失败

**常见错误**：
- `JWTVerificationException`：Token 签名错误或已过期
- `AlgorithmMismatchException`：签名算法不匹配
- `TokenExpiredException`：Token 已过期

**解决方案**：
- 检查 JWT 配置（secret、issuer 等）
- 确认 Token 未过期
- 确认 Token 格式正确

## 📝 日志说明

### 日志级别配置

```yaml
logging:
  level:
    getjobs.common.infrastructure.auth: DEBUG
```

### 日志示例

**拦截器注册**：
```
INFO  AuthInterceptorConfig - ═══════════════════════════════════════
INFO  AuthInterceptorConfig -         认证拦截器配置完成
INFO  AuthInterceptorConfig - ═══════════════════════════════════════
INFO  AuthInterceptorConfig - 包含路径:
INFO  AuthInterceptorConfig -   ✓ /api/**
INFO  AuthInterceptorConfig - 排除路径:
INFO  AuthInterceptorConfig -   ✗ /api/auth/**
INFO  AuthInterceptorConfig -   ✗ /actuator/**
```

**认证成功**：
```
DEBUG AuthInterceptor - 从 Authorization 请求头获取 Token
DEBUG AuthInterceptor - JWT 认证成功: username=admin, roles=[ADMIN], permissions=[user:add, user:edit]
```

**认证失败**：
```
WARN  AuthInterceptor - JWT 验证失败: The Token has expired on Mon Jan 01 12:00:00 CST 2025.
```

## 🔐 安全建议

1. **使用 HTTPS**：在生产环境中使用 HTTPS 传输 Token
2. **Token 过期时间**：设置合理的 Token 过期时间
3. **刷新 Token**：实现 Token 刷新机制
4. **敏感信息**：不要在 Token 中存储敏感信息
5. **日志安全**：避免在日志中输出完整的 Token

## 🤝 与其他模块集成

### 与 Spring Security 集成

如果项目使用了 Spring Security，可以结合使用：

```java
@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        http
            .addFilterBefore(new AuthFilter(), UsernamePasswordAuthenticationFilter.class)
            // ... 其他配置
        return http.build();
    }
}
```

### 与权限模块集成

可以结合项目的权限模块实现细粒度的权限控制：

```java
@Service
public class PermissionService {

    public boolean checkPermission(String permissionCode) {
        if (!AuthContext.isAuthenticated()) {
            return false;
        }

        // 检查用户是否拥有权限
        return AuthContext.hasPermission(permissionCode);
    }
}
```

## 📄 相关文档

- [JWT Token Service](../modules/auth/service/JwtTokenService.java)
- [Auth Service](../modules/auth/service/AuthService.java)
- [Spring WebMvcConfigurer 文档](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/servlet/config/annotation/WebMvcConfigurer.html)

---

**最后更新**：2025-01-XX

