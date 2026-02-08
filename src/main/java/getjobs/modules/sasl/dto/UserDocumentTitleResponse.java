package getjobs.modules.sasl.dto;

import java.util.List;

/**
 * 用户文档标题关系响应 DTO。
 *
 * @param userId         用户ID
 * @param documentTitles 文档标题对象列表（包含标题名和是否绑定标识）
 */
public record UserDocumentTitleResponse(
        Long userId,
        List<DocumentTitleItem> documentTitles) {
}
