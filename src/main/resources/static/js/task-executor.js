// 统一的任务执行控制器
class TaskExecutor {
    // 静态属性：存储所有平台的实例
    static instances = {};

    constructor(platform, apiPrefix, elementPrefix, configProvider, uiHelper) {
        console.log(`[${platform}] 创建 TaskExecutor 实例`);
        
        this.platform = platform; // 'boss', 'job51', 'liepin', 'zhilian'
        this.apiPrefix = apiPrefix; // '/api/boss', '/api/job51', etc.
        this.elementPrefix = elementPrefix; // 'boss', 'job51', etc. 用于元素ID前缀
        this.configProvider = configProvider; // 提供getCurrentConfig()方法的对象
        this.uiHelper = uiHelper; // 提供showToast等UI方法的对象
        
        this.taskStates = {
            loginTaskId: null,
            collectTaskId: null,
            filterTaskId: null,
            applyTaskId: null
        };
        
        this.statusPollingInterval = null;
        this.latestTaskStatus = null;
        
        // 注册实例到全局
        TaskExecutor.instances[platform] = this;
        console.log(`[${platform}] 实例已注册到全局`);
        
        this.init();
    }

    init() {
        console.log(`[${this.platform}] TaskExecutor 初始化开始`);
        console.log(`[${this.platform}] - apiPrefix: ${this.apiPrefix}`);
        console.log(`[${this.platform}] - elementPrefix: ${this.elementPrefix}`);
        
        this.bindEvents();
        
        // Boss和智联启动状态轮询，其他平台按需启动
        if (this.platform === 'boss' || this.platform === 'zhilian') {
            console.log(`[${this.platform}] 启动状态轮询`);
            this.startStatusPolling();
            
            // 延迟检查登录状态并启用按钮
            setTimeout(async () => {
                console.log(`[${this.platform}] 检查初始登录状态`);
                if (await this.isLoggedIn()) {
                    console.log(`[${this.platform}] 已登录，启用后续步骤按钮`);
                    this.enableAllNextSteps();
                }
            }, 1000);
        }
        
        console.log(`[${this.platform}] TaskExecutor 初始化完成`);
    }

    // 获取按钮ID的辅助方法
    getButtonId(buttonType) {
        if (this.platform === 'boss') {
            // Boss平台无前缀，且投递按钮叫deliverBtn
            const buttonMap = {
                'login': 'loginBtn',
                'collect': 'collectBtn',
                'filter': 'filterBtn',
                'apply': 'deliverBtn',
                'deliver': 'deliverBtn'
            };
            return buttonMap[buttonType] || `${buttonType}Btn`;
        } else {
            // 其他平台有前缀，投递按钮叫ApplyBtn
            const prefix = this.elementPrefix;
            const buttonMap = {
                'login': `${prefix}LoginBtn`,
                'collect': `${prefix}CollectBtn`,
                'filter': `${prefix}FilterBtn`,
                'apply': `${prefix}ApplyBtn`,
                'deliver': `${prefix}ApplyBtn`
            };
            return buttonMap[buttonType] || `${prefix}${buttonType.charAt(0).toUpperCase() + buttonType.slice(1)}Btn`;
        }
    }

    // 获取状态ID的辅助方法
    getStatusId(statusType) {
        if (this.platform === 'boss') {
            // Boss平台无前缀，且投递状态叫deliverStatus
            const statusMap = {
                'login': 'loginStatus',
                'collect': 'collectStatus',
                'filter': 'filterStatus',
                'apply': 'deliverStatus',
                'deliver': 'deliverStatus'
            };
            return statusMap[statusType] || `${statusType}Status`;
        } else {
            // 其他平台有前缀，投递状态叫ApplyStatus
            const prefix = this.elementPrefix;
            const statusMap = {
                'login': `${prefix}LoginStatus`,
                'collect': `${prefix}CollectStatus`,
                'filter': `${prefix}FilterStatus`,
                'apply': `${prefix}ApplyStatus`,
                'deliver': `${prefix}ApplyStatus`
            };
            return statusMap[statusType] || `${prefix}${statusType.charAt(0).toUpperCase() + statusType.slice(1)}Status`;
        }
    }

    bindEvents() {
        console.log(`[${this.platform}] 开始绑定事件，元素前缀: ${this.elementPrefix}`);
        
        // 登录按钮 - 仅用于显示登录检查结果，不绑定点击事件
        // const loginBtn = document.getElementById(this.getButtonId('login'));
        // if (loginBtn) {
        //     loginBtn.addEventListener('click', () => this.handleLogin());
        // }
        
        // 采集按钮
        const collectBtnId = this.getButtonId('collect');
        const collectBtn = document.getElementById(collectBtnId);
        console.log(`[${this.platform}] 查找采集按钮 #${collectBtnId}:`, collectBtn ? '找到' : '未找到');
        if (collectBtn) {
            collectBtn.addEventListener('click', () => {
                console.log(`[${this.platform}] 采集按钮被点击`);
                this.handleCollect();
            });
            console.log(`[${this.platform}] 采集按钮事件绑定成功`);
        }
        
        // 过滤按钮
        const filterBtnId = this.getButtonId('filter');
        const filterBtn = document.getElementById(filterBtnId);
        console.log(`[${this.platform}] 查找过滤按钮 #${filterBtnId}:`, filterBtn ? '找到' : '未找到');
        if (filterBtn) {
            filterBtn.addEventListener('click', () => {
                console.log(`[${this.platform}] 过滤按钮被点击`);
                this.handleFilter();
            });
            console.log(`[${this.platform}] 过滤按钮事件绑定成功`);
        }
        
        // 投递按钮
        const applyBtnId = this.getButtonId('apply');
        const applyBtn = document.getElementById(applyBtnId);
        console.log(`[${this.platform}] 查找投递按钮 #${applyBtnId}:`, applyBtn ? '找到' : '未找到');
        if (applyBtn) {
            applyBtn.addEventListener('click', () => {
                console.log(`[${this.platform}] 投递按钮被点击`);
                this.handleApply();
            });
            console.log(`[${this.platform}] 投递按钮事件绑定成功`);
        }
        
        console.log(`[${this.platform}] 事件绑定完成`);
    }

    // 处理登录
    async handleLogin() {
        if (this.platform === 'boss' && !this.validateRequiredFields()) {
            this.uiHelper.showAlertModal('验证失败', '请先完善必填项');
            return;
        }
        
        if ((this.platform === 'job51' || this.platform === 'zhilian') && !this.validateRequiredFields()) {
            this.uiHelper.showAlertModal('验证失败', '请先完善必填项');
            return;
        }

        const buttonId = this.getButtonId('login');
        const statusId = this.getStatusId('login');
        
        this.updateButtonState(buttonId, statusId, '执行中...', true, 'warning');

        try {
            const config = this.configProvider.getCurrentConfig();
            const response = await fetch(`${this.apiPrefix}/task/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
            });

            const result = await response.json();

            if (result.success) {
                this.taskStates.loginTaskId = result.taskId;
                this.uiHelper.showToast(`${this.getPlatformName()}登录任务已提交`);
                // 启动状态轮询
                this.startStatusPolling();
            } else {
                this.updateButtonState(buttonId, statusId, '登录失败', false, 'danger');
                this.uiHelper.showToast(result.message || '登录失败', 'danger');
            }
        } catch (error) {
            this.updateButtonState(buttonId, statusId, '登录失败', false, 'danger');
            this.uiHelper.showToast('登录接口调用失败: ' + error.message, 'danger');
        }
    }

    // 处理采集
    async handleCollect() {
        console.log(`[${this.platform}] handleCollect 被调用，准备检查登录状态`);
        // 所有平台都需要检查登录状态
        const loggedIn = await this.isLoggedIn();
        console.log(`[${this.platform}] handleCollect 登录状态检查结果:`, loggedIn);
        
        if (!loggedIn) {
            console.log(`[${this.platform}] handleCollect 登录检查失败，中止操作`);
            this.uiHelper.showAlertModal('操作提示', '请先完成登录步骤');
            return;
        }
        
        console.log(`[${this.platform}] handleCollect 登录检查通过，继续执行`);
    

        const buttonId = this.getButtonId('collect');
        const statusId = this.getStatusId('collect');
        
        this.updateButtonState(buttonId, statusId, '采集中...', true, 'warning');

        try {
            const config = this.configProvider.getCurrentConfig();
            const response = await fetch(`${this.apiPrefix}/task/collect`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
            });

            const result = await response.json();

            if (result.success) {
                this.taskStates.collectTaskId = result.taskId;
                this.uiHelper.showToast(`${this.getPlatformName()}采集任务已提交`);
                // 启动状态轮询
                this.startStatusPolling();
            } else {
                this.updateButtonState(buttonId, statusId, '采集失败', false, 'danger');
                this.uiHelper.showToast(result.message || '采集失败', 'danger');
            }
        } catch (error) {
            this.updateButtonState(buttonId, statusId, '采集失败', false, 'danger');
            this.uiHelper.showToast('采集接口调用失败: ' + error.message, 'danger');
        }
    }

    // 处理过滤
    async handleFilter() {
        console.log(`[${this.platform}] handleFilter 被调用，准备检查登录状态`);
        // 所有平台都需要检查登录状态
        const loggedIn = await this.isLoggedIn();
        console.log(`[${this.platform}] handleFilter 登录状态检查结果:`, loggedIn);
        
        if (!loggedIn) {
            console.log(`[${this.platform}] handleFilter 登录检查失败，中止操作`);
            this.uiHelper.showAlertModal('操作提示', '请先完成登录步骤');
            return;
        }
        
        console.log(`[${this.platform}] handleFilter 登录检查通过，继续执行`);
    

        const buttonId = this.getButtonId('filter');
        const statusId = this.getStatusId('filter');
        
        this.updateButtonState(buttonId, statusId, '过滤中...', true, 'warning');

        try {
            const config = this.configProvider.getCurrentConfig();
            const request = {
                collectTaskId: this.taskStates.collectTaskId,
                config: config
            };

            const response = await fetch(`${this.apiPrefix}/task/filter`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            });

            const result = await response.json();

            if (result.success) {
                this.taskStates.filterTaskId = result.taskId;
                this.uiHelper.showToast(`${this.getPlatformName()}过滤任务已提交`);
                // 启动状态轮询
                this.startStatusPolling();
            } else {
                this.updateButtonState(buttonId, statusId, '过滤失败', false, 'danger');
                this.uiHelper.showToast(result.message || '过滤失败', 'danger');
            }
        } catch (error) {
            this.updateButtonState(buttonId, statusId, '过滤失败', false, 'danger');
            this.uiHelper.showToast('过滤接口调用失败: ' + error.message, 'danger');
        }
    }

    // 处理投递
    async handleApply() {
        console.log(`[${this.platform}] ==================== handleApply 被调用 ====================`);
        console.log(`[${this.platform}] handleApply 准备检查登录状态`);
        
        // 所有平台都需要检查登录状态
        const loggedIn = await this.isLoggedIn();
        console.log(`[${this.platform}] handleApply 登录状态检查结果:`, loggedIn);
        
        if (!loggedIn) {
            console.error(`[${this.platform}] ✗✗✗ handleApply 登录检查失败，中止投递操作 ✗✗✗`);
            this.uiHelper.showAlertModal('操作提示', '请先完成登录步骤');
            return;
        }
        
        console.log(`[${this.platform}] ✓✓✓ handleApply 登录检查通过，显示投递确认对话框 ✓✓✓`);

        this.uiHelper.showConfirmModal(
            '投递确认',
            '是否执行实际投递？\n点击"确定"将真实投递简历\n点击"取消"将仅模拟投递',
            () => this.executeApply(true),
            () => this.executeApply(false)
        );
    }

    // 执行投递
    async executeApply(enableActualDelivery) {
        const buttonId = this.getButtonId('apply');
        const statusId = this.getStatusId('apply');
        
        this.updateButtonState(buttonId, statusId, '投递中...', true, 'warning');

        try {
            const config = this.configProvider.getCurrentConfig();
            const request = {
                filterTaskId: this.taskStates.filterTaskId,
                config: config,
                enableActualDelivery: enableActualDelivery
            };

            const response = await fetch(`${this.apiPrefix}/task/deliver`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            });

            const result = await response.json();

            if (result.success) {
                this.taskStates.applyTaskId = result.taskId;
                const deliveryType = enableActualDelivery ? '实际投递' : '模拟投递';
                this.uiHelper.showToast(`${this.getPlatformName()}${deliveryType}任务已提交`);
                // 启动状态轮询
                this.startStatusPolling();
            } else {
                this.updateButtonState(buttonId, statusId, '投递失败', false, 'danger');
                this.uiHelper.showToast(result.message || '投递失败', 'danger');
            }
        } catch (error) {
            this.updateButtonState(buttonId, statusId, '投递失败', false, 'danger');
            this.uiHelper.showToast('投递接口调用失败: ' + error.message, 'danger');
        }
    }


    // 启动状态轮询
    startStatusPolling() {
        if (this.statusPollingInterval) {
            return; // 已经在轮询中
        }
        
        console.log(`${this.getPlatformName()}: 启动任务状态轮询`);
        this.statusPollingInterval = setInterval(() => {
            this.fetchAllTaskStatus();
        }, 2000); // 每2秒轮询一次
        
        // 立即执行一次
        this.fetchAllTaskStatus();
    }

    // 停止状态轮询
    stopStatusPolling() {
        if (this.statusPollingInterval) {
            console.log(`${this.getPlatformName()}: 停止任务状态轮询`);
            clearInterval(this.statusPollingInterval);
            this.statusPollingInterval = null;
        }
    }

    // 查询所有任务状态
    async fetchAllTaskStatus() {
        try {
            const response = await fetch('/api/tasks/status');
            if (!response.ok) return;
            
            const result = await response.json();
            if (!result) return;
            
            // 根据不同平台转换状态键名
            const platformKeyMap = {
                'boss': {
                    login: 'BOSS_ZHIPIN_LOGIN',
                    collect: 'BOSS_ZHIPIN_COLLECT',
                    filter: 'BOSS_ZHIPIN_FILTER',
                    deliver: 'BOSS_ZHIPIN_DELIVER'
                },
                'zhilian': {
                    login: 'ZHILIAN_ZHAOPIN_LOGIN',
                    collect: 'ZHILIAN_ZHAOPIN_COLLECT',
                    filter: 'ZHILIAN_ZHAOPIN_FILTER',
                    deliver: 'ZHILIAN_ZHAOPIN_DELIVER'
                },
                'job51': {
                    login: 'JOB_51_LOGIN',
                    collect: 'JOB_51_COLLECT',
                    filter: 'JOB_51_FILTER',
                    deliver: 'JOB_51_DELIVER'
                },
                'liepin': {
                    login: 'LIEPIN_LOGIN',
                    collect: 'LIEPIN_COLLECT',
                    filter: 'LIEPIN_FILTER',
                    deliver: 'LIEPIN_DELIVER'
                }
            };
            
            const keyMap = platformKeyMap[this.platform];
            if (!keyMap) return;
            
            const platformStatus = {
                login: result[keyMap.login],
                collect: result[keyMap.collect],
                filter: result[keyMap.filter],
                deliver: result[keyMap.deliver]
            };
            
            console.log(`${this.getPlatformName()}: 任务状态数据（转换后）:`, platformStatus);
            
            // 缓存最新的任务状态
            console.log(`[${this.platform}] 准备更新 latestTaskStatus 缓存`);
            console.log(`[${this.platform}] 旧缓存:`, this.latestTaskStatus);
            this.latestTaskStatus = platformStatus;
            console.log(`[${this.platform}] 新缓存:`, this.latestTaskStatus);
            console.log(`[${this.platform}] 登录状态缓存:`, this.latestTaskStatus?.login);
            
            this.updateTaskStatusUI(platformStatus);
            
        } catch (error) {
            console.warn(`${this.getPlatformName()}: 查询任务状态失败:`, error);
        }
    }

    // 更新任务状态UI
    updateTaskStatusUI(statusData) {
        if (statusData.login) {
            this.updateTaskUI('login', statusData.login);
        }
        
        if (statusData.collect) {
            this.updateTaskUI('collect', statusData.collect);
        }
        
        if (statusData.filter) {
            this.updateTaskUI('filter', statusData.filter);
        }
        
        if (statusData.deliver) {
            this.updateTaskUI('deliver', statusData.deliver);
        }
    }

    // 更新单个任务的UI
    updateTaskUI(taskType, taskStatus) {
        // 使用辅助方法统一获取按钮和状态ID
        const buttonMap = {
            'login': { btn: this.getButtonId('login'), status: this.getStatusId('login') },
            'collect': { btn: this.getButtonId('collect'), status: this.getStatusId('collect') },
            'filter': { btn: this.getButtonId('filter'), status: this.getStatusId('filter') },
            'deliver': { btn: this.getButtonId('apply'), status: this.getStatusId('apply') }
        };
        
        const uiElements = buttonMap[taskType];
        if (!uiElements) return;
        
        const state = taskStatus.status || taskStatus.state;
        const message = taskStatus.message || '';
        
        console.log(`${this.getPlatformName()}: 更新${taskType}任务UI，状态=${state}，消息=${message}`);
        
        // 同步更新 latestTaskStatus 缓存，确保 isLoggedIn() 能获取到最新状态
        if (!this.latestTaskStatus) {
            this.latestTaskStatus = {};
        }
        this.latestTaskStatus[taskType] = taskStatus;
        console.log(`${this.getPlatformName()}: 已更新 latestTaskStatus.${taskType}:`, taskStatus);
        
        switch (state) {
            case 'STARTED':
            case 'RUNNING':
                // 只更新状态显示，不禁用按钮（除了登录按钮）
                if (taskType === 'login') {
                    this.updateButtonState(uiElements.btn, uiElements.status, message || '执行中...', true, 'warning');
                } else {
                    // 采集、过滤、投递按钮在执行时也禁用，但完成后会根据登录状态重新启用
                    this.updateButtonState(uiElements.btn, uiElements.status, message || '执行中...', true, 'warning');
                }
                break;
            case 'SUCCESS':
                // 任务完成后，如果已登录，重新启用按钮
                if (taskType === 'login') {
                    console.log(`[${this.platform}] 检测到登录任务成功，准备处理`);
                    this.updateButtonState(uiElements.btn, uiElements.status, message || '完成', false, 'success');
                    console.log(`[${this.platform}] 调用 handleLoginSuccess`);
                    this.handleLoginSuccess();
                } else {
                    console.log(`[${this.platform}] ${taskType} 任务成功完成`);
                    // 采集、过滤、投递任务完成后，只要已登录就重新启用按钮
                    this.updateButtonState(uiElements.btn, uiElements.status, message || '完成', false, 'success');
                    // 重新启用所有后续步骤按钮
                    this.isLoggedIn().then(loggedIn => {
                        console.log(`[${this.platform}] ${taskType} 完成后检查登录状态:`, loggedIn);
                        if (loggedIn) {
                            console.log(`[${this.platform}] 已登录，重新启用所有后续步骤`);
                            this.enableAllNextSteps();
                        } else {
                            console.log(`[${this.platform}] 未登录，不启用后续步骤`);
                        }
                    });
                }
                // 如果投递任务完成，停止轮询
                if (taskType === 'deliver') {
                    console.log(`[${this.platform}] 投递任务完成，停止轮询`);
                    this.stopStatusPolling();
                }
                break;
            case 'FAILED':
            case 'FAILURE':
                // 任务失败后，如果已登录，重新启用按钮
                if (taskType === 'login') {
                    this.updateButtonState(uiElements.btn, uiElements.status, message || '失败', false, 'danger');
                    this.handleLoginFailure();
                } else {
                    this.updateButtonState(uiElements.btn, uiElements.status, message || '失败', false, 'danger');
                    // 重新启用所有后续步骤按钮（只要已登录）
                    this.isLoggedIn().then(loggedIn => {
                        if (loggedIn) {
                            this.enableAllNextSteps();
                        }
                    });
                }
                this.stopStatusPolling();
                break;
            case 'PENDING':
                // 待执行状态，保持默认
                break;
        }
    }

    // 更新按钮状态
    updateButtonState(buttonId, statusId, statusText, isLoading, statusType = 'warning') {
        const button = document.getElementById(buttonId);
        const status = document.getElementById(statusId);

        if (button) {
            // 登录按钮始终保持禁用状态，仅用于显示登录检查结果
            const isLoginButton = buttonId === this.getButtonId('login');
            
            if (isLoginButton) {
                button.disabled = true; // 登录按钮始终禁用
            } else {
                button.disabled = isLoading;
            }
        }

        if (status) {
            status.textContent = statusText;
            const statusClasses = {
                'warning': 'badge bg-warning text-dark ms-2',
                'success': 'badge bg-success text-white ms-2',
                'danger': 'badge bg-danger text-white ms-2',
                'info': 'badge bg-info text-white ms-2',
                'default': 'badge bg-light text-dark ms-2'
            };
            status.className = statusClasses[statusType] || statusClasses['default'];
        }
    }

    // 启用下一步按钮
    enableNextStep(buttonId, statusId, statusText) {
        console.log(`[${this.platform}] enableNextStep 被调用:`, { buttonId, statusId, statusText });
        const button = document.getElementById(buttonId);
        const status = document.getElementById(statusId);

        console.log(`[${this.platform}] 按钮元素:`, button, '当前disabled状态:', button?.disabled);
        console.log(`[${this.platform}] 状态元素:`, status, '当前文本:', status?.textContent);
        
        if (button) {
            // 检查按钮当前是否处于禁用状态
            // 如果按钮当前是启用状态（disabled=false），说明可能正在执行任务或已经是可用状态
            // 此时不应该强制修改状态，避免覆盖任务执行中的状态
            if (!button.disabled) {
                console.log(`[${this.platform}] 按钮 ${buttonId} 当前已启用，跳过状态修改`);
                return;
            }
            
            button.disabled = false;
            console.log(`[${this.platform}] 按钮 ${buttonId} 已启用，新disabled状态:`, button.disabled);
        } else {
            console.warn(`[${this.platform}] 未找到按钮元素: ${buttonId}`);
        }

        if (status) {
            // 只有当当前状态文本为"等待登录"时，才更新为"可开始某某动作"
            if (status.textContent === '等待登录') {
                status.textContent = statusText;
                status.className = 'badge bg-info text-white ms-2';
                console.log(`[${this.platform}] 状态 ${statusId} 已从"等待登录"更新为"${statusText}"`);
            } else {
                console.log(`[${this.platform}] 状态 ${statusId} 当前不是"等待登录"(当前: "${status.textContent}")，跳过更新`);
            }
        } else {
            console.warn(`[${this.platform}] 未找到状态元素: ${statusId}`);
        }
    }

    // 检查是否已登录（基于最新的任务状态，同时调用后端接口兜底）
    async isLoggedIn() {
        // 1. 首先从前端缓存获取登录状态
        const loginStatus = this.latestTaskStatus?.login;
        const state = loginStatus?.status || loginStatus?.state;
        const frontendResult = state === 'SUCCESS';
        
        console.log(`[${this.platform}] isLoggedIn 前端缓存检查: state=${state}, 结果=${frontendResult}`);
        console.log(`[${this.platform}] isLoggedIn 前端缓存详情:`, JSON.stringify(this.latestTaskStatus));
        
        // 2. 调用后端接口进行兜底验证
        let backendResult = frontendResult; // 默认使用前端结果
        try {
            console.log(`[${this.platform}] isLoggedIn 开始调用后端接口 /api/tasks/status 进行兜底验证`);
            const response = await fetch('/api/tasks/status');
            if (response.ok) {
                const result = await response.json();
                
                // 根据平台获取对应的登录状态键名
                const platformKeyMap = {
                    'boss': 'BOSS_ZHIPIN_LOGIN',
                    'zhilian': 'ZHILIAN_ZHAOPIN_LOGIN',
                    'job51': 'JOB_51_LOGIN',
                    'liepin': 'LIEPIN_LOGIN'
                };
                
                const loginKey = platformKeyMap[this.platform];
                if (loginKey && result[loginKey]) {
                    const backendLoginStatus = result[loginKey];
                    const backendState = backendLoginStatus.status || backendLoginStatus.state;
                    backendResult = backendState === 'SUCCESS';
                    
                    console.log(`[${this.platform}] isLoggedIn 后端接口返回: state=${backendState}, 结果=${backendResult}`);
                    console.log(`[${this.platform}] isLoggedIn 后端状态详情:`, JSON.stringify(backendLoginStatus));
                    
                    // 3. 比对前后端结果差异
                    if (frontendResult !== backendResult) {
                        console.warn(`[${this.platform}] ⚠️ 登录状态不一致！前端=${frontendResult}, 后端=${backendResult}, 以后端为准`);
                        console.warn(`[${this.platform}] ⚠️ 前端state=${state}, 后端state=${backendState}`);
                        
                        // 更新前端缓存以保持一致性
                        if (!this.latestTaskStatus) {
                            this.latestTaskStatus = {};
                        }
                        this.latestTaskStatus.login = backendLoginStatus;
                        console.log(`[${this.platform}] 已更新前端缓存为后端返回值`);
                    } else {
                        console.log(`[${this.platform}] ✓ 登录状态一致：前端=${frontendResult}, 后端=${backendResult}`);
                    }
                } else {
                    console.warn(`[${this.platform}] 后端接口未返回该平台的登录状态，loginKey=${loginKey}`);
                }
            } else {
                console.error(`[${this.platform}] 后端接口调用失败: HTTP ${response.status}`);
            }
        } catch (error) {
            console.error(`[${this.platform}] isLoggedIn 调用后端接口异常:`, error);
            console.log(`[${this.platform}] 兜底使用前端缓存结果: ${frontendResult}`);
        }
        
        console.log(`[${this.platform}] isLoggedIn 最终判定结果: ${backendResult}`);
        return backendResult;
    }

    // 验证必填字段（委托给configProvider）
    validateRequiredFields() {
        if (this.configProvider && typeof this.configProvider.validateRequiredFields === 'function') {
            return this.configProvider.validateRequiredFields();
        }
        return true; // 默认通过
    }

    // 获取平台名称
    getPlatformName() {
        const nameMap = {
            'boss': 'Boss',
            'job51': '51job',
            'liepin': '猎聘',
            'zhilian': '智联招聘'
        };
        return nameMap[this.platform] || this.platform;
    }

    // 处理登录成功
    handleLoginSuccess() {
        console.log(`${this.getPlatformName()}: 登录成功，启用后续步骤`);
        this.enableAllNextSteps();
        this.syncLoginStatusToConfigForm();
    }

    // 处理登录失败
    handleLoginFailure() {
        console.log(`${this.getPlatformName()}: 登录失败，禁用后续步骤`);
        this.disableAllNextSteps();
        this.syncLoginStatusToConfigForm();
    }

    // 启用所有后续步骤
    enableAllNextSteps() {
        console.log(`[${this.platform}] enableAllNextSteps 被调用`);
        const collectBtnId = this.getButtonId('collect');
        const filterBtnId = this.getButtonId('filter');
        const applyBtnId = this.getButtonId('apply');
        
        console.log(`[${this.platform}] 将启用按钮:`, [collectBtnId, filterBtnId, applyBtnId]);
        
        this.enableNextStep(collectBtnId, this.getStatusId('collect'), '可开始采集');
        this.enableNextStep(filterBtnId, this.getStatusId('filter'), '可开始过滤');
        this.enableNextStep(applyBtnId, this.getStatusId('apply'), '可开始投递');
    }

    // 禁用所有后续步骤
    disableAllNextSteps() {
        this.disableStep(this.getButtonId('collect'), this.getStatusId('collect'), '等待登录');
        this.disableStep(this.getButtonId('filter'), this.getStatusId('filter'), '等待登录');
        this.disableStep(this.getButtonId('apply'), this.getStatusId('apply'), '等待登录');
    }

    // 禁用单个步骤
    disableStep(buttonId, statusId, statusText) {
        const button = document.getElementById(buttonId);
        const status = document.getElementById(statusId);

        if (button) {
            button.disabled = true;
        }

        if (status) {
            status.textContent = statusText;
            status.className = 'badge bg-light text-dark ms-2';
        }
    }

    // 同步登录状态到配置表单实例
    syncLoginStatusToConfigForm() {
        try {
            const platformMap = {
                'liepin': { key: 'LIEPIN', instance: 'liepinConfigApp' },
                'zhilian': { key: 'ZHILIAN_ZHAOPIN', instance: 'zhilianConfigApp' },
                'job51': { key: 'JOB_51', instance: 'job51ConfigApp' }
            };

            const platformInfo = platformMap[this.platform];
            if (!platformInfo) return;

            const configApp = window[platformInfo.instance];
            if (configApp && typeof configApp.fetchAllTaskStatus === 'function') {
                configApp.fetchAllTaskStatus();
                console.log(`${this.getPlatformName()}: 已同步登录状态到配置表单`);
            }
        } catch (error) {
            console.warn(`${this.getPlatformName()}: 同步登录状态到配置表单失败:`, error);
        }
    }

    // 获取平台枚举键（用于全局状态同步）
    getPlatformEnumKey() {
        const keyMap = {
            'boss': 'BOSS_ZHIPIN',
            'zhilian': 'ZHILIAN_ZHAOPIN',
            'job51': 'JOB_51',
            'liepin': 'LIEPIN'
        };
        return keyMap[this.platform];
    }

    // 静态方法：处理平台登录状态变化（供TaskStatusUpdater调用）
    static handlePlatformLoginStatusChange(platformEnum, status) {
        const platformMap = {
            'BOSS_ZHIPIN': 'boss',
            'ZHILIAN_ZHAOPIN': 'zhilian',
            'JOB_51': 'job51',
            'LIEPIN': 'liepin'
        };

        const platformKey = platformMap[platformEnum];
        if (!platformKey) return;

        const instance = TaskExecutor.instances[platformKey];
        if (!instance) return;

        if (status === 'SUCCESS') {
            instance.handleLoginSuccess();
        } else if (status === 'FAILURE' || status === 'FAILED') {
            instance.handleLoginFailure();
        }
    }

    // 静态方法：启用平台的后续步骤（供TaskStatusUpdater调用）
    static enablePlatformNextSteps(platformEnum) {
        console.log('[TaskExecutor] enablePlatformNextSteps 被调用, platformEnum:', platformEnum);
        const platformMap = {
            'BOSS_ZHIPIN': 'boss',
            'ZHILIAN_ZHAOPIN': 'zhilian',
            'JOB_51': 'job51',
            'LIEPIN': 'liepin'
        };

        const platformKey = platformMap[platformEnum];
        console.log('[TaskExecutor] 平台映射结果:', { platformEnum, platformKey });
        
        if (!platformKey) {
            console.warn('[TaskExecutor] 未找到平台映射:', platformEnum);
            return;
        }

        const instance = TaskExecutor.instances[platformKey];
        console.log('[TaskExecutor] 获取实例:', { platformKey, instance, allInstances: TaskExecutor.instances });
        
        if (instance) {
            console.log('[TaskExecutor] 调用实例的 enableAllNextSteps');
            instance.enableAllNextSteps();
            instance.syncLoginStatusToConfigForm();
        } else {
            console.warn('[TaskExecutor] 未找到平台实例:', platformKey);
        }
    }

    // 静态方法：禁用平台的后续步骤（供TaskStatusUpdater调用）
    static disablePlatformNextSteps(platformEnum) {
        const platformMap = {
            'BOSS_ZHIPIN': 'boss',
            'ZHILIAN_ZHAOPIN': 'zhilian',
            'JOB_51': 'job51',
            'LIEPIN': 'liepin'
        };

        const platformKey = platformMap[platformEnum];
        if (!platformKey) return;

        const instance = TaskExecutor.instances[platformKey];
        if (instance) {
            instance.disableAllNextSteps();
            instance.syncLoginStatusToConfigForm();
        }
    }
}

// 全局任务状态更新器（用于所有平台的统一状态轮询）
class TaskStatusUpdater {
    constructor(platforms, interval = 3000) {
        this.platforms = platforms;
        this.interval = interval;
        this.timer = null;
    }

    startPolling() {
        this.stopPolling();
        this.pollStatus(); // Poll immediately
        this.timer = setInterval(() => this.pollStatus(), this.interval);
        console.log('Task status polling started.');
    }

    stopPolling() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
            console.log('Task status polling stopped.');
        }
    }

    async pollStatus() {
        try {
            const response = await fetch('/api/tasks/status');
            if (!response.ok) {
                console.error('Failed to fetch task statuses:', response.statusText);
                return;
            }
            const statuses = await response.json();
            this.updateUI(statuses);
        } catch (error) {
            console.error('Error polling task statuses:', error);
        }
    }

    // 配置 span (状态元素) 与对应按钮的关系
    getButtonIdForStatus(stageId, platform) {
        // Boss平台的映射关系
        if (platform === 'BOSS_ZHIPIN') {
            const bossMapping = {
                'loginStatus': 'loginBtn',
                'collectStatus': 'collectBtn',
                'filterStatus': 'filterBtn',
                'deliverStatus': 'deliverBtn'
            };
            return bossMapping[stageId];
        }
        
        // 其他平台的映射关系
        const platformPrefix = this.platforms[platform];
        if (!platformPrefix) return null;
        
        const prefix = platformPrefix.toLowerCase();
        const stageMappings = {
            [`${prefix}LoginStatus`]: `${prefix}LoginBtn`,
            [`${prefix}CollectStatus`]: `${prefix}CollectBtn`,
            [`${prefix}FilterStatus`]: `${prefix}FilterBtn`,
            [`${prefix}ApplyStatus`]: `${prefix}ApplyBtn`
        };
        
        return stageMappings[stageId];
    }

    updateUI(statuses) {
        for (const key in statuses) {
            const statusInfo = statuses[key];
            const { platform, stage, status, message, count } = statusInfo;

            const platformPrefix = this.platforms[platform];
            if (!platformPrefix) continue;

            let stageId;
            if (platform === 'BOSS_ZHIPIN') {
                // Boss platform has a simpler ID structure
                stageId = `${stage.toLowerCase()}Status`;
            } else {
                stageId = `${platformPrefix.toLowerCase()}${stage.charAt(0) + stage.slice(1).toLowerCase()}Status`;
            }
            const statusElement = document.getElementById(stageId);

            if (statusElement) {
                // 构建新的状态文本
                let statusText = `${message}`;
                if (count > 0) {
                    statusText += ` (${count})`;
                }
                
                // 记录更新前的状态
                console.log(`[TaskStatusUpdater] 更新前 - 元素ID: ${stageId}, 当前文本: "${statusElement.textContent}", 新文本: "${statusText}"`);
                
                // 确定新的样式类
                let newBgClass = 'bg-light';
                let newTextClass = 'text-dark';
                
                // 获取对应的按钮ID
                const buttonId = this.getButtonIdForStatus(stageId, platform);
                const buttonElement = buttonId ? document.getElementById(buttonId) : null;
                
                switch (status) {
                    case 'STARTED':
                        newBgClass = 'bg-primary';
                        newTextClass = 'text-white';
                        // STARTED 状态时禁用对应的按钮
                        if (buttonElement) {
                            buttonElement.disabled = true;
                            console.log(`[TaskStatusUpdater] STARTED - 禁用按钮: ${buttonId}`);
                        }
                        break;
                    case 'IN_PROGRESS':
                        newBgClass = 'bg-info';
                        newTextClass = 'text-dark';
                        // IN_PROGRESS 状态时禁用对应的按钮
                        if (buttonElement) {
                            buttonElement.disabled = true;
                            console.log(`[TaskStatusUpdater] IN_PROGRESS - 禁用按钮: ${buttonId}`);
                        }
                        break;
                    case 'COMPLETED':
                        newBgClass = 'bg-success';
                        newTextClass = 'text-white';
                        // 任务完成后重新启用按钮（登录按钮除外）
                        // 登录任务完成后，按钮状态由 enablePlatformNextSteps 处理
                        if (buttonElement && stage !== 'LOGIN') {
                            buttonElement.disabled = false;
                            console.log(`[TaskStatusUpdater] COMPLETED - 启用按钮: ${buttonId}`);
                        } else if (stage === 'LOGIN') {
                            console.log(`[TaskStatusUpdater] COMPLETED - 登录任务完成，保持登录按钮禁用`);
                        }
                        break;
                    case 'FAILED':
                        newBgClass = 'bg-danger';
                        newTextClass = 'text-white';
                        // 任务失败后重新启用按钮（登录按钮除外）
                        // 登录任务失败后，按钮状态由 disablePlatformNextSteps 处理
                        if (buttonElement && stage !== 'LOGIN') {
                            buttonElement.disabled = false;
                            console.log(`[TaskStatusUpdater] FAILED - 启用按钮: ${buttonId}`);
                        } else if (stage === 'LOGIN') {
                            console.log(`[TaskStatusUpdater] FAILED - 登录任务失败，保持登录按钮禁用`);
                        }
                        break;
                    case 'SUCCESS':
                        newBgClass = 'bg-success';
                        newTextClass = 'text-white';
                        // 任务成功后，登录任务由 enablePlatformNextSteps 处理，其他任务直接启用按钮
                        if (buttonElement && stage !== 'LOGIN') {
                            buttonElement.disabled = false;
                            console.log(`[TaskStatusUpdater] SUCCESS - 启用按钮: ${buttonId}`);
                        } else if (stage === 'LOGIN') {
                            console.log(`[TaskStatusUpdater] SUCCESS - 登录任务成功，保持登录按钮禁用`);
                        }
                        break;
                    case 'FAILURE':
                        newBgClass = 'bg-danger';
                        newTextClass = 'text-white';
                        // 任务失败后，登录任务由 disablePlatformNextSteps 处理，其他任务直接启用按钮
                        if (buttonElement && stage !== 'LOGIN') {
                            buttonElement.disabled = false;
                            console.log(`[TaskStatusUpdater] FAILURE - 启用按钮: ${buttonId}`);
                        } else if (stage === 'LOGIN') {
                            console.log(`[TaskStatusUpdater] FAILURE - 登录任务失败，保持登录按钮禁用`);
                        }
                        break;
                }
                
                // 检查当前状态是否与新状态一致，避免不必要的DOM更新导致闪烁
                const currentText = statusElement.textContent;
                const hasCorrectBgClass = statusElement.classList.contains(newBgClass);
                const hasCorrectTextClass = statusElement.classList.contains(newTextClass);
                
                // 如果文本和样式都已经是目标状态，直接跳过DOM更新
                if (currentText === statusText && hasCorrectBgClass && hasCorrectTextClass) {
                    console.log(`[TaskStatusUpdater] 跳过DOM更新 - 元素ID: ${stageId}, 状态已一致: ${status}`);
                } else {
                    // 使用 requestAnimationFrame 确保DOM更新在同一帧内完成，避免闪烁
                    requestAnimationFrame(() => {
                        // 批量更新：先移除旧样式类，立即添加新样式类，最后更新文本
                        // 这样可以最小化元素处于无样式状态的时间
                        statusElement.classList.remove('bg-primary', 'bg-info', 'bg-success', 'bg-danger', 'bg-light', 'text-white', 'text-dark');
                        statusElement.classList.add(newBgClass, newTextClass);
                        statusElement.textContent = statusText;
                        
                        console.log(`[TaskStatusUpdater] 更新后 - 元素ID: ${stageId}, 状态: ${status}, 样式: ${newBgClass} ${newTextClass}`);
                    });
                }
            }

            // 如果是LOGIN阶段，根据状态处理后续步骤的启用/禁用
            if (stage === 'LOGIN') {
                console.log('[TaskStatusUpdater] 检测到LOGIN阶段:', { platform, stage, status });
                
                // 根据登录状态更新后续步骤按钮
                if (window.TaskExecutor) {
                    console.log('[TaskStatusUpdater] window.TaskExecutor 存在');
                    if (status === 'SUCCESS') {
                        console.log('[TaskStatusUpdater] 登录成功，启用后续步骤按钮（如果它们是禁用状态）');
                        // 登录成功时，启用所有后续步骤（但只修改处于"等待登录"状态的按钮）
                        window.TaskExecutor.enablePlatformNextSteps(platform);
                    } else if (status === 'FAILURE' || status === 'FAILED') {
                        console.log('[TaskStatusUpdater] 登录失败，禁用后续步骤按钮并标记为等待登录');
                        // 登录失败时，禁用所有后续步骤并标记为"等待登录"
                        window.TaskExecutor.disablePlatformNextSteps(platform);
                    } else if (status === 'STARTED' || status === 'IN_PROGRESS') {
                        console.log('[TaskStatusUpdater] 登录进行中，确保后续步骤保持禁用状态');
                        // 登录进行中时，确保后续步骤禁用（除非它们正在执行自己的任务）
                        // 不做处理，让各个按钮保持当前状态
                    }
                } else {
                    console.warn('[TaskStatusUpdater] window.TaskExecutor 不存在！');
                }
            }
        }
    }
}

// 导出到全局
window.TaskExecutor = TaskExecutor;
window.TaskStatusUpdater = TaskStatusUpdater;

