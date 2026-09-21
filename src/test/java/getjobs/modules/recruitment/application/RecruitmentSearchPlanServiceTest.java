package getjobs.modules.recruitment.application;

import getjobs.modules.getjobs.service.ConfigService;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;
import getjobs.modules.recruitment.domain.RecruitmentIntentCard;
import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.RecruitmentGoalEntity;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class RecruitmentSearchPlanServiceTest {
    @Test
    void buildsGoalFiltersWhenLegacyPlatformConfigIsMissing() {
        ConfigService configService = mock(ConfigService.class);
        UserProfileRepository profileRepository = mock(UserProfileRepository.class);
        RecruitmentGoalService goalService = mock(RecruitmentGoalService.class);
        RecruitmentGoalEntity goal = goal();
        when(goalService.require(3L)).thenReturn(goal);
        var card = org.mockito.Mockito.mock(getjobs.modules.recruitment.domain.RecruitmentIntentCard.class);
        when(card.searchTerms()).thenReturn(List.of("Java高级工程师"));
        when(card.summary()).thenReturn("Java高级工程师");
        when(card.requirements()).thenReturn(Map.of());
        when(goalService.card(goal)).thenReturn(card);
        RecruitmentSearchPlanService service = new RecruitmentSearchPlanService(goalService);

        RecruitmentSearchPlan plan = service.resolve(RecruitmentPlatformId.of("boss"), 3L);

        assertThat(plan.searches()).hasSize(1);
        assertThat(plan.searches().getFirst().keyword()).isEqualTo("Java高级工程师");
        assertThat(plan.filters()).isEmpty();
        assertThat(plan.searches().getFirst().cityCode()).isEmpty();
    }

    @Test
    void searchesEveryConfirmedPreferredRegionAndRoleWithoutUsingLegacyCity() {
        var goals = mock(RecruitmentGoalService.class);
        var goal = goal();
        var card = mock(RecruitmentIntentCard.class);
        when(goals.require(3L)).thenReturn(goal);
        when(goals.card(goal)).thenReturn(card);
        when(card.searchTerms()).thenReturn(List.of("茶行业", "茶电商"));
        when(card.requirements()).thenReturn(Map.of("regions", new RecruitmentIntentCard.Requirement(
                "specified", List.of("武夷山", "福州", "泉州", "晋江", "安溪", "福州"), null, "prefer", "用户偏好")));

        var plan = new RecruitmentSearchPlanService(goals).resolve(RecruitmentPlatformId.of("boss"), 3L);

        assertThat(plan.searches()).hasSize(10);
        assertThat(plan.searches()).extracting(search -> search.regionName())
                .containsExactly("武夷山", "武夷山", "福州", "福州", "泉州", "泉州", "晋江", "晋江", "安溪", "安溪");
        assertThat(plan.searches()).extracting(search -> search.keyword()).containsOnly("茶行业", "茶电商");
    }

    @Test
    void excludedAndUnrestrictedRegionsAreNotPositiveSearchFilters() {
        for (var region : List.of(
                new RecruitmentIntentCard.Requirement("specified", List.of("莆田"), null, "exclude", "排除"),
                new RecruitmentIntentCard.Requirement("unrestricted", List.of(), null, null, "不限"),
                new RecruitmentIntentCard.Requirement("unspecified", List.of(), null, null, "未说明"))) {
            var goals = mock(RecruitmentGoalService.class);
            var goal = goal();
            var card = mock(RecruitmentIntentCard.class);
            when(goals.require(3L)).thenReturn(goal);
            when(goals.card(goal)).thenReturn(card);
            when(card.searchTerms()).thenReturn(List.of("茶行业"));
            when(card.requirements()).thenReturn(Map.of("regions", region));
            var plan = new RecruitmentSearchPlanService(goals).resolve(RecruitmentPlatformId.of("boss"), 3L);
            assertThat(plan.searches()).hasSize(1);
            assertThat(plan.searches().getFirst().regionName()).isEmpty();
        }
    }

    private RecruitmentGoalEntity goal() {
        RecruitmentGoalEntity goal = new RecruitmentGoalEntity();
        goal.setId(3L);
        goal.setRawGoal("广州 Java 高级工程师");
        goal.setSummary("广州 Java 高级工程师");
        goal.setKeywords(List.of("Java高级工程师"));
        goal.setCities(List.of("广州"));
        goal.setMinSalaryK(25);
        goal.setMaxSalaryK(40);
        goal.setIndustries(List.of("电商", "供应链"));
        goal.setSkills(List.of("Java"));
        goal.setExcludedKeywords(List.of("外包", "销售"));
        goal.setPreferredCompanyTypes(List.of());
        goal.setAdditionalConditions(Map.of());
        return goal;
    }
}
