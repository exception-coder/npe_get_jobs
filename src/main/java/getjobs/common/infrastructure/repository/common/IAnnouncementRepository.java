package getjobs.common.infrastructure.repository.common;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * 公告仓储统一接口
 *
 * @param <T> 公告实体类型
 * @author getjobs
 */
public interface IAnnouncementRepository<T> extends JpaRepository<T, Long> {

    /**
     * 查询所有启用的公告，按排序顺序和创建时间排序。
     *
     * @return 启用的公告列表
     */
    List<T> findAllEnabled();

    /**
     * 查询所有未删除的公告，按排序顺序和创建时间排序。
     *
     * @return 所有未删除的公告列表
     */
    List<T> findAllNotDeleted();
}

