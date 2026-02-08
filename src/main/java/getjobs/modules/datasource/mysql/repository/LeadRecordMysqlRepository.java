package getjobs.modules.datasource.mysql.repository;

import getjobs.common.infrastructure.repository.common.ILeadRecordRepository;
import getjobs.modules.sasl.domain.LeadRecord;
import org.springframework.stereotype.Repository;

/**
 * 线索记录仓储接口（MySQL数据源）。
 */
@Repository
public interface LeadRecordMysqlRepository extends ILeadRecordRepository<LeadRecord> {
}

