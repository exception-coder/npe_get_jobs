-- 异步任务执行记录表
-- 用于记录异步任务的执行状况，包括任务状态、执行时间、异常信息等

CREATE TABLE IF NOT EXISTS `async_task_execution_record` (
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '主键ID',
    `task_id` VARCHAR(64) NOT NULL COMMENT '任务ID（唯一标识）',
    `task_name` VARCHAR(200) NOT NULL COMMENT '任务名称',
    `description` VARCHAR(1000) DEFAULT NULL COMMENT '任务描述',
    `status` VARCHAR(20) NOT NULL COMMENT '任务状态（SUBMITTED、RUNNING、COMPLETED、FAILED、CANCELLED）',
    `submit_time` TIMESTAMP(6) NOT NULL COMMENT '提交时间',
    `start_time` TIMESTAMP(6) DEFAULT NULL COMMENT '开始执行时间',
    `finish_time` TIMESTAMP(6) DEFAULT NULL COMMENT '完成时间',
    `duration` BIGINT DEFAULT NULL COMMENT '执行耗时（毫秒）',
    `exception_message` VARCHAR(2000) DEFAULT NULL COMMENT '异常信息',
    `exception_stack_trace` TEXT DEFAULT NULL COMMENT '异常堆栈',
    `thread_name` VARCHAR(100) DEFAULT NULL COMMENT '执行线程名称',
    `thread_id` BIGINT DEFAULT NULL COMMENT '执行线程ID',
    `remark` VARCHAR(1000) DEFAULT NULL COMMENT '备注信息',
    `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
    `updated_at` TIMESTAMP(6) DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_task_id` (`task_id`),
    KEY `idx_task_name` (`task_name`),
    KEY `idx_status` (`status`),
    KEY `idx_submit_time` (`submit_time`),
    KEY `idx_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='异步任务执行记录表';

-- 索引说明：
-- 1. uk_task_id: 任务ID唯一索引，用于快速查询单个任务
-- 2. idx_task_name: 任务名称索引，用于按任务名称查询
-- 3. idx_status: 状态索引，用于按状态筛选任务
-- 4. idx_submit_time: 提交时间索引，用于按时间范围查询
-- 5. idx_created_at: 创建时间索引，用于数据清理和时间范围查询

-- 使用示例：
-- 1. 查询正在运行的任务
-- SELECT * FROM async_task_execution_record WHERE status = 'RUNNING' ORDER BY start_time DESC;

-- 2. 查询指定时间范围内的任务
-- SELECT * FROM async_task_execution_record 
-- WHERE submit_time BETWEEN '2025-01-01 00:00:00' AND '2025-01-31 23:59:59'
-- ORDER BY submit_time DESC;

-- 3. 统计任务执行情况
-- SELECT status, COUNT(*) as count FROM async_task_execution_record GROUP BY status;

-- 4. 查询失败的任务
-- SELECT * FROM async_task_execution_record WHERE status = 'FAILED' ORDER BY finish_time DESC;

-- 5. 查询平均执行时间
-- SELECT task_name, AVG(duration) as avg_duration 
-- FROM async_task_execution_record 
-- WHERE status = 'COMPLETED' AND duration IS NOT NULL
-- GROUP BY task_name;

-- 6. 清理历史数据（清理30天前的已完成任务）
-- DELETE FROM async_task_execution_record 
-- WHERE status IN ('COMPLETED', 'CANCELLED') 
-- AND created_at < DATE_SUB(NOW(), INTERVAL 30 DAY);

