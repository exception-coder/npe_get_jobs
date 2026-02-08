package getjobs.modules.webdocs.repository;

import getjobs.modules.webdocs.domain.TeamSpreadsheetDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 团队在线表格文档仓储。
 */
@Repository
public interface TeamSpreadsheetDocumentRepository extends JpaRepository<TeamSpreadsheetDocument, Long> {
}
