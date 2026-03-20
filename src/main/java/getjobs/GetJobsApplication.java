package getjobs;

import de.codecentric.boot.admin.server.config.EnableAdminServer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * 主应用类
 * <p>
 * 数据源配置说明：
 * <ul>
 * <li>SQLite 主数据源：由
 * {@link getjobs.infrastructure.datasource.PrimaryDataSourceConfig}
 * 配置</li>
 * <li>MySQL 数据源：由
 * {@link getjobs.infrastructure.datasource.MySQLDataSourceConfig}
 * 配置</li>
 * </ul>
 * </p>
 * <p>
 * 注意：禁用了 Spring Boot 的数据源和 JPA 自动配置，因为我们手动配置了多数据源。
 * </p>
 * <p>
 * Spring Boot Admin Server 已启用，可通过配置的路径访问监控界面。
 * </p>
 */
@Slf4j
@EnableScheduling
@EnableAdminServer
@SpringBootApplication
public class GetJobsApplication {
    public static void main(String[] args) {
        ensureGetJobsDirectory();
        SpringApplication.run(GetJobsApplication.class, args);
    }

    private static void ensureGetJobsDirectory() {
        String userHome = System.getProperty("user.home");
        if (userHome == null || userHome.isBlank()) {
            return;
        }
        try {
            Files.createDirectories(Paths.get(userHome, "getjobs"));
        } catch (Exception e) {
            System.err.println("[getjobs] 创建 getjobs 目录失败: " + e.getMessage());
        }
    }
}
