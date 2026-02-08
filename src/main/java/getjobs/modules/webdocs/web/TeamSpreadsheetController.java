package getjobs.modules.webdocs.web;

import getjobs.modules.webdocs.dto.TeamSpreadsheetDocumentRequest;
import getjobs.modules.webdocs.dto.TeamSpreadsheetDocumentResponse;
import getjobs.modules.webdocs.service.TeamSpreadsheetService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

/**
 * 团队在线表格接口。
 */
@RestController
@RequestMapping("/api/webdocs/team-spreadsheets")
@RequiredArgsConstructor
public class TeamSpreadsheetController {

    private final TeamSpreadsheetService teamSpreadsheetService;

    @GetMapping
    public List<TeamSpreadsheetDocumentResponse> listDocuments() {
        return teamSpreadsheetService.listDocuments();
    }

    @GetMapping("/{documentId}")
    public ResponseEntity<TeamSpreadsheetDocumentResponse> getDocument(@PathVariable Long documentId) {
        return teamSpreadsheetService.findDocument(documentId)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/{documentId}/table")
    public ResponseEntity<?> getDocumentTable(@PathVariable Long documentId) {
        try {
            return teamSpreadsheetService.findDocumentTable(documentId)
                    .map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping
    public ResponseEntity<?> createDocument(@Valid @RequestBody TeamSpreadsheetDocumentRequest request) {
        try {
            TeamSpreadsheetDocumentResponse response = teamSpreadsheetService.createDocument(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("message", e.getMessage()));
        }
    }

    @PutMapping("/{documentId}")
    public ResponseEntity<?> updateDocument(
            @PathVariable Long documentId,
            @Valid @RequestBody TeamSpreadsheetDocumentRequest request) {
        try {
            TeamSpreadsheetDocumentResponse response = teamSpreadsheetService.updateDocument(documentId, request);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @DeleteMapping("/{documentId}")
    public ResponseEntity<?> deleteDocument(
            @PathVariable Long documentId,
            @RequestParam(value = "title", required = false) String title) {
        try {
            teamSpreadsheetService.deleteDocument(documentId, title);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/import")
    public ResponseEntity<?> importDocument(
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "title", required = false) String title,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "remark", required = false) String remark) {
        try {
            TeamSpreadsheetDocumentResponse response = teamSpreadsheetService.importFromExcel(title, description,
                    remark, file);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }
}
