# CommonConfigController 重构设计文档

本文档详细说明 `CommonConfigController` 的重构方案，遵循 DDD-lite 架构原则。

---

## 目录

1. [问题分析](#问题分析)
2. [重构目标](#重构目标)
3. [架构设计](#架构设计)
4. [实施步骤](#实施步骤)
5. [测试计划](#测试计划)

---

## 问题分析

### 当前问题

#### 1. Controller 层职责过重
```java
@PostMapping("/save")
@Transactional  // ❌ 事务应该在 Service 层
public ResponseEntity<Map<String, Object>> saveCommonConfig(@RequestBody Map<String, Object> configData) {
    // ❌ 200+ 行的业务逻辑
    // ❌ 大量的字段映射
    // ❌ 类型转换逻辑
    // ❌ 直接调用 Repository
    // ❌ 直接调用基础设施服务
}
```

#### 2. 违反的架构原则
- **单一职责原则**：Controller 既做协议处理，又做业务逻辑
- **依赖倒置原则**：Controller 直接依赖 Repository 和基础设施
- **开闭原则**：新增字段需要修改 Controller 代码
- **接口隔离原则**：Controller 注入了过多的依赖

#### 3. 可维护性问题
- 代码难以测试（需要 Mock 多个依赖）
- 业务逻辑分散（字段映射逻辑在 Controller 中）
- 难以扩展（新增配置项需要修改 Controller）
- 代码重复（类型转换逻辑重复）

---

## 重构目标

### 架构目标
1. **Controller 层**：只做协议处理，调用 Application Service
2. **Application 层**：编排业务流程，协调多个领域服务
3. **Domain 层**：封装业务规则和领域逻辑
4. **Infrastructure 层**：提供技术实现

### 代码质量目标
1. Controller 方法不超过 20 行
2. 每个类职责单一
3. 代码可测试性提升
4. 消除代码重复

---

## 架构设计

### 分层结构

```
┌─────────────────────────────────────────────────────────┐
│                    Controller Layer                      │
│  CommonConfigController (协议处理)                       │
│  - saveCommonConfig(request)                            │
│  - getCommonConfig()                                    │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                  Application Layer                       │
│  CommonConfigApplicationService (业务编排)               │
│  - saveCommonConfig(request)                            │
│  - getCommonConfig()                                    │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                    Domain Layer                          │
│  CommonConfigAssembler (DTO转换)                        │
│  - toEntity(request, profile)                           │
│  - toResponse(profile)                                  │
│                                                          │
│  AiConfigSyncService (AI配置同步)                       │
│  - syncDeepseekConfig(configs)                          │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                Infrastructure Layer                      │
│  UserProfileRepository (数据访问)                        │
│  DeepseekConfigRefreshService (配置刷新)                │
└─────────────────────────────────────────────────────────┘
```

### 类设计

#### 1. DTO 设计

```java
// 请求 DTO
@Data
public class CommonConfigSaveRequest {
    // 黑名单配置
    private List<String> jobBlacklistKeywords;
    private List<String> companyBlacklistKeywords;
    
    // 候选人信息
    private String jobTitle;
    private List<String> skills;
    private String yearsOfExperience;
    private String careerIntent;
    private String domainExperience;
    private String location;
    
    // AI 配置
    private Map<String, Object> aiPlatformConfigs;
    private Boolean enableAIGreeting;
    private Boolean enableAIJobMatch;
    
    // 简历配置
    private String sayHiContent;
    private String resumeImagePath;
    private Integer minSalary;
    private Integer maxSalary;
    
    // 功能开关
    private Boolean recommendJobs;
    private Boolean sendImgResume;
    private List<String> hrStatusKeywords;
}

// 响应 DTO
@Data
public class CommonConfigResponse {
    private Boolean success;
    private String message;
    private LocalDateTime timestamp;
    private Long profileId;
    private CommonConfigData data;
}

@Data
public class CommonConfigData {
    // 与 Request 类似的字段
}
```

#### 2. Controller 设计

```java
@RestController
@RequestMapping("/api/common/config")
@RequiredArgsConstructor
@Slf4j
public class CommonConfigController {
    
    private final CommonConfigApplicationService applicationService;
    
    /**
     * 保存公共配置
     */
    @PostMapping("/save")
    public ResponseEntity<CommonConfigResponse> saveCommonConfig(
            @RequestBody @Valid CommonConfigSaveRequest request) {
        log.info("保存公共配置请求");
        CommonConfigResponse response = applicationService.saveCommonConfig(request);
        return ResponseEntity.ok(response);
    }
    
    /**
     * 获取公共配置
     */
    @GetMapping
    public ResponseEntity<CommonConfigResponse> getCommonConfig() {
        log.info("获取公共配置请求");
        CommonConfigResponse response = applicationService.getCommonConfig();
        return ResponseEntity.ok(response);
    }
}
```

#### 3. Application Service 设计

```java
@Service
@RequiredArgsConstructor
@Slf4j
public class CommonConfigApplicationService {
    
    private final UserProfileRepository userProfileRepository;
    private final CommonConfigAssembler assembler;
    private final AiConfigSyncService aiConfigSyncService;
    private final JobSkillAnalysisAsyncService jobSkillAnalysisAsyncService;
    
    /**
     * 保存公共配置
     * 编排：保存配置 -> 同步AI配置 -> 触发异步分析
     */
    @Transactional
    public CommonConfigResponse saveCommonConfig(CommonConfigSaveRequest request) {
        try {
            // 1. 获取或创建 UserProfile
            UserProfile userProfile = userProfileRepository.findAll().stream()
                    .findFirst()
                    .orElse(new UserProfile());
            
            // 2. 使用 Assembler 转换数据
            assembler.toEntity(request, userProfile);
            
            // 3. 保存到数据库
            UserProfile saved = userProfileRepository.save(userProfile);
            
            // 4. 同步 AI 配置（如果有）
            if (request.getAiPlatformConfigs() != null) {
                aiConfigSyncService.syncDeepseekConfig(request.getAiPlatformConfigs());
            }
            
            // 5. 异步触发 AI 分析
            jobSkillAnalysisAsyncService.analyzeJobSkillAsync(saved.getId());
            
            // 6. 构建响应
            return CommonConfigResponse.builder()
                    .success(true)
                    .message("公共配置保存成功")
                    .timestamp(LocalDateTime.now())
                    .profileId(saved.getId())
                    .build();
                    
        } catch (Exception e) {
            log.error("保存公共配置失败", e);
            return CommonConfigResponse.builder()
                    .success(false)
                    .message("保存失败：" + e.getMessage())
                    .timestamp(LocalDateTime.now())
                    .build();
        }
    }
    
    /**
     * 获取公共配置
     */
    public CommonConfigResponse getCommonConfig() {
        UserProfile userProfile = userProfileRepository.findAll().stream()
                .findFirst()
                .orElse(new UserProfile());
        
        CommonConfigData data = assembler.toResponse(userProfile);
        
        return CommonConfigResponse.builder()
                .success(true)
                .message("获取配置成功")
                .timestamp(LocalDateTime.now())
                .data(data)
                .build();
    }
}
```

#### 4. Assembler 设计

```java
@Component
public class CommonConfigAssembler {
    
    /**
     * 将 Request DTO 转换为 Entity
     */
    public void toEntity(CommonConfigSaveRequest request, UserProfile profile) {
        // 黑名单配置
        if (request.getJobBlacklistKeywords() != null) {
            profile.setPositionBlacklist(request.getJobBlacklistKeywords());
        }
        if (request.getCompanyBlacklistKeywords() != null) {
            profile.setCompanyBlacklist(request.getCompanyBlacklistKeywords());
        }
        
        // 候选人信息
        if (request.getJobTitle() != null) {
            profile.setJobTitle(request.getJobTitle());
            profile.setRole(request.getJobTitle()); // 兼容旧字段
        }
        if (request.getSkills() != null) {
            profile.setSkills(request.getSkills());
            profile.setCoreStack(request.getSkills()); // 兼容旧字段
        }
        
        // ... 其他字段映射
    }
    
    /**
     * 将 Entity 转换为 Response DTO
     */
    public CommonConfigData toResponse(UserProfile profile) {
        return CommonConfigData.builder()
                .jobBlacklistKeywords(profile.getPositionBlacklist())
                .companyBlacklistKeywords(profile.getCompanyBlacklist())
                .jobTitle(profile.getJobTitle())
                .skills(profile.getSkills())
                // ... 其他字段
                .build();
    }
}
```

#### 5. Domain Service 设计

```java
@Service
@RequiredArgsConstructor
@Slf4j
public class AiConfigSyncService {
    
    private final DeepseekConfigRefreshService deepseekConfigRefreshService;
    private final ObjectMapper objectMapper;
    
    /**
     * 同步 Deepseek 配置
     */
    public void syncDeepseekConfig(Map<String, Object> aiPlatformConfigs) {
        try {
            String deepseekApiKey = extractDeepseekApiKey(aiPlatformConfigs);
            if (deepseekApiKey != null && !deepseekApiKey.isBlank()) {
                deepseekConfigRefreshService.updateApiKey(deepseekApiKey.trim());
                log.info("Deepseek API Key 已同步");
            }
        } catch (Exception e) {
            log.error("同步 Deepseek 配置失败", e);
            // 不抛出异常，避免影响主流程
        }
    }
    
    /**
     * 从配置中提取 Deepseek API Key
     */
    private String extractDeepseekApiKey(Map<String, Object> configs) {
        // 提取逻辑
        Object deepseekConfig = configs.get("deepseek");
        if (deepseekConfig instanceof Map) {
            Map<String, Object> deepseekMap = (Map<String, Object>) deepseekConfig;
            Object apiKey = deepseekMap.get("apiKey");
            return apiKey != null ? String.valueOf(apiKey) : null;
        }
        return null;
    }
}
```

---

## 实施步骤

### 第一步：创建 DTO（1小时）
1. 创建 `CommonConfigSaveRequest`
2. 创建 `CommonConfigResponse`
3. 创建 `CommonConfigData`
4. 添加 JSR-303 验证注解

### 第二步：创建 Assembler（1小时）
1. 创建 `CommonConfigAssembler`
2. 实现 `toEntity` 方法
3. 实现 `toResponse` 方法
4. 编写单元测试

### 第三步：创建 Domain Service（1小时）
1. 创建 `AiConfigSyncService`
2. 实现 `syncDeepseekConfig` 方法
3. 实现 `extractDeepseekApiKey` 方法
4. 编写单元测试

### 第四步：创建 Application Service（1.5小时）
1. 创建 `CommonConfigApplicationService`
2. 实现 `saveCommonConfig` 方法
3. 实现 `getCommonConfig` 方法
4. 编写单元测试

### 第五步：重构 Controller（0.5小时）
1. 简化 `CommonConfigController`
2. 移除业务逻辑
3. 只保留协议处理
4. 编写集成测试

### 第六步：清理和优化（1小时）
1. 删除 Controller 中的工具方法
2. 更新相关文档
3. 代码审查
4. 性能测试

**总计工时**：约 6 小时

---

## 测试计划

### 单元测试

#### 1. Assembler 测试
```java
@Test
void testToEntity_shouldMapAllFields() {
    // Given
    CommonConfigSaveRequest request = createTestRequest();
    UserProfile profile = new UserProfile();
    
    // When
    assembler.toEntity(request, profile);
    
    // Then
    assertThat(profile.getJobTitle()).isEqualTo(request.getJobTitle());
    assertThat(profile.getSkills()).isEqualTo(request.getSkills());
    // ... 其他断言
}
```

#### 2. Domain Service 测试
```java
@Test
void testSyncDeepseekConfig_shouldCallRefreshService() {
    // Given
    Map<String, Object> configs = createTestConfigs();
    
    // When
    aiConfigSyncService.syncDeepseekConfig(configs);
    
    // Then
    verify(deepseekConfigRefreshService).updateApiKey(anyString());
}
```

#### 3. Application Service 测试
```java
@Test
void testSaveCommonConfig_shouldSaveAndSync() {
    // Given
    CommonConfigSaveRequest request = createTestRequest();
    UserProfile profile = new UserProfile();
    when(userProfileRepository.findAll()).thenReturn(List.of(profile));
    when(userProfileRepository.save(any())).thenReturn(profile);
    
    // When
    CommonConfigResponse response = applicationService.saveCommonConfig(request);
    
    // Then
    assertThat(response.getSuccess()).isTrue();
    verify(userProfileRepository).save(any());
    verify(aiConfigSyncService).syncDeepseekConfig(any());
}
```

### 集成测试

```java
@SpringBootTest
@AutoConfigureMockMvc
class CommonConfigControllerIntegrationTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Test
    void testSaveCommonConfig_shouldReturn200() throws Exception {
        // Given
        String requestJson = createTestRequestJson();
        
        // When & Then
        mockMvc.perform(post("/api/common/config/save")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true));
    }
}
```

---

## 预期收益

### 代码质量
- Controller 代码从 200+ 行减少到 20 行
- 代码职责清晰，易于理解
- 消除代码重复
- 提高代码可测试性

### 可维护性
- 新增配置项只需修改 DTO 和 Assembler
- 业务逻辑集中在 Application Service
- 易于扩展和修改

### 性能
- 事务边界更清晰
- 减少不必要的数据库查询
- 异步操作不阻塞主流程

---

## 风险评估

### 潜在风险
1. **兼容性风险**：旧字段映射可能遗漏
2. **测试风险**：测试覆盖不全面
3. **性能风险**：新增的对象转换可能影响性能

### 风险缓解
1. 保留旧字段映射逻辑，确保向后兼容
2. 编写完整的单元测试和集成测试
3. 进行性能测试，确保性能不降低
4. 分阶段上线，先在测试环境验证

---

## 参考资料

- [项目架构规则](../.cursorrules)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html)

---

**文档版本**: 1.0  
**创建日期**: 2025-01-XX  
**作者**: getjobs team  
**审核状态**: 待审核
