/**
 * 快速投递任务模块
 * 
 * <p>
 * 该模块负责执行所有招聘平台的快速投递任务。
 * 每个平台的投递任务为全局唯一任务，不可同时执行多个同一平台的快速投递任务。
 * </p>
 * 
 * <h2>模块结构：</h2>
 * <ul>
 * <li>{@link getjobs.modules.task.quickdelivery.domain} - 任务领域层，包含各平台的任务实现</li>
 * <li>{@link getjobs.modules.task.quickdelivery.service} - 服务层，提供任务调度服务</li>
 * <li>{@link getjobs.modules.task.quickdelivery.dto} - 数据传输对象层，定义请求和响应结构</li>
 * <li>{@link getjobs.modules.task.quickdelivery.web} - Web控制器层，提供HTTP接口</li>
 * </ul>
 * 
 * <h2>支持的平台：</h2>
 * <ul>
 * <li>Boss直聘 (BOSS_ZHIPIN)</li>
 * <li>智联招聘 (ZHILIAN_ZHAOPIN)</li>
 * <li>51job (JOB_51)</li>
 * <li>猎聘 (LIEPIN)</li>
 * </ul>
 * 
 * <h2>核心特性：</h2>
 * <ul>
 * <li>平台独立：为每个招聘平台提供独立的任务实现</li>
 * <li>全局唯一：每个平台的投递任务在同一时刻只能执行一个，避免并发冲突</li>
 * <li>统一管理：通过
 * {@link getjobs.modules.task.quickdelivery.service.QuickDeliveryScheduler}
 * 统一管理所有平台的投递任务</li>
 * <li>状态跟踪：支持任务执行状态的实时跟踪和查询</li>
 * <li>灵活配置：支持多种投递参数配置，如最大投递数量、延迟时间等</li>
 * </ul>
 * 
 * <h2>使用示例：</h2>
 * 
 * <pre>{@code
 * @Autowired
 * private QuickDeliveryScheduler quickDeliveryScheduler;
 * 
 * // 提交Boss直聘快速投递任务
 * Task task = quickDeliveryScheduler.submitBossQuickDelivery();
 * 
 * // 或者通过平台枚举提交
 * Task task = quickDeliveryScheduler.submitQuickDeliveryTask(
 *         RecruitmentPlatformEnum.BOSS_ZHIPIN);
 * }</pre>
 * 
 * @author getjobs
 * @since 1.0.0
 */
package getjobs.modules.task.quickdelivery;
