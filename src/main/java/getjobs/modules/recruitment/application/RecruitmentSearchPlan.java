package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.browser.BrowserSearch;
import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;

import java.util.List;
import java.util.Map;
import java.util.LinkedHashMap;

/** Search and contact settings resolved from the existing platform configuration. */
public record RecruitmentSearchPlan(
        List<BrowserSearch> searches,
        Map<String, Object> filters,
        String greeting,
        RecruitmentGoalConditions goal
) {
    public RecruitmentSearchPlan {
        searches = List.copyOf(searches);
        filters = Map.copyOf(filters);
    }

    /** Adds user-authored decision guidance without mutating the confirmed intent version. */
    public RecruitmentSearchPlan withDecisionGuidance(String guidance) {
        Map<String, String> context = new LinkedHashMap<>(goal.additionalConditions());
        context.put("decisionGuidance", guidance == null ? "" : guidance.trim());
        var adjustedGoal = new RecruitmentGoalConditions(goal.summary(), goal.keywords(), goal.cities(),
                goal.minSalaryK(), goal.maxSalaryK(), goal.minExperienceYears(), goal.maxExperienceYears(),
                goal.industries(), goal.skills(), goal.excludedKeywords(), goal.preferredCompanyTypes(),
                goal.jobType(), context);
        return new RecruitmentSearchPlan(searches, filters, greeting, adjustedGoal);
    }
}
