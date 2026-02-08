package getjobs.modules.sasl.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * SASL 导入记录实体。
 * 用于记录每次Excel导入操作的相关信息。
 */
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "sasl_import_record")
public class SaslImportRecord extends BaseEntity {

    /**
     * Excel 原名（上传的文件名）
     */
    @Column(name = "excel_file_name", length = 255)
    private String excelFileName;

    /**
     * 文档标题
     */
    @Column(name = "document_title", length = 80)
    private String documentTitle;

    /**
     * 文档描述
     */
    @Column(name = "document_description", columnDefinition = "TEXT")
    private String documentDescription;

    /**
     * 文档备注
     */
    @Column(name = "document_remark", columnDefinition = "TEXT")
    private String documentRemark;
}

