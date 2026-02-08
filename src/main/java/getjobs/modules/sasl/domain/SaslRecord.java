package getjobs.modules.sasl.domain;

import getjobs.modules.sasl.enums.CallStatus;
import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

/**
 * SASL 记录实体。
 * 用于存储从 Excel 导入的数据记录。
 */
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "sasl_record", uniqueConstraints = {
        @UniqueConstraint(name = "uk_sasl_record_mrt_document_title", columnNames = { "mrt", "document_title" })
})
public class SaslRecord extends BaseEntity {

    /**
     * MRT（移动电话号码）
     */
    @Column(name = "mrt", length = 50)
    private String mrt;

    /**
     * 旧合约
     */
    @Column(name = "old_contract", length = 50)
    private String oldContract;

    /**
     * 销售
     */
    @Column(name = "sales", length = 100)
    private String sales;

    /**
     * 类别
     */
    @Column(name = "category", length = 200)
    private String category;

    /**
     * 最后转网月份
     */
    @Column(name = "last_turn_network_month", length = 20)
    private String lastTurnNetworkMonth;

    /**
     * 文档标题（唯一，仅允许数字、字母、中文字符）
     */
    @NotBlank(message = "文档标题不能为空")
    @Size(max = 80, message = "文档标题长度不能超过80个字符")
    @Pattern(regexp = "^[a-zA-Z0-9\\u4e00-\\u9fa5]+$", message = "文档标题只能包含数字、字母和中文字符")
    @Column(name = "document_title", length = 80, nullable = false)
    private String documentTitle;

    /**
     * 文档描述
     */
    @Column(name = "document_description", columnDefinition = "TEXT")
    private String documentDescription;

    /**
     * Excel 文件名
     */
    @Column(name = "excel_file_name", length = 255)
    private String excelFileName;

    /**
     * 致电状态
     */
    @Enumerated(EnumType.STRING)
    @Column(name = "call_status", length = 20)
    private CallStatus callStatus;

    /**
     * 最近致电时间
     */
    @Column(name = "last_call_time")
    private LocalDateTime lastCallTime;

    /**
     * 下次致电时间
     */
    @Column(name = "next_call_time")
    private LocalDateTime nextCallTime;
}
