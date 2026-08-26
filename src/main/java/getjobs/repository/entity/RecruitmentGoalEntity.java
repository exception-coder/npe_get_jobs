package getjobs.repository.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;
import java.util.Map;

/** Versioned, platform-neutral search intent. Only one record is active at a time. */
@Data
@Entity
@Table(name = "recruitment_goal")
@EqualsAndHashCode(callSuper = true)
public class RecruitmentGoalEntity extends BaseEntity {
    @Column(name = "raw_goal", nullable = false, columnDefinition = "TEXT")
    private String rawGoal;

    @Column(name = "summary", length = 500)
    private String summary;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "keywords", columnDefinition = "TEXT")
    private List<String> keywords;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "cities", columnDefinition = "TEXT")
    private List<String> cities;

    @Column(name = "min_salary_k")
    private Integer minSalaryK;

    @Column(name = "max_salary_k")
    private Integer maxSalaryK;

    @Column(name = "min_experience_years")
    private Integer minExperienceYears;

    @Column(name = "max_experience_years")
    private Integer maxExperienceYears;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "industries", columnDefinition = "TEXT")
    private List<String> industries;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "skills", columnDefinition = "TEXT")
    private List<String> skills;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "excluded_keywords", columnDefinition = "TEXT")
    private List<String> excludedKeywords;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "preferred_company_types", columnDefinition = "TEXT")
    private List<String> preferredCompanyTypes;

    @Column(name = "job_type", length = 100)
    private String jobType;

    @Convert(converter = JsonMapStringConverter.class)
    @Column(name = "additional_conditions", columnDefinition = "TEXT")
    private Map<String, String> additionalConditions;

    @Column(name = "interpreter_version", nullable = false, length = 50)
    private String interpreterVersion;

    @Column(name = "active", nullable = false)
    private Boolean active = true;
}
