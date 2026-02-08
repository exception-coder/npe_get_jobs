import { IListData } from '../../types/interfaces/i-document-data';
export declare enum QuickListType {
    ORDER_LIST_QUICK_1 = "1.",
    ORDER_LIST_QUICK_2 = "a)",
    ORDER_LIST_QUICK_3 = "a.",
    ORDER_LIST_QUICK_4 = "i.",
    ORDER_LIST_QUICK_5 = "A.",
    ORDER_LIST_QUICK_6 = "I.",
    ORDER_LIST_QUICK_7 = "01.",
    BULLET_LIST = "*"
}
export declare enum PresetListType {
    BULLET_LIST = "BULLET_LIST",
    BULLET_LIST_1 = "BULLET_LIST_1",
    BULLET_LIST_2 = "BULLET_LIST_2",
    BULLET_LIST_3 = "BULLET_LIST_3",
    BULLET_LIST_4 = "BULLET_LIST_4",
    BULLET_LIST_5 = "BULLET_LIST_5",
    /**
     * 1 a i
     */
    ORDER_LIST = "ORDER_LIST",
    /**
     * 1) a) i)
     */
    ORDER_LIST_1 = "ORDER_LIST_1",
    /**
     * 1. 1.1. 1.1.1.
     */
    ORDER_LIST_2 = "ORDER_LIST_2",
    /**
     * A a i
     */
    ORDER_LIST_3 = "ORDER_LIST_3",
    /**
     * A 1 i
     */
    ORDER_LIST_4 = "ORDER_LIST_4",
    /**
     * 01 a i
     */
    ORDER_LIST_5 = "ORDER_LIST_5",
    ORDER_LIST_QUICK_2 = "ORDER_LIST_QUICK_2",
    ORDER_LIST_QUICK_3 = "ORDER_LIST_QUICK_3",
    ORDER_LIST_QUICK_4 = "ORDER_LIST_QUICK_4",
    ORDER_LIST_QUICK_5 = "ORDER_LIST_QUICK_5",
    ORDER_LIST_QUICK_6 = "ORDER_LIST_QUICK_6",
    CHECK_LIST = "CHECK_LIST",
    CHECK_LIST_CHECKED = "CHECK_LIST_CHECKED"
}
export declare const PRESET_LIST_TYPE: Record<string, IListData>;
export declare const QuickListTypeMap: {
    "1.": PresetListType;
    "a)": PresetListType;
    "a.": PresetListType;
    "i.": PresetListType;
    "A.": PresetListType;
    "I.": PresetListType;
    "01.": PresetListType;
    "*": PresetListType;
};
