package getjobs.modules.recruitment.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import getjobs.modules.recruitment.infrastructure.ai.RecruitmentIntentCodec;
import getjobs.repository.entity.RecruitmentGoalEntity;
import getjobs.repository.entity.RecruitmentIntentMatchEntity;
import org.hibernate.cfg.Configuration;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import java.nio.file.Path;
import java.util.Map;
import static org.assertj.core.api.Assertions.*;

class RecruitmentIntentSqliteTest {
    @TempDir Path directory;

    @Test
    void roundTripsIntentAndMatchSnapshotsThroughRealSqlite() throws Exception {
        var config = new Configuration().addAnnotatedClass(RecruitmentGoalEntity.class)
                .addAnnotatedClass(RecruitmentIntentMatchEntity.class);
        config.setProperty("hibernate.connection.driver_class", "org.sqlite.JDBC");
        config.setProperty("hibernate.connection.url", "jdbc:sqlite:" + directory.resolve("intent.db"));
        config.setProperty("hibernate.dialect", "org.hibernate.community.dialect.SQLiteDialect");
        config.setProperty("hibernate.hbm2ddl.auto", "update");
        var codec = new RecruitmentIntentCodec(new ObjectMapper());
        try (var factory = config.buildSessionFactory(); var session = factory.openSession()) {
            var transaction = session.beginTransaction();
            var goal = new RecruitmentGoalEntity();
            goal.setRawGoal("博士在读寻找疾病生物学岗位");
            goal.setInterpreterVersion("recruitment-intent-v2");
            goal.setAdditionalConditions(Map.of("intentCard", codec.write(RecruitmentIntentCardTest.fixture()), "intentStatus", "confirmed"));
            session.persist(goal);
            var result = new RecruitmentIntentMatchEntity();
            result.setIntentVersion(goal.getId()); result.setPlatform("boss"); result.setPlatformJobId("job1");
            result.setJdVersion("hash1"); result.setRecommendation("review");
            result.setJobSnapshot("{\"title\":\"疾病生物学\"}"); result.setResultJson("{\"recommendation\":\"review\"}");
            session.persist(result);
            transaction.commit(); session.clear();
            assertThat(codec.read(session.find(RecruitmentGoalEntity.class, goal.getId())
                    .getAdditionalConditions().get("intentCard")).searchTerms()).containsExactly("疾病生物学");
            assertThat(session.find(RecruitmentIntentMatchEntity.class, result.getId()).getIntentVersion()).isEqualTo(goal.getId());
        }
    }
}
