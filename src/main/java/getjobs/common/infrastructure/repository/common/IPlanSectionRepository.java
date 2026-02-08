package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

/**
 * 套餐方案仓储统一接口
 *
 * @param <T> 套餐方案实体类型
 * @author getjobs
 */
public interface IPlanSectionRepository<T> extends JpaRepository<T, Long> {

    /**
     * 根据套餐ID查询套餐方案。
     *
     * @param planId 套餐ID
     * @return 套餐方案，如果不存在返回空
     */
    Optional<T> findByPlanId(String planId);

    /**
     * 根据ID查询套餐方案，并立即加载 rows 集合。
     * 使用 JOIN FETCH 避免懒加载异常。
     *
     * @param id 套餐方案ID
     * @return 套餐方案，如果不存在返回空
     */
    @Query("SELECT DISTINCT ps FROM PlanSection ps LEFT JOIN FETCH ps.rows WHERE ps.id = :id")
    Optional<T> findByIdWithRows(@Param("id") Long id);

    /**
     * 根据套餐ID查询套餐方案，并立即加载 rows 集合。
     * 使用 JOIN FETCH 避免懒加载异常。
     *
     * @param planId 套餐ID
     * @return 套餐方案，如果不存在返回空
     */
    @Query("SELECT DISTINCT ps FROM PlanSection ps LEFT JOIN FETCH ps.rows WHERE ps.planId = :planId")
    Optional<T> findByPlanIdWithRows(@Param("planId") String planId);

    /**
     * 检查套餐ID是否存在。
     *
     * @param planId 套餐ID
     * @return 如果存在返回 true，否则返回 false
     */
    boolean existsByPlanId(String planId);

    /**
     * 查询所有套餐方案，按ID排序。
     *
     * @return 套餐方案列表
     */
    List<T> findAllActiveOrderByIdAsc();

    /**
     * 统计活跃的套餐方案数量。
     *
     * @return 活跃套餐方案数量
     */
    long countActive();
}

