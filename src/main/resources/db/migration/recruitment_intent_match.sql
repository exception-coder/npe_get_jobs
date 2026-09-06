-- SQLite baseline for additive match evidence storage; Hibernate ddl-auto=update also creates this entity.
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
    job_snapshot TEXT NOT NULL,
    result_json TEXT NOT NULL
);
