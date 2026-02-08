package getjobs.modules.sasl.dto;

import getjobs.modules.sasl.domain.PlanSection;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 套餐方案响应 DTO。
 *
 * @param id        套餐方案ID
 * @param planId    套餐ID（唯一标识）
 * @param title     套餐标题
 * @param subtitle  套餐副标题
 * @param columns   套餐列标题数组
 * @param rows      套餐行数据列表
 * @param footnote  脚注
 * @param createdAt 创建时间
 * @param updatedAt 更新时间
 */
public record PlanSectionResponse(
        Long id,
        String planId,
        String title,
        String subtitle,
        List<String> columns,
        List<PlanRowResponse> rows,
        String footnote,
        LocalDateTime createdAt,
        LocalDateTime updatedAt) {

    private static final ObjectMapper objectMapper = new ObjectMapper();

    public static PlanSectionResponse from(PlanSection planSection) {
        if (planSection == null) {
            return null;
        }

        // 解析 columns JSON 字符串
        List<String> columns = null;
        try {
            if (planSection.getColumns() != null && !planSection.getColumns().trim().isEmpty()) {
                columns = objectMapper.readValue(planSection.getColumns(),
                        new TypeReference<List<String>>() {});
            }
        } catch (Exception e) {
            // 解析失败，设为空列表
            columns = List.of();
        }

        // 转换行数据
        List<PlanRowResponse> rows = planSection.getRows() != null
                ? planSection.getRows().stream()
                        .sorted((r1, r2) -> {
                            Integer sort1 = r1.getSortOrder() != null ? r1.getSortOrder() : 0;
                            Integer sort2 = r2.getSortOrder() != null ? r2.getSortOrder() : 0;
                            return sort1.compareTo(sort2);
                        })
                        .map(PlanRowResponse::from)
                        .toList()
                : List.of();

        return new PlanSectionResponse(
                planSection.getId(),
                planSection.getPlanId(),
                planSection.getTitle(),
                planSection.getSubtitle(),
                columns,
                rows,
                planSection.getFootnote(),
                planSection.getCreatedAt(),
                planSection.getUpdatedAt());
    }
}

