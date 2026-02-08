package getjobs.modules.datasource.mysql.web;

import getjobs.modules.datasource.mysql.domain.DataSourceVerification;
import getjobs.modules.datasource.mysql.repository.DataSourceVerificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 数据源验证控制器
 * <p>
 * 用于验证 MySQL 数据源是否正常工作。
 * </p>
 *
 * @author getjobs
 */
@Slf4j
@RestController
@RequestMapping("/api/datasource/mysql/verification")
@RequiredArgsConstructor
public class DataSourceVerificationController {

    private final DataSourceVerificationRepository verificationRepository;

    /**
     * 创建验证记录（用于测试 MySQL 数据源写入）
     *
     * @param message 验证消息
     * @return 创建的验证记录
     */
    @PostMapping
    @Transactional(transactionManager = "mysqlTransactionManager")
    public ResponseEntity<Map<String, Object>> createVerification(@RequestParam(required = false, defaultValue = "MySQL数据源验证测试") String message) {
        try {
            DataSourceVerification verification = new DataSourceVerification();
            verification.setMessage(message);
            verification.setStatus("SUCCESS");
            verification.setRemark("通过 REST API 创建的验证记录，用于测试 MySQL 数据源连接");

            verification = verificationRepository.save(verification);

            Map<String, Object> result = new HashMap<>();
            result.put("success", true);
            result.put("message", "MySQL 数据源验证记录创建成功");
            result.put("data", verification);

            log.info("MySQL 数据源验证记录创建成功: ID={}, Message={}", verification.getId(), verification.getMessage());

            return ResponseEntity.ok(result);
        } catch (Exception e) {
            log.error("MySQL 数据源验证记录创建失败", e);
            Map<String, Object> result = new HashMap<>();
            result.put("success", false);
            result.put("message", "MySQL 数据源验证失败: " + e.getMessage());
            return ResponseEntity.internalServerError().body(result);
        }
    }

    /**
     * 查询所有验证记录（用于测试 MySQL 数据源读取）
     *
     * @return 所有验证记录列表
     */
    @GetMapping
    @Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
    public ResponseEntity<Map<String, Object>> getAllVerifications() {
        try {
            List<DataSourceVerification> verifications = verificationRepository.findAll();

            Map<String, Object> result = new HashMap<>();
            result.put("success", true);
            result.put("message", "查询成功");
            result.put("count", verifications.size());
            result.put("data", verifications);

            log.info("MySQL 数据源验证记录查询成功: 共 {} 条记录", verifications.size());

            return ResponseEntity.ok(result);
        } catch (Exception e) {
            log.error("MySQL 数据源验证记录查询失败", e);
            Map<String, Object> result = new HashMap<>();
            result.put("success", false);
            result.put("message", "MySQL 数据源查询失败: " + e.getMessage());
            return ResponseEntity.internalServerError().body(result);
        }
    }

    /**
     * 查询最新的验证记录
     *
     * @return 最新的验证记录
     */
    @GetMapping("/latest")
    @Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
    public ResponseEntity<Map<String, Object>> getLatestVerification() {
        try {
            DataSourceVerification verification = verificationRepository.findLatest()
                    .orElse(null);

            Map<String, Object> result = new HashMap<>();
            if (verification != null) {
                result.put("success", true);
                result.put("message", "查询成功");
                result.put("data", verification);
            } else {
                result.put("success", true);
                result.put("message", "暂无验证记录");
                result.put("data", null);
            }

            return ResponseEntity.ok(result);
        } catch (Exception e) {
            log.error("MySQL 数据源验证记录查询失败", e);
            Map<String, Object> result = new HashMap<>();
            result.put("success", false);
            result.put("message", "MySQL 数据源查询失败: " + e.getMessage());
            return ResponseEntity.internalServerError().body(result);
        }
    }

    /**
     * 统计信息
     *
     * @return 统计信息
     */
    @GetMapping("/stats")
    @Transactional(transactionManager = "mysqlTransactionManager", readOnly = true)
    public ResponseEntity<Map<String, Object>> getStats() {
        try {
            long totalCount = verificationRepository.count();
            long successCount = verificationRepository.countByStatus("SUCCESS");
            long failedCount = verificationRepository.countByStatus("FAILED");

            Map<String, Object> result = new HashMap<>();
            result.put("success", true);
            result.put("message", "统计成功");
            result.put("data", Map.of(
                    "total", totalCount,
                    "success", successCount,
                    "failed", failedCount
            ));

            return ResponseEntity.ok(result);
        } catch (Exception e) {
            log.error("MySQL 数据源统计失败", e);
            Map<String, Object> result = new HashMap<>();
            result.put("success", false);
            result.put("message", "MySQL 数据源统计失败: " + e.getMessage());
            return ResponseEntity.internalServerError().body(result);
        }
    }
}

