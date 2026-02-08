package getjobs.modules.datasource.mysql.repository;

import getjobs.common.infrastructure.repository.common.ISaslRecordUpdateLogRepository;
import getjobs.modules.sasl.domain.SaslRecordUpdateLog;
import org.springframework.stereotype.Repository;

/**
 * SASL 记录更新流水仓储接口（MySQL数据源）。
 */
@Repository
public interface SaslRecordUpdateLogMysqlRepository extends ISaslRecordUpdateLogRepository<SaslRecordUpdateLog> {
}
