package getjobs.modules.recruitment.domain;

import java.util.List;
import java.util.Map;

/** Platform-neutral job search conditions interpreted from one user goal. */
public record RecruitmentGoalConditions(
        String summary,
        List<String> keywords,
        List<String> cities,
        Integer minSalaryK,
        Integer maxSalaryK,
        Integer minExperienceYears,
        Integer maxExperienceYears,
        List<String> industries,
        List<String> skills,
        List<String> excludedKeywords,
        List<String> preferredCompanyTypes,
        String jobType,
        Map<String, String> additionalConditions
) {
    public RecruitmentGoalConditions {
        keywords = copy(keywords);
        cities = copy(cities);
        industries = copy(industries);
        skills = copy(skills);
        excludedKeywords = copy(excludedKeywords);
        preferredCompanyTypes = copy(preferredCompanyTypes);
        additionalConditions = additionalConditions == null ? Map.of() : Map.copyOf(additionalConditions);
    }

    private static List<String> copy(List<String> values) {
        return values == null ? List.of() : List.copyOf(values);
    }
}
