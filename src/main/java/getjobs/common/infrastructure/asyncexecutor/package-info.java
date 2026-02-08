/**
 * 异步执行器基础设施模块
 * <p>
 * 提供全局统一的异步任务执行线程池，用于统一管理、监控所有异步任务的执行状况和线程使用状况。
 * </p>
 *
 * <h2>核心组件</h2>
 * <ul>
 * <li>{@link getjobs.common.infrastructure.asyncexecutor.AsyncExecutorConfig} - 线程池配置类</li>
 * <li>{@link getjobs.common.infrastructure.asyncexecutor.AsyncExecutorService} - 任务执行服务</li>
 * <li>{@link getjobs.common.infrastructure.asyncexecutor.AsyncExecutorMonitor} - 监控组件</li>
 * <li>{@link getjobs.common.infrastructure.asyncexecutor.AsyncExecutorProperties} - 配置属性</li>
 * <li>{@link getjobs.common.infrastructure.asyncexecutor.AsyncTaskInfo} - 任务信息</li>
 * <li>{@link getjobs.common.infrastructure.asyncexecutor.AsyncExecutorMonitorDTO} - 监控数据DTO</li>
 * </ul>
 *
 * <h2>功能特性</h2>
 * <ul>
 * <li>全局统一的异步任务执行线程池</li>
 * <li>完整的任务状态跟踪和管理</li>
 * <li>实时监控线程池状态和任务执行情况</li>
 * <li>自动根据 CPU 核心数动态调整线程数</li>
 * <li>优雅关闭，等待任务完成</li>
 * </ul>
 *
 * @author getjobs
 * @since 2025-01-XX
 */
package getjobs.common.infrastructure.asyncexecutor;

