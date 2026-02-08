package getjobs.modules.resume.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.resume.domain.Education;
import getjobs.modules.resume.domain.ProjectExperience;
import getjobs.modules.resume.domain.Resume;
import getjobs.modules.resume.domain.WorkExperience;
import getjobs.modules.resume.dto.ResumeResponse;
import getjobs.modules.resume.dto.ResumeSaveRequest;
import getjobs.modules.resume.repository.ResumeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 简历服务
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class ResumeService {

    private final ResumeRepository resumeRepository;
    private final ObjectMapper objectMapper;

    /**
     * 保存简历
     */
    @Transactional
    public ResumeResponse saveResume(ResumeSaveRequest request) {
        log.info("保存简历，姓名：{}", request.getPersonalInfo() != null ? request.getPersonalInfo().getName() : "未知");

        Resume resume;
        if (request.getId() != null) {
            // 更新现有简历 - 直接删除旧记录，重新创建
            resumeRepository.deleteById(request.getId());
            resumeRepository.flush(); // 确保删除操作立即执行
            // 创建新简历（保留原ID的逻辑由数据库自动生成新ID）
            resume = new Resume();
        } else {
            // 创建新简历
            resume = new Resume();
        }

        // 设置个人信息
        if (request.getPersonalInfo() != null) {
            ResumeSaveRequest.PersonalInfoDTO personalInfo = request.getPersonalInfo();
            resume.setName(personalInfo.getName());
            resume.setTitle(personalInfo.getTitle());
            resume.setPhone(personalInfo.getPhone());
            resume.setEmail(personalInfo.getEmail());
            resume.setLocation(personalInfo.getLocation());
            resume.setExperience(personalInfo.getExperience());
            resume.setLinkedin(personalInfo.getLinkedin());
            resume.setCoreSkills(toJson(personalInfo.getCoreSkills()));
        }

        // 设置个人优势
        resume.setStrengths(toJson(request.getStrengths()));

        // 设置期望职位
        if (request.getDesiredRole() != null) {
            ResumeSaveRequest.DesiredRoleDTO desiredRole = request.getDesiredRole();
            resume.setDesiredRoleTitle(desiredRole.getTitle());
            resume.setDesiredSalary(desiredRole.getSalary());
            resume.setDesiredLocation(desiredRole.getLocation());
            resume.setDesiredIndustries(toJson(desiredRole.getIndustries()));
        }

        // 添加工作经历
        if (request.getWorkExperiences() != null) {
            int order = 0;
            for (ResumeSaveRequest.WorkExperienceDTO dto : request.getWorkExperiences()) {
                WorkExperience workExperience = WorkExperience.builder()
                        .company(dto.getCompany())
                        .role(dto.getRole())
                        .period(dto.getPeriod())
                        .summary(dto.getSummary())
                        .highlights(toJson(dto.getHighlights()))
                        .sortOrder(order++)
                        .build();
                resume.addWorkExperience(workExperience);
            }
        }

        // 添加项目经历
        if (request.getProjects() != null) {
            int order = 0;
            for (ResumeSaveRequest.ProjectExperienceDTO dto : request.getProjects()) {
                ProjectExperience projectExperience = ProjectExperience.builder()
                        .name(dto.getName())
                        .role(dto.getRole())
                        .period(dto.getPeriod())
                        .summary(dto.getSummary())
                        .highlights(toJson(dto.getHighlights()))
                        .sortOrder(order++)
                        .build();
                resume.addProjectExperience(projectExperience);
            }
        }

        // 添加教育经历
        if (request.getEducation() != null) {
            int order = 0;
            for (ResumeSaveRequest.EducationDTO dto : request.getEducation()) {
                Education education = Education.builder()
                        .school(dto.getSchool())
                        .major(dto.getMajor())
                        .degree(dto.getDegree())
                        .period(dto.getPeriod())
                        .sortOrder(order++)
                        .build();
                resume.addEducation(education);
            }
        }

        // 保存到数据库
        Resume savedResume = resumeRepository.save(resume);
        log.info("简历保存成功，ID：{}", savedResume.getId());

        return convertToResponse(savedResume);
    }

    /**
     * 根据ID查询简历
     */
    @Transactional(readOnly = true)
    public ResumeResponse getResumeById(Long id) {
        log.info("查询简历，ID：{}", id);
        Resume resume = resumeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("简历不存在，ID：" + id));
        return convertToResponse(resume);
    }

    /**
     * 查询所有简历
     */
    @Transactional(readOnly = true)
    public List<ResumeResponse> getAllResumes() {
        log.info("查询所有简历");
        List<Resume> resumes = resumeRepository.findAll();
        return resumes.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    /**
     * 根据姓名搜索简历
     */
    @Transactional(readOnly = true)
    public List<ResumeResponse> searchResumesByName(String name) {
        log.info("根据姓名搜索简历：{}", name);
        List<Resume> resumes = resumeRepository.findByNameContaining(name);
        return resumes.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    /**
     * 删除简历
     */
    @Transactional
    public void deleteResume(Long id) {
        log.info("删除简历，ID：{}", id);
        if (!resumeRepository.existsById(id)) {
            throw new RuntimeException("简历不存在，ID：" + id);
        }
        resumeRepository.deleteById(id);
        log.info("简历删除成功，ID：{}", id);
    }

    /**
     * 将对象转换为JSON字符串
     */
    private String toJson(Object obj) {
        if (obj == null) {
            return null;
        }
        try {
            return objectMapper.writeValueAsString(obj);
        } catch (JsonProcessingException e) {
            log.error("对象转JSON失败", e);
            return null;
        }
    }

    /**
     * 将JSON字符串转换为List
     */
    private List<String> fromJson(String json) {
        if (json == null || json.trim().isEmpty()) {
            return new ArrayList<>();
        }
        try {
            return objectMapper.readValue(json,
                    objectMapper.getTypeFactory().constructCollectionType(List.class, String.class));
        } catch (JsonProcessingException e) {
            log.error("JSON转List失败", e);
            return new ArrayList<>();
        }
    }

    /**
     * 将实体转换为响应DTO
     */
    private ResumeResponse convertToResponse(Resume resume) {
        return ResumeResponse.builder()
                .id(resume.getId())
                .personalInfo(ResumeResponse.PersonalInfoDTO.builder()
                        .name(resume.getName())
                        .title(resume.getTitle())
                        .phone(resume.getPhone())
                        .email(resume.getEmail())
                        .location(resume.getLocation())
                        .experience(resume.getExperience())
                        .coreSkills(fromJson(resume.getCoreSkills()))
                        .linkedin(resume.getLinkedin())
                        .build())
                .strengths(fromJson(resume.getStrengths()))
                .desiredRole(ResumeResponse.DesiredRoleDTO.builder()
                        .title(resume.getDesiredRoleTitle())
                        .salary(resume.getDesiredSalary())
                        .location(resume.getDesiredLocation())
                        .industries(fromJson(resume.getDesiredIndustries()))
                        .build())
                .workExperiences(resume.getWorkExperiences().stream()
                        .map(we -> ResumeResponse.WorkExperienceDTO.builder()
                                .company(we.getCompany())
                                .role(we.getRole())
                                .period(we.getPeriod())
                                .summary(we.getSummary())
                                .highlights(fromJson(we.getHighlights()))
                                .build())
                        .collect(Collectors.toList()))
                .projects(resume.getProjectExperiences().stream()
                        .map(pe -> ResumeResponse.ProjectExperienceDTO.builder()
                                .name(pe.getName())
                                .role(pe.getRole())
                                .period(pe.getPeriod())
                                .summary(pe.getSummary())
                                .highlights(fromJson(pe.getHighlights()))
                                .build())
                        .collect(Collectors.toList()))
                .education(resume.getEducations().stream()
                        .map(edu -> ResumeResponse.EducationDTO.builder()
                                .school(edu.getSchool())
                                .major(edu.getMajor())
                                .degree(edu.getDegree())
                                .period(edu.getPeriod())
                                .build())
                        .collect(Collectors.toList()))
                .createdAt(resume.getCreatedAt())
                .updatedAt(resume.getUpdatedAt())
                .build();
    }
}
