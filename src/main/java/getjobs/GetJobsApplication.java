package getjobs;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.nio.file.Files;
import java.nio.file.Paths;

/** 招聘平台聚合与岗位工作流应用入口。 */
@Slf4j
@EnableScheduling
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
