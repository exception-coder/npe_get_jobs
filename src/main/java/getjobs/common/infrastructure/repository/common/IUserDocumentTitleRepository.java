package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * 用户文档标题关系仓储统一接口
 *
 * @param <T> 用户文档标题关系实体类型
 * @author getjobs
 */
public interface IUserDocumentTitleRepository<T> extends JpaRepository<T, Long> {

    /**
     * 根据用户ID查询所有文档标题。
     *
     * @param userId 用户ID
     * @return 文档标题列表
     */
    List<String> findDocumentTitlesByUserId(Long userId);

    /**
     * 根据用户ID查询所有关系记录。
     *
     * @param userId 用户ID
     * @return 关系记录列表
     */
    List<T> findByUserId(Long userId);

    /**
     * 根据用户ID和文档标题查询关系记录。
     *
     * @param userId        用户ID
     * @param documentTitle 文档标题
     * @return 关系记录，如果不存在返回 null
     */
    T findByUserIdAndDocumentTitle(Long userId, String documentTitle);

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

