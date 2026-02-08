-- ============================================
-- 删除外键约束脚本（SQLite）
-- ============================================
-- 说明：Hibernate update 模式不会自动删除已存在的外键约束
-- 如果表已经存在且有外键约束，需要手动执行此脚本删除
-- ============================================

-- 1. 检查是否存在外键约束
-- SQLite 中，外键约束信息存储在 sqlite_master 表中
-- 执行以下查询查看所有外键约束：

SELECT 
    m.name AS table_name,
    sql 
FROM 
    sqlite_master m
WHERE 
    m.type = 'table' 
    AND m.sql LIKE '%REFERENCES%'
    AND (m.name = 'sys_user_role' OR m.name = 'sys_role_permission')
ORDER BY 
    m.name;

-- ============================================
-- 2. 删除外键约束的方法（SQLite）
-- ============================================
-- SQLite 不支持直接删除外键约束（ALTER TABLE DROP CONSTRAINT）
-- 需要重建表来移除外键约束
-- ============================================

-- 注意：执行前请先备份数据库！

-- 2.1 备份数据
-- 使用 SQLite 命令行工具：
-- sqlite3 ~/getjobs/npe_get_jobs.db ".backup backup.db"

-- 2.2 对于 sys_user_role 表
BEGIN TRANSACTION;

-- 创建临时表（无外键约束）
CREATE TABLE sys_user_role_new (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    UNIQUE(user_id, role_id)
);

-- 复制数据
INSERT INTO sys_user_role_new 
SELECT * FROM sys_user_role;

-- 删除旧表
DROP TABLE sys_user_role;

-- 重命名新表
ALTER TABLE sys_user_role_new RENAME TO sys_user_role;

COMMIT;

-- 2.3 对于 sys_role_permission 表
BEGIN TRANSACTION;

-- 创建临时表（无外键约束）
CREATE TABLE sys_role_permission_new (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    role_id INTEGER NOT NULL,
    permission_id INTEGER NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    UNIQUE(role_id, permission_id)
);

-- 复制数据
INSERT INTO sys_role_permission_new 
SELECT * FROM sys_role_permission;

-- 删除旧表
DROP TABLE sys_role_permission;

-- 重命名新表
ALTER TABLE sys_role_permission_new RENAME TO sys_role_permission;

COMMIT;

-- ============================================
-- 3. 验证外键约束已删除
-- ============================================
-- 执行以下查询，应该返回空结果（没有外键约束）

SELECT 
    m.name AS table_name,
    sql 
FROM 
    sqlite_master m
WHERE 
    m.type = 'table' 
    AND m.sql LIKE '%REFERENCES%'
    AND (m.name = 'sys_user_role' OR m.name = 'sys_role_permission');

-- ============================================
-- 4. 注意事项
-- ============================================
-- - SQLite 的 foreign_keys=ON 只是启用外键检查，不是创建外键约束
-- - 如果表是通过 Hibernate 创建的，通常不会有外键约束
-- - 只有在手动创建表或使用其他工具创建表时，才可能有外键约束
-- - 执行重建表操作前，请确保已备份数据库
-- ============================================

