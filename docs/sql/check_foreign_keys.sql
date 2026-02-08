-- ============================================
-- 检查外键约束脚本（SQLite）
-- ============================================
-- 用途：检查 sys_user_role 和 sys_role_permission 表是否存在外键约束
-- ============================================

-- 方法 1：检查表定义中是否包含 REFERENCES（外键约束）
SELECT 
    m.name AS table_name,
    m.sql AS table_definition
FROM 
    sqlite_master m
WHERE 
    m.type = 'table' 
    AND (m.name = 'sys_user_role' OR m.name = 'sys_role_permission')
ORDER BY 
    m.name;

-- 方法 2：检查表结构（PRAGMA table_info）
-- 注意：PRAGMA table_info 不会显示外键约束信息
-- 外键约束只在 CREATE TABLE 语句中可见

-- 方法 3：检查外键约束（如果 foreign_keys=ON）
-- 注意：这需要 SQLite 版本 3.6.19+ 并且启用了 foreign_keys
PRAGMA foreign_key_check(sys_user_role);
PRAGMA foreign_key_check(sys_role_permission);

-- ============================================
-- 判断标准
-- ============================================
-- 如果 table_definition 中包含 "REFERENCES" 关键字，说明存在外键约束
-- 如果 table_definition 中不包含 "REFERENCES"，说明没有外键约束
-- ============================================

