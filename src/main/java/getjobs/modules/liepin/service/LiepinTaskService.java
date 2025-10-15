package getjobs.modules.liepin.service;

import getjobs.common.dto.ConfigDTO;
import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.modules.boss.dto.JobDTO;
import getjobs.common.enums.JobStatusEnum;
import getjobs.repository.entity.JobEntity;
import getjobs.repository.JobRepository;
import getjobs.service.JobService;
import getjobs.service.PlaywrightManager;
import getjobs.modules.task.dto.TaskUpdatePayload;
import getjobs.modules.task.enums.TaskStage;
import getjobs.modules.task.enums.TaskStatus;
import getjobs.modules.task.event.TaskUpdateEvent;
import getjobs.service.RecruitmentService;
import getjobs.service.RecruitmentServiceFactory;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

/**
 * 猎聘任务服务
 *
 * @author getjobs
 */
@Slf4j
@Service
public class LiepinTaskService {


    private final RecruitmentServiceFactory serviceFactory;

    private final JobService jobService;

    private final JobRepository jobRepository;
    private final ApplicationEventPublisher eventPublisher;

    private String dataPath;

    public LiepinTaskService(RecruitmentServiceFactory serviceFactory,
            JobService jobService, JobRepository jobRepository, ApplicationEventPublisher eventPublisher) {
        this.serviceFactory = serviceFactory;
        this.jobService = jobService;
        this.jobRepository = jobRepository;
        this.eventPublisher = eventPublisher;
    }

    @PostConstruct
    public void init() {
        try {
            initializeDataFiles();
        } catch (IOException e) {
            log.error("数据文件初始化失败", e);
        }
    }

    public LoginResult login(ConfigDTO config) {
        publishTaskUpdate(TaskStage.LOGIN, TaskStatus.STARTED, 0, "开始登录");
        try {
            log.info("开始执行猎聘登录操作");
            RecruitmentService liepinService = serviceFactory.getService(RecruitmentPlatformEnum.LIEPIN);
            boolean success = liepinService.login(config);

            LoginResult result = new LoginResult();
            result.setSuccess(success);
            result.setMessage(success ? "登录成功" : "登录失败");
            result.setTimestamp(new Date());

            publishTaskUpdate(TaskStage.LOGIN, success ? TaskStatus.SUCCESS : TaskStatus.FAILURE, 0, result.getMessage());
            log.info("猎聘登录操作完成，结果: {}", success ? "成功" : "失败");
            return result;

        } catch (Exception e) {
            log.error("猎聘登录操作执行失败", e);
            publishTaskUpdate(TaskStage.LOGIN, TaskStatus.FAILURE, 0, "登录异常: " + e.getMessage());

            LoginResult result = new LoginResult();
            result.setSuccess(false);
            result.setMessage("登录异常: " + e.getMessage());
            result.setTimestamp(new Date());
            return result;
        }
    }

    public CollectResult collectJobs(ConfigDTO config) {
        publishTaskUpdate(TaskStage.COLLECT, TaskStatus.STARTED, 0, "开始采集");
        try {
            log.info("开始执行猎聘岗位采集操作");
            RecruitmentService liepinService = serviceFactory.getService(RecruitmentPlatformEnum.LIEPIN);

            publishTaskUpdate(TaskStage.COLLECT, TaskStatus.IN_PROGRESS, 0, "正在采集岗位");
            List<JobDTO> allJobDTOS = liepinService.collectJobs(config);
            publishTaskUpdate(TaskStage.COLLECT, TaskStatus.IN_PROGRESS, allJobDTOS.size(), "已采集 " + allJobDTOS.size() + " 个岗位");


            int savedCount = 0;
            if (!allJobDTOS.isEmpty()) {
                try {
                    savedCount = jobService.saveJobs(allJobDTOS, RecruitmentPlatformEnum.LIEPIN.name());
                    log.info("成功保存 {} 个岗位到数据库", savedCount);
                } catch (Exception e) {
                    log.error("保存岗位到数据库失败", e);
                }
            }

            CollectResult result = new CollectResult();
            result.setJobCount(allJobDTOS.size());
            result.setJobs(allJobDTOS);
            String message = String.format("成功采集到 %d 个岗位，保存到数据库 %d 个", allJobDTOS.size(), savedCount);
            result.setMessage(message);
            result.setTimestamp(new Date());

            publishTaskUpdate(TaskStage.COLLECT, TaskStatus.SUCCESS, allJobDTOS.size(), message);
            log.info("猎聘岗位采集操作完成，采集到 {} 个岗位，保存到数据库 {} 个", allJobDTOS.size(), savedCount);
            return result;

        } catch (Exception e) {
            log.error("猎聘岗位采集操作执行失败", e);
            publishTaskUpdate(TaskStage.COLLECT, TaskStatus.FAILURE, 0, "采集异常: " + e.getMessage());

            CollectResult result = new CollectResult();
            result.setJobCount(0);
            result.setJobs(new ArrayList<>());
            result.setMessage("采集异常: " + e.getMessage());
            result.setTimestamp(new Date());
            return result;
        }
    }

    public FilterResult filterJobs(ConfigDTO config) {
        publishTaskUpdate(TaskStage.FILTER, TaskStatus.STARTED, 0, "开始过滤");
        try {
            log.info("开始执行猎聘岗位过滤操作");
            RecruitmentService liepinService = serviceFactory.getService(RecruitmentPlatformEnum.LIEPIN);
            List<JobEntity> allJobEntities = jobService.findAllJobEntitiesByPlatform(RecruitmentPlatformEnum.LIEPIN.getPlatformCode());
            if (allJobEntities == null || allJobEntities.isEmpty()) {
                throw new IllegalArgumentException("数据库中未找到职位数据或职位数据为空");
            }

            List<JobDTO> jobDTOS = allJobEntities.stream().map(jobService::convertToDTO).collect(Collectors.toList());
            List<JobDTO> filteredJobDTOS = liepinService.filterJobs(jobDTOS, config);

            List<String> filteredJobIds = jobDTOS.stream()
                .filter(j -> !filteredJobDTOS.contains(j))
                .map(JobDTO::getEncryptJobId)
                .collect(Collectors.toList());

            if (!filteredJobIds.isEmpty()) {
                jobService.updateJobStatus(filteredJobIds, JobStatusEnum.FILTERED.getCode(), "被过滤");
            }

            FilterResult result = new FilterResult();
            result.setOriginalCount(allJobEntities.size());
            result.setFilteredCount(filteredJobDTOS.size());
            result.setJobs(filteredJobDTOS);
            String message = String.format("原始岗位 %d 个，过滤后剩余 %d 个，已过滤 %d 个", allJobEntities.size(), filteredJobDTOS.size(), filteredJobIds.size());
            result.setMessage(message);
            result.setTimestamp(new Date());

            publishTaskUpdate(TaskStage.FILTER, TaskStatus.SUCCESS, filteredJobDTOS.size(), message);

            log.info("猎聘岗位过滤操作完成，原始 {} 个，过滤后 {} 个，已过滤 {} 个", allJobEntities.size(), filteredJobDTOS.size(), filteredJobIds.size());
            return result;

        } catch (Exception e) {
            log.error("猎聘岗位过滤操作执行失败", e);
            publishTaskUpdate(TaskStage.FILTER, TaskStatus.FAILURE, 0, "过滤异常: " + e.getMessage());
            FilterResult result = new FilterResult();
            result.setOriginalCount(0);
            result.setFilteredCount(0);
            result.setJobs(new ArrayList<>());
            result.setMessage("过滤异常: " + e.getMessage());
            result.setTimestamp(new Date());
            return result;
        }
    }

    public DeliveryResult deliverJobs(ConfigDTO config, boolean enableActualDelivery) {
        publishTaskUpdate(TaskStage.DELIVER, TaskStatus.STARTED, 0, "开始投递");
        try {
            log.info("开始执行猎聘岗位投递操作，实际投递: {}", enableActualDelivery);
            List<JobEntity> jobEntities = jobRepository.findByStatusAndPlatform(JobStatusEnum.PENDING.getCode(), RecruitmentPlatformEnum.LIEPIN.getPlatformCode());
            if (jobEntities == null || jobEntities.isEmpty()) {
                throw new IllegalArgumentException("未找到可投递的猎聘岗位记录");
            }

            List<JobDTO> filteredJobDTOS = jobEntities.stream().map(jobService::convertToDTO).collect(Collectors.toList());
            int deliveredCount = 0;

            if (enableActualDelivery) {
                RecruitmentService liepinService = serviceFactory.getService(RecruitmentPlatformEnum.LIEPIN);
                deliveredCount = liepinService.deliverJobs(filteredJobDTOS, config);
                liepinService.saveData(dataPath);
                log.info("实际投递完成，成功投递 {} 个岗位", deliveredCount);
            } else {
                deliveredCount = filteredJobDTOS.size();
                log.info("模拟投递完成，可投递岗位 {} 个", deliveredCount);
            }

            DeliveryResult result = new DeliveryResult();
            result.setTotalCount(filteredJobDTOS.size());
            result.setDeliveredCount(deliveredCount);
            result.setActualDelivery(enableActualDelivery);
            String message = String.format("%s完成，处理 %d 个岗位", enableActualDelivery ? "实际投递" : "模拟投递", deliveredCount);
            result.setMessage(message);
            result.setTimestamp(new Date());

            if (filteredJobDTOS.size() <= 10) {
                result.setJobDetails(buildJobDetails(filteredJobDTOS));
            }

            publishTaskUpdate(TaskStage.DELIVER, TaskStatus.SUCCESS, deliveredCount, message);
            log.info("猎聘岗位投递操作完成，处理 {} 个岗位", deliveredCount);
            return result;

        } catch (Exception e) {
            log.error("猎聘岗位投递操作执行失败", e);
            publishTaskUpdate(TaskStage.DELIVER, TaskStatus.FAILURE, 0, "投递异常: " + e.getMessage());

            DeliveryResult result = new DeliveryResult();
            result.setTotalCount(0);
            result.setDeliveredCount(0);
            result.setActualDelivery(enableActualDelivery);
            result.setMessage("投递异常: " + e.getMessage());
            result.setTimestamp(new Date());
            return result;
        }
    }

    private void publishTaskUpdate(TaskStage stage, TaskStatus status, Integer count, String message) {
        TaskUpdatePayload payload = TaskUpdatePayload.builder()
                .platform(RecruitmentPlatformEnum.LIEPIN)
                .stage(stage)
                .status(status)
                .count(count)
                .message(message)
                .build();
        eventPublisher.publishEvent(new TaskUpdateEvent(this, payload));
    }

    private List<String> buildJobDetails(List<JobDTO> jobDTOS) {
        return jobDTOS.stream()
                .map(job -> String.format("%s - %s | %s | %s", job.getCompanyName(), job.getJobName(), job.getSalary(), job.getJobArea()))
                .collect(Collectors.toList());
    }

    private void initializeDataFiles() throws IOException {
        String userHome = System.getProperty("user.home");
        dataPath = userHome + File.separator + "getjobs";
        File getJobsDir = new File(dataPath);
        if (!getJobsDir.exists()) {
            getJobsDir.mkdirs();
        }
        File dataDir = new File(dataPath, "data");
        if (!dataDir.exists()) {
            dataDir.mkdirs();
        }
        dataPath = dataDir.getAbsolutePath();
    }

    public static class LoginResult {
        private String taskId;
        private boolean success;
        private String message;
        private Date timestamp;
        public String getTaskId() { return taskId; }
        public void setTaskId(String taskId) { this.taskId = taskId; }
        public boolean isSuccess() { return success; }
        public void setSuccess(boolean success) { this.success = success; }
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
        public Date getTimestamp() { return timestamp; }
        public void setTimestamp(Date timestamp) { this.timestamp = timestamp; }
    }

    public static class CollectResult {
        private String taskId;
        private int jobCount;
        private List<JobDTO> jobs;
        private String message;
        private Date timestamp;
        public String getTaskId() { return taskId; }
        public void setTaskId(String taskId) { this.taskId = taskId; }
        public int getJobCount() { return jobCount; }
        public void setJobCount(int jobCount) { this.jobCount = jobCount; }
        public List<JobDTO> getJobs() { return jobs; }
        public void setJobs(List<JobDTO> jobs) { this.jobs = jobs; }
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
        public Date getTimestamp() { return timestamp; }
        public void setTimestamp(Date timestamp) { this.timestamp = timestamp; }
    }

    public static class FilterResult {
        private String taskId;
        private int originalCount;
        private int filteredCount;
        private List<JobDTO> jobs;
        private String message;
        private Date timestamp;
        public String getTaskId() { return taskId; }
        public void setTaskId(String taskId) { this.taskId = taskId; }
        public int getOriginalCount() { return originalCount; }
        public void setOriginalCount(int originalCount) { this.originalCount = originalCount; }
        public int getFilteredCount() { return filteredCount; }
        public void setFilteredCount(int filteredCount) { this.filteredCount = filteredCount; }
        public List<JobDTO> getJobs() { return jobs; }
        public void setJobs(List<JobDTO> jobs) { this.jobs = jobs; }
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
        public Date getTimestamp() { return timestamp; }
        public void setTimestamp(Date timestamp) { this.timestamp = timestamp; }
    }

    public static class DeliveryResult {
        private String taskId;
        private int totalCount;
        private int deliveredCount;
        private boolean actualDelivery;
        private String message;
        private Date timestamp;
        private List<String> jobDetails;
        public String getTaskId() { return taskId; }
        public void setTaskId(String taskId) { this.taskId = taskId; }
        public int getTotalCount() { return totalCount; }
        public void setTotalCount(int totalCount) { this.totalCount = totalCount; }
        public int getDeliveredCount() { return deliveredCount; }
        public void setDeliveredCount(int deliveredCount) { this.deliveredCount = deliveredCount; }
        public boolean isActualDelivery() { return actualDelivery; }
        public void setActualDelivery(boolean actualDelivery) { this.actualDelivery = actualDelivery; }
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
        public Date getTimestamp() { return timestamp; }
        public void setTimestamp(Date timestamp) { this.timestamp = timestamp; }
        public List<String> getJobDetails() { return jobDetails; }
        public void setJobDetails(List<String> jobDetails) { this.jobDetails = jobDetails; }
    }
}
