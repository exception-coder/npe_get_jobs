# JWT Token 设计指南：Access Token 与 Refresh Token

## 目录
- [1. 概述](#1-概述)
- [2. Access Token 设计](#2-access-token-设计)
- [3. Refresh Token 设计](#3-refresh-token-设计)
- [4. Token 刷新策略](#4-token-刷新策略)
- [5. 实现方案](#5-实现方案)
- [6. 常见误区](#6-常见误区)
- [7. 安全最佳实践](#7-安全最佳实践)

---

## 1. 概述

### 1.1 为什么需要双 Token 机制？

单一 Token 存在的问题：
- ❌ 短期过期：用户体验差，频繁需要登录
- ❌ 长期有效：安全风险高，一旦泄露影响持久
- ❌ 无法撤销：JWT 无状态特性导致无法主动失效

双 Token 解决方案：
- ✅ Access Token：短期（15分钟-1小时），用于 API 认证
- ✅ Refresh Token：长期（7-30天），用于刷新 Access Token
- ✅ 可撤销性：Refresh Token 存储在数据库，可主动撤销
- ✅ 安全性：Access Token 泄露影响有限，Refresh Token 保护更严格

### 1.2 Token 职责分离

| 特性 | Access Token | Refresh Token |
|------|-------------|---------------|
| 用途 | API 认证和授权 | 刷新 Access Token |
| 生命周期 | 短（15分钟-1小时） | 长（7-30天） |
| 存储位置 | Cookie（非 httpOnly）或内存 | Cookie（httpOnly） |
| 撤销机制 | 无法撤销（依赖过期） | 可撤销（数据库控制） |
| 携带信息 | 用户信息、角色、权限 | 仅用户标识 |
| 传输方式 | Header 或 Cookie | 仅 Cookie |
| 可被 JS 读取 | 是（需判断过期） | 否（httpOnly） |

---

## 2. Access Token 设计

### 2.1 基本属性

```yaml
jwt:
  secret: "YourSecretKey"
  issuer: "your-app"
  expiration-seconds: 3600  # 1小时
```

### 2.2 Token 内容

```json
{
  "sub": "username",           // 用户名
  "iss": "your-app",          // 签发者
  "iat": 1234567890,          // 签发时间
  "exp": 1234571490,          // 过期时间
  "roles": ["ADMIN", "USER"], // 角色
  "permissions": ["READ", "WRITE"] // 权限
}
```

### 2.3 存储方式

**Cookie 存储（推荐）**：
```java
ResponseCookie accessTokenCookie = ResponseCookie.from("token", accessToken)
    .httpOnly(false)  // 允许 JS 读取，用于判断过期时间
    .secure(true)     // 仅 HTTPS 传输（生产环境）
    .path("/")
    .maxAge(Duration.ofSeconds(3600))
    .sameSite("Lax")  // CSRF 防护
    .build();
```

**为什么 httpOnly=false？**
- 前端需要读取 token 来判断是否即将过期
- 前端需要主动触发刷新机制
- 即使被 XSS 窃取，影响也有限（生命周期短）

### 2.4 提取优先级

```java
private String extractToken(HttpServletRequest request) {
    // 1. 从 Authorization: Bearer {token} 请求头获取
    String authHeader = request.getHeader("Authorization");
    if (StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")) {
        return authHeader.substring(7).trim();
    }
    
    // 2. 从 X-Auth-Token: {token} 请求头获取
    String xAuthToken = request.getHeader("X-Auth-Token");
    if (StringUtils.hasText(xAuthToken)) {
        return xAuthToken.trim();
    }
    
    // 3. 从 Cookie: token 获取
    Cookie[] cookies = request.getCookies();
    if (cookies != null) {
        return Arrays.stream(cookies)
            .filter(cookie -> "token".equals(cookie.getName()))
            .map(Cookie::getValue)
            .filter(StringUtils::hasText)
            .findFirst()
            .orElse(null);
    }
    
    return null;
}
```

---

## 3. Refresh Token 设计

### 3.1 基本属性

```yaml
jwt:
  refresh-expiration-seconds: 604800  # 7天
```

### 3.2 Token 内容

```json
{
  "sub": "username",     // 用户名
  "iss": "your-app",    // 签发者
  "iat": 1234567890,    // 签发时间
  "exp": 1235172690,    // 过期时间（7天后）
  "type": "refresh"     // Token 类型标识
}
```

### 3.3 数据库存储

```java
@Entity
@Table(name = "refresh_tokens", indexes = {
    @Index(name = "idx_username", columnList = "username"),
    @Index(name = "idx_token_hash", columnList = "token_hash"),
    @Index(name = "idx_expires_at", columnList = "expires_at")
})
public class RefreshToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;        // 用户名
    private String tokenHash;       // Token 哈希值（不存储原文）
    private Instant expiresAt;      // 过期时间
    private boolean revoked;        // 是否已撤销
    private String clientIp;        // 客户端 IP
    private String userAgent;       // 用户代理
    private Instant createdAt;      // 创建时间
}
```

### 3.4 Cookie 存储

```java
ResponseCookie refreshTokenCookie = ResponseCookie.from("refresh_token", refreshToken)
    .httpOnly(true)   // 必须 httpOnly，防止 XSS
    .secure(true)     // 仅 HTTPS 传输（生产环境）
    .path("/")
    .maxAge(Duration.ofSeconds(604800))
    .sameSite("Lax")  // CSRF 防护
    .build();
```

**为什么 httpOnly=true？**
- Refresh Token 是长期令牌，泄露影响更大
- 前端不需要读取 Refresh Token
- httpOnly 可以有效防止 XSS 攻击

### 3.5 提取方法

```java
private String extractRefreshToken(HttpServletRequest request) {
    Cookie[] cookies = request.getCookies();
    if (cookies != null) {
        return Arrays.stream(cookies)
            .filter(cookie -> "refresh_token".equals(cookie.getName()))
            .map(Cookie::getValue)
            .filter(StringUtils::hasText)
            .findFirst()
            .orElse(null);
    }
    return null;
}
```

---

## 4. Token 刷新策略

### 4.1 三层刷新机制

```
┌─────────────────────────────────────────────────────────────┐
│                      Token 刷新策略                          │
├─────────────────────────────────────────────────────────────┤
│  1. 定时刷新（前端主动）                                      │
│     └─ 在 token 过期前 5 分钟自动刷新                         │
│     └─ 适用场景：用户长时间停留在页面                          │
│                                                              │
│  2. HTTP 拦截刷新（前端被动）                                 │
│     └─ API 返回 401 时，自动刷新并重试                        │
│     └─ 适用场景：token 已过期但 refresh token 仍有效          │
│                                                              │
│  3. 路由守卫刷新（前端检查）                                  │
│     └─ 路由跳转时检查认证状态，失败则尝试刷新                  │
│     └─ 适用场景：页面跳转时发现 token 过期                    │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 前端定时刷新实现

```typescript
// Token 刷新配置
const REFRESH_BEFORE_EXPIRY_MS = 5 * 60 * 1000;  // 提前5分钟
const MIN_REFRESH_INTERVAL_MS = 30 * 60 * 1000; // 最小间隔30分钟

let refreshTimer: number | null = null;
let tokenExpiresAt: number | null = null;

// 计算并安排刷新
function scheduleTokenRefresh(): void {
  if (refreshTimer) clearTimeout(refreshTimer);
  
  if (!tokenExpiresAt) return;
  
  const now = Date.now();
  const timeUntilExpiry = tokenExpiresAt - now;
  
  // 已过期，立即刷新
  if (timeUntilExpiry <= 0) {
    refreshToken();
    return;
  }
  
  // 计算刷新时间：过期前5分钟，但不早于30分钟后
  const refreshTime = Math.max(
    timeUntilExpiry - REFRESH_BEFORE_EXPIRY_MS,
    MIN_REFRESH_INTERVAL_MS
  );
  
  refreshTimer = window.setTimeout(async () => {
    await refreshToken();
  }, refreshTime);
}

// 登录成功后设置过期时间
export function setTokenExpiresAt(expiresAt: number): void {
  tokenExpiresAt = expiresAt;
  scheduleTokenRefresh();
}

// 页面可见性变化时重新计算
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && tokenExpiresAt) {
    scheduleTokenRefresh();
  }
});
```

### 4.3 HTTP 拦截刷新实现

```typescript
// 并发控制
let isRefreshing = false;
let refreshPromise: Promise<boolean> | null = null;

async function executeRequest<T>(
  input: RequestInfo,
  init?: RequestInit,
  retryOn401 = true
): Promise<T> {
  const response = await fetch(input, init);
  
  // 正常响应
  if (response.ok) {
    return await response.json();
  }
  
  // 401 错误且允许重试
  if (response.status === 401 && retryOn401) {
    // 如果正在刷新，等待刷新完成
    if (isRefreshing && refreshPromise) {
      const refreshed = await refreshPromise;
      if (refreshed) {
        return executeRequest<T>(input, init, false); // 重试，不再刷新
      }
    } else if (!isRefreshing) {
      // 开始刷新
      isRefreshing = true;
      refreshPromise = refreshToken();
      
      try {
        const refreshed = await refreshPromise;
        if (refreshed) {
          return executeRequest<T>(input, init, false); // 重试
        }
      } finally {
        isRefreshing = false;
        refreshPromise = null;
      }
    }
  }
  
  // 其他错误
  throw new Error(`请求失败: ${response.status}`);
}
```

### 4.4 后端刷新接口

```java
@PostMapping("/refresh")
public ResponseEntity<Map<String, Object>> refreshToken(HttpServletRequest request) {
    // 1. 提取 Refresh Token
    String refreshToken = extractRefreshToken(request);
    if (!StringUtils.hasText(refreshToken)) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(Map.of("success", false, "message", "未找到 Refresh Token"));
    }
    
    // 2. 验证 JWT 签名和过期时间
    DecodedJWT decodedJWT = jwtTokenService.verifyRefreshToken(refreshToken);
    String username = decodedJWT.getSubject();
    
    // 3. 验证数据库中的状态（是否被撤销）
    RefreshToken refreshTokenEntity = refreshTokenService.validateToken(refreshToken);
    if (refreshTokenEntity == null) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
            .body(Map.of("success", false, "message", "Refresh Token 无效或已被撤销"));
    }
    
    // 4. 生成新的 Access Token 和 Refresh Token（Token 轮换）
    String newAccessToken = jwtTokenService.generateAccessToken(userInfo);
    String newRefreshToken = jwtTokenService.generateRefreshToken(username);
    long expiresAt = Instant.now().plusSeconds(3600).toEpochMilli();
    
    // 5. Token 轮换：撤销旧 token，保存新 token
    refreshTokenService.rotateToken(refreshToken, newRefreshToken, username, clientIp, userAgent);
    
    // 6. 设置新的 Cookie
    return ResponseEntity.ok()
        .header(HttpHeaders.SET_COOKIE, newAccessTokenCookie.toString())
        .header(HttpHeaders.SET_COOKIE, newRefreshTokenCookie.toString())
        .body(Map.of(
            "success", true,
            "data", Map.of("token", newAccessToken, "expiresAt", expiresAt)
        ));
}
```

### 4.5 Token 轮换（Refresh Token Rotation）

**为什么需要轮换？**
- 防止 Refresh Token 被盗用
- 限制单个 Refresh Token 的使用次数
- 一旦检测到异常使用，可撤销整个 Token 链

**实现方式**：
```java
@Transactional
public void rotateToken(String oldToken, String newToken, String username, 
                       String clientIp, String userAgent) {
    // 1. 撤销旧 token
    revokeToken(oldToken);
    
    // 2. 保存新 token
    saveToken(newToken, username, clientIp, userAgent);
    
    // 3. 清理过期 token（可选，也可以定时任务处理）
    cleanupExpiredTokens();
}
```

---

## 5. 实现方案

### 5.1 登录流程

```
用户输入账号密码
    ↓
后端验证
    ↓
生成 Access Token (1小时) + Refresh Token (7天)
    ↓
保存 Refresh Token 到数据库
    ↓
设置两个 Cookie:
  - token (httpOnly=false)         ← Access Token
  - refresh_token (httpOnly=true)  ← Refresh Token
    ↓
返回 { token, expiresAt, user }
    ↓
前端保存 expiresAt，启动定时刷新
```

### 5.2 定时刷新流程

```
应用启动
    ↓
启动定时刷新服务
    ↓
检查是否已登录
    ↓
如果已登录
    ↓
计算刷新时间 = expiresAt - 5分钟
    ↓
设置定时器
    ↓
定时器触发
    ↓
调用 /api/auth/refresh
    ↓
使用 refresh_token (httpOnly cookie 自动发送)
    ↓
后端验证并生成新 token
    ↓
更新 Cookie
    ↓
前端更新 expiresAt，重新安排下次刷新
```

### 5.3 HTTP 拦截刷新流程

```
发起 API 请求
    ↓
后端验证 Access Token
    ↓
Token 过期，返回 401
    ↓
前端 HTTP 拦截器捕获 401
    ↓
检查是否正在刷新
    ↓
如果未刷新：
  - 调用 /api/auth/refresh
  - 设置刷新标志
  - 等待刷新完成
如果正在刷新：
  - 等待刷新完成
    ↓
刷新成功
    ↓
重试原请求（使用新 token）
    ↓
返回结果
```

### 5.4 登出流程

```
用户点击登出
    ↓
调用 /api/auth/logout
    ↓
从 Cookie 提取 refresh_token
    ↓
撤销数据库中的 Refresh Token
    ↓
清除 Cookie (maxAge=0):
  - token
  - refresh_token
    ↓
前端停止定时刷新
    ↓
跳转到登录页
```

---

## 6. 常见误区

### 误区 1：Access Token 和 Refresh Token 混用

❌ **错误做法**：
```java
// 在 extractToken() 中尝试提取 refresh_token
private String extractToken(HttpServletRequest request) {
    // ... 
    // 尝试从 refresh_token cookie 提取
    String refreshToken = extractRefreshToken(request);
    if (StringUtils.hasText(refreshToken)) {
        return refreshToken;  // ❌ 不应该这样做
    }
    return null;
}
```

✅ **正确做法**：
- `extractToken()` 只提取 Access Token（从 `token` cookie）
- `extractRefreshToken()` 只提取 Refresh Token（从 `refresh_token` cookie）
- 两者职责分离，不应混用

**原因**：
1. Access Token 用于 API 认证，Refresh Token 用于刷新
2. 两者有不同的生命周期和安全要求
3. Refresh Token 只应在 `/refresh` 接口中使用

### 误区 2：长时间停留页面不刷新 Token

❌ **问题场景**：
- 用户打开页面后长时间未操作
- Access Token 在 1 小时后过期
- 用户再次操作时，所有请求返回 401

✅ **解决方案**：定时刷新机制
```typescript
// 在 token 过期前 5 分钟自动刷新
scheduleTokenRefresh();

// 监听页面可见性，页面重新可见时重新计算刷新时间
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && tokenExpiresAt) {
    scheduleTokenRefresh();
  }
});
```

### 误区 3：Refresh Token 设置为 httpOnly=false

❌ **错误做法**：
```java
ResponseCookie refreshTokenCookie = ResponseCookie.from("refresh_token", refreshToken)
    .httpOnly(false)  // ❌ Refresh Token 不应该允许 JS 读取
    .build();
```

✅ **正确做法**：
```java
ResponseCookie refreshTokenCookie = ResponseCookie.from("refresh_token", refreshToken)
    .httpOnly(true)   // ✅ 必须 httpOnly
    .secure(true)     // ✅ 仅 HTTPS
    .sameSite("Lax")  // ✅ CSRF 防护
    .build();
```

**原因**：
- Refresh Token 是长期令牌，泄露影响更大
- 前端不需要读取 Refresh Token
- httpOnly 可有效防止 XSS 攻击

### 误区 4：不做并发刷新控制

❌ **问题场景**：
- 多个请求同时返回 401
- 同时触发多次刷新请求
- 导致 Token 轮换混乱

✅ **解决方案**：并发控制
```typescript
let isRefreshing = false;
let refreshPromise: Promise<boolean> | null = null;

if (isRefreshing && refreshPromise) {
  // 等待正在进行的刷新
  await refreshPromise;
} else if (!isRefreshing) {
  // 开始新的刷新
  isRefreshing = true;
  refreshPromise = refreshToken();
  try {
    await refreshPromise;
  } finally {
    isRefreshing = false;
    refreshPromise = null;
  }
}
```

### 误区 5：Refresh Token 明文存储

❌ **错误做法**：
```java
refreshToken.setToken(token);  // ❌ 明文存储
```

✅ **正确做法**：
```java
// 存储哈希值，不存储原文
String tokenHash = DigestUtils.sha256Hex(token);
refreshToken.setTokenHash(tokenHash);
```

### 误区 6：不实现 Token 轮换

❌ **问题**：
- Refresh Token 可以无限次使用
- 一旦泄露，攻击者可持续获取新 token

✅ **解决方案**：Token 轮换
```java
// 每次刷新时生成新的 Refresh Token
String newRefreshToken = jwtTokenService.generateRefreshToken(username);

// 撤销旧 token，保存新 token
refreshTokenService.rotateToken(oldToken, newRefreshToken, username, clientIp, userAgent);
```

### 误区 7：忘记清理过期 Token

❌ **问题**：
- 数据库中累积大量过期 token
- 影响查询性能

✅ **解决方案**：定时清理
```java
@Scheduled(cron = "0 0 2 * * ?")  // 每天凌晨2点
public void cleanupExpiredTokens() {
    int deleted = refreshTokenRepository.deleteExpiredTokens(Instant.now());
    log.info("清理过期 Refresh Token，删除数量: {}", deleted);
}
```

---

## 7. 安全最佳实践

### 7.1 Cookie 安全设置

```java
// Access Token Cookie
ResponseCookie.from("token", accessToken)
    .httpOnly(false)     // 允许 JS 读取（需要判断过期）
    .secure(true)        // ✅ 生产环境必须 HTTPS
    .path("/")
    .maxAge(Duration.ofSeconds(3600))
    .sameSite("Lax")     // ✅ 防止 CSRF
    .build();

// Refresh Token Cookie
ResponseCookie.from("refresh_token", refreshToken)
    .httpOnly(true)      // ✅ 必须 httpOnly，防止 XSS
    .secure(true)        // ✅ 生产环境必须 HTTPS
    .path("/")
    .maxAge(Duration.ofSeconds(604800))
    .sameSite("Lax")     // ✅ 防止 CSRF
    .build();
```

### 7.2 Token 过期时间设置

```yaml
# 推荐配置
jwt:
  # Access Token: 15分钟 - 1小时
  expiration-seconds: 3600
  
  # Refresh Token: 7天 - 30天
  refresh-expiration-seconds: 604800
```

**选择建议**：
- 高安全性应用：Access Token 15分钟，Refresh Token 7天
- 一般应用：Access Token 1小时，Refresh Token 7天
- 低频应用：Access Token 1小时，Refresh Token 30天

### 7.3 Refresh Token 存储

```java
@Entity
public class RefreshToken {
    private String username;
    private String tokenHash;      // ✅ 存储哈希，不存储原文
    private Instant expiresAt;
    private boolean revoked;       // ✅ 支持主动撤销
    private String clientIp;       // ✅ 记录 IP，用于异常检测
    private String userAgent;      // ✅ 记录设备信息
    private Instant createdAt;
    
    // ✅ 添加索引
    @Index(name = "idx_username", columnList = "username")
    @Index(name = "idx_token_hash", columnList = "token_hash")
    @Index(name = "idx_expires_at", columnList = "expires_at")
}
```

### 7.4 异常检测

```java
// 检测异常使用模式
public boolean isAnomalousRefresh(String username, String clientIp) {
    // 1. 检查是否在短时间内多次刷新
    long recentRefreshCount = refreshTokenRepository
        .countRecentRefreshes(username, Instant.now().minus(5, ChronoUnit.MINUTES));
    if (recentRefreshCount > 10) {
        log.warn("用户 {} 在5分钟内刷新次数过多: {}", username, recentRefreshCount);
        return true;
    }
    
    // 2. 检查是否来自不同 IP
    Set<String> recentIps = refreshTokenRepository
        .findRecentIps(username, Instant.now().minus(1, ChronoUnit.HOURS));
    if (recentIps.size() > 3) {
        log.warn("用户 {} 在1小时内使用了多个 IP: {}", username, recentIps);
        return true;
    }
    
    return false;
}
```

### 7.5 撤销机制

```java
// 单点登出：撤销单个 token
public void revokeToken(String token) {
    String tokenHash = DigestUtils.sha256Hex(token);
    refreshTokenRepository.findByTokenHash(tokenHash)
        .ifPresent(rt -> {
            rt.setRevoked(true);
            refreshTokenRepository.save(rt);
        });
}

// 全局登出：撤销用户所有 token
public void revokeAllTokens(String username) {
    List<RefreshToken> tokens = refreshTokenRepository.findByUsername(username);
    tokens.forEach(rt -> rt.setRevoked(true));
    refreshTokenRepository.saveAll(tokens);
}
```

---

## 8. 完整流程图

```
┌──────────────────────────────────────────────────────────────────┐
│                          JWT Token 生命周期                        │
└──────────────────────────────────────────────────────────────────┘

登录阶段:
  用户登录
    ↓
  生成 Access Token (1h) + Refresh Token (7d)
    ↓
  保存 Refresh Token 到数据库
    ↓
  设置 Cookie: token + refresh_token
    ↓
  前端启动定时刷新

使用阶段:
  ┌─────────────────────────────────────────────────┐
  │  1. 定时刷新（过期前5分钟）                       │
  │     └─ scheduleTokenRefresh()                   │
  │                                                 │
  │  2. HTTP 拦截刷新（401时）                       │
  │     └─ executeRequest() → refreshToken()        │
  │                                                 │
  │  3. 路由守卫刷新（页面跳转时）                    │
  │     └─ checkAuthStatus() → refreshToken()       │
  └─────────────────────────────────────────────────┘
    ↓
  调用 /api/auth/refresh
    ↓
  验证 Refresh Token (JWT + 数据库)
    ↓
  生成新的 Access Token + Refresh Token
    ↓
  Token 轮换：撤销旧 token，保存新 token
    ↓
  更新 Cookie
    ↓
  前端更新 expiresAt，重新安排刷新

登出阶段:
  用户登出
    ↓
  撤销数据库中的 Refresh Token
    ↓
  清除 Cookie
    ↓
  停止定时刷新
```

---

## 9. 总结

### 9.1 关键要点

1. **职责分离**：Access Token 用于认证，Refresh Token 用于刷新
2. **生命周期**：短期 Access Token + 长期 Refresh Token
3. **安全存储**：Refresh Token 必须 httpOnly + secure
4. **三层刷新**：定时刷新 + HTTP 拦截 + 路由守卫
5. **Token 轮换**：每次刷新生成新 Refresh Token
6. **并发控制**：避免多次同时刷新
7. **异常检测**：监控异常使用模式
8. **可撤销性**：支持单点和全局登出

### 9.2 检查清单

- [ ] Access Token 过期时间 ≤ 1小时
- [ ] Refresh Token 过期时间 7-30天
- [ ] Refresh Token 设置 httpOnly=true
- [ ] 生产环境设置 secure=true
- [ ] 设置 sameSite="Lax" 或 "Strict"
- [ ] Refresh Token 存储哈希值而非原文
- [ ] 实现 Token 轮换机制
- [ ] 实现定时刷新机制
- [ ] 实现 HTTP 拦截刷新
- [ ] 实现并发刷新控制
- [ ] 实现 Token 撤销机制
- [ ] 实现定时清理过期 Token
- [ ] 添加异常使用检测
- [ ] 记录 IP 和设备信息

---

## 参考资料

- [RFC 6749: OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749)
- [RFC 7519: JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519)
- [OWASP Token Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html)
- [Auth0: Refresh Token Rotation](https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation)

---

**最后更新**: 2024-12-02

