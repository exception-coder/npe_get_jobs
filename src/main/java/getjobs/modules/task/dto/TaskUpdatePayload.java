package getjobs.modules.task.dto;

import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.modules.task.enums.TaskStage;
import getjobs.modules.task.enums.TaskStatus;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TaskUpdatePayload {
    private RecruitmentPlatformEnum platform;
    private TaskStage stage;
    private TaskStatus status;
    private Integer count;
    private String message;
}
