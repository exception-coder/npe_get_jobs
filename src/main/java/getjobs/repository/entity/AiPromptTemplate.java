package getjobs.repository.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
@Entity
@Table(name = "ai_prompt_template")
public class AiPromptTemplate extends BaseEntity {

    @Column(unique = true, nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String template;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = JsonMapStringConverter.class)
    private Map<String, String> placeholders;

    private String description;
}
