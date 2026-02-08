<template>
  <div class="sasl-form apple-surface">
    <v-sheet class="hero-card" color="transparent" elevation="0">
      <v-row align="center">
        <v-col cols="12" md="6" class="hero-copy">
          <div class="hero-emblem">CSL</div>
          <div>
            <div class="hero-eyebrow">SASL Configuration Console</div>
            <div class="hero-title">移動通訊配置中心</div>
            <div class="hero-meta">管理Excel數據導入與用戶文件綁定</div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="hero-stats">
          <div v-for="stat in heroStats" :key="stat.label" class="hero-stat">
            <div class="stat-icon">
              <v-icon :icon="stat.icon" size="26" />
            </div>
            <div class="stat-content">
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-value">{{ stat.value }}</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-sheet>

    <v-row dense>
      <!-- 功能1: 新增SASL用户 -->
      <v-col cols="12" md="6">
        <v-card class="section-card" :loading="loading" elevation="0">
          <v-card-title class="section-title d-flex align-center">
            <div class="title-icon">
              <v-icon color="primary">mdi-account-plus</v-icon>
            </div>
            <div>
              <div class="title-label">新增 SASL 用戶</div>
              <div class="title-sub">Create SASL User</div>
            </div>
          </v-card-title>
          <v-card-text>
            <v-sheet class="search-panel" elevation="0">
              <div class="search-panel-title">
                <v-icon icon="mdi-account-plus" color="primary" size="26" />
                <span>創建新用戶</span>
              </div>
              <div class="search-panel-subtitle">填寫用戶信息以創建新的 SASL 用戶</div>
            </v-sheet>
            <v-form ref="userFormRef" class="mt-4">
              <v-text-field
                v-model="userForm.username"
                label="用戶名"
                placeholder="輸入用戶名（3-30位，只能包含數字和字母）"
                prepend-inner-icon="mdi-account"
                variant="outlined"
                :disabled="registering || loading"
                :rules="usernameRules"
                required
                class="mb-3"
              />
              <v-text-field
                v-model="userForm.password"
                label="密碼"
                placeholder="輸入密碼（8-32位，需包含大小寫字母、數字和特殊字符）"
                prepend-inner-icon="mdi-lock"
                variant="outlined"
                :type="showPassword ? 'text' : 'password'"
                :disabled="registering || loading"
                :rules="passwordRules"
                required
                class="mb-3"
              >
                <template #append-inner>
                  <v-icon
                    :icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click="showPassword = !showPassword"
                    style="cursor: pointer;"
                  />
                </template>
              </v-text-field>
              <v-text-field
                v-model="userForm.displayName"
                label="顯示名稱"
                placeholder="輸入顯示名稱（可選）"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                :disabled="registering || loading"
                class="mb-3"
              />
              <v-text-field
                v-model="userForm.email"
                label="郵箱"
                placeholder="輸入郵箱（可選）"
                prepend-inner-icon="mdi-email"
                variant="outlined"
                type="email"
                :disabled="registering || loading"
                class="mb-3"
              />
              <v-text-field
                v-model="userForm.mobile"
                label="手機號"
                placeholder="輸入手機號（可選）"
                prepend-inner-icon="mdi-phone"
                variant="outlined"
                :disabled="registering || loading"
                class="mb-3"
              />
              <v-btn
                class="apple-primary-btn"
                color="primary"
                :loading="registering"
                :disabled="registering || loading || !userForm.username?.trim() || !userForm.password?.trim()"
                block
                @click="handleRegisterUser"
              >
                創建用戶
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 功能2: Excel上传导入 -->
      <v-col cols="12" md="6">
        <v-card class="section-card" :loading="loading" elevation="0">
          <v-card-title class="section-title d-flex align-center">
            <div class="title-icon">
              <v-icon color="primary">mdi-upload</v-icon>
            </div>
            <div>
              <div class="title-label">Excel 數據導入</div>
              <div class="title-sub">Upload Excel Files</div>
            </div>
          </v-card-title>
          <v-card-text>
            <v-sheet class="search-panel" elevation="0">
              <div class="search-panel-title">
                <v-icon icon="mdi-file-excel" color="primary" size="26" />
                <span>上傳Excel文件</span>
              </div>
              <div class="search-panel-subtitle">支持 .xls 和 .xlsx 格式文件</div>
            </v-sheet>
            <div class="mt-4">
              <v-file-input
                v-model="uploadFile"
                label="選擇Excel文件"
                accept=".xls,.xlsx"
                prepend-icon="mdi-file-excel"
                variant="outlined"
                :disabled="uploading || loading"
                clearable
                @update:model-value="handleFileChange"
              />
              <v-btn
                class="apple-primary-btn mt-4"
                color="primary"
                :loading="uploading"
                :disabled="!uploadFile || loading"
                block
                @click="handleFileSelect"
              >
                上傳並導入
              </v-btn>
            </div>

            <v-divider class="my-6" />

            <v-sheet class="search-panel" elevation="0">
              <div class="search-panel-title">
                <v-icon icon="mdi-account-link" color="primary" size="26" />
                <span>綁定文件與用戶</span>
              </div>
              <div class="search-panel-subtitle">將Excel文件分配給指定用戶</div>
            </v-sheet>
            <div class="mt-4">
              <v-select
                v-model="selectedFileIds"
                :items="availableFiles"
                item-title="originalFileName"
                item-value="id"
                label="選擇文件（可多選）"
                prepend-inner-icon="mdi-file-excel"
                :disabled="loading || binding || !selectedUserId || loadingUserDocumentTitles"
                :loading="loadingUserDocumentTitles"
                multiple
                chips
                closable-chips
                clearable
                class="mb-3"
              >
                <template #item="{ props, item }">
                  <v-list-item v-bind="props">
                    <template #prepend>
                      <v-checkbox
                        :model-value="selectedFileIds.includes(item.raw.id)"
                        :true-value="true"
                        :false-value="false"
                        color="primary"
                        hide-details
                        @click.stop
                        @update:model-value="(value) => handleFileToggle(item.raw.id, value, item.raw.selected)"
                      />
                    </template>
                    <v-list-item-title>
                      {{ item.raw.originalFileName }}
                      <v-chip v-if="item.raw.selected" size="x-small" color="success" class="ml-2">
                        已綁定
                      </v-chip>
                    </v-list-item-title>
                    <v-list-item-subtitle v-if="item.raw.fileSize > 0">
                      {{ formatFileSize(item.raw.fileSize) }} · {{ formatDate(item.raw.uploadTime) }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-else>
                      文檔標題
                    </v-list-item-subtitle>
                  </v-list-item>
                </template>
              </v-select>
              <v-select
                v-model="selectedUserId"
                :items="users"
                item-title="username"
                item-value="id"
                label="選擇用戶"
                prepend-inner-icon="mdi-account"
                :disabled="loading || binding"
                clearable
                class="mb-3"
              >
                <template #item="{ props, item }">
                  <v-list-item v-bind="props">
                    <template #prepend>
                      <v-icon icon="mdi-account" color="primary" />
                    </template>
                    <v-list-item-title>{{ item.raw.username }}</v-list-item-title>
                    <v-list-item-subtitle v-if="item.raw.nickname">
                      {{ item.raw.nickname }}
                    </v-list-item-subtitle>
                    <template #append>
                      <v-btn
                        icon="mdi-delete"
                        color="error"
                        variant="text"
                        size="small"
                        :disabled="loading || binding"
                        :loading="loading"
                        @click.stop="handleDeleteDepartmentUser(item.raw.id)"
                        title="刪除用戶的 SASL 部門編碼"
                      />
                    </template>
                  </v-list-item>
                </template>
              </v-select>
              <v-btn
                class="apple-primary-btn"
                color="primary"
                :loading="binding"
                :disabled="selectedFileIds.length === 0 || !selectedUserId || loading"
                block
                @click="() => handleBindDocumentTitlesToUser(selectedFileIds, availableFiles)"
              >
                確認綁定/解綁
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 绑定列表 -->
    <v-row class="plan-detail-row" dense>
      <v-col cols="12">
        <section class="plan-section-surface">
          <div class="plan-section-header section-title d-flex align-center">
            <div class="title-icon soft">
              <v-icon color="primary">mdi-table-large</v-icon>
            </div>
            <div>
              <div class="title-label">綁定關係列表</div>
              <div class="title-sub">File User Bindings</div>
            </div>
          </div>

          <v-alert
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mb-6"
          >
            以下顯示所有已建立的文件與用戶綁定關係，可在此管理綁定狀態。
          </v-alert>

          <div v-if="loading && fileUserBindings.length === 0" class="text-center py-8">
            <v-progress-circular indeterminate color="primary" />
            <div class="mt-4 text-medium-emphasis">正在加載數據...</div>
          </div>

          <v-table v-else-if="fileUserBindings.length > 0" class="binding-table">
            <thead>
              <tr>
                <th>文件名稱</th>
                <th>用戶名稱</th>
                <th>綁定時間</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="binding in fileUserBindings" :key="binding.id">
                <td>
                  <div class="d-flex align-center">
                    <v-icon icon="mdi-file-excel" color="primary" class="mr-2" />
                    {{ binding.fileName }}
                  </div>
                </td>
                <td>
                  <div class="d-flex align-center">
                    <v-icon icon="mdi-account" color="primary" class="mr-2" />
                    {{ binding.userName }}
                  </div>
                </td>
                <td>{{ formatDate(binding.bindTime) }}</td>
                <td>
                  <v-btn
                    icon="mdi-delete"
                    variant="text"
                    color="error"
                    size="small"
                    @click="handleDeleteBinding(binding.id)"
                  />
                </td>
              </tr>
            </tbody>
          </v-table>

          <v-alert
            v-else
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mt-4"
          >
            暫無綁定關係，請在上方創建文件與用戶的綁定。
          </v-alert>
        </section>
      </v-col>
    </v-row>

    <!-- 文档清单 -->
    <v-row class="plan-detail-row" dense>
      <v-col cols="12">
        <section class="plan-section-surface">
          <div class="plan-section-header section-title d-flex align-center">
            <div class="title-icon soft">
              <v-icon color="primary">mdi-file-document-multiple</v-icon>
            </div>
            <div>
              <div class="title-label">文檔清單</div>
              <div class="title-sub">Document List</div>
            </div>
            <v-spacer />
            <v-btn
              icon="mdi-refresh"
              variant="text"
              color="primary"
              :loading="loadingDocuments"
              @click="loadDocuments"
            >
              <v-icon>mdi-refresh</v-icon>
              <v-tooltip activator="parent">刷新文檔清單</v-tooltip>
            </v-btn>
          </div>

          <v-alert
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mb-6"
          >
            以下按文檔標題分組顯示所有導入記錄，點擊導入記錄可加載該文檔標題對應的數據記錄，可在此進行刪除操作。
          </v-alert>

          <div v-if="loadingDocuments && documentGroups.length === 0" class="text-center py-8">
            <v-progress-circular indeterminate color="primary" />
            <div class="mt-4 text-medium-emphasis">正在加載文檔清單...</div>
          </div>

          <div v-else-if="documentGroups.length > 0" class="document-groups-container">
            <div
              v-for="group in documentGroups"
              :key="group.documentTitle"
              class="document-group-item mb-4"
            >
              <div class="document-group-header">
                <div class="d-flex align-center justify-space-between">
                  <div class="d-flex align-center">
                    <v-icon icon="mdi-folder-text" color="primary" class="mr-2" />
                    <div>
                      <div
                        class="text-h6 document-title-link"
                        :class="{ 'document-selected': selectedDocumentTitle === group.documentTitle }"
                        @click="handleDocumentTitleClick(group.documentTitle, group.importRecords)"
                      >
                        {{ group.documentTitle }}
                      </div>
                      <div class="text-caption text-light-emphasis">
                        共 {{ group.importRecords.length }} 個導入記錄
                      </div>
                    </div>
                  </div>
                  <div class="d-flex gap-1 justify-end">
                    <v-btn
                      icon="mdi-download"
                      variant="text"
                      color="primary"
                      size="small"
                      :loading="exporting"
                      :disabled="exporting"
                      @click.stop="handleExportDocument(group.documentTitle)"
                    >
                      <v-icon>mdi-download</v-icon>
                      <v-tooltip activator="parent">導出該文檔標題的所有記錄</v-tooltip>
                    </v-btn>
                    <v-btn
                      icon="mdi-delete"
                      variant="text"
                      color="error"
                      size="small"
                      :loading="loadingDocuments"
                      @click.stop="handleDeleteDocument(group.documentTitle)"
                    >
                      <v-icon>mdi-delete</v-icon>
                      <v-tooltip activator="parent">刪除該文檔標題的所有記錄</v-tooltip>
                    </v-btn>
                  </div>
                </div>
              </div>

              <v-table class="import-records-table mt-3">
                <thead>
                  <tr>
                    <th>Excel文件名</th>
                    <th>描述</th>
                    <th>備註</th>
                    <th>創建時間</th>
                    <th>更新時間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="record in group.importRecords"
                    :key="record.id"
                  >
                    <td>
                      <div class="d-flex align-center">
                        <v-icon icon="mdi-file-excel" color="success" class="mr-2" size="small" />
                        <span>
                          {{ record.excelFileName }}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span>{{ record.documentDescription || '-' }}</span>
                    </td>
                    <td>
                      <span>{{ record.documentRemark || '-' }}</span>
                    </td>
                    <td>{{ formatDate(record.createdAt) }}</td>
                    <td>{{ record.updatedAt ? formatDate(record.updatedAt) : '-' }}</td>
                  </tr>
                </tbody>
              </v-table>
            </div>
          </div>

          <v-alert
            v-else
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mt-4"
          >
            暫無導入記錄，請先上傳Excel文件導入數據。
          </v-alert>

          <!-- 文档数据展示区域 -->
          <div v-if="selectedImportRecord && documentRecords.length > 0" class="mt-6">
            <v-divider class="mb-4" />
            <div class="document-data-section">
              <div class="d-flex align-center justify-space-between mb-4">
                <div>
                  <div class="text-h6">{{ selectedDocumentTitle }}</div>
                  <div class="text-caption text-light-emphasis mt-1">
                    Excel文件：{{ selectedImportRecord.excelFileName }}
                    <span v-if="selectedImportRecord.documentDescription"> | {{ selectedImportRecord.documentDescription }}</span>
                  </div>
                </div>
                <v-btn
                  icon="mdi-close"
                  variant="text"
                  size="small"
                  @click="clearSelectedDocument"
                >
                  <v-icon>mdi-close</v-icon>
                  <v-tooltip activator="parent">關閉</v-tooltip>
                </v-btn>
              </div>

              <div class="document-table-wrapper">
                <div class="text-subtitle-2 mb-2">數據記錄</div>
                <div class="text-caption text-light-emphasis mb-4">
                  共 {{ documentRecords.length }} 條記錄
                </div>
                <div class="table-container">
                  <table class="document-data-table">
                    <thead>
                      <tr>
                        <th>MRT</th>
                        <th>舊合約</th>
                        <th>銷售</th>
                        <th>類別</th>
                        <th>最後轉網月份</th>
                        <th>致電狀態</th>
                        <th>備註</th>
                        <th>最後致電時間</th>
                        <th>下次致電時間</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="record in documentRecords" :key="record.id">
                        <td>{{ record.mrt }}</td>
                        <td>{{ record.oldContract }}</td>
                        <td>{{ record.sales }}</td>
                        <td>{{ record.category }}</td>
                        <td>{{ record.lastTurnNetworkMonth }}</td>
                        <td>{{ record.callStatus || '-' }}</td>
                        <td>{{ record.remark || '-' }}</td>
                        <td>{{ record.lastCallTime ? formatDate(record.lastCallTime) : '-' }}</td>
                        <td>{{ record.nextCallTime ? formatDate(record.nextCallTime) : '-' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </v-col>
    </v-row>

    <!-- 公告管理 -->
    <v-row class="plan-detail-row" dense>
      <v-col cols="12">
        <section class="plan-section-surface">
          <div class="plan-section-header section-title d-flex align-center">
            <div class="title-icon soft">
              <v-icon color="primary">mdi-bullhorn</v-icon>
            </div>
            <div>
              <div class="title-label">公告管理</div>
              <div class="title-sub">Announcement Management</div>
            </div>
            <v-spacer />
            <v-btn
              icon="mdi-refresh"
              variant="text"
              color="primary"
              :loading="loadingAnnouncements"
              @click="loadAnnouncements"
            >
              <v-icon>mdi-refresh</v-icon>
              <v-tooltip activator="parent">刷新公告列表</v-tooltip>
            </v-btn>
          </div>

          <v-alert
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mb-6"
          >
            以下顯示所有公告，可在此查看並更新公告內容。
          </v-alert>

          <div v-if="loadingAnnouncements && announcements.length === 0" class="text-center py-8">
            <v-progress-circular indeterminate color="primary" />
            <div class="mt-4 text-medium-emphasis">正在加載公告列表...</div>
          </div>

          <v-table v-else-if="announcements.length > 0" class="binding-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>內容</th>
                <th>狀態</th>
                <th>排序</th>
                <th>創建時間</th>
                <th>更新時間</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="announcement in announcements" :key="announcement.id">
                <td>{{ announcement.id }}</td>
                <td>
                  <div class="announcement-content">
                    {{ announcement.content }}
                  </div>
                </td>
                <td>
                  <v-chip
                    :color="announcement.enabled ? 'success' : 'default'"
                    size="small"
                    variant="tonal"
                  >
                    {{ announcement.enabled ? '啟用' : '禁用' }}
                  </v-chip>
                </td>
                <td>{{ announcement.sortOrder }}</td>
                <td>{{ formatDate(announcement.createdAt) }}</td>
                <td>{{ announcement.updatedAt ? formatDate(announcement.updatedAt) : '-' }}</td>
                <td>
                  <v-btn
                    icon="mdi-pencil"
                    variant="text"
                    color="primary"
                    size="small"
                    :loading="loadingAnnouncements"
                    @click="openEditAnnouncementDialog(announcement)"
                  >
                    <v-icon>mdi-pencil</v-icon>
                    <v-tooltip activator="parent">編輯公告</v-tooltip>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>

          <v-alert
            v-else
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mt-4"
          >
            暫無公告記錄。
          </v-alert>
        </section>
      </v-col>
    </v-row>

    <!-- 套餐明细检视 -->
    <v-row class="plan-detail-row" dense>
      <v-col cols="12">
        <section class="plan-section-surface">
          <div class="plan-section-header section-title d-flex align-center">
            <div class="title-icon soft">
              <v-icon color="primary">mdi-package-variant</v-icon>
            </div>
            <div>
              <div class="title-label">套餐明細檢視</div>
              <div class="title-sub">Plan Details View</div>
            </div>
          </div>

          <v-alert
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mb-6"
          >
            以下顯示所有套餐方案，可在此查看套餐明細並進行編輯更新操作。
          </v-alert>

          <div v-if="loadingPlanSections && planSections.length === 0" class="text-center py-8">
            <v-progress-circular indeterminate color="primary" />
            <div class="mt-4 text-medium-emphasis">正在加載套餐數據...</div>
          </div>

          <div v-else-if="planSections.length > 0">
            <v-tabs v-model="activePlanTab" class="plan-tabs" grow density="comfortable" slider-color="primary">
              <v-tab
                v-for="section in planSections"
                :key="section.id"
                :value="section.planId || String(section.id)"
                class="plan-tab"
              >
                <div class="plan-tab-title">{{ section.title }}</div>
              </v-tab>
            </v-tabs>
            <v-tabs-window v-model="activePlanTab" class="plan-window">
              <v-tabs-window-item
                v-for="section in planSections"
                :key="section.id"
                :value="section.planId || String(section.id)"
                class="plan-window-item"
              >
                <div class="panel-title">
                  <div class="panel-title-text">
                    <div class="panel-title-label">{{ section.title }}</div>
                    <div class="panel-title-sub">{{ section.subtitle }}</div>
                  </div>
                  <v-spacer />
                  <v-btn
                    class="apple-primary-btn"
                    color="primary"
                    :loading="loadingPlanSections"
                    prepend-icon="mdi-pencil"
                    @click="openEditPlanSectionDialog(section.id)"
                  >
                    編輯套餐
                  </v-btn>
                </div>
                <div class="plan-matrix-wrapper">
                  <table class="plan-matrix">
                    <thead>
                      <tr>
                        <th>項目</th>
                        <th v-for="column in section.columns" :key="column">
                          {{ column }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="row in section.rows" :key="row.label">
                        <th>{{ row.label }}</th>
                        <td v-for="(value, idx) in row.values" :key="`${row.label}-${idx}`">
                          {{ value }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div v-if="section.footnote" class="plan-footnote">
                  {{ section.footnote }}
                </div>
              </v-tabs-window-item>
            </v-tabs-window>
          </div>

          <v-alert
            v-else
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mt-4"
          >
            暫無套餐方案數據。
          </v-alert>
        </section>
      </v-col>
    </v-row>

    <!-- 上传表单对话框 -->
    <v-dialog v-model="uploadDialogVisible" max-width="600" persistent>
      <v-card class="upload-dialog-card">
        <v-card-title class="d-flex align-center">
          <v-icon icon="mdi-file-excel" color="primary" class="mr-2" />
          <span>上傳Excel文件</span>
        </v-card-title>
        <v-card-text>
          <v-alert
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mb-4"
          >
            請填寫以下信息，文檔標題為必填項，然後確認上傳。
          </v-alert>
          <v-form ref="uploadFormRef">
            <v-text-field
              v-model="uploadForm.title"
              label="文檔標題"
              placeholder="例如：客戶數據表（必填）"
              prepend-inner-icon="mdi-format-title"
              variant="outlined"
              :disabled="uploading"
              :rules="[v => !!v || '文檔標題為必填項']"
              required
              class="mb-3"
            />
            <v-textarea
              v-model="uploadForm.description"
              label="文檔描述"
              placeholder="輸入文件描述信息（可選）"
              prepend-inner-icon="mdi-text"
              variant="outlined"
              rows="3"
              auto-grow
              :disabled="uploading"
              class="mb-3"
            />
            <v-textarea
              v-model="uploadForm.remark"
              label="備註"
              placeholder="輸入備註信息（可選）"
              prepend-inner-icon="mdi-note-text-outline"
              variant="outlined"
              rows="3"
              auto-grow
              :disabled="uploading"
            />
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
            variant="text"
            :disabled="uploading"
            @click="closeUploadDialog"
          >
            取消
          </v-btn>
          <v-btn
            class="apple-primary-btn"
            color="primary"
            :loading="uploading"
            :disabled="uploading || !uploadForm.title?.trim()"
            @click="handleUploadExcel"
          >
            確認上傳
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 编辑公告对话框 -->
    <v-dialog v-model="editingAnnouncementDialog" max-width="600" persistent>
      <v-card class="upload-dialog-card">
        <v-card-title class="d-flex align-center">
          <v-icon icon="mdi-bullhorn" color="primary" class="mr-2" />
          <span>編輯公告</span>
        </v-card-title>
        <v-card-text>
          <v-alert
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mb-4"
          >
            請填寫以下信息以更新公告內容。
          </v-alert>
          <v-form ref="announcementFormRef">
            <v-textarea
              v-model="announcementEditForm.content"
              label="公告內容"
              placeholder="輸入公告內容（必填）"
              prepend-inner-icon="mdi-text"
              variant="outlined"
              rows="6"
              auto-grow
              :disabled="loadingAnnouncements"
              :rules="[v => !!v || '公告內容為必填項']"
              required
            />
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
            variant="text"
            :disabled="loadingAnnouncements"
            @click="closeEditAnnouncementDialog"
          >
            取消
          </v-btn>
          <v-btn
            class="apple-primary-btn"
            color="primary"
            :loading="loadingAnnouncements"
            :disabled="loadingAnnouncements || !announcementEditForm.content?.trim()"
            @click="handleUpdateAnnouncement"
          >
            確認更新
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 线索分配穿梭窗 -->
    <v-row class="plan-detail-row" dense>
      <v-col cols="12">
        <section class="plan-section-surface">
          <div class="plan-section-header section-title d-flex align-center">
            <div class="title-icon soft">
              <v-icon color="primary">mdi-account-switch</v-icon>
            </div>
            <div>
              <div class="title-label">線索分配</div>
              <div class="title-sub">Lead Assignment</div>
            </div>
            <v-spacer />
            <v-btn
              icon="mdi-refresh"
              variant="text"
              color="primary"
              :loading="loadingLeadRecords"
              @click="loadLeadRecords"
            >
              <v-icon>mdi-refresh</v-icon>
              <v-tooltip activator="parent">刷新線索列表</v-tooltip>
            </v-btn>
          </div>

          <v-alert
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mb-6"
          >
            選擇線索記錄並分配給指定用戶。左側顯示所有可用線索，右側顯示已選中待分配的線索。
          </v-alert>

          <div v-if="loadingLeadRecords && availableLeadRecords.length === 0" class="text-center py-8">
            <v-progress-circular indeterminate color="primary" />
            <div class="mt-4 text-medium-emphasis">正在加載線索數據...</div>
          </div>

          <div v-else class="lead-transfer-container">
            <!-- 用户选择 -->
            <div class="mb-4">
              <v-select
                v-model="selectedAssignUserId"
                :items="users"
                item-title="username"
                item-value="id"
                label="選擇用戶"
                prepend-inner-icon="mdi-account"
                :disabled="loadingLeadRecords || assigning"
                clearable
                variant="outlined"
              >
                <template #item="{ props, item }">
                  <v-list-item v-bind="props">
                    <template #prepend>
                      <v-icon icon="mdi-account" color="primary" />
                    </template>
                    <v-list-item-title>{{ item.raw.username }}</v-list-item-title>
                    <v-list-item-subtitle v-if="item.raw.nickname">
                      {{ item.raw.nickname }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </template>
              </v-select>
            </div>

            <!-- 穿梭窗主体 -->
            <div class="transfer-wrapper">
              <!-- 左侧：可用线索列表 -->
              <div class="transfer-panel">
                <div class="transfer-panel-header">
                  <div class="d-flex align-center">
                    <v-icon icon="mdi-format-list-bulleted" color="primary" class="mr-2" />
                    <span class="text-subtitle-1">可用線索</span>
                    <v-chip size="small" color="primary" variant="tonal" class="ml-2">
                      {{ availableLeadRecords.length }}
                    </v-chip>
                  </div>
                  <v-text-field
                    v-model="availableSearchText"
                    placeholder="搜索線索..."
                    prepend-inner-icon="mdi-magnify"
                    variant="outlined"
                    density="compact"
                    hide-details
                    class="mt-2"
                  />
                </div>
                <div class="transfer-panel-content">
                  <v-list class="transfer-list">
                    <v-list-item
                      v-for="record in filteredAvailableRecords"
                      :key="record.id"
                      :value="record.id"
                      @click="toggleAvailableRecord(record.id)"
                    >
                      <template #prepend>
                        <v-checkbox
                          :model-value="selectedAvailableRecordIds.includes(record.id)"
                          color="primary"
                          hide-details
                          @click.stop="toggleAvailableRecord(record.id)"
                        />
                      </template>
                      <v-list-item-title class="text-body-2">
                        <div class="d-flex flex-column">
                          <span><strong>MRT:</strong> {{ record.mrt || '-' }}</span>
                          <span class="text-caption text-light-emphasis mt-1">
                            <strong>舊合約:</strong> {{ record.oldContract || '-' }} | 
                            <strong>銷售:</strong> {{ record.sales || '-' }}
                          </span>
                          <span class="text-caption text-light-emphasis mt-1">
                            <strong>類別:</strong> {{ record.category || '-' }} | 
                            <strong>最後轉網月份:</strong> {{ record.lastTurnNetworkMonth || '-' }}
                          </span>
                        </div>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="filteredAvailableRecords.length === 0">
                      <v-list-item-title class="text-center text-medium-emphasis">
                        暫無可用線索
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </div>
              </div>

              <!-- 中间：操作按钮 -->
              <div class="transfer-actions">
                <v-btn
                  icon="mdi-chevron-right"
                  color="primary"
                  variant="outlined"
                  :disabled="selectedAvailableRecordIds.length === 0 || assigning"
                  @click="moveToSelected"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                  <v-tooltip activator="parent">添加到已選</v-tooltip>
                </v-btn>
                <v-btn
                  icon="mdi-chevron-double-right"
                  color="primary"
                  variant="outlined"
                  :disabled="filteredAvailableRecords.length === 0 || assigning"
                  @click="moveAllToSelected"
                >
                  <v-icon>mdi-chevron-double-right</v-icon>
                  <v-tooltip activator="parent">全部添加</v-tooltip>
                </v-btn>
                <v-btn
                  icon="mdi-chevron-left"
                  color="primary"
                  variant="outlined"
                  :disabled="selectedLeadRecordIds.length === 0 || assigning"
                  @click="moveToAvailable"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                  <v-tooltip activator="parent">移回可用</v-tooltip>
                </v-btn>
                <v-btn
                  icon="mdi-chevron-double-left"
                  color="primary"
                  variant="outlined"
                  :disabled="selectedLeadRecords.length === 0 || assigning"
                  @click="moveAllToAvailable"
                >
                  <v-icon>mdi-chevron-double-left</v-icon>
                  <v-tooltip activator="parent">全部移回</v-tooltip>
                </v-btn>
              </div>

              <!-- 右侧：已选线索列表 -->
              <div class="transfer-panel">
                <div class="transfer-panel-header">
                  <div class="d-flex align-center">
                    <v-icon icon="mdi-check-circle" color="success" class="mr-2" />
                    <span class="text-subtitle-1">已選線索</span>
                    <v-chip size="small" color="success" variant="tonal" class="ml-2">
                      {{ selectedLeadRecords.length }}
                    </v-chip>
                  </div>
                  <v-text-field
                    v-model="selectedSearchText"
                    placeholder="搜索已選線索..."
                    prepend-inner-icon="mdi-magnify"
                    variant="outlined"
                    density="compact"
                    hide-details
                    class="mt-2"
                  />
                </div>
                <div class="transfer-panel-content">
                  <v-list class="transfer-list">
                    <v-list-item
                      v-for="record in filteredSelectedRecords"
                      :key="record.id"
                      :value="record.id"
                      @click="toggleSelectedRecord(record.id)"
                    >
                      <template #prepend>
                        <v-checkbox
                          :model-value="selectedLeadRecordIds.includes(record.id)"
                          color="success"
                          hide-details
                          @click.stop="toggleSelectedRecord(record.id)"
                        />
                      </template>
                      <v-list-item-title class="text-body-2">
                        <div class="d-flex flex-column">
                          <span><strong>MRT:</strong> {{ record.mrt || '-' }}</span>
                          <span class="text-caption text-light-emphasis mt-1">
                            <strong>舊合約:</strong> {{ record.oldContract || '-' }} | 
                            <strong>銷售:</strong> {{ record.sales || '-' }}
                          </span>
                          <span class="text-caption text-light-emphasis mt-1">
                            <strong>類別:</strong> {{ record.category || '-' }} | 
                            <strong>最後轉網月份:</strong> {{ record.lastTurnNetworkMonth || '-' }}
                          </span>
                        </div>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item v-if="filteredSelectedRecords.length === 0">
                      <v-list-item-title class="text-center text-medium-emphasis">
                        暫無已選線索
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </div>
              </div>
            </div>

            <!-- 分配按钮 -->
            <div class="mt-4 d-flex justify-end">
              <v-btn
                class="apple-primary-btn"
                color="primary"
                :loading="assigning"
                :disabled="selectedLeadRecords.length === 0 || !selectedAssignUserId || assigning"
                prepend-icon="mdi-account-check"
                @click="handleAssignLeadRecords"
              >
                分配選中線索
              </v-btn>
            </div>
          </div>
        </section>
      </v-col>
    </v-row>

    <!-- 编辑套餐对话框 -->
    <v-dialog v-model="editingPlanSection" max-width="900" persistent scrollable>
      <v-card class="upload-dialog-card">
        <v-card-title class="d-flex align-center">
          <v-icon icon="mdi-package-variant" color="primary" class="mr-2" />
          <span>編輯套餐方案</span>
        </v-card-title>
        <v-card-text>
          <v-alert
            type="info"
            variant="tonal"
            color="primary"
            border="start"
            class="mb-4"
          >
            請填寫以下信息以更新套餐方案。
          </v-alert>
          <v-form ref="planSectionFormRef">
            <v-text-field
              v-model="planSectionEditForm.planId"
              label="套餐ID"
              placeholder="例如：plan-001（必填）"
              prepend-inner-icon="mdi-identifier"
              variant="outlined"
              :disabled="loadingPlanSections"
              :rules="[v => !!v || '套餐ID為必填項']"
              required
              class="mb-3"
            />
            <v-text-field
              v-model="planSectionEditForm.title"
              label="套餐標題"
              placeholder="例如：5G Premium套餐（必填）"
              prepend-inner-icon="mdi-format-title"
              variant="outlined"
              :disabled="loadingPlanSections"
              :rules="[v => !!v || '套餐標題為必填項']"
              required
              class="mb-3"
            />
            <v-text-field
              v-model="planSectionEditForm.subtitle"
              label="套餐副標題"
              placeholder="例如：高速穩定網絡體驗（可選）"
              prepend-inner-icon="mdi-subtitles"
              variant="outlined"
              :disabled="loadingPlanSections"
              class="mb-3"
            />
            <v-textarea
              v-model="planSectionEditForm.footnote"
              label="腳註"
              placeholder="輸入腳註信息（可選）"
              prepend-inner-icon="mdi-note-text-outline"
              variant="outlined"
              rows="3"
              auto-grow
              :disabled="loadingPlanSections"
              class="mb-4"
            />

            <v-divider class="my-4" />

            <div class="mb-4">
              <div class="d-flex align-center justify-space-between mb-2">
                <div class="text-h6">列標題</div>
                <v-btn
                  icon="mdi-plus"
                  size="small"
                  color="primary"
                  variant="text"
                  :disabled="loadingPlanSections"
                  @click="planSectionEditForm.columns.push('')"
                />
              </div>
              <v-text-field
                v-for="(column, index) in planSectionEditForm.columns"
                :key="index"
                v-model="planSectionEditForm.columns[index]"
                :label="`列 ${index + 1}`"
                :placeholder="`輸入列標題 ${index + 1}`"
                variant="outlined"
                :disabled="loadingPlanSections"
                class="mb-2"
              >
                <template #append-inner>
                  <v-btn
                    icon="mdi-delete"
                    size="small"
                    variant="text"
                    color="error"
                    :disabled="loadingPlanSections || planSectionEditForm.columns.length <= 1"
                    @click="handleRemoveColumn(index)"
                  />
                </template>
              </v-text-field>
              <v-alert
                v-if="planSectionEditForm.columns.length === 0"
                type="warning"
                variant="tonal"
                class="mt-2"
              >
                請至少添加一列
              </v-alert>
            </div>

            <v-divider class="my-4" />

            <div>
              <div class="d-flex align-center justify-space-between mb-2">
                <div class="text-h6">行數據</div>
                <v-btn
                  icon="mdi-plus"
                  size="small"
                  color="primary"
                  variant="text"
                  :disabled="loadingPlanSections || planSectionEditForm.columns.length === 0"
                  @click="handleAddRow"
                />
              </div>
              <div
                v-for="(row, rowIndex) in planSectionEditForm.rows"
                :key="rowIndex"
                class="mb-4 pa-4"
                style="border: 1px solid rgba(70, 110, 196, 0.35); border-radius: 8px; background: rgba(8, 12, 26, 0.5);"
              >
                <div class="d-flex align-center justify-space-between mb-2">
                  <div class="text-subtitle-1">行 {{ rowIndex + 1 }}</div>
                  <v-btn
                    icon="mdi-delete"
                    size="small"
                    variant="text"
                    color="error"
                    :disabled="loadingPlanSections"
                    @click="planSectionEditForm.rows.splice(rowIndex, 1)"
                  />
                </div>
                <v-text-field
                  v-model="planSectionEditForm.rows[rowIndex].label"
                  label="行標籤"
                  placeholder="例如：月費"
                  variant="outlined"
                  :disabled="loadingPlanSections"
                  :rules="[v => !!v || '行標籤為必填項']"
                  required
                  class="mb-2"
                />
                <div class="text-caption mb-2">值列表（需與列數量一致）</div>
                <div class="d-flex flex-wrap gap-2 mb-2">
                  <v-text-field
                    v-for="(value, valueIndex) in row.values"
                    :key="valueIndex"
                    v-model="planSectionEditForm.rows[rowIndex].values[valueIndex]"
                    :label="`值 ${valueIndex + 1}`"
                    :placeholder="`輸入值 ${valueIndex + 1}`"
                    variant="outlined"
                    density="compact"
                    :disabled="loadingPlanSections"
                    style="flex: 1; min-width: 120px;"
                  />
                </div>
                <v-alert
                  v-if="row.values.length !== planSectionEditForm.columns.length"
                  type="warning"
                  variant="tonal"
                  density="compact"
                >
                  值數量必須等於列數量（當前：{{ row.values.length }} / {{ planSectionEditForm.columns.length }}）
                </v-alert>
              </div>
              <v-alert
                v-if="planSectionEditForm.rows.length === 0"
                type="warning"
                variant="tonal"
                class="mt-2"
              >
                請至少添加一行數據
              </v-alert>
            </div>
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
            variant="text"
            :disabled="loadingPlanSections"
            @click="closeEditPlanSectionDialog"
          >
            取消
          </v-btn>
          <v-btn
            class="apple-primary-btn"
            color="primary"
            :loading="loadingPlanSections"
            :disabled="loadingPlanSections || !planSectionEditForm.planId?.trim() || !planSectionEditForm.title?.trim() || planSectionEditForm.columns.length === 0 || planSectionEditForm.rows.length === 0"
            @click="handleUpdatePlanSection"
          >
            確認更新
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, computed, nextTick } from 'vue';
import { useSnackbarStore } from '@/stores/snackbar';
import { useSaslConfigState } from '../state/saslConfigState';
import { useSaslConfigService } from '../service/saslConfigService';
import { 
  getRecordsByDocumentTitle, 
  getAllLeadRecords,
  assignLeadRecordsToUser,
  type SaslRecordResponse 
} from '../api/saslConfigApi';

const BASE_URL = '/api/sasl/config';

const snackbar = useSnackbarStore();

const saslConfigState = useSaslConfigState();

const {
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
  uploadDialogVisible,
  uploadForm,
  registering,
  userForm,
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
} = saslConfigState;

const {
  validateAndOpenUploadDialog,
  handleUploadExcel,
  closeUploadDialog,
  handleBindFileToUser,
  handleBindDocumentTitlesToUser,
  handleDeleteBinding,
  loadAllData,
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
} = useSaslConfigService(saslConfigState, snackbar);

const uploadFormRef = ref();
const userFormRef = ref();
const planSectionFormRef = ref();
const announcementFormRef = ref();
const showPassword = ref(false);
const exporting = ref(false);

// 选中的文件ID列表（多选）
const selectedFileIds = ref<number[]>([]);

// 套餐方案选中的tab
const activePlanTab = ref<string>('');

// 线索分配相关状态
const loadingLeadRecords = ref(false);
const assigning = ref(false);
const availableLeadRecords = ref<SaslRecordResponse[]>([]);
const selectedLeadRecords = ref<SaslRecordResponse[]>([]);
const selectedAvailableRecordIds = ref<number[]>([]);
const selectedLeadRecordIds = ref<number[]>([]);
const selectedAssignUserId = ref<number | null>(null);
const availableSearchText = ref('');
const selectedSearchText = ref('');

// 编辑公告对话框显示状态
const editingAnnouncementDialog = computed({
  get: () => editingAnnouncement.value !== null,
  set: (value: boolean) => {
    if (!value) {
      closeEditAnnouncementDialog();
    }
  },
});

// 根据用户选择的文档标题生成文件列表（显示所有文档标题，已绑定的会标记）
const availableFiles = computed(() => {
  if (!selectedUserId.value || userDocumentTitles.value.length === 0) {
    return [];
  }
  
  // 将所有文档标题转换为文件列表格式
  return userDocumentTitles.value.map((item, index) => ({
    id: selectedUserId.value! * 10000 + index, // 生成唯一ID
    fileName: item.title,
    originalFileName: item.title, // 使用文档标题作为文件名
    fileSize: 0, // 文档标题没有文件大小信息
    uploadTime: new Date().toISOString(), // 使用当前时间作为占位
    documentTitle: item.title, // 保存文档标题用于后续操作
    selected: item.selected, // 保存选中状态
  }));
});

// 用户名验证规则 - 只能是数字和字母，长度3-30位
const usernameRules = [
  (v: string) => !!v || '用戶名為必填項',
  (v: string) => {
    if (!v) return true;
    // 长度检查：3-30位
    if (v.length < 3) return '用戶名長度至少為3位';
    if (v.length > 30) return '用戶名長度不能超過30位';
    // 只能包含数字和字母
    if (!/^[A-Za-z0-9]+$/.test(v)) {
      return '用戶名只能包含數字和字母';
    }
    return true;
  },
];

// 密码验证规则 - 采用主流安全最佳实践
const passwordRules = [
  (v: string) => !!v || '密碼為必填項',
  (v: string) => {
    if (!v) return true;
    // 长度检查：8-32位
    if (v.length < 8) return '密碼長度至少為8位';
    if (v.length > 32) return '密碼長度不能超過32位';
    // 必须包含大写字母
    if (!/[A-Z]/.test(v)) return '密碼必須包含至少一個大寫字母';
    // 必须包含小写字母
    if (!/[a-z]/.test(v)) return '密碼必須包含至少一個小寫字母';
    // 必须包含数字
    if (!/[0-9]/.test(v)) return '密碼必須包含至少一個數字';
    // 必须包含特殊字符
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(v)) {
      return '密碼必須包含至少一個特殊字符（如 !@#$%^&* 等）';
    }
    // 不能与用户名相同
    if (userForm.value.username && v.toLowerCase() === userForm.value.username.toLowerCase()) {
      return '密碼不能與用戶名相同';
    }
    return true;
  },
];

// 格式化文件大小
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
};

// 格式化日期
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

// 处理文件选择
const handleFileChange = (files: File | File[] | null) => {
  if (Array.isArray(files)) {
    uploadFile.value = files[0] ?? null;
    return;
  }
  uploadFile.value = files;
};

// 处理文件选择后的操作（验证并打开对话框）
const handleFileSelect = () => {
  validateAndOpenUploadDialog();
};

// 处理文件勾选切换（支持绑定和解绑）
const handleFileToggle = (fileId: number, checked: boolean, isCurrentlyBound: boolean) => {
  if (checked) {
    // 勾选：添加到选中列表
    if (!selectedFileIds.value.includes(fileId)) {
      selectedFileIds.value.push(fileId);
    }
  } else {
    // 取消勾选：从选中列表移除（无论是否已绑定，都可以取消勾选以解绑）
    const index = selectedFileIds.value.indexOf(fileId);
    if (index > -1) {
      selectedFileIds.value.splice(index, 1);
    }
  }
};

// 处理移除列
const handleRemoveColumn = (index: number) => {
  if (planSectionEditForm.value.columns.length <= 1) {
    return;
  }
  // 移除列
  planSectionEditForm.value.columns.splice(index, 1);
  // 同时移除所有行的对应值
  planSectionEditForm.value.rows.forEach((row) => {
    if (row.values.length > index) {
      row.values.splice(index, 1);
    }
  });
};

// 处理添加行
const handleAddRow = () => {
  if (planSectionEditForm.value.columns.length === 0) {
    snackbar.show({ message: '請先添加列', color: 'warning' });
    return;
  }
  planSectionEditForm.value.rows.push({
    label: '',
    values: new Array(planSectionEditForm.value.columns.length).fill(''),
    sortOrder: planSectionEditForm.value.rows.length,
  });
};

// 清空选中的文档数据
const clearSelectedDocument = () => {
  selectedImportRecord.value = null;
  selectedDocumentTitle.value = null;
  documentRecords.value = [];
};

// 处理文档标题点击事件，调用 /api/sasl/config/records/by-document-title 接口获取对应标题下的所有记录
const handleDocumentTitleClick = async (documentTitle: string, importRecords: any[]) => {
  if (!documentTitle || !documentTitle.trim()) {
    snackbar.show({ message: '文档标题不能为空', color: 'warning' });
    return;
  }

  loadingDocuments.value = true;
  try {
    // 调用 /api/sasl/config/records/by-document-title 接口，传入 documentTitle 参数获取该标题下的所有记录
    const records = await getRecordsByDocumentTitle(documentTitle.trim());
    
    // 使用第一个导入记录作为选中记录（如果有的话）
    selectedImportRecord.value = importRecords.length > 0 ? importRecords[0] : null;
    selectedDocumentTitle.value = documentTitle.trim();
    documentRecords.value = records;
    snackbar.show({ message: '文档数据加载成功', color: 'success' });
  } catch (error: any) {
    console.error('加载文档数据失败', error);
    let errorMessage = '加载文档数据失败，请稍后重试';
    if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
      errorMessage = String(error.payload.message);
    }
    snackbar.show({ message: errorMessage, color: 'error' });
    selectedImportRecord.value = null;
    selectedDocumentTitle.value = null;
    documentRecords.value = [];
  } finally {
    loadingDocuments.value = false;
  }
};

// 处理导出文档记录到 Excel
const handleExportDocument = async (documentTitle: string) => {
  if (!documentTitle || !documentTitle.trim()) {
    snackbar.show({ message: '文档标题不能为空', color: 'warning' });
    return;
  }

  exporting.value = true;
  try {
    // 调用导出接口获取 Excel 文件
    const url = new URL(`${BASE_URL}/records/export`, window.location.origin);
    url.searchParams.set('documentTitle', documentTitle.trim());
    
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
    
    // 获取文件 blob
    const blob = await response.blob();
    
    // 尝试从响应头获取文件名
    const contentDisposition = response.headers.get('Content-Disposition');
    let fileName = `SASL_${documentTitle.trim()}_${new Date().getTime()}.xlsx`;
    
    if (contentDisposition) {
      // 尝试解析 filename 或 filename* 参数
      const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
      if (filenameMatch && filenameMatch[1]) {
        fileName = filenameMatch[1].replace(/['"]/g, '');
        // 处理 UTF-8 编码的文件名 (filename*=UTF-8''...)
        if (fileName.startsWith("UTF-8''")) {
          fileName = decodeURIComponent(fileName.substring(7));
        }
      }
    }
    
    // 创建下载链接
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    
    // 触发下载
    document.body.appendChild(link);
    link.click();
    
    // 清理
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
    
    snackbar.show({ message: '导出成功', color: 'success' });
  } catch (error: any) {
    console.error('导出失败', error);
    const errorMessage = error?.message || '导出失败，请稍后重试';
    snackbar.show({ message: errorMessage, color: 'error' });
  } finally {
    exporting.value = false;
  }
};

// 监听列数量变化，自动调整所有行的值数量
watch(
  () => planSectionEditForm.value.columns.length,
  (newLength, oldLength) => {
    if (oldLength !== undefined && newLength !== oldLength) {
      planSectionEditForm.value.rows.forEach((row) => {
        if (newLength > row.values.length) {
          // 添加缺失的值
          while (row.values.length < newLength) {
            row.values.push('');
          }
        } else if (newLength < row.values.length) {
          // 移除多余的值
          row.values = row.values.slice(0, newLength);
        }
      });
    }
  }
);

// 监听用户选择变化，加载用户文件清单
watch(selectedUserId, async (newUserId, oldUserId) => {
  // 切换用户时立即清空文件选择，避免显示上一个用户的勾选状态
  selectedFileIds.value = [];
  
  if (newUserId) {
    // 如果切换到新用户，先清空文档标题列表，避免显示旧用户的文档
    userDocumentTitles.value = [];
    // 等待 DOM 更新，确保 checkbox 状态正确重置
    await nextTick();
    // 加载该用户的文档标题
    await loadUserDocumentTitles(newUserId);
    // 加载完成后，根据绑定状态自动勾选已绑定的文档
    // 这个逻辑会在下面的 watch 中处理
  } else {
    // 清空用户文件清单
    userDocumentTitles.value = [];
    // 等待 DOM 更新
    await nextTick();
  }
});

// 监听文档标题变化，更新已选中的文件ID列表（根据已绑定的文档标题）
watch(
  [userDocumentTitles, selectedUserId],
  ([newTitles, userId], [oldTitles, oldUserId]) => {
    if (!userId || !newTitles || newTitles.length === 0) {
      selectedFileIds.value = [];
      return;
    }
    
    // 将已绑定的文档标题对应的文件ID添加到选中列表
    const boundFileIds: number[] = [];
    newTitles.forEach((titleItem, index) => {
      if (titleItem.selected) {
        const fileId = userId * 10000 + index;
        boundFileIds.push(fileId);
      }
    });
    
    // 如果用户ID发生变化，完全根据新用户的绑定状态来设置选中列表
    if (oldUserId !== undefined && userId !== oldUserId) {
      // 用户切换：只根据新用户的绑定状态设置，不保留任何手动选择
      // 确保清空所有旧用户的选中项，只保留新用户已绑定的项
      selectedFileIds.value = [...boundFileIds];
      return;
    }
    
    // 同一用户下：获取当前用户的所有文件ID集合
    const currentUserFileIds = new Set(
      availableFiles.value.map((file) => file.id)
    );
    
    // 保留用户手动选择的项（只保留属于当前用户且未绑定的项）
    const manuallySelected = selectedFileIds.value.filter(
      (id) => currentUserFileIds.has(id) && // 确保ID属于当前用户
      !boundFileIds.includes(id) && // 不是已绑定的项
      availableFiles.value.some((file) => file.id === id && !file.selected) // 是未绑定的项
    );
    
    // 合并已绑定的项和用户手动选择的项（去重）
    const allSelectedIds = new Set([...boundFileIds, ...manuallySelected]);
    const newSelectedIds = Array.from(allSelectedIds);
    
    // 只有当列表发生变化时才更新，避免循环更新
    const currentSorted = [...selectedFileIds.value].sort((a, b) => a - b);
    const newSorted = [...newSelectedIds].sort((a, b) => a - b);
    
    if (JSON.stringify(newSorted) !== JSON.stringify(currentSorted)) {
      selectedFileIds.value = newSelectedIds;
    }
  },
  { deep: true, immediate: false }
);

// 监听套餐方案列表变化，设置默认选中的tab
watch(
  planSections,
  (newSections) => {
    if (newSections.length > 0 && !activePlanTab.value) {
      activePlanTab.value = newSections[0].planId || String(newSections[0].id);
    }
  },
  { immediate: true }
);

// 过滤可用线索
const filteredAvailableRecords = computed(() => {
  if (!availableSearchText.value) {
    return availableLeadRecords.value;
  }
  const search = availableSearchText.value.toLowerCase();
  return availableLeadRecords.value.filter(record => 
    (record.mrt && record.mrt.toLowerCase().includes(search)) ||
    (record.oldContract && record.oldContract.toLowerCase().includes(search)) ||
    (record.sales && record.sales.toLowerCase().includes(search)) ||
    (record.category && record.category.toLowerCase().includes(search)) ||
    (record.lastTurnNetworkMonth && record.lastTurnNetworkMonth.toLowerCase().includes(search))
  );
});

// 过滤已选线索
const filteredSelectedRecords = computed(() => {
  if (!selectedSearchText.value) {
    return selectedLeadRecords.value;
  }
  const search = selectedSearchText.value.toLowerCase();
  return selectedLeadRecords.value.filter(record => 
    (record.mrt && record.mrt.toLowerCase().includes(search)) ||
    (record.oldContract && record.oldContract.toLowerCase().includes(search)) ||
    (record.sales && record.sales.toLowerCase().includes(search)) ||
    (record.category && record.category.toLowerCase().includes(search)) ||
    (record.lastTurnNetworkMonth && record.lastTurnNetworkMonth.toLowerCase().includes(search))
  );
});

// 加载所有线索记录
const loadLeadRecords = async () => {
  loadingLeadRecords.value = true;
  try {
    const records = await getAllLeadRecords();
    // 初始化时，所有记录都在可用列表中
    availableLeadRecords.value = records;
    selectedLeadRecords.value = [];
    selectedAvailableRecordIds.value = [];
    selectedLeadRecordIds.value = [];
    snackbar.show({ message: `成功加載 ${records.length} 條線索記錄`, color: 'success' });
  } catch (error: any) {
    console.error('加载线索记录失败', error);
    let errorMessage = '加载线索记录失败，请稍后重试';
    if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
      errorMessage = String(error.payload.message);
    }
    snackbar.show({ message: errorMessage, color: 'error' });
  } finally {
    loadingLeadRecords.value = false;
  }
};

// 切换可用记录的选择状态
const toggleAvailableRecord = (recordId: number) => {
  const index = selectedAvailableRecordIds.value.indexOf(recordId);
  if (index > -1) {
    selectedAvailableRecordIds.value.splice(index, 1);
  } else {
    selectedAvailableRecordIds.value.push(recordId);
  }
};

// 切换已选记录的选择状态
const toggleSelectedRecord = (recordId: number) => {
  const index = selectedLeadRecordIds.value.indexOf(recordId);
  if (index > -1) {
    selectedLeadRecordIds.value.splice(index, 1);
  } else {
    selectedLeadRecordIds.value.push(recordId);
  }
};

// 移动到已选列表
const moveToSelected = () => {
  const recordsToMove = availableLeadRecords.value.filter(record => 
    selectedAvailableRecordIds.value.includes(record.id)
  );
  selectedLeadRecords.value.push(...recordsToMove);
  availableLeadRecords.value = availableLeadRecords.value.filter(record => 
    !selectedAvailableRecordIds.value.includes(record.id)
  );
  selectedAvailableRecordIds.value = [];
};

// 全部移动到已选列表
const moveAllToSelected = () => {
  selectedLeadRecords.value.push(...filteredAvailableRecords.value);
  const idsToRemove = new Set(filteredAvailableRecords.value.map(r => r.id));
  availableLeadRecords.value = availableLeadRecords.value.filter(record => 
    !idsToRemove.has(record.id)
  );
  selectedAvailableRecordIds.value = [];
};

// 移回可用列表
const moveToAvailable = () => {
  const recordsToMove = selectedLeadRecords.value.filter(record => 
    selectedLeadRecordIds.value.includes(record.id)
  );
  availableLeadRecords.value.push(...recordsToMove);
  selectedLeadRecords.value = selectedLeadRecords.value.filter(record => 
    !selectedLeadRecordIds.value.includes(record.id)
  );
  selectedLeadRecordIds.value = [];
};

// 全部移回可用列表
const moveAllToAvailable = () => {
  availableLeadRecords.value.push(...selectedLeadRecords.value);
  selectedLeadRecords.value = [];
  selectedLeadRecordIds.value = [];
};

// 分配线索给用户
const handleAssignLeadRecords = async () => {
  if (!selectedAssignUserId.value) {
    snackbar.show({ message: '請選擇要分配的用戶', color: 'warning' });
    return;
  }

  if (selectedLeadRecords.value.length === 0) {
    snackbar.show({ message: '請選擇要分配的線索', color: 'warning' });
    return;
  }

  assigning.value = true;
  try {
    const recordIds = selectedLeadRecords.value.map(record => record.id);
    await assignLeadRecordsToUser({
      userId: selectedAssignUserId.value,
      recordIds: recordIds,
    });
    
    snackbar.show({ 
      message: `成功分配 ${recordIds.length} 條線索給用戶`, 
      color: 'success' 
    });
    
    // 分配成功后，清空已选列表
    availableLeadRecords.value.push(...selectedLeadRecords.value);
    selectedLeadRecords.value = [];
    selectedLeadRecordIds.value = [];
  } catch (error: any) {
    console.error('分配线索失败', error);
    let errorMessage = '分配线索失败，请稍后重试';
    if (error?.payload && typeof error.payload === 'object' && 'message' in error.payload) {
      errorMessage = String(error.payload.message);
    }
    snackbar.show({ message: errorMessage, color: 'error' });
  } finally {
    assigning.value = false;
  }
};

// 初始化加载数据
onMounted(() => {
  loadAllData();
  loadPlanSections();
  loadDocuments();
  loadAnnouncements();
  loadLeadRecords();
});
</script>

<style scoped lang="scss">
@import '../styles/saslForm.scss';
@import '../styles/saslConfig.scss';
</style>
