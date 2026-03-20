package getjobs.modules.ai.company.web;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.ai.company.assembler.CompanyEvaluationPromptAssembler;
import getjobs.modules.ai.company.dto.CompanyEvaluationDeleteResponse;
import getjobs.modules.ai.company.dto.CompanyEvaluationEvaluateResponse;
import getjobs.modules.ai.company.dto.CompanyEvaluationListItem;
import getjobs.modules.ai.company.dto.CompanyEvaluationPageResponse;
import getjobs.infrastructure.ai.enums.AiPlatform;
import getjobs.modules.ai.company.dto.CompanyEvaluationRequest;
import getjobs.modules.ai.company.dto.CompanyEvaluationResult;
import getjobs.modules.ai.company.service.CompanyEvaluationAiService;
import getjobs.repository.CompanyEvaluationRepository;
import getjobs.repository.entity.CompanyEvaluationEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 公司质量评估 API
 * <p>
 * 参数为企业名称，先按公司信息文本查库，有则直接返回；否则调用 AI 评估并落库后返回。
 * 支持分页查询历史评估记录。
 * </p>
 */
@RestController
@RequestMapping("/api/ai/company")
public class CompanyEvaluationController {

    private final CompanyEvaluationAiService companyEvaluationAiService;
    private final CompanyEvaluationRepository companyEvaluationRepository;
    private final ObjectMapper objectMapper;
    private final CompanyEvaluationPromptAssembler companyEvaluationPromptAssembler;

    public CompanyEvaluationController(CompanyEvaluationAiService companyEvaluationAiService,
                                      CompanyEvaluationRepository companyEvaluationRepository,
                                      ObjectMapper objectMapper,
                                      CompanyEvaluationPromptAssembler companyEvaluationPromptAssembler) {
        this.companyEvaluationAiService = companyEvaluationAiService;
        this.companyEvaluationRepository = companyEvaluationRepository;
        this.objectMapper = objectMapper;
        this.companyEvaluationPromptAssembler = companyEvaluationPromptAssembler;
    }

    /**
     * 根据企业名称评估公司求职风险（欠薪/外包/皮包），结果入库并返回记录 ID
     *
     * @param request 请求体，companyName 为企业名称（也可为更长公司描述）
     * @return recordId 与评估结果 result
     */
    @PostMapping("/evaluate")
    public ResponseEntity<CompanyEvaluationEvaluateResponse> evaluate(@RequestBody CompanyEvaluationRequest request) {
        String name = request != null ? request.getCompanyName() : null;
        String trimmed = name != null ? name.trim() : "";
        if (!StringUtils.hasText(trimmed)) {
            return ResponseEntity.badRequest().build();
        }
        String model = request != null && StringUtils.hasText(request.getModel()) ? request.getModel().trim() : null;
        AiPlatform platform = parsePlatform(request != null ? request.getPlatform() : null);
        CompanyEvaluationEvaluateResponse response = companyEvaluationAiService.evaluate(
                trimmed,
                "company-evaluation-v1",
                model,
                platform
        );
        return ResponseEntity.ok(response);
    }

    /**
     * 按 ID 列表逻辑删除（勾选删除）
     *
     * @param ids 主键 ID 列表，逗号分隔，如 1,2,3
     * @return 删除条数
     */
    @DeleteMapping("/records")
    @Transactional
    public ResponseEntity<CompanyEvaluationDeleteResponse> deleteByIds(
            @RequestParam(value = "ids", required = false) List<Long> ids) {
        if (CollectionUtils.isEmpty(ids)) {
            return ResponseEntity.badRequest().build();
        }
        int n = companyEvaluationRepository.markDeletedByIdIn(ids);
        return ResponseEntity.ok(new CompanyEvaluationDeleteResponse(n));
    }

    /**
     * 逻辑删除全部评估记录（全部删除）
     *
     * @return 删除条数
     */
    @DeleteMapping("/records/all")
    @Transactional
    public ResponseEntity<CompanyEvaluationDeleteResponse> deleteAll() {
        int n = companyEvaluationRepository.markDeletedAll();
        return ResponseEntity.ok(new CompanyEvaluationDeleteResponse(n));
    }

    /**
     * 分页查询评估记录
     *
     * @param page 页码（从 0 开始）
     * @param size 每页条数
     * @return 分页数据
     */
    @GetMapping("/list")
    public ResponseEntity<CompanyEvaluationPageResponse> list(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        if (size <= 0 || size > 100) {
            size = 20;
        }
        Pageable pageable = PageRequest.of(page, size);
        Page<CompanyEvaluationEntity> entityPage = companyEvaluationRepository
                .findAllByIsDeletedFalseOrderByCreatedAtDesc(pageable);
        List<CompanyEvaluationListItem> items = entityPage.getContent().stream()
                .map(this::toListItem)
                .collect(Collectors.toList());
        CompanyEvaluationPageResponse response = new CompanyEvaluationPageResponse(
                items,
                entityPage.getTotalElements(),
                entityPage.getTotalPages(),
                entityPage.getNumber(),
                entityPage.getSize()
        );
        return ResponseEntity.ok(response);
    }

    private static AiPlatform parsePlatform(String platform) {
        if (!StringUtils.hasText(platform)) return null;
        try {
            return AiPlatform.valueOf(platform.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            return null;
        }
    }

    @GetMapping("/extra-rules")
    public Map<String, List<String>> getExtraRules() {
        return Map.of(
                "deductions", companyEvaluationPromptAssembler.getExtraDeductions(),
                "bonuses", companyEvaluationPromptAssembler.getExtraBonuses()
        );
    }

    @PostMapping("/extra-rules")
    public Map<String, Object> saveExtraRules(@RequestBody Map<String, List<String>> body) {
        List<String> deductions = body.getOrDefault("deductions", List.of());
        List<String> bonuses = body.getOrDefault("bonuses", List.of());
        companyEvaluationPromptAssembler.setExtraDeductions(deductions);
        companyEvaluationPromptAssembler.setExtraBonuses(bonuses);
        return Map.of("success", true);
    }

    private CompanyEvaluationListItem toListItem(CompanyEvaluationEntity entity) {
        CompanyEvaluationResult result = null;
        if (StringUtils.hasText(entity.getResultJson())) {
            try {
                result = objectMapper.readValue(entity.getResultJson(), CompanyEvaluationResult.class);
            } catch (Exception ignored) {
                // 解析失败时 result 为 null
            }
        }
        return new CompanyEvaluationListItem(
                entity.getId(),
                entity.getCompanyInfo(),
                result,
                entity.getCreatedAt()
        );
    }
}
