package getjobs.modules.ai.service;

import getjobs.modules.ai.config.AiPromptProperties;
import getjobs.repository.AiPromptTemplateRepository;
import getjobs.repository.entity.AiPromptTemplate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Component
@RequiredArgsConstructor
public class PromptTemplateInitializer implements CommandLineRunner {

    private final AiPromptProperties promptProperties;
    private final AiPromptTemplateRepository repository;

    @Override
    public void run(String... args) {
        log.info("Initializing AI prompt templates from properties...");
        Map<String, AiPromptProperties.PromptDefinition> jobPrompts = promptProperties.getJob();

        jobPrompts.forEach((key, definition) -> {
            String name = "job." + key;
            repository.findByName(name).ifPresentOrElse(
                    template -> log.info("Prompt template '{}' already exists, skipping initialization.", name),
                    () -> {
                        log.info("Creating new prompt template: {}", name);
                        AiPromptTemplate newTemplate = new AiPromptTemplate();
                        newTemplate.setName(name);
                        newTemplate.setDescription(definition.getDescription());
                        newTemplate.setTemplate(definition.getTemplate());
                        Map<String, String> placeholders = definition.getPlaceholders().keySet().stream()
                                .collect(Collectors.toMap(p -> p, p -> ""));
                        newTemplate.setPlaceholders(placeholders);
                        repository.save(newTemplate);
                    }
            );
        });
        log.info("AI prompt templates initialization complete.");
    }
}
