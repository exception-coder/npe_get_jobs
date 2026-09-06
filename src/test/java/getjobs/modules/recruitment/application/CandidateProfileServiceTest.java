package getjobs.modules.recruitment.application;

import getjobs.repository.UserProfileRepository;
import getjobs.repository.entity.UserProfile;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CandidateProfileServiceTest {
    @Mock
    private UserProfileRepository repository;

    @Test
    void reportsIntroductionRequiredWhenProfileDoesNotExist() {
        when(repository.findFirstByOrderByIdAsc()).thenReturn(Optional.empty());

        CandidateProfileService.CandidateProfile profile = new CandidateProfileService(repository).profile();

        assertThat(profile.selfIntroduction()).isEmpty();
        assertThat(profile.introductionRequired()).isTrue();
    }

    @Test
    void createsProfileAndPersistsTrimmedIntroduction() {
        when(repository.findFirstByOrderByIdAsc()).thenReturn(Optional.empty());
        when(repository.save(any(UserProfile.class))).thenAnswer(invocation -> invocation.getArgument(0));

        CandidateProfileService.CandidateProfile profile = new CandidateProfileService(repository)
                .updateIntroduction("  我有八年 Java 与供应链系统经验，擅长复杂业务建模。  ");

        ArgumentCaptor<UserProfile> captor = ArgumentCaptor.forClass(UserProfile.class);
        verify(repository).save(captor.capture());
        assertThat(captor.getValue().getSelfIntroduction()).isEqualTo("我有八年 Java 与供应链系统经验，擅长复杂业务建模。");
        assertThat(profile.introductionRequired()).isFalse();
    }

    @Test
    void blankIntroductionRestoresMissingState() {
        UserProfile existing = new UserProfile();
        existing.setSelfIntroduction("已有内容");
        when(repository.findFirstByOrderByIdAsc()).thenReturn(Optional.of(existing));
        when(repository.save(existing)).thenReturn(existing);

        CandidateProfileService.CandidateProfile profile = new CandidateProfileService(repository).updateIntroduction("   ");

        assertThat(existing.getSelfIntroduction()).isNull();
        assertThat(profile.introductionRequired()).isTrue();
    }

    @Test
    void rejectsIntroductionLongerThanLimit() {
        CandidateProfileService service = new CandidateProfileService(repository);

        assertThatThrownBy(() -> service.updateIntroduction("a".repeat(501)))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("500");
    }
}
