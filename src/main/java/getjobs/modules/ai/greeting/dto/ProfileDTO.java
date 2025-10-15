package getjobs.modules.ai.greeting.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class ProfileDTO {
    /**
     * 角色/职位
     * 示例: "Java 后端开发/高级"
     */
    private String role;
    /**
     * 工作年限
     * 示例: 8
     */
    private int years;
    /**
     * 从事的领域
     * 示例: ["电商", "支付"]
     */
    private List<String> domains;
    /**
     * 核心技术栈
     * 示例: ["Spring Boot","Spring Cloud Gateway","Redis","MySQL","MQ(Artemis/Kafka)","Docker"]
     */
    @JsonProperty("core_stack")
    private List<String> coreStack;
    /**
     * 项目规模
     * qps_peak: 峰值QPS
     * sla: 服务等级协议
     * 示例: {"qps_peak": "3k+", "sla": "99.99%"}
     */
    private Map<String, String> scale; // qps_peak/sla...
    /**
     * 主要成就
     * 示例: ["订单超时处理从5分钟降至30秒，稳定性至99.99%", "重构网关限流与灰度发布，峰值3k QPS 稳定"]
     */
    private List<String> achievements;
    /**
     * 个人强项/优势
     * 示例: ["性能调优","微服务治理","疑难排障"]
     */
    private List<String> strengths;
    /**
     * 待提升方面
     * 示例: ["前端薄弱，已在补 Vue3"]
     */
    private List<String> improvements;
    /**
     * 到岗时间及地点期望
     * 示例: "两周到岗，广州/可远程"
     */
    private String availability;
    /**
     * 个人链接
     * github: github地址
     * portfolio: 个人作品集
     * 示例: {"github": "", "portfolio": ""}
     */
    private Map<String, String> links;
}
