# 开发日志（按时间倒序，最新在上）

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
