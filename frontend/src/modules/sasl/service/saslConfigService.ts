import type { useSnackbarStore } from '@/stores/snackbar';
import type { useSaslConfigState } from '../state/saslConfigState';
import {
  uploadExcelFile,
  listUsers,
  bindFileToUser,
  deleteFileUserBinding,
  registerUser,
  getUserDocumentTitles,
  saveUserDocumentTitles,
  getAllUserDocumentTitleBindings,
  listPlanSections,
  getPlanSectionById,
  updatePlanSection,
  getImportRecordsGrouped,
  searchRecords,
  deleteRecordsByDocumentTitle,
  deleteDepartmentUser,
  getAllAnnouncements,
  updateAnnouncement,
  type CreateUserRequest,
  type FileUserBindingResponse,
  type PlanSectionRequest,
  type SaslRecordResponse,
  type SaslImportRecordResponse,
  type AnnouncementUpdateRequest,
  type AnnouncementResponse,
} from '../api/saslConfigApi';

type SaslConfigState = ReturnType<typeof useSaslConfigState>;
type SnackbarStore = ReturnType<typeof useSnackbarStore>;

export const useSaslConfigService = (state: SaslConfigState, snackbar: SnackbarStore) => {
  // 验证文件名（只能包含数字、字母、中文，不能有特殊符号）
  const validateFileName = (fileName: string): boolean => {
    // 移除文件扩展名进行验证
    const nameWithoutExt = fileName.replace(/\.[^/.]+$/, '');
    // 只允许数字、字母（大小写）、中文字符，不允许特殊符号
    // A-Za-z 匹配字母，0-9 匹配数字，\u4e00-\u9fa5 匹配中文字符
    const validPattern = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
    return validPattern.test(nameWithoutExt);
  };

  // 验证用户名 - 只能是数字和字母，长度3-30位
  const validateUsername = (username: string): string | null => {
    if (!username) {
      return '用戶名為必填項';
    }
    
    // 长度检查：3-30位
    if (username.length < 3) {
      return '用戶名長度至少為3位';
    }
    if (username.length > 30) {
      return '用戶名長度不能超過30位';
    }
    
    // 只能包含数字和字母
    if (!/^[A-Za-z0-9]+$/.test(username)) {
      return '用戶名只能包含數字和字母';
    }
    
    return null; // 验证通过
  };

  // 验证密码强度 - 采用主流安全最佳实践
  const validatePassword = (password: string, username?: string): string | null => {
    if (!password) {
      return '密碼為必填項';
    }
    
    // 长度检查：8-32位
    if (password.length < 8) {
      return '密碼長度至少為8位';
    }
    if (password.length > 32) {
      return '密碼長度不能超過32位';
    }
    
    // 必须包含大写字母
    if (!/[A-Z]/.test(password)) {
      return '密碼必須包含至少一個大寫字母';
    }
    
    // 必须包含小写字母
    if (!/[a-z]/.test(password)) {
      return '密碼必須包含至少一個小寫字母';
    }
    
    // 必须包含数字
    if (!/[0-9]/.test(password)) {
      return '密碼必須包含至少一個數字';
    }
    
    // 必须包含特殊字符
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      return '密碼必須包含至少一個特殊字符（如 !@#$%^&* 等）';
    }
    
    // 不能与用户名相同
    if (username && password.toLowerCase() === username.toLowerCase()) {
      return '密碼不能與用戶名相同';
    }
    
    return null; // 验证通过
  };

  // 加载用户列表
  const loadUsers = async () => {
    state.loading.value = true;
    try {
      const users = await listUsers();
      state.users.value = users;
    } catch (error) {
      console.error('加载用户列表失败', error);
      snackbar.show({ message: '加载用户列表失败，请稍后重试', color: 'error' });
    } finally {
      state.loading.value = false;
    }
  };

  // 加载绑定列表（直接通过接口获取所有绑定关系）
  const loadFileUserBindings = async () => {
    state.loading.value = true;
    try {
      // 直接调用接口获取所有绑定关系
      const bindings = await getAllUserDocumentTitleBindings();
      
      // 转换为 FileUserBindingResponse 格式（兼容现有代码）
      state.fileUserBindings.value = bindings.map((binding) => ({
        id: binding.id,
        fileId: 0, // 文档标题不直接对应文件ID
        fileName: binding.fileName,
        userId: binding.userId,
        userName: binding.userName,
        bindTime: binding.bindTime,
      }));
    } catch (error) {
      console.error('加载绑定列表失败', error);
      snackbar.show({ message: '加载绑定列表失败，请稍后重试', color: 'error' });
    } finally {
      state.loading.value = false;
    }
  };

  // 初始化加载所有数据
  const loadAllData = async () => {
    state.loading.value = true;
    try {
      await Promise.all([loadUsers(), loadFileUserBindings()]);
    } finally {
      state.loading.value = false;
    }
  };

  // 验证并打开上传对话框
  const validateAndOpenUploadDialog = () => {
    if (!state.uploadFile.value) {
      snackbar.show({ message: '请选择要上传的Excel文件', color: 'warning' });
      return false;
    }

    // 验证文件类型
    const fileName = state.uploadFile.value.name.toLowerCase();
    if (!fileName.endsWith('.xls') && !fileName.endsWith('.xlsx')) {
      snackbar.show({ message: '请上传Excel文件（.xls 或 .xlsx）', color: 'warning' });
      return false;
    }

    // 验证文件名（不包含扩展名）
    const originalFileName = state.uploadFile.value.name;
    if (!validateFileName(originalFileName)) {
      snackbar.show({
        message: '文件名只能包含数字、字母和中文字符，不能包含特殊符号',
        color: 'warning',
      });
      return false;
    }

    // 打开对话框
    state.uploadDialogVisible.value = true;
    return true;
  };

  // 上传Excel文件
  const handleUploadExcel = async () => {
    if (!state.uploadFile.value) {
      snackbar.show({ message: '请选择要上传的Excel文件', color: 'warning' });
      return;
    }

    // 验证文档标题（必填）
    const documentTitle = state.uploadForm.value.title.trim();
    if (!documentTitle) {
      snackbar.show({ message: '请输入文档标题', color: 'warning' });
      return;
    }

    state.uploading.value = true;
    try {
      const formData = new FormData();
      formData.append('file', state.uploadFile.value);
      
      // 添加必填字段：文档标题
      formData.append('documentTitle', documentTitle);
      
      // 添加可选字段
      if (state.uploadForm.value.description.trim()) {
        formData.append('documentDescription', state.uploadForm.value.description.trim());
      }
      if (state.uploadForm.value.remark.trim()) {
        formData.append('remark', state.uploadForm.value.remark.trim());
      }

      const response = await uploadExcelFile(formData);
      snackbar.show({ 
        message: `Excel文件导入成功，共导入 ${response.count} 条记录`, 
        color: 'success' 
      });
      
      // 关闭对话框并重置表单
      state.uploadDialogVisible.value = false;
      state.uploadFile.value = null;
      state.resetUploadForm();
      
      // 注意：这里不再调用 loadExcelFiles()，因为这是导入SASL记录，不是上传配置文件
      // 如果需要刷新其他数据，可以在这里添加
    } catch (error: any) {
      console.error('上传Excel文件失败', error);
      // 尝试从错误响应中获取错误消息
      let errorMessage = '上传失败，请稍后重试';
      if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
        errorMessage = String(error.payload.message);
      }
      snackbar.show({ message: errorMessage, color: 'error' });
    } finally {
      state.uploading.value = false;
    }
  };

  // 关闭上传对话框
  const closeUploadDialog = () => {
    state.uploadDialogVisible.value = false;
    state.resetUploadForm();
  };

  // 绑定文件和用户
  const handleBindFileToUser = async () => {
    if (!state.selectedFileId.value) {
      snackbar.show({ message: '请选择要绑定的文件', color: 'warning' });
      return;
    }

    if (!state.selectedUserId.value) {
      snackbar.show({ message: '请选择要绑定的用户', color: 'warning' });
      return;
    }

    // 检查是否已经绑定
    const existingBinding = state.fileUserBindings.value.find(
      (b) => b.fileId === state.selectedFileId.value && b.userId === state.selectedUserId.value,
    );

    if (existingBinding) {
      snackbar.show({ message: '该文件和用户已经绑定', color: 'warning' });
      return;
    }

    state.binding.value = true;
    try {
      await bindFileToUser({
        fileId: state.selectedFileId.value,
        userId: state.selectedUserId.value,
      });
      snackbar.show({ message: '绑定成功', color: 'success' });
      state.selectedFileId.value = null;
      state.selectedUserId.value = null;
      await loadFileUserBindings();
    } catch (error) {
      console.error('绑定失败', error);
      snackbar.show({ message: '绑定失败，请稍后重试', color: 'error' });
    } finally {
      state.binding.value = false;
    }
  };

  // 删除绑定
  const handleDeleteBinding = async (bindingId: number) => {
    try {
      await deleteFileUserBinding(bindingId);
      snackbar.show({ message: '删除绑定成功', color: 'success' });
      await loadFileUserBindings();
    } catch (error) {
      console.error('删除绑定失败', error);
      snackbar.show({ message: '删除绑定失败，请稍后重试', color: 'error' });
    }
  };

  // 注册用户
  const handleRegisterUser = async () => {
    // 验证用户名
    const username = state.userForm.value.username.trim();
    const usernameError = validateUsername(username);
    if (usernameError) {
      snackbar.show({ message: usernameError, color: 'warning' });
      return;
    }

    const password = state.userForm.value.password.trim();
    if (!password) {
      snackbar.show({ message: '請輸入密碼', color: 'warning' });
      return;
    }

    // 使用统一的密码验证函数
    const passwordError = validatePassword(password, username);
    if (passwordError) {
      snackbar.show({ message: passwordError, color: 'warning' });
      return;
    }

    state.registering.value = true;
    try {
      const request: CreateUserRequest = {
        username,
        password,
      };

      // 添加可选字段
      if (state.userForm.value.displayName.trim()) {
        request.displayName = state.userForm.value.displayName.trim();
      }
      if (state.userForm.value.email.trim()) {
        request.email = state.userForm.value.email.trim();
      }
      if (state.userForm.value.mobile.trim()) {
        request.mobile = state.userForm.value.mobile.trim();
      }
      // 默认启用且为非管理员
      request.enabled = true;
      request.superAdmin = false;
      // 添加部门编码列表（默认包含 'sasl'）
      request.deptCodes = state.userForm.value.deptCodes || ['sasl'];

      await registerUser(request);
      snackbar.show({ message: '用户创建成功', color: 'success' });
      
      // 重置表单
      state.resetUserForm();
      
      // 刷新用户列表
      await loadUsers();
    } catch (error: any) {
      console.error('注册用户失败', error);
      let errorMessage = '注册用户失败，请稍后重试';
      if (error?.message) {
        errorMessage = error.message;
      } else if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
        errorMessage = String(error.payload.message);
      }
      snackbar.show({ message: errorMessage, color: 'error' });
    } finally {
      state.registering.value = false;
    }
  };

  // 加载用户文件清单（文档标题列表）
  const loadUserDocumentTitles = async (userId: number) => {
    if (!userId) {
      state.userDocumentTitles.value = [];
      return;
    }

    state.loadingUserDocumentTitles.value = true;
    try {
      const titles = await getUserDocumentTitles(userId);
      state.userDocumentTitles.value = titles;
    } catch (error) {
      console.error('加载用户文件清单失败', error);
      snackbar.show({ message: '加载用户文件清单失败，请稍后重试', color: 'error' });
      state.userDocumentTitles.value = [];
    } finally {
      state.loadingUserDocumentTitles.value = false;
    }
  };

  // 绑定文档标题到用户（多选）
  const handleBindDocumentTitlesToUser = async (
    selectedFileIds: number[],
    availableFiles: Array<{ id: number; documentTitle: string }>,
  ) => {
    if (!state.selectedUserId.value) {
      snackbar.show({ message: '请选择要绑定的用户', color: 'warning' });
      return;
    }

    if (selectedFileIds.length === 0) {
      snackbar.show({ message: '请选择要绑定的文档标题', color: 'warning' });
      return;
    }

    // 从选中的文件ID中提取文档标题
    const documentTitles = selectedFileIds
      .map((fileId) => {
        const file = availableFiles.find((f) => f.id === fileId);
        return file?.documentTitle;
      })
      .filter((title): title is string => !!title);

    if (documentTitles.length === 0) {
      snackbar.show({ message: '请至少选择一个文档标题', color: 'warning' });
      return;
    }

    state.binding.value = true;
    try {
      await saveUserDocumentTitles({
        userId: state.selectedUserId.value,
        documentTitles,
      });
      
      // 计算绑定和解绑的数量
      const currentBoundTitles = state.userDocumentTitles.value
        .filter((item) => item.selected)
        .map((item) => item.title);
      const newBoundTitles = new Set(documentTitles);
      const boundCount = documentTitles.filter((title) => !currentBoundTitles.includes(title)).length;
      const unboundCount = currentBoundTitles.filter((title) => !newBoundTitles.has(title)).length;
      
      let message = '';
      if (boundCount > 0 && unboundCount > 0) {
        message = `成功绑定 ${boundCount} 个，解绑 ${unboundCount} 个文档标题`;
      } else if (boundCount > 0) {
        message = `成功绑定 ${boundCount} 个文档标题`;
      } else if (unboundCount > 0) {
        message = `成功解绑 ${unboundCount} 个文档标题`;
      } else {
        message = `已更新 ${documentTitles.length} 个文档标题绑定关系`;
      }
      snackbar.show({ message, color: 'success' });
      
      // 重新加载用户文档标题列表
      await loadUserDocumentTitles(state.selectedUserId.value);
      
      // 重新加载绑定列表
      await loadFileUserBindings();
    } catch (error: any) {
      console.error('绑定失败', error);
      let errorMessage = '绑定失败，请稍后重试';
      if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
        errorMessage = String(error.payload.message);
      }
      snackbar.show({ message: errorMessage, color: 'error' });
    } finally {
      state.binding.value = false;
    }
  };

  // 加载所有套餐方案
  const loadPlanSections = async () => {
    state.loadingPlanSections.value = true;
    try {
      const sections = await listPlanSections();
      state.planSections.value = sections;
    } catch (error) {
      console.error('加载套餐方案失败', error);
      snackbar.show({ message: '加载套餐方案失败，请稍后重试', color: 'error' });
      state.planSections.value = [];
    } finally {
      state.loadingPlanSections.value = false;
    }
  };

  // 加载单个套餐方案详情
  const loadPlanSectionById = async (id: number) => {
    state.loadingPlanSections.value = true;
    try {
      const section = await getPlanSectionById(id);
      state.selectedPlanSection.value = section;
      return section;
    } catch (error: any) {
      console.error('加载套餐方案详情失败', error);
      let errorMessage = '加载套餐方案详情失败，请稍后重试';
      if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
        errorMessage = String(error.payload.message);
      }
      snackbar.show({ message: errorMessage, color: 'error' });
      return null;
    } finally {
      state.loadingPlanSections.value = false;
    }
  };

  // 打开编辑套餐对话框
  const openEditPlanSectionDialog = async (id: number) => {
    state.selectedPlanSectionId.value = id;
    const section = await loadPlanSectionById(id);
    if (section) {
      // 填充编辑表单
      state.planSectionEditForm.value = {
        planId: section.planId,
        title: section.title,
        subtitle: section.subtitle || '',
        columns: [...section.columns],
        rows: section.rows.map((row) => ({
          label: row.label,
          values: [...row.values],
          sortOrder: row.sortOrder,
        })),
        footnote: section.footnote || '',
      };
      state.editingPlanSection.value = true;
    }
  };

  // 关闭编辑套餐对话框
  const closeEditPlanSectionDialog = () => {
    state.editingPlanSection.value = false;
    state.selectedPlanSectionId.value = null;
    state.selectedPlanSection.value = null;
    state.planSectionEditForm.value = {
      planId: '',
      title: '',
      subtitle: '',
      columns: [],
      rows: [],
      footnote: '',
    };
  };

  // 更新套餐方案
  const handleUpdatePlanSection = async () => {
    if (!state.selectedPlanSectionId.value) {
      snackbar.show({ message: '请选择要更新的套餐方案', color: 'warning' });
      return;
    }

    const form = state.planSectionEditForm.value;
    if (!form.planId.trim() || !form.title.trim()) {
      snackbar.show({ message: '套餐ID和标题为必填项', color: 'warning' });
      return;
    }

    if (form.columns.length === 0) {
      snackbar.show({ message: '请至少添加一列', color: 'warning' });
      return;
    }

    if (form.rows.length === 0) {
      snackbar.show({ message: '请至少添加一行数据', color: 'warning' });
      return;
    }

    // 验证所有行的values数量必须等于columns数量
    const columnsCount = form.columns.length;
    for (const row of form.rows) {
      if (row.values.length !== columnsCount) {
        snackbar.show({ message: `行"${row.label}"的值数量必须等于列数量(${columnsCount})`, color: 'warning' });
        return;
      }
    }

    state.loadingPlanSections.value = true;
    try {
      const request: PlanSectionRequest = {
        planId: form.planId.trim(),
        title: form.title.trim(),
        subtitle: form.subtitle.trim() || undefined,
        columns: form.columns.map((col) => col.trim()).filter((col) => col),
        rows: form.rows.map((row, index) => ({
          label: row.label.trim(),
          values: row.values.map((val) => val.trim()),
          sortOrder: row.sortOrder ?? index,
        })),
        footnote: form.footnote.trim() || undefined,
      };

      await updatePlanSection(state.selectedPlanSectionId.value, request);
      snackbar.show({ message: '套餐方案更新成功', color: 'success' });
      
      // 关闭对话框
      closeEditPlanSectionDialog();
      
      // 重新加载套餐方案列表
      await loadPlanSections();
    } catch (error: any) {
      console.error('更新套餐方案失败', error);
      let errorMessage = '更新套餐方案失败，请稍后重试';
      if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
        errorMessage = String(error.payload.message);
      }
      snackbar.show({ message: errorMessage, color: 'error' });
    } finally {
      state.loadingPlanSections.value = false;
    }
  };

  // 加载文档清单列表（按文档标题分组）
  const loadDocuments = async () => {
    state.loadingDocuments.value = true;
    try {
      const groups = await getImportRecordsGrouped();
      state.documentGroups.value = groups;
    } catch (error) {
      console.error('加载文档清单失败', error);
      snackbar.show({ message: '加载文档清单失败，请稍后重试', color: 'error' });
      state.documentGroups.value = [];
    } finally {
      state.loadingDocuments.value = false;
    }
  };

  // 加载文档数据（点击文档标题时调用，根据文档标题查询记录）
  const loadDocumentData = async (documentTitle: string, importRecords: SaslImportRecordResponse[]) => {
    if (!documentTitle || !documentTitle.trim()) {
      snackbar.show({ message: '文档标题不能为空', color: 'warning' });
      return;
    }

    state.loadingDocuments.value = true;
    try {
      // 根据文档标题查询记录
      const records = await searchRecords({
        documentTitle: documentTitle.trim(),
      });
      // 使用第一个导入记录作为选中记录（如果有的话）
      state.selectedImportRecord.value = importRecords.length > 0 ? importRecords[0] : null;
      state.selectedDocumentTitle.value = documentTitle.trim();
      state.documentRecords.value = records;
      snackbar.show({ message: '文档数据加载成功', color: 'success' });
    } catch (error: any) {
      console.error('加载文档数据失败', error);
      let errorMessage = '加载文档数据失败，请稍后重试';
      if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
        errorMessage = String(error.payload.message);
      }
      snackbar.show({ message: errorMessage, color: 'error' });
      state.selectedImportRecord.value = null;
      state.selectedDocumentTitle.value = null;
      state.documentRecords.value = [];
    } finally {
      state.loadingDocuments.value = false;
    }
  };

  // 根据文档标题删除所有记录
  const handleDeleteDocument = async (documentTitle: string) => {
    if (!documentTitle || !documentTitle.trim()) {
      snackbar.show({ message: '文档标题不能为空', color: 'warning' });
      return;
    }

    state.loadingDocuments.value = true;
    try {
      await deleteRecordsByDocumentTitle(documentTitle.trim());
      snackbar.show({ message: `已成功删除文档标题 "${documentTitle.trim()}" 的所有记录`, color: 'success' });
      // 重新加载文档列表
      await loadDocuments();
      // 如果删除的是当前选中的文档，清空选中状态
      if (state.selectedDocumentTitle.value === documentTitle.trim()) {
        state.selectedImportRecord.value = null;
        state.selectedDocumentTitle.value = null;
        state.documentRecords.value = [];
      }
    } catch (error: any) {
      console.error('删除记录失败', error);
      let errorMessage = '删除记录失败，请稍后重试';
      if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
        errorMessage = String(error.payload.message);
      }
      snackbar.show({ message: errorMessage, color: 'error' });
    } finally {
      state.loadingDocuments.value = false;
    }
  };

  // 删除指定用户的 sasl 部门编码
  const handleDeleteDepartmentUser = async (userId: number) => {
    if (!userId) {
      snackbar.show({ message: '请选择要删除的用户', color: 'warning' });
      return;
    }

    state.loading.value = true;
    try {
      await deleteDepartmentUser(userId);
      snackbar.show({ message: '已成功删除用户的 sasl 部门编码', color: 'success' });
      // 重新加载用户列表
      await loadUsers();
      // 如果删除的是当前选中的用户，清空选中状态
      if (state.selectedUserId.value === userId) {
        state.selectedUserId.value = null;
        state.userDocumentTitles.value = [];
      }
    } catch (error: any) {
      console.error('删除用户部门编码失败', error);
      let errorMessage = '删除用户部门编码失败，请稍后重试';
      if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
        errorMessage = String(error.payload.message);
      }
      snackbar.show({ message: errorMessage, color: 'error' });
    } finally {
      state.loading.value = false;
    }
  };

  // 加载所有公告
  const loadAnnouncements = async () => {
    state.loadingAnnouncements.value = true;
    try {
      const announcements = await getAllAnnouncements();
      state.announcements.value = announcements;
    } catch (error) {
      console.error('加载公告列表失败', error);
      snackbar.show({ message: '加载公告列表失败，请稍后重试', color: 'error' });
      state.announcements.value = [];
    } finally {
      state.loadingAnnouncements.value = false;
    }
  };

  // 打开编辑公告对话框
  const openEditAnnouncementDialog = (announcement: AnnouncementResponse) => {
    state.editingAnnouncement.value = announcement;
    state.announcementEditForm.value = {
      content: announcement.content || '',
    };
  };

  // 关闭编辑公告对话框
  const closeEditAnnouncementDialog = () => {
    state.editingAnnouncement.value = null;
    state.announcementEditForm.value = {
      content: '',
    };
  };

  // 更新公告内容
  const handleUpdateAnnouncement = async () => {
    if (!state.editingAnnouncement.value) {
      snackbar.show({ message: '请选择要更新的公告', color: 'warning' });
      return;
    }

    const content = state.announcementEditForm.value.content.trim();
    if (!content) {
      snackbar.show({ message: '公告内容不能为空', color: 'warning' });
      return;
    }

    state.loadingAnnouncements.value = true;
    try {
      const request: AnnouncementUpdateRequest = {
        content,
      };

      await updateAnnouncement(state.editingAnnouncement.value.id, request);
      snackbar.show({ message: '公告更新成功', color: 'success' });
      
      // 关闭对话框
      closeEditAnnouncementDialog();
      
      // 重新加载公告列表
      await loadAnnouncements();
    } catch (error: any) {
      console.error('更新公告失败', error);
      let errorMessage = '更新公告失败，请稍后重试';
      if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
        errorMessage = String(error.payload.message);
      }
      snackbar.show({ message: errorMessage, color: 'error' });
    } finally {
      state.loadingAnnouncements.value = false;
    }
  };

  return {
    loadUsers,
    loadFileUserBindings,
    loadAllData,
    validateAndOpenUploadDialog,
    handleUploadExcel,
    closeUploadDialog,
    handleBindFileToUser,
    handleBindDocumentTitlesToUser,
    handleDeleteBinding,
    handleRegisterUser,
    loadUserDocumentTitles,
    loadPlanSections,
    loadPlanSectionById,
    openEditPlanSectionDialog,
    closeEditPlanSectionDialog,
    handleUpdatePlanSection,
    loadDocuments,
    loadDocumentData,
    handleDeleteDocument,
    handleDeleteDepartmentUser,
    loadAnnouncements,
    openEditAnnouncementDialog,
    closeEditAnnouncementDialog,
    handleUpdateAnnouncement,
  };
};
