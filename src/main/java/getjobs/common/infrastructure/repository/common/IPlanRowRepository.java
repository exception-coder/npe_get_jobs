package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * 套餐行数据仓储统一接口
 *
 * @param <T> 套餐行数据实体类型
 * @param <S> 套餐方案实体类型
 * @author getjobs
 */
public interface IPlanRowRepository<T, S> extends JpaRepository<T, Long> {

    /**
     * 根据套餐方案查询所有行数据，按排序顺序排序。
     *
     * @param planSection 套餐方案
     * @return 行数据列表，按排序顺序排序
     */
    List<T> findByPlanSectionOrderBySortOrderAsc(S planSection);

    /**
     * 根据套餐方案ID删除所有行数据。
     *
     * @param planSectionId 套餐方案ID
     */
    void deleteByPlanSectionId(Long planSectionId);
}

