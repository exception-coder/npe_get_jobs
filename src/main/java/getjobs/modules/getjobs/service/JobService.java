package getjobs.modules.getjobs.service;

import getjobs.repository.JobRepository;
import getjobs.repository.entity.JobEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

/** Provides the job-ledger operations consumed by the current workspace. */
@Service
@RequiredArgsConstructor
public class JobService {

    private final JobRepository jobRepository;

    /** Searches the persisted job ledger with filters applied before pagination. */
    public Page<JobEntity> search(String platform, Integer status, String keyword, int page, int size,
            boolean contactedOnly) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "id"));
        return jobRepository.search(platform, status, keyword, contactedOnly, pageable);
    }

    /** Updates a manual contact marker without overwriting confirmed success. */
    @Transactional
    public boolean updateContacted(Long id, Boolean contacted) {
        if (id == null || contacted == null) {
            return false;
        }
        return jobRepository.updateManualContactMarker(id, contacted, LocalDateTime.now()) > 0;
    }
}
