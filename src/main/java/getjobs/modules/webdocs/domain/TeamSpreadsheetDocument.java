package getjobs.modules.webdocs.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 团队在线表格的持久化实体。
 */
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "team_spreadsheet_document")
public class TeamSpreadsheetDocument extends BaseEntity {

    /**
     * 文档标题
     */
    @Column(name = "title", nullable = false, length = 200)
    private String title;

    /**
     * 文档描述
     */
    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    /**
     * 文档内容（可以是 JSON 或 Base64 编码的文件内容）
     */
    @Lob
    @Column(name = "content", nullable = false)
    private String content;
}
