package getjobs.modules.sasl.web;

import getjobs.modules.sasl.domain.Announcement;
import getjobs.modules.sasl.dto.AnnouncementResponse;
import getjobs.modules.sasl.dto.AnnouncementUpdateRequest;
import getjobs.modules.sasl.service.AnnouncementService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 公告控制器。
 */
@RestController
@RequestMapping("/api/sasl/announcements")
@RequiredArgsConstructor
public class AnnouncementController {

    private final AnnouncementService announcementService;

    /**
     * 查询所有公告。
     *
     * @return 所有公告列表
     */
    @GetMapping
    public ResponseEntity<List<AnnouncementResponse>> getAllAnnouncements() {
        List<Announcement> announcements = announcementService.findAll();
        List<AnnouncementResponse> responses = announcements.stream()
                .map(AnnouncementResponse::from)
                .collect(Collectors.toList());
        return ResponseEntity.ok(responses);
    }

    /**
     * 更新公告。
     *
     * @param id      公告ID
     * @param request 更新请求
     * @return 更新后的公告，如果不存在返回 404
     */
    @PutMapping("/{id}")
    public ResponseEntity<?> updateAnnouncement(
            @PathVariable("id") Long id,
            @Valid @RequestBody AnnouncementUpdateRequest request) {
        try {
            var updated = announcementService.update(
                    id,
                    request.content(),
                    request.enabled(),
                    request.sortOrder());

            if (updated.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("message", "公告不存在或已被删除"));
            }

            return ResponseEntity.ok(AnnouncementResponse.from(updated.get()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "更新公告失败: " + e.getMessage()));
        }
    }
}
