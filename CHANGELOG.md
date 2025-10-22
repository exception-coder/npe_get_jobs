# Changelog 💖
Hello 小可爱们！这里是我们的成长日记，所有酷炫的更新和优化都会在这里记录哦！

## [1.0.28] - 2025-10-22 🎯

### Changed
- **TaskService架构全面统一！✨ 配置管理更优雅**
  - **告别传参冗余 🎯**：将 `BossTaskService`、`Job51TaskService`、`LiepinTaskService`、`ZhilianTaskService` 四大平台TaskService全面优化
  - **接口签名统一简化 🚀**：移除所有任务方法的 `ConfigDTO` 参数
    - `login(ConfigDTO config)` → `login()`
    - `collectJobs(ConfigDTO config)` → `collectJobs()`
    - `filterJobs(ConfigDTO config)` → `filterJobs()`
    - `deliverJobs(ConfigDTO config, boolean enableActualDelivery)` → `deliverJobs(boolean enableActualDelivery)`
  - **服务层类型优化 🏗️**：
    - 原来：`RecruitmentService service = serviceFactory.getService(...)`
    - 现在：`AbstractRecruitmentService service = (AbstractRecruitmentService) serviceFactory.getService(...)`
    - 通过父类类型转换，直接访问 `loadPlatformConfig()` 方法
  - **配置自动加载 🤖**：
    - 移除外部传参，TaskService内部通过 `service.loadPlatformConfig()` 自动获取平台配置
    - 配置来源统一从数据库读取，确保数据一致性
    - 无需关心配置如何传递，代码更简洁
  - **架构更合理 📐**：
    - TaskService 专注于任务编排和状态管理
    - RecruitmentService 负责业务执行和配置获取
    - 职责分离更清晰，符合单一职责原则
  - **代码更简洁 ✂️**：
    - 清理未使用的 `ConfigDTO` 和 `RecruitmentService` import
    - 减少方法参数，调用链路更清晰
    - 四大平台实现方式完全统一

### Technical Details
- **修改文件**（4个TaskService）：
  - `BossTaskService.java`：
    - 移除4个方法的 `ConfigDTO` 参数：`login()`、`collectJobs()`、`filterJobs()`、`deliverJobs(boolean)`
    - 使用 `AbstractRecruitmentService` 类型替代 `RecruitmentService`
    - 在 `collectJobs()` 中调用 `loadPlatformConfig()` 获取配置（用于判断是否采集推荐岗位）
    - 添加显式 import `AbstractRecruitmentService`
  - `Job51TaskService.java`：
    - 移除4个方法的 `ConfigDTO` 参数
    - 使用 `AbstractRecruitmentService` 类型替代 `RecruitmentService`
    - 清理未使用的 import（`ConfigDTO`、`RecruitmentService`）
  - `LiepinTaskService.java`：
    - 移除4个方法的 `ConfigDTO` 参数
    - 使用 `AbstractRecruitmentService` 类型替代 `RecruitmentService`
    - 清理未使用的 import（`ConfigDTO`、`RecruitmentService`）
  - `ZhilianTaskService.java`：
    - 移除4个方法的 `ConfigDTO` 参数
    - 使用 `AbstractRecruitmentService` 类型替代 `RecruitmentService`
    - 清理未使用的 import（`ConfigDTO`、`RecruitmentService`）
- **设计模式**：
  - **策略模式**：通过 `AbstractRecruitmentService` 统一访问平台配置
  - **依赖倒置**：TaskService 依赖抽象类型而非具体实现
  - **单一职责**：TaskService 专注任务编排，配置管理交给 Service 层
- **代码对比**：
  ```java
  // 重构前
  public CollectResult collectJobs(ConfigDTO config) {
      RecruitmentService service = serviceFactory.getService(...);
      if (config.getRecommendJobs()) {
          // 使用外部传入的config
      }
  }
  
  // 重构后
  public CollectResult collectJobs() {
      AbstractRecruitmentService service = (AbstractRecruitmentService) 
          serviceFactory.getService(...);
      ConfigDTO config = service.loadPlatformConfig();
      if (config != null && config.getRecommendJobs()) {
          // 服务自己加载配置
      }
  }
  ```

### 收益
- ✅ 四大平台TaskService架构完全统一，代码风格一致
- ✅ 接口签名更简洁，参数列表大幅简化
- ✅ 配置管理统一，避免外部传参导致的数据不一致
- ✅ 职责分离更清晰，TaskService专注任务编排
- ✅ 代码可维护性更高，修改配置逻辑只需在Service层进行
- ✅ 为未来扩展新平台提供了标准化模板

## [1.0.27] - 2025-10-22 🎯

### Changed
- **配置加载架构重大升级！✨ 告别前端参数传递，全面拥抱数据库驱动**
  - **接口签名统一简化 🚀**：移除所有平台服务接口方法的 `ConfigDTO` 参数
    - `login(ConfigDTO config)` → `login()`
    - `collectJobs(ConfigDTO config)` → `collectJobs()`
    - `collectRecommendJobs(ConfigDTO config)` → `collectRecommendJobs()`
    - `filterJobs(List<JobDTO> jobDTOS, ConfigDTO config)` → `filterJobs(List<JobDTO> jobDTOS)`
    - `deliverJobs(List<JobDTO> jobDTOS, ConfigDTO config)` → `deliverJobs(List<JobDTO> jobDTOS)`
  - **数据库驱动配置 🎯**：
    - 原来：前端传递配置参数 → 后端服务使用参数
    - 现在：后端服务自动从数据库加载配置 → 统一配置管理
    - 每个方法内部通过 `loadPlatformConfig()` 自动获取对应平台配置
    - 配置不存在时优雅降级，记录警告日志并返回默认值
  - **架构更合理 🏗️**：
    - 配置管理完全由后端控制，前端无需关心配置传递
    - 单一数据源原则：所有配置统一从数据库获取，避免数据不一致
    - 职责分离更清晰：前端负责展示和用户交互，后端负责业务逻辑和配置管理
  - **全平台统一实现 🌍**：
    - Boss直聘、智联招聘、51job、猎聘四大平台全部适配
    - 所有平台使用统一的配置加载机制
    - 通过抽象基类 `AbstractRecruitmentService.loadPlatformConfig()` 复用配置加载逻辑
  - **容错设计优化 🛡️**：
    - 配置缺失时不会抛出异常，而是记录警告并跳过操作
    - 详细的日志记录，方便问题排查和监控
    - 确保系统在配置异常情况下仍能正常运行

### Technical Details
- **修改接口**：
  - `RecruitmentService.java`：
    - 移除5个核心方法的 `ConfigDTO` 参数
    - 更新方法注释，说明"配置信息从数据库自动加载"
    - 保持方法返回值不变，仅简化参数列表
- **修改实现类**（4个平台）：
  - `BossRecruitmentServiceImpl.java`：
    - `login()`：移除参数，方法体无需修改（原本就不使用config）
    - `collectJobs()`：在方法开头添加 `ConfigDTO config = loadPlatformConfig();` + 空值校验
    - `collectRecommendJobs()`：移除参数，方法体无需修改（原本就不使用config）
    - `filterJobs()`：在方法开头添加配置加载 + 空值校验
    - `deliverJobs()`：在方法开头添加配置加载 + 空值校验
  - `ZhiLianRecruitmentServiceImpl.java`：
    - 同上述模式修改5个方法
    - `collectJobs()` 中使用 config 参数的地方无需修改，已自动使用局部加载的 config
  - `LiepinRecruitmentServiceImpl.java`：
    - 同上述模式修改5个方法
    - `deliverJobs()` 中使用 `config.getSayHi()` 的地方无需修改，已自动使用局部加载的 config
  - `Job51RecruitmentServiceImpl.java`：
    - 同上述模式修改5个方法
    - 修复 `login()` 方法中的bug：原来调用 `login()` 导致递归，改为调用 `performLogin()`
- **配置加载模式**：
  ```java
  // 重构前
  @Override
  public List<JobDTO> collectJobs(ConfigDTO config) {
      // 直接使用传入的config参数
      for (String cityCode : config.getCityCodeCodes()) {
          // ...
      }
  }
  
  // 重构后
  @Override
  public List<JobDTO> collectJobs() {
      // 从数据库加载平台配置
      ConfigDTO config = loadPlatformConfig();
      if (config == null) {
          log.warn("平台配置未找到，跳过岗位采集");
          return new ArrayList<>();
      }
      // 使用局部加载的config，其余逻辑不变
      for (String cityCode : config.getCityCodeCodes()) {
          // ...
      }
  }
  ```
- **空值处理策略**：
  - `login()`：配置为空时跳过，但不影响登录流程（登录主要依赖Cookie）
  - `collectJobs()`：配置为空时返回空列表，记录警告日志
  - `collectRecommendJobs()`：配置为空时返回空列表
  - `filterJobs()`：配置为空时返回原始列表（跳过过滤）
  - `deliverJobs()`：配置为空时返回0（跳过投递）
- **设计原则遵循**：
  - **单一数据源原则**：所有配置统一从数据库获取，不依赖前端传参
  - **DRY原则**：通过抽象基类 `loadPlatformConfig()` 统一配置加载逻辑
  - **容错设计**：配置缺失时优雅降级，不影响系统稳定性
  - **职责分离**：配置管理由后端统一控制，前端专注用户交互

### 收益
- ✅ 接口更简洁，参数列表大幅简化，调用更清晰
- ✅ 配置管理统一，避免前端传参导致的数据不一致问题
- ✅ 单一数据源，所有配置从数据库读取，便于管理和审计
- ✅ 容错性更强，配置缺失时不会导致系统崩溃
- ✅ 代码可维护性更高，配置加载逻辑集中管理
- ✅ 为未来支持配置热更新、版本管理等高级特性打下基础

## [1.0.26] - 2025-10-22 🏗️

### Changed
- **代码架构继续优化！✨ 51job 和智联招聘服务重构完成**
  - **架构统一 🎯**：将 `Job51RecruitmentServiceImpl` 和 `ZhiLianRecruitmentServiceImpl` 也调整为继承 `AbstractRecruitmentService` 的方式
  - **告别直接实现接口 👋**：
    - 原来：直接实现 `RecruitmentService` 接口，配置转换逻辑需要自己实现
    - 现在：继承 `AbstractRecruitmentService` 抽象基类，自动获得通用配置转换能力
  - **代码更优雅 🎨**：
    - 移除 `@RequiredArgsConstructor` 注解，改用显式构造函数
    - 构造函数中调用父类构造器 `super(configService, userProfileRepository)`
    - 自动获得 `loadPlatformConfig()`、`loadPlatformConfigEntity()` 等便捷方法
  - **架构完全统一 🌍**：
    - Boss直聘、智联招聘、51job、猎聘四大平台全部使用统一的抽象基类
    - 所有平台都能复用配置转换、配置加载等通用逻辑
    - 为未来新增招聘平台提供了标准化的实现模板

### Technical Details
- **修改文件**：
  - `Job51RecruitmentServiceImpl.java`：
    - 类声明从 `implements RecruitmentService` 改为 `extends AbstractRecruitmentService`
    - 移除 `@RequiredArgsConstructor` 注解
    - 新增显式构造函数，注入 `ConfigService`、`UserProfileRepository`、`PlaywrightService`
    - 构造函数中调用 `super(configService, userProfileRepository)`
    - 更新 import 语句，移除 `RecruitmentService` 直接导入，新增抽象类相关导入
  - `ZhiLianRecruitmentServiceImpl.java`：
    - 类声明从 `implements RecruitmentService` 改为 `extends AbstractRecruitmentService`
    - 移除 `@RequiredArgsConstructor` 注解
    - 新增显式构造函数，注入 `ConfigService`、`UserProfileRepository`、`PlaywrightService`
    - 构造函数中调用 `super(configService, userProfileRepository)`
    - 更新 import 语句，移除 `RecruitmentService` 直接导入，新增抽象类相关导入
- **设计模式**：
  - **模板方法模式**：所有平台都继承抽象基类，复用通用逻辑
  - **DRY原则**：消除了四个平台中潜在的配置转换重复代码
  - **统一架构**：四大平台实现方式完全一致，代码风格统一
- **代码对比**：
  ```java
  // 重构前
  @RequiredArgsConstructor
  public class Job51RecruitmentServiceImpl implements RecruitmentService {
      private final PlaywrightService playwrightService;
      // 需要自己实现所有配置转换逻辑
  }
  
  // 重构后
  public class Job51RecruitmentServiceImpl extends AbstractRecruitmentService {
      private final PlaywrightService playwrightService;
      
      public Job51RecruitmentServiceImpl(ConfigService configService, 
                                         UserProfileRepository userProfileRepository,
                                         PlaywrightService playwrightService) {
          super(configService, userProfileRepository);
          this.playwrightService = playwrightService;
      }
      // 自动继承配置转换、配置加载等通用方法
  }
  ```

### 收益
- ✅ 四大平台架构完全统一，代码风格一致
- ✅ 自动获得配置转换和加载能力，无需重复实现
- ✅ 代码可维护性更高，修改通用逻辑只需在基类进行
- ✅ 为未来扩展新平台提供了标准化模板
- ✅ 降低新增平台的开发成本和学习成本

## [1.0.25] - 2025-10-22 🏗️

### Changed
- **配置加载逻辑进一步抽象！✨ 平台配置获取自动化**
  - **新增通用配置加载方法 🎯**：在 `AbstractRecruitmentService` 抽象类中新增两个强大的通用方法
    - `loadPlatformConfigEntity()` - 自动加载当前平台的配置实体
    - `loadPlatformConfig()` - 自动加载并转换当前平台的配置为DTO
  - **告别硬编码平台类型 👋**：
    - 原来：`configService.loadByPlatformType(RecruitmentPlatformEnum.BOSS_ZHIPIN.getPlatformCode())`
    - 现在：`loadPlatformConfigEntity()` 或 `loadPlatformConfig()`
    - 自动根据 `getPlatform()` 方法获取对应平台配置，无需硬编码平台枚举
  - **代码大幅简化 ✂️**：
    - Boss直聘：3个方法受益（`filterJobs()`、`getCookieFromConfig()`、`saveCookieToConfig()`）
    - 猎聘：1个方法受益（`filterJobs()`）
    - 将原本7-9行的配置加载和转换代码简化为1-2行
  - **架构更优雅 🎨**：
    - 抽象类统一管理配置加载逻辑，子类直接调用即可
    - 每个子类自动使用自己的平台配置，无需关心底层实现
    - 为未来新增招聘平台提供开箱即用的配置管理能力

### Technical Details
- **修改文件**：
  - `AbstractRecruitmentService.java`：
    - 新增 `loadPlatformConfigEntity()` 方法（返回 ConfigEntity）
    - 新增 `loadPlatformConfig()` 方法（返回 ConfigDTO）
    - 两个方法都自动根据 `getPlatform().getPlatformCode()` 获取对应平台配置
    - 配置不存在时自动记录警告日志并返回 null
  - `BossRecruitmentServiceImpl.java`：
    - `filterJobs()` 方法：使用 `loadPlatformConfig()` 替代手动加载（7行→2行）
    - `getCookieFromConfig()` 方法：使用 `loadPlatformConfigEntity()` 替代手动加载
    - `saveCookieToConfig()` 方法：使用 `loadPlatformConfigEntity()` 和 `getPlatform().getPlatformCode()`
  - `LiepinRecruitmentServiceImpl.java`：
    - `filterJobs()` 方法：使用 `loadPlatformConfig()` 替代手动加载（7行→2行）
- **设计模式**：
  - **模板方法模式**：抽象类提供通用配置加载逻辑，子类直接使用
  - **DRY原则**：消除了各子类中重复的配置加载代码
  - **自动化原则**：通过 `getPlatform()` 自动获取平台类型，无需硬编码
- **代码对比**：
  ```java
  // 重构前（9行）
  ConfigEntity configEntity = configService
          .loadByPlatformType(RecruitmentPlatformEnum.BOSS_ZHIPIN.getPlatformCode());
  if (configEntity == null) {
      log.warn("数据库中未找到boss平台配置，跳过过滤");
      return jobDTOS;
  }
  ConfigDTO dbConfig = convertConfigEntityToDTO(configEntity);
  
  // 重构后（4行）
  ConfigDTO dbConfig = loadPlatformConfig();
  if (dbConfig == null) {
      log.warn("跳过过滤");
      return jobDTOS;
  }
  ```

### 收益
- ✅ 消除重复代码，减少约20行重复逻辑
- ✅ 代码更简洁，可读性更高
- ✅ 维护成本降低，配置加载逻辑统一管理
- ✅ 新增平台时可直接使用抽象方法，开发更快捷
- ✅ 自动化程度更高，减少人为错误

## [1.0.24] - 2025-10-21 🎯

### Changed
- **候选人信息配置全面升级！✨ 新版字段体系上线**
  - **新版字段体系 🚀**：引入更直观、更符合招聘场景的候选人信息字段
  - **核心新增字段（11个）**：
    - `jobTitle` - 职位名称（如："Java开发工程师"）
    - `skills` - 核心技能列表（如：["Spring Boot", "MySQL"]）
    - `yearsOfExperience` - 工作年限（如："3-5年"、"高级"）
    - `careerIntent` - 职业意向（求职目标描述）
    - `domainExperience` - 领域经验（如："跨境电商"、"金融科技"）
    - `location` - 期望地点（如："北京、上海、可远程"）
    - `tone` - 沟通语气（如："礼貌亲切"、"专业克制"）
    - `language` - 语言（如："zh_CN"、"en_US"）
    - `highlights` - 个人亮点列表（最多5项）
    - `maxChars` - AI生成招呼语的最大字符数（80-180，默认120）
    - `dedupeKeywords` - 去重关键词列表
  - **功能开关新增字段（2个）**：
    - `filterDeadHR` - 过滤不活跃HR开关（全局功能）
    - `hrStatusKeywords` - HR过滤状态关键词列表（如：["半年前活跃"]）
  - **旧字段保留兼容 🔄**：
    - 保留 `role`、`years`、`domains`、`coreStack` 等旧字段，确保向下兼容
    - 新字段优先使用，同时同步更新旧字段值
    - 旧字段标注"保留旧字段兼容"，未来版本可能废弃
  - **前后端适配完成 🔧**：
    - 前端请求参数完全适配新字段体系
    - 后端接口兼容新旧字段，自动处理字段转换
    - 支持 `sayHi` ↔ `sayHiContent`、`enableAIJobMatch` ↔ `enableAIJobMatchDetection` 等字段别名

### Technical Details
- **修改实体**：
  - `UserProfile.java`：
    - 新增11个候选人信息字段（jobTitle、skills、yearsOfExperience 等）
    - 新增2个功能开关字段（filterDeadHR、hrStatusKeywords）
    - 旧字段从 `nullable = false` 改为可空，标注"保留旧字段兼容"
  - `UserProfileDTO.java`：
    - 同步新增13个字段的DTO定义
    - 保持前后端数据结构一致性
- **修改控制器**：
  - `CommonConfigController.java`：
    - `saveCommonConfig()` 方法：
      - 添加新字段的提取和保存逻辑
      - 新旧字段智能兼容（优先使用新字段，同时更新旧字段）
      - 支持字段别名（sayHiContent/sayHi、enableAIJobMatch/enableAIJobMatchDetection）
    - `convertToDTO()` 方法：
      - 添加新字段的映射逻辑
      - 完整返回新旧字段，保证兼容性
- **数据库字段映射**：
  - `job_title` - 职位名称（VARCHAR 100）
  - `skills` - 核心技能（TEXT, JSON）
  - `years_of_experience` - 工作年限（VARCHAR 50）
  - `career_intent` - 职业意向（TEXT）
  - `domain_experience` - 领域经验（VARCHAR 100）
  - `location` - 期望地点（VARCHAR 200）
  - `tone` - 沟通语气（VARCHAR 50）
  - `language` - 语言（VARCHAR 20）
  - `highlights` - 个人亮点（TEXT, JSON）
  - `max_chars` - 最大字符数（INT）
  - `dedupe_keywords` - 去重关键词（TEXT, JSON）
  - `filter_dead_hr` - 过滤不活跃HR（BOOLEAN）
  - `hr_status_keywords` - HR状态关键词（TEXT, JSON）
- **前端请求参数示例**：
  ```json
  {
    "jobBlacklistKeywords": "",
    "companyBlacklistKeywords": "",
    "jobTitle": "Java开发工程师",
    "skills": ["Spring Boot"],
    "yearsOfExperience": "5-8年",
    "careerIntent": "职业意向描述",
    "domainExperience": "",
    "location": "",
    "tone": "",
    "language": "zh_CN",
    "highlights": [],
    "maxChars": 120,
    "dedupeKeywords": [],
    "resumeImagePath": "",
    "sayHiContent": "",
    "aiPlatformConfigs": {},
    "enableAIJobMatch": false,
    "enableAIGreeting": false,
    "filterDeadHR": false,
    "sendImgResume": false,
    "recommendJobs": false,
    "hrStatusKeywords": ""
  }
  ```
- **设计理念**：
  - **向前兼容**：新字段体系更贴近真实招聘场景，降低用户理解成本
  - **向后兼容**：保留旧字段，确保已有数据和逻辑不受影响
  - **智能转换**：新旧字段自动同步，无需用户关心底层实现
  - **渐进式升级**：前端可逐步迁移到新字段，不影响现有功能

### 收益
- ✅ 候选人信息配置更直观，贴近真实招聘场景
- ✅ 支持更丰富的AI智能功能配置（语气、语言、字符数等）
- ✅ 功能开关统一到公共配置，避免重复配置
- ✅ 新旧字段完全兼容，平滑升级无感知
- ✅ 为未来AI智能匹配、个性化推荐打下基础

## [1.0.23] - 2025-10-21 ✨

### Changed
- **功能开关配置大统一！✨ 一处配置，全平台生效**
  - **告别重复配置 🎯**：将Boss直聘平台的功能开关统一移至公共配置中心
  - **一键掌控全局 🌍**：
    - 在公共配置中设置"过滤不活跃HR"开关，自动应用到所有招聘平台
    - 在公共配置中配置HR过滤状态关键词，自动应用到所有招聘平台
    - 在公共配置中设置"发送图片简历"开关，自动应用到所有招聘平台
    - 在公共配置中设置"接收推荐岗位"开关，自动应用到所有招聘平台
    - 无需在每个平台重复配置，省心省力！
  - **界面更简洁 ✂️**：
    - 移除Boss直聘配置页面的"功能开关"卡片
    - 公共配置新增"功能开关"区域，包含4个核心开关：
      - 过滤不活跃HR：自动过滤最近未活跃的HR，提高沟通效率
      - HR过滤状态配置：配置需要过滤的HR活跃状态关键词（如：半年前活跃）
      - 发送图片简历：自动发送图片版简历，提高简历查看率
      - 接收推荐岗位：自动接收系统推荐的相关职位
  - **代码全面重构 🔧**：
    - 更新 `common-config.js`：添加功能开关的收集、保存、加载、重置逻辑
    - 更新 `boss-config-form.js`：移除 `filterDeadHR`、`sendImgResume`、`recommendJobs`、`bossHrStatusKeywords` 相关代码
    - 清理HTML：删除Boss直聘的功能开关卡片（约80行代码）
  - **用户体验提升 🚀**：
    - 配置管理更集中，避免在多个平台重复配置相同功能
    - 功能开关统一管理，切换更便捷
    - 界面更清爽，减少认知负担

### Technical Details
- **修改文件**：
  - `index.html`：
    - 公共配置新增功能开关区域（4个复选框 + HR状态标签输入）
    - 删除Boss直聘配置页面的功能开关卡片
  - `common-config.js`：
    - 添加 `hrStatusTagsInput` 标签输入组件
    - 在 `init()` 中初始化HR状态标签输入组件
    - 在 `loadCommonConfig()` 中添加功能开关的回填逻辑
    - 在 `saveCommonConfig()` 中添加功能开关的收集和保存
    - 在 `resetCommonConfig()` 中添加功能开关的重置
  - `boss-config-form.js`：
    - 从 `constructor()` 移除 `hrStatusTagsInput` 属性
    - 从 `init()` 移除 `initializeTagsInput()` 调用
    - 删除 `initializeTagsInput()` 方法
    - 删除 `populateHrStatusTags()` 方法
    - 从 `saveConfig()` 移除功能开关字段（4个字段）
    - 从 `getFieldId()` 移除功能开关字段映射（4个字段）
    - 从 `getCurrentConfig()` 移除功能开关字段（4个字段）
- **新增字段**（公共配置）：
  - `filterDeadHR` - 过滤不活跃HR开关（应用于所有平台）
  - `sendImgResume` - 发送图片简历开关（应用于所有平台）
  - `recommendJobs` - 接收推荐岗位开关（应用于所有平台）
  - `hrStatusKeywords` - HR过滤状态关键词（应用于所有平台）
- **移除字段**（Boss直聘配置）：
  - `filterDeadHR` - 过滤不活跃HR
  - `sendImgResume` - 发送图片简历
  - `recommendJobs` - 接收推荐岗位
  - `bossHrStatusKeywords` - HR状态关键词
- **设计理念**：
  - 公共配置：存储"全局功能开关"（应用于所有平台）
  - 平台配置：存储"平台特定筛选条件"（仅应用于特定平台）
  - 统一管理，减少重复配置，提升用户体验

## [1.0.22] - 2025-10-21 🚀

### Fixed
- **应用启动数据恢复顺序优化！✨ 数据库数据优先加载，告别初始化失败**
  - **问题背景 🐛**：应用启动时，PlaywrightService 在 `@PostConstruct` 中初始化并加载平台 Cookie 配置
    - 此时 DataRestoreListener 还未执行（使用的是 `ApplicationReadyEvent`，优先级低）
    - 导致从数据库查询配置时查不到数据（本地备份还未恢复到内存数据库）
    - Cookie 加载失败，平台页面初始化为未登录状态
  - **优化方案 🎯**：
    - **DataRestoreListener 改用 `@PostConstruct`**：将监听器从 `ApplicationReadyEvent` 改为 `@PostConstruct`
    - **设置最高优先级**：使用 `@Order(Ordered.HIGHEST_PRECEDENCE)` 确保最早执行
    - **显式依赖声明**：PlaywrightService 添加 `@DependsOn("dataRestoreInitializer")` 注解
    - **明确Bean名称**：将组件命名为 `dataRestoreInitializer`，便于其他组件引用
  - **启动顺序调整 📊**：
    - **调整前**：Bean实例化 → PlaywrightService.@PostConstruct（查询为空❌） → ApplicationReadyEvent → DataRestoreListener（数据恢复✅，但太晚）
    - **调整后**：Bean实例化 → DataRestoreListener.@PostConstruct（最高优先级，数据恢复✅） → PlaywrightService.@PostConstruct（查询成功✅）
  - **日志优化 📝**：
    - 数据恢复流程添加清晰的开始/完成标记和进度提示
    - Playwright 初始化添加数据库就绪提示
    - 使用图形化符号（✓、✗）增强日志可读性
  - **收益 ✅**：
    - 应用启动时自动恢复本地备份数据到内存数据库
    - PlaywrightService 初始化时能正确加载平台配置和 Cookie
    - 启动后平台页面自动恢复登录状态，无需重新登录
    - 数据恢复失败不影响应用启动，优雅降级

### Technical Details
- **修改文件**：
  - `DataRestoreListener.java`：
    - 重命名类注释为"应用启动数据恢复初始化器"
    - 从 `@EventListener(ApplicationReadyEvent.class)` 改为 `@PostConstruct`
    - 添加 `@Order(Ordered.HIGHEST_PRECEDENCE)` 注解，设置最高优先级
    - 添加 `@Component("dataRestoreInitializer")` 显式指定 Bean 名称
    - 方法重命名：`onApplicationReady()` → `restoreDataOnStartup()`
    - 优化日志输出，添加结构化的进度标记和图形符号
  - `PlaywrightService.java`：
    - 添加 `@DependsOn("dataRestoreInitializer")` 注解，确保在数据恢复后初始化
    - 添加类注释说明依赖关系
    - 优化初始化日志，添加数据库就绪提示
- **Spring Boot 启动顺序**：
  1. Bean 实例化（所有 `@Component` 创建）
  2. `@PostConstruct` 执行（按 `@Order` 优先级排序）
     - `dataRestoreInitializer`（HIGHEST_PRECEDENCE，最先执行）
     - `PlaywrightService`（依赖 dataRestoreInitializer，确保后执行）
  3. `ApplicationReadyEvent` 触发（已废弃用于数据恢复）
- **最佳实践应用**：
  - ✅ 使用 `@PostConstruct` 替代事件监听，确保初始化顺序可控
  - ✅ 使用 `@Order` 显式声明优先级，避免依赖 Spring 默认排序
  - ✅ 使用 `@DependsOn` 显式声明依赖关系，增强代码可读性
  - ✅ 显式命名 Bean，便于其他组件引用和依赖管理
  - ✅ 异常不抛出，数据恢复失败降级为空数据库启动
- **设计原则**：
  - **依赖倒置原则**：通过 Spring 依赖注入管理组件依赖关系
  - **单一职责原则**：DataRestoreListener 专注数据恢复，PlaywrightService 专注浏览器管理
  - **容错设计**：数据恢复失败不影响应用启动，确保系统可用性

### 日志示例
```
=== 开始数据恢复流程（优先级: HIGHEST） ===
检查本地备份文件并恢复到内存数据库...
✓ 发现备份文件，准备恢复数据
  - 备份文件路径: /Users/xxx/.getjobs/data.json
  - 备份文件大小: 12345 bytes
  - 备份时间: 2025-10-21T10:30:00
  - 备份配置数量: 4
  - 备份职位数量: 150
✓ 数据恢复成功！内存数据库已就绪
=== 数据恢复流程完成 ===

=== 开始初始化 Playwright 服务 ===
（数据库已就绪，可以加载平台配置和Cookie）
✓ 已为平台 Boss直聘 初始化页面: https://www.zhipin.com
✓ 已为平台 智联招聘 初始化页面: https://www.zhaopin.com
✓ Playwright 服务初始化成功
=== Playwright 服务初始化完成 ===
```

## [1.0.21] - 2025-10-21 🧹

### Removed
- **黑名单过滤配置开关移除！✨ 自动化过滤，无需手动开关**
  - **简化配置 🎯**：移除了所有平台（Boss直聘、智联招聘、51job、猎聘）的"过滤黑名单"开关
  - **自动化过滤 🤖**：只要在公共配置中配置了黑名单关键词，系统会自动进行过滤，无需额外开关控制
  - **界面更简洁 ✂️**：
    - 删除Boss直聘的 `enableBlacklistFilterCheckBox` 复选框
    - 删除智联招聘的整个"功能开关"卡片（仅包含黑名单过滤开关）
    - 删除51job的整个"功能开关"卡片（仅包含黑名单过滤开关）
    - 删除猎聘的整个"功能开关"卡片（仅包含黑名单过滤开关）
  - **代码全面清理 🧹**：
    - 从 `boss-config-form.js` 的 `getCurrentConfig()` 中移除 `enableBlacklistFilter` 字段
    - 从 `zhilian-config-form.js` 的 `getCurrentConfig()` 和 `getFieldId()` 中移除 `blacklistFilter` 字段
    - 从 `job51-config-form.js` 的 `saveConfig()`、`getCurrentConfig()` 和 `getFieldId()` 中移除 `blacklistFilter` 字段
    - 从 `liepin-config-form.js` 的 `saveConfig()`、`getCurrentConfig()` 和 `getFieldId()` 中移除 `blacklistFilter` 字段
    - 从 `index.html` 移除所有4个平台的黑名单过滤复选框HTML代码
  - **用户体验提升 🚀**：
    - 配置更简单，减少不必要的开关
    - 黑名单过滤自动生效，符合用户直觉
    - 界面更清爽，减少认知负担

### Technical Details
- **修改文件**：
  - `index.html`：删除4个平台的黑名单过滤复选框（约60行代码）
  - `boss-config-form.js`：从 `getCurrentConfig()` 移除 `enableBlacklistFilter` 字段
  - `zhilian-config-form.js`：从 `getCurrentConfig()` 和 `getFieldId()` 移除 `blacklistFilter` 字段
  - `job51-config-form.js`：从 `saveConfig()`、`getCurrentConfig()` 和 `getFieldId()` 移除 `blacklistFilter` 字段
  - `liepin-config-form.js`：从 `saveConfig()`、`getCurrentConfig()` 和 `getFieldId()` 移除 `blacklistFilter` 字段
- **移除字段**：
  - Boss直聘：`enableBlacklistFilter`
  - 智联招聘：`blacklistFilter`
  - 51job：`blacklistFilter`
  - 猎聘：`blacklistFilter`
- **设计理念**：
  - 黑名单功能由公共配置统一管理，配置即生效
  - 减少冗余开关，降低配置复杂度
  - 符合"约定优于配置"的设计原则

## [1.0.20] - 2025-10-21 🚀

### Added
- **快速投递任务模块上线！✨ 一键投递，智能高效**
  - **全新 quickdelivery 模块 🎯**：在 `modules/task/quickdelivery` 包下构建了完整的快速投递任务框架
    - 基于任务调度基础设施模块，提供统一的投递任务管理
    - 为每个平台（Boss直聘、智联招聘、51job、猎聘）提供独立的投递任务实现
    - 每个平台的投递任务全局唯一，避免并发执行导致的冲突
  - **核心功能实现 🚀**：
    - **平台投递任务**：4个平台各自独立的快速投递任务类
      - `BossQuickDeliveryTask` - Boss直聘快速投递任务
      - `ZhilianQuickDeliveryTask` - 智联招聘快速投递任务
      - `Job51QuickDeliveryTask` - 51job快速投递任务
      - `LiepinQuickDeliveryTask` - 猎聘快速投递任务
    - **统一调度服务**：`QuickDeliveryScheduler` 管理所有平台的投递任务
      - 支持按平台提交快速投递任务
      - 提供一键提交所有平台投递任务的功能
      - 完善的任务状态跟踪和日志记录
    - **丰富的DTO模型**：完整的数据传输对象定义
      - `QuickDeliveryRequest` - 投递请求参数，支持关键词筛选、最大投递数量、延迟时间等配置
      - `QuickDeliveryResult` - 投递结果统计，包含成功率、耗时、详细失败原因等
      - `QuickDeliveryStatus` - 任务状态查询，支持实时进度跟踪
    - **HTTP接口支持**：`QuickDeliveryController` 提供完整的RESTful API
      - `/api/task/quick-delivery/submit/{platformCode}` - 按平台代码提交任务
      - `/api/task/quick-delivery/submit/boss` - Boss直聘快速投递
      - `/api/task/quick-delivery/submit/zhilian` - 智联招聘快速投递
      - `/api/task/quick-delivery/submit/51job` - 51job快速投递
      - `/api/task/quick-delivery/submit/liepin` - 猎聘快速投递
      - `/api/task/quick-delivery/submit/all` - 所有平台一键投递
  - **一键投递服务 🎁**：全新的 `JobDeliveryService` 整合三大环节
    - 自动执行"采集 → 过滤 → 投递"完整流程
    - 统一管理四个平台的投递逻辑，简化业务调用
    - 支持按平台单独执行或批量执行所有平台
    - 详细的执行日志和统计信息
  - **架构设计亮点 🎨**：
    - **模块化设计**：清晰的分层结构（domain/service/dto/web）
    - **全局唯一约束**：每个平台的投递任务同一时刻只能执行一个（`globalUnique=true`）
    - **任务超时控制**：默认30分钟超时，避免任务无限期执行
    - **完整的文档**：包含 README.md 和 package-info.java，使用示例丰富
  - **任务配置说明 📋**：
    - 任务名称："{平台名称}快速投递任务"
    - 任务类型：`QUICK_DELIVERY_{平台代码}`
    - 全局唯一：true
    - 超时时间：1800000ms (30分钟)

### Technical Details
- **新增文件**（12个核心文件）：
  - **领域层**（4个任务实现）：
    - `BossQuickDeliveryTask.java` - Boss直聘投递任务
    - `ZhilianQuickDeliveryTask.java` - 智联招聘投递任务
    - `Job51QuickDeliveryTask.java` - 51job投递任务
    - `LiepinQuickDeliveryTask.java` - 猎聘投递任务
  - **服务层**（2个服务）：
    - `QuickDeliveryScheduler.java` - 快速投递任务调度服务
    - `JobDeliveryService.java` - 一键投递整合服务
  - **DTO层**（3个数据对象）：
    - `QuickDeliveryRequest.java` - 投递请求参数
    - `QuickDeliveryResult.java` - 投递结果统计
    - `QuickDeliveryStatus.java` - 任务状态查询
  - **Web层**（1个控制器）：
    - `QuickDeliveryController.java` - HTTP接口控制器
  - **文档**（2个文档文件）：
    - `README.md` - 模块详细说明文档
    - `package-info.java` - 包级别API文档
- **模块结构**：
  ```
  quickdelivery/
  ├── domain/          # 任务领域层（4个平台任务）
  ├── service/         # 服务层（调度服务 + 一键投递服务）
  ├── dto/             # 数据传输对象（请求、结果、状态）
  ├── web/             # Web控制器（HTTP接口）
  ├── README.md        # 模块说明文档
  └── package-info.java # 包级别文档
  ```
- **任务执行流程**：
  1. 通过 `QuickDeliveryScheduler` 提交任务
  2. 调用 `JobDeliveryService` 执行一键投递
  3. 依次执行：采集岗位 → 过滤岗位 → 投递岗位
  4. 返回投递结果统计
- **代码统计**：
  - Java核心代码：~1,000行
  - 注释和文档：~500行
  - 总计12个Java文件
- **设计原则遵循**：
  - 单一职责原则（SRP）：每个任务类专注于一个平台
  - 开闭原则（OCP）：易于扩展新平台
  - 依赖倒置原则（DIP）：依赖 RecruitmentService 抽象接口
  - DRY原则：统一的任务调度框架

### 收益
- ✅ 提供统一的快速投递入口，简化用户操作
- ✅ 全局唯一任务约束，避免重复投递
- ✅ 完整的任务生命周期管理和状态跟踪
- ✅ 支持HTTP接口调用，易于集成
- ✅ 清晰的模块结构，便于维护和扩展
- ✅ 一键投递服务整合三大环节，自动化程度更高

## [1.0.19] - 2025-10-21 🔧

### Fixed
- **Spring Bean名称冲突修复！✨ TaskExecutor重命名避免启动失败**
  - **问题背景 🐛**：应用启动时抛出异常 `Cannot register alias 'taskExecutor' for name 'applicationTaskExecutor': Alias would override bean definition 'taskExecutor'`
    - 自定义的 `TaskExecutor` 组件与Spring框架默认的异步任务执行器 `taskExecutor` bean名称冲突
    - 导致Spring容器无法正常初始化，应用启动失败
  - **修复方案 🎯**：
    - 移除 `TaskExecutor` 类上的 `@Component` 注解，改为通过配置类手动创建bean
    - 在 `TaskInfrastructureConfig` 中将 `@Bean` 方法名从 `taskExecutor` 改为 `infrastructureTaskExecutor`
    - 显式指定bean名称为 `infrastructureTaskExecutor`，完全避免命名冲突
  - **代码调整 🔧**：
    - 移除 `@RequiredArgsConstructor` 注解，改为手动编写构造函数
    - 添加详细注释说明不使用 `@Component` 的原因
    - 保持原有功能不变，仅调整bean注册方式
  - **收益 ✅**：
    - 应用启动正常，不再与Spring框架默认bean冲突
    - 代码更规范，避免框架保留名称
    - 显式配置更清晰，便于理解bean的创建过程

### Technical Details
- **修改文件**：
  - `TaskExecutor.java`：
    - 移除 `@Component` 和 `@RequiredArgsConstructor` 注解
    - 添加显式构造函数
    - 添加注释说明通过配置类创建bean的原因
  - `TaskInfrastructureConfig.java`：
    - 将 `@Bean` 方法名从 `taskExecutor` 改为 `infrastructureTaskExecutor`
    - 显式指定 `@Bean(name = "infrastructureTaskExecutor")`
    - 添加注释说明避免与Spring默认bean冲突
  - `TaskSchedulerService.java`：
    - 移除 `@RequiredArgsConstructor` 注解
    - 添加显式构造函数
    - 在构造函数参数上使用 `@Qualifier("infrastructureTaskExecutor")` 注解
    - 明确指定注入我们自定义的 `infrastructureTaskExecutor` bean
- **Spring保留bean名称**：
  - `taskExecutor` - Spring异步任务执行器（`@EnableAsync` 相关）
  - `applicationTaskExecutor` - Spring Boot自动配置的任务执行器
  - 自定义bean应避免使用这些名称
- **最佳实践**：
  - 自定义Executor类型的bean建议使用更具体的命名，如 `xxxTaskExecutor`
  - 避免使用Spring框架保留的bean名称
  - 使用 `@Bean(name = "...")` 显式指定bean名称更清晰

## [1.0.18] - 2025-10-21 🧹

### Removed
- **旧版数据备份调度器下线！✨ 全面拥抱新架构**
  - **删除旧版本 🗑️**：移除了 `DataBackupScheduler.java`，该类已被 `DataBackupSchedulerV2.java` 完全替代
  - **架构统一 🎯**：
    - V2版本基于任务调度基础设施模块，提供更强大的功能
    - 支持全局唯一任务约束，避免并发执行导致的资源竞争
    - 提供完善的任务状态跟踪和通知机制
    - 支持任务超时控制，更可靠的执行保障
  - **代码简化 ✂️**：
    - 消除重复代码，统一使用新的任务调度框架
    - 提高代码可维护性，降低维护成本
    - 所有定时备份功能无缝迁移到V2版本
  - **用户无感知 🚀**：
    - 功能保持不变，自动备份机制继续工作
    - 启动延迟备份和定时备份功能完全保留
    - 更好的异常处理和日志记录

### Technical Details
- **删除文件**：
  - `DataBackupScheduler.java`：旧版数据备份调度器（66行）
- **迁移路径**：
  - 旧版：直接调用 `DataBackupService.exportData()`
  - 新版：通过 `TaskSchedulerService.submitTask(dataBackupTask)` 提交任务
- **功能对比**：
  - ✅ 定时备份（每5秒）：两版本均支持
  - ✅ 启动延迟备份（5分钟）：两版本均支持
  - ✅ 异常处理：V2版本更完善
  - ✅ 日志记录：V2版本更详细
  - 🆕 全局唯一约束：仅V2版本支持
  - 🆕 任务状态跟踪：仅V2版本支持
  - 🆕 任务超时控制：仅V2版本支持
- **收益**：
  - 消除重复代码，减少维护负担 ✅
  - 统一任务调度架构，代码更优雅 📐
  - 提升系统可靠性和可观测性 📊
  - 为未来扩展更多定时任务打下基础 🚀

## [1.0.17] - 2025-10-21 🏗️

### Added
- **任务调度基础设施模块上线！✨ DDD架构的优雅实现**
  - **全新基础设施 🎯**：在 `common/infrastructure/task` 包下构建了完整的任务调度框架
    - 采用DDD（领域驱动设计）模式，分层清晰、职责明确
    - 支持任务生命周期管理（待执行、执行中、成功、失败、已取消）
    - 提供统一的任务接口约束和执行规范
  - **核心功能实现 🚀**：
    - **任务接口约束**：通过 `ScheduledTask` 接口定义任务契约
      - 强制要求任务名称 (`taskName`)
      - 自动管理任务状态 (`TaskStatusEnum`)
      - 内置完成通知机制 (`TaskNotificationListener`)
    - **全局唯一任务**：通过 `UniqueTaskManager` 管理任务唯一性
      - 配置 `TaskConfig.globalUnique = true` 即可启用
      - 确保同一类型任务在同一时刻只能执行一个
      - 自动处理任务冲突，失败任务会立即返回并释放锁
    - **任务通知机制**：基于观察者模式的事件通知
      - 支持任务开始 (`onTaskStart`)、成功 (`onTaskSuccess`)、失败 (`onTaskFailed`)、取消 (`onTaskCancelled`) 通知
      - 支持选择性监听特定类型任务
      - 异常隔离，单个监听器异常不影响其他监听器
    - **灵活执行策略**：
      - 同步执行：`submitTask()` 阻塞等待任务完成
      - 异步执行：`submitTaskAsync()` 立即返回Future对象
      - 带超时执行：`submitTaskWithTimeout()` 限制任务执行时间
  - **架构设计亮点 🎨**：
    - **领域层**：`Task`（聚合根）、`TaskConfig`（值对象）、`TaskNotification`（值对象）
    - **契约层**：`ScheduledTask`（任务接口）、`TaskNotificationListener`（监听器接口）
    - **执行器层**：`TaskExecutor`（执行引擎）、`UniqueTaskManager`（唯一性管理）
    - **应用服务层**：`TaskSchedulerService`（调度服务）
  - **设计模式应用 📐**：
    - 模板方法模式：`ScheduledTask` 接口提供前置/后置钩子方法
    - 观察者模式：`TaskNotificationListener` 监听任务状态变化
    - 策略模式：多种任务执行策略
    - 建造者模式：`TaskConfig` 使用Builder模式构建
  - **实际应用示例 💡**：
    - 创建 `DataBackupTask`：数据备份任务实现，配置为全局唯一
    - 创建 `TaskExecutionLogger`：任务执行日志监听器，记录所有任务状态
    - 创建 `DataBackupSchedulerV2`：基于新框架的定时任务调度器
    - 保留 `DataBackupScheduler`：原始版本，方便对比

### Technical Details
- **新增文件**（13个Java核心文件）：
  - **领域模型层**：
    - `Task.java`：任务实体（聚合根），管理任务完整生命周期
    - `TaskConfig.java`：任务配置值对象，定义任务属性和约束
    - `TaskNotification.java`：任务通知值对象，携带状态变化信息
  - **枚举定义**：
    - `TaskStatusEnum.java`：任务状态枚举（5种状态）
  - **契约接口层**：
    - `ScheduledTask.java`：可调度任务接口，定义任务契约
    - `TaskNotificationListener.java`：任务通知监听器接口
  - **执行器层**：
    - `TaskExecutor.java`：任务执行器，核心执行引擎（192行）
    - `UniqueTaskManager.java`：唯一任务管理器，管理全局唯一约束
  - **调度服务层**：
    - `TaskSchedulerService.java`：任务调度服务，对外接口
  - **配置层**：
    - `TaskInfrastructureConfig.java`：Spring配置类，自动装配
  - **示例代码**：
    - `ExampleUsage.java`：完整使用示例（232行）
  - **包级文档**：
    - `package-info.java`：API文档和使用示例（129行）
- **业务集成示例**（4个文件）：
  - `DataBackupTask.java`：数据备份任务实现
  - `TaskExecutionLogger.java`：任务执行日志监听器
  - `DataBackupSchedulerV2.java`：基于新框架的定时任务
  - 保留 `DataBackupScheduler.java`：原始版本对照
- **代码统计**：
  - Java核心代码：~1,300行
  - 注释和文档：~800行
  - 总计17个Java文件
- **线程安全保证**：
  - 使用 `ConcurrentHashMap` 管理唯一任务映射
  - 使用 `CachedThreadPool` 处理异步任务
  - 监听器异常捕获，不影响任务执行
- **Spring集成**：
  - 完全集成Spring框架，支持依赖注入
  - 自动装配监听器列表
  - 可与 `@Scheduled` 定时任务无缝配合
- **设计原则遵循**：
  - 单一职责原则（SRP）：每个类职责明确
  - 开闭原则（OCP）：对扩展开放，对修改封闭
  - 依赖倒置原则（DIP）：依赖抽象而非具体实现
  - DRY原则：消除重复代码

### 收益
- ✅ 提供统一的任务调度框架，规范任务实现
- ✅ 全局唯一任务约束，避免资源竞争
- ✅ 完善的任务监控和通知机制
- ✅ 优雅的DDD架构，代码可维护性高
- ✅ 丰富的文档和示例，易于上手
- ✅ 支持多种执行策略，灵活性强

## [1.0.16] - 2025-10-19 🔄

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

## [1.0.15] - 2025-10-19 🍪

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

## [1.0.14] - 2025-10-19 🎯

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

## [1.0.13] - 2025-10-18 🤖

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

## [1.0.12] - 2025-10-18 🎯

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

## [1.0.11] - 2025-10-18 📦

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

## [1.0.10] - 2025-10-18 🚀

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

## [1.0.9] - 2025-10-17 🏗️

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

## [1.0.8] - 2025-10-17 💅

### Changed
- **UI大焕新！✨ 智能求职助手颜值爆改！**
  - 拜拜👋 传统上下布局，快来拥抱超in的左侧菜单栏设计，操作丝滑，颜值与实力并存！
  - **布局重塑 🛠️**：从头到脚重构了 `index.html`，页面结构更清晰，逻辑分区更合理，找东西不迷路～
  - **风格新生 🎨**：`style.css` 全面升级！注入现代设计感，深色侧边栏搭配清爽内容区，高级感瞬间拉满！
  - **体验飞跃 🚀**：导航栏华丽变身，从顶部“横批”变身左侧“竖列”，找功能快人一步，告别手忙脚乱。
  - **细节控福音 🍬**：精心调整了卡片、按钮和字体样式，每一处都透露着精致，让你的求职之旅赏心悦目～

## [1.0.7] - 2025-10-16 🔧

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

## [1.0.6] - 2025-10-15 🧠

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

## [1.0.5] - 2025-10-14 🛠️

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

## [1.0.4.1] - 2025-09-29 🛠️

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

## [1.0.4] - 2025-09-27 🚀

### Added
- **新平台解锁！51job & 智联招聘加入大家庭 🎉**
  - 现在可以在51job和智联上自动检索和投递啦！
  - **温馨提示 📢**：智联需要手机号验证才能登录哦，记得激活一下～
- **猎聘板块正在路上... 🚧**
  - 敬请期待，我们正在快马加鞭开发中！

## [1.0.3] - 2025-09-23 🧩

### Added
- **51job 配置板块来啦！**
  - 现在可以为51job单独设置你的求职偏好啦。

### Fixed
- **修复了一些小bug 🐞**
  - 解决了BOSS和51JOB字典值显示不正确的问题。
  - 修复了BOSS期望薪资过滤的小问题。
  - 增加了一个手动标记登录的按钮，刷新后也不怕状态丢失啦。

## [1.0.2] - 2025-09-20 🎯

### Fixed
- **投递更智能！**
  - 现在会自动过滤掉已经投递过的岗位，不再重复劳动。
  - 解决了BOSS风控偶尔导致任务中断的问题，现在更稳定啦。

## [1.0.1] - 2025-09-17 🌟

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
