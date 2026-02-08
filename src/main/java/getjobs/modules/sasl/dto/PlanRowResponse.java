package getjobs.modules.sasl.dto;

import getjobs.modules.sasl.domain.PlanRow;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;

/**
 * 套餐行数据响应 DTO。
 *
 * @param id    行数据ID
 * @param label 行标签
 * @param values 行的值数组
 * @param sortOrder 排序顺序
 */
public record PlanRowResponse(
        Long id,
        String label,
        List<String> values,
        Integer sortOrder) {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    public static PlanRowResponse from(PlanRow planRow) {
        if (planRow == null) {
            return null;
        }

        // 解析 values JSON 字符串
        List<String> values = null;
        try {
            if (planRow.getValues() != null && !planRow.getValues().trim().isEmpty()) {
                values = objectMapper.readValue(planRow.getValues(),
                        new TypeReference<List<String>>() {});
            }
        } catch (Exception e) {
            // 解析失败，设为空列表
            values = List.of();
        }

        return new PlanRowResponse(
                planRow.getId(),
                planRow.getLabel(),
                values,
                planRow.getSortOrder());
    }
}

