package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 线索记录仓储统一接口
 *
 * @param <T> 线索记录实体类型
 * @author getjobs
 */
public interface ILeadRecordRepository<T> extends JpaRepository<T, Long> {
}

