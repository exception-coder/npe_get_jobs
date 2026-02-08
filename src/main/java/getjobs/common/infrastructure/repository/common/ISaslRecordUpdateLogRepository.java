package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * SASL 记录更新流水仓储统一接口
 *
 * @param <T> SASL 记录更新流水实体类型
 * @author getjobs
 */
public interface ISaslRecordUpdateLogRepository<T> extends JpaRepository<T, Long> {

    /**
     * 根据MRT查询更新流水，按创建时间倒序排列。
     *
     * @param mrt MRT（移动电话号码）
     * @return 更新流水列表
     */
    List<T> findByMrtOrderByCreatedAtDesc(String mrt);
}
