package getjobs.modules.task.service;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.modules.task.dto.TaskUpdatePayload;
import getjobs.modules.task.enums.TaskStage;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class TaskStatusService {

    private final Map<String, TaskUpdatePayload> taskStatusMap = new ConcurrentHashMap<>();

    public void updateTaskStatus(TaskUpdatePayload payload) {
        String key = getKey(payload.getPlatform(), payload.getStage());
        taskStatusMap.put(key, payload);
    }

    public TaskUpdatePayload getTaskStatus(RecruitmentPlatformEnum platform, TaskStage stage) {
        String key = getKey(platform, stage);
        return taskStatusMap.get(key);
    }

    public Map<String, TaskUpdatePayload> getAllTaskStatuses() {
        return taskStatusMap;
    }

    private String getKey(RecruitmentPlatformEnum platform, TaskStage stage) {
        return platform.name() + "_" + stage.getName();
    }
}
