package getjobs.modules.sasl.dto;

import getjobs.modules.sasl.domain.SaslImportRecord;

import java.time.LocalDateTime;

/**
 * SASL 导入记录响应 DTO。
 *
 * @param id                  记录ID
 * @param excelFileName       Excel 原名（上传的文件名）
 * @param documentTitle       文档标题
 * @param documentDescription 文档描述
 * @param documentRemark      文档备注
 * @param createdAt           创建时间
 * @param updatedAt           更新时间
 */
public record SaslImportRecordResponse(
        Long id,
        String excelFileName,
        String documentTitle,
        String documentDescription,
        String documentRemark,
        LocalDateTime createdAt,
        LocalDateTime updatedAt) {

    public static SaslImportRecordResponse from(SaslImportRecord record) {
        if (record == null) {
            return null;
        }

        return new SaslImportRecordResponse(
                record.getId(),
                record.getExcelFileName(),
                record.getDocumentTitle(),
                record.getDocumentDescription(),
                record.getDocumentRemark(),
                record.getCreatedAt(),
                record.getUpdatedAt());
    }
}
