package getjobs.modules.ai.service;

import getjobs.modules.ai.config.AiPromptProperties;
import getjobs.modules.ai.job.dto.PromptTemplateDto;
import getjobs.repository.AiPromptTemplateRepository;
import getjobs.repository.entity.AiPromptTemplate;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AiPromptService {

    private final AiPromptTemplateRepository repository;
    private final AiPromptProperties promptProperties;

    public Optional<AiPromptTemplate> getPromptTemplate(String name) {
        return repository.findByName(name);
    }

    public List<PromptTemplateDto> getAllPromptTemplates() {
        return repository.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public String renderPrompt(String name, Map<String, String> variables) {
        AiPromptTemplate templateEntity = repository.findByName(name)
                .orElseThrow(() -> new IllegalArgumentException("Cannot find prompt template with name: " + name));

        Map<String, String> placeholders = new HashMap<>();
        if (templateEntity.getPlaceholders() != null) {
            placeholders.putAll(templateEntity.getPlaceholders());
        }
        if (variables != null) {
            placeholders.putAll(variables);
        }
        templateEntity.setPlaceholders(placeholders);
        repository.save(templateEntity);

        String template = templateEntity.getTemplate();
        for (Map.Entry<String, String> entry : placeholders.entrySet()) {
            template = template.replace("{" + entry.getKey() + "}", entry.getValue());
        }
        return template;
    }

    public PromptTemplateDto convertToDto(AiPromptTemplate entity) {
        PromptTemplateDto dto = new PromptTemplateDto();
        dto.setName(entity.getName());
        dto.setTemplate(entity.getTemplate());
        dto.setDescription(entity.getDescription());

        String name = entity.getName();
        if (name != null) {
            String[] parts = name.split("\\.", 2);
            if (parts.length == 2) {
                String category = parts[0];
                String key = parts[1];
                if ("job".equals(category)) {
                    AiPromptProperties.PromptDefinition definition = promptProperties.getJob().get(key);
                    if (definition != null) {
                        definition.getPlaceholders().forEach((placeholderKey, value) -> {
                            value.setValue(entity.getPlaceholders().get(placeholderKey));
                        });
                        dto.setPlaceholders(definition.getPlaceholders());
                    }
                }
            }
        }

        return dto;
    }
}
