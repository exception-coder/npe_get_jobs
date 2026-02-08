package getjobs.modules.sasl.dto;

import getjobs.modules.sasl.enums.CallStatus;

import java.time.LocalDateTime;

/**
 * SASL 记录更新请求 DTO。
 *
 * @param callStatus      致电状态
 * @param remark          备注
 * @param nextCallTime    下次致电时间
 * @param documentTitle   文档标题（查询参数，用于查询下一条记录）
 * @param queryCallStatus 查询致电状态（查询参数，用于过滤下一条记录）
 */
public record SaslUpdateRequest(
        CallStatus callStatus,
        String remark,
        LocalDateTime nextCallTime,
        String documentTitle,
        CallStatus queryCallStatus) {
}
