package getjobs.modules.boss.service.playwright;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.openjson.JSONObject;
import com.microsoft.playwright.*;
import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.common.service.PlaywrightService;
import getjobs.modules.boss.dto.BossApiResponse;
import getjobs.repository.entity.JobEntity;
import getjobs.repository.JobRepository;
import getjobs.utils.BossJobDataConverter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.annotation.PostConstruct;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Boss接口监控服务
 * 负责监听和记录Boss直聘相关的API请求和响应
 * 
 * @author system
 * @since 2024-01-01
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class BossApiMonitorService {

    private final JobRepository jobRepository;
    private final BossJobDataConverter dataConverter;
    private final PlaywrightService playwrightService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * 初始化监控服务
     * 设置岗位搜索和推荐岗位接口监听器
     */
    @PostConstruct
    public void init() {
        setupJobApiMonitor();
    }

    /**
     * 设置岗位搜索和推荐岗位接口监听器
     * 监听所有相关的API响应并打印完整报文
     */
    public void setupJobApiMonitor() {
        try {
            Page page = playwrightService.getPage(RecruitmentPlatformEnum.BOSS_ZHIPIN);

            // 监听岗位搜索接口
            // setupJobSearchMonitor(ctx);

            // 监听岗位推荐接口
            // setupRecommendJobMonitor(ctx);

            // 监听所有岗位相关接口的响应
            setupResponseMonitor(page);

            log.info("Boss API监控服务初始化完成");
        } catch (Exception e) {
            log.error("Boss API监控服务初始化失败: {}", e.getMessage(), e);
        }
    }

    /**
     * 设置响应监控
     */
    private void setupResponseMonitor(Page page) {
        page.onResponse(res -> {
            try {
                String url = res.url();

                // 监听岗位搜索接口响应
                if (url.contains("/wapi/zpgeek/search/joblist.json")) {
                    handleJobSearchResponse(res);
                }
                // 监听推荐岗位接口响应
                else if (url.contains("/wapi/zpgeek/pc/recommend/job/list.json")) {
                    handleRecommendJobResponse(res);
                } else if (url.contains("/wapi/zpgeek/job/detail.json")) {
                    handleJobDetailResponse(res);
                }
            } catch (PlaywrightException e) {
                // 捕获并忽略页面导航/重载时产生的 "Object doesn't exist" 异常
                // 原因：当页面重新加载时，Playwright 会清理旧的 request/response 对象
                // 但监听器回调可能还在尝试访问这些已销毁的对象，导致异常
                // 这种情况下的异常可以安全忽略，不影响正常业务流程
                if (!e.getMessage().contains("Object doesn't exist")) {
                    log.error("处理响应时发生异常: {}", e.getMessage(), e);
                }
            } catch (Exception e) {
                log.error("处理响应时发生未知异常: {}", e.getMessage(), e);
            }
        });
    }

    private void handleJobDetailResponse(Response res) {
        log.debug("=== 岗位详情响应拦截 ===");
        log.debug("响应状态: {}", res.status());
        log.debug("响应URL: {}", res.url());
        log.debug("响应头: {}", res.headers());

        try {
            String body = res.text();
            log.debug("响应体长度: {} 字符", body.length());
            log.debug("响应体内容: {}", body);

            JSONObject jsonResponse = new JSONObject(body);
            // 解析并保存职位数据
            parseAndUpdateJobDetail(jsonResponse);

        } catch (PlaywrightException e) {
            log.error("读取响应体失败: {}", e.getMessage());
        }
        log.debug("==========================");

    }

    /**
     * 处理岗位搜索响应
     */
    private void handleJobSearchResponse(Response res) {
        log.debug("=== 岗位搜索响应拦截 ===");
        log.debug("响应状态: {}", res.status());
        log.debug("响应URL: {}", res.url());
        log.debug("响应头: {}", res.headers());

        try {
            String body = res.text();
            log.debug("响应体长度: {} 字符", body.length());
            log.debug("响应体内容: {}", body);

            // 尝试解析JSON并美化输出
            formatJsonResponse(body);

            // 解析并保存职位数据
            parseAndSaveJobData(body, "岗位搜索");

        } catch (PlaywrightException e) {
            log.error("读取响应体失败: {}", e.getMessage());
        }
        log.debug("==========================");
    }

    /**
     * 处理推荐岗位响应
     */
    private void handleRecommendJobResponse(com.microsoft.playwright.Response res) {
        log.info("=== 推荐岗位响应拦截 ===");
        log.info("响应状态: {}", res.status());
        log.info("响应URL: {}", res.url());
        log.info("响应头: {}", res.headers());

        try {
            String body = res.text();
            log.info("响应体长度: {} 字符", body.length());
            log.info("响应体内容: {}", body);

            // 尝试解析JSON并美化输出
            formatJsonResponse(body);

            // 解析并保存职位数据
            parseAndSaveJobData(body, "推荐岗位");

        } catch (PlaywrightException e) {
            log.error("读取响应体失败: {}", e.getMessage());
        }
        log.info("==========================");
    }

    /**
     * 格式化JSON响应
     */
    private void formatJsonResponse(String body) {
        try {
            JSONObject jsonResponse = new JSONObject(body);
            log.debug("格式化JSON响应: {}", jsonResponse.toString(2));
        } catch (Exception e) {
            log.debug("响应体不是有效的JSON格式");
        }
    }

    /**
     * 解析并保存职位数据
     * 
     * @param body   响应体JSON字符串
     * @param source 数据来源描述
     */
    @Transactional
    public void parseAndSaveJobData(String body, String source) {
        try {
            // 解析BOSS直聘API响应
            BossApiResponse response = objectMapper.readValue(body, BossApiResponse.class);

            if (response.getCode() != 0) {
                log.warn("BOSS直聘API响应错误，code: {}, message: {}", response.getCode(), response.getMessage());
                return;
            }

            if (response.getZpData() == null || response.getZpData().getJobList() == null) {
                log.warn("BOSS直聘API响应中没有职位数据");
                return;
            }

            List<Map<String, Object>> jobList = response.getZpData().getJobList();
            log.info("从{}获取到 {} 个职位数据", source, jobList.size());

            // 转换为JobEntity并保存
            List<JobEntity> jobEntities = jobList.stream()
                    .map(dataConverter::convertToJobEntity)
                    .filter(entity -> entity != null)
                    .collect(Collectors.toList());

            if (!jobEntities.isEmpty()) {
                // 检查是否已存在相同的职位（基于encryptJobId）
                List<JobEntity> newJobs = jobEntities.stream()
                        .filter(entity -> !isJobExists(entity.getEncryptJobId()))
                        .collect(Collectors.toList());

                if (!newJobs.isEmpty()) {
                    jobRepository.saveAll(newJobs);
                    log.info("成功保存 {} 个新职位到数据库，来源: {}", newJobs.size(), source);
                } else {
                    log.info("所有职位都已存在，跳过保存，来源: {}", source);
                }
            } else {
                log.warn("没有有效的职位数据可以保存，来源: {}", source);
            }

        } catch (Exception e) {
            log.error("解析并保存职位数据失败，来源: {}", source, e);
        }
    }

    /**
     * 检查职位是否已存在
     * 
     * @param encryptJobId 加密职位ID
     * @return 是否存在
     */
    private boolean isJobExists(String encryptJobId) {
        if (encryptJobId == null || encryptJobId.trim().isEmpty()) {
            return false;
        }

        try {
            return jobRepository.existsByEncryptJobId(encryptJobId);
        } catch (Exception e) {
            log.warn("检查职位是否存在时发生错误: {}", e.getMessage());
            return false;
        }
    }

    /**
     * 手动启动监控（如果需要重新启动）
     */
    public void startMonitoring() {
        log.info("手动启动Boss API监控服务");
        setupJobApiMonitor();
    }

    /**
     * 检查监控服务状态
     */
    public boolean isMonitoringActive() {
        try {
            BrowserContext ctx = playwrightService.getContext(RecruitmentPlatformEnum.BOSS_ZHIPIN);
            return ctx != null;
        } catch (Exception e) {
            log.warn("检查监控服务状态失败: {}", e.getMessage());
            return false;
        }
    }

    /**
     * 解析职位明细数据并更新到数据库
     *
     * @param jsonResponse 职位明细JSON响应
     */
    @Transactional
    protected void parseAndUpdateJobDetail(JSONObject jsonResponse) {
        String encryptId = jsonResponse.optJSONObject("zpData")
                .optJSONObject("jobInfo")
                .optString("encryptId");
        parseAndUpdateJobDetail(jsonResponse, encryptId);
    }

    /**
     * 解析职位明细数据并更新到数据库
     * 
     * @param jsonResponse 职位明细JSON响应
     * @param encryptJobId 加密JobId
     */
    @Transactional
    protected void parseAndUpdateJobDetail(JSONObject jsonResponse, String encryptJobId) {
        try {
            // 根据encryptJobId查找对应的JobEntity
            JobEntity jobEntity = jobRepository.findByEncryptJobId(encryptJobId);
            if (jobEntity == null) {
                log.warn("未找到encryptJobId为 {} 的职位记录", encryptJobId);
                return;
            }

            // 获取zpData节点
            JSONObject zpData = jsonResponse.optJSONObject("zpData");
            if (zpData == null) {
                log.warn("职位明细响应中没有zpData节点，encryptJobId: {}", encryptJobId);
                return;
            }

            // 解析jobInfo节点
            JSONObject jobInfo = zpData.optJSONObject("jobInfo");
            if (jobInfo != null) {
                updateJobEntityFromJobInfo(jobEntity, jobInfo);
            }

            // 解析bossInfo节点
            JSONObject bossInfo = zpData.optJSONObject("bossInfo");
            if (bossInfo != null) {
                updateJobEntityFromBossInfo(jobEntity, bossInfo);
            }

            // 解析brandComInfo节点
            JSONObject brandComInfo = zpData.optJSONObject("brandComInfo");
            if (brandComInfo != null) {
                updateJobEntityFromBrandComInfo(jobEntity, brandComInfo);
            }

            // 保存更新后的实体
            jobRepository.save(jobEntity);
            log.debug("成功更新职位明细信息，encryptJobId: {}, 职位: {}", encryptJobId, jobEntity.getJobTitle());

        } catch (Exception e) {
            log.error("解析并更新职位明细数据失败，encryptJobId: {}", encryptJobId, e);
        }
    }

    /**
     * 从jobInfo节点更新JobEntity
     * 
     * @param jobEntity JobEntity实例
     * @param jobInfo   jobInfo JSON对象
     */
    private void updateJobEntityFromJobInfo(JobEntity jobEntity, JSONObject jobInfo) {
        try {
            // 基础职位信息
            if (jobInfo.has("encryptId") && !jobInfo.isNull("encryptId")) {
                jobEntity.setEncryptJobDetailId(jobInfo.getString("encryptId"));
            }
            if (jobInfo.has("encryptUserId") && !jobInfo.isNull("encryptUserId")) {
                jobEntity.setEncryptJobUserId(jobInfo.getString("encryptUserId"));
            }
            if (jobInfo.has("invalidStatus")) {
                jobEntity.setJobInvalidStatus(jobInfo.getBoolean("invalidStatus"));
            }
            if (jobInfo.has("jobName") && !jobInfo.isNull("jobName")) {
                jobEntity.setJobTitle(jobInfo.getString("jobName"));
            }
            if (jobInfo.has("position")) {
                jobEntity.setJobPositionCode(jobInfo.getLong("position"));
            }
            if (jobInfo.has("positionName") && !jobInfo.isNull("positionName")) {
                jobEntity.setJobPositionName(jobInfo.getString("positionName"));
            }
            if (jobInfo.has("location")) {
                jobEntity.setJobLocationCode(jobInfo.getLong("location"));
            }
            if (jobInfo.has("locationName") && !jobInfo.isNull("locationName")) {
                jobEntity.setJobLocationName(jobInfo.getString("locationName"));
            }
            if (jobInfo.has("locationUrl") && !jobInfo.isNull("locationUrl")) {
                jobEntity.setJobLocationUrl(jobInfo.getString("locationUrl"));
            }
            if (jobInfo.has("experienceName") && !jobInfo.isNull("experienceName")) {
                jobEntity.setJobExperienceName(jobInfo.getString("experienceName"));
            }
            if (jobInfo.has("degreeName") && !jobInfo.isNull("degreeName")) {
                jobEntity.setJobDegreeName(jobInfo.getString("degreeName"));
            }
            if (jobInfo.has("jobType")) {
                jobEntity.setJobDetailType(jobInfo.getInt("jobType"));
            }
            if (jobInfo.has("proxyJob")) {
                jobEntity.setJobProxyJob(jobInfo.getInt("proxyJob"));
            }
            if (jobInfo.has("proxyType")) {
                jobEntity.setJobProxyType(jobInfo.getInt("proxyType"));
            }
            if (jobInfo.has("salaryDesc") && !jobInfo.isNull("salaryDesc")) {
                jobEntity.setSalaryDesc(jobInfo.getString("salaryDesc"));
            }
            if (jobInfo.has("payTypeDesc") && !jobInfo.isNull("payTypeDesc")) {
                jobEntity.setJobPayTypeDesc(jobInfo.getString("payTypeDesc"));
            }
            if (jobInfo.has("postDescription") && !jobInfo.isNull("postDescription")) {
                jobEntity.setJobPostDescription(jobInfo.getString("postDescription"));
            }
            if (jobInfo.has("encryptAddressId") && !jobInfo.isNull("encryptAddressId")) {
                jobEntity.setEncryptAddressId(jobInfo.getString("encryptAddressId"));
            }
            if (jobInfo.has("address") && !jobInfo.isNull("address")) {
                jobEntity.setJobAddress(jobInfo.getString("address"));
            }
            if (jobInfo.has("longitude")) {
                jobEntity.setJobLongitude(new BigDecimal(jobInfo.getString("longitude")));
            }
            if (jobInfo.has("latitude")) {
                jobEntity.setJobLatitude(new BigDecimal(jobInfo.getString("latitude")));
            }
            if (jobInfo.has("staticMapUrl") && !jobInfo.isNull("staticMapUrl")) {
                jobEntity.setJobStaticMapUrl(jobInfo.getString("staticMapUrl"));
            }
            if (jobInfo.has("pcStaticMapUrl") && !jobInfo.isNull("pcStaticMapUrl")) {
                jobEntity.setJobPcStaticMapUrl(jobInfo.getString("pcStaticMapUrl"));
            }
            if (jobInfo.has("baiduStaticMapUrl") && !jobInfo.isNull("baiduStaticMapUrl")) {
                jobEntity.setJobBaiduStaticMapUrl(jobInfo.getString("baiduStaticMapUrl"));
            }
            if (jobInfo.has("baiduPcStaticMapUrl") && !jobInfo.isNull("baiduPcStaticMapUrl")) {
                jobEntity.setJobBaiduPcStaticMapUrl(jobInfo.getString("baiduPcStaticMapUrl"));
            }
            if (jobInfo.has("showSkills")) {
                jobEntity.setJobShowSkills(jobInfo.getJSONArray("showSkills").toString());
            }
            if (jobInfo.has("anonymous")) {
                jobEntity.setJobAnonymous(jobInfo.getInt("anonymous"));
            }
            if (jobInfo.has("jobStatusDesc") && !jobInfo.isNull("jobStatusDesc")) {
                jobEntity.setJobStatusDesc(jobInfo.getString("jobStatusDesc"));
            }

            log.debug("成功更新jobInfo信息到JobEntity");
        } catch (Exception e) {
            log.error("更新jobInfo信息失败: {}", e.getMessage(), e);
        }
    }

    /**
     * 从bossInfo节点更新JobEntity
     * 
     * @param jobEntity JobEntity实例
     * @param bossInfo  bossInfo JSON对象
     */
    private void updateJobEntityFromBossInfo(JobEntity jobEntity, JSONObject bossInfo) {
        try {
            if (bossInfo.has("name") && !bossInfo.isNull("name")) {
                jobEntity.setBossName(bossInfo.getString("name"));
            }
            if (bossInfo.has("title") && !bossInfo.isNull("title")) {
                jobEntity.setBossTitle(bossInfo.getString("title"));
            }
            if (bossInfo.has("tiny") && !bossInfo.isNull("tiny")) {
                jobEntity.setBossTiny(bossInfo.getString("tiny"));
            }
            if (bossInfo.has("large") && !bossInfo.isNull("large")) {
                jobEntity.setBossLarge(bossInfo.getString("large"));
            }
            if (bossInfo.has("activeTimeDesc") && !bossInfo.isNull("activeTimeDesc")) {
                jobEntity.setBossActiveTimeDesc(bossInfo.getString("activeTimeDesc"));
            }
            if (bossInfo.has("bossOnline")) {
                jobEntity.setBossOnline(bossInfo.getBoolean("bossOnline"));
            }
            if (bossInfo.has("brandName") && !bossInfo.isNull("brandName")) {
                jobEntity.setBossBrandName(bossInfo.getString("brandName"));
            }
            if (bossInfo.has("bossSource")) {
                jobEntity.setBossSource(bossInfo.getInt("bossSource"));
            }
            if (bossInfo.has("certificated")) {
                jobEntity.setBossCertificated(bossInfo.getBoolean("certificated"));
            }
            if (bossInfo.has("tagIconUrl") && !bossInfo.isNull("tagIconUrl")) {
                jobEntity.setBossTagIconUrl(bossInfo.getString("tagIconUrl"));
            }
            if (bossInfo.has("avatarStickerUrl") && !bossInfo.isNull("avatarStickerUrl")) {
                jobEntity.setBossAvatarStickerUrl(bossInfo.getString("avatarStickerUrl"));
            }

            log.debug("成功更新bossInfo信息到JobEntity");
        } catch (Exception e) {
            log.error("更新bossInfo信息失败: {}", e.getMessage(), e);
        }
    }

    /**
     * 从brandComInfo节点更新JobEntity
     * 
     * @param jobEntity    JobEntity实例
     * @param brandComInfo brandComInfo JSON对象
     */
    private void updateJobEntityFromBrandComInfo(JobEntity jobEntity, JSONObject brandComInfo) {
        try {
            if (brandComInfo.has("encryptBrandId") && !brandComInfo.isNull("encryptBrandId")) {
                jobEntity.setEncryptBrandId(brandComInfo.getString("encryptBrandId"));
            }
            if (brandComInfo.has("brandName") && !brandComInfo.isNull("brandName")) {
                jobEntity.setBrandName(brandComInfo.getString("brandName"));
            }
            if (brandComInfo.has("logo") && !brandComInfo.isNull("logo")) {
                jobEntity.setBrandLogo(brandComInfo.getString("logo"));
            }
            if (brandComInfo.has("stage")) {
                jobEntity.setBrandStage(brandComInfo.getLong("stage"));
            }
            if (brandComInfo.has("stageName") && !brandComInfo.isNull("stageName")) {
                jobEntity.setBrandStageName(brandComInfo.getString("stageName"));
            }
            if (brandComInfo.has("scale")) {
                jobEntity.setBrandScale(brandComInfo.getLong("scale"));
            }
            if (brandComInfo.has("scaleName") && !brandComInfo.isNull("scaleName")) {
                jobEntity.setBrandScaleName(brandComInfo.getString("scaleName"));
            }
            if (brandComInfo.has("industry")) {
                jobEntity.setBrandIndustry(brandComInfo.getLong("industry"));
            }
            if (brandComInfo.has("industryName") && !brandComInfo.isNull("industryName")) {
                jobEntity.setBrandIndustryName(brandComInfo.getString("industryName"));
            }
            if (brandComInfo.has("introduce") && !brandComInfo.isNull("introduce")) {
                jobEntity.setBrandIntroduce(brandComInfo.getString("introduce"));
            }
            if (brandComInfo.has("labels")) {
                jobEntity.setBrandLabels(brandComInfo.getJSONArray("labels").toString());
            }
            if (brandComInfo.has("activeTime")) {
                jobEntity.setBrandActiveTime(brandComInfo.getLong("activeTime"));
            }
            if (brandComInfo.has("visibleBrandInfo")) {
                jobEntity.setVisibleBrandInfo(brandComInfo.getBoolean("visibleBrandInfo"));
            }
            if (brandComInfo.has("focusBrand")) {
                jobEntity.setFocusBrand(brandComInfo.getBoolean("focusBrand"));
            }
            if (brandComInfo.has("customerBrandName") && !brandComInfo.isNull("customerBrandName")) {
                jobEntity.setCustomerBrandName(brandComInfo.getString("customerBrandName"));
            }
            if (brandComInfo.has("customerBrandStageName") && !brandComInfo.isNull("customerBrandStageName")) {
                jobEntity.setCustomerBrandStageName(brandComInfo.getString("customerBrandStageName"));
            }

            log.debug("成功更新brandComInfo信息到JobEntity");
        } catch (Exception e) {
            log.error("更新brandComInfo信息失败: {}", e.getMessage(), e);
        }
    }

}
