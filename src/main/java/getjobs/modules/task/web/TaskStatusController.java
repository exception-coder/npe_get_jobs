package getjobs.modules.task.web;

import getjobs.modules.task.dto.TaskUpdatePayload;
import getjobs.modules.task.service.TaskStatusService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskStatusController {

    private final TaskStatusService taskStatusService;

    @GetMapping("/status")
    public Map<String, TaskUpdatePayload> getAllTaskStatuses() {
        return taskStatusService.getAllTaskStatuses();
    }
}
