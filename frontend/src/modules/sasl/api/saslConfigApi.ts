import { http, httpJson } from '@/api/http';

const BASE_URL = '/api/sasl/config';
const IMPORT_BASE_URL = '/api/sasl';

export interface ExcelFileResponse {
  id: number;
  fileName: string;
  originalFileName: string;
  fileSize: number;
  uploadTime: string;
  uploadUserId?: number;
  uploadUserName?: string;
}

export interface UserResponse {
  id: number;
  username: string;
  nickname?: string;
  email?: string;
  phone?: string;
}

// 部门用户响应类型（按部门分组）
export interface UserInfo {
  id: number;
  username: string;
  displayName?: string;
  email?: string;
  mobile?: string;
}

export interface DepartmentUserResponse {
  deptCode: string;
  users: UserInfo[];
}

export interface FileUserBindingRequest {
  fileId: number;
  userId: number;
}

export interface FileUserBindingResponse {
  id: number;
  fileId: number;
  fileName: string;
  userId: number;
  userName: string;
  bindTime: string;
}

// 用户文档标题绑定关系响应类型
export interface UserDocumentTitleBindingResponse {
  id: number;
  fileName: string;
  userId: number;
  userName: string;
  bindTime: string;
}

// 导入Excel文件的响应类型
export interface SaslImportResponse {
  message: string;
  count: number;
  records: unknown[];
}

// 上传Excel文件（导入到SASL）
export const uploadExcelFile = async (formData: FormData): Promise<SaslImportResponse> => {
  return http<SaslImportResponse>(`${IMPORT_BASE_URL}/import`, {
    method: 'POST',
    body: formData,
  });
};

// 获取用户列表（按部门分组）
export const listUsersByDepartment = async (): Promise<DepartmentUserResponse[]> => {
  return http<DepartmentUserResponse[]>(`${IMPORT_BASE_URL}/users-by-department`);
};

// 删除指定用户的 sasl 部门编码
export const deleteDepartmentUser = async (userId: number): Promise<void> => {
  return httpJson<void>(`${IMPORT_BASE_URL}/users-by-department/${userId}`, {
    method: 'DELETE',
  });
};

// 获取用户列表（兼容旧接口，返回扁平化的用户列表）
export const listUsers = async (): Promise<UserResponse[]> => {
  const departments = await listUsersByDepartment();
  // 将按部门分组的用户数据扁平化，并转换为 UserResponse 格式
  const users: UserResponse[] = [];
  departments.forEach((dept) => {
    dept.users.forEach((user) => {
      users.push({
        id: user.id,
        username: user.username,
        nickname: user.displayName,
        email: user.email,
        phone: user.mobile,
      });
    });
  });
  return users;
};

// 绑定文件和用户
export const bindFileToUser = async (
  request: FileUserBindingRequest,
): Promise<FileUserBindingResponse> => {
  return httpJson<FileUserBindingResponse>(`${BASE_URL}/bind`, {
    method: 'POST',
    body: JSON.stringify(request),
  });
};

// 删除文件绑定
export const deleteFileUserBinding = async (bindingId: number): Promise<void> => {
  return httpJson<void>(`${BASE_URL}/bindings/${bindingId}`, {
    method: 'DELETE',
  });
};

// 获取所有文档标题
export const getDocumentTitles = async (): Promise<string[]> => {
  return http<string[]>(`${IMPORT_BASE_URL}/document-titles`);
};

// 搜索记录响应类型
export interface SaslRecordResponse {
  id: number;
  mrt: string;
  oldContract: string;
  sales: string;
  category: string;
  lastTurnNetworkMonth: string;
  documentTitle: string;
  documentDescription?: string;
  excelFileName?: string;
  callStatus?: string;
  remark?: string;
  lastCallTime?: string;
  nextCallTime?: string;
  createdAt: string;
  updatedAt: string;
}

// 搜索记录接口
export interface SearchRecordsParams {
  mrt?: string;
  callStatus?: string;
  documentTitle?: string;
}

// 搜索记录
export const searchRecords = async (params: SearchRecordsParams): Promise<SaslRecordResponse[]> => {
  const url = new URL(`${IMPORT_BASE_URL}/search`, window.location.origin);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, String(value));
    }
  });
  return http<SaslRecordResponse[]>(url.toString());
};

// 根据文档标题获取所有记录
export const getRecordsByDocumentTitle = async (documentTitle: string): Promise<SaslRecordResponse[]> => {
  const url = new URL(`${BASE_URL}/records/by-document-title`, window.location.origin);
  url.searchParams.set('documentTitle', documentTitle);
  return http<SaslRecordResponse[]>(url.toString());
};

// 获取所有线索记录
export const getAllLeadRecords = async (): Promise<SaslRecordResponse[]> => {
  return http<SaslRecordResponse[]>(`${IMPORT_BASE_URL}/records`);
};

// 分配线索给用户请求类型
export interface AssignLeadRecordsRequest {
  userId: number;
  recordIds: number[];
}

// 分配线索给用户响应类型
export interface AssignLeadRecordsResponse {
  success: boolean;
  message: string;
  assignedCount: number;
}

// 分配线索给用户
export const assignLeadRecordsToUser = async (
  request: AssignLeadRecordsRequest,
): Promise<AssignLeadRecordsResponse> => {
  return httpJson<AssignLeadRecordsResponse>(`${IMPORT_BASE_URL}/lead-records/assign`, {
    method: 'POST',
    body: JSON.stringify(request),
  });
};

// 注册用户请求参数
export interface CreateUserRequest {
  username: string;
  password: string;
  displayName?: string;
  email?: string;
  mobile?: string;
  enabled?: boolean;
  superAdmin?: boolean;
  deptCodes?: string[];
}

// 注册用户响应类型
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

// 注册用户
export const registerUser = async (request: CreateUserRequest): Promise<UserResponse> => {
  const response = await httpJson<ApiResponse<UserResponse>>('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(request),
  });
  
  if (!response.success || !response.data) {
    throw new Error(response.message || '注册用户失败');
  }
  
  return response.data;
};

// 文档标题项类型
export interface DocumentTitleItem {
  title: string;
  selected: boolean;
}

// 用户文档标题响应类型
export interface UserDocumentTitleResponse {
  userId: number;
  documentTitles: DocumentTitleItem[];
}

// 根据用户ID获取所有文档标题（包含选中状态）
export const getUserDocumentTitles = async (userId: number): Promise<DocumentTitleItem[]> => {
  return http<DocumentTitleItem[]>(`${IMPORT_BASE_URL}/user-document-titles/${userId}/all`);
};

// 保存用户文档标题关系请求
export interface UserDocumentTitleRequest {
  userId: number;
  documentTitles: string[];
}

// 保存用户文档标题关系
export const saveUserDocumentTitles = async (
  request: UserDocumentTitleRequest,
): Promise<UserDocumentTitleResponse> => {
  return httpJson<UserDocumentTitleResponse>(`${IMPORT_BASE_URL}/user-document-titles`, {
    method: 'POST',
    body: JSON.stringify(request),
  });
};

// 获取所有用户文档标题绑定关系
export const getAllUserDocumentTitleBindings = async (): Promise<UserDocumentTitleBindingResponse[]> => {
  return http<UserDocumentTitleBindingResponse[]>(`${IMPORT_BASE_URL}/user-document-titles/bindings`);
};

// 更新记录请求类型
export interface UpdateRecordRequest {
  callStatus: string;
  remark?: string;
  nextCallTime?: string;
  documentTitle?: string;
  queryCallStatus?: string;
}

// 更新记录响应类型
export interface UpdateRecordResponse {
  updatedRecord: SaslRecordResponse;
  nextRecord: SaslRecordResponse | null;
}

// 更新记录
export const updateRecord = async (
  id: number,
  request: UpdateRecordRequest,
): Promise<UpdateRecordResponse> => {
  return httpJson<UpdateRecordResponse>(`${IMPORT_BASE_URL}/records/${id}`, {
    method: 'PUT',
    body: JSON.stringify(request),
  });
};

// 套餐方案行数据响应类型
export interface PlanRowResponse {
  id: number;
  label: string;
  values: string[];
  sortOrder?: number;
}

// 套餐方案响应类型
export interface PlanSectionResponse {
  id: number;
  planId: string;
  title: string;
  subtitle: string;
  columns: string[];
  rows: PlanRowResponse[];
  footnote?: string;
  createdAt?: string;
  updatedAt?: string;
}

// 获取所有套餐方案
export const listPlanSections = async (): Promise<PlanSectionResponse[]> => {
  return http<PlanSectionResponse[]>(`${IMPORT_BASE_URL}/plan-sections`);
};

// 根据ID获取单个套餐方案
export const getPlanSectionById = async (id: number): Promise<PlanSectionResponse> => {
  return http<PlanSectionResponse>(`${IMPORT_BASE_URL}/plan-sections/${id}`);
};

// 套餐方案请求类型
export interface PlanSectionRequest {
  planId: string;
  title: string;
  subtitle?: string;
  columns: string[];
  rows: PlanRowRequest[];
  footnote?: string;
}

// 套餐行数据请求类型
export interface PlanRowRequest {
  label: string;
  values: string[];
  sortOrder?: number;
}

// 更新套餐方案
export const updatePlanSection = async (
  id: number,
  request: PlanSectionRequest,
): Promise<PlanSectionResponse> => {
  return httpJson<PlanSectionResponse>(`${IMPORT_BASE_URL}/plan-sections/${id}`, {
    method: 'PUT',
    body: JSON.stringify(request),
  });
};

// 导入记录响应类型
export interface SaslImportRecordResponse {
  id: number;
  excelFileName: string;
  documentTitle: string;
  documentDescription?: string | null;
  documentRemark?: string | null;
  createdAt: string;
  updatedAt?: string | null;
}

// 导入记录分组响应类型
export interface SaslImportRecordGroupResponse {
  documentTitle: string;
  importRecords: SaslImportRecordResponse[];
}

// 获取按文档标题分组的导入记录
export const getImportRecordsGrouped = async (): Promise<SaslImportRecordGroupResponse[]> => {
  return http<SaslImportRecordGroupResponse[]>(`${IMPORT_BASE_URL}/import-records/grouped`);
};

// 根据文档标题删除所有记录
export const deleteRecordsByDocumentTitle = async (documentTitle: string): Promise<void> => {
  // URL编码文档标题，因为可能包含特殊字符
  const encodedTitle = encodeURIComponent(documentTitle);
  return httpJson<void>(`${IMPORT_BASE_URL}/records/by-document-title/${encodedTitle}`, {
    method: 'DELETE',
  });
};

// 根据文档标题导出记录到 Excel
export const exportRecordsByDocumentTitle = async (documentTitle: string): Promise<Blob> => {
  const url = new URL(`${BASE_URL}/records/export`, window.location.origin);
  url.searchParams.set('documentTitle', documentTitle);
  
  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/octet-stream',
    },
  });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: '导出失败' }));
    throw new Error(errorData.message || '导出失败');
  }
  
  return response.blob();
};

// SASL 表单汇总统计记录响应类型
export interface SaslFormStatisticsRecordResponse {
  id: number;
  todayCallCount: number | null;
  monthlyRegisteredCount: number | null;
  pendingFollowUpCount: number | null;
  createdAt: string;
  updatedAt: string;
  trend?: {
    todayCallCountTrend?: number;
    monthlyRegisteredCountTrend?: number;
    pendingFollowUpCountTrend?: number;
  };
}

// 获取当日最新一条汇总统计记录
export const getLatestTodayStatistics = async (): Promise<SaslFormStatisticsRecordResponse | null> => {
  try {
    return await http<SaslFormStatisticsRecordResponse>('/api/sasl/form/statistics/latest-today');
  } catch (error: any) {
    // 如果是 404 错误，返回 null（表示当日暂无汇总统计记录）
    if (error?.status === 404 || error?.response?.status === 404) {
      return null;
    }
    throw error;
  }
};

// 公告响应类型
export interface AnnouncementResponse {
  id: number;
  content: string;
  enabled: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

// 获取所有公告
export const getAllAnnouncements = async (): Promise<AnnouncementResponse[]> => {
  return http<AnnouncementResponse[]>('/api/sasl/announcements');
};

// 更新公告请求类型
export interface AnnouncementUpdateRequest {
  content?: string;
  enabled?: boolean;
  sortOrder?: number;
}

// 更新公告
export const updateAnnouncement = async (
  id: number,
  request: AnnouncementUpdateRequest,
): Promise<AnnouncementResponse> => {
  return httpJson<AnnouncementResponse>(`/api/sasl/announcements/${id}`, {
    method: 'PUT',
    body: JSON.stringify(request),
  });
};

