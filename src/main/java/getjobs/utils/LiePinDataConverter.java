package getjobs.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.common.enums.RecruitmentPlatformEnum;
import getjobs.modules.liepin.dto.LiePinApiResponse;
import getjobs.repository.entity.JobEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class LiePinDataConverter {

    private final ObjectMapper objectMapper = new ObjectMapper();

    public JobEntity convertToJobEntity(LiePinApiResponse.JobCard jobCard) {
        try {
            JobEntity jobEntity = new JobEntity();
            LiePinApiResponse.Job job = jobCard.getJob();
            LiePinApiResponse.Comp comp = jobCard.getComp();
            LiePinApiResponse.Recruiter recruiter = jobCard.getRecruiter();

            jobEntity.setJobTitle(job.getTitle());
            jobEntity.setSalaryDesc(job.getSalary());
            jobEntity.setJobExperience(job.getRequireWorkYears());
            jobEntity.setJobDegree(job.getRequireEduLevel());
            jobEntity.setJobUrl(job.getLink());
            jobEntity.setJobType(Integer.parseInt(job.getJobKind()));

            if (job.getLabels() != null && !job.getLabels().isEmpty()) {
                jobEntity.setJobLabels(convertListToJson(job.getLabels()));
                jobEntity.setSkills(convertListToJson(job.getLabels()));
            }

            jobEntity.setCompanyName(comp.getCompName());
            jobEntity.setCompanyIndustry(comp.getCompIndustry());
            jobEntity.setCompanyScale(comp.getCompScale());
            jobEntity.setCompanyStage(comp.getCompStage());
            jobEntity.setCompanyLogo(comp.getCompLogo());

            jobEntity.setWorkCity(job.getDq());

            jobEntity.setHrName(recruiter.getRecruiterName());
            jobEntity.setHrTitle(recruiter.getRecruiterTitle());
            jobEntity.setHrAvatar(recruiter.getRecruiterPhoto());
            jobEntity.setHrActiveTime(recruiter.getImShowText());

            jobEntity.setPlatform(RecruitmentPlatformEnum.LIEPIN.getPlatformCode());
            jobEntity.setEncryptJobId(job.getJobId());
            jobEntity.setEncryptHrId(recruiter.getRecruiterId());
            if (comp.getCompId() != null) {
                jobEntity.setEncryptCompanyId(String.valueOf(comp.getCompId()));
                jobEntity.setItemId(comp.getCompId());
            }

            jobEntity.setStatus(0);
            jobEntity.setIsFavorite(false);
            jobEntity.setIsContacted(false);

            return jobEntity;
        } catch (Exception e) {
            log.error("转换猎聘职位数据失败: {}", e.getMessage(), e);
            return null;
        }
    }

    private String convertListToJson(List<String> list) {
        if (list == null || list.isEmpty()) {
            return null;
        }
        try {
            return objectMapper.writeValueAsString(list);
        } catch (JsonProcessingException e) {
            log.error("转换List到JSON失败: {}", e.getMessage());
            return null;
        }
    }

    public boolean isValidJobData(LiePinApiResponse.JobCard jobCard) {
        if (jobCard == null || jobCard.getJob() == null || jobCard.getComp() == null) {
            return false;
        }

        LiePinApiResponse.Job job = jobCard.getJob();
        if (job.getJobId() == null || job.getJobId().trim().isEmpty()) {
            log.warn("职位ID为空，跳过该职位");
            return false;
        }

        if (job.getTitle() == null || job.getTitle().trim().isEmpty()) {
            log.warn("职位名称为空，跳过该职位: {}", job.getJobId());
            return false;
        }

        if (jobCard.getComp().getCompName() == null || jobCard.getComp().getCompName().trim().isEmpty()) {
            log.warn("公司名称为空，跳过该职位: {}", job.getJobId());
            return false;
        }

        return true;
    }
}
