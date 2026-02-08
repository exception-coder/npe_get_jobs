package getjobs.modules.sasl.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.List;

/**
 * 套餐行数据请求 DTO。
 *
 * @param label     行标签
 * @param values    行的值数组
 * @param sortOrder 排序顺序
 */
public record PlanRowRequest(
        @NotBlank(message = "行标签不能为空")
        @Size(max = 200, message = "行标签长度不能超过200个字符")
        String label,

        List<String> values,

        Integer sortOrder) {
}

