-- 功能：岗位意向匹配证据；变更：建立包含置信度与判定规则版本的证据表基线；目的：复用未变化岗位的明确不符合结论。
CREATE TABLE IF NOT EXISTS recruitment_intent_match (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
    is_deleted BOOLEAN NOT NULL DEFAULT 0,
    remark VARCHAR(500),
    intent_version BIGINT NOT NULL,
    platform VARCHAR(255) NOT NULL,
    platform_job_id VARCHAR(255) NOT NULL,
    jd_version VARCHAR(255) NOT NULL,
    recommendation VARCHAR(255) NOT NULL,
    confidence VARCHAR(20) NOT NULL DEFAULT 'low',
    decision_context VARCHAR(64) NOT NULL DEFAULT 'legacy',
    job_snapshot TEXT NOT NULL,
    result_json TEXT NOT NULL
);

-- 功能：自动投递判定缓存；变更：按意向、平台、岗位和规则上下文建立复合索引；目的：批量复用明确不符合结论时避免全表扫描。
CREATE INDEX IF NOT EXISTS idx_rim_cache_lookup
    ON recruitment_intent_match (intent_version, platform, platform_job_id, decision_context);
