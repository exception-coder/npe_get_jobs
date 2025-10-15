-- 用户求职信息表
CREATE TABLE IF NOT EXISTS user_profile (
    id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
    role VARCHAR(100) NOT NULL COMMENT '职位角色',
    years INT NOT NULL COMMENT '工作年限',
    domains TEXT COMMENT '领域列表（JSON格式）',
    core_stack TEXT COMMENT '核心技术栈列表（JSON格式）',
    scale TEXT COMMENT '规模指标（JSON格式，包含qps_peak、sla等）',
    achievements TEXT COMMENT '成就列表（JSON格式）',
    strengths TEXT COMMENT '优势列表（JSON格式）',
    improvements TEXT COMMENT '改进项列表（JSON格式）',
    availability VARCHAR(50) COMMENT '到岗时间',
    links TEXT COMMENT '链接信息（JSON格式，包含github、portfolio等）',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at DATETIME COMMENT '更新时间',
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE COMMENT '是否删除',
    remark VARCHAR(500) COMMENT '备注',
    INDEX idx_role (role),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户求职信息表';

