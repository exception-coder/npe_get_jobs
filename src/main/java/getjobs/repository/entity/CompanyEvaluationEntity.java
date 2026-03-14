package getjobs.repository.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * 公司质量评估结果持久化实体
 * <p>
 * 按公司信息文本去重：同一 companyInfo 仅保留一条评估记录，用于接口前先查库避免重复调用 AI。
 * </p>
 */
@Getter
@Setter
@Entity
@Table(name = "company_evaluation", indexes = {
        @Index(name = "idx_company_info", columnList = "company_info")
})
public class CompanyEvaluationEntity extends BaseEntity {

    /**
     * 请求时的公司信息文本（用于查重与缓存命中）
     */
    @Column(name = "company_info", nullable = false, columnDefinition = "TEXT")
    private String companyInfo;

    /**
     * 评估结果 JSON（与 {@link getjobs.modules.ai.company.dto.CompanyEvaluationResult} 结构一致）
     */
    @Column(name = "result_json", nullable = false, columnDefinition = "TEXT")
    private String resultJson;
}
