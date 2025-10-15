package getjobs.modules.task.event;

import getjobs.modules.task.dto.TaskUpdatePayload;
import org.springframework.context.ApplicationEvent;

public class TaskUpdateEvent extends ApplicationEvent {

    private final TaskUpdatePayload payload;

    public TaskUpdateEvent(Object source, TaskUpdatePayload payload) {
        super(source);
        this.payload = payload;
    }

    public TaskUpdatePayload getPayload() {
        return payload;
    }
}
