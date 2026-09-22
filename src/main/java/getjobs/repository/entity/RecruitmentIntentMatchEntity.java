package getjobs.repository.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Index;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

/** Immutable evidence snapshot for one job evaluation against an intent version. */
@Data
@Entity
@Table(name = "recruitment_intent_match", indexes = @Index(name = "idx_rim_cache_lookup",
        columnList = "intent_version,platform,platform_job_id,decision_context"))
@EqualsAndHashCode(callSuper = true)
public class RecruitmentIntentMatchEntity extends BaseEntity {
    @Column(name = "intent_version", nullable = false)
    private Long intentVersion;
    @Column(name = "platform", nullable = false)
    private String platform;
    @Column(name = "platform_job_id", nullable = false)
    private String platformJobId;
    @Column(name = "jd_version", nullable = false)
    private String jdVersion;
    @Column(name = "recommendation", nullable = false)
    private String recommendation;
    @Column(name = "confidence", nullable = false, length = 20, columnDefinition = "VARCHAR(20) DEFAULT 'low'")
    private String confidence = "low";
    @Column(name = "decision_context", nullable = false, length = 64,
            columnDefinition = "VARCHAR(64) DEFAULT 'legacy'")
    private String decisionContext = "legacy";
    @Column(name = "job_snapshot", nullable = false, columnDefinition = "TEXT")
    private String jobSnapshot;
    @Column(name = "result_json", nullable = false, columnDefinition = "TEXT")
    private String resultJson;
}
