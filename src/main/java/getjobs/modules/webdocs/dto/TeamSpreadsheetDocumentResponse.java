package getjobs.modules.webdocs.dto;

import getjobs.modules.webdocs.domain.TeamSpreadsheetDocument;

import java.time.LocalDateTime;

/**
 * 团队在线表格文档响应。
 *
 * @param id 文档ID
 * @param title 文档标题
 * @param description 文档描述
 * @param content 表格内容（JSON）
 * @param remark 备注
 * @param createdAt 创建时间
 * @param updatedAt 更新时间
 */
public record TeamSpreadsheetDocumentResponse(
    Long id,
    String title,
    String description,
    String content,
    String remark,
    LocalDateTime createdAt,
    LocalDateTime updatedAt
) {

    public static TeamSpreadsheetDocumentResponse from(TeamSpreadsheetDocument document) {
        return new TeamSpreadsheetDocumentResponse(
            document.getId(),
            document.getTitle(),
            document.getDescription(),
            document.getContent(),
            document.getRemark(),
            document.getCreatedAt(),
            document.getUpdatedAt()
        );
    }
}
