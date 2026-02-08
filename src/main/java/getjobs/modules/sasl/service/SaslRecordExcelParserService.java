package getjobs.modules.sasl.service;

import getjobs.modules.sasl.domain.SaslRecord;
import getjobs.modules.sasl.dto.SaslImportRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.usermodel.*;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * SASL 记录 Excel 解析服务。
 * 负责从 Excel 文件中解析出 SaslRecord 列表。
 * 后续可以扩展支持多种格式（CSV、JSON等）。
 */
@Slf4j
@Service
public class SaslRecordExcelParserService {

    private static final DataFormatter DATA_FORMATTER = new DataFormatter();

    /**
     * 从 Excel 文件中解析 SaslRecord 列表。
     *
     * @param file          Excel 文件
     * @param documentTitle 文档标题
     * @param request       导入请求（包含文档描述等信息）
     * @return 解析结果，包含解析出的记录列表
     * @throws IOException 如果解析失败
     */
    public ParseResult parseExcel(MultipartFile file, String documentTitle, SaslImportRequest request)
            throws IOException {
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("上传文件不能为空");
        }

        try (InputStream inputStream = file.getInputStream();
                Workbook workbook = WorkbookFactory.create(inputStream)) {
            Sheet sheet = workbook.getNumberOfSheets() > 0 ? workbook.getSheetAt(0) : null;
            if (sheet == null) {
                throw new IllegalArgumentException("Excel 文件中未找到任何工作表");
            }

            // 查找表头行
            int headerRowIndex = findHeaderRow(sheet);
            if (headerRowIndex < 0) {
                throw new IllegalArgumentException("Excel 中未找到表头行");
            }

            // 解析表头，确定列索引
            Row headerRow = sheet.getRow(headerRowIndex);
            ColumnMapping columnMapping = parseColumnMapping(headerRow);

            // 解析数据行
            String excelFileName = file.getOriginalFilename();
            List<SaslRecord> records = new ArrayList<>();
            for (int rowIndex = headerRowIndex + 1; rowIndex <= sheet.getLastRowNum(); rowIndex++) {
                Row row = sheet.getRow(rowIndex);
                if (row == null || isRowEmpty(row)) {
                    continue;
                }

                SaslRecord record = parseRowToRecord(row, columnMapping, documentTitle, request, excelFileName);
                if (record != null) {
                    records.add(record);
                }
            }

            if (records.isEmpty()) {
                throw new IllegalArgumentException("Excel 中未找到有效的数据行");
            }

            return new ParseResult(records, columnMapping);
        }
    }

    /**
     * 查找表头行索引。
     *
     * @param sheet Excel 工作表
     * @return 表头行索引，如果未找到返回 -1
     */
    private int findHeaderRow(Sheet sheet) {
        for (int i = 0; i <= Math.min(sheet.getLastRowNum(), 10); i++) {
            Row row = sheet.getRow(i);
            if (row != null && containsHeaderKeywords(row)) {
                return i;
            }
        }
        return -1;
    }

    /**
     * 检查行是否包含表头关键词。
     * 支持旧格式（只有业务字段）和新格式（包含Remark等字段）。
     *
     * @param row Excel 行
     * @return 如果包含表头关键词返回 true
     */
    private boolean containsHeaderKeywords(Row row) {
        String rowText = getRowText(row).toLowerCase();
        // 业务字段关键词（两种格式都有）
        return rowText.contains("mrt") || rowText.contains("old contract")
                || rowText.contains("sales") || rowText.contains("類別") || rowText.contains("category")
                || rowText.contains("last turnnetwork month") || rowText.contains("last turn network month")
                || rowText.contains("remark");
    }

    /**
     * 获取行的文本内容。
     *
     * @param row Excel 行
     * @return 行的文本内容
     */
    private String getRowText(Row row) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < row.getLastCellNum(); i++) {
            Cell cell = row.getCell(i);
            if (cell != null) {
                sb.append(DATA_FORMATTER.formatCellValue(cell)).append(" ");
            }
        }
        return sb.toString();
    }

    /**
     * 解析列映射信息。
     * 支持旧格式（只有业务字段）和新格式（包含Remark等字段）。
     * 忽略的列：ID、Document Title、Document Description、Excel File Name、Call Status、
     * Last Call Time、Next Call Time、Created At、Updated At
     *
     * @param headerRow 表头行
     * @return 列映射信息
     */
    private ColumnMapping parseColumnMapping(Row headerRow) {
        ColumnMapping mapping = new ColumnMapping();
        for (int i = 0; i < headerRow.getLastCellNum(); i++) {
            Cell cell = headerRow.getCell(i);
            if (cell == null) {
                continue;
            }
            String headerValue = DATA_FORMATTER.formatCellValue(cell).trim().toLowerCase();

            // 忽略不需要的列
            if (headerValue.equals("id")
                    || headerValue.contains("document title")
                    || headerValue.contains("document descriptior")
                    || headerValue.contains("document description")
                    || headerValue.contains("excel file name")
                    || headerValue.contains("call status")
                    || headerValue.contains("last call time")
                    || headerValue.contains("next call time")
                    || headerValue.contains("created at")
                    || headerValue.contains("updated at")) {
                continue;
            }

            // 业务字段（两种格式都有）
            if (headerValue.contains("mrt") && !headerValue.contains("format")) {
                mapping.mrtIndex = i;
            } else if (headerValue.contains("old contract")) {
                mapping.oldContractIndex = i;
            } else if (headerValue.contains("sales") && !headerValue.contains("status")) {
                mapping.salesIndex = i;
            } else if (headerValue.contains("類別") || headerValue.contains("category")) {
                mapping.categoryIndex = i;
            } else if (headerValue.contains("last turn network month")
                    || headerValue.contains("last turnnetwork month")) {
                mapping.lastTurnNetworkMonthIndex = i;
            }
            // 新格式字段（Remark）
            else if (headerValue.contains("remark")) {
                mapping.remarkIndex = i;
            }
        }
        return mapping;
    }

    /**
     * 将 Excel 行解析为 SaslRecord。
     * Document Title、Document Description、Excel File Name 始终使用参数传入的值，不从Excel读取。
     *
     * @param row           Excel 行
     * @param mapping       列映射信息
     * @param documentTitle 文档标题（始终使用参数传入的值）
     * @param request       导入请求（始终使用参数传入的值）
     * @param excelFileName Excel 文件名（始终使用参数传入的值）
     * @return SaslRecord 实例，如果所有业务字段都为空则返回 null
     */
    private SaslRecord parseRowToRecord(Row row, ColumnMapping mapping, String documentTitle,
            SaslImportRequest request, String excelFileName) {
        SaslRecord record = new SaslRecord();

        // 业务字段（从Excel读取）
        record.setMrt(getCellValue(row, mapping.mrtIndex));
        record.setOldContract(getCellValue(row, mapping.oldContractIndex));
        record.setSales(getCellValue(row, mapping.salesIndex));
        record.setCategory(getCellValue(row, mapping.categoryIndex));
        record.setLastTurnNetworkMonth(getCellValue(row, mapping.lastTurnNetworkMonthIndex));

        // 文档相关字段：始终使用参数传入的值，不从Excel读取
        record.setDocumentTitle(documentTitle);
        record.setDocumentDescription(StringUtils.hasText(request.documentDescription())
                ? request.documentDescription().trim()
                : null);
        record.setExcelFileName(excelFileName);

        // Remark字段：如果新格式Excel中包含，则从Excel读取
        if (mapping.remarkIndex != null) {
            String remark = getCellValue(row, mapping.remarkIndex);
            record.setRemark(remark != null ? remark.trim() : null);
        }

        // 如果所有业务字段都为空，则跳过这条记录
        if (!StringUtils.hasText(record.getMrt()) && !StringUtils.hasText(record.getOldContract())
                && !StringUtils.hasText(record.getSales()) && !StringUtils.hasText(record.getCategory())
                && !StringUtils.hasText(record.getLastTurnNetworkMonth())) {
            return null;
        }

        return record;
    }

    /**
     * 获取单元格的值。
     *
     * @param row         Excel 行
     * @param columnIndex 列索引
     * @return 单元格的值，如果为空或不存在则返回 null
     */
    private String getCellValue(Row row, Integer columnIndex) {
        if (columnIndex == null || columnIndex < 0) {
            return null;
        }
        Cell cell = row.getCell(columnIndex);
        if (cell == null) {
            return null;
        }
        String value = DATA_FORMATTER.formatCellValue(cell).trim();
        return StringUtils.hasText(value) ? value : null;
    }

    /**
     * 检查行是否为空。
     *
     * @param row Excel 行
     * @return 如果行为空返回 true
     */
    private boolean isRowEmpty(Row row) {
        if (row == null) {
            return true;
        }
        for (int i = 0; i < row.getLastCellNum(); i++) {
            Cell cell = row.getCell(i);
            if (cell != null && StringUtils.hasText(DATA_FORMATTER.formatCellValue(cell))) {
                return false;
            }
        }
        return true;
    }

    /**
     * 解析结果。
     * 封装解析出的记录列表和列映射信息。
     */
    @Data
    @AllArgsConstructor
    public static class ParseResult {
        /**
         * 解析出的记录列表
         */
        private List<SaslRecord> records;

        /**
         * 列映射信息
         */
        private ColumnMapping columnMapping;
    }

    /**
     * 列映射信息。
     * 用于存储各列在 Excel 中的索引位置。
     */
    @Data
    private static class ColumnMapping {
        Integer mrtIndex;
        Integer oldContractIndex;
        Integer salesIndex;
        Integer categoryIndex;
        Integer lastTurnNetworkMonthIndex;
        // 新格式字段（Remark）
        Integer remarkIndex;
    }
}