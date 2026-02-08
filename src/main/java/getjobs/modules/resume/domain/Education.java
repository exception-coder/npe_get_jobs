package getjobs.modules.resume.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

/**
 * 教育经历实体
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "education")
public class Education extends BaseEntity {

    /**
     * 所属简历
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "resume_id", nullable = false)
    private Resume resume;

    /**
     * 学校
     */
    @Column(name = "school", length = 200)
    private String school;

    /**
     * 专业
     */
    @Column(name = "major", length = 200)
    private String major;

    /**
     * 学位
     */
    @Column(name = "degree", length = 100)
    private String degree;

    /**
     * 时间段
     */
    @Column(name = "period", length = 100)
    private String period;

    /**
     * 排序序号
     */
    @Column(name = "sort_order")
    private Integer sortOrder;
}

