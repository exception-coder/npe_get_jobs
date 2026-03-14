package getjobs.repository;

import getjobs.repository.entity.CompanyEvaluationEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

/**
 * 公司评估结果仓储
 */
public interface CompanyEvaluationRepository extends JpaRepository<CompanyEvaluationEntity, Long> {

    /**
     * 根据公司信息文本查询未删除的评估记录（用于调用 AI 前先查缓存）
     *
     * @param companyInfo 公司信息文本（需与入库时一致，如 trim 后）
     * @return 若存在则返回最近一条
     */
    Optional<CompanyEvaluationEntity> findFirstByCompanyInfoAndIsDeletedFalseOrderByCreatedAtDesc(String companyInfo);

    /**
     * 分页查询未删除的评估记录，按创建时间倒序
     */
    Page<CompanyEvaluationEntity> findAllByIsDeletedFalseOrderByCreatedAtDesc(Pageable pageable);

    /**
     * 按 ID 列表逻辑删除
     *
     * @param ids 主键 ID 列表
     * @return 更新行数
     */
    @Modifying
    @Query("UPDATE CompanyEvaluationEntity e SET e.isDeleted = true WHERE e.id IN :ids")
    int markDeletedByIdIn(@Param("ids") List<Long> ids);

    /**
     * 逻辑删除全部未删除记录
     *
     * @return 更新行数
     */
    @Modifying
    @Query("UPDATE CompanyEvaluationEntity e SET e.isDeleted = true WHERE e.isDeleted = false")
    int markDeletedAll();
}
