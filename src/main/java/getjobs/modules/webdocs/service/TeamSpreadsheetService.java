package getjobs.modules.webdocs.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.webdocs.domain.TeamSpreadsheetDocument;
import getjobs.modules.webdocs.dto.TeamSpreadsheetDocumentRequest;
import getjobs.modules.webdocs.dto.TeamSpreadsheetDocumentResponse;
import getjobs.modules.webdocs.dto.TeamSpreadsheetTableResponse;
import getjobs.modules.webdocs.repository.TeamSpreadsheetDocumentRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.TreeSet;
import java.util.UUID;

/**
 * 团队在线表格业务逻辑。
 */
@Service
@RequiredArgsConstructor
public class TeamSpreadsheetService {

    private static final String SAMPLE_DOCUMENT_TITLE = "示例文档";
    private static final String SAMPLE_DOCUMENT_DESCRIPTION = "系统自动生成的示例，演示携号转网记录的填写方式。";
    private static final String SAMPLE_DOCUMENT_REMARK = "初始化样例数据，可覆盖或删除后自行创建。";
    private static final String SAMPLE_DOCUMENT_CONTENT = """
            {
              "id": "team-spreadsheet-sample",
              "appVersion": "3.0.0",
              "locale": "zhCN",
              "name": "示例文档",
              "sheetOrder": [
                "sheet-demo"
              ],
              "styles": {},
              "sheets": {
                "sheet-demo": {
                  "id": "sheet-demo",
                  "name": "轉網記錄",
                  "tabColor": "",
                  "hidden": 0,
                  "freeze": {
                    "xSplit": 0,
                    "ySplit": 1,
                    "startRow": 0,
                    "startColumn": 0
                  },
                  "rowCount": 200,
                  "columnCount": 26,
                  "zoomRatio": 1,
                  "scrollTop": 0,
                  "scrollLeft": 0,
                  "defaultColumnWidth": 100,
                  "defaultRowHeight": 24,
                  "mergeData": [],
                  "rowHeader": {
                    "width": 46
                  },
                  "columnHeader": {
                    "height": 20
                  },
                  "showGridlines": 1,
                  "rightToLeft": 0,
                  "rowData": {},
                  "columnData": {},
                  "cellData": {
                    "0": {
                      "0": { "v": "MRT" },
                      "1": { "v": "舊網絡" },
                      "2": { "v": "原合約期" },
                      "3": { "v": "原月費計劃" },
                      "4": { "v": "生效月" },
                      "5": { "v": "新網絡" }
                    },
                    "1": {
                      "0": { "v": "90409232" },
                      "1": { "v": "3HK" },
                      "2": { "v": "2023.12" },
                      "3": { "v": "108-196(4.5G+無限)" },
                      "4": { "v": "2024.02" },
                      "5": { "v": "Smartone" }
                    }
                  }
                }
              }
            }
            """;

    private static final String DEFAULT_IMPORT_DESCRIPTION = "由 Excel 导入生成的文档";
    private static final int MIN_ROW_COUNT = 200;
    private static final int MIN_COLUMN_COUNT = 26;
    private static final int ROW_PADDING = 40;
    private static final DataFormatter DATA_FORMATTER = new DataFormatter();
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    private final TeamSpreadsheetDocumentRepository documentRepository;

    /**
     * 应用启动后监听在线表格实体，如果没有任何记录则自动初始化一个示例文档。
     */
    @EventListener(ApplicationReadyEvent.class)
    @Transactional
    public void initSampleDocumentIfEmpty() {
        if (documentRepository.count() > 0) {
            return;
        }
        TeamSpreadsheetDocument document = new TeamSpreadsheetDocument();
        document.setTitle(SAMPLE_DOCUMENT_TITLE);
        document.setDescription(SAMPLE_DOCUMENT_DESCRIPTION);
        document.setContent(SAMPLE_DOCUMENT_CONTENT.strip());
        document.setRemark(SAMPLE_DOCUMENT_REMARK);
        documentRepository.save(document);
    }

    /**
     * 查询全部文档。
     */
    public List<TeamSpreadsheetDocumentResponse> listDocuments() {
        return documentRepository.findAll()
                .stream()
                .map(TeamSpreadsheetDocumentResponse::from)
                .toList();
    }

    /**
     * 根据 ID 查找文档。
     */
    public Optional<TeamSpreadsheetDocumentResponse> findDocument(Long documentId) {
        return documentRepository.findById(documentId)
                .map(TeamSpreadsheetDocumentResponse::from);
    }

    /**
     * 根据 ID 解析文档的表头与记录。
     */
    public Optional<TeamSpreadsheetTableResponse> findDocumentTable(Long documentId) {
        return documentRepository.findById(documentId)
                .map(this::convertDocumentToTable);
    }

    /**
     * 新建文档。
     */
    @Transactional
    public TeamSpreadsheetDocumentResponse createDocument(TeamSpreadsheetDocumentRequest request) {
        TeamSpreadsheetDocument document = new TeamSpreadsheetDocument();
        document.setTitle(request.title());
        document.setDescription(request.description());
        document.setContent(request.content());
        document.setRemark(request.remark());
        TeamSpreadsheetDocument saved = documentRepository.save(document);
        return TeamSpreadsheetDocumentResponse.from(saved);
    }

    /**
     * 更新文档。
     */
    @Transactional
    public TeamSpreadsheetDocumentResponse updateDocument(Long documentId, TeamSpreadsheetDocumentRequest request) {
        TeamSpreadsheetDocument document = documentRepository.findById(documentId)
                .orElseThrow(() -> new IllegalArgumentException("文档不存在：" + documentId));
        document.setTitle(request.title());
        document.setDescription(request.description());
        document.setContent(request.content());
        document.setRemark(request.remark());
        TeamSpreadsheetDocument saved = documentRepository.save(document);
        return TeamSpreadsheetDocumentResponse.from(saved);
    }

    /**
     * 删除文档。
     */
    @Transactional
    public void deleteDocument(Long documentId, String expectedTitle) {
        TeamSpreadsheetDocument document = documentRepository.findById(documentId)
                .orElseThrow(() -> new IllegalArgumentException("文档不存在：" + documentId));

        if (expectedTitle != null && !document.getTitle().equals(expectedTitle)) {
            throw new IllegalArgumentException("文档名称不匹配");
        }
        documentRepository.delete(document);
    }

    /**
     * 通过上传的 Excel 文件解析并创建新的协作文档。
     *
     * @param title       文档标题，允许为空（将自动根据文件名生成）
     * @param description 文档描述
     * @param remark      备注
     * @param file        Excel 文件
     * @return 新建的文档
     */
    @Transactional
    public TeamSpreadsheetDocumentResponse importFromExcel(String title,
            String description,
            String remark,
            MultipartFile file) {
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("上传文件不能为空");
        }

        String resolvedTitle = resolveTitle(title, file.getOriginalFilename());
        try (InputStream inputStream = file.getInputStream();
                Workbook workbook = WorkbookFactory.create(inputStream)) {
            Sheet sheet = workbook.getNumberOfSheets() > 0 ? workbook.getSheetAt(0) : null;
            if (sheet == null) {
                throw new IllegalArgumentException("Excel 文件中未找到任何工作表");
            }

            int headerRowIndex = findFirstNonEmptyRow(sheet);
            int lastRowIndex = findLastNonEmptyRow(sheet);
            if (headerRowIndex < 0 || lastRowIndex < headerRowIndex) {
                throw new IllegalArgumentException("Excel 中未检测到可导入的数据");
            }
            int columnCount = Math.max(determineColumnCount(sheet.getRow(headerRowIndex)), MIN_COLUMN_COUNT);
            Map<String, Object> workbookSnapshot = buildWorkbookSnapshot(sheet, resolvedTitle, headerRowIndex,
                    lastRowIndex, columnCount);
            String content = serializeSnapshot(workbookSnapshot);

            TeamSpreadsheetDocument document = new TeamSpreadsheetDocument();
            document.setTitle(resolvedTitle);
            document.setDescription(StringUtils.hasText(description) ? description : DEFAULT_IMPORT_DESCRIPTION);
            document.setContent(content);
            document.setRemark(remark);
            TeamSpreadsheetDocument saved = documentRepository.save(document);
            return TeamSpreadsheetDocumentResponse.from(saved);
        } catch (IOException e) {
            throw new IllegalArgumentException("解析 Excel 文件失败，请确认格式正确", e);
        }
    }

    private static String resolveTitle(String title, String originalFilename) {
        if (StringUtils.hasText(title)) {
            return title.trim();
        }
        if (StringUtils.hasText(originalFilename)) {
            String name = originalFilename.trim();
            int dotIndex = name.lastIndexOf('.');
            if (dotIndex > 0) {
                return name.substring(0, dotIndex);
            }
            return name;
        }
        return "导入文档-" + System.currentTimeMillis();
    }

    private static int findFirstNonEmptyRow(Sheet sheet) {
        for (Row row : sheet) {
            if (!isRowEmpty(row)) {
                return row.getRowNum();
            }
        }
        return -1;
    }

    private static int findLastNonEmptyRow(Sheet sheet) {
        for (int i = sheet.getLastRowNum(); i >= 0; i--) {
            Row row = sheet.getRow(i);
            if (!isRowEmpty(row)) {
                return i;
            }
        }
        return -1;
    }

    private static boolean isRowEmpty(Row row) {
        if (row == null) {
            return true;
        }
        int firstCell = row.getFirstCellNum();
        int lastCell = row.getLastCellNum();
        if (firstCell < 0 || lastCell < 0) {
            return true;
        }
        for (int i = firstCell; i < lastCell; i++) {
            Cell cell = row.getCell(i);
            if (cell != null && StringUtils.hasText(DATA_FORMATTER.formatCellValue(cell))) {
                return false;
            }
        }
        return true;
    }

    private static int determineColumnCount(Row headerRow) {
        if (headerRow == null) {
            throw new IllegalArgumentException("Excel 缺少表头行，无法识别列信息");
        }
        int lastCellNum = headerRow.getLastCellNum();
        int physicalCells = headerRow.getPhysicalNumberOfCells();
        int detected = Math.max(lastCellNum, physicalCells);
        if (detected <= 0) {
            throw new IllegalArgumentException("无法解析表头列，请确认首行包含列名");
        }
        return detected;
    }

    private static Map<String, Object> buildWorkbookSnapshot(Sheet sheet,
            String title,
            int headerRowIndex,
            int lastRowIndex,
            int columnCount) {
        String sheetId = "sheet-" + UUID.randomUUID();
        Map<String, Object> workbookSnapshot = new LinkedHashMap<>();
        workbookSnapshot.put("id", "team-spreadsheet-" + UUID.randomUUID());
        workbookSnapshot.put("appVersion", "3.0.0");
        workbookSnapshot.put("locale", "zhCN");
        workbookSnapshot.put("name", title);
        workbookSnapshot.put("sheetOrder", List.of(sheetId));
        workbookSnapshot.put("styles", Map.of());

        Map<String, Object> sheets = new LinkedHashMap<>();
        Map<String, Object> sheetData = new LinkedHashMap<>();
        sheetData.put("id", sheetId);
        sheetData.put("name", sheet.getSheetName());
        sheetData.put("tabColor", "");
        sheetData.put("hidden", 0);
        sheetData.put("freeze", Map.of(
                "xSplit", 0,
                "ySplit", 1,
                "startRow", 0,
                "startColumn", 0));
        sheetData.put("rowCount", Math.max((lastRowIndex - headerRowIndex + 1) + ROW_PADDING, MIN_ROW_COUNT));
        sheetData.put("columnCount", columnCount);
        sheetData.put("zoomRatio", 1);
        sheetData.put("scrollTop", 0);
        sheetData.put("scrollLeft", 0);
        sheetData.put("defaultColumnWidth", 100);
        sheetData.put("defaultRowHeight", 24);
        sheetData.put("mergeData", new ArrayList<>());
        sheetData.put("rowHeader", Map.of("width", 46));
        sheetData.put("columnHeader", Map.of("height", 20));
        sheetData.put("showGridlines", 1);
        sheetData.put("rightToLeft", 0);
        sheetData.put("rowData", Map.of());
        sheetData.put("columnData", Map.of());
        sheetData.put("cellData", buildCellData(sheet, headerRowIndex, lastRowIndex, columnCount));

        sheets.put(sheetId, sheetData);
        workbookSnapshot.put("sheets", sheets);
        return workbookSnapshot;
    }

    private static Map<String, Object> buildCellData(Sheet sheet,
            int headerRowIndex,
            int lastRowIndex,
            int columnCount) {
        Map<String, Object> cellData = new LinkedHashMap<>();
        for (int rowIndex = headerRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
            Row row = sheet.getRow(rowIndex);
            Map<String, Object> columns = new LinkedHashMap<>();
            for (int colIndex = 0; colIndex < columnCount; colIndex++) {
                Cell cell = row != null ? row.getCell(colIndex) : null;
                String value = cell != null ? DATA_FORMATTER.formatCellValue(cell) : "";
                if (StringUtils.hasText(value)) {
                    columns.put(String.valueOf(colIndex), Map.of("v", value));
                }
            }
            if (!columns.isEmpty()) {
                cellData.put(String.valueOf(rowIndex - headerRowIndex), columns);
            }
        }
        return cellData;
    }

    private static String serializeSnapshot(Map<String, Object> snapshot) {
        try {
            return OBJECT_MAPPER.writeValueAsString(snapshot);
        } catch (JsonProcessingException e) {
            throw new IllegalStateException("生成表格快照失败", e);
        }
    }

    private TeamSpreadsheetTableResponse convertDocumentToTable(TeamSpreadsheetDocument document) {
        String content = document.getContent();
        if (!StringUtils.hasText(content)) {
            throw new IllegalArgumentException("文档内容为空，无法解析表格");
        }
        JsonNode rootNode;
        try {
            rootNode = OBJECT_MAPPER.readTree(content);
        } catch (JsonProcessingException e) {
            throw new IllegalArgumentException("文档内容格式异常，无法解析为 JSON", e);
        }

        JsonNode sheetsNode = rootNode.path("sheets");
        if (sheetsNode.isMissingNode() || !sheetsNode.fieldNames().hasNext()) {
            throw new IllegalArgumentException("文档内容缺少工作表数据");
        }

        String sheetId = resolveSheetId(rootNode, sheetsNode);
        JsonNode sheetNode = sheetsNode.path(sheetId);
        if (sheetNode.isMissingNode() || !sheetNode.isObject()) {
            throw new IllegalArgumentException("未找到指定的工作表数据");
        }

        JsonNode cellDataNode = sheetNode.path("cellData");
        if (cellDataNode.isMissingNode() || !cellDataNode.isObject()) {
            throw new IllegalArgumentException("工作表内容缺少 cellData");
        }

        List<Integer> columnIndexes = collectColumnIndexes(cellDataNode);
        List<String> headers = buildHeaders(columnIndexes, cellDataNode.path("0"));
        List<List<String>> rows = buildRows(columnIndexes, cellDataNode);

        return new TeamSpreadsheetTableResponse(
                document.getId(),
                document.getTitle(),
                sheetId,
                sheetNode.path("name").asText(document.getTitle()),
                headers,
                rows);
    }

    private static String resolveSheetId(JsonNode rootNode, JsonNode sheetsNode) {
        JsonNode sheetOrderNode = rootNode.path("sheetOrder");
        if (sheetOrderNode.isArray() && sheetOrderNode.size() > 0) {
            return sheetOrderNode.get(0).asText();
        }
        return sheetsNode.fieldNames().next();
    }

    private static List<Integer> collectColumnIndexes(JsonNode cellDataNode) {
        Set<Integer> indexes = new TreeSet<>();
        cellDataNode.fields().forEachRemaining(entry -> {
            JsonNode rowNode = entry.getValue();
            if (rowNode != null && rowNode.isObject()) {
                rowNode.fieldNames().forEachRemaining(columnKey -> {
                    try {
                        indexes.add(Integer.parseInt(columnKey));
                    } catch (NumberFormatException ignored) {
                        // 忽略非法列索引
                    }
                });
            }
        });
        return new ArrayList<>(indexes);
    }

    private static List<String> buildHeaders(List<Integer> columnIndexes, JsonNode headerRowNode) {
        List<String> headers = new ArrayList<>(columnIndexes.size());
        for (Integer columnIndex : columnIndexes) {
            JsonNode cellNode = headerRowNode.path(String.valueOf(columnIndex));
            headers.add(readCellValue(cellNode));
        }
        return headers;
    }

    private static List<List<String>> buildRows(List<Integer> columnIndexes, JsonNode cellDataNode) {
        List<RowEntry> rowEntries = new ArrayList<>();
        cellDataNode.fields().forEachRemaining(entry -> {
            try {
                int rowIndex = Integer.parseInt(entry.getKey());
                if (rowIndex > 0) {
                    rowEntries.add(new RowEntry(rowIndex, entry.getValue()));
                }
            } catch (NumberFormatException ignored) {
                // 忽略非法行索引
            }
        });
        rowEntries.sort(Comparator.comparingInt(RowEntry::rowIndex));

        List<List<String>> rows = new ArrayList<>(rowEntries.size());
        for (RowEntry rowEntry : rowEntries) {
            List<String> rowValues = new ArrayList<>(columnIndexes.size());
            for (Integer columnIndex : columnIndexes) {
                JsonNode cellNode = rowEntry.rowNode.path(String.valueOf(columnIndex));
                rowValues.add(readCellValue(cellNode));
            }
            rows.add(rowValues);
        }
        return rows;
    }

    private static String readCellValue(JsonNode cellNode) {
        if (cellNode == null || cellNode.isMissingNode() || !cellNode.isObject()) {
            return "";
        }
        JsonNode valueNode = cellNode.get("v");
        if (valueNode == null || valueNode.isMissingNode()) {
            return "";
        }
        if (valueNode.isNumber() || valueNode.isBoolean()) {
            return valueNode.asText();
        }
        return valueNode.asText("").trim();
    }

    private record RowEntry(int rowIndex, JsonNode rowNode) {
    }
}
