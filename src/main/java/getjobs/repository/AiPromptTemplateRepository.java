package getjobs.repository;

import getjobs.repository.entity.AiPromptTemplate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AiPromptTemplateRepository extends JpaRepository<AiPromptTemplate, Integer> {
    Optional<AiPromptTemplate> findByName(String name);
}
