package getjobs.modules.getjobs.service;

import getjobs.repository.JobRepository;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verifyNoInteractions;
import static org.mockito.Mockito.when;

class JobServiceContactMarkerTest {
    private final JobRepository repository = mock(JobRepository.class);
    private final JobService service = new JobService(repository);

    @Test
    void supportsBothMarkAndUndo() {
        when(repository.updateManualContactMarker(eq(112L), eq(true), any(LocalDateTime.class))).thenReturn(1);
        when(repository.updateManualContactMarker(eq(112L), eq(false), any(LocalDateTime.class))).thenReturn(1);
        assertThat(service.updateContacted(112L, true)).isTrue();
        assertThat(service.updateContacted(112L, false)).isTrue();
    }

    @Test
    void reportsProtectedOrMissingRecordAsUnchanged() {
        assertThat(service.updateContacted(112L, false)).isFalse();
    }

    @Test
    void rejectsMissingParametersWithoutMutation() {
        assertThat(service.updateContacted(null, false)).isFalse();
        assertThat(service.updateContacted(112L, null)).isFalse();
        verifyNoInteractions(repository);
    }
}
