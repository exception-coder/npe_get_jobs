package getjobs.modules.resume.domain;

import getjobs.repository.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

/**
 * 简历主表实体
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "resume")
public class Resume extends BaseEntity {

    /**
     * 姓名
     */
    @Column(name = "name", length = 100)
    private String name;

    /**
     * 当前头衔
     */
    @Column(name = "title", length = 200)
    private String title;

    /**
     * 联系电话
     */
    @Column(name = "phone", length = 50)
    private String phone;

    /**
     * 邮箱
     */
    @Column(name = "email", length = 100)
    private String email;

    /**
     * 所在城市/工作形式
     */
    @Column(name = "location", length = 200)
    private String location;

    /**
     * 工作年限/经验标签
     */
    @Column(name = "experience", length = 50)
    private String experience;

    /**
     * LinkedIn/个人主页
     */
    @Column(name = "linkedin", length = 500)
    private String linkedin;

    /**
     * 核心技能（JSON格式存储数组）
     */
    @Column(name = "core_skills", columnDefinition = "TEXT")
    private String coreSkills;

    /**
     * 个人优势（JSON格式存储数组）
     */
    @Column(name = "strengths", columnDefinition = "TEXT")
    private String strengths;

    /**
     * 期望职位标题
     */
    @Column(name = "desired_role_title", length = 200)
    private String desiredRoleTitle;

    /**
     * 期望薪资
     */
    @Column(name = "desired_salary", length = 100)
    private String desiredSalary;

    /**
     * 期望地点
     */
    @Column(name = "desired_location", length = 200)
    private String desiredLocation;

    /**
     * 感兴趣的行业（JSON格式存储数组）
     */
    @Column(name = "desired_industries", columnDefinition = "TEXT")
    private String desiredIndustries;

    /**
     * 工作经历列表
     */
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @Builder.Default
    private List<WorkExperience> workExperiences = new ArrayList<>();

    /**
     * 项目经历列表
     */
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @Builder.Default
    private List<ProjectExperience> projectExperiences = new ArrayList<>();

    /**
     * 教育经历列表
     */
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @Builder.Default
    private List<Education> educations = new ArrayList<>();

    /**
     * 添加工作经历
     */
    public void addWorkExperience(WorkExperience workExperience) {
        workExperiences.add(workExperience);
        workExperience.setResume(this);
    }

    /**
     * 添加项目经历
     */
    public void addProjectExperience(ProjectExperience projectExperience) {
        projectExperiences.add(projectExperience);
        projectExperience.setResume(this);
    }

    /**
     * 添加教育经历
     */
    public void addEducation(Education education) {
        educations.add(education);
        education.setResume(this);
    }
}
