package getjobs.repository.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

/** Immutable evidence snapshot for one job evaluation against an intent version. */
@Data
@Entity
@Table(name = "recruitment_intent_match")
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
    @Column(name = "job_snapshot", nullable = false, columnDefinition = "TEXT")
    private String jobSnapshot;
    @Column(name = "result_json", nullable = false, columnDefinition = "TEXT")
    private String resultJson;
}
