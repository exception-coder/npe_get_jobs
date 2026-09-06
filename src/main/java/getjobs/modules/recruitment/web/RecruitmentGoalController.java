package getjobs.modules.recruitment.web;

import getjobs.modules.recruitment.application.RecruitmentGoalService;
import getjobs.repository.entity.RecruitmentGoalEntity;
import getjobs.modules.recruitment.domain.RecruitmentIntentCard;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/recruitment/goals")
public class RecruitmentGoalController {
    private final RecruitmentGoalService goalService;

    public RecruitmentGoalController(RecruitmentGoalService goalService) {
        this.goalService = goalService;
    }

    @PostMapping("/interpret")
    @ResponseStatus(HttpStatus.CREATED)
    public RecruitmentGoalResponse interpret(@RequestBody InterpretGoalRequest request) {
        return response(goalService.interpretAndActivate(request.goal()));
    }

    @GetMapping("/active")
    public RecruitmentGoalResponse active() {
        RecruitmentGoalEntity active = goalService.active();
        return active == null ? null : response(active);
    }

    @PostMapping("/confirm")
    @ResponseStatus(HttpStatus.CREATED)
    public RecruitmentGoalResponse confirm(@RequestBody ConfirmGoalRequest request) {
        return response(goalService.confirm(request.sourceId(), request.card()));
    }

    private RecruitmentGoalResponse response(RecruitmentGoalEntity entity) {
        return new RecruitmentGoalResponse(entity.getId(), entity.getRawGoal(), entity.getSummary(),
                values(entity.getKeywords()), values(entity.getCities()), entity.getMinSalaryK(), entity.getMaxSalaryK(),
                entity.getMinExperienceYears(), entity.getMaxExperienceYears(), values(entity.getIndustries()),
                values(entity.getSkills()), values(entity.getExcludedKeywords()), values(entity.getPreferredCompanyTypes()),
                entity.getJobType(), map(entity.getAdditionalConditions()), entity.getInterpreterVersion(),
                Boolean.TRUE.equals(entity.getActive()), goalService.card(entity), goalService.confirmed(entity));
    }

    private List<String> values(List<String> values) {
        return values == null ? List.of() : values;
    }

    private Map<String, String> map(Map<String, String> values) {
        return values == null ? Map.of() : values;
    }

    public record InterpretGoalRequest(String goal) { }
    public record ConfirmGoalRequest(Long sourceId, RecruitmentIntentCard card) { }

    public record RecruitmentGoalResponse(
            Long id, String rawGoal, String summary, List<String> keywords, List<String> cities,
            Integer minSalaryK, Integer maxSalaryK, Integer minExperienceYears, Integer maxExperienceYears,
            List<String> industries, List<String> skills, List<String> excludedKeywords,
            List<String> preferredCompanyTypes, String jobType, Map<String, String> additionalConditions,
            String interpreterVersion, boolean active, RecruitmentIntentCard card, boolean confirmed
    ) { }
}
