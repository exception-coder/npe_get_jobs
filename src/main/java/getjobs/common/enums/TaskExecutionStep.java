package getjobs.common.enums;

import lombok.Getter;

/**
 * 任务执行步骤枚举
 * 用于标识一键投递任务的各个执行阶段
 * 
 * @author getjobs
 */
@Getter
public enum TaskExecutionStep {

    /**
     * 初始化
     */
    INIT("初始化", 0),

    /**
     * 登录检查
     */
    LOGIN_CHECK("登录检查", 1),

    /**
     * 采集岗位
     */
    COLLECT_JOBS("采集岗位", 2),

    /**
     * 采集推荐岗位
     */
    COLLECT_RECOMMEND_JOBS("采集推荐岗位", 3),

    /**
     * 从数据库加载岗位
     */
    LOAD_JOBS_FROM_DB("从数据库加载岗位", 4),

    /**
     * 过滤岗位
     */
    FILTER_JOBS("过滤岗位", 5),

    /**
     * 投递岗位
     */
    DELIVER_JOBS("投递岗位", 6),

    /**
     * 完成
     */
    COMPLETED("完成", 7),

    /**
     * 失败
     */
    FAILED("失败", -1),

    /**
     * 已终止
     */
    TERMINATED("已终止", -2);

    /**
     * 步骤描述
     */
    private final String description;

    /**
     * 步骤顺序（用于排序和进度计算）
     */
    private final int order;

    TaskExecutionStep(String description, int order) {
        this.description = description;
        this.order = order;
    }

    /**
     * 判断是否为终止状态
     */
    public boolean isTerminalState() {
        return this == COMPLETED || this == FAILED || this == TERMINATED;
    }

    /**
     * 判断是否为成功完成
     */
    public boolean isSuccess() {
        return this == COMPLETED;
    }

    /**
     * 判断是否为失败状态
     */
    public boolean isFailed() {
        return this == FAILED || this == TERMINATED;
    }
}
