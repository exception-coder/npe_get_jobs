package getjobs.modules.task.dto;

import getjobs.common.enums.RecruitmentPlatformEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 登录状态DTO
 * 用于存储各平台的登录状态检查结果
 *
 * @author getjobs
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginStatusDTO {
    
    /**
     * 平台枚举
     */
    private RecruitmentPlatformEnum platform;
    
    /**
     * 是否已登录
     */
    private Boolean isLoggedIn;
    
    /**
     * 检查时间
     */
    private LocalDateTime checkTime;
    
    /**
     * 备注信息（如检查失败原因等）
     */
    private String remark;
    
    /**
     * 最后登录时间（如果有的话）
     */
    private LocalDateTime lastLoginTime;
}

