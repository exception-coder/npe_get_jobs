package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.browser.BrowserSearch;
import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/** Retrieves by short role queries; all intent requirements are evaluated after collection. */
@Service
public class RecruitmentSearchPlanService {
    private final RecruitmentGoalService goals;

    public RecruitmentSearchPlanService(RecruitmentGoalService goals) {
        this.goals = goals;
    }

    public RecruitmentSearchPlan resolve(RecruitmentPlatformId platformId, Long goalId) {
        var entity = goals.require(goalId);
        var card = goals.card(entity);
        Map<String, String> context = new LinkedHashMap<>(entity.getAdditionalConditions());
        context.put("intentVersion", entity.getId().toString());
        context.put("platform", platformId.value());
        var conditions = new RecruitmentGoalConditions(card.summary(), card.searchTerms(), List.of(),
                null, null, null, null, List.of(), List.of(), List.of(), List.of(), null, context);
        List<BrowserSearch> searches = card.searchTerms().stream().map(term -> new BrowserSearch(term, "")).toList();
        return new RecruitmentSearchPlan(searches, Map.of(), "", conditions);
    }
}
