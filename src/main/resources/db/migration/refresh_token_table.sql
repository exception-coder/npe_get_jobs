-- Refresh Token 表结构
-- 用于管理 Refresh Token 的生命周期，支持 Token 轮换、主动撤销等功能

CREATE TABLE IF NOT EXISTS sys_refresh_token (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(64) NOT NULL COMMENT '用户名',
    token_hash VARCHAR(64) NOT NULL UNIQUE COMMENT 'Refresh Token 的哈希值（SHA-256）',
    expires_at DATETIME NOT NULL COMMENT '过期时间',
    revoked BOOLEAN NOT NULL DEFAULT FALSE COMMENT '是否已撤销',
    revoked_at DATETIME COMMENT '撤销时间',
    client_ip VARCHAR(64) COMMENT '客户端 IP 地址',
    user_agent VARCHAR(512) COMMENT 'User-Agent',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at DATETIME COMMENT '更新时间',
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE COMMENT '是否删除（逻辑删除）',
    remark VARCHAR(500) COMMENT '备注',
    INDEX idx_token_hash (token_hash),
    INDEX idx_username (username),
    INDEX idx_expires_at (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Refresh Token 表';

