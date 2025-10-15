# Changelog
所有重大变更都将记录在此文件中。

## [2.1.6] - 2025-10-15

### Added
- 新增 Deepseek AI 配置动态刷新功能
  - 实现基于 Spring Cloud Context `@RefreshScope` 的优雅配置更新机制
  - 新增 `DeepseekConfigRefreshService` 提供运行时配置更新能力
  - 支持动态更新 API Key、Base URL、Model、Temperature、Max Tokens 等配置
  - 自动级联更新所有依赖的 Bean（`deepseekAiApi`、`deepseekChatModel`、`deepseekStreamingChatModel`）
  - 无需重启应用，零停机完成配置切换

### Changed
- 优化 `DeepseekGptConfig` 配置类
  - 为所有 Bean 方法添加 `@RefreshScope` 注解，支持动态刷新
  - 确保 Bean 依赖链的自动重建和注入
- 新增 Spring Cloud Context 和 Actuator 依赖
  - 引入 `spring-cloud-context` 4.1.0 支持配置刷新
  - 引入 `spring-boot-starter-actuator` 提供刷新端点
- 新增 `application-actuator.yml` 配置文件
  - 启用 refresh、health、info 端点
  - 支持通过 Actuator 端点触发配置刷新

### Technical Details
- **刷新机制**：更新配置 → 触发 `ContextRefresher.refresh()` → 销毁旧 Bean → 重建新 Bean → 自动注入依赖
- **线程安全**：由 Spring 容器保证刷新过程的线程安全性
- **配置优先级**：动态配置（最高）> 环境变量 > 配置文件
- **安全性**：API Key 自动脱敏显示，避免敏感信息泄露

## [2.1.5] - 2025-10-14

### Added
- 增加公共配置模块
  - 配置黑名单过滤（黑名单岗位、黑名单公司）
  - 配置候选人信息（打招呼时用于匹配JD生成贴合候选人的招呼用于）
- 增加AI智能打招呼功能
  - 集成 `GreetingService` 自动生成个性化打招呼内容
  - 根据候选人信息（UserProfile）和岗位JD智能匹配生成招呼语
  - 自动提取职位描述和要求，结合候选人技能栈生成贴合JD的打招呼内容
  - 支持配置开关控制是否启用AI打招呼（`enableAIGreeting`）
  - AI生成失败时自动降级使用默认打招呼内容

### Changed
- 优化任务控制
  - 禁用登录操作，统一由系统定时检查登录状态（用户在自动化浏览器中自行找到对应平台页进行登录即可）
  - 任务管理单独抽离出一个模块（`task-executor.js`、`modules/task`）
  - 移除重置任务流程逻辑
- 移除配置自动保存功能
  - 解决 SQLite 并发写入锁冲突问题（SQLITE_LOCKED_SHAREDCACHE）
  - SQLite 为嵌入式数据库，并发写能力有限，一次只允许一个写事务
  - 用户现需手动点击保存按钮完成配置保存
  
### Fixed

## [2.1.5] - 2025-10-01
### Fixed
- 岗位匹配度提示词调整
  - 补充：忽略并且不要考虑：学历、年限、管理经验、行业领域、具体技术深度或软技能等要求；不要向我提问。
    - 规避响应
    ```text
    我需要先了解您的背景信息才能进行匹配判断。
    请提供以下信息：
    1. 您的学历和专业背景
    2. Java开发工作年限
    3. 技术栈掌握情况（Spring框架、数据库、分布式系统等）
    4. 是否有架构设计经验
    5. 是否有团队管理经验
    6. 是否有高并发项目经验 请补充这些信息，我就能准确判断该职位是否匹配您的背景。
    ``` 

## [2.1.4] - 2025-09-27
### Added
- 新增51job检索投递功能
- 新增智联招聘检索投递功能
  - 📢（智联有极验证js需要输入完整手机号激活验证码，否则无法登录）
- 新增猎聘板块（待开发）

## [2.1.3] - 2025-09-23
### Added
- 新增51job配置板块

### Fixed
- BOSS、51JOB字典值回显问题
- BOSS期望席子过滤问题
- 临时新增一个手动标记已登录按钮（修复刷新后需要点击执行登录逻辑）

## [2.1.2] - 2025-09-20

### Fixed
- 根据简历投递状态过滤已投递的岗位
- BOSS风控返回异常中断作业

## [2.1.1] - 2025-09-17
### Added
- 新增神仙外企模块

### Changed
- BOSS岗位查询条件字典值不再使用枚举硬编码，通过接口获取全量字典值
- 移除系统参数配置（减少用户理解难度，默认配好即可）
- 移除关键词岗匹配 （后期使用期望职位与招聘jd进行智能匹配）

### Fixed
- 修复重复打招呼

