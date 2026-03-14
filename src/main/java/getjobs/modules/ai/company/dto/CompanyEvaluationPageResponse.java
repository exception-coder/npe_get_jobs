package getjobs.modules.ai.company.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * 公司评估分页响应
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CompanyEvaluationPageResponse {

    @JsonProperty("content")
    private List<CompanyEvaluationListItem> content;
    @JsonProperty("total_elements")
    private long totalElements;
    @JsonProperty("total_pages")
    private int totalPages;
    @JsonProperty("number")
    private int number;
    @JsonProperty("size")
    private int size;
}
