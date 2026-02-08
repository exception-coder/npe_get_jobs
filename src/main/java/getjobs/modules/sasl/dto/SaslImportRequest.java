package getjobs.modules.sasl.dto;

/**
 * SASL Excel 导入请求 DTO。
 *
 * @param documentTitle 文档标题
 * @param documentDescription 文档描述
 * @param remark 备注
 */
public record SaslImportRequest(
    String documentTitle,
    String documentDescription,
    String remark
) {
}

