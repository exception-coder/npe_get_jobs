package getjobs.modules.sasl.web;

import getjobs.modules.sasl.dto.SaslRecordResponse;
import getjobs.modules.sasl.service.SaslService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

/**
 * SASL 配置控制器。
 * 用于配置相关的接口。
 */
@RestController
@RequestMapping("/api/sasl/config")
@RequiredArgsConstructor
public class SaslConfigController {

    private final SaslService saslService;

    /**
     * 根据文档标题查询所有记录。
     * 返回的记录中 mrt 字段已进行数据脱敏（保留前1位和后2位）。
     *
     * @param documentTitle 文档标题（必填）
     * @return 符合条件的记录列表，按ID从小到大排序，mrt 字段已脱敏
     */
    @GetMapping("/records/by-document-title")
    public ResponseEntity<?> getRecordsByDocumentTitle(
            @RequestParam("documentTitle") String documentTitle) {
        try {
            if (documentTitle == null || documentTitle.trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "文档标题不能为空"));
            }

            List<SaslRecordResponse> records = saslService.getRecordsByDocumentTitleWithMaskedMrt(documentTitle.trim());
            return ResponseEntity.ok(records);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 根据文档标题导出记录到 Excel 文件。
     *
     * @param documentTitle 文档标题（必填）
     * @return Excel 文件响应
     */
    @GetMapping("/records/export")
    public ResponseEntity<?> exportRecordsByDocumentTitle(
            @RequestParam("documentTitle") String documentTitle) {
        try {
            if (documentTitle == null || documentTitle.trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "文档标题不能为空"));
            }

            byte[] excelBytes = saslService.exportRecordsByDocumentTitle(documentTitle.trim());

            // 构建文件名（包含文档标题和时间戳）
            String timestamp = String.valueOf(System.currentTimeMillis());
            String displayFileName = "SASL_" + documentTitle.trim() + "_" + timestamp + ".xlsx";
            // 对文件名进行 URL 编码，支持中文和特殊字符
            String encodedFileName = URLEncoder.encode(displayFileName, StandardCharsets.UTF_8)
                    .replace("+", "%20");

            // 设置响应头
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            // 使用 RFC 5987 标准格式支持 UTF-8 编码的文件名
            headers.add("Content-Disposition",
                    "attachment; filename=\"" + displayFileName + "\"; filename*=UTF-8''" + encodedFileName);
            headers.setContentLength(excelBytes.length);

            return new ResponseEntity<>(excelBytes, headers, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "导出失败：" + e.getMessage()));
        }
    }
}
