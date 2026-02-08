package getjobs.modules.datasource.mysql.repository;

import getjobs.common.infrastructure.repository.common.ISaslImportRecordRepository;
import getjobs.modules.sasl.domain.SaslImportRecord;
import org.springframework.stereotype.Repository;

/**
 * SASL 导入记录仓储接口（MySQL数据源）。
 */
@Repository
public interface SaslImportRecordMysqlRepository extends ISaslImportRecordRepository<SaslImportRecord> {

    /**
     * 根据文档标题删除所有导入记录。
     *
     * @param documentTitle 文档标题
     */
    void deleteByDocumentTitle(String documentTitle);
}
