package getjobs.modules.task.enums;

import lombok.Getter;

@Getter
public enum TaskStage {
    LOGIN("LOGIN"),
    COLLECT("COLLECT"),
    FILTER("FILTER"),
    DELIVER("DELIVER");

    private final String name;

    TaskStage(String name) {
        this.name = name;
    }
}
