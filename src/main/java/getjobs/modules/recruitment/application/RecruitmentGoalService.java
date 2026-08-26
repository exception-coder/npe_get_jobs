package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.modules.recruitment.spi.RecruitmentGoalInterpreter;
import getjobs.repository.RecruitmentGoalRepository;
import getjobs.repository.entity.RecruitmentGoalEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Creates immutable goal versions and maintains one active platform-neutral goal. */
@Service
public class RecruitmentGoalService {
    private final RecruitmentGoalRepository repository;
    private final RecruitmentGoalInterpreter interpreter;

    public RecruitmentGoalService(RecruitmentGoalRepository repository, RecruitmentGoalInterpreter interpreter) {
        this.repository = repository;
        this.interpreter = interpreter;
    }

    @Transactional
    public RecruitmentGoalEntity interpretAndActivate(String rawGoal) {
        String normalized = requireGoal(rawGoal);
        RecruitmentGoalConditions conditions = interpreter.interpret(normalized);
        repository.findAll().stream().filter(goal -> Boolean.TRUE.equals(goal.getActive())).forEach(goal -> goal.setActive(false));
        RecruitmentGoalEntity entity = new RecruitmentGoalEntity();
        entity.setRawGoal(normalized);
        entity.setSummary(conditions.summary());
        entity.setKeywords(conditions.keywords());
        entity.setCities(conditions.cities());
        entity.setMinSalaryK(conditions.minSalaryK());
        entity.setMaxSalaryK(conditions.maxSalaryK());
        entity.setMinExperienceYears(conditions.minExperienceYears());
        entity.setMaxExperienceYears(conditions.maxExperienceYears());
        entity.setIndustries(conditions.industries());
        entity.setSkills(conditions.skills());
        entity.setExcludedKeywords(conditions.excludedKeywords());
        entity.setPreferredCompanyTypes(conditions.preferredCompanyTypes());
        entity.setJobType(conditions.jobType());
        entity.setAdditionalConditions(conditions.additionalConditions());
        entity.setInterpreterVersion(interpreter.version());
        entity.setActive(true);
        return repository.save(entity);
    }

    public RecruitmentGoalEntity require(Long goalId) {
        if (goalId == null) throw new IllegalArgumentException("goalId is required");
        return repository.findById(goalId).orElseThrow(() -> new IllegalArgumentException("recruitment goal not found: " + goalId));
    }

    public RecruitmentGoalEntity active() {
        return repository.findFirstByActiveTrueOrderByIdDesc().orElse(null);
    }

    private String requireGoal(String rawGoal) {
        if (rawGoal == null || rawGoal.isBlank()) throw new IllegalArgumentException("job goal must not be blank");
        String normalized = rawGoal.trim();
        if (normalized.length() > 1000) throw new IllegalArgumentException("job goal must not exceed 1000 characters");
        return normalized;
    }
}
