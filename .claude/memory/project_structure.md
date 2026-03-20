---
name: project_structure
description: npe_get_jobs 完整项目结构速查，后端 Java + 前端 Vue3，用于快速定位文件
type: project
---

## 后端 (Spring Boot, Java, getjobs 包)

```
getjobs/
├── controller/                  # HTTP 入口（BossTask, Job51Task, CommonConfig, Config, Job, TaskExecution, Health, DeepseekConfig）
├── service/                     # 应用服务层（RecruitmentService接口/Factory/Abstract, JobService, JobDeliveryService, JobFilterService, SalaryFilterService, ConfigService, TaskExecutionManager）
├── modules/
│   ├── getjobs/
│   │   ├── boss/                # Boss直聘模块（BossElementLocators, BossTaskService, BossRecruitmentServiceImpl, BossApiMonitorService, dto/）
│   │   ├── job51/               # 51job模块（同结构）
│   │   ├── liepin/              # 猎聘模块（同结构）
│   │   ├── zhilian/             # 智联模块（同结构）
│   │   └── dict/                # 字典模块（DictProvider接口, DictFacade, 四平台实现, dto/）
│   ├── ai/
│   │   ├── company/assembler/   # 公司评估 Prompt 组装
│   │   ├── greeting/            # 打招呼生成（assembler + service）
│   │   ├── job/assembler/       # 职位匹配 Prompt
│   │   ├── job_skill/assembler/
│   │   ├── project/assembler/
│   │   └── onboarding/          # 引导页解析（新增，未完成）
│   ├── task/
│   │   ├── quickdelivery/       # 快速投递（domain各平台Task, service/QuickDeliveryScheduler, web/）
│   │   ├── service/             # LoginStatusCheckScheduler, TaskStatusService
│   │   └── web/                 # LoginStatusController, TaskStatusController
│   ├── resume/                  # 简历领域（domain, dto, repository, service, web）
│   ├── integration/             # 外部集成（mediasaver多平台）
│   └── webdocs/                 # 文档管理
├── infrastructure/
│   ├── ai/                      # LlmClient(SpringAI), ChatModelFactory, 配置(Deepseek/Qwen), template/, extract/, validate/
│   ├── auth/                    # JWT拦截器, AuthContext
│   ├── accesslog/               # 访问日志
│   ├── asyncexecutor/           # 异步执行器
│   ├── datasource/              # MySQL 数据源
│   └── health/                  # AI模型健康检查
├── repository/                  # JPA仓储（Job, Config, UserProfile, CompanyEvaluation）+ entity/
├── common/
│   ├── dto/                     # ConfigDTO, UserProfileDTO
│   ├── enums/                   # JobStatusEnum, RecruitmentPlatformEnum, TaskExecutionStep
│   └── util/                    # Playwright工具类（AntiCrawler, JsCapture, Stealth等）
├── config/                      # Spring配置（WebMvc, Async, WebClient, AdminServer）
├── utils/                       # 数据转换（Boss/Job51/LiePin/ZhiLian DataConverter）, Constant, PlaywrightUtil
└── bootstrap/                   # 启动Runner
```

**Resources:**
- `prompts/` — YAML格式Prompt模板（greeting-v1, job-match-v1, company-evaluation-v1, onboarding-parse-v1 等）
- `application-*.yml` — 多配置文件（dev/prod/gpt/auth/async/access/dict/webclient/actuator）
- `dist/` — 前端构建产物（Spring Boot静态资源服务）
- `stealth-scripts/` — Playwright反检测JS脚本

---

## 前端 (Vue 3 + Vuetify + Vite, frontend/src)

```
src/
├── modules/
│   ├── intelligent-job-search/  # 主功能模块
│   │   ├── views/               # CommonConfigView, PlatformConfigView, PlatformRecordsView, CompanyEvaluationView
│   │   ├── components/          # OnboardingDialog, CompanyEvaluationResultCard
│   │   ├── api/                 # commonConfigApi, platformConfigApi, taskExecutionApi, jobRecordsApi, companyEvaluationApi, onboardingApi
│   │   ├── service/             # commonConfigService, platformService
│   │   ├── state/               # commonConfigState, platformState
│   │   └── constants/           # platformMeta
│   ├── login/                   # LoginPage, loginService, loginState
│   └── vitaPolish/              # 简历优化子应用（独立入口 main.js, 多模板 ResumeOptimizer）
├── components/                  # 全局组件：CascaderSelect, GlobalSnackbar, StatusChip, DevToolbar（新增）
├── api/                         # 旧版 API（commonConfig, jobRecords, platformConfig, tasks, http）
├── composables/                 # useTaskExecutor
├── stores/                      # snackbar (Pinia)
├── plugins/                     # vuetify, vxe-table
├── router/                      # index.ts
├── styles/                      # main.scss
└── common/infrastructure/auth/  # auth.ts
```

**关键约定：**
- `isDev = import.meta.env.DEV` 控制开发专属功能（DevToolbar 等）
- 模块内分 api / service / state / views / components 四层
- 全局调试栏用 `DevToolbar.vue`，通过 `actions` prop 注入调试项
