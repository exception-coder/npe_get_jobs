package getjobs.modules.sasl.dto;

/**
 * 文档标题项 DTO。
 * 包含文档标题和选中状态。
 *
 * @param title    文档标题
 * @param selected 是否选中（用户是否绑定了该文档标题）
 */
public record DocumentTitleItem(
        String title,
        Boolean selected) {
}
