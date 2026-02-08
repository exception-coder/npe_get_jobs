package getjobs.modules.resume.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

/**
 * 项目经历实体
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "project_experience")
public class ProjectExperience extends BaseEntity {

    /**
     * 所属简历
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "resume_id", nullable = false)
    private Resume resume;

    /**
     * 项目名称
     */
    @Column(name = "name", length = 200)
    private String name;

    /**
     * 角色
     */
    @Column(name = "role", length = 200)
    private String role;

    /**
     * 时间段
     */
    @Column(name = "period", length = 100)
    private String period;

    /**
     * 项目概述
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

