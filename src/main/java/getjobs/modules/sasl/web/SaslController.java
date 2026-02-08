package getjobs.modules.sasl.web;

import getjobs.modules.sasl.dto.DepartmentUserResponse;
import getjobs.modules.sasl.dto.DocumentTitleItem;
import getjobs.modules.sasl.dto.PlanSectionRequest;
import getjobs.modules.sasl.dto.PlanSectionResponse;
import getjobs.modules.sasl.dto.SaslImportRecordGroupResponse;
import getjobs.modules.sasl.dto.SaslImportRequest;
import getjobs.modules.sasl.dto.SaslRecordResponse;
import getjobs.modules.sasl.dto.SaslUpdateRequest;
import getjobs.modules.sasl.dto.SaslUpdateResponse;
import getjobs.modules.sasl.dto.UserDocumentTitleRequest;
import getjobs.modules.sasl.dto.UserDocumentTitleResponse;
import getjobs.modules.sasl.dto.UserDocumentTitleBindingResponse;
import getjobs.modules.sasl.enums.CallStatus;
import getjobs.modules.sasl.service.SaslService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

/**
 * SASL 控制器。
 */
@RestController
@RequestMapping("/api/sasl")
@RequiredArgsConstructor
public class SaslController {

    private final SaslService saslService;

    /**
     * 查询所有记录。
     */
    @GetMapping("/records")
    public List<SaslRecordResponse> listRecords() {
        return saslService.listRecords();
    }

    /**
     * 获取所有去重的文档标题列表。
     *
     * @return 去重后的文档标题列表
     */
    @GetMapping("/document-titles")
    public ResponseEntity<List<String>> getAllDocumentTitles() {
        List<String> titles = saslService.getAllDocumentTitles();
        return ResponseEntity.ok(titles);
    }

    /**
     * 按文档标题分组查询导入记录。
     * 返回同一个文档标题对应的多个上传记录，文档标题可以重复。
     *
     * @return 按文档标题分组的导入记录列表
     */
    @GetMapping("/import-records/grouped")
    public ResponseEntity<List<SaslImportRecordGroupResponse>> getImportRecordsGroupedByDocumentTitle() {
        List<SaslImportRecordGroupResponse> result = saslService.getImportRecordsGroupedByDocumentTitle();
        return ResponseEntity.ok(result);
    }

    /**
     * 根据条件查询记录。
     *
     * @param mrt           MRT（移动电话号码），可选
     * @param callStatus    致电状态，可选（NA、拒絕、考慮、登記）
     * @param documentTitle 文档标题，可选
     * @return 符合条件的记录列表
     */
    @GetMapping("/search")
    public ResponseEntity<?> searchRecords(
            @RequestParam(value = "mrt", required = false) String mrt,
            @RequestParam(value = "callStatus", required = false) String callStatus,
            @RequestParam(value = "documentTitle", required = false) String documentTitle) {
        try {
            CallStatus status = null;
            if (callStatus != null && !callStatus.trim().isEmpty()) {
                // 尝试通过代码或文本匹配
                status = CallStatus.fromCode(callStatus.trim());
                if (status == null) {
                    status = CallStatus.fromText(callStatus.trim());
                }
                if (status == null) {
                    return ResponseEntity.badRequest()
                            .body(Map.of("message", "无效的致电状态，支持的值：NA、拒絕、考慮、登記"));
                }
            }

            List<SaslRecordResponse> records = saslService.searchRecords(
                    mrt != null && !mrt.trim().isEmpty() ? mrt.trim() : null,
                    status,
                    documentTitle != null && !documentTitle.trim().isEmpty() ? documentTitle.trim() : null);

            return ResponseEntity.ok(records);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 根据文档标题查询致电状态为空的前10条记录。
     *
     * @param documentTitle 文档标题（必填）
     * @return 符合条件的记录列表（最多10条，按ID从小到大排序）
     */
    @GetMapping("/pending")
    public ResponseEntity<?> findPendingRecords(
            @RequestParam("documentTitle") String documentTitle) {
        try {
            if (documentTitle == null || documentTitle.trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "文档标题不能为空"));
            }

            List<SaslRecordResponse> records = saslService.findPendingRecordsByDocumentTitle(
                    documentTitle.trim());

            return ResponseEntity.ok(records);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 导入 Excel 文件。
     *
     * @param file                Excel 文件
     * @param documentTitle       文档标题（必填）
     * @param documentDescription 文档描述（可选）
     * @param remark              备注（可选）
     * @return 导入的记录列表
     */
    @PostMapping("/import")
    public ResponseEntity<?> importExcel(
            @RequestParam("file") MultipartFile file,
            @RequestParam("documentTitle") String documentTitle,
            @RequestParam(value = "documentDescription", required = false) String documentDescription,
            @RequestParam(value = "remark", required = false) String remark) {
        try {
            SaslImportRequest request = new SaslImportRequest(documentTitle, documentDescription, remark);
            List<SaslRecordResponse> records = saslService.importFromExcel(request, file);
            return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                    "message", "导入成功",
                    "count", records.size(),
                    "records", records));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 获取所有部门包含 sasl 的用户，按部门分组。
     *
     * @return 按部门分组的用户列表
     */
    @GetMapping("/users-by-department")
    public ResponseEntity<List<DepartmentUserResponse>> getUsersByDepartmentWithSasl() {
        List<DepartmentUserResponse> result = saslService.getUsersByDepartmentWithSasl();
        return ResponseEntity.ok(result);
    }

    /**
     * 删除指定用户的 sasl 部门编码。
     * 从用户的部门编码列表中移除所有包含 "sasl" 的部门编码。
     *
     * @param id 用户ID
     * @return 删除结果
     */
    @DeleteMapping("/users-by-department/{id}")
    public ResponseEntity<?> deleteDepartmentUser(@PathVariable("id") Long id) {
        try {
            saslService.deleteDepartmentUser(id);
            return ResponseEntity.ok(Map.of("message", "已成功删除用户的 sasl 部门编码"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 记录用户ID和文档标题集合的关系。
     *
     * @param request 用户文档标题关系请求
     * @return 保存后的关系响应
     */
    @PostMapping("/user-document-titles")
    public ResponseEntity<?> saveUserDocumentTitles(@RequestBody UserDocumentTitleRequest request) {
        try {
            UserDocumentTitleResponse response = saslService.saveUserDocumentTitles(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 根据用户ID查询文档标题集合。
     *
     * @param userId 用户ID
     * @return 用户文档标题关系响应
     */
    @GetMapping("/user-document-titles/{userId}")
    public ResponseEntity<?> getUserDocumentTitles(@PathVariable("userId") Long userId) {
        try {
            UserDocumentTitleResponse response = saslService.getUserDocumentTitles(userId);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 获取所有文档标题对象，用户绑定的文档标题对象选中属性标记为true。
     *
     * @param userId 用户ID
     * @return 所有文档标题对象列表，包含选中状态
     */
    @GetMapping("/user-document-titles/{userId}/all")
    public ResponseEntity<?> getAllDocumentTitlesWithSelection(@PathVariable("userId") Long userId) {
        try {
            List<DocumentTitleItem> items = saslService.getAllDocumentTitlesWithSelection(userId);
            return ResponseEntity.ok(items);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 查询所有用户文档标题绑定关系。
     * 直接通过 UserDocumentTitle 查询所有绑定关系。
     *
     * @return 所有绑定关系列表，包含关系ID、文档标题、用户ID、用户账号/显示名、绑定时间
     */
    @GetMapping("/user-document-titles/bindings")
    public ResponseEntity<List<UserDocumentTitleBindingResponse>> getAllUserDocumentTitleBindings() {
        List<UserDocumentTitleBindingResponse> bindings = saslService.getAllUserDocumentTitleBindings();
        return ResponseEntity.ok(bindings);
    }

    /**
     * 删除用户文档标题绑定关系。
     *
     * @param id 绑定关系ID
     * @return 删除结果
     */
    @DeleteMapping("/config/bindings/{id}")
    public ResponseEntity<?> deleteUserDocumentTitleBinding(@PathVariable("id") Long id) {
        try {
            saslService.deleteUserDocumentTitleBinding(id);
            return ResponseEntity.ok(Map.of("message", "绑定关系已删除"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 根据文档标题删除所有记录。
     *
     * @param documentTitle 文档标题（必填）
     * @return 删除结果
     */
    @DeleteMapping("/records/by-document-title/{documentTitle}")
    public ResponseEntity<?> deleteRecordsByDocumentTitle(
            @PathVariable("documentTitle") String documentTitle) {
        try {
            if (documentTitle == null || documentTitle.trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "文档标题不能为空"));
            }

            saslService.deleteRecordsByDocumentTitle(documentTitle.trim());
            return ResponseEntity.ok(Map.of("message", "已成功删除文档标题 \"" + documentTitle.trim() + "\" 的所有记录"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 根据记录ID更新致电状态和备注，自动更新最近致电时间为当前时间。
     * 返回更新后的记录和下一条记录（ID 比当前记录大，文档标题相同，最小的 ID）。
     *
     * @param id      记录ID
     * @param request 更新请求（包含致电状态、备注、下次致电时间、文档标题和查询致电状态）
     * @return 更新响应，包含更新后的记录和下一条记录
     */
    @PutMapping("/records/{id}")
    public ResponseEntity<?> updateRecord(
            @PathVariable("id") Long id,
            @RequestBody SaslUpdateRequest request) {
        try {
            SaslUpdateResponse response = saslService.updateRecord(id, request.callStatus(), request.remark(),
                    request.nextCallTime(), request.documentTitle(), request.queryCallStatus());
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    // ==================== 套餐方案相关接口 ====================

    /**
     * 查询所有套餐方案。
     *
     * @return 套餐方案列表
     */
    @GetMapping("/plan-sections")
    public ResponseEntity<List<PlanSectionResponse>> listPlanSections() {
        List<PlanSectionResponse> sections = saslService.listPlanSections();
        return ResponseEntity.ok(sections);
    }

    /**
     * 根据ID查询套餐方案。
     *
     * @param id 套餐方案ID
     * @return 套餐方案响应
     */
    @GetMapping("/plan-sections/{id}")
    public ResponseEntity<?> getPlanSectionById(@PathVariable("id") Long id) {
        try {
            PlanSectionResponse section = saslService.getPlanSectionById(id);
            return ResponseEntity.ok(section);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 根据套餐ID查询套餐方案。
     *
     * @param planId 套餐ID
     * @return 套餐方案响应
     */
    @GetMapping("/plan-sections/plan-id/{planId}")
    public ResponseEntity<?> getPlanSectionByPlanId(@PathVariable("planId") String planId) {
        try {
            PlanSectionResponse section = saslService.getPlanSectionByPlanId(planId);
            return ResponseEntity.ok(section);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 创建套餐方案。
     *
     * @param request 套餐方案请求
     * @return 创建的套餐方案响应
     */
    @PostMapping("/plan-sections")
    public ResponseEntity<?> createPlanSection(@Valid @RequestBody PlanSectionRequest request) {
        try {
            PlanSectionResponse section = saslService.createPlanSection(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(section);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 更新套餐方案。
     *
     * @param id      套餐方案ID
     * @param request 套餐方案请求
     * @return 更新后的套餐方案响应
     */
    @PutMapping("/plan-sections/{id}")
    public ResponseEntity<?> updatePlanSection(
            @PathVariable("id") Long id,
            @Valid @RequestBody PlanSectionRequest request) {
        try {
            PlanSectionResponse section = saslService.updatePlanSection(id, request);
            return ResponseEntity.ok(section);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * 删除套餐方案（逻辑删除）。
     *
     * @param id 套餐方案ID
     * @return 删除结果
     */
    @DeleteMapping("/plan-sections/{id}")
    public ResponseEntity<?> deletePlanSection(@PathVariable("id") Long id) {
        try {
            saslService.deletePlanSection(id);
            return ResponseEntity.ok(Map.of("message", "套餐方案已删除"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

}
