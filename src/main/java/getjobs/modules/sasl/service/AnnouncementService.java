package getjobs.modules.sasl.service;

import getjobs.common.infrastructure.repository.common.IAnnouncementRepository;
import getjobs.common.infrastructure.repository.service.RepositoryServiceHelper;
import getjobs.modules.sasl.domain.Announcement;
import jakarta.annotation.PostConstruct;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

/**
 * 公告服务。
 * 提供公告的增删改查功能。
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class AnnouncementService {

    private static final String MODULE_NAME = "sasl";

    private final RepositoryServiceHelper repositoryHelper;

    private IAnnouncementRepository<Announcement> announcementRepository;

    /**
     * 初始化Repository实例
     * <p>
     * 根据配置自动选择SQLite或MySQL的Repository实现。
     * Service层使用统一接口类型，不依赖具体的数据库实现。
     * </p>
     */
    @PostConstruct
    @SuppressWarnings("unchecked")
    public void initRepositories() {
        this.announcementRepository = repositoryHelper.getRepository(IAnnouncementRepository.class, MODULE_NAME);

        if (repositoryHelper.isMySQL(MODULE_NAME)) {
            log.info("AnnouncementService 使用 MySQL 数据源");
        } else {
            log.info("AnnouncementService 使用 SQLite 数据源");
        }

        // 初始化默认公告
        initializeDefaultAnnouncements();
    }

    /**
     * 应用启动时初始化默认公告。
     * 如果数据库中没有公告，则创建5条默认公告。
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    private void initializeDefaultAnnouncements() {
        try {
            log.info("=== 开始初始化默认公告 ===");

            // 检查数据库中是否存在未删除的公告
            List<Announcement> existingAnnouncements = announcementRepository.findAllNotDeleted();

            if (existingAnnouncements.isEmpty()) {
                log.info("数据库中没有公告，开始创建默认公告...");

                // 5条默认公告内容
                List<String> defaultContents = Arrays.asList(
                        "系統維護通知：今晚 00:00 進行例行維護",
                        "新套餐上線：5G 尊享計劃現已推出",
                        "銷售競賽：本月 TOP 3 獎勵公佈",
                        "操作指引更新：請查閱最新文檔",
                        "溫馨提示：請及時跟進待處理客戶");

                // 创建5条默认公告，设置为启用状态，排序顺序从1开始
                for (int i = 0; i < defaultContents.size(); i++) {
                    create(defaultContents.get(i), true, i + 1);
                }

                long newCount = announcementRepository.findAllNotDeleted().size();
                log.info("✓ 默认公告创建成功，共创建 {} 条公告", newCount);
            } else {
                log.info("✓ 数据库已存在 {} 条公告，跳过初始化", existingAnnouncements.size());
            }

            log.info("=== 默认公告初始化完成 ===");
        } catch (Exception e) {
            log.error("默认公告初始化失败", e);
            // 不抛出异常，避免影响应用启动
        }
    }

    /**
     * 创建公告。
     *
     * @param content   公告内容
     * @param enabled   是否启用
     * @param sortOrder 排序顺序
     * @return 创建的公告实体
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public Announcement create(String content, Boolean enabled, Integer sortOrder) {
        Announcement announcement = new Announcement();
        announcement.setContent(content);
        announcement.setEnabled(enabled != null ? enabled : true);
        announcement.setSortOrder(sortOrder != null ? sortOrder : 0);
        announcement.setIsDeleted(false);

        Announcement saved = announcementRepository.save(announcement);
        log.info("创建公告成功，ID: {}, 内容: {}", saved.getId(), content);
        return saved;
    }

    /**
     * 根据ID查询公告。
     *
     * @param id 公告ID
     * @return 公告实体，如果不存在返回空
     */
    public Optional<Announcement> findById(Long id) {
        return announcementRepository.findById(id)
                .filter(a -> !a.getIsDeleted());
    }

    /**
     * 查询所有未删除的公告。
     *
     * @return 所有未删除的公告列表
     */
    public List<Announcement> findAll() {
        return announcementRepository.findAllNotDeleted();
    }

    /**
     * 查询所有启用的公告。
     *
     * @return 所有启用的公告列表
     */
    public List<Announcement> findAllEnabled() {
        return announcementRepository.findAllEnabled();
    }

    /**
     * 更新公告。
     *
     * @param id        公告ID
     * @param content   公告内容（可选）
     * @param enabled   是否启用（可选）
     * @param sortOrder 排序顺序（可选）
     * @return 更新后的公告实体，如果不存在返回空
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public Optional<Announcement> update(Long id, String content, Boolean enabled, Integer sortOrder) {
        Optional<Announcement> announcementOpt = findById(id);
        if (announcementOpt.isEmpty()) {
            log.warn("更新公告失败，公告不存在，ID: {}", id);
            return Optional.empty();
        }

        Announcement announcement = announcementOpt.get();
        if (content != null) {
            announcement.setContent(content);
        }
        if (enabled != null) {
            announcement.setEnabled(enabled);
        }
        if (sortOrder != null) {
            announcement.setSortOrder(sortOrder);
        }

        Announcement updated = announcementRepository.save(announcement);
        log.info("更新公告成功，ID: {}", id);
        return Optional.of(updated);
    }

    /**
     * 删除公告（逻辑删除）。
     *
     * @param id 公告ID
     * @return 是否删除成功
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public boolean delete(Long id) {
        Optional<Announcement> announcementOpt = findById(id);
        if (announcementOpt.isEmpty()) {
            log.warn("删除公告失败，公告不存在，ID: {}", id);
            return false;
        }

        Announcement announcement = announcementOpt.get();
        announcement.setIsDeleted(true);
        announcementRepository.save(announcement);
        log.info("删除公告成功，ID: {}", id);
        return true;
    }

    /**
     * 批量删除公告（逻辑删除）。
     *
     * @param ids 公告ID列表
     * @return 成功删除的数量
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public int deleteBatch(List<Long> ids) {
        if (ids == null || ids.isEmpty()) {
            return 0;
        }

        int deletedCount = 0;
        for (Long id : ids) {
            if (delete(id)) {
                deletedCount++;
            }
        }
        log.info("批量删除公告完成，成功删除 {} 条", deletedCount);
        return deletedCount;
    }
}
