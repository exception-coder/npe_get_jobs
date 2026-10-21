## 1. 判定证据与缓存

- [x] 1.1 为意向匹配结果增加置信度，并为 JD 与用户判定上下文生成稳定指纹
- [x] 1.2 扩展匹配证据持久化字段和批量缓存查询，只复用高置信度明确拒绝
- [x] 1.3 在岗位选择编排中批量加载缓存，并为未命中岗位执行及记录新判定

## 2. 用户规则与结果协议

- [x] 2.1 在自动投递请求中接收并校验最多 2000 字的用户判定规则
- [x] 2.2 将用户规则作为受约束的匹配输入，允许明确豁免学历和经验，但禁止覆盖岗位方向或排除职位
- [x] 2.3 在检查明细协议中返回原 JD 地址、判定类别和置信度

## 3. 大量结果交互

- [x] 3.1 将明确不符合与无法判定结果分区展示，并支持独立折叠
- [x] 3.2 每个分区初始只渲染 20 条并支持按 20 条继续加载
- [x] 3.3 保存用户判定规则并在刷新后恢复，提供可点击的原岗位 JD 链接

## 4. 验证与交付

- [x] 4.1 增加缓存复用、失效条件、字段映射和自动投递协议的 Java 回归测试
- [x] 4.2 增加 80 条结果的前端浏览器测试，覆盖分区、分批加载、链接和规则持久化
- [x] 4.3 运行 Java 全量测试、Node 全量测试、真实 Vite 浏览器场景和前端生产构建
- [x] 4.4 同步 README、开发日志和 OpenSpec，并严格校验活动 change

## 5. 历史未投递岗位

- [x] 5.1 移除自动投递候选的当日采集限制，并在数据库查询中排除已成功联系岗位
- [x] 5.2 更新页面提示和空候选提示，补充历史岗位候选回归测试

## 6. 城市级搜索

- [x] 6.1 将 BOSS 区县名称解析为父城市编码，并移除 URL 中的 `areaBusiness`
- [x] 6.2 补充安溪、晋江、武夷山和历史区域参数的回归测试，升级 sidecar 修订号

## 7. 自动投递真实发送

- [x] 7.1 统一使用 `confirmContact` 触发单岗位与自动投递的 BOSS 文字发送动作
- [x] 7.2 回归验证附加选项为旧默认值时仍执行真实发送，并继续校验送达回执
- [x] 7.3 按真实 BOSS 编辑器交互改为 Enter 发送，按钮点击仅在编辑器未清空时后备执行
- [x] 7.4 自动投递复用单岗位的 prepareContact → confirmContact 顺序，入口未就绪时不发送

## 8. 修复过度严格匹配

- [x] 8.1 区分职位方向、硬性冲突、优先偏好与缺失信息，未知放行时保留 medium 置信度和逐项提示
- [x] 8.2 使用无正文岗位的结构化字段，按实际字段核验证据并容忍排版空白差异
- [x] 8.3 用确定性月薪交集规则纠正区间误拒，并使历史严格策略拒绝缓存失效
- [x] 8.4 补充相关 JUnit 回归、同步 README、严格校验 OpenSpec；验证不执行真实发送

2026-10-13 验证：JDK 21 执行 `mvn package -Dskip.installnodenpm=true -Dskip.npm=true -Dtest=RecruitmentIntentCardTest,RecruitmentIntentAiTest,RecruitmentMatchEvidenceServiceTest,RecruitmentJobSelectionServiceTest,TodayAutoDeliveryServiceTest,RecruitmentWorkflowServiceTest`，34 项通过，0 失败、0 错误、0 跳过，最新 JAR 构建成功；原始结果见 `target/surefire-reports/`。本次仅修改 Java 匹配规则，不重复构建未变化的前端或执行 Node 发送测试。自动投递步骤为 mock，未调用平台发送接口。本机 8081/5174 当前不可用，未宣称已上线或真实投递成功。

## 9. BOSS 发送失败修复

- [x] 9.1 统一草稿文本校验、等待与无发送键的补入，保护已有不同草稿
- [x] 9.2 当前会话内解析唯一发送动作，提交前校验文字和收件人，提交后不切换动作重发
- [x] 9.3 按阶段记录并原子更新 journal，保护并发；已证明仅草稿的记录恢复会话，未知提交继续阻断
- [x] 9.4 在断网浏览器夹具复现草稿、发送与防重分支，执行相关 Node/Java 回归并同步 revision、README 和规格

## 10. BOSS 编辑器与联系人回归补齐

- [x] 10.1 复现文字已填但按钮未就绪、按钮延迟挂载和联系人不在初始侧栏等缺口
- [x] 10.2 拆分按钮就绪探测与原生输入刷新，不按发送键，不覆盖不同草稿，缺按钮时明确失败
- [x] 10.3 优先复用当前会话，精确联系人定位及有界侧栏滚动，选中后复核完整身份
- [x] 10.4 覆盖预提交恢复、历史提交标记冲突与未知尝试阻断，同步服务修订号及说明
- [x] 10.5 运行隔离浏览器及相关 Java 回归，严格校验规格和运行修订号
- [ ] 10.6 真实 BOSS 编辑器与联系人验收：按用户最新要求由测试人员执行，本轮不代替该验收，也不真实发送

2026-10-19 验证：补充用例先在旧实现中复现响应式草稿、延迟按钮、外置公司标签、缺失侧栏、懒加载列表及历史日志矛盾问题。修复后 `node --test test/boss*.test.js test/platform-registry.test.js` 63 项通过；最终发送前再次探测按钮的补充改动执行 `node --test --test-name-pattern='button disabled during submission|explicitly confirmed contact|late-mounted' test/boss-contact-workflow.test.js`，3 项通过（其中 1 项新增、2 项为相关成功路径复验）。JDK 21 执行 `mvn package '-Dskip.installnodenpm=true' '-Dskip.npm=true' '-Dtest=PatchrightBrowserClientTest,TodayAutoDeliveryServiceTest,RecruitmentWorkflowServiceTest'`，14 项通过且 JAR 构建成功。临时回环端口启动 sidecar，仅 GET `/health` 验证 `2026-10-19-reactive-contact-v10` 后退出；OpenSpec 严格验证及 `git diff --check` 通过。所有聊天提交与附件测试均为请求完全拦截的隔离页面、临时日志；未访问真实发送接口、未改用户历史 journal。真实 Chrome 打开消息页后转登录页，用户明确改由测试人员验收；change 保持活动，不归档。

2026-10-13 发送修复验证：`node --test test/boss*.test.js test/platform-registry.test.js` 51 项全绿；追加按钮启用等待及多行发送后，`node --test test/boss-contact-workflow.test.js` 当前 18 项全绿，其他未受影响套件复用前次结果。JDK 21 执行 `mvn package -Dskip.installnodenpm=true -Dskip.npm=true -Dtest=PatchrightBrowserClientTest,TodayAutoDeliveryServiceTest,RecruitmentWorkflowServiceTest`，13 项全绿且 JAR 构建成功。独立临时端口启动真实 Node sidecar，仅 GET `/health`，确认返回 `2026-10-13-single-submit-contact-v9` 后退出。聊天浏览器请求全部本地 fulfill，journal 使用并清理临时目录；未真实发送，未改用户 profiles 或历史 journal。原四岗位的实际聊天页和旧记录在当前环境不可取得，未声明真实送达验收。

## 11. 原生键盘输入与预占误锁修复

- [x] 11.1 复现仅 input/方向键不足以启用控件，以及落盘后预检失败留下错误提交标记
- [x] 11.2 初次与刷新统一原生键盘输入，验证中文、多行、长度限制、不同草稿保护和零发送
- [x] 11.3 只恢复明确未调用 click 的预检失败，覆盖持久化恢复、撤销日志写入失败与未知送达继续阻断
- [x] 11.4 同步修订号、说明与验证证据，执行定向浏览器/Java 回归及严格规格检查

2026-10-21 验证：新增浏览器场景先在旧实现复现正文编辑按键状态未更新与提交预占误锁；另用目录占位注入日志 rename 失败，复现未持久化恢复错误泄漏到最终结果。修复后 `node --test test/boss-contact-workflow.test.js test/boss-contact-journal.test.js test/boss-draft.test.js test/boss-message-page.test.js test/platform-registry.test.js` 66 项通过，耗时约 149 秒；后续只调整日志内存发布顺序，重跑 `node --test test/boss-contact-journal.test.js` 8 项，以及工作流的 `final preflight cancellation|draft-only journal can resume|failed draft verification persists` 三项，均通过。实际验证覆盖中文、多行零 Enter、500 字限制拒绝临时空格时不删真实正文、不同草稿保护、准备失败跨会话重复恢复、预占撤销失败保留不确定阶段、提交无回执不撤销防重。JDK 21 的相关三组 JUnit 共 15 项通过，JAR 构建成功；临时端口仅 GET `/health` 返回 `2026-10-21-keyboard-contact-v11`，随后退出。OpenSpec 严格验证及差异检查通过；所有聊天测试网络完全拦截、日志目录临时创建清理，没有真实发送或修改历史尝试。真实 BOSS 验收仍由测试人员完成，10.6 保持未完成。
