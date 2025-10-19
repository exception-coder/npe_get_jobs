# Changelog 💖
Hello 小可爱们！这里是我们的成长日记，所有酷炫的更新和优化都会在这里记录哦！

## [2.1.16] - 2025-10-19 🔄

### Changed
- **ConfigDTO配置转换逻辑优化！✨ 统一数据源架构**
  - **问题背景 🤔**：`ConfigDTO.convertFromEntity()` 方法仍然从 `ConfigEntity` 获取已迁移到 `UserProfile` 的字段，导致数据源不一致
  - **架构统一 🎯**：
    - 参考 `AbstractRecruitmentService.convertConfigEntityToDTO()` 的设计，重构 `ConfigDTO` 的转换逻辑
    - 从 `UserProfile` 获取用户个性化配置：`sayHi`、`enableAIJobMatchDetection`、`enableAIGreeting`、`sendImgResume`、`resumeImagePath`、`recommendJobs`
    - 从 `ConfigEntity` 获取平台相关配置：`filterDeadHR`、`keyFilter`、`checkStateOwned`、`resumeContent`、`waitTime`、`platformType`
  - **非Spring环境支持 🔧**：
    - 使用 `SpringContextUtil.getBean()` 获取 `UserProfileRepository`，支持在非Spring管理的Bean中调用
    - 保持单例模式的设计，确保配置全局一致性
  - **容错设计 🛡️**：
    - 获取 `UserProfile` 失败时自动降级使用默认值，不影响应用运行
    - 添加详细的日志记录，方便问题排查
    - 异常情况下优雅降级，确保系统稳定性
  - **代码质量提升 📊**：
    - 添加详细的方法注释，说明设计思路和使用场景
    - 统一了 `ConfigDTO` 和 `AbstractRecruitmentService` 的配置转换逻辑
    - 消除了数据源不一致的潜在问题

### Technical Details
- **修改文件**：
  - `ConfigDTO.java`：
    - 新增 `UserProfile` 和 `UserProfileRepository` 导入
    - 添加 `@Slf4j` 注解支持日志记录
    - 重构 `convertFromEntity()` 方法：
      - 通过 `SpringContextUtil` 获取 `UserProfileRepository`
      - 从 `UserProfile` 加载用户配置字段（6个字段）
      - 从 `ConfigEntity` 加载平台配置字段
      - 添加异常处理和日志记录
    - 更新方法注释，说明支持非Spring管理的Bean调用
- **设计原则**：
  - **单一数据源**：用户配置统一从 UserProfile 获取，平台配置从 ConfigEntity 获取
  - **职责分离**：UserProfile 存储"我是谁"，ConfigEntity 存储"我要找什么"
  - **统一架构**：ConfigDTO、AbstractRecruitmentService 使用相同的配置转换逻辑
  - **容错降级**：异常情况下使用默认值，保证系统可用性
- **收益**：
  - 消除配置数据源不一致的问题 ✅
  - 统一配置转换逻辑，降低维护成本 📉
  - 提高代码可读性和可维护性 📚
  - 支持非Spring环境调用，灵活性更强 🚀

## [2.1.15] - 2025-10-19 🍪

### Added
- **Cookie自动持久化！🔐 登录状态永久保存，告别重复登录**
  - **智能Cookie保存 💾**：平台登录成功后，自动将Cookie保存到对应平台的配置实体（ConfigEntity.cookieData）
    - 猎聘登录成功 → 自动保存Cookie到数据库
    - 51Job登录成功 → 自动保存Cookie到数据库
    - 智联招聘登录成功 → 自动保存Cookie到数据库
    - Boss直聘登录成功 → 自动保存Cookie到数据库
  - **启动自动恢复登录 🚀**：应用重启时，自动从配置加载Cookie到对应平台页面
    - PlaywrightService初始化时，为每个平台Page加载已保存的Cookie
    - 无需重新登录，直接恢复登录状态，省时省心！
  - **Cookie序列化方案 📦**：
    - 使用JSON格式存储Cookie（name、value、domain、path、expires、secure、httpOnly）
    - 兼容Playwright的Cookie对象结构，序列化/反序列化流程清晰
    - 支持过期时间、安全标志等完整Cookie属性
  - **容错设计 🛡️**：
    - Cookie加载失败不影响应用启动，自动降级为无Cookie状态
    - 详细的日志记录，方便排查Cookie相关问题
    - 对于没有Cookie配置的平台，优雅跳过加载流程

### Changed
- **LoginStatusCheckScheduler 增强 ⚡**：
  - 新增 `savePlatformCookieToConfig()` 方法：保存平台Cookie到配置实体
  - 新增 `getCookiesAsJson()` 方法：将Playwright Cookie对象序列化为JSON字符串
  - 四个平台检查方法（猎聘、51Job、智联、Boss）登录成功后自动保存Cookie
  - 注入 `ConfigService` 依赖，支持Cookie的数据库持久化
- **PlaywrightService 增强 🔧**：
  - 新增 `loadPlatformCookies()` 方法：从配置实体加载平台Cookie
  - 新增 `loadCookiesFromJson()` 方法：将JSON字符串反序列化为Playwright Cookie对象
  - 在 `init()` 初始化流程中，为每个平台Page预加载Cookie（在navigate之前）
  - 注入 `ConfigService` 依赖，支持从数据库读取Cookie
- **ConfigEntity 字段利用 📊**：
  - 充分利用现有的 `cookieData` 字段（TEXT类型），存储各平台Cookie的JSON数据
  - 按平台类型（platformType）隔离存储，每个平台独立管理自己的Cookie

### Technical Details
- **修改文件**：
  - `LoginStatusCheckScheduler.java`：
    - 添加 `ConfigService` 依赖注入
    - 新增 `savePlatformCookieToConfig()` 和 `getCookiesAsJson()` 方法
    - 在 `checkLiepinLoginStatus()`、`checkJob51LoginStatus()`、`checkZhilianLoginStatus()`、`checkBossLoginStatus()` 中添加Cookie保存逻辑
    - 导入 `com.github.openjson.JSONArray` 和 `com.github.openjson.JSONObject`
  - `PlaywrightService.java`：
    - 添加 `ConfigService` 依赖注入和构造函数
    - 新增 `loadPlatformCookies()` 和 `loadCookiesFromJson()` 方法
    - 在 `init()` 方法中为每个平台Page预加载Cookie
    - 导入 `com.github.openjson.JSONArray` 和 `com.github.openjson.JSONObject`
- **Cookie数据结构**（JSON格式）：
  ```json
  [
    {
      "name": "cookie_name",
      "value": "cookie_value",
      "domain": ".example.com",
      "path": "/",
      "expires": 1234567890.123,
      "secure": true,
      "httpOnly": true
    }
  ]
  ```
- **执行流程**：
  1. **登录成功时**：Page Cookie → JSON字符串 → ConfigEntity.cookieData → 数据库
  2. **应用启动时**：数据库 → ConfigEntity.cookieData → JSON字符串 → Page Cookie
- **收益**：
  - 告别频繁扫码登录，提升用户体验 ✨
  - 登录状态持久化，应用重启不丢失 💪
  - 自动化程度更高，运维更省心 🎯

## [2.1.14] - 2025-10-19 🎯

### Changed
- **代码重构！🏗️ 消除重复代码，引入优雅的抽象基类**
  - **创建抽象基类 AbstractRecruitmentService**：
    - 将各平台招聘服务中重复的 `convertConfigEntityToDTO()` 方法抽取到抽象基类
    - 提供统一的配置转换逻辑，减少代码重复约150行×2=300行
    - 引入模板方法模式，支持子类通过 `populatePlatformSpecificFields()` 扩展平台特定字段
  - **重构招聘服务实现类**：
    - `BossRecruitmentServiceImpl` 继承 `AbstractRecruitmentService`，移除重复代码
    - `LiepinRecruitmentServiceImpl` 继承 `AbstractRecruitmentService`，移除重复代码并覆写方法添加平台特定字段（publishTime）
    - 构造函数调整为先调用父类构造器 `super(configService, userProfileRepository)`
  - **设计模式应用**：
    - 使用模板方法模式（Template Method Pattern）提供可扩展的配置转换框架
    - 遵循开闭原则（Open-Closed Principle），对扩展开放、对修改封闭
    - 符合 DRY 原则（Don't Repeat Yourself），消除代码重复

- **配置架构再优化！✨ 全局配置全面统一到用户画像**
  - **核心配置迁移 🚀**：将简历、AI智能、推荐职位等核心配置从各平台配置（ConfigEntity）统一迁移到用户画像（UserProfile）
  - **一处配置，全局生效 🌍**：
    - 简历配置：`resumeImagePath`（简历图片路径）、`sendImgResume`（是否发送图片简历）、`sayHi`（打招呼内容）
    - AI智能功能：`enableAIGreeting`（AI智能打招呼）、`enableAIJobMatchDetection`（AI职位匹配检测）
    - 推荐职位：`recommendJobs`（推荐职位开关）
  - **架构更合理 🏗️**：
    - 用户个性化配置统一存储在 UserProfile，体现"一个候选人"的完整画像
    - 平台配置（ConfigEntity）专注于平台相关的筛选条件和技术参数
    - 职责分离更清晰，代码结构更优雅
  - **接口全面适配 🔧**：
    - 更新 `CommonConfigController`：在公共配置接口中支持这 6 个字段的保存和加载
    - 更新 `ConfigController`：移除平台配置中对这些字段的处理，避免重复配置
    - 新增 `convertToBoolean()` 辅助方法，智能转换布尔值（支持 Boolean、String、Number 等多种格式）
  - **数据结构优化 📊**：
    - `UserProfile` 实体新增 6 个字段，完善用户画像信息
    - `UserProfileDTO` 同步新增对应字段，保持前后端数据一致性
    - `ConfigEntity` 清理已迁移字段，保持代码简洁

### Technical Details
- **新增文件**：
  - `AbstractRecruitmentService.java`：抽象基类，提供通用的配置转换逻辑
    - 定义 `convertConfigEntityToDTO()` 方法，统一处理配置实体到 DTO 的转换
    - 提供 `populatePlatformSpecificFields()` 钩子方法，允许子类添加平台特定字段
    - 管理 `ConfigService` 和 `UserProfileRepository` 依赖
- **修改文件**：
  - `UserProfile.java`：新增 `sayHi`、`resumeImagePath`、`sendImgResume`、`enableAIGreeting`、`enableAIJobMatchDetection`、`recommendJobs` 字段
  - `UserProfileDTO.java`：同步新增 6 个字段的 DTO 定义
  - `ConfigEntity.java`：移除已迁移的 6 个字段，添加迁移说明注释
  - `CommonConfigController.java`：
    - 在 `saveCommonConfig()` 中添加 6 个字段的保存逻辑
    - 在 `convertToDTO()` 中添加 6 个字段的数据转换
    - 新增 `convertToBoolean()` 辅助方法，支持多种格式的布尔值转换
  - `ConfigController.java`：在 `toEntity()` 方法中移除 6 个字段的处理，添加迁移说明注释
  - `BossRecruitmentServiceImpl.java`：
    - 继承 `AbstractRecruitmentService` 抽象基类
    - 移除重复的 `convertConfigEntityToDTO()` 方法（约80行代码）
    - 调整构造函数，调用父类构造器传递 `ConfigService` 和 `UserProfileRepository`
    - 清理不再需要的依赖字段和 import 语句
  - `LiepinRecruitmentServiceImpl.java`：
    - 继承 `AbstractRecruitmentService` 抽象基类
    - 移除重复的 `convertConfigEntityToDTO()` 方法（约80行代码）
    - 覆写 `populatePlatformSpecificFields()` 方法，添加猎聘特有的 `publishTime` 字段
    - 调整构造函数，调用父类构造器传递 `ConfigService` 和 `UserProfileRepository`
    - 移除 `@RequiredArgsConstructor` 注解，改用显式构造函数
    - 清理不再需要的 import 语句
- **迁移字段清单**（从 ConfigEntity → UserProfile）：
  - `sayHi` - 打招呼内容（TEXT）
  - `resumeImagePath` - 简历图片路径（VARCHAR）
  - `sendImgResume` - 是否发送图片简历（Boolean）
  - `enableAIGreeting` - 启用AI智能打招呼（Boolean）
  - `enableAIJobMatchDetection` - 启用AI职位匹配检测（Boolean）
  - `recommendJobs` - 推荐职位（Boolean）
- **数据来源调整**：
  - 各平台招聘服务实现类统一从 UserProfile 获取用户个性化配置
  - 从 ConfigEntity 获取平台相关的筛选条件和技术参数
  - 确保配置读取的一致性和准确性
- **重构收益**：
  - 减少重复代码约 160 行（80行×2个平台）
  - 提高代码可维护性，修改配置转换逻辑只需在一处进行
  - 便于未来新增招聘平台，只需继承基类即可复用配置转换逻辑
  - 通过钩子方法支持平台特定扩展，灵活性与统一性兼得
- **设计理念**：
  - UserProfile：存储"我是谁"（候选人画像、简历、AI偏好）
  - ConfigEntity：存储"我要找什么"（平台筛选条件、技术参数）
  - AbstractRecruitmentService：提供"怎么转换"（统一的配置转换逻辑）

## [2.1.13] - 2025-10-18 🤖

### Changed
- **AI智能配置大统一！✨ 一处配置，全平台生效**
  - **告别重复配置 🎯**：将Boss直聘、智联招聘、51job、猎聘等各平台的AI智能配置统一移至公共配置中心
  - **一键掌控全局 🌍**：
    - 在公共配置中设置AI职位匹配检测开关，自动应用到所有招聘平台
    - 在公共配置中设置AI智能打招呼开关，自动应用到所有招聘平台
    - 无需在每个平台重复配置，省心省力！
  - **界面更简洁 ✂️**：
    - 移除Boss直聘、智联招聘、51job、猎聘四个平台的独立AI配置卡片
    - 公共配置新增"AI智能功能"区域，包含两个核心开关：
      - AI职位匹配检测：智能分析职位描述，检测岗位匹配度
      - AI智能打招呼：根据候选人信息和JD生成个性化招呼语
  - **代码全面重构 🔧**：
    - 更新 `common-config.js`：添加AI智能功能开关的收集、保存、加载逻辑
    - 更新 `boss-config-form.js`：移除 `enableAIJobMatchDetection`、`enableAIGreeting`、`checkStateOwned` 相关代码
    - 更新 `zhilian-config-form.js`：移除 `enableAIJobMatch` 相关代码
    - 更新 `job51-config-form.js`：移除 `enableAIJobMatch` 相关代码
    - 更新 `liepin-config-form.js`：移除 `enableAIJobMatch` 相关代码
    - 清理HTML：删除各平台重复的AI智能配置卡片（约100行代码）
  - **用户体验提升 🚀**：
    - 配置管理更集中，避免在多个平台重复配置相同功能
    - AI功能开关统一管理，切换更便捷
    - 界面更清爽，减少认知负担

### Technical Details
- **修改文件**：
  - `index.html`：
    - 公共配置新增AI智能功能区域（`commonEnableAIJobMatch`、`commonEnableAIGreeting`）
    - 删除Boss直聘、智联招聘、51job、猎聘的AI配置卡片
  - `common-config.js`：
    - 在 `saveCommonConfig()` 中添加AI智能功能开关的收集
    - 在 `loadCommonConfig()` 中添加AI智能功能开关的回填
    - 在 `resetCommonConfig()` 中添加AI智能功能开关的重置
  - `boss-config-form.js`：从 `saveConfig()`、`getFieldId()`、`getCurrentConfig()` 中移除AI配置字段
  - `zhilian-config-form.js`：从 `getCurrentConfig()`、`getFieldId()` 中移除AI配置字段
  - `job51-config-form.js`：从 `saveConfig()`、`getFieldId()`、`getCurrentConfig()` 中移除AI配置字段
  - `liepin-config-form.js`：从 `saveConfig()`、`getFieldId()`、`getCurrentConfig()` 中移除AI配置字段
- **新增字段**（公共配置）：
  - `enableAIJobMatch` - AI职位匹配检测开关（应用于所有平台）
  - `enableAIGreeting` - AI智能打招呼开关（应用于所有平台）
- **移除字段**（各平台配置）：
  - Boss直聘：`enableAIJobMatchDetection`、`enableAIGreeting`、`checkStateOwned`
  - 智联招聘：`enableAIJobMatch`
  - 51job：`enableAIJobMatch`
  - 猎聘：`enableAIJobMatch`

## [2.1.12] - 2025-10-18 🎯

### Removed
- **数据库备份按钮移除！🗑️ 自动化配置备份，告别多余点击**
  - **简化用户操作 ✨**：移除了所有平台的手动数据库备份按钮，配置自动保存到本地缓存，无需用户手动触发备份
  - **界面更简洁 ✂️**：
    - 移除Boss直聘、智联招聘、前程无忧、猎聘四个平台的数据库备份按钮
    - 保存配置按钮由原来的 col-6 调整为 col-12，占据整行宽度，视觉更舒适
  - **代码全面清理 🧹**：
    - 从 `app.js` 移除：`handleBackupData()` 方法和备份按钮事件绑定
    - 从 `boss-config-form.js` 移除：`handleBackupData()` 方法和备份按钮事件绑定
    - 从 `zhilian-config-form.js` 移除：`handleBackupData()` 方法和备份按钮事件绑定
    - 从 `job51-config-form.js` 移除：`handleBackupData()` 方法和备份按钮事件绑定
    - 从 `liepin-config-form.js` 移除：`handleBackupData()` 方法和备份按钮事件绑定
    - 从 `index.html` 移除：所有4个平台的备份按钮HTML代码
  - **用户体验提升 🚀**：
    - 配置数据自动保存到 localStorage 本地缓存
    - 同步保存到后端接口，双重保障数据安全
    - 减少不必要的用户交互，让流程更顺畅

### Technical Details
- **移除文件**：无（仅移除代码片段）
- **修改文件**：
  - `index.html`：移除4个备份按钮，调整布局从 col-6 到 col-12
  - `app.js`：移除 `handleBackupData()` 方法和事件绑定（约35行）
  - `boss-config-form.js`：移除 `handleBackupData()` 方法和事件绑定（约30行）
  - `zhilian-config-form.js`：移除 `handleBackupData()` 方法和事件绑定（约10行）
  - `job51-config-form.js`：移除 `handleBackupData()` 方法和事件绑定（约30行）
  - `liepin-config-form.js`：移除 `handleBackupData()` 方法和事件绑定（约15行）
- **影响接口**：无（移除了对 `/api/backup/export` 的前端调用，但接口仍保留供后端使用）

## [2.1.11] - 2025-10-18 📦

### Changed
- **配置统一优化！✨ 简历配置移至公共配置**
  - **告别重复配置 🎯**：将Boss直聘、猎聘等各平台的简历配置（简历图片路径、打招呼内容）统一移至公共配置中心
  - **一处配置，全局生效 🌍**：在公共配置中设置一次，自动应用到所有招聘平台，省心省力！
  - **界面更简洁 ✂️**：
    - 移除Boss直聘配置页面的简历配置卡片
    - 移除猎聘配置页面的简历配置卡片
    - 公共配置新增"简历配置"区域，包含简历图片路径和打招呼内容
  - **代码全面重构 🔧**：
    - 更新 `common-config.js`：添加简历配置的收集、保存、加载逻辑
    - 更新 `boss-config-form.js`：移除简历配置相关的验证和表单处理代码
    - 清理HTML：删除各平台重复的简历配置表单项
  - **用户体验提升 🚀**：配置管理更集中，避免在多个平台重复配置相同内容

### Technical Details
- **修改文件**：
  - `index.html`：公共配置新增简历配置区域，删除Boss直聘、猎聘的简历配置卡片
  - `common-config.js`：在 `collectProfileData()`、`saveCommonConfig()`、`populateProfileForm()` 中添加简历配置处理
  - `boss-config-form.js`：从 `saveConfig()`、`getCurrentConfig()`、`getFieldId()`、`validateRequiredFields()`、`bindFormValidation()`、`bindEvents()` 中移除简历配置相关代码
- **新增字段**（公共配置）：
  - `commonResumeImagePath` - 简历图片路径（应用于所有平台）
  - `commonSayHiContent` - 打招呼内容（应用于所有平台）
- **移除字段**（各平台配置）：
  - Boss直聘：`resumeImagePath`、`sayHi`
  - 猎聘：`liepinResumeImagePath`、`liepinSayHiTextArea`

## [2.1.10] - 2025-10-18 🚀

### Changed
- **UI优化！🎨 移除冗余的只读求职配置查看板块**
  - **精简界面 ✂️**：移除了独立的"求职配置"只读查看标签页，配置信息已在填写表单中实时回显，无需额外查看页面
  - **代码清理 🧹**：
    - 删除 `boss-config-readonly.js` 文件及其在 `index.html` 中的引用
    - 移除 `app.js` 中的 `bindBossConfigViewEvents()` 方法和相关Vue应用初始化代码
    - 删除 `index.html` 中的"求职配置"标签页HTML结构（约170行）
  - **用户体验提升 🚀**：界面更简洁，配置管理更直观，减少了重复展示
- **候选人信息重构！✨ 更简洁、更聚焦、更智能！**
  - **精简核心字段 🎯**：从原来10+个冗长字段精简到11个核心要素，删繁就简，填表更快捷～
  - **新增必填字段验证 ✅**：
    - `jobTitle` - 职位名称（必填）
    - `skills` - 核心技能（必填，标签形式，至少1项）
    - `yearsOfExperience` - 工作年限（必填，下拉选择，支持如"3-5年"、"高级"等）
    - `careerIntent` - 职业意向（必填，10-40字软校验）
  - **智能配置字段 🤖**：
    - `tone` - 沟通语气（可选：礼貌亲切、专业克制、自然轻松、简洁商务）
    - `language` - 语言（可选：中文简体、英文，默认中文）
    - `maxChars` - 最大字符数（可选，范围80-180，默认120）
    - `dedupeKeywords` - 去重关键词（可选，标签形式）
  - **增强的个性化字段 💡**：
    - `domainExperience` - 领域经验（可选下拉：跨境电商、金融科技、SaaS等10+领域）
    - `location` - 期望地点（可选）
    - `highlights` - 个人亮点（可选标签，最多5项）
  - **标签输入体验升级 🏷️**：`skills`、`highlights`、`dedupeKeywords` 使用 TagsInput 组件，支持动态添加/删除，更直观更便捷！
  - **完整的前后端重构 🔧**：
    - 全面重写 `collectProfileData()`、`validateProfileData()`、`populateProfileForm()` 函数
    - 新增三个标签输入组件：`skillsTagsInput`、`highlightsTagsInput`、`dedupeKeywordsTagsInput`
    - 智能验证：职位名称、技能、工作年限必填；职业意向10-40字；个人亮点最多5项；字符数80-180范围
  - **告别历史包袱 👋**：移除了过时字段（role、years、domains、coreStack、achievements、strengths、improvements、availability、links等）

### Technical Details
- **修改文件**：`index.html`、`common-config.js`
- **新增字段**（11个核心字段）：
  - 必填：`jobTitle`, `skills`, `yearsOfExperience`, `careerIntent`
  - 可选：`domainExperience`, `location`, `tone`, `language`, `highlights`, `maxChars`, `dedupeKeywords`
- **移除字段**：`role`, `years`, `domains`, `coreStack`, `achievements`, `strengths`, `improvements`, `availability`, `links` (github, portfolio)
- **新增组件**：3个 TagsInput 标签输入组件
- **重构函数**：数据收集、验证、保存、重置、加载全流程重构

## [2.1.9] - 2025-10-17 🏗️

### Changed
- **职位匹配模块架构升级！✨ AI提示词管理更优雅！**
  - 参考 `greeting` 模块的设计，给 `job` 模块的提示词系统来了个大变身！
  - **告别配置文件硬编码 👋**：提示词从 `application-gpt.yml` 搬家到独立的 YAML 文件 `prompts/job-match-v1.yml`，版本管理更清晰！
  - **结构化提示词 🎨**：采用 segments 设计（SYSTEM、GUIDELINES、USER），提示词结构一目了然，修改起来不再头疼～
  - **新增组装器 🔧**：创建了 `JobPromptAssembler` 和 `JobPromptVariables`，专业管理提示词变量，告别魔法字符串！
  - **接口更简洁 🚀**：重构了 `JobMatchAiService`，移除冗余的 `platform` 参数，使用统一的 `LlmClient`，调用更丝滑！
  - **模板仓库完善 📚**：实现了 `TemplateRepository` 的 YAML 自动加载功能，支持热加载多版本提示词，A/B测试随时来！
  - **架构统一 🎯**：现在 `job` 和 `greeting` 模块使用相同的提示词管理架构，代码更优雅，维护更省心！
  - **详细文档 📝**：新增 `JOB_MODULE_REFACTORING.md` 文档，记录了所有架构变化和使用示例，技术细节全都有～

### Technical Details
- 新增文件：`prompts/job-match-v1.yml`、`JobPromptAssembler.java`、`JobPromptVariables.java`
- 重构文件：`JobMatchAiService.java`、`JobMatchRequest.java`、`TemplateRepository.java`
- 清理配置：移除 `application-gpt.yml` 中的旧提示词配置，更清爽！

## [2.1.8] - 2025-10-17 💅

### Changed
- **UI大焕新！✨ 智能求职助手颜值爆改！**
  - 拜拜👋 传统上下布局，快来拥抱超in的左侧菜单栏设计，操作丝滑，颜值与实力并存！
  - **布局重塑 🛠️**：从头到脚重构了 `index.html`，页面结构更清晰，逻辑分区更合理，找东西不迷路～
  - **风格新生 🎨**：`style.css` 全面升级！注入现代设计感，深色侧边栏搭配清爽内容区，高级感瞬间拉满！
  - **体验飞跃 🚀**：导航栏华丽变身，从顶部“横批”变身左侧“竖列”，找功能快人一步，告别手忙脚乱。
  - **细节控福音 🍬**：精心调整了卡片、按钮和字体样式，每一处都透露着精致，让你的求职之旅赏心悦目～

## [2.1.7] - 2025-10-16 🔧

### Fixed
- **登录状态Bug修复 ✅**
  - 修复了 `isLoggedIn()` 前端缓存没及时更新，导致登录按钮状态“假死”的小毛病。
  - 新增后端接口 `/api/tasks/status` 兜底，确保登录状态以后端大大为准，双重保险更安心！🔒
  - 增加了详细的“黑匣子”日志，记录前后端状态差异，方便快速定位问题。
  - 检测到状态不一致时，会自动同步前端缓存并“嘀嘀”发出警告日志。
- **Playwright 分页点击异常修复 📄**
  - 修复了翻页时偶尔出现的 `PlaywrightException` 异常，不再错过任何一个好机会！
  - 引入智能重试机制，当 Playwright 闹小脾气时，我们会耐心安抚并重试，而不是直接放弃。
  - 在点击前后都会检查页面状态，像贴心管家一样确保一切就绪。
  - 增强了系统的“强心脏”💪，避免因内部资源临时“打盹”导致任务中断。

## [2.1.6] - 2025-10-15 🧠

### Added
- **Deepseek AI 配置动态刷新 ✨**
  - 无需重启应用，配置一秒生效！实现了基于 `@RefreshScope` 的优雅热更新。
  - 现在可以随时更换 AI 的 API Key、模型等，就像换衣服一样简单！
  - 零停机完成配置切换，工作娱乐两不误。

### Changed
- **技术宅的小优化 🤓**
  - 优化了 `DeepseekGptConfig` 配置类，让它支持动态刷新。
  - 引入了 `spring-cloud-context` 和 `actuator`，解锁更多高级玩法。
  - 新增 `application-actuator.yml` 配置文件，让技术大佬们可以更方便地管理应用。

## [2.1.5] - 2025-10-14 🛠️

### Added
- **公共配置模块闪亮登场 🎈**
  - 新增黑名单功能，不喜欢的公司和岗位，一键拉黑，眼不见心不烦！
  - 新增候选人信息配置，让AI更懂你，为你生成专属的打招呼内容。
- **AI智能打招呼功能上线 🤖**
  - AI帮你写开场白，根据你的信息和岗位JD，生成超有诚意的招呼语，让HR眼前一亮！
  - 如果AI卡壳了，也会自动切换回默认内容，保证万无一失。

### Changed
- **任务流程大梳理 🏃‍♀️**
  - 登录操作简化啦！现在系统会自动检查登录状态，你只需要在浏览器里登录一次就好。
  - 任务管理更清晰，单独抽离成一个模块，告别混乱。
- **告别自动保存的小烦恼 📝**
  - 为了解决数据库“打架”的问题，现在需要小可爱们手动点击保存按钮啦，自己的配置自己做主！

## [2.1.4.1] - 2025-09-29 🛠️

### Changed
- **重构: 任务状态管理** ⚙️
  - **背景**: 任务状态分散在各自服务中，缺乏统一管理。
  - **变更**: 引入 Spring 事件机制 (`TaskUpdateEvent`) 和 `task` 模块，实现状态的集中管理和通过 `/api/tasks/status` 实时查询。
  - **影响**: 实现了状态管理的解耦和集中化，提高了系统的可观测性与可维护性。
- **重构: PlaywrightService Context 管理** 🧠
  - **背景**: 每个平台独立的 `BrowserContext` 导致资源消耗过高。
  - **变更**: 重构为单一共享的 `BrowserContext`，减少浏览器窗口数量。
  - **影响**: 显著降低了应用启动时的资源消耗。
- **重构: PlaywrightUtil 迁移至 PlaywrightService** 🏗️
  - **背景**: `PlaywrightUtil` 包含复杂业务逻辑，难以测试和扩展。
  - **变更**: 创建 `PlaywrightService` 替代 `PlaywrightUtil`，支持按平台隔离 `Context`。
  - **影响**: 提高了代码的可维护性、稳定性和可测试性。

## [2.1.4] - 2025-09-27 🚀

### Added
- **新平台解锁！51job & 智联招聘加入大家庭 🎉**
  - 现在可以在51job和智联上自动检索和投递啦！
  - **温馨提示 📢**：智联需要手机号验证才能登录哦，记得激活一下～
- **猎聘板块正在路上... 🚧**
  - 敬请期待，我们正在快马加鞭开发中！

## [2.1.3] - 2025-09-23 🧩

### Added
- **51job 配置板块来啦！**
  - 现在可以为51job单独设置你的求职偏好啦。

### Fixed
- **修复了一些小bug 🐞**
  - 解决了BOSS和51JOB字典值显示不正确的问题。
  - 修复了BOSS期望薪资过滤的小问题。
  - 增加了一个手动标记登录的按钮，刷新后也不怕状态丢失啦。

## [2.1.2] - 2025-09-20 🎯

### Fixed
- **投递更智能！**
  - 现在会自动过滤掉已经投递过的岗位，不再重复劳动。
  - 解决了BOSS风控偶尔导致任务中断的问题，现在更稳定啦。

## [2.1.1] - 2025-09-17 🌟

### Added
- **“神仙外企”模块上线！**
  - 想找外企工作的小伙伴们看过来！

### Changed
- **BOSS查询更强大！**
  - 岗位查询的字典值现在从接口动态获取，信息更全更准。
  - 简化了系统配置，让你开箱即用，减少烦恼。
- **智能匹配升级！**
  - 移除了旧的关键词匹配，未来将用期望职位和JD进行更智能的匹配。

### Fixed
- **修复了重复打招呼的尴尬... 😅**
