package getjobs.modules.webdocs.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * 团队在线表格文档保存/更新请求。
 *
 * @param title 文档标题
 * @param description 文档描述
 * @param content 表格内容（JSON）
 * @param remark 备注
 */
public record TeamSpreadsheetDocumentRequest(
    @NotBlank(message = "标题不能为空")
    @Size(max = 200, message = "标题长度不能超过200")
    String title,

    @Size(max = 2000, message = "描述长度不能超过2000")
    String description,

    @NotBlank(message = "表格内容不能为空")
    String content,

    @Size(max = 500, message = "备注长度不能超过500")
    String remark
) {
}
