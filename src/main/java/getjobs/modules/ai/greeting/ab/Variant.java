package getjobs.modules.ai.greeting.ab;

public enum Variant {
    V1("greeting-v1"),
    V2("greeting-v1"); // 先共用一个模板，后续可切换到新模板
    public final String templateId;
    Variant(String id){ this.templateId = id; }
}
