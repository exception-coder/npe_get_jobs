package getjobs.modules.datasource.mysql.repository;

import getjobs.common.infrastructure.repository.common.IAnnouncementRepository;
import getjobs.modules.sasl.domain.Announcement;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 公告仓储接口（MySQL数据源）。
 */
@Repository
public interface AnnouncementMysqlRepository extends IAnnouncementRepository<Announcement> {

        /**
         * 查询所有启用的公告，按排序顺序和创建时间排序。
         *
         * @return 启用的公告列表
         */
        @Override
        @Query("SELECT a FROM Announcement a " +
                        "WHERE a.enabled = true AND a.isDeleted = false " +
                        "ORDER BY a.sortOrder ASC, a.createdAt DESC")
        List<Announcement> findAllEnabled();

        /**
         * 查询所有未删除的公告，按排序顺序和创建时间排序。
         *
         * @return 所有未删除的公告列表
         */
        @Override
        @Query("SELECT a FROM Announcement a " +
                        "WHERE a.isDeleted = false " +
                        "ORDER BY a.sortOrder ASC, a.createdAt DESC")
        List<Announcement> findAllNotDeleted();
}
