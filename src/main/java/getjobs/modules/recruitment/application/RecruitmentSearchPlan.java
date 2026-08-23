package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.browser.BrowserSearch;

import java.util.List;
import java.util.Map;

/** Search and contact settings resolved from the existing platform configuration. */
public record RecruitmentSearchPlan(
        List<BrowserSearch> searches,
        Map<String, Object> filters,
        String greeting
) {
    public RecruitmentSearchPlan {
        searches = List.copyOf(searches);
        filters = Map.copyOf(filters);
    }
}
