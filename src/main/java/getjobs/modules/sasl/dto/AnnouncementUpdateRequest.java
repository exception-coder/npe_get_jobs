package getjobs.modules.sasl.dto;

/**
 * 公告更新请求 DTO。
 *
 * @param content   公告内容（可选）
 * @param enabled   是否启用（可选）
 * @param sortOrder 排序顺序（可选）
 */
public record AnnouncementUpdateRequest(
        String content,
        Boolean enabled,
        Integer sortOrder) {
}

