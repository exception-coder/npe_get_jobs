package getjobs.repository.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;
import java.util.Map;

/**
 * 配置实体（支持多平台，平台类型由 platformType 字段指定）
 */
@Data
@Entity
@Table(name = "config")
@EqualsAndHashCode(callSuper = true)
public class ConfigEntity extends BaseEntity {

    // 注意：sayHi 已迁移到 UserProfile

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "keywords", columnDefinition = "TEXT")
    private List<String> keywords;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "city_code", columnDefinition = "TEXT")
    private List<String> cityCode;

    @Convert(converter = JsonMapStringConverter.class)
    @Column(name = "custom_city_code", columnDefinition = "TEXT")
    private Map<String, String> customCityCode;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "industry", columnDefinition = "TEXT")
    private List<String> industry;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "experience", columnDefinition = "TEXT")
    private List<String> experience;

    @Column(name = "job_type", length = 50)
    private String jobType;

    @Column(name = "salary", length = 50)
    private String salary;

    @Column(name = "publish_time", length = 50)
    private String publishTime;

    @Column(name = "expected_position", length = 200)
    private String expectedPosition;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "degree", columnDefinition = "TEXT")
    private List<String> degree;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "scale", columnDefinition = "TEXT")
    private List<String> scale;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "stage", columnDefinition = "TEXT")
    private List<String> stage;

    // 注意：enableAIJobMatchDetection、enableAIGreeting、sendImgResume、resumeImagePath
    // 已迁移到 UserProfile

    @Column(name = "filter_dead_hr")
    private Boolean filterDeadHR;

    @Column(name = "resume_content", columnDefinition = "TEXT")
    private String resumeContent;

    @Convert(converter = JsonListIntegerConverter.class)
    @Column(name = "expected_salary", columnDefinition = "TEXT")
    private List<Integer> expectedSalary;

    @Column(name = "wait_time", length = 50)
    private String waitTime;

    @Column(name = "platform_type", length = 20)
    private String platformType;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "dead_status", columnDefinition = "TEXT")
    private List<String> deadStatus;

    @Column(name = "key_filter")
    private Boolean keyFilter;

    // 注意：recommendJobs 已迁移到 UserProfile

    @Column(name = "check_state_owned")
    private Boolean checkStateOwned;

    @Column(name = "cookie_data", columnDefinition = "TEXT")
    private String cookieData;

    @Convert(converter = JsonListStringConverter.class)
    @Column(name = "company_nature", columnDefinition = "TEXT")
    private List<String> companyNature;

}
