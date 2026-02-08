package getjobs.modules.integration.service.mediasaver.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 媒体保存服务统一响应DTO
 */
@NoArgsConstructor
@Data
public class MediaSaverResponse {
    
    /**
     * 状态
     */
    @JsonProperty("status")
    private String status;
    
    /**
     * 数据
     */
    @JsonProperty("data")
    private String data;
    
    /**
     * 判断是否成功
     */
    public boolean isSuccess() {
        return "success".equalsIgnoreCase(status) || "ok".equalsIgnoreCase(status);
    }
}










