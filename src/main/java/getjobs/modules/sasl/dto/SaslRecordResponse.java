package getjobs.modules.sasl.dto;

import getjobs.modules.sasl.domain.SaslRecord;
import getjobs.modules.sasl.enums.CallStatus;

import java.time.LocalDateTime;

/**
 * SASL 记录响应 DTO。
 *
 * @param id                   记录ID
 * @param mrt                  移动电话号码
 * @param oldContract          旧合约
 * @param sales                销售
 * @param category             类别
 * @param lastTurnNetworkMonth 最后转网月份
 * @param documentTitle        文档标题
 * @param documentDescription  文档描述
 * @param excelFileName        Excel 文件名
 * @param callStatus           致电状态
 * @param remark               备注
 * @param lastCallTime         最近致电时间
 * @param nextCallTime         下次致电时间
 * @param createdAt            创建时间
 * @param updatedAt            更新时间
 */
public record SaslRecordResponse(
        Long id,
        String mrt,
        String oldContract,
        String sales,
        String category,
        String lastTurnNetworkMonth,
        String documentTitle,
        String documentDescription,
        String excelFileName,
        CallStatus callStatus,
        String remark,
        LocalDateTime lastCallTime,
        LocalDateTime nextCallTime,
        LocalDateTime createdAt,
        LocalDateTime updatedAt) {

    public static SaslRecordResponse from(SaslRecord record) {
        if (record == null) {
            return null;
        }

        LocalDateTime lastCallTime = null;
        try {
            lastCallTime = record.getLastCallTime();
        } catch (NoSuchMethodError e) {
            // 兼容旧版本：如果 getLastCallTime 方法不存在，返回 null
            lastCallTime = null;
        }

        LocalDateTime nextCallTime = null;
        try {
            nextCallTime = record.getNextCallTime();
        } catch (NoSuchMethodError e) {
            // 兼容旧版本：如果 getNextCallTime 方法不存在，返回 null
            nextCallTime = null;
        }

        return new SaslRecordResponse(
                record.getId(),
                record.getMrt(),
                record.getOldContract(),
                record.getSales(),
                record.getCategory(),
                record.getLastTurnNetworkMonth(),
                record.getDocumentTitle(),
                record.getDocumentDescription(),
                record.getExcelFileName(),
                record.getCallStatus(),
                record.getRemark(),
                lastCallTime,
                nextCallTime,
                record.getCreatedAt(),
                record.getUpdatedAt());
    }
}
