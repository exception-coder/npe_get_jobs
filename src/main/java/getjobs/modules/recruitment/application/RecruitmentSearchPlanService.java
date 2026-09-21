package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.browser.BrowserSearch;
import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/** Retrieves by role and positive region requirements; matching still evaluates the full intent. */
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
        var region = card.requirements().get("regions");
        List<String> regions = region != null && "specified".equals(region.state())
                && !"exclude".equals(region.strength())
                ? region.value().stream().map(String::trim).distinct().toList() : List.of();
        var conditions = new RecruitmentGoalConditions(card.summary(), card.searchTerms(), regions,
                null, null, null, null, List.of(), List.of(), List.of(), List.of(), null, context);
        List<String> searchRegions = regions.isEmpty() ? List.of("") : regions;
        List<BrowserSearch> searches = searchRegions.stream().flatMap(name -> card.searchTerms().stream()
                .map(term -> new BrowserSearch(term, "", name))).toList();
        return new RecruitmentSearchPlan(searches, Map.of(), "", conditions);
    }
}
