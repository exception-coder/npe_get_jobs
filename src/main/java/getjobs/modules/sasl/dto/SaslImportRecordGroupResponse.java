package getjobs.modules.sasl.dto;

import java.util.List;

/**
 * SASL 导入记录分组响应 DTO。
 * 按文档标题分组返回导入记录。
 *
 * @param documentTitle 文档标题
 * @param importRecords 该文档标题对应的导入记录列表
 */
public record SaslImportRecordGroupResponse(
        String documentTitle,
        List<SaslImportRecordResponse> importRecords) {
}
