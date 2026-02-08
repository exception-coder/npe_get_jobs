/**
 * 认证拦截器基础设施模块
 * <p>
 * 该模块提供了基于 JWT 的认证拦截器，用于在请求处理前验证用户身份，
 * 并将认证信息存储到 RequestContextHolder 中，供后续业务逻辑使用。
 * </p>
 *
 * <h2>核心组件</h2>
 * <ul>
 * <li><b>AuthInterceptor</b>：认证拦截器，负责 JWT 验证和用户信息提取</li>
 * <li><b>AuthInterceptorConfig</b>：拦截器配置类，注册拦截器并配置拦截路径</li>
 * <li><b>AuthContext</b>：认证上下文工具类，提供便捷方法获取认证信息</li>
 * <li><b>AuthContextHolder</b>：认证上下文常量定义</li>
 * </ul>
 *
 * <h2>主要功能</h2>
 * <ul>
 * <li>从 Cookie 或请求头中提取 JWT Token</li>
 * <li>验证 JWT Token 的有效性（签名、过期时间等）</li>
 * <li>解析 Token 中的用户信息（用户名、角色、权限）</li>
 * <li>将认证信息存储到 RequestContextHolder</li>
 * <li>提供便捷的认证信息获取方法</li>
 * </ul>
 *
 * <h2>使用方式</h2>
 * <p>
 * 1. 在 Controller 或 Service 中使用 {@link AuthContext} 获取认证信息：
 * </p>
 *
 * <pre>{@code
 * @RestController
 * public class UserController {
 *
 *     @GetMapping("/api/user/info")
 *     public ResponseEntity<UserInfo> getUserInfo() {
 *         // 获取当前用户名
 *         String username = AuthContext.getUsername();
 *
 *         // 检查用户是否拥有指定角色
 *         if (AuthContext.hasRole("ADMIN")) {
 *             // 管理员逻辑
 *         }
 *
 *         // 检查用户是否拥有指定权限
 *         if (AuthContext.hasPermission("user:edit")) {
 *             // 编辑权限逻辑
 *         }
 *
 *         return ResponseEntity.ok(userInfo);
 *     }
 * }
 * }</pre>
 *
 * <p>
 * 2. 配置拦截路径（可选）：
 * </p>
 *
 * <pre>{@code
 * auth:
 *   interceptor:
 *     enabled: true                    # 是否启用（默认 true）
 *     include-patterns:                # 需要拦截的路径（Ant 路径模式）
 *       - /api/**
 *     exclude-patterns:                # 排除的路径（Ant 路径模式）
 *       - /api/auth/**
 *       - /actuator/**
 *       - /error
 *       - /favicon.ico
 *     token-cookie-name: token         # Cookie 中的 Token 名称（默认 token）
 * }</pre>
 *
 * <h2>Token 获取优先级</h2>
 * <ol>
 * <li>请求头：Authorization: Bearer {token}</li>
 * <li>请求头：X-Auth-Token: {token}</li>
 * <li>Cookie：token（可通过配置自定义名称）</li>
 * </ol>
 *
 * <h2>注意事项</h2>
 * <ul>
 * <li>拦截器不会拒绝未认证的请求，而是将认证状态存储到上下文中</li>
 * <li>具体的权限控制应由业务层处理（如使用 Spring Security 或自定义注解）</li>
 * <li>建议在生产环境中配置 HTTPS 以保护 Token 传输安全</li>
 * </ul>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
package getjobs.common.infrastructure.auth;
