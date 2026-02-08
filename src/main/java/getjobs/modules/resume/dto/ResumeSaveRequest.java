package getjobs.modules.resume.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * 简历保存请求DTO
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResumeSaveRequest {

    /**
     * 简历ID（更新时传入）
     */
    private Long id;

    /**
     * 个人信息
     */
    private PersonalInfoDTO personalInfo;

    /**
     * 个人优势
     */
    private List<String> strengths;

    /**
     * 期望职位
     */
    private DesiredRoleDTO desiredRole;

    /**
     * 工作经历列表
     */
    private List<WorkExperienceDTO> workExperiences;

    /**
     * 项目经历列表
     */
    private List<ProjectExperienceDTO> projects;

    /**
     * 教育经历列表
     */
    private List<EducationDTO> education;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class PersonalInfoDTO {
        private String name;
        private String title;
        private String phone;
        private String email;
        private String location;
        private String experience;
        private List<String> coreSkills;
        private String linkedin;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class DesiredRoleDTO {
        private String title;
        private String salary;
        private String location;
        private List<String> industries;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class WorkExperienceDTO {
        private String company;
        private String role;
        private String period;
        private String summary;
        private List<String> highlights;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class ProjectExperienceDTO {
        private String name;
        private String role;
        private String period;
        private String summary;
        private List<String> highlights;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class EducationDTO {
        private String school;
        private String major;
        private String degree;
        private String period;
    }
}

