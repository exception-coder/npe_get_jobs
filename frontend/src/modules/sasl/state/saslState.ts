import { computed, reactive, ref } from 'vue';
import { getDocumentTitles, getLatestTodayStatistics, listPlanSections, type PlanSectionResponse, type SaslRecordResponse } from '../api/saslConfigApi';

export type FormModel = {
  oldContract: string;
  mrtNumber: string;
  lastTurnNetworkMonth: string;
  category: string;
  sales: string;
  lastCallTime: string;
  callStatus: string;
  nextCallTime: string;
  remark: string;
};

export type PlanSection = {
  id: string;
  title: string;
  subtitle: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
  footnote?: string;
};

const padNumber = (value: number) => value.toString().padStart(2, '0');

export const generateRandomLastCallTime = () => {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 7) + 1;
  now.setDate(now.getDate() - daysAgo);
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  return `${now.getFullYear()}-${padNumber(now.getMonth() + 1)}-${padNumber(now.getDate())} ${padNumber(
    hours,
  )}:${padNumber(minutes)}`;
};

// 生成默认的下次致电时间（当前时间+2小时）
export const generateDefaultNextCallTime = () => {
  const now = new Date();
  now.setHours(now.getHours() + 2);
  return `${now.getFullYear()}-${padNumber(now.getMonth() + 1)}-${padNumber(now.getDate())} ${padNumber(
    now.getHours(),
  )}:${padNumber(now.getMinutes())}`;
};

export const useSaslState = () => {
  const loading = ref(false);
  const submitting = ref(false);
  const searchingMrt = ref(false);
  const formRef = ref();

  const mrtSearch = ref('');
  const searchCallStatus = ref<string | null>(null);
  const searchDataSource = ref<string | null>(null);
  
  // 搜索结果
  const searchResults = ref<SaslRecordResponse[]>([]);
  const selectedRecord = ref<SaslRecordResponse | null>(null);

  const telecomTags = ['5G Premium', '數據王+', '企業專線'];
  const selectedTag = ref(telecomTags[0]);

  const form = reactive<FormModel>({
    oldContract: '',
    mrtNumber: '',
    lastTurnNetworkMonth: '',
    category: '',
    sales: '',
    lastCallTime: '',
    callStatus: '',
    nextCallTime: '',
    remark: '',
  });

  const callStatusOptions = ['NA', '拒絕', '考慮', '登記'];
  const dataSourceOptions = ref<string[]>([]);
  const loadingDocumentTitles = ref(false);
  
  const loadDocumentTitles = async () => {
    if (loadingDocumentTitles.value) {
      return;
    }
    loadingDocumentTitles.value = true;
    try {
      const titles = await getDocumentTitles();
      dataSourceOptions.value = titles;
    } catch (error) {
      console.error('获取文档标题失败', error);
      // 如果加载失败，保持为空数组，或者可以设置默认值
    } finally {
      loadingDocumentTitles.value = false;
    }
  };

  // 套餐方案数据
  const planComparisonSections = ref<PlanSection[]>([]);
  const loadingPlanSections = ref(false);
  const activePlanTab = ref('');

  // 将后端响应转换为前端格式
  const convertPlanSection = (response: PlanSectionResponse): PlanSection => {
    return {
      id: response.planId || String(response.id),
      title: response.title,
      subtitle: response.subtitle,
      columns: response.columns || [],
      rows: (response.rows || []).map(row => ({
        label: row.label,
        values: row.values || [],
      })),
      footnote: response.footnote,
    };
  };

  // 加载套餐方案数据
  const loadPlanSections = async () => {
    if (loadingPlanSections.value) {
      return;
    }
    loadingPlanSections.value = true;
    try {
      const sections = await listPlanSections();
      planComparisonSections.value = sections.map(convertPlanSection);
      // 如果加载成功且有数据，设置默认选中的 tab
      if (planComparisonSections.value.length > 0 && !activePlanTab.value) {
        activePlanTab.value = planComparisonSections.value[0].id;
      }
    } catch (error) {
      console.error('获取套餐方案失败', error);
      // 如果加载失败，保持为空数组
      planComparisonSections.value = [];
    } finally {
      loadingPlanSections.value = false;
    }
  };

  // 统计数据
  type HeroStat = {
    label: string;
    value: string;
    trend: string;
    tone: 'up' | 'down';
    icon: string;
  };

  const heroStats = ref<HeroStat[]>([
    { label: '當日致電數', value: '0', trend: '', tone: 'up', icon: 'mdi-account-multiple-check' },
    { label: '本月登記數', value: '0', trend: '', tone: 'up', icon: 'mdi-headset' },
    { label: '待跟進客戶數', value: '0', trend: '', tone: 'down', icon: 'mdi-progress-clock' },
  ]);

  const loadingHeroStats = ref(false);

  // 加载统计数据
  const loadHeroStats = async () => {
    if (loadingHeroStats.value) {
      return;
    }
    loadingHeroStats.value = true;
    try {
      const statistics = await getLatestTodayStatistics();
      if (statistics) {
        // 处理趋势数据，保留小数点后两位并添加%号
        const formatTrend = (trendValue: number | undefined): string => {
          if (trendValue === undefined || trendValue === null) {
            return '';
          }
          return `${Number(trendValue).toFixed(2)}%`;
        };

        // 根据趋势值判断 tone：正数为 up，负数为 down，0 或 undefined 默认为 up
        const getToneFromTrend = (trendValue: number | undefined): 'up' | 'down' => {
          if (trendValue === undefined || trendValue === null) {
            return 'up'; // 默认值
          }
          return trendValue >= 0 ? 'up' : 'down';
        };

        heroStats.value = [
          {
            label: '當日致電數',
            value: (statistics.todayCallCount ?? 0).toString(),
            trend: formatTrend(statistics.trend?.todayCallCountTrend),
            tone: getToneFromTrend(statistics.trend?.todayCallCountTrend),
            icon: 'mdi-headset',
          },
          {
            label: '本月登記數',
            value: (statistics.monthlyRegisteredCount ?? 0).toString(),
            trend: formatTrend(statistics.trend?.monthlyRegisteredCountTrend),
            tone: getToneFromTrend(statistics.trend?.monthlyRegisteredCountTrend),
            icon: 'mdi-account-multiple-check',
          },
          {
            label: '待跟進客戶數',
            value: (statistics.pendingFollowUpCount ?? 0).toString(),
            trend: formatTrend(statistics.trend?.pendingFollowUpCountTrend),
            tone: getToneFromTrend(statistics.trend?.pendingFollowUpCountTrend),
            icon: 'mdi-progress-clock',
          },
        ];
      } else {
        // 如果当日没有统计记录，重置为默认值
        heroStats.value = [
          { label: '當日致電數', value: '0', trend: '', tone: 'up', icon: 'mdi-headset' },
          { label: '本月登記數', value: '0', trend: '', tone: 'up', icon: 'mdi-account-multiple-check' },
          { label: '待跟進客戶數', value: '0', trend: '', tone: 'down', icon: 'mdi-progress-clock' },
        ];
      }
    } catch (error) {
      console.error('获取统计数据失败', error);
      // 如果加载失败，保持当前值不变
    } finally {
      loadingHeroStats.value = false;
    }
  };

  const rules = {
    required: (value: string) => value.trim().length > 0 || '此欄位為必填',
    mrtNumber: (value: string) => /^\d{8,11}$/.test(value) || '請輸入 8-11 位數字',
    turnMonth: (value: string) => /^\d{6}$/.test(value) || '請輸入 6 位年月，例如 202011',
    nextCallTime: (value: string) => {
      if (!value || value.trim().length === 0) {
        return true; // 可选字段
      }
      const selectedTime = new Date(value);
      const now = new Date();
      if (isNaN(selectedTime.getTime())) {
        return '請選擇有效的日期時間';
      }
      if (selectedTime <= now) {
        return '下次致電時間必須大於當前時間';
      }
      return true;
    },
  };

  const isFormFilled = computed(() =>
    Object.values(form).some((value) => (typeof value === 'string' ? value.trim().length > 0 : false)),
  );

  const previewItems = computed(() => [
    { label: 'MRT 號碼', value: form.mrtNumber, icon: 'mdi-cellphone' },
    { label: '類別', value: form.category, icon: 'mdi-tag' },
    {
      label: '最後轉網月份',
      value: form.lastTurnNetworkMonth,
      icon: 'mdi-calendar-month',
    },
    { label: '上次致電時間', value: form.lastCallTime, icon: 'mdi-clock-outline' },
    { label: '舊合約', value: form.oldContract, icon: 'mdi-calendar' },
    { label: '銷售員', value: form.sales, icon: 'mdi-account-tie' },
    { label: '致電狀態', value: form.callStatus, icon: 'mdi-phone' },
    { label: '下次致電時間', value: form.nextCallTime, icon: 'mdi-clock-time-four-outline' },
    { label: '備註', value: form.remark, icon: 'mdi-note-text-outline' },
  ]);

  return {
    loading,
    submitting,
    searchingMrt,
    formRef,
    mrtSearch,
    searchCallStatus,
    searchDataSource,
    searchResults,
    selectedRecord,
    telecomTags,
    selectedTag,
    form,
    callStatusOptions,
    dataSourceOptions,
    loadingDocumentTitles,
    loadDocumentTitles,
    heroStats,
    loadingHeroStats,
    loadHeroStats,
    rules,
    isFormFilled,
    previewItems,
    planComparisonSections,
    loadingPlanSections,
    loadPlanSections,
    activePlanTab,
  };
};


