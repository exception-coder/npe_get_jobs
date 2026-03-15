# 认证拦截器使用示例

本文档提供了认证拦截器的实际使用示例。

## 基础示例

### 1. 在 Controller 中获取认证信息

```java
package getjobs.modules.user.web;

import getjobs.common.infrastructure.auth.AuthContext;
import getjobs.modules.user.dto.UserInfoDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    @GetMapping("/info")
    public ResponseEntity<UserInfoDTO> getUserInfo() {
        // 检查是否已认证
        if (!AuthContext.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        // 获取当前用户名
        String username = AuthContext.getUsername();
        
        // 获取用户角色和权限
        List<String> roles = AuthContext.getRoles();
        List<String> permissions = AuthContext.getPermissions();

        // 构建用户信息
        UserInfoDTO userInfo = new UserInfoDTO();
        userInfo.setUsername(username);
        userInfo.setRoles(roles);
        userInfo.setPermissions(permissions);

        return ResponseEntity.ok(userInfo);
    }

    @GetMapping("/profile")
    public ResponseEntity<UserProfileDTO> getUserProfile() {
        String username = AuthContext.getUsername();
        if (username == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        // 查询用户详细信息
        UserProfileDTO profile = userService.getUserProfile(username);
        return ResponseEntity.ok(profile);
    }
}
```

### 2. 在 Service 中进行权限检查

```java
package getjobs.modules.user.service;

import getjobs.common.infrastructure.auth.AuthContext;
import getjobs.modules.user.domain.User;
import getjobs.modules.user.infrastructure.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    /**
     * 更新用户信息
     */
    @Transactional
    public void updateUser(Long userId, UpdateUserRequest request) {
        // 检查是否已认证
        if (!AuthContext.isAuthenticated()) {
            throw new UnauthorizedException("未认证");
        }

        String currentUsername = AuthContext.getUsername();
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new NotFoundException("用户不存在"));

        // 权限检查：管理员可以更新任何用户，普通用户只能更新自己
        if (AuthContext.hasRole("ADMIN")) {
            // 管理员逻辑
            updateUserInternal(user, request);
        } else {
            // 普通用户只能更新自己
            if (!currentUsername.equals(user.getUsername())) {
                throw new ForbiddenException("无权更新其他用户");
            }
            updateUserInternal(user, request);
        }
    }

    /**
     * 删除用户
     */
    @Transactional
    public void deleteUser(Long userId) {
        // 检查删除权限
        if (!AuthContext.hasPermission("user:delete")) {
            throw new ForbiddenException("无删除权限");
        }

        // 检查是否为管理员或用户管理员
        if (!AuthContext.hasAnyRole("ADMIN", "USER_MANAGER")) {
            throw new ForbiddenException("无权删除用户");
        }

        userRepository.deleteById(userId);
        log.info("用户已删除: userId={}, operator={}", userId, AuthContext.getUsername());
    }

    /**
     * 导出用户数据
     */
    public void exportUsers() {
        // 检查导出权限
        if (!AuthContext.hasPermission("user:export")) {
            throw new ForbiddenException("无导出权限");
        }

        // 业务逻辑
        // ...
    }

    private void updateUserInternal(User user, UpdateUserRequest request) {
        // 更新逻辑
        if (request.getDisplayName() != null) {
            user.setDisplayName(request.getDisplayName());
        }
        if (request.getEmail() != null) {
            user.setEmail(request.getEmail());
        }
        userRepository.save(user);
    }
}
```

### 3. 使用自定义注解进行权限控制

#### 定义权限注解

```java
package getjobs.modules.auth.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 要求指定权限
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RequirePermission {
    /**
     * 需要的权限编码（任意一个即可）
     */
    String[] value();
}

/**
 * 要求指定角色
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RequireRole {
    /**
     * 需要的角色编码（任意一个即可）
     */
    String[] value();
}
```

#### 实现 AOP 切面

```java
package getjobs.modules.auth.aspect;

import getjobs.common.infrastructure.auth.AuthContext;
import getjobs.modules.auth.annotation.RequirePermission;
import getjobs.modules.auth.annotation.RequireRole;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Slf4j
@Aspect
@Component
public class PermissionAspect {

    /**
     * 权限检查切面
     */
    @Around("@annotation(requirePermission)")
    public Object checkPermission(ProceedingJoinPoint joinPoint, RequirePermission requirePermission) {
        // 检查是否已认证
        if (!AuthContext.isAuthenticated()) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "未认证");
        }

        // 检查权限
        String[] permissions = requirePermission.value();
        if (!AuthContext.hasAnyPermission(permissions)) {
            log.warn("权限检查失败: user={}, required={}", 
                AuthContext.getUsername(), String.join(", ", permissions));
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "无权限");
        }

        try {
            return joinPoint.proceed();
        } catch (Throwable e) {
            log.error("执行方法异常", e);
            throw new RuntimeException(e);
        }
    }

    /**
     * 角色检查切面
     */
    @Around("@annotation(requireRole)")
    public Object checkRole(ProceedingJoinPoint joinPoint, RequireRole requireRole) {
        // 检查是否已认证
        if (!AuthContext.isAuthenticated()) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "未认证");
        }

        // 检查角色
        String[] roles = requireRole.value();
        if (!AuthContext.hasAnyRole(roles)) {
            log.warn("角色检查失败: user={}, required={}", 
                AuthContext.getUsername(), String.join(", ", roles));
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "无权限");
        }

        try {
            return joinPoint.proceed();
        } catch (Throwable e) {
            log.error("执行方法异常", e);
            throw new RuntimeException(e);
        }
    }
}
```

#### 在 Controller 中使用注解

```java
@RestController
@RequestMapping("/api/user")
public class UserController {

    @RequirePermission("user:add")
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody CreateUserRequest request) {
        User user = userService.createUser(request);
        return ResponseEntity.ok(user);
    }

    @RequirePermission("user:edit")
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable Long id,
            @RequestBody UpdateUserRequest request) {
        User user = userService.updateUser(id, request);
        return ResponseEntity.ok(user);
    }

    @RequirePermission("user:delete")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    @RequireRole("ADMIN")
    @GetMapping("/admin/list")
    public ResponseEntity<List<User>> getAdminUserList() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
}
```

## 高级示例

### 1. 数据权限控制

```java
@Service
public class DataPermissionService {

    /**
     * 根据数据权限过滤数据
     */
    public List<User> filterByDataPermission(List<User> users) {
        if (!AuthContext.isAuthenticated()) {
            return Collections.emptyList();
        }

        // 超级管理员可以查看所有数据
        if (AuthContext.hasRole("ADMIN")) {
            return users;
        }

        // 部门管理员只能查看本部门数据
        if (AuthContext.hasPermission("data:dept")) {
            String currentUsername = AuthContext.getUsername();
            User currentUser = userRepository.findByUsername(currentUsername)
                .orElseThrow();
            return users.stream()
                .filter(user -> user.getDeptCode().equals(currentUser.getDeptCode()))
                .collect(Collectors.toList());
        }

        // 普通用户只能查看自己创建的数据
        if (AuthContext.hasPermission("data:self")) {
            String currentUsername = AuthContext.getUsername();
            return users.stream()
                .filter(user -> user.getCreatedBy().equals(currentUsername))
                .collect(Collectors.toList());
        }

        return Collections.emptyList();
    }
}
```

### 2. 字段权限控制

```java
@Service
public class FieldPermissionService {

    /**
     * 根据字段权限过滤用户信息
     */
    public UserInfoDTO filterFields(User user) {
        UserInfoDTO dto = new UserInfoDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setDisplayName(user.getDisplayName());

        // 只有拥有薪资字段权限的用户才能看到薪资
        if (AuthContext.hasPermission("field:salary")) {
            dto.setSalary(user.getSalary());
        }

        // 只有拥有手机号字段权限的用户才能看到手机号
        if (AuthContext.hasPermission("field:phone")) {
            dto.setPhone(user.getPhone());
        }

        return dto;
    }
}
```

### 3. 操作日志记录

```java
@Service
public class OperationLogService {

    /**
     * 记录操作日志
     */
    public void logOperation(String operation, String resource, Object details) {
        OperationLog log = new OperationLog();
        log.setOperation(operation);
        log.setResource(resource);
        log.setDetails(details);
        
        // 从认证上下文获取操作人信息
        if (AuthContext.isAuthenticated()) {
            log.setOperator(AuthContext.getUsername());
            log.setOperatorRoles(AuthContext.getRoles());
        }
        
        log.setOperationTime(LocalDateTime.now());
        operationLogRepository.save(log);
    }
}
```

## 测试示例

### 1. 单元测试

```java
@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testGetUserInfo_Unauthenticated() throws Exception {
        mockMvc.perform(get("/api/user/info"))
            .andExpect(status().isUnauthorized());
    }

    @Test
    void testGetUserInfo_Authenticated() throws Exception {
        String token = generateTestToken("admin", List.of("ADMIN"), List.of());

        mockMvc.perform(get("/api/user/info")
                .header("Authorization", "Bearer " + token))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.username").value("admin"));
    }

    @Test
    void testDeleteUser_NoPermission() throws Exception {
        String token = generateTestToken("user", List.of("USER"), List.of());

        mockMvc.perform(delete("/api/user/1")
                .header("Authorization", "Bearer " + token))
            .andExpect(status().isForbidden());
    }

    @Test
    void testDeleteUser_WithPermission() throws Exception {
        String token = generateTestToken("admin", List.of("ADMIN"), List.of("user:delete"));

        mockMvc.perform(delete("/api/user/1")
                .header("Authorization", "Bearer " + token))
            .andExpect(status().isOk());
    }

    private String generateTestToken(String username, List<String> roles, List<String> permissions) {
        // 生成测试 Token 的逻辑
        // ...
    }
}
```

### 2. 集成测试

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AuthInterceptorIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void testTokenFromHeader() {
        String token = "valid-jwt-token";
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        
        ResponseEntity<String> response = restTemplate.exchange(
            "/api/user/info",
            HttpMethod.GET,
            new HttpEntity<>(headers),
            String.class
        );

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    void testTokenFromCookie() {
        String token = "valid-jwt-token";
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cookie", "token=" + token);
        
        ResponseEntity<String> response = restTemplate.exchange(
            "/api/user/info",
            HttpMethod.GET,
            new HttpEntity<>(headers),
            String.class
        );

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }
}
```

## 常见问题

### Q: 如何在拦截器外部获取认证信息？

A: 使用 `AuthContext` 工具类：

```java
String username = AuthContext.getUsername();
boolean isAdmin = AuthContext.hasRole("ADMIN");
```

### Q: 拦截器会拒绝未认证的请求吗？

A: 不会。拦截器只负责验证和存储认证信息，不会拒绝请求。具体的权限控制应由业务层处理。

### Q: 如何自定义 Token 获取方式？

A: 可以修改 `AuthInterceptor.extractToken()` 方法，添加自定义的 Token 获取逻辑。

### Q: 如何禁用拦截器？

A: 在配置文件中设置：

```yaml
auth:
  interceptor:
    enabled: false
```

---

**最后更新**：2025-01-XX



