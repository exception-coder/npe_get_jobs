-- 添加AI匹配相关字段到job_info表
-- 执行时间: 2025-02-05
-- 说明: 为职位表添加AI匹配结果记录字段，用于存储AI岗位匹配检测的详细结果

-- 添加AI匹配是否通过字段
ALTER TABLE job_info ADD COLUMN ai_matched BOOLEAN;

-- 添加AI匹配分数/置信度字段
ALTER TABLE job_info ADD COLUMN ai_match_score VARCHAR(50);

-- 添加AI匹配详细原因字段
ALTER TABLE job_info ADD COLUMN ai_match_reason TEXT;

-- 添加注释说明
-- ai_matched: NULL表示未进行AI检测，true表示匹配通过，false表示匹配未通过
-- ai_match_score: 存储置信度信息，如 "high"、"low"、"N/A" 等
-- ai_match_reason: 存储AI匹配的详细原因说明

