/**
 * WebClient 基础设施模块
 * <p>
 * 提供全局的 WebClient 基础配置，供各个模块使用。
 * </p>
 *
 * <h2>主要功能</h2>
 * <ul>
 * <li>提供全局的 WebClient.Builder 基础配置</li>
 * <li>统一管理代理、SSL、超时等通用配置</li>
 * <li>支持通过配置文件自定义配置</li>
 * </ul>
 *
 * <h2>使用方式</h2>
 * <p>
 * 在其他配置类中注入基础设施层的 WebClient.Builder：
 * </p>
 *
 * <pre>
 * {
 *     &#64;code
 *     &#64;Configuration
 *     public class MyConfig {
 *         @Bean
 *         public MyService myService(@Qualifier("webClientBuilder") WebClient.Builder webClientBuilder) {
 *             // 使用 clone() 避免污染全局配置
 *             WebClient.Builder builder = webClientBuilder.clone();
 *             // 可以添加模块特定的配置
 *             return new MyService(builder.build());
 *         }
 *     }
 * }
 * </pre>
 *
 * <h2>配置说明</h2>
 * 
 * <p>
 * 配置通过 {@code @ConfigurationProperties} 绑定，支持类型安全和IDE自动补全。
 * 详细配置示例请参考：{@code src/main/resources/webclient-config-example.yml}
 * </p>
 * 
 * <pre>{@code
 * # 代理配置（可选）
 * proxy:
 *   host: 127.0.0.1
 *   port: 7890
 * 
 * # WebClient 基础配置
 * webclient:
 *   response-timeout: 30000  # 响应超时（毫秒）
 *   connect-timeout: 2000    # 连接超时（毫秒）
 *   read-timeout: 30         # 读取超时（秒）
 *   write-timeout: 30        # 写入超时（秒）
 *   follow-redirect: true    # 是否跟随重定向
 *   compress: true           # 是否启用压缩
 * }</pre>
 *
 * @author getjobs
 * @since 2025-12-06
 */
package getjobs.common.infrastructure.webclient;
