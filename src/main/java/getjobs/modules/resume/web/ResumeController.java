package getjobs.modules.resume.web;

import getjobs.modules.resume.dto.ResumeResponse;
import getjobs.modules.resume.dto.ResumeSaveRequest;
import getjobs.modules.resume.service.ResumeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * 简历优化控制器
 */
@Slf4j
@RestController
@RequestMapping("/api/resume")
@RequiredArgsConstructor
public class ResumeController {

    private final ResumeService resumeService;

    /**
     * 保存简历
     */
    @PostMapping("/save")
    public ResponseEntity<ResumeResponse> saveResume(@RequestBody ResumeSaveRequest request) {
        log.info("接收到保存简历请求");
        try {
            ResumeResponse response = resumeService.saveResume(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("保存简历失败", e);
            throw new RuntimeException("保存简历失败：" + e.getMessage());
        }
    }

    /**
     * 根据ID查询简历
     */
    @GetMapping("/{id}")
    public ResponseEntity<ResumeResponse> getResumeById(@PathVariable Long id) {
        log.info("查询简历，ID：{}", id);
        try {
            ResumeResponse response = resumeService.getResumeById(id);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("查询简历失败", e);
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * 查询所有简历
     */
    @GetMapping("/list")
    public ResponseEntity<List<ResumeResponse>> getAllResumes() {
        log.info("查询所有简历");
        List<ResumeResponse> responses = resumeService.getAllResumes();
        return ResponseEntity.ok(responses);
    }

    /**
     * 根据姓名搜索简历
     */
    @GetMapping("/search")
    public ResponseEntity<List<ResumeResponse>> searchResumes(@RequestParam String name) {
        log.info("搜索简历，姓名：{}", name);
        List<ResumeResponse> responses = resumeService.searchResumesByName(name);
        return ResponseEntity.ok(responses);
    }

    /**
     * 删除简历
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteResume(@PathVariable Long id) {
        log.info("删除简历，ID：{}", id);
        try {
            resumeService.deleteResume(id);
            return ResponseEntity.ok(Map.of("message", "简历删除成功"));
        } catch (Exception e) {
            log.error("删除简历失败", e);
            throw new RuntimeException("删除简历失败：" + e.getMessage());
        }
    }

    /**
     * 健康检查
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of(
                "status", "UP",
                "service", "resume-service"
        ));
    }
}

