# 开发日志（按时间倒序，最新在上）

## 2026-03-21 - README 增加智谱 GLM 邀请区块与海报图

- 任务：在根目录 README 中补充「智谱 GLM 编程搭子」邀请说明，并嵌入官方活动海报（含二维码），方便读者扫码了解订阅与邀请优惠。
- 修改/新增文件：
  - `README.md`（在「获取一对一指导」之前新增独立邀请小节与图片引用）
  - `docs/images/readme/glm-invitation.png`（新增海报资源）
  - `docs/images/README.md`（目录说明中登记 `glm-invitation.png`）
- 关键设计决策：图片放入既有 `docs/images/readme/`，与 README 其他插图一致；文案标明优惠以官方为准，并附与微信二维码类似的本地打开提示。
- 变更原因：用户要求在文档中增加邀请展示区块并配上提供的活动图。

## 2026-03-20 - 批量提交剩余工作区变更（全量 git add）

- 任务：将当前工作区内所有未被 `.gitignore` 忽略的改动一次性提交，避免长期散落未提交文件。
- 涉及范围（摘要）：`git-smart-push` Skill 更新；移除大量历史 `docs/` 与 `vitaPolish` 文档、调整 `frontend/dist`；前端 Onboarding / 岗位明细 / 路由等；后端 `getjobs` 模块、AI、Playwright、任务投递与字典等 Java 变更；新增 Onboarding 与提示词相关文件等。
- 修改说明：使用 `git add -A` 按忽略规则纳入全部待提交路径。
- 变更原因：用户要求将本地剩余改动全部入库，便于协作与分支状态干净。

## 2026-03-20 - README 开发日志整理（新功能 / BUG修复 / 重大变更）

- 任务：整理当前开发日志内容，按「新功能支持」与「BUG修复」归类，并在 README 中突出重大变更。
- 修改文件：
  - `README.md`（新增「新功能支持」「BUG修复」两大板块，并补充重大变更小节）
  - `docs/dev-log.md`（追加本次整理记录）
- 关键设计决策：采用“重大变更优先 + 常规条目补充”的结构，让非开发同学也能快速理解版本价值与稳定性改进。
- 变更原因：当前 dev-log 信息量较大，用户希望在 README 直接查看可读性更高的功能与修复摘要，便于对外展示与内部同步。

## 2026-03-20 - OnboardingDialog 确认时保存用户配置 + 异步 AI 打招呼生成

- 任务：点击「确认并开始求职」时将 AI 解析结果写入公共配置，并触发异步岗位技能分析
- 修改文件：
  - `frontend/src/modules/intelligent-job-search/api/onboardingApi.ts`：新增 `saveOnboardingProfile` 函数，调用 `/api/ai/onboarding/save-profile`
  - `frontend/src/modules/intelligent-job-search/components/OnboardingDialog.vue`：`confirm` 改为 async，先调用 `saveOnboardingProfile` 再执行 `complete`
  - `src/main/java/getjobs/modules/ai/onboarding/web/OnboardingController.java`：新增 `POST /save-profile` 接口，仅更新目标职位、工作年限、薪资下限、薪资上限、核心技能、职业意向、领域经验、个人亮点；保存后调用 `JobSkillAnalysisAsyncService.analyzeJobSkillAsync` 异步生成 AI 打招呼内容

## 2026-03-20 - 修复 PlaywrightService 启动时 page 对象冲突异常

- 任务：修复应用启动失败，报 `Cannot find object to call __adopt__: page@...`
- 根本原因：`launchPersistentContext` 加载 Chrome 扩展时，扩展后台页异步打开，导致 Playwright 内部 page 表与 `context.newPage()` 调用时机冲突
- 修改文件：`src/main/java/getjobs/infrastructure/playwright/PlaywrightService.java`
- 修复方式：在 `launchPersistentContext` 之后、首次 `newPage()` 之前加 `Thread.sleep(2000)` 等待扩展初始化完成（`BrowserContext` 无 `waitForTimeout` 方法，改用 `Thread.sleep`）

## 2026-03-20 - 启动完成后主动刷新 Deepseek ChatModel

- 任务：应用启动完成时主动触发 Deepseek ChatModel 配置刷新，确保 RefreshScope Bean 以最新配置装配。
- 变更文件：
  - 修改 `src/main/java/getjobs/infrastructure/ai/config/DeepseekConfigRefreshService.java`（新增 `refreshChatModel()`：直接调 `refreshScope.refreshAll()` 强制清空 RefreshScope 缓存）
  - 修改 `src/main/java/getjobs/bootstrap/GetJobsDirectoryBootstrapRunner.java`（注入 `DeepseekConfigRefreshService`，在 `run()` 末尾调用 `refreshChatModel()`）
- 设计决策：刷新逻辑封装在 Service 方法中，Runner 只负责调用时机编排，保持职责分离。

## 2026-03-20 - DeepseekConfigController API Key 验证失败时自动回滚

- 任务：更新 API Key 验证失败时，自动回滚到更新前的旧值（为空或原有效值）。
- 变更文件：
  - 修改 `src/main/java/getjobs/infrastructure/ai/config/DeepseekConfigRefreshService.java`（新增 `updateApiKeyWithValidation()`：保存前记录旧值，验证失败时调 `rollbackApiKey()` 回滚；新增 `rollbackApiKey()`：有旧值则还原，无旧值则清空并触发刷新）
  - 修改 `src/main/java/getjobs/controller/DeepseekConfigController.java`（`updateApiKey` 改为直接调 `updateApiKeyWithValidation()`，简化 Controller 逻辑）
- 设计决策：回滚逻辑内聚在 Service 层，Controller 保持薄；回滚失败时只记录日志，不二次抛出。


## 2026-03-20 - 修复 OnboardingDialog 弹出两次 + API Key 状态判断错误

- 任务：引导框重复弹出两次；`checkApiKey` 将后端返回的 `"未配置"` 字符串误判为已配置。
- 变更文件：
  - 修改 `frontend/src/App.vue`（删除多余的 `<OnboardingDialog />` 及其 import，弹框统一由 `CommonConfigView.vue` 管理）
  - 修改 `frontend/src/modules/intelligent-job-search/components/OnboardingDialog.vue`（`checkApiKey` 增加 `res.apiKey !== '未配置'` 判断，排除后端未配置时返回的占位字符串）
- 设计决策：引导框只在 `CommonConfigView` 挂载一处，避免全局 `App.vue` 和页面组件各挂一个导致重复弹出。


## 2026-03-20 - DeepseekConfigController 保存 API Key 后增加有效性验证

- 任务：`POST /api/deepseek/api-key` 刷新配置后，通过 Deepseek ChatModel 发送一条极简消息验证 Key 是否有效，无效时将 Deepseek 返回的失败原因透传给前端。
- 变更文件：
  - 修改 `src/main/java/getjobs/infrastructure/ai/config/DeepseekConfigRefreshService.java`（注入 `LlmClient`；新增 `validateApiKey()` 方法，调用 `llmClient.chat(List.of(LlmMessage.user("hi")))` 探测，异常时通过 `extractErrorReason()` 提取根因消息返回；新增 `extractErrorReason()` 递归 getCause 提取最底层错误）
  - 修改 `src/main/java/getjobs/controller/DeepseekConfigController.java`（`updateApiKey` 保存成功后调 `validateApiKey()`，验证失败时 `success=false` 并将 Deepseek 错误原因作为 `message` 返回）
- 设计决策：验证逻辑放在 `DeepseekConfigRefreshService` 而非 Controller，保持 Controller 薄；探测消息使用最短内容 `"hi"` 减少 token 消耗。


## 2026-03-20 - OnboardingDialog API Key 区块改为合并在输入阶段

- 任务：将 API Key 输入区块从独立弹框步骤改为与输入阶段合并显示，保存成功后才解锁「跳过」和「AI 解析」按钮。
- 变更文件：
  - 修改 `frontend/src/modules/intelligent-job-search/components/OnboardingDialog.vue`（去掉 `apikey` Step，改用 `apiKeySaved` 布尔标志；API Key 区块内嵌到 `input` 步骤顶部，保存成功后变为绿色已配置提示；底部「跳过」和「AI 解析」按钮增加 `!apiKeySaved` 禁用条件；新增 `.apikey-section`、`.apikey-input-row` 等样式）
- 设计决策：单一弹框内完成所有配置，避免多弹框体验割裂。


## 2026-03-20 - OnboardingDialog 新增 DeepSeek API Key 强制录入步骤

- 任务：引导框增加 `apikey` 步骤作为第一步，强制用户录入 DeepSeek API Key 后才可继续；若后端已有 Key 则自动跳过该步骤。
- 变更文件：
  - 修改 `frontend/src/modules/intelligent-job-search/components/OnboardingDialog.vue`（`Step` 类型新增 `'apikey'`；`onMounted` 时调 `GET /api/deepseek/api-key` 检查是否已配置，已配置则直接进 `input` 步骤；新增 `saveApiKey()` 调 `POST /api/deepseek/api-key`，成功后进 `input` 步骤；新增 apikey 阶段 template，含 Key 输入框和错误提示；`headerTitle`/`headerSubtitle` computed 补充 `apikey` 分支）
- 设计决策：后端已存在 `/api/deepseek/api-key` GET/POST 接口，前端直接复用；`apikey` 步骤不提供跳过按钮，强制录入。


## 2026-03-20 - DevToolbar 新增 LocalStorage 管理功能

- 任务：在开发工具栏中补充 LocalStorage 管理入口，方便开发调试时查看和修改本地存储数据。
- 变更文件：
  - 修改 `frontend/src/components/DevToolbar.vue`（工具栏新增橙色 LocalStorage 按钮；点击弹出 v-dialog 管理面板，支持增删改查：列表展示所有 key/value、顶部新增行、行内编辑、单条删除、清空全部、手动刷新）
- 设计决策：管理逻辑完全内聚在 DevToolbar 组件内，不引入额外依赖；弹框仅在 `import.meta.env.DEV` 为 true 时可访问，不影响生产包。


## 2026-03-20 - 修复 GetJobsDirectory 目录创建晚于数据源初始化的问题

- 任务：`GetJobsDirectoryBootstrapRunner` 通过 `ApplicationRunner` 在启动后创建 `~/getjobs` 目录，但 SQLite 数据源在 Spring 上下文初始化时就已尝试打开数据库文件，导致目录不存在异常先于 Runner 执行出现。
- 变更文件：
  - 修改 `src/main/java/getjobs/GetJobsApplication.java`（`main()` 中在 `SpringApplication.run()` 前调用 `ensureGetJobsDirectory()`，提前创建 `~/getjobs` 目录；新增 `import java.nio.file.Files/Paths`）
- 设计决策：目录创建前置到 `main()` 方法，保证任何 Spring Bean 初始化之前目录已存在；`GetJobsDirectoryBootstrapRunner` 中的同名方法保留（幂等），不影响去重逻辑。
- 变更原因：Spring 数据源初始化早于 `ApplicationRunner`，首次启动时 SQLite 因目录不存在报错，需在上下文启动前完成目录创建。

## 2026-03-20 - AI 提示词扩展页：新增调用验证区块

- 任务：在 `AiPromptExtensionView.vue` 每个规则管理卡片右侧补充调用验证区块，保存规则后可直接填入变量验证效果。
- 变更文件：
  - 修改 `frontend/src/modules/intelligent-job-search/views/AiPromptExtensionView.vue`（规则区块改为左右两列布局，右侧新增验证卡片；职位匹配验证调用 `/api/ai/job/match-with-reason`，企业评估验证调用 `/api/ai/company/evaluate`；结果展示 matched/reason 及 risk_score chip）
  - 修改 `src/main/java/getjobs/modules/ai/job/web/JobMatchAiController.java`（新增 POST `/api/ai/job/match-with-reason`，返回 `JobMatchResult` 含 matched/reason/confidence）

## 2026-03-20 - 企业评估补充规则：后端接口 + 前端配置页扩展

- 任务：`company-evaluation-v1.yml` 支持用户自定义扣分/加分规则，`JobMatchRulesView.vue` 新增企业评估规则配置区块。
- 变更文件：
  - 修改 `src/main/resources/prompts/company-evaluation-v1.yml`（注入 `{{extra_deductions}}` / `{{extra_bonuses}}` 条件块）
  - 修改 `src/main/java/getjobs/modules/ai/company/assembler/CompanyPromptVariables.java`（新增两个变量常量）
  - 修改 `src/main/java/getjobs/modules/ai/company/assembler/CompanyEvaluationPromptAssembler.java`（新增字段 + getter/setter + 注入变量）
  - 修改 `src/main/java/getjobs/modules/ai/company/web/CompanyEvaluationController.java`（新增 GET/POST `/api/ai/company/extra-rules`）
  - 新增 `frontend/src/modules/intelligent-job-search/api/companyRulesApi.ts`
  - 修改 `frontend/src/modules/intelligent-job-search/views/JobMatchRulesView.vue`（新增企业评估规则区块）
- 设计决策：
  - 扣分/加分规则分两个独立列表管理，一次 POST 同时提交两者。
  - 规则存 Spring Bean 内存，服务重启清空（与职位匹配规则一致）。

## 2026-03-20 - 新增 AI 匹配补充规则管理接口与前端配置页

- 任务：提供 REST 接口读写 `JobPromptAssembler.extraRules`，前端新增「AI匹配规则」配置页。
- 变更文件：
  - 修改 `src/main/java/getjobs/modules/ai/job/assembler/JobPromptAssembler.java`（新增 `extraRules` 字段 + getter/setter）
  - 修改 `src/main/java/getjobs/modules/ai/job/web/JobMatchAiController.java`（新增 GET/POST `/api/ai/job/extra-rules`）
  - 新增 `frontend/src/modules/intelligent-job-search/api/jobMatchRulesApi.ts`
  - 新增 `frontend/src/modules/intelligent-job-search/views/JobMatchRulesView.vue`
  - 修改 `frontend/src/router/index.ts`（注册 `/ai/job-match-rules` 路由）
  - 修改 `frontend/src/App.vue`（侧边栏添加「AI匹配规则」入口，标题/副标题注册）
- 设计决策：
  - `extraRules` 存储在 Spring Bean 内存中，服务重启后清空（当前无持久化需求）。
  - 前端支持动态增删规则条目，保存时过滤空行后提交。

## 2026-03-20 - 职位匹配提示词支持用户动态补充规则

- 任务：`job-match-v1.yml` 提示词及 `JobMatchAiService` 支持传入用户自定义补充规则数组，注入到 GUIDELINES 中，优先级高于默认规则。
- 变更文件：
  - 修改 `src/main/resources/prompts/job-match-v1.yml`
  - 修改 `src/main/java/getjobs/modules/ai/job/assembler/JobPromptVariables.java`
  - 修改 `src/main/java/getjobs/modules/ai/job/assembler/JobPromptAssembler.java`
  - 修改 `src/main/java/getjobs/modules/ai/job/service/JobMatchAiService.java`
- 设计决策：
  - `extraRules: List<String>` 透传至所有公共方法（`matchWithReason`、`matchByTitle`、`smartMatch`），默认传空列表保持向后兼容。
  - `formatExtraRules` 将列表格式化为有序编号文本，非空时注入提示词 `{{extra_rules}}` 占位符，空时占位符块自动隐藏（Mustache `{{#extra_rules}}` 条件块）。
  - 规则示例：`["Java开发技术管理岗（组长、技术负责人）也可接受，无需判定为不符"]`。

## 2026-03-19 - 优化 onboarding-parse-v1 提示词：未提及字段自动补全

- 任务：引导框解析提示词增加智能补全逻辑，当用户未填写薪资、技能、职业意向、亮点、领域经验时，根据岗位和年限自动推断补全。
- 变更文件：
  - 修改 `src/main/resources/prompts/onboarding-parse-v1.yml`
- 设计决策：
  - 对 minSalary/maxSalary/skills/careerIntent/highlights/domainExperience 六个字段启用补全，其余字段（jobBlacklist/companyBlacklist）未提及仍返回空，不推断。
  - domainExperience 推断 2-4 个市场需求强、技术挑战大、与岗位技术栈交集大的领域。
  - 定级规则：1年以下初级，1-3年中级，3-5年高级（保守，不写资深），5-8年资深，8年以上专家/架构师。
  - jobTitle 和 yearsOfExperience 均未提及时，六个字段均不补全，避免无根据推断。
- 变更原因：用户填写引导框时往往只写几句话，若大量字段为空则后续 AI 匹配质量差，自动补全可提升首次使用体验。

## 2026-03-19 - 重构调试按钮为通用 DevToolbar 组件

- 任务：将 CommonConfigView 中独立的「引导框调试」按钮提取为可复用的 DevToolbar 调试栏组件，统一管理开发期调试入口。
- 变更文件：
  - 新增 `frontend/src/components/DevToolbar.vue`（全局调试栏组件）
  - 修改 `frontend/src/modules/intelligent-job-search/views/CommonConfigView.vue`（替换独立按钮为 DevToolbar）
- 设计决策：
  - `DevToolbar` 接收 `actions: { label, handler, color? }[]` prop，调用方注入具体调试操作，组件本身不耦合业务。
  - 组件内部通过 `import.meta.env.DEV` 控制渲染，生产构建自动移除，无需调用方处理。
  - 点击虫子图标展开/收起操作列表，支持后续扩展更多调试项。
  - 删除 CommonConfigView 中的 `.onboarding-debug-btn` CSS 及 `isDev` 变量，由 DevToolbar 内部处理。
- 变更原因：后期调试功能会增多，统一入口便于管理，避免各 View 散落调试代码。

## 2026-03-19 - 开发环境引导框调试入口

- 任务：开发环境下随时可点击按钮重新弹出 OnboardingDialog，方便调试引导流程。
- 变更文件：
  - 修改 `frontend/src/modules/intelligent-job-search/components/OnboardingDialog.vue`（暴露 `open()` 方法）
  - 修改 `frontend/src/modules/intelligent-job-search/views/CommonConfigView.vue`（添加调试按钮）
- 设计决策：
  - `OnboardingDialog` 新增 `open()` 方法（重置 step 为 input 并显示对话框），通过 `defineExpose` 暴露给父组件。
  - `CommonConfigView` 用 `import.meta.env.DEV` 控制按钮仅在开发环境渲染，生产构建自动移除。
  - 按钮固定定位于右下角，不影响正常布局。
- 变更原因：引导框首次使用后 localStorage 标记为已完成，无法重复触发，需要调试入口绕过该限制。

## 2026-03-19 - 重构 OnboardingParseService 提示词外置化

- 任务：将 `OnboardingParseService` 中硬编码的 system prompt 迁移到 `prompts/` 目录下的 YAML 文件，遵循与 `CompanyEvaluationAiService` 一致的模板化模式。
- 变更文件：
  - 新增 `src/main/resources/prompts/onboarding-parse-v1.yml`（求职信息结构化提取提示词）
  - 新增 `src/main/java/getjobs/modules/ai/onboarding/assembler/OnboardingPromptVariables.java`
  - 新增 `src/main/java/getjobs/modules/ai/onboarding/assembler/OnboardingPromptAssembler.java`
  - 重写 `src/main/java/getjobs/modules/ai/onboarding/service/OnboardingParseService.java`
- 设计决策：
  - 新增 `OnboardingPromptAssembler`，注入 `TemplateRepository` + `PromptRenderer`，与 `CompanyEvaluationPromptAssembler` 结构完全一致。
  - `OnboardingParseService.parse(String)` 保持原有公开签名，内部委托 `OnboardingPromptAssembler` 组装消息后调用 `LlmClient`。
  - `DEFAULT_TEMPLATE_ID = "onboarding-parse-v1"` 对应新建的 yml 文件。
- 变更原因：提示词硬编码在 Java 代码中不便于迭代优化，外置 YAML 可独立调整 prompt 内容，无需重新编译。

## 2026-03-19 - 引导弹框升级为 AI 驱动的自然语言配置

- 任务：将首次使用引导弹框从传统表单升级为「下一代 AI 应用」体验：用户用自然语言描述自己，AI 自动解析并填充所有候选人画像字段。
- 变更文件：
  - 新增 `src/main/java/getjobs/modules/ai/onboarding/dto/OnboardingParseRequest.java`
  - 新增 `src/main/java/getjobs/modules/ai/onboarding/dto/OnboardingParseResponse.java`
  - 新增 `src/main/java/getjobs/modules/ai/onboarding/service/OnboardingParseService.java`
  - 新增 `src/main/java/getjobs/modules/ai/onboarding/web/OnboardingController.java`
  - 新增 `frontend/src/modules/intelligent-job-search/api/onboardingApi.ts`
  - 重写 `frontend/src/modules/intelligent-job-search/components/OnboardingDialog.vue`
  - 修改 `frontend/src/modules/intelligent-job-search/views/CommonConfigView.vue`
- 设计决策：
  - 后端新增 `POST /api/ai/onboarding/parse`，复用 `LlmClient`，system prompt 约束只提取用户明确提及的字段，未提及返回 null 或空数组，不编造。
  - 前端三阶段 UI：input（自然语言输入 + 地理定位）→ parsing（脉冲动画 + 滚动提示文案）→ confirm（分组可内联编辑结果）。
  - onOnboardingDone 扩展为接收全量字段写入 state.form。
- 变更原因：传统表单引导体验落后；AI 驱动自然语言配置是下一代应用的核心差异，降低填写门槛同时提升配置完整度。

## 2026-03-19 - 新增首次使用引导弹框与浏览器定位

- 任务：CommonConfigView 初始化时弹出引导对话框，邀请用户填写目标职位、工作年限、薪资期望，并通过浏览器 Geolocation API 推送所在位置。
- 变更文件：
  - 新增 `frontend/src/modules/intelligent-job-search/components/OnboardingDialog.vue`
  - 修改 `frontend/src/modules/intelligent-job-search/views/CommonConfigView.vue`
- 设计决策：
  - 引导弹框仅首次显示，通过 `localStorage` 键 `onboarding_completed` 标记已完成，刷新后不再弹出。
  - 对话框打开时自动调用 `navigator.geolocation.getCurrentPosition`；若被拒绝则显示「授权获取」按钮供手动触发；位置坐标通过 `done` 事件向父组件透传。
  - 用户点击「跳过」时不触发 `done` 事件，表单保持原有加载值；点击「开始求职」校验必填项后将数据写入 `state.form`。
- 变更原因：用户首次使用时缺少引导，容易跳过候选人画像配置，导致 AI 匹配精度下降。

## 2026-03-18 - 完善 git-smart-push：新分支推送与 upstream 判断

- 任务：补充 `git-smart-push` Skill，在推送步骤中明确“如何判断当前分支是否新分支/是否已设置 upstream”，并给出对应的 `git push -u` 推荐用法。
- 变更文件：`.cursor/skills/git-smart-push/SKILL.md`。
- 设计决策：通过 `git rev-parse @{u}` 判断是否设置上游分支，通过 `git ls-remote --heads origin <branch>` 判断远端是否存在同名分支；两者任一不满足即视为新分支，推送时使用 `-u` 建立跟踪。
- 变更原因：把“新分支也一并推送到远端”的逻辑从错误处理提升为主流程步骤，减少遗漏与重复操作。

## 2026-03-18 - 创建 release/v1.1.0 分支并更新 pom 版本号

- 任务：按“先更新 `pom.xml` 版本号再打分支”的流程，从 `main` 创建新分支 `release/v1.1.0`。
- 变更文件：`pom.xml`（版本号更新为 `v1.1.0`）。
- 设计决策：由于本地环境未安装 `mvn`/`mvnw`，版本读取与校验以 `pom.xml` 顶部 `<version>` 为准；分支命名采用 `release/<version>` 便于识别发布线。
- 变更原因：确保每条分支与其构建产物版本号一致，避免后续发布/回滚时版本混乱。

## 2026-03-18 - 新增“打分支前先更新 pom 版本号”Skill

- 任务：新增一个 Cursor Skill，要求在创建分支前先读取并展示 `pom.xml` 当前版本号，让用户输入目标分支版本号，并在 `main` 分支上更新 `pom.xml` 版本后再创建新分支。
- 变更文件：新增 `.cursor/skills/git-branch-bump-pom-version/SKILL.md`；未改动业务代码。
- 设计决策：版本读取优先使用 Maven 的 `help:evaluate`，避免依赖行号；版本更新使用 `versions:set` 统一修改；默认分支名用 `release/<version>`，但允许用户按团队规范覆盖。
- 变更原因：把“先改版本再打分支”的约束固化为可复用流程，减少遗漏与口头约定带来的返工。

## 2026-03-18 - Boss 岗位卡片点击支持任务中断

- 任务：点击所有岗位卡片时增加任务中断检查，支持用户取消后及时退出循环。
- 变更文件：`BossElementLocators.java`（新增 `InterruptedChecker` 回调接口，点击前后检查中断并处理 InterruptedException）；`BossRecruitmentServiceImpl.java`（调用点击方法时传入 `checkInterrupted`）。
- 设计决策：通过回调注入中断检查，避免在工具类内耦合具体服务实现；被中断时记录日志并安全返回。
- 变更原因：点击岗位卡片循环可能耗时较长，需要响应取消信号及时退出。

## 2026-03-18 - Playwright Cookie 恢复与持久化修复

- 任务：修复 Cookie 加载/保存中的数据校验与注入异常问题，确保恢复成功率。
- 变更文件：`CookieManager.java`（空数据拦截、逐条容错解析、domain/url 互斥规则、保存前等待 NETWORKIDLE、Cookie JSON 生成提取为方法）。
- 设计决策：加载时跳过无效条目并保留其余有效 Cookie；仅在缺少 domain 时设置 url 避免 Playwright 异常。
- 变更原因：部分 Cookie 数据缺失字段或同时存在 domain+url 会导致 addCookies 失败，需提升健壮性。

## 2026-03-18 - Playwright 初始化页面增加重建与重试

- 任务：修复初始化阶段 `page.reload` 可能因页面对象失效导致异常的问题（Object doesn't exist）。
- 变更文件：`PlaywrightService.java`（抽出 `initializePlatformPage`：初始化失败时重建 Page 并重试一次；`reload` 前检查 `page.isClosed()`；失败时安全关闭页面）。
- 设计决策：初始化阶段允许单次重试，避免因单个平台页崩溃导致整体服务启动失败。
- 变更原因：页面在加载/刷新时可能被反爬或崩溃，Playwright Response 失效引发异常，需要容错。

## 2026-03-16 - 前端 node_modules 误提交回滚与忽略规则补全

- 任务：线上仓库中误将 `frontend/node_modules` 目录提交并推送，需要从 Git 版本历史中停止跟踪该目录，并完善前端相关的忽略规则。
- 变更文件：`.gitignore`（新增 `node_modules/`、`frontend/node_modules/`、`frontend/dist/`、`frontend/.vite/` 忽略配置）；`README.md`（补充二维码无法加载时在本地通过 `docs/images/readme/wechat-contact.png` 直接打开图片的说明）；Git 索引中删除已跟踪的 `frontend/node_modules` 文件，保留本地实际目录。
- 设计决策：通过 `git rm -r --cached frontend/node_modules` 仅从版本库索引移除已跟踪文件，不删除本地物理目录；在 `.gitignore` 中显式忽略前端构建产物与依赖，防止后续再次误提交。
- 变更原因：`node_modules` 体积大且为构建产物，不应纳入版本控制；补充 README 说明是为了解决部分环境下二维码图片无法在线加载的问题，并给出本地查看路径。

## 2026-03-16 - 基础设施包结构重构：common/infrastructure → infrastructure/

- 任务：将 `common/infrastructure/` 下所有基础设施代码迁移到顶层 `infrastructure/` 包，统一归集，符合 DDD-lite 规范。
- 变更范围：10 个子包（accesslog/asyncexecutor/auth/datasource/health/queue/repository/task/tomcat/webclient）从 `getjobs.common.infrastructure.*` 迁移到 `getjobs.infrastructure.*`，涉及 ~150 个文件的 package 声明、import 语句、全限定类名引用批量替换。
- 执行步骤：
  1. `git mv` 批量移动包目录，保留 git 历史
  2. `sed` 批量替换所有 Java 文件的 `package getjobs.common.infrastructure.` → `package getjobs.infrastructure.`
  3. `sed` 批量替换全项目 `import getjobs.common.infrastructure.` → `import getjobs.infrastructure.`
  4. `sed` 批量替换代码中的全限定类名引用（非 import 行）`getjobs.common.infrastructure.` → `getjobs.infrastructure.`
  5. 删除空目录 `common/infrastructure/`，保留 `common/` 下的 `dto/enums/service/util`（非基础设施）
  6. 更新 `backend.md` 规范说明，新增 `infrastructure/` 节点，列出所有子包
- 设计决策：`infrastructure/` 统一归集所有技术实现（AI 平台适配、访问日志、异步执行器、认证拦截器、数据源配置、健康检查、队列任务、通用仓储、定时任务、Tomcat 配置、HTTP 客户端）；`common/` 仅保留业务无关的通用模块（dto/enums/service/util）。
- 验证：Maven 编译通过，所有变更已提交推送（commit `3cefe236`）。
- 变更原因：历史遗留的 `common/infrastructure/` 与新建的 `infrastructure/ai/` 并存，导致基础设施代码分散在两处，不符合 DDD-lite 规范；统一归集后便于查找与维护。

## 2026-03-16 - 修复 RestClient.Builder 多 Bean 歧义导致应用启动失败

- 任务：Spring AI `OpenAiAutoConfiguration` 按类型注入 `RestClient.Builder` 时发现两个 Bean（`deepseekApiRestClientBuilder`、`qwenApiRestClientBuilder`），抛出 `NoUniqueBeanDefinitionException` 导致应用启动失败。
- 变更文件：`WebClientInfrastructureConfig.java`（新增 `@Primary RestClient.Builder restClientBuilder()` Bean，作为 Spring 自动配置的默认注入点）；删除放错位置的 `DefaultHttpClientConfig.java`（原建于 `infrastructure/ai/config`）。
- 设计决策：`@Primary` 让 Spring 自动配置按类型注入时优先拿到干净的默认 Bean；Deepseek/Qwen 专用 Builder 通过 `@Qualifier` 显式注入，不受影响；`WebClientInfrastructureConfig` 已有 `@Primary WebClient.Builder webClientBuilderDefault()`，RestClient.Builder 同样设为 primary 保持一致。
- 变更原因：用户反馈启动报错，根因是多个平台专用 RestClient.Builder Bean 导致 Spring 自动配置无法选择；按 Spring 最佳实践，通用 HTTP 客户端 Builder 应放在 `infrastructure/webclient/` 包下，设为 `@Primary` 作为默认注入点。

## 2026-03-16 - 公司评估前端平台选择适配

- 任务：评估按钮旁新增平台切换（Deepseek / 千问），前后端全链路传递 platform 参数。
- 变更文件：`CompanyEvaluationRequest.java`（新增 `platform` 字段）；`CompanyEvaluationController.java`（新增 `parsePlatform()` 将字符串解析为 `AiPlatform`，传入 service；默认 model override 改为 null，使用各平台默认模型）；`CompanyEvaluationAiService.java`（新增 `evaluate(..., AiPlatform platform)` 四参重载，调用 `llmClient.chat(platform, messages, modelOverride, 0.0)`，原三参重载委托调新重载）；`companyEvaluationApi.ts`（`evaluateCompany` 新增 `platform` 参数，序列化到请求体）；`CompanyEvaluationView.vue`（新增 `selectedPlatform` ref 默认 `DEEPSEEK`、`platformOptions` 常量、`v-btn-toggle` 平台切换 UI，`runEvaluate` 传入 `selectedPlatform.value`）。
- 设计决策：platform 为可选字符串，controller 解析时非法值静默回退 null（使用默认 DEEPSEEK），前端 toggle 设置 mandatory 保证始终有选中项；不传 model 时各平台使用其默认配置模型。
- 变更原因：用户需要在评估界面直接切换调用平台（Deepseek/千问）以对比不同平台效果。

## 2026-03-16 - 阿里千问（Qwen）平台接入

- 任务：新增阿里云千问作为第三个 AI 平台，与 Deepseek/OpenAI 并列可选。
- 变更文件：新增 `QwenGptConfig.java`（`qwenChatModel`、`qwenStreamingChatModel` Beans，使用 dashscope compatible-mode endpoint）；新增 `QwenApiHttpClientConfig.java`（`qwenApiWebClientBuilder`、`qwenApiRestClientBuilder` Beans，含 `QwenHttpLoggingInterceptor` 拦截器，注入 `enable_search:true` 并覆盖 `Content-Length`，与 Deepseek 相同机制）；`AiPlatform.java`（新增 `QWEN` 枚举值与 `QWEN_BEAN_NAME = "qwenChatModel"`）；`application-gpt.yml`（新增 `spring.ai.qwen` 配置块，含 `QWEN_API_KEY`、`QWEN_MODEL`、`QWEN_BASE_URL` 环境变量占位）。
- 设计决策：千问与 Deepseek 均兼容 OpenAI 接口格式，复用相同的拦截器模式；`SpringAiLlmClient.buildPrompt()` 中 QWEN 与 DEEPSEEK 共走 `DeepseekChatOptions` 路径（均需 enable_search）；不加 `@RefreshScope`（与 Deepseek 不同，千问不需要动态刷新）。
- 变更原因：用户需要接入千问以支持平台切换对比。

## 2026-03-16 - SpringAiLlmClient 重构为工厂模式支持多平台

- 任务：`SpringAiLlmClient` 原硬编码 `@Qualifier(DEEPSEEK_BEAN_NAME)` 注入单一 ChatModel，重构为通过 `ChatModelFactory` 按平台动态选择 ChatModel，支持 Deepseek / OpenAI / Qwen 等多平台切换。
- 变更文件：`LlmClient.java`（新增 `chat(messages, modelOverride, temperature)` 与 `chat(AiPlatform, messages, modelOverride, temperature)` 两个 default 重载）；`SpringAiLlmClient.java`（注入 `ChatModelFactory` 替代 `@Qualifier` 单一 ChatModel；新增 `chat(AiPlatform, ...)` 实现；`buildPrompt()` 按 platform switch：DEEPSEEK/QWEN 用 `DeepseekChatOptions`，OPENAI 用 `OpenAiChatOptions`；默认平台常量 `DEFAULT_PLATFORM = AiPlatform.DEEPSEEK`）。
- 设计决策：`ChatModelFactory` 构造时遍历 `AiPlatform.values()` 按 bean 名从 Spring 容器取 ChatModel 装入 Map，调用方通过枚举取模型，无需知道 Bean 名；`buildPrompt()` 仅在有 override（model/temperature）时构建自定义 Options，否则走默认 Bean 配置，避免覆盖配置文件中的参数。
- 变更原因：原实现只能调用 Deepseek，新增千问后需要按平台动态路由到对应 ChatModel。

## 2026-03-16 - 公司评估评分稳定性优化

- 任务：修复公司评估评分每次差异过大（如同一公司 50~70 分漂移）的问题，并强化提示词评分锚点。
- 变更文件：`LlmClient.java`（新增 `chat(messages, modelOverride, temperature)` default 方法）；`SpringAiLlmClient.java`（实现该重载，temperature/modelOverride 任一非空时使用 `DeepseekChatOptions`，否则走默认 Bean 配置）；`CompanyEvaluationAiService.java`（调用时固定传 `temperature=0.0`，其他场景不受影响）；`company-evaluation-v1.yml`（评分要求中增加分段锚点：9-10/7-8/5-6/3-4/0-2 各段含义，减少模型自由发挥空间）；`application-gpt.yml`（Deepseek 默认 temperature 保持 0.7，不影响其他调用）。
- 设计决策：temperature 参数通过 `LlmClient` 接口按调用方单独控制，不修改全局配置；评分类场景固定 temperature=0 保证确定性；分段锚点只给出大致区间含义，不强制枚举，保留联网搜索后模型的合理判断空间。
- 变更原因：评分漂移有两个来源——temperature=0.7 引入随机性、提示词缺乏评分锚点导致模型每次自由定标。联网搜索结果的不确定性无法消除，但通过以上两点可显著收窄漂移范围。

## 2026-03-16 - 基础设施包整理：AiPlatform/ChatModelFactory 迁移 & enable_search 注入修复

- 任务：1）将 `AiPlatform` 枚举与 `ChatModelFactory` 从 `getjobs.modules.ai.common` 迁移到 `getjobs.infrastructure.ai`；2）修复 `enable_search` 字段实际未出现在请求体中的问题。
- 变更文件：新增 `infrastructure/ai/enums/AiPlatform.java`、`infrastructure/ai/factory/ChatModelFactory.java`，删除 `modules/ai/common/` 目录；`CommonConfigController`、`DeepseekGptConfig`、`GptConfig`、`SpringAiLlmClient` import 改为新路径。`DeepseekApiHttpClientConfig.java` 拦截器增加 `injectEnableSearch()`，通过 Jackson 在请求体发出前注入 `enable_search:true`。`DeepseekApiHttpClientConfig.java` 同步移除原响应体打印逻辑及 `BufferedClientHttpResponse`、`BufferingClientHttpRequestFactory`（只保留请求日志）。
- 设计决策：1）`AiPlatform`/`ChatModelFactory` 属于 AI 平台适配层，与业务无关，归属 infrastructure 更合理；2）Spring AI 1.0.0-M6 的 `ChatCompletionRequest` 是封闭 record，无法通过子类扩展序列化字段，`ClientHttpRequestInterceptor` 是官方标准拦截扩展点，在此注入 Deepseek 专有字段是最小侵入方案；使用 Jackson 结构化解析而非字符串拼接，更安全可靠。
- 变更原因：`AiPlatform` 被 infrastructure 层大量引用，放在 modules 下造成反向依赖；`enable_search` 虽在 `DeepseekChatOptions` 中定义，但 Spring AI 序列化时只识别父类字段，实际请求体中从未出现该字段，导致联网搜索功能失效。初版注入使用字符串拼接，后改用 Jackson 结构化解析；另发现修改 body 后未更新 `Content-Length` header，导致服务端按旧长度截断读取触发 `EOF while parsing` 错误，通过 `ContentLengthOverridingRequest` 包装类覆盖该 header 修复。

## 2026-03-16 - Deepseek 同步调用（RestClient）缺少请求日志修复

- 任务：排查 ChatModel 已装配带 wiretap 的 HttpClient 但无请求/响应日志的根因，并补充同步调用的请求日志。
- 根本原因：Spring AI `OpenAiApi` 内部同步调用走 `RestClient`，流式调用才走 `WebClient`；wiretap 只对 `WebClient`（Reactor Netty）生效，`chatModel.call()` 走的 `RestClient` 完全不经过配置的 HttpClient，故 wiretap 日志从不输出。
- 变更文件：`DeepseekApiHttpClientConfig.java`（新增 `deepseekApiRestClientBuilder` Bean，附 `DeepseekHttpLoggingInterceptor` 拦截器，打印请求 method/URI/body，输出到 `DeepseekApiHttp` logger；`BufferingClientHttpRequestFactory` 保证 request body 可读）；`DeepseekGptConfig.java`（构造函数注入 `deepseekApiRestClientBuilder`，`buildDeepseekOpenAiApi()` 传入 `.restClientBuilder(...)`）。
- 设计决策：拦截器只打印请求体（不重写 response），避免 response body 二次读取的复杂性；与 wiretap 共用同一 logger 名 `DeepseekApiHttp`，无需额外日志配置。
- 变更原因：`chatModel.call()` 同步路径无日志，无法 debug 实际发送的提示词内容。

## 2026-03-15 - Deepseek API HTTP 客户端单独配置与 wiretap 日志

- 任务：1）将 Deepseek 的 HTTP 客户端从 DeepseekGptConfig 中抽离，单独配置便于后期维护与扩展（代理、超时、wiretap 等）；2）通过 Reactor Netty wiretap 打印完整 HTTP 请求/响应（含 body），便于 debug 传递内容；3）在配置类中补充 wiretap 两参数的注释说明。
- 变更文件：新增 `DeepseekApiHttpClientConfig.java`（提供 Bean `deepseekApiWebClientBuilder`，内部 HttpClient 使用 wiretap）；`DeepseekGptConfig.java` 改为构造函数注入该 WebClient.Builder，`buildDeepseekOpenAiApi()` 使用注入的 builder，移除内联 HttpClient 与 wiretap 代码。
- 设计决策：1）ChatModel 底层不依赖 Spring 自动装配的 WebClient，显式使用 `OpenAiApi.builder().webClientBuilder(...)` 传入专用 builder；2）wiretap 两参数含义：**LogLevel.DEBUG** 为 wiretap 的触发级别，需在 yml 中设置 `logging.level.DeepseekApiHttp=DEBUG` 才会实际输出；**AdvancedByteBufFormat.TEXTUAL** 表示内容以可读文本格式输出（而非十六进制），便于查看 JSON 请求体/响应体；3）后续代理、超时等只需在 DeepseekApiHttpClientConfig 一处扩展。
- 变更原因：用户要求最佳实践——单独配置 HTTP 客户端引用便于维护扩展；并将 wiretap 配置含义补充到开发日志。

## 2026-03-15 - AI 基础设施抽离至 getjobs.infrastructure.ai

- 任务：将 DDD-lite 下的 AI 基础设施（原 getjobs.config.ai 与 getjobs.modules.ai.infrastructure.llm）抽离到统一包，便于查找与维护。
- 变更文件：新增 `getjobs.infrastructure.ai` 包（package-info、config/、llm/）；config 下迁入 GptConfig、DeepseekGptConfig、DeepseekChatOptions、DeepseekConfigRefreshService；llm 下迁入 LlmClient、LlmMessage、SpringAiLlmClient。CommonConfigController、DeepseekConfigController、CompanyEvaluationAiService、CompanyEvaluationPromptAssembler 的 import 改为新包。删除原 config/ai 与 modules/ai/infrastructure/llm 下共 7 个文件。
- 设计决策：1）统一入口为 getjobs.infrastructure.ai，config 负责 Spring 配置与 Deepseek 动态刷新，llm 负责 LLM 端口与 Spring AI 适配器；2）AiPlatform 仍保留在 getjobs.modules.ai.common.enums，仅基础设施与 Controller 依赖；3）应用层（如 CompanyEvaluationAiService）只依赖 infrastructure.ai.llm 的 LlmClient、LlmMessage。
- 变更原因：用户希望集中维护 AI 基础设施代码，通过单一包路径快速定位。

## 2026-03-15 - 侧边栏替换为 vue-sidebar-menu（折叠后点击父项弹出子菜单）

- 任务：用 vue-sidebar-menu 替换原 Vuetify 侧边栏，解决折叠后点击带子菜单的图标无反应、对齐与折叠逻辑繁琐等问题。
- 变更文件：`frontend/package.json`（新增 vue-sidebar-menu）；`frontend/src/App.vue`（侧边栏改为 SidebarMenu、菜单数据 navMenu、主内容区 app-body 留白、主题变量覆盖）。
- 设计决策：1）折叠状态下组件自带「点击父项弹出子菜单」行为，无需再维护 rail 模式下的显示/隐藏；2）使用 header/footer 插槽放 logo 与「收起菜单」按钮，hide-toggle 隐藏组件自带折叠钮；3）主内容区用 appBodyStyle 根据 collapsed 状态设置 marginLeft（280px/80px），与侧栏同宽。
- 变更原因：用户要求直接使用较好的菜单布局组件，避免继续修补对齐与折叠问题。

## 2026-03-15 - 侧边导航栏重构：层级缩进与收起时图标完整显示

- 任务：使用 Vuetify 官方能力重构侧边栏，解决一级/二级菜单水平距离混乱、收起（rail）时菜单图标被裁切的问题，并保持自适应。
- 变更文件：`frontend/src/App.vue`（导航栏与样式）。
- 设计决策：1）使用 `v-navigation-drawer` 的 `width`(280)、`rail-width`(80)，保证收起时 80px 足够图标+左右留白，图标不被裁切；2）通过 CSS 变量 `--list-indent-size: 24px` 让 Vuetify 列表每层缩进 24px，层级清晰；3）rail 模式下用 `.nav-drawer--rail` 隐藏子项与标题、仅保留图标并居中，避免窄条时文字与箭头挤占空间。
- 变更原因：用户反馈二级与一级水平距离控制差、收起菜单时图标显示不完整，需基于开源布局组件做自适应重构。

## 2026-03-15 - Deepseek 调用增加 enable_search 参数以支持联网

- 任务：Deepseek 需联网时需在请求体中传 `enable_search: true`，按官方示例补充该参数。
- 变更文件：`DeepseekChatOptions.java`（新建，继承 OpenAiChatOptions，增加 `enable_search` 字段及 deepseekBuilder）；`DeepseekGptConfig.java`（默认选项改为 DeepseekChatOptions.deepseekBuilder()，并读取 enable-search 配置）；`SpringAiLlmClient.java`（modelOverride 时使用 DeepseekChatOptions.deepseekBuilder().model(...).enableSearch(true).build()）；`application-gpt.yml`（deepseek.chat.options 下增加 enable-search: true 及注释）。
- 设计决策：通过子类在序列化请求体时带上 enable_search；未传 modelOverride 时使用 Bean 默认选项（已含 enable_search）。
- 变更原因：用户提供 Python 示例需 enable_search 才能联网，需在 Java 调用中同步支持。

## 2026-03-15 - 公司评估结果卡片移除维度评分展示

- 任务：当前提示词仅返回 pay_risk、company_type、risk_score、reason，不再产出 dimension_scores，结果卡片中「各维度 1–10 分」的展示已无数据来源，移除相关 UI 与逻辑。
- 变更文件：`CompanyEvaluationResultCard.vue`（删除维度区块模板、dimensionLabels/getDimensionScore 及 DimensionScores 引用、.dimensions/.dim-row 等样式）。
- 变更原因：与简化后的求职风险顾问评估结果一致，避免展示空维度。

## 2026-03-15 - 公司评估按提示词简化处理并保证入库、响应含 recordId

- 任务：1）按 company-evaluation-v1 提示词：AI 只返回 company_name、pay_risk、company_type、risk_score、reason，服务不再做维度加权，仅用 risk_score 派生 total_score/推荐等级/safe_to_apply；2）每次新评估结果均入库（saveResult 在每次调用 LLM 后执行）；3）评估接口响应改为含 record_id 与 result，便于前端确认入库。
- 变更文件：`CompanyEvaluationAiService.java`（去掉 DimensionScores/applyWeightedScore/旧 8 维逻辑，改为 fillDerivedFromRiskScore；saveResult 改为返回 CompanyEvaluationEntity 并始终在本次评估后调用；evaluate 返回 CompanyEvaluationEvaluateResponse(recordId, result)）；`CompanyEvaluationEvaluateResponse.java`（新建，含 record_id、result）；`CompanyEvaluationController.java`（evaluate 返回 ResponseEntity<CompanyEvaluationEvaluateResponse>）；`companyEvaluationApi.ts`（evaluateCompany 返回 CompanyEvaluationEvaluateResponse，类型含 record_id、result）；`CompanyEvaluationView.vue`（runEvaluate 使用 res.result 与 res.record_id，入库成功时 snackbar 提示记录号）。
- 设计决策：命中缓存时返回缓存实体 id；新评估先解析 AI JSON、再派生字段、再入库，返回新记录 id；保存失败时 record_id 为 null 并打日志，不抛异常以保证仍返回结果。
- 变更原因：结果简化后不再需要后端加权计算；确保每次评估都登记入库；接口与前端需明确拿到记录 id。

## 2026-03-15 - 移除公司评估维度权重配置

- 任务：去掉用户可配置的 8 维度权重，降低复杂度；评估已改为求职风险顾问（欠薪/外包/皮包），不再使用多维度加权总分。
- 变更文件：`CompanyEvaluationController.java`（evaluate 不再传 dimensionWeights）；`CompanyEvaluationRequest.java`（删除 dimensionWeights 字段）；`CompanyEvaluationAiService.java`（evaluate 仅 companyInfo/templateId/modelOverride，applyWeightedScore 无权重参数，旧缓存有 dimension_scores 时按等权计算）；`CompanyEvaluationPromptAssembler.java`（仅 assemble(templateId, companyInfo)，删除权重相关）；`CompanyPromptVariables.java`（删除 DIMENSION_WEIGHTS_CONFIG）；`companyEvaluationApi.ts`（evaluateCompany 仅 companyName、可选 model，删除 DimensionWeights）；`CompanyEvaluationView.vue`（删除维度权重折叠面板、本地保存/恢复、示例企业预览及相关状态与样式）。
- 变更原因：用户不需要权重配置，简化交互与实现。

## 2026-03-15 - 公司评估提示词简化为求职风险顾问（欠薪/外包/皮包）

- 任务：将公司评估从「多维度质量评分+投递建议」改为「求职风险顾问」：只关注欠薪风险、外包/皮包识别，输出 pay_risk、company_type、risk_score(0-10)、reason，不再淘汰普通公司，不加入前景/赛道等影响投递的判断。
- 变更文件：`company-evaluation-v1.yml`（重写为求职风险顾问提示词，评估维度仅欠薪风险与外包/皮包识别，输出 JSON 五字段）；`CompanyEvaluationResult.java`（新增 pay_risk、risk_score、reason 等字段，保留旧字段以兼容缓存）；`CompanyEvaluationAiService.java`（applyWeightedScore：无 dimension_scores 时用 risk_score×10 作为 total_score 并设置 safe_to_apply=risk_score≥5）；`companyEvaluationApi.ts`（类型增加 pay_risk、risk_score、reason）；`CompanyEvaluationResultCard.vue`（展示 pay_risk、risk_score、reason）。
- 设计决策：新 AI 只返回简化 JSON；后端用 risk_score 换算为 0-100 总分与推荐等级，便于前端沿用现有展示；旧缓存若含 dimension_scores 仍按原权重逻辑计算。
- 变更原因：就业难背景下用户只需判断能否正常发工资、是否外包/诈骗，普通公司不被过度淘汰。

## 2026-03-15 - 企业评估支持按请求指定模型，接口默认使用 deepseek-reasoner

- 任务：1）支持在单次调用时动态指定 Deepseek 模型（如 deepseek-chat、deepseek-reasoner）；2）企业评估接口在未传 model 时默认使用 deepseek-reasoner。
- 变更文件：`LlmClient.java`（新增默认方法 `chat(messages, modelOverride)`）；`SpringAiLlmClient.java`（实现该重载，有 modelOverride 时用 `OpenAiChatOptions.builder().model(modelOverride).build()` 构造 Prompt）；`CompanyEvaluationRequest.java`（新增可选字段 `model`）；`CompanyEvaluationController.java`（从 request 取 model，未指定时赋默认值 `deepseek-reasoner` 并传入 service）；`CompanyEvaluationAiService.java`（新增重载 `evaluate(..., modelOverride)`，调用 `llmClient.chat(messages, modelOverride)`；指定模型时不读缓存、不写缓存）；`companyEvaluationApi.ts`（`evaluateCompany` 增加可选参数 `model` 并写入请求体）。
- 设计决策：模型覆盖通过 Spring AI 的 Prompt + ChatOptions 在单次请求中生效；企业评估默认 reasoner 以提升分析质量；指定模型时跳过缓存避免与默认模型结果混淆。
- 变更原因：用户希望在调用时按需切换 deepseek-chat / deepseek-reasoner，且企业评估默认使用推理能力更强的 reasoner。

## 2026-03-15 - 岗位过滤新增代理岗位判定，不投递代理职位

- 任务：在岗位过滤逻辑中新增「代理岗位」判定，通过 `isProxyJob` 直接过滤不参与投递。
- 变更文件：`JobFilterService.java`（`getFilterReason` 中在「已联系过」判断之后增加对 `job.getIsProxyJob()` 的判定，为 true 时返回「代理岗位不投递」）。
- 设计决策：与 `isContacted` 一致使用 `Boolean.TRUE.equals(job.getIsProxyJob())` 避免 NPE；过滤原因文案为「代理岗位不投递」便于在过滤统计/日志中区分。
- 变更原因：用户要求代理岗位不参与投递，仅投递直招岗位。

## 2026-03-15 - Cookie 注入顺序调整：先导航再注入再刷新，确保带入页面

- 任务：修复「Cookie 似乎并没有加载到页面中」的问题。根因是 Playwright 在首次 navigate 前通过 context.addCookies 添加的 cookie，首次请求可能不会随请求发送（已知行为）。
- 变更文件：`PlaywrightService.java`（初始化平台页时改为：先 `page.navigate(homeUrl)` 并 `waitForLoadState(DOMCONTENTLOADED)`，再 `loadPlatformCookies`，再 `page.reload()`；`loadCookiesFromJson` 注释更新为说明应在已导航到目标域后调用并执行一次 reload）。
- 设计决策：采用「先导航到目标域 → 再 addCookies → 再 reload」的顺序，使第二次请求（reload）带上注入的 cookie；等待 DOMCONTENTLOADED 避免在空白或未就绪时注入。
- 变更原因：确保恢复的 Cookie 在后续请求中生效，登录态可被页面使用。

## 2026-03-15 - Cookie 加载时设置 url 与默认 path，修复“缓存后仍要登录”

- 任务：修复已缓存 Cookie 但下次打开页面仍需登录的问题。根因是 Playwright 的 addCookies 要求每条 Cookie 必须提供 url，或同时提供 domain 与 path；原先加载时未设置 url，且 path 可能为空，导致部分 Cookie 未被正确应用。
- 变更文件：`PlaywrightService.java`（`loadPlatformCookies` 调用 `loadCookiesFromJson` 时传入 `platform.getHomeUrl()`；`loadCookiesFromJson` 增加参数 `targetUrl`，对每条 Cookie 设置 `cookie.url = targetUrl`，当 domain 存在但 path 为空时默认 `path = "/"`，并增加空 targetUrl 校验与注释）。
- 变更原因：满足 Playwright 对 addCookies 的要求，确保恢复的 Cookie 作用域正确，登录态可持久生效。

## 2026-03-15 - 移除登录状态检查定时任务（避免 SQLite 写锁）

- 任务：移除「每 15 秒检查各平台登录状态」的定时任务，避免对 SQLite 的频繁写操作导致写锁，影响岗位、公司评估等业务。
- 变更文件：`LoginStatusCheckScheduler.java`（去掉 `@Scheduled(fixedRate = 15000)` 及对应 import；类注释补充写锁原因说明；`checkLoginStatus()` 保留供手动或接口触发）。
- 写锁原因：该定时任务每次执行会对需要检查的平台调用 `PlaywrightService.savePlatformCookieToConfig()`，其内部执行 `configService.loadByPlatformType()` + `configService.save(config)`，即对主数据源 SQLite（npe_get_jobs.db）的 config 表进行读+写。SQLite 同一时刻仅允许一个写连接，定时任务每 15 秒、最多 4 个平台各写一次 config，与业务请求的写操作争抢写锁，导致 "database is locked" 或阻塞。
- 变更原因：消除定时任务造成的 SQLite 写锁，保证业务写库正常；登录状态检查仍可通过手动或接口调用 `checkLoginStatus()` 执行。

## 2026-03-15 - 公司评估评分改为动态权重

- 任务：评分标准改为用户可配置的维度权重，通过权重配置计算总分与推荐等级，而非固定「八维平均×10」。
- 变更文件：`company-evaluation-v1.yml`（第八步改为「动态权重」说明，各维度仍 1–10 分，总评与推荐由系统按权重计算；新增占位 `{{{dimension_weights_config}}}`）；`CompanyEvaluationRequest.java`（新增可选 `dimensionWeights` Map）；`CompanyPromptVariables.java`（新增 `DIMENSION_WEIGHTS_CONFIG`）；`CompanyEvaluationPromptAssembler.java`（重载 `assemble(templateId, companyInfo, dimensionWeights)`，生成权重说明文案）；`CompanyEvaluationAiService.java`（支持权重入参，解析 AI 结果后按权重计算 total_score 并设置 recommendation；自定义权重时不使用缓存、不落库）；`CompanyEvaluationController.java`（将 request 的 dimensionWeights 传入 service）；`companyEvaluationApi.ts`（`evaluateCompany` 支持可选 `dimensionWeights`）；`CompanyEvaluationView.vue`（折叠面板「维度权重」、8 个维度输入、恢复等权、请求时携带权重）。
- 设计决策：权重 key 与 JSON 维度字段名一致（如 company_stability）；未传或空权重按等权；总评公式为加权平均×10（0–100），再按分数段映射推荐等级；自定义权重评估不写缓存，避免等权请求命中带权结果。
- 变更原因：满足用户按自身偏好调节各维度重要性（如更看重工作制度、薪资福利）的需求。

## 2026-03-15 - Playwright 定时关闭 about:blank 页签

- 任务：定期获取浏览器中的 about:blank 页签并关闭，避免运行时新开的空白页积累；不关闭各平台主工作页签（pageMap 中的页面）。
- 变更文件：`PlaywrightService.java`（新增 `closeAboutBlankPages()`：遍历 context.pages()，排除 pageMap 中的页签，对 URL 为 about:blank 或空的执行 close；新增 `closeAboutBlankTask` 字段；init 中用 cookieBackupScheduler 每 60 秒执行一次该任务；close() 中取消该任务）。
- 设计决策：定时任务内异常自行捕获并仅打错误/警告日志，不向外抛出，不影响原有程序与调度器后续执行。
- 变更原因：减少空白页签堆积，保持浏览器页签列表干净。

## 2026-03-15 - 查询待处理职位前删除岗位描述为空的记录

- 任务：查询对应平台岗位记录前需删除「岗位描述为空」的数据；该类数据来自监控接口额外拉取，并非点击岗位卡实际搜索所得，不应参与待投递等后续流程。
- 变更文件：`JobRepository.java`（新增 `deleteByPlatformAndJobRequirementsEmpty(platform)`：@Modifying DELETE，条件为 platform 且 `jobPostDescription IS NULL OR jobPostDescription = ''`）；`JobService.java`（`findPendingJobsAsDTO` 内先调用上述删除、再 `findByPlatform`，方法加 @Transactional）。
- 设计决策：以 jobPostDescription（岗位描述）为空作为判定依据；删除与查询同事务，保证后续只基于有岗位描述的记录。
- 变更原因：排除监控侧无效数据，待处理/待投递仅针对用户实际搜索到的岗位。

## 2026-03-15 - 岗位记录页 AI 匹配列与 AI 匹配说明列

- 任务：1）AI 匹配列不再用过滤原因判定，改为用后端字段 aiMatched：null/undefined=未检测，false=不匹配，true=匹配；悬停展示 aiMatchScore、aiMatchReason。2）新增「AI匹配说明」列，对应字段 aiMatchReason，单行省略 + tooltip 全文。
- 变更文件：`PlatformRecordsView.vue`（移除 isAiMatchBelowThreshold；aiMatchLabel/aiMatchChipColor 按 aiMatched 三态展示；#item.aiMatched 用 chip + tooltip 展示分数/原因；新增表头与 #item.aiMatchReason 列及 .ai-match-desc-text 样式）。
- 设计决策：展示与后端 aiMatched/aiMatchScore/aiMatchReason 一致；AI匹配说明单独一列便于查看长文案。
- 变更原因：展示真实 AI 匹配结果与说明，不依赖 filterReason 推断。

## 2026-03-15 - 过滤时 entity 同步 AI 匹配结果，避免 saveAll 覆盖

- 任务：filterJobs 中 getFilterReason() 已通过 updateJobAIResult(job) 将 AI 匹配结果写库，但内存里的 entity 仍是旧值；后续 saveAll(entitiesToUpdate) 会整条保存 entity，导致用旧/空值覆盖库里刚写入的 aiMatched/aiMatchScore/aiMatchReason。
- 变更文件：`JobFilterService.java`（在更新状态与 filterReason 后、加入 entitiesToUpdate 前，将 job 的 AI 三字段同步到 entity：setAiMatched、setAiMatchScore、setAiMatchReason）。
- 设计决策：写库与内存实体保持一致，批量保存时不再覆盖已写入的 AI 结果。
- 变更原因：保证过滤后库内既更新状态与过滤原因，也正确保留 AI 匹配结果。

## 2026-03-15 - 岗位列表关键字搜索：清空后再次搜索报错修复

- 任务：通过关键字搜索后清空关键字再次搜索时报错「加载岗位列表失败 TypeError: Cannot read properties of null (reading 'trim')」，因清空后 `keyword.value` 可能为 null，直接调用 `.trim()` 导致异常；且无关键字时应不传递 keyword 参数。
- 变更文件：`PlatformRecordsView.vue`（`loadData` 中：先用 `keyword.value != null ? String(keyword.value).trim() : ''` 得到 `kw` 避免对 null 调 trim；请求参数使用 `...(kw !== '' ? { keyword: kw } : {})`，仅有关键字非空时才传 keyword）。
- 设计决策：空/null 时不传 keyword，符合接口可选参数语义；用 String() 和判空保证 trim 不被 null 调用。
- 变更原因：修复清空搜索框后点击搜索或回车时的报错，并保证无关键字时请求不携带 keyword。

## 2026-03-15 - EncryptJobId 历史重复数据：启动去重 + 查询取最新一条

- 任务：历史数据导致同一 encrypt_job_id 可能有多条记录；1）应用启动、数据库就绪后对 job_info 按 encrypt_job_id 去重，保留创建时间最新的一条；2）所有按 encryptJobId 查单条的地方防御性处理多条返回，统一取 createdAt 最新的一条。
- 变更文件：
  - `JobRepository.java`：新增 `findAllByEncryptJobIdOrderByCreatedAtDesc`、`findEncryptJobIdsWithDuplicates()`，供去重与按最新取一条使用。
  - `GetJobsDirectoryBootstrapRunner.java`：注入 `JobRepository`、`TransactionTemplate`；在目录初始化后执行 `deduplicateJobByEncryptJobId()`：查出有重复的 encryptJobId，对每组按 createdAt 降序保留第一条、删除其余。
  - `JobFilterService.java`、`BossApiMonitorService.java`、`BossRecruitmentServiceImpl.java`：将 `findByEncryptJobId` 改为 `findAllByEncryptJobIdIn(singletonList(id))` 后 `stream().max(Comparator.comparing(JobEntity::getCreatedAt)).orElse(null)`，避免多条时行为未定义。
- 设计决策：启动阶段一次性清理历史重复，业务代码按「取最新一条」防御性编写；去重在事务中执行，失败只打日志不阻塞启动。
- 变更原因：消除历史重复数据对单条查询的干扰，保证更新 AI 结果、更新职位状态、解析职位明细等逻辑始终作用在「最新」那条记录上。

## 2026-03-14 - 修复快速投递接口冲突，统一走 /submit/{platformCode}

- 任务：POST /submit/boss（及 zhilian/51job/liepin）与 POST /submit/{platformCode} 冲突，Spring 优先匹配具体路径，导致请求走无参的 submitBossQuickDelivery()，流程参数 body 被忽略。
- 变更文件：`QuickDeliveryController.java`（删除 @PostMapping("/submit/boss")、/submit/zhilian、/submit/51job、/submit/liepin 四个平台专属接口；仅保留 POST /submit/{platformCode} 与 POST /submit/all）。
- 设计决策：所有平台提交统一走 submitQuickDelivery(platformCode, flowOptions)，flowOptions 可选；/submit/all 保留为「提交所有平台」独立接口。
- 变更原因：保证 POST .../submit/boss 带流程参数时能正确进入带 body 的接口，流程控制生效。

## 2026-03-14 - 过滤步骤只查待处理岗位 + 一键投递前端对接

- 任务：1）Boss 过滤步骤只应对「待处理」岗位执行过滤，避免把已过滤/待投递/已投递等重复过滤；2）前端一键投递与包含流程控制的接口对接完善，请求始终带流程控制 body。
- 变更文件：
  - 后端：`JobService.java`（新增 `findPendingJobEntitiesByPlatform(platform)`，按 `PENDING` 状态查职位实体）；`BossTaskService.java`（filterJobs 改为调用 `findPendingJobEntitiesByPlatform`，空数据时报错文案改为「未找到待处理状态的职位数据」）。
  - 前端：`tasks.ts`（`submitQuickDelivery` 改为使用 `httpJson`，未传 options 时默认 `{ collect: true, filter: true, deliver: true }` 作为 body，并补充接口注释）。
- 设计决策：过滤只处理待处理记录；一键投递按钮已通过 platformService.handleQuickDelivery(deliveryFlow) 调用 submitQuickDelivery(platform, options)，对接 POST /api/task/quick-delivery/submit/{platformCode}，此处仅保证请求统一带 JSON body。
- 变更原因：过滤逻辑正确性；前端与 QuickDeliveryController 的流程控制对接清晰可维护。

## 2026-03-14 - 职位状态新增「待投递」，通过过滤设为待投递

- 任务：区分「待处理」与「通过过滤待投递」；通过过滤的职位不再设为待处理，改为新状态「待投递」，投递步骤仅拉取待投递职位。
- 变更文件：`JobStatusEnum.java`（新增 `PENDING_DELIVERY(1, "待投递")`）；`JobFilterService.java`（通过过滤时 `entity.setStatus(PENDING_DELIVERY.getCode())`）；`JobService.java`（`findPendingJobsAsDTO` 改为按 `PENDING_DELIVERY` 过滤）；`PlatformRecordsView.vue`（`statusText` 中 1 显示「待投递」）。
- 设计决策：状态码 0 待处理、1 待投递、2 已过滤、3 投递成功、4 投递失败；重置过滤仍设为待处理；一键投递从 DB 加载岗位时只加载待投递，保证仅对通过过滤的职位执行投递。
- 变更原因：明确通过过滤后的状态语义，避免与未过滤的待处理混淆，投递只针对待投递职位。

## 2026-03-14 - 岗位明细表格：过滤原因列与 AI 匹配列逻辑调整

- 任务：1）岗位明细表增加「过滤原因」列展示 `filterReason`；2）AI 匹配列始终显示「未检测」问题与模板解析错误（`??` 与 `||` 混用需括号），改为仅用 `filterReason` 判定是否做了 AI 检测。
- 变更文件：`PlatformRecordsView.vue`（表头新增「过滤原因」列；`#item.filterReason` 插槽展示文案，长文案省略 + tooltip；新增 `.filter-reason-text` 样式；AI 匹配列改为 `isAiMatchBelowThreshold(item)`：`filterReason` 以「AI岗位匹配度低于阈值」开头则显示红色「不匹配」，否则灰色「未检测」；移除对 `aiMatched`/`ai_match_score`/tooltip 的依赖）。
- 设计决策：过滤原因列无值时显示「-」；AI 是否检测统一由 `filterReason` 前缀判定，不再依赖后端 `aiMatched` 等字段，避免序列化/命名差异导致全为未检测，并消除模板解析错误。
- 变更原因：方便查看被过滤原因；简化 AI 匹配展示逻辑并修复 Vite 解析报错。

## 2026-03-14 - Boss 监控保存职位前按 encryptJobId 去重

- 任务：在已有 `isJobExists` 检查的前提下仍出现同一职位多条库记录；根因是单次 API 响应中同一职位可能出现多次（不同 itemId/searchId），`isJobExists` 只挡「库里已有」、挡不住「本批内重复」。
- 变更文件：`BossApiMonitorService.java`（parseAndSaveJobData：先按 encryptJobId 用 toMap 去重得到 distinctEntities，再过滤 isJobExists，再 saveAll）。
- 设计决策：先本批去重再查库，既避免同批重复插入，又减少 exists 查询次数（每个唯一 id 只查一次）。
- 变更原因：从写入侧消除重复插入，与 JobFilterService 的 toMap 合并函数（读取侧容错）形成完整闭环。

## 2026-03-14 - 修复 filterJobs 中 Duplicate key（toMap 重复 key）

- 任务：Boss 一键投递过滤阶段报 `IllegalStateException: Duplicate key ... (attempted merging values JobEntity ... and JobEntity ...)`，堆栈指向 `JobFilterService.filterJobs` 的 `Collectors.toMap`。
- 变更文件：`JobFilterService.java`（toMap 增加合并函数 `(existing, replacement) -> existing`）；`JobService.java`（updateJobStatusWithAI 中 jobDTOs 的 toMap 同样增加合并函数，防止 DTO 列表重复 encryptJobId）。
- 设计决策：错误并非数据库主键冲突，而是内存中 `entities` 存在相同 `encryptJobId` 的多条记录（同一职位在不同搜索/列表位可能有多条库记录），`toMap(key, value)` 遇重复 key 会抛异常；用三参 `toMap(key, value, merge)` 遇重复时保留第一条，后续逻辑只需一个实体 per encryptJobId。
- 变更原因：消除 Duplicate key 异常，保证一键投递过滤流程稳定。

## 2026-03-14 - 一键投递流程控制（后端适配 collect/filter/deliver）

- 任务：后端接收前端新增的流程控制参数（collect、filter、deliver），未开启的步骤直接跳过执行。
- 变更文件：
  - 新增 `DeliveryFlowOptions.java`（DTO：collect/filter/deliver 布尔，null 视为 true）；`ParameterizedQuickDeliveryTask.java`（带 platform + flowOptions 的 ScheduledTask，执行时调用 JobDeliveryService.executeQuickDelivery(platform, flowOptions)）。
  - `QuickDeliveryController`：POST /submit/{platformCode} 增加可选 @RequestBody DeliveryFlowOptions，并传入 Scheduler。
  - `QuickDeliveryScheduler`：submitQuickDeliveryTask(platform, flowOptions) 统一使用 ParameterizedQuickDeliveryTask 提交，移除对四平台 Bean 任务的直接依赖。
  - `JobDeliveryService`：新增 executeQuickDelivery(platform, flowOptions)；根据 flowOptions 的 collect/filter/deliver 决定是否执行采集、过滤、投递步骤，未开启则跳过（不采集则仅从 DB 加载待处理岗位；不过滤则用全部岗位；不投递则 successCount=0）。
- 设计决策：请求体可选，未传或字段 null 时默认全部执行；与前端 tasks.ts 的 DeliveryFlowOptions 字段一致。
- 变更原因：前端已增加投递流程控制开关并随一键投递请求发送，后端需按开关跳过对应环节。

## 2026-03-14 - 企业评估记录删除（勾选删除 / 全部删除）

- 任务：评估记录表格支持多选，并提供「勾选删除」「全部删除」；后端提供按 ID 列表删除与全部删除接口（逻辑删除）。
- 变更文件：
  - 前端：`CompanyEvaluationView.vue`（表格增加 show-select、item-value、return-object 与 v-model 多选；header 增加勾选删除、全部删除按钮；删除前确认弹窗；调用 deleteCompanyEvaluationsByIds / deleteAllCompanyEvaluations，成功后刷新列表并 snackbar 提示）；`companyEvaluationApi.ts`（已有 deleteCompanyEvaluationsByIds、deleteAllCompanyEvaluations 及 CompanyEvaluationDeleteResponse）。
  - 后端：此前已完成 Controller 的 DELETE /api/ai/company/records?ids=、DELETE /api/ai/company/records/all 及 Repository 逻辑删除方法。
- 设计决策：删除为逻辑删除，列表查询已过滤 is_deleted；勾选删除仅在有选中时可用，全部删除在无记录时禁用；删除请求期间按钮 loading 并防重复提交。
- 变更原因：用户需要清理或批量删除评估记录。

## 2026-03-14 - 企业评估菜单、分页 API 与前后端对接

- 任务：1）在 AI 智能求职下新增「企业评估」菜单并配置路由；2）后端提供分页查询评估记录 API；3）前端企业评估页对接接口并展示评估结果。
- 变更文件：
  - 前端：`App.vue`（AI 智能求职下增加企业评估菜单项，showAppBar/pageTitle/pageSubtitle 支持 company-evaluation）；`router/index.ts`（新增 /company-evaluation 路由）；`modules/intelligent-job-search/views/CompanyEvaluationView.vue`（评估表单、本次结果预览、历史记录表格与分页、详情弹窗）；`modules/intelligent-job-search/components/CompanyEvaluationResultCard.vue`（展示总分、推荐等级、维度得分、优劣势、投递建议）；`modules/intelligent-job-search/api/companyEvaluationApi.ts`（evaluateCompany、fetchCompanyEvaluationPage 及类型）。
  - 后端：`CompanyEvaluationController`（GET /api/ai/company/list?page=&size= 分页查询，返回 CompanyEvaluationPageResponse）；`CompanyEvaluationRepository`（findAllByIsDeletedFalseOrderByCreatedAtDesc(Pageable)）；新增 DTO `CompanyEvaluationListItem`、`CompanyEvaluationPageResponse`。
- 设计决策：分页列表每条带解析后的 result（CompanyEvaluationResult），前端直接展示；列表按创建时间倒序；详情弹窗复用 ResultCard 组件。
- 变更原因：方便从导航进入企业评估页、查看历史记录并分页浏览、完整展示单条评估结果。

## 2026-03-14 - 左侧菜单层级优化（平台配置/岗位明细）

- 任务：优化「AI智能求职」下的菜单层级展示，让「平台配置」与「岗位明细」及其子菜单具备清晰的层次与缩进。
- 变更文件：前端 `App.vue`（将平台配置/岗位明细改为二级可折叠分组，子项增加缩进与左侧引导线样式）。
- 设计决策：使用 Vuetify `v-list-group` 作为二级分组，展开区域用 `border-left` 做视觉引导，子项统一 padding，保证层次清晰且不改变原有路由结构。
- 变更原因：原先用 subheader + 平铺列表，视觉层级不明显，用户难以快速识别分组与子项归属。

## 2026-03-14 - 公司评估 API、落库与按公司信息缓存

- 任务：1）提供以企业名称为参数的评估接口；2）将评估结果保存至数据库；3）调用前根据公司信息文本查库，有记录则直接返回不调 AI。
- 变更文件：
  - 新增 `repository/entity/CompanyEvaluationEntity.java`（company_info、result_json）、`repository/CompanyEvaluationRepository.java`（按 companyInfo 查询未删除记录）。
  - `CompanyEvaluationAiService`：注入 Repository；evaluate 内先 trim 公司信息、查库，命中则反序列化 resultJson 返回；未命中则调 AI、解析、落库（saveResult）后返回。
  - 新增 `company/dto/CompanyEvaluationRequest.java`（companyName）、`company/web/CompanyEvaluationController.java`（POST /api/ai/company/evaluate，body.companyName 作为公司信息传入服务）。
- 设计决策：缓存键为请求时的公司信息全文（trim 后），保证同一段文本只调一次 AI；结果整份 JSON 存 result_json 便于读写一致；落库失败仅打日志不中断返回。
- 变更原因：前端需要接口按企业名称发起评估；结果持久化便于复查与统计；避免同一公司信息重复调用 AI 节省成本。

## 2026-03-14 - 公司质量评估 AI 服务

- 任务：参考 JobMatchAiService 设计，新增「评估公司是否值得投递」的 AI 调用，从 8 个维度打分并输出投递建议（强烈推荐/可以投递/谨慎投递/不建议）。
- 变更文件：
  - 新增 `company` 模块：`dto/CompanyEvaluationResult.java`、`dto/DimensionScores.java`、`dto/RecommendationCode.java`；`assembler/CompanyPromptVariables.java`、`assembler/CompanyEvaluationPromptAssembler.java`；`service/CompanyEvaluationAiService.java`。
  - 新增提示词模板 `src/main/resources/prompts/company-evaluation-v1.yml`。
- 设计决策：与职位匹配保持同一风格——模板仓库 + 组装器 + LlmClient；响应支持纯 JSON 或 \`\`\`json 代码块，解析后校验 recommendation_code 枚举，非法时默认 RECOMMENDED 并打日志。
- 变更原因：在投递前对目标公司做多维度评估，辅助用户决策是否投递。

## 2026-03-13 - 启动时确保用户目录下 getjobs 目录存在

- 任务：应用启动时若 `${user.home}/getjobs` 不存在则自动创建，避免后续写配置/数据到用户目录时因目录缺失失败。
- 变更文件：新增 `src/main/java/getjobs/bootstrap/GetJobsDirectoryBootstrapRunner.java`（实现 `ApplicationRunner`，在 `run` 中读取 `user.home`、构造路径、不存在则 `Files.createDirectories`，并设置 `Ordered.HIGHEST_PRECEDENCE` 优先执行）。
- 设计决策：使用 Spring Boot 标准的 `ApplicationRunner` 在应用就绪后执行；用 `java.nio.file.Path/Files` 创建目录；`user.home` 为空时仅打日志并跳过；创建失败只记录错误不中断启动。
- 变更原因：统一在用户目录下使用 getjobs 子目录存放数据或配置时，无需用户手动创建该目录，提升首次使用体验。

## 2026-03-13 - 岗位明细删除/重置 platform 参数适配后端（Bug 修复）

- 任务：修复岗位明细页「删除全部」「重置状态」请求的 platform 参数与后端接口不一致的问题，使传参与后端约定一致。
- 变更文件：
  - 前端：`frontend/src/modules/intelligent-job-search/constants/platformMeta.ts`（新增 `RecordsPlatformParam` 与 `recordsPlatform` 字段，BOSS直聘→platform、智联招聘→zhilian、前程无忧→job51、猎聘→liepin）；`frontend/src/modules/intelligent-job-search/views/PlatformRecordsView.vue`（handleReset、handleDelete 改为使用 `meta.recordsPlatform` 替代 `meta.backendName`）。
- 设计决策：在平台元数据中单独维护「岗位记录/删除/重置」接口使用的平台码（recordsPlatform），与展示用 displayName、其他后端用 backendName 解耦，便于后端接口按 platform/zhilian/job51/liepin 识别。
- 变更原因：后端岗位删除、重置接口以 platform 码（platform、zhilian、job51、liepin）识别平台，前端原先传 backendName（如 BOSS直聘、51job、LIEPIN）导致请求失败或识别错误，需对齐传参。

## 2026-03-13 - GitHub Release 归档 JAR + lib 的 Skill

- 任务：将构建产物（`target/*.jar` 与 `target/lib`）归档到 GitHub Releases，并形成可复用的 Cursor Skill。
- 变更文件：新增 `.cursor/skills/gh-release-jar-lib/SKILL.md`（说明前置条件、手动步骤与常用选项）、`.cursor/skills/gh-release-jar-lib/scripts/release.sh`（打包 lib 为 zip 并调用 `gh release create` 上传 JAR 与 lib.zip）。
- 设计决策：Releases 仅支持上传文件，故将 `target/lib` 打成 `lib.zip` 再上传；Skill 提供脚本与手动命令两种方式，脚本支持交互式输入 tag/说明或通过环境变量 `VERSION` 非交互执行。
- 变更原因：便于将可执行 JAR 与依赖 lib 发布到 GitHub Releases，供他人下载；Skill 可在后续“归档到 Releases”等对话中被复用。

## 2026-03-12 - Playwright 定时备份平台 Cookie

- 任务：在 Playwright 初始化各平台页面后，为每个平台启动一个 5 秒一次的定时任务，自动将当前页面 Cookie 备份到对应平台的配置，用于后续快速恢复登录态。
- 变更文件：`src/main/java/getjobs/common/service/PlaywrightService.java`（新增 Cookie 备份调度器与任务映射，`init()` 中在页面创建后调用 `startCookieAutoBackup`，在 `@PreDestroy close()` 中统一停止定时任务）。
- 设计决策：复用已有的 `capturePlatformCookies` 与 `savePlatformCookieToConfig`/`getCookiesAsJson`，所有平台共享一个守护线程调度器，每个平台仅保留一个定时任务；备份失败仅记录日志，不影响主流程。
- 变更原因：避免页面或站点变更导致的登录状态丢失，确保各平台的最新 Cookie 能及时写入数据库，在浏览器重启或任务恢复时可以优先从配置中加载。

## 2026-03-12 - 一键投递支持跳过登录检查

- 任务：根据公共配置 `enableLoginCheck` 控制一键投递流程是否执行登录检查；关闭时直接跳过登录检查并默认已登录。
- 变更文件：`src/main/java/getjobs/service/JobDeliveryService.java`（注入 `UserProfileRepository`，新增 `isLoginCheckEnabled()`，在步骤1分支跳过 `recruitmentService.login()`）。
- 设计决策：默认更“宽松”——读配置异常或未配置时按未启用处理，避免因配置读取失败阻断投递流程；关闭登录检查时仅跳过该步骤，其余流程不变。
- 变更原因：允许用户在已确认登录状态的情况下减少无意义的登录检测，提高任务启动速度与稳定性。

## 2026-03-12 - 平台配置页「是否进行登录检测」及公共配置接口

- 任务：在平台配置页任务流程卡片中增加「是否进行登录检测」开关；后端在 CommonConfigController 中提供该配置的读写接口；开关变更时调用新接口更新状态。
- 变更文件：
  - 后端：`UserProfile.java`（新增字段 `enableLoginCheck`）、`UserProfileDTO.java`（同上）、`CommonConfigController.java`（save 支持 enableLoginCheck，新增 GET/POST `/api/common/config/login-check`）。
  - 前端：`commonConfigApi.ts`（新增 `getLoginCheck`、`updateLoginCheck`）、`platformState.ts`（enableLoginCheck 不再随平台配置 payload 提交）、`platformService.ts`（loadConfig 后拉取登录检测配置并 snapshot，新增 `updateLoginCheck`）、`PlatformConfigView.vue`（开关绑定并 `@update:model-value` 调用更新接口）。
- 设计决策：登录检测开关存于公共配置（UserProfile），全局一份、各平台共用；平台配置保存不再包含该字段，由单独接口维护；开关变更失败时回滚 UI 并提示。
- 变更原因：支持用户选择任务开始前是否进行平台登录状态检测，并需将选项持久化与即时更新到服务端。

## 2026-03-15 - 岗位记录表「是否联系过」列及双击修改

- 任务：在平台岗位明细表中增加「是否联系过」列（对应 `isContacted`），支持在表格中双击该单元格切换状态并持久化到后端。
- 变更文件：
  - 后端：`JobService.java`（新增 `updateContacted(Long id, Boolean isContacted)`）、`JobController.java`（新增 `PUT /api/jobs/{id}/contacted`，请求体 `{ isContacted }`）。
  - 前端：`jobRecordsApi.ts`（`JobRecord` 增加 `isContacted`，新增 `updateContacted(jobId, isContacted)`）、`PlatformRecordsView.vue`（表头增加「是否联系过」列，`#item.isContacted` 模板展示是/否并支持双击调用 `toggleContactedItem` 调用接口后乐观更新）。
- 设计决策：与收藏类似，采用单条更新接口；双击即切换布尔值，无需弹窗；单元格增加 tooltip「双击切换」和 hover 样式提示可编辑。
- 变更原因：方便用户在记录中直接维护「是否联系过」状态，并与过滤逻辑（已联系过则跳过）配合使用。

## 2026-03-11 - 忽略本地 GPT 配置文件

- 任务：将 `src/main/resources/application-gpt-local.yml` 加入 git 忽略列表，避免本地/环境相关配置被误提交到仓库。
- 变更文件：`/.gitignore`（新增 1 条忽略规则）。
- 设计决策：使用精确路径忽略，仅针对该本地文件，不影响其他环境配置文件的版本管理。
- 变更原因：该文件通常用于本地调试（可能包含 API Key 等敏感信息），不应进入版本控制。

## 2026-03-19 补充获取所有平台字典数据接口

### 任务描述

新增 `GET /dicts` 接口，返回所有平台的字典数据列表。

### 修改文件

- `src/main/java/getjobs/modules/getjobs/dict/service/DictFacade.java` — 新增 `fetchAllPlatforms()` 方法，遍历所有 `RecruitmentPlatformEnum` 枚举值并聚合结果
- `src/main/java/getjobs/modules/getjobs/dict/web/DictController.java` — 新增 `GET /dicts` 端点，调用 `dictFacade.fetchAllPlatforms()`

### 关键设计决策

- 复用现有 `DictProviderRegistry` + `DictFacade` 链路，无需改动基础设施层
- 返回 `List<DictBundle>`，每个元素对应一个平台

## 2026-03-19 修复顶部栏与侧边栏重叠

- 任务：修复页面顶部栏（`v-app-bar`）与侧边栏（`vue-sidebar-menu` 折叠展开）在顶部区域发生重叠的问题
- 变更文件：`frontend/src/App.vue`（给 `.app-sidebar` 增加 `padding-top: 64px` 预留顶部栏高度）
- 关键设计决策：保留顶部栏 `fixed` 布局假设，通过侧边栏容器手动对齐顶部偏移
- 变更原因：侧边栏不在 `v-main` 的自动偏移流程中，导致展开面板从视口顶部开始

## 2026-03-19 deleteAllByPlatform 排除已投递岗位

**任务描述**：删除平台所有岗位时，已投递岗位（投递成功/失败）不应被删除。

**修改文件**：
- `src/main/java/getjobs/repository/JobRepository.java`：新增 `deleteByPlatformAndStatusNotIn` 方法，用 JPQL 排除指定状态
- `src/main/java/getjobs/modules/getjobs/service/JobService.java`：`deleteAllByPlatform` 改用新方法，排除 status=3（投递成功）和 status=4（投递失败）

**关键决策**：以 `JobStatusEnum.DELIVERED_SUCCESS` 和 `DELIVERED_FAILED` 作为排除条件，避免硬编码魔法数字。

## 2026-03-19 分页查询接口增加岗位状态筛选

**任务描述**：`GET /api/jobs` 分页查询支持按 status 过滤，不传则查全部。

**修改文件**：
- `src/main/java/getjobs/repository/JobRepository.java`：`search` JPQL 增加 `:status IS NULL OR j.status = :status` 条件
- `src/main/java/getjobs/modules/getjobs/service/JobService.java`：`search` 方法签名增加 `Integer status` 参数
- `src/main/java/getjobs/controller/JobController.java`：`list` 接口增加 `@RequestParam(required = false) Integer status`
- `frontend/src/modules/intelligent-job-search/api/jobRecordsApi.ts`：`JobQueryParams` 增加可选 `status` 字段
- `frontend/src/modules/intelligent-job-search/views/PlatformRecordsView.vue`：搜索栏增加状态筛选下拉，切换平台时重置筛选条件
