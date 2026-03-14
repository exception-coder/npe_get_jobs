package getjobs.bootstrap;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.Ordered;
import org.springframework.stereotype.Component;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * 应用启动时确保用户目录下存在 getjobs 目录（{@code ${user.home}/getjobs}）。
 * <p>
 * 若不存在则创建，便于后续将配置、数据等写入用户目录而无需用户手动建目录。
 * </p>
 */
@Slf4j
@Component
public class GetJobsDirectoryBootstrapRunner implements ApplicationRunner, Ordered {

    private static final String GETJOBS_DIR = "getjobs";

    @Override
    public void run(ApplicationArguments args) {
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

    @Override
    public int getOrder() {
        return Ordered.HIGHEST_PRECEDENCE;
    }
}
