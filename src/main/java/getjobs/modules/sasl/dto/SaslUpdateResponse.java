package getjobs.modules.sasl.dto;

/**
 * SASL 记录更新响应 DTO。
 *
 * @param updatedRecord 更新后的记录
 * @param nextRecord    下一条记录（ID 比当前记录大，文档标题相同，最小的 ID），如果不存在则为 null
 */
public record SaslUpdateResponse(
        SaslRecordResponse updatedRecord,
        SaslRecordResponse nextRecord) {
}
