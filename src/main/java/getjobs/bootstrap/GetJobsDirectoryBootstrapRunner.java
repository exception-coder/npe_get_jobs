package getjobs.bootstrap;

import getjobs.infrastructure.ai.config.DeepseekConfigRefreshService;
import getjobs.repository.JobRepository;
import getjobs.repository.entity.JobEntity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.Ordered;
import org.springframework.stereotype.Component;
import org.springframework.transaction.support.TransactionTemplate;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

/**
 * 应用启动时确保用户目录下存在 getjobs 目录（{@code ${user.home}/getjobs}），
 * 并在数据库就绪后对 job_info 按 encrypt_job_id 去重，保留创建时间最新的一条。
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class GetJobsDirectoryBootstrapRunner implements ApplicationRunner, Ordered {

    private static final String GETJOBS_DIR = "getjobs";

    private final JobRepository jobRepository;
    private final TransactionTemplate transactionTemplate;
    private final DeepseekConfigRefreshService deepseekConfigRefreshService;

    @Override
    public void run(ApplicationArguments args) {
        ensureGetJobsDirectory();
        deduplicateJobByEncryptJobId();
        deepseekConfigRefreshService.refreshChatModel();
    }

    private void ensureGetJobsDirectory() {
        String userHome = System.getProperty("user.home");
        if (userHome == null || userHome.isBlank()) {
            log.warn("user.home 未设置，跳过 getjobs 目录初始化");
            return;
        }
        Path dir = Paths.get(userHome, GETJOBS_DIR);
        try {
            if (Files.notExists(dir)) {
                Files.createDirectories(dir);
                log.info("已创建用户 getjobs 目录: {}", dir.toAbsolutePath());
            }
        } catch (Exception e) {
            log.error("创建用户 getjobs 目录失败: path={}", dir.toAbsolutePath(), e);
        }
    }

    /**
     * 按 encrypt_job_id 去重：同一 encrypt_job_id 只保留 createdAt 最新的一条，删除其余历史重复记录。
     */
    private void deduplicateJobByEncryptJobId() {
        try {
            Integer deleted = transactionTemplate.execute(status -> {
                List<String> duplicateIds = jobRepository.findEncryptJobIdsWithDuplicates();
                if (duplicateIds == null || duplicateIds.isEmpty()) {
                    return 0;
                }
                int totalDeleted = 0;
                for (String encryptJobId : duplicateIds) {
                    List<JobEntity> list = jobRepository.findAllByEncryptJobIdOrderByCreatedAtDesc(encryptJobId);
                    if (list.size() <= 1) {
                        continue;
                    }
                    // 保留第一条（createdAt 最新），删除其余
                    List<Long> idsToDelete = list.stream()
                            .skip(1)
                            .map(JobEntity::getId)
                            .toList();
                    idsToDelete.forEach(jobRepository::deleteById);
                    totalDeleted += idsToDelete.size();
                }
                return totalDeleted;
            });
            if (deleted != null && deleted > 0) {
                log.info("job_info 按 encrypt_job_id 去重完成，删除重复记录数: {}", deleted);
            }
        } catch (Exception e) {
            log.error("job_info 按 encrypt_job_id 去重失败", e);
        }
    }

    @Override
    public int getOrder() {
        return Ordered.HIGHEST_PRECEDENCE;
    }
}
