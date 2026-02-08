package getjobs.modules.sasl.dto;

import getjobs.modules.sasl.domain.Announcement;

import java.time.LocalDateTime;

/**
 * 公告响应 DTO。
 *
 * @param id        公告ID
 * @param content   公告内容
 * @param enabled   是否启用
 * @param sortOrder 排序顺序
 * @param createdAt 创建时间
 * @param updatedAt 更新时间
 */
public record AnnouncementResponse(
        Long id,
        String content,
        Boolean enabled,
        Integer sortOrder,
        LocalDateTime createdAt,
        LocalDateTime updatedAt) {

    public static AnnouncementResponse from(Announcement announcement) {
        if (announcement == null) {
            return null;
        }

        return new AnnouncementResponse(
                announcement.getId(),
                announcement.getContent(),
                announcement.getEnabled(),
                announcement.getSortOrder(),
                announcement.getCreatedAt(),
                announcement.getUpdatedAt());
    }
}

