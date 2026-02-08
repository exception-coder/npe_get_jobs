# Token 刷新策略分析

## 两种方案对比

### 方案1：前端拦截器自动刷新（推荐）⭐

**实现位置**：前端 HTTP 请求拦截器（如 Axios interceptor）

**优点**：
- ✅ 避免并发刷新问题（前端可以控制刷新状态）
- ✅ 用户体验好（可以显示加载状态）
- ✅ 减少后端压力（只在需要时刷新）
- ✅ 前端可以缓存刷新结果，避免重复请求
- ✅ 符合 RESTful 设计（刷新是独立的 API 调用）

**缺点**：
- ❌ 需要前端配合实现
- ❌ 如果前端不实现，token 过期会导致请求失败

**实现示例**（前端）：
```typescript
// 请求拦截器
axios.interceptors.request.use(async (config) => {
  const token = getAccessToken();
  const expiresAt = getTokenExpiresAt();
  
  // 检查 token 是否即将过期（提前5分钟刷新）
  if (expiresAt && expiresAt - Date.now() < 5 * 60 * 1000) {
    if (!isRefreshing) {
      isRefreshing = true;
      try {
        const newToken = await refreshToken(); // 调用 /api/auth/refresh
        setAccessToken(newToken);
        config.headers.Authorization = `Bearer ${newToken}`;
      } finally {
        isRefreshing = false;
      }
    } else {
      // 等待刷新完成
      await waitForRefresh();
      config.headers.Authorization = `Bearer ${getAccessToken()}`;
    }
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});
```

---

### 方案2：后端拦截器自动刷新

**实现位置**：Spring MVC 拦截器（AuthInterceptor）

**优点**：
- ✅ 对业务代码完全透明
- ✅ 前端无需实现刷新逻辑
- ✅ 统一的后端控制

**缺点**：
- ❌ 需要处理并发刷新问题（多个请求同时触发刷新）
- ❌ 可能影响性能（每次请求都要检查）
- ❌ 实现复杂（需要处理重试、错误处理等）
- ❌ 违反单一职责原则（拦截器应该只负责验证）

**实现要点**：
1. 检测到 token 过期时，尝试从 cookie 获取 refresh token
2. 调用 refresh 服务生成新 token
3. 更新响应中的 cookie
4. 处理并发刷新（使用锁或标记）
5. 处理刷新失败的情况

---

## 推荐方案

**推荐使用方案1（前端拦截器）**，原因：
1. 符合前后端分离的最佳实践
2. 前端可以更好地控制用户体验
3. 减少后端复杂度
4. 避免并发刷新问题

**如果必须使用后端自动刷新**，可以同时实现方案2作为备选，但需要注意：
- 使用分布式锁处理并发刷新
- 设置刷新标记避免重复刷新
- 处理刷新失败的情况（返回 401）

---

## 混合方案（最佳实践）✅ 已实现

**前端主动刷新 + 后端兜底**：
1. 前端拦截器负责主动刷新（方案1）- **推荐实现**
2. 后端拦截器检测到过期时，如果前端未刷新，则自动刷新（方案2）- **已实现**
3. 后端刷新时返回 `X-Token-Refreshed: true` 响应头，前端可识别并更新 token

这样既保证了用户体验，又有后端兜底机制。

### 实现细节

#### 后端实现（已完成）

1. **增强的 AuthInterceptor**：
   - 检测到 Access Token 过期时，自动尝试刷新
   - 使用锁机制处理并发刷新问题
   - 刷新成功后更新响应中的 Cookie
   - 返回 `X-Token-Refreshed: true` 响应头

2. **配置项**：
   ```yaml
   auth:
     interceptor:
       auto-refresh-enabled: true  # 启用自动刷新（默认 true）
   ```

3. **工作流程**：
   ```
   请求到达 → 验证 Access Token
              ↓
          Token 过期？
              ↓ 是
      检查是否有 Refresh Token
              ↓ 有
      获取刷新锁（避免并发）
              ↓
      验证 Refresh Token 状态
              ↓ 有效
      生成新 Token（轮换）
              ↓
      更新响应 Cookie
              ↓
      返回 X-Token-Refreshed 响应头
   ```

#### 前端实现（待实现）

前端应该在 HTTP 请求拦截器中实现主动刷新：

```typescript
// 请求拦截器
axios.interceptors.request.use(async (config) => {
  const token = getAccessToken();
  const expiresAt = getTokenExpiresAt();
  
  // 检查 token 是否即将过期（提前5分钟刷新）
  if (expiresAt && expiresAt - Date.now() < 5 * 60 * 1000) {
    if (!isRefreshing) {
      isRefreshing = true;
      try {
        // 调用后端刷新接口
        const response = await axios.post('/api/auth/refresh');
        const newToken = response.data.data.token;
        setAccessToken(newToken);
        config.headers.Authorization = `Bearer ${newToken}`;
      } finally {
        isRefreshing = false;
      }
    } else {
      // 等待刷新完成
      await waitForRefresh();
      config.headers.Authorization = `Bearer ${getAccessToken()}`;
    }
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

// 响应拦截器 - 检查后端是否已刷新
axios.interceptors.response.use(
  (response) => {
    // 如果后端已刷新，更新本地 token
    if (response.headers['x-token-refreshed'] === 'true') {
      // 从 cookie 中读取新 token（HttpOnly cookie 会自动更新）
      // 或者从响应中获取（如果后端返回）
      console.log('后端已自动刷新 token');
    }
    return response;
  },
  (error) => {
    // 处理 401 错误
    if (error.response?.status === 401) {
      // Token 无效，跳转登录
      router.push('/login');
    }
    return Promise.reject(error);
  }
);
```

---

## 实现说明

### 当前项目实现

1. **后端刷新接口**：`POST /api/auth/refresh`
   - 已实现完整的刷新逻辑
   - 支持 Token 轮换
   - 验证 Refresh Token 状态

2. **后端自动刷新拦截器**：`AuthInterceptorWithAutoRefresh`
   - 已实现，但**默认不启用**
   - 检测到 Access Token 过期时自动刷新
   - 处理并发刷新问题（使用锁机制）

3. **基础认证拦截器**：`AuthInterceptor`
   - 当前使用的拦截器
   - 只负责验证，不自动刷新

### 使用建议

**推荐方案**：前端实现自动刷新
- 在 HTTP 请求拦截器中检测 token 过期
- 调用 `/api/auth/refresh` 接口刷新
- 更新请求头中的 token

**备选方案**：使用 `AuthInterceptorWithAutoRefresh`
- 在配置中替换拦截器
- 优点：对业务代码透明
- 缺点：需要处理并发刷新，可能影响性能

### 配置示例

如果要使用后端自动刷新，需要：
1. 在配置类中替换拦截器
2. 确保排除 `/api/auth/refresh` 路径
3. 监控刷新频率和性能

```java
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    
    @Autowired
    private AuthInterceptorWithAutoRefresh authInterceptor; // 使用自动刷新版本
    
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authInterceptor)
                .addPathPatterns("/api/**")
                .excludePathPatterns("/api/auth/**", "/actuator/**");
    }
}
```

