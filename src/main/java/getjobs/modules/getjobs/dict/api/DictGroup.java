package getjobs.modules.getjobs.dict.api;

import java.util.List;

/**
 *  字典分组（如 payTypeList / experienceList）
 *
 * @param key
 * @param items
 */
public record DictGroup(String key, List<DictItem> items) {}
