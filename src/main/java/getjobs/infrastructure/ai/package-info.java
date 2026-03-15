/**
 * AI 基础设施层（DDD-lite Infrastructure）。
 * <p>
 * 集中存放与 LLM 相关的配置、客户端实现，便于统一维护。
 * </p>
 * <ul>
 *   <li>{@link getjobs.infrastructure.ai.config} — Spring 配置（OpenAI/Deepseek Bean、动态刷新）</li>
 *   <li>{@link getjobs.infrastructure.ai.llm} — LLM 端口与 Spring AI 适配器</li>
 * </ul>
 */
package getjobs.infrastructure.ai;
