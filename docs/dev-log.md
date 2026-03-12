## 2026-03-11 - 忽略本地 GPT 配置文件

- 任务：将 `src/main/resources/application-gpt-local.yml` 加入 git 忽略列表，避免本地/环境相关配置被误提交到仓库。
- 变更文件：`/.gitignore`（新增 1 条忽略规则）。
- 设计决策：使用精确路径忽略，仅针对该本地文件，不影响其他环境配置文件的版本管理。
- 变更原因：该文件通常用于本地调试（可能包含 API Key 等敏感信息），不应进入版本控制。

## 2026-03-12 - 平台配置页「是否进行登录检测」及公共配置接口

- 任务：在平台配置页任务流程卡片中增加「是否进行登录检测」开关；后端在 CommonConfigController 中提供该配置的读写接口；开关变更时调用新接口更新状态。
- 变更文件：
  - 后端：`UserProfile.java`（新增字段 `enableLoginCheck`）、`UserProfileDTO.java`（同上）、`CommonConfigController.java`（save 支持 enableLoginCheck，新增 GET/POST `/api/common/config/login-check`）。
  - 前端：`commonConfigApi.ts`（新增 `getLoginCheck`、`updateLoginCheck`）、`platformState.ts`（enableLoginCheck 不再随平台配置 payload 提交）、`platformService.ts`（loadConfig 后拉取登录检测配置并 snapshot，新增 `updateLoginCheck`）、`PlatformConfigView.vue`（开关绑定并 `@update:model-value` 调用更新接口）。
- 设计决策：登录检测开关存于公共配置（UserProfile），全局一份、各平台共用；平台配置保存不再包含该字段，由单独接口维护；开关变更失败时回滚 UI 并提示。
- 变更原因：支持用户选择任务开始前是否进行平台登录状态检测，并需将选项持久化与即时更新到服务端。

## 2026-03-12 - 一键投递支持跳过登录检查

- 任务：根据公共配置 `enableLoginCheck` 控制一键投递流程是否执行登录检查；关闭时直接跳过登录检查并默认已登录。
- 变更文件：`src/main/java/getjobs/service/JobDeliveryService.java`（注入 `UserProfileRepository`，新增 `isLoginCheckEnabled()`，在步骤1分支跳过 `recruitmentService.login()`）。
- 设计决策：默认更“宽松”——读配置异常或未配置时按未启用处理，避免因配置读取失败阻断投递流程；关闭登录检查时仅跳过该步骤，其余流程不变。
- 变更原因：允许用户在已确认登录状态的情况下减少无意义的登录检测，提高任务启动速度与稳定性。

## 2026-03-12 - Playwright 定时备份平台 Cookie

- 任务：在 Playwright 初始化各平台页面后，为每个平台启动一个 5 秒一次的定时任务，自动将当前页面 Cookie 备份到对应平台的配置，用于后续快速恢复登录态。
- 变更文件：`src/main/java/getjobs/common/service/PlaywrightService.java`（新增 Cookie 备份调度器与任务映射，`init()` 中在页面创建后调用 `startCookieAutoBackup`，在 `@PreDestroy close()` 中统一停止定时任务）。
- 设计决策：复用已有的 `capturePlatformCookies` 与 `savePlatformCookieToConfig`/`getCookiesAsJson`，所有平台共享一个守护线程调度器，每个平台仅保留一个定时任务；备份失败仅记录日志，不影响主流程。
- 变更原因：避免页面或站点变更导致的登录状态丢失，确保各平台的最新 Cookie 能及时写入数据库，在浏览器重启或任务恢复时可以优先从配置中加载。

