import { computed, ref } from 'vue';
import type { ExcelFileResponse, UserResponse, FileUserBindingResponse, DocumentTitleItem, PlanSectionResponse, SaslImportRecordGroupResponse, SaslImportRecordResponse, SaslRecordResponse, AnnouncementResponse } from '../api/saslConfigApi';

export const useSaslConfigState = () => {
  const loading = ref(false);
  const uploading = ref(false);
  const binding = ref(false);

  // Excel文件上传
  const uploadFile = ref<File | null>(null);
  const excelFiles = ref<ExcelFileResponse[]>([]);
  
  // 上传表单对话框
  const uploadDialogVisible = ref(false);
  const uploadForm = ref({
    title: '',
    description: '',
    remark: '',
  });

  // 用户列表
  const users = ref<UserResponse[]>([]);

  // 注册用户相关状态
  const registering = ref(false);
  const userForm = ref({
    username: '',
    password: '',
    displayName: '',
    email: '',
    mobile: '',
    enabled: true,
    superAdmin: false,
    deptCodes: ['sasl'],
  });

  // 文件用户绑定
  const fileUserBindings = ref<FileUserBindingResponse[]>([]);
  const selectedFileId = ref<number | null>(null);
  const selectedUserId = ref<number | null>(null);
  
  // 用户文件清单（文档标题列表）
  const userDocumentTitles = ref<DocumentTitleItem[]>([]);
  const loadingUserDocumentTitles = ref(false);

  // 套餐方案相关状态
  const planSections = ref<PlanSectionResponse[]>([]);
  const loadingPlanSections = ref(false);
  const selectedPlanSectionId = ref<number | null>(null);
  const selectedPlanSection = ref<PlanSectionResponse | null>(null);
  const editingPlanSection = ref(false);
  const planSectionEditForm = ref<{
    planId: string;
    title: string;
    subtitle: string;
    columns: string[];
    rows: Array<{ label: string; values: string[]; sortOrder?: number }>;
    footnote: string;
  }>({
    planId: '',
    title: '',
    subtitle: '',
    columns: [],
    rows: [],
    footnote: '',
  });

  // 文档清单相关状态（按文档标题分组）
  const documentGroups = ref<SaslImportRecordGroupResponse[]>([]);
  const loadingDocuments = ref(false);
  const selectedImportRecord = ref<SaslImportRecordResponse | null>(null);
  const selectedDocumentTitle = ref<string | null>(null);
  const documentRecords = ref<SaslRecordResponse[]>([]);

  // 公告相关状态
  const announcements = ref<AnnouncementResponse[]>([]);
  const loadingAnnouncements = ref(false);
  const editingAnnouncement = ref<AnnouncementResponse | null>(null);
  const announcementEditForm = ref({
    content: '',
  });

  // 统计数据
  const heroStats = computed(() => [
    {
      label: '已上傳文件',
      value: excelFiles.value.length.toString(),
      trend: '',
      tone: 'up',
      icon: 'mdi-file-excel',
    },
    {
      label: '用戶數量',
      value: users.value.length.toString(),
      trend: '',
      tone: 'up',
      icon: 'mdi-account-multiple',
    },
    {
      label: '綁定關係',
      value: fileUserBindings.value.length.toString(),
      trend: '',
      tone: 'up',
      icon: 'mdi-link-variant',
    },
  ]);

  // 获取已绑定的文件ID列表
  const boundFileIds = computed(() => new Set(fileUserBindings.value.map((b) => b.fileId)));

  // 获取已绑定的用户ID列表
  const boundUserIds = computed(() => new Set(fileUserBindings.value.map((b) => b.userId)));

  // 获取未绑定的文件列表
  const unboundFiles = computed(() =>
    excelFiles.value.filter((file) => !boundFileIds.value.has(file.id)),
  );

  // 获取未绑定的用户列表
  const unboundUsers = computed(() =>
    users.value.filter((user) => !boundUserIds.value.has(user.id)),
  );

  // 根据文件ID获取绑定信息
  const getBindingByFileId = (fileId: number) => {
    return fileUserBindings.value.find((b) => b.fileId === fileId);
  };

  // 根据用户ID获取绑定信息
  const getBindingByUserId = (userId: number) => {
    return fileUserBindings.value.find((b) => b.userId === userId);
  };

  // 重置上传表单
  const resetUploadForm = () => {
    uploadForm.value = {
      title: '',
      description: '',
      remark: '',
    };
  };

  // 重置用户注册表单
  const resetUserForm = () => {
    userForm.value = {
      username: '',
      password: '',
      displayName: '',
      email: '',
      mobile: '',
      enabled: true,
      superAdmin: false,
      deptCodes: ['sasl'],
    };
  };

  return {
    loading,
    uploading,
    binding,
    uploadFile,
    excelFiles,
    users,
    fileUserBindings,
    selectedFileId,
    selectedUserId,
    heroStats,
    boundFileIds,
    boundUserIds,
    unboundFiles,
    unboundUsers,
    getBindingByFileId,
    getBindingByUserId,
    uploadDialogVisible,
    uploadForm,
    resetUploadForm,
    registering,
    userForm,
    resetUserForm,
    userDocumentTitles,
    loadingUserDocumentTitles,
    planSections,
    loadingPlanSections,
    selectedPlanSectionId,
    selectedPlanSection,
    editingPlanSection,
    planSectionEditForm,
    documentGroups,
    loadingDocuments,
    selectedImportRecord,
    selectedDocumentTitle,
    documentRecords,
    announcements,
    loadingAnnouncements,
    editingAnnouncement,
    announcementEditForm,
  };
};
