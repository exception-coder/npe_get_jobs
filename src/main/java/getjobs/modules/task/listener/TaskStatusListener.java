package getjobs.modules.task.listener;

import getjobs.modules.task.event.TaskUpdateEvent;
import getjobs.modules.task.service.TaskStatusService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TaskStatusListener {

    private final TaskStatusService taskStatusService;

    @EventListener
    public void handleTaskUpdateEvent(TaskUpdateEvent event) {
        taskStatusService.updateTaskStatus(event.getPayload());
    }
}
