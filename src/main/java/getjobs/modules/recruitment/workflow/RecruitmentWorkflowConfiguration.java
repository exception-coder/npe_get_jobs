package getjobs.modules.recruitment.workflow;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

@Configuration
public class RecruitmentWorkflowConfiguration {
    @Bean("recruitmentWorkflowExecutor")
    ThreadPoolTaskExecutor recruitmentWorkflowExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(2);
        executor.setMaxPoolSize(4);
        executor.setQueueCapacity(32);
        executor.setThreadNamePrefix("recruitment-workflow-");
        executor.initialize();
        return executor;
    }
}
