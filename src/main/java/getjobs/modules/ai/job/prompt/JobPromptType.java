package getjobs.modules.ai.job.prompt;

/**
 * 职位相关 AI 提示词的类型枚举
 * <p>
 * 这个枚举定义了所有可用的、与职位相关的 AI 提示词类型。
 * 每个枚举常量都关联一个配置键，该键用于从 {@link getjobs.modules.ai.config.AiPromptProperties}
 * 中查找对应的提示词模板配置。
 * </p>
 */
public enum JobPromptType {

    /**
     * 用于匹配职位与简历的提示词类型。
     * <p>
     * 对应的配置键是 "match-position"。
     * 这个提示词通常用于分析一份简历和一份职位描述，并评估它们的匹配度。
     * </p>
     */
    MATCH_POSITION("match-position");

    private final String configKey;

    JobPromptType(String configKey) {
        this.configKey = configKey;
    }

    /**
     * 获取与此提示词类型关联的配置键。
     *
     * @return 配置键字符串。
     */
    public String getConfigKey() {
        return configKey;
    }
}
