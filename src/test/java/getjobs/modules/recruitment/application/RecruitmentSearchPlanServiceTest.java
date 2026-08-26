package getjobs.modules.recruitment.application;

import getjobs.modules.getjobs.service.ConfigService;
import getjobs.modules.recruitment.domain.RecruitmentPlatformId;
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
        when(configService.loadByPlatformType("boss")).thenReturn(null);
        when(profileRepository.findAll()).thenReturn(List.of());
        when(goalService.require(3L)).thenReturn(goal);
        RecruitmentSearchPlanService service = new RecruitmentSearchPlanService(
                configService, profileRepository, goalService);

        RecruitmentSearchPlan plan = service.resolve(RecruitmentPlatformId.of("boss"), 3L);

        assertThat(plan.searches()).hasSize(1);
        assertThat(plan.searches().getFirst().keyword()).isEqualTo("Java高级工程师");
        assertThat(plan.filters()).containsEntry("goalMinSalaryK", 25)
                .containsEntry("goalMaxSalaryK", 40);
    }

    private RecruitmentGoalEntity goal() {
        RecruitmentGoalEntity goal = new RecruitmentGoalEntity();
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
