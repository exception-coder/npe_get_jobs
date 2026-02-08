package getjobs.modules.sasl.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.util.List;

/**
 * 用户文档标题关系请求 DTO。
 *
 * @param userId         用户ID
 * @param documentTitles 文档标题集合
 */
public record UserDocumentTitleRequest(
        @NotNull(message = "用户ID不能为空") Long userId,
        @NotEmpty(message = "文档标题集合不能为空") List<String> documentTitles) {
}
