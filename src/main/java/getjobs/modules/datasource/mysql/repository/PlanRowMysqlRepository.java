package getjobs.modules.datasource.mysql.repository;

import getjobs.common.infrastructure.repository.common.IPlanRowRepository;
import getjobs.modules.sasl.domain.PlanRow;
import getjobs.modules.sasl.domain.PlanSection;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 套餐行数据仓储接口（MySQL数据源）。
 */
@Repository
public interface PlanRowMysqlRepository extends IPlanRowRepository<PlanRow, PlanSection> {

    /**
     * 根据套餐方案查询所有行数据，按排序顺序排序。
     *
     * @param planSection 套餐方案
     * @return 行数据列表，按排序顺序排序
     */
    List<PlanRow> findByPlanSectionOrderBySortOrderAsc(PlanSection planSection);

    /**
     * 根据套餐方案ID删除所有行数据。
     *
     * @param planSectionId 套餐方案ID
     */
    @Modifying
    @Transactional
    @Query("DELETE FROM PlanRow pr WHERE pr.planSection.id = :planSectionId")
    void deleteByPlanSectionId(@Param("planSectionId") Long planSectionId);
}
