/**
 * OpenAI 健康检查监控模块
 * <p>
 * 该模块基于 Spring Boot Actuator 提供 OpenAI API 的健康监控功能。
 * </p>
 *
 * <h2>主要功能</h2>
 * <ul>
 * <li>API 可用性检查</li>
 * <li>响应时间监控</li>
 * <li>多种检查策略（PING、API_CALL、MODEL_LIST）</li>
 * <li>自定义健康检查配置</li>
 * </ul>
 *
 * <h2>使用方式</h2>
 * <p>
 * 1. 在 application.yml 中配置健康检查参数：
 * </p>
 * 
 * <pre>{@code
 * health:
 *   openai:
 *     enabled: true
 *     check-type: PING  # PING, API_CALL, MODEL_LIST
 *     connection-timeout: 5000
 *     response-timeout: 10000
 *     slow-response-threshold: 3000
 *     test-message: "hello"
 *
 * management:
 *   endpoints:
 *     web:
 *       exposure:
 *         include: health,info
 *   endpoint:
 *     health:
 *       show-details: always
 * }</pre>
 *
 * <p>
 * 2. 访问健康检查端点：
 * </p>
 * 
 * <pre>{@code
 * GET http://localhost:8080/actuator/health
 * GET http://localhost:8080/actuator/health/openAi
 * }</pre>
 *
 * <h2>检查类型说明</h2>
 * <ul>
 * <li><b>PING</b>: 仅测试网络连接，不产生 API 费用，推荐用于生产环境</li>
 * <li><b>API_CALL</b>: 发送实际的测试请求，会产生少量 API 费用</li>
 * <li><b>MODEL_LIST</b>: 获取可用模型列表，需要 API 认证</li>
 * </ul>
 *
 * <h2>响应示例</h2>
 * 
 * <pre>{@code
 * {
 *   "status": "UP",
 *   "components": {
 *     "openAiHealth": {
 *       "status": "UP",
 *       "details": {
 *         "baseUrl": "https://api.openai.com",
 *         "checkType": "PING",
 *         "model": "gpt-3.5-turbo",
 *         "responseTime": "234ms",
 *         "responseStatus": "NORMAL",
 *         "apiKeyConfigured": true,
 *         "proxyConfigured": false
 *       }
 *     }
 *   }
 * }
 * }</pre>
 *
 * @author getjobs
 * @since 2025-11-05
 */
package getjobs.common.infrastructure.health;
