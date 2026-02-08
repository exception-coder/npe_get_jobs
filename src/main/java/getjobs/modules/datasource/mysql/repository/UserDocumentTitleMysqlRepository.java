package getjobs.modules.datasource.mysql.repository;

import getjobs.common.infrastructure.repository.common.IUserDocumentTitleRepository;
import getjobs.modules.sasl.domain.UserDocumentTitle;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 用户文档标题关系仓储接口（MySQL数据源）。
 */
@Repository
public interface UserDocumentTitleMysqlRepository extends IUserDocumentTitleRepository<UserDocumentTitle> {

    /**
     * 根据用户ID查询所有文档标题。
     *
     * @param userId 用户ID
     * @return 文档标题列表
     */
    @Override
    @Query("SELECT udt.documentTitle FROM UserDocumentTitle udt WHERE udt.userId = :userId ORDER BY udt.documentTitle ASC")
    List<String> findDocumentTitlesByUserId(@Param("userId") Long userId);

    /**
     * 根据用户ID查询所有关系记录。
     *
     * @param userId 用户ID
     * @return 关系记录列表
     */
    List<UserDocumentTitle> findByUserId(Long userId);

    /**
     * 根据用户ID和文档标题查询关系记录。
     *
     * @param userId        用户ID
     * @param documentTitle 文档标题
     * @return 关系记录，如果不存在返回 null
     */
    UserDocumentTitle findByUserIdAndDocumentTitle(Long userId, String documentTitle);

    /**
     * 检查用户ID和文档标题的关系是否存在。
     *
     * @param userId        用户ID
     * @param documentTitle 文档标题
     * @return 如果存在返回 true，否则返回 false
     */
    boolean existsByUserIdAndDocumentTitle(Long userId, String documentTitle);

    /**
     * 根据用户ID删除所有关系记录。
     *
     * @param userId 用户ID
     */
    void deleteByUserId(Long userId);
}
