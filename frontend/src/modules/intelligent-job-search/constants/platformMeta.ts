import type { PlatformCode } from '../api/platformConfigApi';

type FieldType = 'text' | 'select' | 'switch';

export interface FieldConfig {
  key: string;
  label: string;
  type: FieldType;
  icon?: string;
  required?: boolean;
  multiple?: boolean;
  dictKey?: string;
  maxSelection?: number;
  hint?: string;
  cascade?: boolean;
}

export interface PlatformMeta {
  code: PlatformCode;
  displayName: string;
  backendName: string;
  fields: FieldConfig[];
}

export const PLATFORM_METAS: Record<PlatformCode, PlatformMeta> = {
  boss: {
    code: 'boss',
    displayName: 'BOSS直聘',
    backendName: 'BOSS直聘',
    fields: [
      {
        key: 'keywords',
        label: '搜索关键字',
        type: 'text',
        icon: 'mdi-magnify',
        required: true,
        hint: '用于职位搜索的关键字，可用逗号分隔多个词',
      },
      {
        key: 'industry',
        label: '行业筛选',
        type: 'select',
        icon: 'mdi-factory',
        dictKey: 'industryList',
        multiple: true,
        maxSelection: 3,
        hint: '最多选择 3 个感兴趣的行业',
        cascade: true,
      },
      {
        key: 'cityCode',
        label: '工作城市',
        type: 'select',
        icon: 'mdi-city',
        dictKey: 'cityList',
        multiple: true,
        required: true,
      },
      {
        key: 'experience',
        label: '工作经验',
        type: 'select',
        icon: 'mdi-timeline-clock',
        dictKey: 'experienceList',
        required: true,
      },
      {
        key: 'jobType',
        label: '职位类型',
        type: 'select',
        icon: 'mdi-briefcase-check',
        dictKey: 'jobTypeList',
      },
      {
        key: 'salary',
        label: '薪资范围',
        type: 'select',
        icon: 'mdi-currency-cny',
        dictKey: 'salaryList',
      },
      {
        key: 'degree',
        label: '学历要求',
        type: 'select',
        icon: 'mdi-school',
        dictKey: 'degreeList',
      },
      {
        key: 'scale',
        label: '公司规模',
        type: 'select',
        icon: 'mdi-account-group',
        dictKey: 'scaleList',
      },
      {
        key: 'stage',
        label: '融资阶段',
        type: 'select',
        icon: 'mdi-finance',
        dictKey: 'stageList',
      },
    ],
  },
  zhilian: {
    code: 'zhilian',
    displayName: '智联招聘',
    backendName: '智联招聘',
    fields: [
      {
        key: 'keywords',
        label: '搜索关键字',
        type: 'text',
        icon: 'mdi-magnify',
        required: true,
      },
      {
        key: 'industry',
        label: '行业筛选',
        type: 'select',
        icon: 'mdi-factory',
        dictKey: 'industryList',
        multiple: true,
        cascade: true,
      },
      {
        key: 'cityCode',
        label: '工作城市',
        type: 'select',
        icon: 'mdi-city-variant',
        dictKey: 'cityList',
        multiple: true,
        required: true,
      },
      {
        key: 'experience',
        label: '工作经验',
        type: 'select',
        icon: 'mdi-timeline-clock',
        dictKey: 'experienceList',
        required: true,
      },
      {
        key: 'jobType',
        label: '职位类型',
        type: 'select',
        icon: 'mdi-briefcase',
        dictKey: 'jobTypeList',
        required: true,
      },
      {
        key: 'salary',
        label: '薪资范围',
        type: 'select',
        icon: 'mdi-currency-cny',
        dictKey: 'salaryList',
        required: true,
      },
      {
        key: 'degree',
        label: '学历要求',
        type: 'select',
        icon: 'mdi-school',
        dictKey: 'degreeList',
        required: true,
      },
      {
        key: 'scale',
        label: '公司规模',
        type: 'select',
        icon: 'mdi-account-group',
        dictKey: 'scaleList',
      },
      {
        key: 'companyNature',
        label: '公司性质',
        type: 'select',
        icon: 'mdi-domain',
        dictKey: 'companyNatureList',
      },
    ],
  },
  job51: {
    code: 'job51',
    displayName: '前程无忧',
    backendName: '51job',
    fields: [
      {
        key: 'keywords',
        label: '搜索关键字',
        type: 'text',
        icon: 'mdi-magnify',
        required: true,
      },
      {
        key: 'industry',
        label: '行业筛选',
        type: 'select',
        icon: 'mdi-factory',
        dictKey: 'industryList',
        multiple: true,
        cascade: true,
      },
      {
        key: 'cityCode',
        label: '工作城市',
        type: 'select',
        icon: 'mdi-city',
        dictKey: 'cityList',
        multiple: true,
        required: true,
      },
      {
        key: 'experience',
        label: '工作经验',
        type: 'select',
        icon: 'mdi-timeline-clock',
        dictKey: 'experienceList',
        required: true,
      },
      {
        key: 'jobType',
        label: '职位类型',
        type: 'select',
        icon: 'mdi-briefcase-check',
        dictKey: 'jobTypeList',
        required: true,
      },
      {
        key: 'salary',
        label: '薪资范围',
        type: 'select',
        icon: 'mdi-currency-cny',
        dictKey: 'salaryList',
        required: true,
      },
      {
        key: 'degree',
        label: '学历要求',
        type: 'select',
        icon: 'mdi-school',
        dictKey: 'degreeList',
        required: true,
      },
      {
        key: 'scale',
        label: '公司规模',
        type: 'select',
        icon: 'mdi-account-group',
        dictKey: 'scaleList',
      },
      {
        key: 'companyNature',
        label: '公司性质',
        type: 'select',
        icon: 'mdi-domain',
        dictKey: 'companyNatureList',
      },
      {
        key: 'autoApply',
        label: '自动投递',
        type: 'switch',
        icon: 'mdi-robot',
        hint: '开启后已过滤岗位将自动执行投递',
      },
    ],
  },
  liepin: {
    code: 'liepin',
    displayName: '猎聘',
    backendName: 'LIEPIN',
    fields: [
      {
        key: 'keywords',
        label: '搜索关键字',
        type: 'text',
        icon: 'mdi-magnify',
        required: true,
      },
      {
        key: 'industry',
        label: '行业筛选',
        type: 'select',
        icon: 'mdi-factory',
        dictKey: 'industryList',
        multiple: true,
      },
      {
        key: 'cityCode',
        label: '工作城市',
        type: 'select',
        icon: 'mdi-city',
        dictKey: 'cityList',
        multiple: true,
        required: true,
      },
      {
        key: 'experience',
        label: '工作经验',
        type: 'select',
        icon: 'mdi-timeline-clock',
        dictKey: 'experienceList',
      },
      {
        key: 'jobType',
        label: '职位类型',
        type: 'select',
        icon: 'mdi-briefcase',
        dictKey: 'jobTypeList',
      },
      {
        key: 'salary',
        label: '薪资范围',
        type: 'select',
        icon: 'mdi-currency-cny',
        dictKey: 'salaryList',
      },
      {
        key: 'degree',
        label: '学历要求',
        type: 'select',
        icon: 'mdi-school',
        dictKey: 'degreeList',
      },
      {
        key: 'scale',
        label: '公司规模',
        type: 'select',
        icon: 'mdi-account-group',
        dictKey: 'scaleList',
      },
      {
        key: 'companyNature',
        label: '公司性质',
        type: 'select',
        icon: 'mdi-domain',
        dictKey: 'companyNatureList',
      },
      {
        key: 'recruiterActivity',
        label: 'HR 活跃度',
        type: 'select',
        icon: 'mdi-account-clock',
        dictKey: 'recruiterActivityList',
      },
    ],
  },
};

