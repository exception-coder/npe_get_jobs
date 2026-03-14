package getjobs.modules.ai.company.dto;

/**
 * 公司投递推荐等级枚举
 * <p>
 * 与 AI 输出约定一致，仅允许以下四种。
 * </p>
 */
public enum RecommendationCode {
    STRONGLY_RECOMMENDED,
    RECOMMENDED,
    CAUTIOUS,
    NOT_RECOMMENDED
}
