package getjobs.modules.sasl.dto;

import java.time.LocalDateTime;

/**
 * 用户文档标题绑定关系响应 DTO。
 * 用于返回所有绑定关系的详细信息。
 *
 * @param id       关系ID
 * @param fileName 文档标题
 * @param userId   用户ID
 * @param userName 用户账号/显示名
 * @param bindTime 绑定时间
 */
public record UserDocumentTitleBindingResponse(
        Long id,
        String fileName,
        Long userId,
        String userName,
        LocalDateTime bindTime) {
}
