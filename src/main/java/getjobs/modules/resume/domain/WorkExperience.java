package getjobs.modules.resume.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

/**
 * 工作经历实体
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "work_experience")
public class WorkExperience extends BaseEntity {

    /**
     * 所属简历
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "resume_id", nullable = false)
    private Resume resume;

    /**
     * 公司名称
     */
    @Column(name = "company", length = 200)
    private String company;

    /**
     * 职位
     */
    @Column(name = "role", length = 200)
    private String role;

    /**
     * 时间段
     */
    @Column(name = "period", length = 100)
    private String period;

    /**
     * 职责概述
     */
    @Column(name = "summary", columnDefinition = "TEXT")
    private String summary;

    /**
     * 关键成果（JSON格式存储数组）
     */
    @Column(name = "highlights", columnDefinition = "TEXT")
    private String highlights;

    /**
     * 排序序号
     */
    @Column(name = "sort_order")
    private Integer sortOrder;
}

