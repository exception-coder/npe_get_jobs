package getjobs.modules.recruitment.application;

import getjobs.modules.recruitment.domain.RecruitmentGoalConditions;
import getjobs.modules.recruitment.spi.RecruitmentGoalInterpreter;
import getjobs.modules.recruitment.domain.RecruitmentIntentCard;
import getjobs.modules.recruitment.spi.RecruitmentIntentSerialization;
import getjobs.repository.RecruitmentGoalRepository;
import getjobs.repository.entity.RecruitmentGoalEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Creates immutable goal versions and maintains one active platform-neutral goal. */
@Service
public class RecruitmentGoalService {
    private final RecruitmentGoalRepository repository;
    private final RecruitmentGoalInterpreter interpreter;
    private final RecruitmentIntentSerialization codec;

    public RecruitmentGoalService(RecruitmentGoalRepository repository, RecruitmentGoalInterpreter interpreter,
                                  RecruitmentIntentSerialization codec) {
        this.repository = repository;
        this.interpreter = interpreter;
        this.codec = codec;
    }

    public RecruitmentGoalEntity interpretAndActivate(String rawGoal) {
        String normalized = requireGoal(rawGoal);
        RecruitmentGoalConditions conditions = interpreter.interpret(normalized);
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
        entity.setActive(false);
        return repository.save(entity);
    }

    /** Confirmation creates a new immutable version; the source draft remains intact. */
    @Transactional
    public RecruitmentGoalEntity confirm(Long sourceId, RecruitmentIntentCard card) {
        if (sourceId == null || card == null) {
            throw new IllegalArgumentException("请选择意向草稿并填写卡片");
        }
        card.validate();
        RecruitmentGoalEntity source = repository.findById(sourceId)
                .orElseThrow(() -> new IllegalArgumentException("意向草稿不存在，请重新解析"));
        RecruitmentGoalEntity entity = new RecruitmentGoalEntity();
        entity.setRawGoal(source.getRawGoal());
        entity.setSummary(card.summary());
        entity.setKeywords(card.searchTerms());
        entity.setAdditionalConditions(java.util.Map.of("intentCard", codec.write(card),
                "intentStatus", "confirmed", "sourceId", sourceId.toString()));
        entity.setInterpreterVersion(interpreter.version());
        entity.setActive(true);
        repository.deactivateAll();
        return repository.save(entity);
    }

    public RecruitmentIntentCard card(RecruitmentGoalEntity entity) {
        if (entity.getAdditionalConditions() == null || !entity.getAdditionalConditions().containsKey("intentCard")) {
            return null;
        }
        return codec.read(entity.getAdditionalConditions().get("intentCard"));
    }

    public boolean confirmed(RecruitmentGoalEntity entity) {
        return entity.getAdditionalConditions() != null
                && "confirmed".equals(entity.getAdditionalConditions().get("intentStatus"));
    }

    public RecruitmentGoalEntity require(Long goalId) {
        if (goalId == null) throw new IllegalArgumentException("goalId is required");
        RecruitmentGoalEntity entity = repository.findById(goalId)
                .orElseThrow(() -> new IllegalArgumentException("recruitment goal not found: " + goalId));
        if (!confirmed(entity)) {
            throw new IllegalArgumentException("请先解析并确认求职意向卡，再开始寻找");
        }
        return entity;
    }

    public RecruitmentGoalEntity active() {
        return repository.findFirstByActiveTrueOrderByIdDesc().orElse(null);
    }

    private String requireGoal(String rawGoal) {
        if (rawGoal == null || rawGoal.isBlank()) throw new IllegalArgumentException("job goal must not be blank");
        String normalized = rawGoal.trim();
        if (normalized.length() > 6000) throw new IllegalArgumentException("求职描述不能超过6000字");
        return normalized;
    }
}
