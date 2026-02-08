package getjobs.modules.webdocs.dto;

import java.util.List;

/**
 * 团队在线表格的表头与表记录响应。
 *
 * @param documentId    文档 ID
 * @param documentTitle 文档标题
 * @param sheetId       工作表 ID
 * @param sheetName     工作表名称
 * @param headers       表头集合
 * @param rows          表记录集合
 */
public record TeamSpreadsheetTableResponse(
        Long documentId,
        String documentTitle,
        String sheetId,
        String sheetName,
        List<String> headers,
        List<List<String>> rows) {
}
