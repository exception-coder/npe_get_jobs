package getjobs.modules.sasl.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.List;

/**
 * 套餐方案请求 DTO。
 *
 * @param planId   套餐ID（唯一标识）
 * @param title    套餐标题
 * @param subtitle 套餐副标题
 * @param columns  套餐列标题数组
 * @param rows     套餐行数据列表
 * @param footnote 脚注
 */
public record PlanSectionRequest(
        @NotBlank(message = "套餐ID不能为空")
        @Size(max = 50, message = "套餐ID长度不能超过50个字符")
        String planId,

        @NotBlank(message = "套餐标题不能为空")
        @Size(max = 200, message = "套餐标题长度不能超过200个字符")
        String title,

        @Size(max = 300, message = "套餐副标题长度不能超过300个字符")
        String subtitle,

        List<String> columns,

        List<PlanRowRequest> rows,

        String footnote) {
}

