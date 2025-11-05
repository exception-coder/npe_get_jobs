# AI 模块开发文档

## 概述

AI 模块提供基于大语言模型（LLM）的能力封装，包括职位匹配、招呼语生成、岗位技能分析等功能。本模块采用提示词模板架构，支持灵活的 prompt 管理和版本迭代。

## 模块结构

```
ai/
├── common/              # 公共工具和枚举
├── greeting/            # 招呼语生成功能
├── job/                 # 职位匹配功能
│   ├── assembler/       # 提示词组装器
│   ├── dto/             # 数据传输对象
│   ├── service/         # 业务服务层
│   └── web/             # Web 控制器（可选）
├── job_skill/           # 岗位技能分析功能
├── infrastructure/      # 基础设施层
│   ├── llm/             # LLM 客户端抽象
│   └── template/        # 提示词模板管理
└── web/                 # 统一 Web API 层
```

## 新增 Prompt 后的完整开发流程

当需要新增一个 prompt 功能时，请按照以下步骤进行开发：

### 步骤 1: 创建 Prompt 模板文件

在 `src/main/resources/prompts/` 目录下创建 YAML 格式的提示词模板文件。

**文件命名规范：** `{功能名}-v{版本号}.yml`

**示例：** `job-match-v1.yml`

**模板结构：**

```yaml
id: "job-match-v1"                    # 模板 ID（必填，用于代码中引用）
description: "功能描述"                # 功能描述（可选，用于文档和日志）
segments:
  - type: SYSTEM                       # 系统角色消息
    content: |
      你是专业的...
  
  - type: GUIDELINES                   # 指导原则（可选）
    content: |
      判定规则：
      1. ...
  
  - type: USER                         # 用户输入模板
    content: |
      【输入字段1】
      {{{variable1}}}
      
      【输入字段2】
      {{{variable2}}}
      
      请返回结果...
  
  - type: FEW_SHOTS                    # 示例（可选）
    content: |
      示例1: ...
```

**变量占位符格式：** 使用 `{{{变量名}}}` 的形式，变量名建议使用下划线命名（如 `my_jd`、`job_title`）。

**支持的 Segment 类型：**
- `SYSTEM`: 系统角色消息，定义 AI 的角色和任务
- `GUIDELINES`: 指导原则，详细说明判定规则和输出格式要求
- `USER`: 用户输入模板，包含变量占位符
- `FEW_SHOTS`: 少样本示例，用于指导模型输出格式

### 步骤 2: 定义提示词变量常量

在对应功能模块的 `assembler` 包下创建或更新 `*PromptVariables` 类，定义变量名常量。

**文件位置：** `{模块}/assembler/{Module}PromptVariables.java`

**示例：**

```java
package getjobs.modules.ai.job.assembler;

/**
 * 职位匹配提示词变量常量
 */
public final class JobPromptVariables {
    private JobPromptVariables() {
        throw new UnsupportedOperationException("Utility class");
    }

    public static final String MY_JD = "my_jd";
    public static final String JD = "jd";
    public static final String JOB_TITLE = "job_title";
}
```

**命名规范：**
- 类名：`{功能名}PromptVariables`
- 常量名：与 YAML 模板中的变量名保持一致（全大写，下划线分隔）

### 步骤 3: 创建或更新 DTO 类

**请求 DTO：** `{模块}/dto/{功能名}Request.java`

用于接收 API 请求参数。

```java
package getjobs.modules.ai.job.dto;

import lombok.Data;

@Data
public class JobMatchRequest {
    private String myJd;
    private String jobDescription;
    private String jobTitle;
    private String templateId;  // 可选，用于指定模板版本
}
```

**响应 DTO：** `{模块}/dto/{功能名}Response.java` 或 `{功能名}Result.java`

用于封装 AI 返回的结果。

```java
package getjobs.modules.ai.job.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobMatchResult {
    @JsonProperty("matched")
    private boolean matched;
    
    @JsonProperty("reason")
    private String reason;
    
    @JsonProperty("confidence")  // 可选字段
    private String confidence;
}
```

**注意事项：**
- 使用 `@JsonProperty` 注解确保 JSON 字段名与 AI 返回的格式一致
- 如果字段为可选，在解析时设置默认值

### 步骤 4: 创建或更新 Assembler（提示词组装器）

在 `{模块}/assembler/` 包下创建或更新 `*PromptAssembler` 类。

**文件位置：** `{模块}/assembler/{Module}PromptAssembler.java`

**核心方法：**

```java
@Component
@RequiredArgsConstructor
public class JobPromptAssembler {
    private final TemplateRepository templateRepository;
    private final PromptRenderer renderer;

    /**
     * 组装提示词消息列表
     *
     * @param templateId 模板 ID
     * @param request    请求对象（或直接传入参数）
     * @return LLM 消息列表
     */
    public List<LlmMessage> assemble(String templateId, String myJd, String jd) {
        // 1. 准备变量映射
        Map<String, Object> variables = new HashMap<>();
        variables.put(JobPromptVariables.MY_JD, myJd);
        variables.put(JobPromptVariables.JD, jd);

        // 2. 获取模板
        PromptTemplate template = templateRepository.get(templateId);
        
        // 3. 组装消息列表
        List<LlmMessage> messages = new ArrayList<>();
        for (PromptTemplate.Segment segment : template.getSegments()) {
            String content = renderer.render(segment.getContent(), variables);
            switch (segment.getType()) {
                case SYSTEM -> messages.add(LlmMessage.system(content));
                case GUIDELINES -> messages.add(LlmMessage.system(content));
                case USER -> messages.add(LlmMessage.user(content));
                case FEW_SHOTS -> messages.add(LlmMessage.user(content));
            }
        }
        return messages;
    }
}
```

**注意事项：**
- 使用 `PromptRenderer` 渲染模板内容（替换变量占位符）
- `GUIDELINES` 和 `SYSTEM` 都作为 `system` 消息发送
- 如果有多个输入场景，可以创建多个 `assemble` 方法重载

### 步骤 5: 创建或更新 Service（业务服务层）

在 `{模块}/service/` 包下创建或更新服务类。

**文件位置：** `{模块}/service/{Module}Service.java`

**核心结构：**

```java
@Service
@RequiredArgsConstructor
@Slf4j
public class JobMatchAiService {
    private static final String DEFAULT_TEMPLATE_ID = "job-match-v1";
    
    private final JobPromptAssembler assembler;
    private final LlmClient llmClient;
    private final ObjectMapper objectMapper;

    /**
     * 主要业务方法
     */
    public JobMatchResult matchWithReason(String myJd, String jobDescription) {
        return matchWithReason(myJd, jobDescription, DEFAULT_TEMPLATE_ID);
    }

    /**
     * 可指定模板版本的方法
     */
    public JobMatchResult matchWithReason(String myJd, String jobDescription, String templateId) {
        // 1. 组装提示词
        List<LlmMessage> messages = assembler.assemble(templateId, myJd, jobDescription);
        
        // 2. 调用 LLM
        String rawResponse = llmClient.chat(messages).trim();
        
        // 3. 解析结果
        JobMatchResult result = parseResult(rawResponse);
        
        // 4. 记录日志
        log.info("Job match - template={}, matched={}", templateId, result.isMatched());
        log.debug("Raw AI response: {}", rawResponse);
        
        return result;
    }

    /**
     * 解析 AI 返回的 JSON 结果
     */
    private JobMatchResult parseResult(String content) {
        if (content == null) {
            throw new IllegalStateException("AI response content is null");
        }

        String normalized = content.trim();
        
        try {
            // 尝试解析 JSON
            JobMatchResult result = objectMapper.readValue(normalized, JobMatchResult.class);
            // 设置默认值（如果需要）
            if (result.getConfidence() == null) {
                result.setConfidence("high");
            }
            return result;
        } catch (Exception e) {
            log.error("Failed to parse AI response: {}", e.getMessage());
            throw new IllegalStateException("Unable to parse response: " + content, e);
        }
    }
}
```

**注意事项：**
- 使用 `ObjectMapper` 解析 JSON 响应
- 做好异常处理和日志记录
- 如果支持向后兼容，可以保留旧的解析逻辑

### 步骤 6: 创建或更新 Web Controller（可选）

如果需要提供 REST API，在 `{模块}/web/` 或统一的 `web/` 包下创建 Controller。

**示例：**

```java
@RestController
@RequestMapping("/api/ai/job")
@RequiredArgsConstructor
public class JobMatchAiController {
    private final JobMatchAiService jobMatchAiService;

    @PostMapping("/match")
    public ResponseEntity<JobMatchResult> match(@RequestBody JobMatchRequest request) {
        JobMatchResult result = jobMatchAiService.smartMatch(
                request.getMyJd(),
                request.getJobDescription(),
                request.getJobTitle()
        );
        return ResponseEntity.ok(result);
    }
}
```

**注意事项：**
- 使用 `@Valid` 注解进行参数校验（如果需要）
- 统一使用 `ResponseEntity` 返回结果
- 做好异常处理和错误响应

### 步骤 7: 测试

**单元测试示例：**

```java
@SpringBootTest
class JobMatchAiServiceTest {
    @Autowired
    private JobMatchAiService service;

    @Test
    void testMatchWithReason() {
        String myJd = "我期望从事后端开发工作...";
        String jobDescription = "招聘 Java 后端开发工程师...";
        
        JobMatchResult result = service.matchWithReason(myJd, jobDescription);
        
        assertNotNull(result);
        assertNotNull(result.getReason());
        // 更多断言...
    }
}
```

**集成测试：**

```bash
# 测试 API 接口
curl -X POST http://localhost:8080/api/ai/job-match \
  -H "Content-Type: application/json" \
  -d '{
    "myJd": "我期望从事后端开发工作...",
    "jobDescription": "招聘 Java 后端开发工程师..."
  }'
```

### 步骤 8: 文档更新

- 更新本 README 文档
- 如有必要，更新 API 文档（Swagger/OpenAPI）

## 最佳实践

### 1. Prompt 模板设计

- ✅ **明确的任务定义**：在 SYSTEM 段清楚说明 AI 的角色和任务
- ✅ **详细的判定规则**：在 GUIDELINES 段列出所有判定规则和边界情况
- ✅ **结构化的输出格式**：明确要求返回 JSON 格式，并给出示例
- ✅ **变量命名清晰**：使用有意义的变量名，避免歧义

### 2. 代码组织

- ✅ **职责分离**：Assembler 只负责组装，Service 负责业务逻辑
- ✅ **向后兼容**：新增字段时使用可选字段，并设置默认值
- ✅ **错误处理**：做好异常捕获和日志记录
- ✅ **代码复用**：如果多个 prompt 有相似逻辑，抽取公共方法

### 3. 版本管理

- ✅ **模板版本化**：使用 `-v1`、`-v2` 等后缀管理版本
- ✅ **兼容性测试**：新版本上线前进行充分测试
- ✅ **灰度发布**：可以在 Service 层实现 A/B 测试逻辑

### 4. 智能路由（多场景支持）

如果同一个功能需要支持多种输入场景（如完整描述 vs 仅职位名称），建议：

- ✅ **创建多个模板**：`job-match-v1.yml` 和 `job-match-by-title-v1.yml`
- ✅ **在 Service 层实现智能路由**：根据输入数据自动选择模板
- ✅ **添加置信度标识**：在响应中标识结果的置信度

**示例：**

```java
public JobMatchResult smartMatch(String myJd, String jobDescription, String jobTitle) {
    boolean hasValidJd = StringUtils.hasText(jobDescription) 
            && jobDescription.trim().length() >= MIN_JD_LENGTH;
    
    if (hasValidJd) {
        return matchWithReason(myJd, jobDescription);  // 高置信度
    } else if (StringUtils.hasText(jobTitle)) {
        return matchByTitle(myJd, jobTitle);  // 低置信度
    } else {
        throw new IllegalArgumentException("...");
    }
}
```

## 示例：新增"基于职位名称的匹配"功能

本示例展示了如何新增 `job-match-by-title-v1` prompt 的完整流程：

### 1. 创建模板文件

`src/main/resources/prompts/job-match-by-title-v1.yml` ✅

### 2. 更新变量常量

`JobPromptVariables.java` - 添加 `JOB_TITLE` 常量 ✅

### 3. 更新 DTO

- `JobMatchRequest.java` - 添加 `jobTitle` 字段 ✅
- `JobMatchResult.java` - 添加 `confidence` 字段 ✅

### 4. 扩展 Assembler

`JobPromptAssembler.java` - 添加 `assembleByTitle()` 方法 ✅

### 5. 扩展 Service

`JobMatchAiService.java` - 添加 `matchByTitle()` 和 `smartMatch()` 方法 ✅

### 6. 更新 Controller

`AiController.java` - 更新 `matchJob()` 方法支持智能匹配 ✅

## 常见问题

### Q1: 模板文件修改后需要重启应用吗？

**A:** 是的。`TemplateRepository` 在应用启动时（`@PostConstruct`）加载所有模板文件到内存中。修改模板文件后需要重启应用才能生效。

### Q2: 如何支持多个版本的 prompt 同时存在？

**A:** 可以为不同版本创建不同的模板文件（如 `job-match-v1.yml` 和 `job-match-v2.yml`），在 Service 层根据参数选择使用哪个版本。也可以实现 A/B 测试逻辑。

### Q3: 如何调试 prompt 的效果？

**A:** 
1. 查看日志：Service 层会记录 AI 的原始响应（DEBUG 级别）
2. 使用单元测试：编写测试用例验证各种输入场景
3. 直接调用 LLM：可以临时修改代码，直接打印组装后的消息列表

### Q4: AI 返回的格式不符合预期怎么办？

**A:** 
1. 在 GUIDELINES 中更明确地指定输出格式要求
2. 在解析逻辑中添加容错处理（正则表达式、字符串截取等）
3. 添加示例（FEW_SHOTS）引导模型输出正确格式

### Q5: 如何优化 prompt 的成本和性能？

**A:**
1. **精简内容**：去除冗余的描述，保留核心指令
2. **使用缓存**：对于相同输入，可以缓存结果
3. **批量处理**：如果有多条请求，考虑批量调用
4. **模型选择**：根据任务复杂度选择合适的模型

## 参考

- [Spring AI 文档](https://docs.spring.io/spring-ai/reference/)
- [Prompt Engineering 最佳实践](https://platform.openai.com/docs/guides/prompt-engineering)
