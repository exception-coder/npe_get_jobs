package getjobs.service;

import getjobs.modules.boss.dto.JobDTO;
import getjobs.common.enums.RecruitmentPlatformEnum;

import java.util.List;

/**
 * 招聘平台服务接口
 * 定义了招聘平台的四个核心功能：登录、采集岗位、过滤岗位、执行投递
 * 
 * @author loks666
 *         项目链接: <a href=
 *         "https://github.com/loks666/get_jobs">https://github.com/loks666/get_jobs</a>
 */
public interface RecruitmentService {

    /**
     * 获取当前服务支持的招聘平台
     *
     *
     * @return 招聘平台枚举
     */
    RecruitmentPlatformEnum getPlatform();

    /**
     * 1. 登录功能
     * 检查登录状态，如果未登录则进行登录操作
     * 配置信息从数据库自动加载
     * 
     * @return 是否登录成功
     */
    boolean login();

    /**
     * 2. 采集岗位功能
     * 根据配置的城市代码和关键词搜索并采集岗位信息
     * 配置信息（城市代码、关键词等搜索条件）从数据库自动加载
     * 
     * @return 采集到的岗位列表
     */
    List<JobDTO> collectJobs();

    /**
     * 采集推荐岗位
     * 配置信息从数据库自动加载
     * 
     * @return 推荐岗位列表
     */
    List<JobDTO> collectRecommendJobs();

    /**
     * 3. 过滤岗位功能
     * 根据配置的过滤条件对岗位进行筛选
     * 配置信息（薪资范围、黑名单等过滤条件）从数据库自动加载
     * 
     * @param jobDTOS 原始岗位列表
     * @return 过滤后的岗位列表
     */
    List<JobDTO> filterJobs(List<JobDTO> jobDTOS);

    /**
     * 4. 执行投递功能
     * 对过滤后的岗位执行投递操作
     * 配置信息（打招呼内容、简历等）从数据库自动加载
     * 
     * @param jobDTOS 过滤后的岗位列表
     * @return 投递成功的岗位数量
     */
    int deliverJobs(List<JobDTO> jobDTOS);

    /**
     * 检查是否已达投递上限
     * 
     * @return 是否达到上限
     */
    boolean isDeliveryLimitReached();

    /**
     * 保存平台相关数据（如黑名单、Cookie等）
     * 
     * @param dataPath 数据文件路径
     */
    void saveData(String dataPath);

    /**
     * 城市过滤功能
     * 根据平台特定的城市匹配规则进行过滤
     * 
     * @param job              职位信息
     * @param allowedCityCodes 允许的城市代码列表
     * @return 过滤原因，null表示通过过滤
     */
    String filterByCity(JobDTO job, List<String> allowedCityCodes);

    /**
     * 检查任务是否请求终止
     * 在循环中调用此方法，如果返回true则应该中断循环
     * 
     * @return true-请求终止，false-继续执行
     */
    boolean isTerminateRequested();

    /**
     * 设置任务执行管理器
     * 用于在执行过程中检查终止标记
     * 
     * @param taskExecutionManager 任务执行管理器
     */
    void setTaskExecutionManager(TaskExecutionManager taskExecutionManager);

}
