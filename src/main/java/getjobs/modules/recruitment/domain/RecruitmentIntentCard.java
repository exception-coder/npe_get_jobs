package getjobs.modules.recruitment.domain;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/** Platform-independent intent; values describe user requirements, never platform codes. */
public record RecruitmentIntentCard(
        String schemaVersion, String summary, Map<String, String> candidateContext,
        List<Position> targetPositions, Map<String, Requirement> requirements,
        List<AdditionalRequirement> additionalRequirements
) {
    public static final List<String> FIELDS = List.of("regions", "positionTypes", "employmentTypes", "salary",
            "experienceRequirements", "educationRequirements", "companyIndustries", "companySizes", "financingStages");

    /** A role and its short retrieval queries. */
    public record Position(String id, String name, List<String> searchTerms, String preference) { }

    /** Explicit state distinguishes missing requirements from unrestricted ones. */
    public record Requirement(String state, List<String> value, Range range, String strength, String evidence) { }

    /** Numeric bounds retain units rather than guessing monthly/annual conversions. */
    public record Range(BigDecimal min, BigDecimal max, String unit) { }

    /** Conditions may apply only to particular role IDs; an empty scope applies globally. */
    public record AdditionalRequirement(String id, List<String> appliesTo, String description,
                                        String strength, String evidence) { }

    /** Validates both model proposals and user-edited cards before persistence. */
    public void validate() {
        require("1.0".equals(schemaVersion), "意向卡版本不支持");
        text(summary, 500, "意向摘要");
        require(candidateContext != null && candidateContext.size() <= 15, "个人背景格式无效");
        candidateContext.forEach((key, value) -> {
            text(key, 60, "背景字段");
            text(value, 1000, "背景内容");
        });
        require(targetPositions != null && !targetPositions.isEmpty() && targetPositions.size() <= 20,
                "请填写 1 至 20 个目标职位");
        Set<String> positionIds = validatePositions();
        require(requirements != null && requirements.keySet().equals(Set.copyOf(FIELDS)), "求职条件字段不完整");
        requirements.forEach((key, value) -> validateRequirement(value));
        require(additionalRequirements != null && additionalRequirements.size() <= 20, "补充条件过多");
        Set<String> conditionIds = new HashSet<>();
        for (AdditionalRequirement condition : additionalRequirements) {
            require(condition != null, "补充条件不能为空");
            text(condition.id(), 60, "条件标识");
            require(conditionIds.add(condition.id()), "条件标识重复");
            require(condition.appliesTo() != null && positionIds.containsAll(condition.appliesTo()), "条件引用的职位不存在");
            text(condition.description(), 1000, "补充条件");
            text(condition.evidence(), 1000, "条件依据");
            strength(condition.strength());
        }
    }

    private Set<String> validatePositions() {
        Set<String> ids = new HashSet<>();
        for (Position position : targetPositions) {
            require(position != null, "职位不能为空");
            text(position.id(), 60, "职位标识");
            require(ids.add(position.id()), "职位标识重复");
            text(position.name(), 80, "职位名称");
            require(position.preference() != null && Set.of("preferred", "acceptable", "conditional", "excluded").contains(position.preference()),
                    "职位偏好无效");
            require(position.searchTerms() != null && !position.searchTerms().isEmpty()
                    && position.searchTerms().size() <= 3, "每个职位需要 1 至 3 个搜索词");
            position.searchTerms().forEach(term -> text(term, 40, "岗位搜索词"));
        }
        require(!searchTerms().isEmpty() && searchTerms().size() <= 30, "可搜索岗位词需要 1 至 30 个");
        return ids;
    }

    private static void validateRequirement(Requirement requirement) {
        require(requirement != null && requirement.state() != null, "条件状态缺失");
        require(Set.of("specified", "unspecified", "unrestricted").contains(requirement.state()), "条件状态无效");
        require(requirement.value() != null && requirement.value().size() <= 30, "条件值无效");
        requirement.value().forEach(value -> text(value, 160, "条件值"));
        if (!"specified".equals(requirement.state())) {
            require(requirement.value().isEmpty() && requirement.range() == null && requirement.strength() == null,
                    "未说明或不限的条件不能携带筛选值");
            return;
        }
        strength(requirement.strength());
        text(requirement.evidence(), 1000, "条件依据");
        require(!requirement.value().isEmpty() || requirement.range() != null, "已指定条件需要填写值");
        if (requirement.range() != null) {
            Range range = requirement.range();
            text(range.unit(), 40, "数值单位");
            require(range.min() != null || range.max() != null, "数值范围为空");
            require(range.min() == null || range.min().signum() >= 0, "最小值不能为负");
            require(range.max() == null || range.max().signum() >= 0, "最大值不能为负");
            require(range.min() == null || range.max() == null || range.min().compareTo(range.max()) <= 0,
                    "最小值不能超过最大值");
        }
    }

    /** Returns deduplicated short role queries, without any old platform settings. */
    public List<String> searchTerms() {
        return targetPositions.stream().filter(position -> !"excluded".equals(position.preference()))
                .flatMap(position -> position.searchTerms().stream()).map(String::trim).distinct().toList();
    }

    /** Each specified condition must receive an explicit matching result. */
    public Map<String, String> checkStrengths() {
        Map<String, String> checks = new java.util.LinkedHashMap<>();
        checks.put("targetPositions", "must");
        if (!candidateContext.isEmpty()) {
            checks.put("candidateContext", "must");
        }
        requirements.forEach((key, requirement) -> {
            if ("specified".equals(requirement.state())) {
                checks.put("requirements." + key, requirement.strength());
            }
        });
        additionalRequirements.forEach(condition -> checks.put("additionalRequirements." + condition.id(), condition.strength()));
        return checks;
    }

    private static void strength(String value) {
        require(value != null && Set.of("must", "prefer", "exclude").contains(value), "条件强度无效");
    }

    private static void text(String value, int limit, String label) {
        require(value != null && !value.isBlank() && value.length() <= limit, label + "不能为空或过长");
    }

    private static void require(boolean valid, String message) {
        if (!valid) {
            throw new IllegalArgumentException(message);
        }
    }
}
