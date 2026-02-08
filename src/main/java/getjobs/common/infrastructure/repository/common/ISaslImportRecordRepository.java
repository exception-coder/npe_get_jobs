package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * SASL 导入记录仓储统一接口
 *
 * @param <T> SASL 导入记录实体类型
 * @author getjobs
 */
public interface ISaslImportRecordRepository<T> extends JpaRepository<T, Long> {

    /**
     * 根据文档标题删除所有导入记录。
     *
     * @param documentTitle 文档标题
     */
    void deleteByDocumentTitle(String documentTitle);
}

