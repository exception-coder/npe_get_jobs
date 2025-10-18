// Boss直聘配置应用主脚本
class BossConfigApp {
    constructor() {
        this.config = {};
        this.isRunning = false;
        this.isDataLoading = false; // 添加数据加载状态标识
        this.init();
    }

    init() {
        CommonUtils.initializeTooltips();
        this.bindEvents();
        // 先加载字典数据，再加载配置数据，确保下拉框已准备好
        this.loadDataSequentially();
    }

    // 绑定事件
    bindEvents() {
        // 绑定岗位明细按钮事件
        this.bindJobRecordsEvents();
    }

    // =====================
    // 岗位明细按钮事件
    // =====================
    bindJobRecordsEvents() {
        // Boss直聘岗位明细按钮
        this.bindPlatformJobRecordsEvents('boss', 'BOSS直聘');
        
        // 智联招聘岗位明细按钮
        this.bindPlatformJobRecordsEvents('zhilian', '智联招聘');
        
        // 前程无忧岗位明细按钮
        this.bindPlatformJobRecordsEvents('job51', '前程无忧');
        
        // 猎聘岗位明细按钮
        this.bindPlatformJobRecordsEvents('liepin', '猎聘');
    }

    bindPlatformJobRecordsEvents(platform, platformName) {
        // 平台代码映射到后端使用的枚举名称
        const platformEnumMap = {
            'boss': 'BOSS直聘',
            'zhilian': '智联招聘',
            'job51': '51job',
            'liepin': 'LIEPIN'
        };
        
        const backendPlatform = platformEnumMap[platform] || platformName;
        
        // 重置岗位状态按钮
        const resetBtn = document.getElementById(`${platform}RecordResetBtn`);
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.handleResetFilter(backendPlatform, platformName);
            });
            console.log(`已绑定${platformName}重置岗位状态按钮事件`);
        }

        // 删除岗位按钮
        const deleteBtn = document.getElementById(`${platform}RecordDeleteBtn`);
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                this.handleDeleteAllJobs(backendPlatform, platformName);
            });
            console.log(`已绑定${platformName}删除岗位按钮事件`);
        }
    }

    // 处理重置岗位状态
    handleResetFilter(platform, platformName) {
        const confirmModal = document.getElementById('confirmModal');
        const confirmModalBody = document.getElementById('confirmModalBody');
        const confirmModalOk = document.getElementById('confirmModalOk');
        
        if (confirmModal && confirmModalBody && confirmModalOk) {
            confirmModalBody.textContent = `确定要重置${platformName}的所有岗位状态吗？此操作将清除所有岗位的过滤状态。`;
            
            // 移除之前的事件监听器
            const newOkBtn = confirmModalOk.cloneNode(true);
            confirmModalOk.parentNode.replaceChild(newOkBtn, confirmModalOk);
            
            newOkBtn.addEventListener('click', async () => {
                try {
                    const response = await fetch('/api/jobs/reset-filter', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: `platform=${encodeURIComponent(platformName)}`
                    });
                    
                    if (response.ok) {
                        const result = await response.json();
                        CommonUtils.showToast(`重置成功，共重置${result}个岗位状态`, 'success');
                        
                        // 刷新对应的Vue应用数据
                        this.refreshPlatformData(platform);
                    } else {
                        CommonUtils.showToast('重置失败，请稍后重试', 'danger');
                    }
                } catch (error) {
                    console.error('重置岗位状态失败:', error);
                    CommonUtils.showToast('重置失败，请稍后重试', 'danger');
                }
                
                // 关闭模态框
                const modal = bootstrap.Modal.getInstance(confirmModal);
                if (modal) {
                    modal.hide();
                }
            });
            
            // 显示确认模态框
            const modal = new bootstrap.Modal(confirmModal);
            modal.show();
        } else {
            console.error('确认模态框元素未找到');
        }
    }

    // 处理删除所有岗位
    handleDeleteAllJobs(platform, platformName) {
        const confirmModal = document.getElementById('confirmModal');
        const confirmModalBody = document.getElementById('confirmModalBody');
        const confirmModalOk = document.getElementById('confirmModalOk');
        
        if (confirmModal && confirmModalBody && confirmModalOk) {
            confirmModalBody.textContent = `确定要删除${platformName}的所有岗位吗？此操作不可恢复，请谨慎操作！`;
            
            // 移除之前的事件监听器
            const newOkBtn = confirmModalOk.cloneNode(true);
            confirmModalOk.parentNode.replaceChild(newOkBtn, confirmModalOk);
            
            newOkBtn.addEventListener('click', async () => {
                try {
                    const response = await fetch('/api/jobs', {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: `platform=${encodeURIComponent(platformName)}`
                    });
                    
                    if (response.ok) {
                        CommonUtils.showToast(`${platformName}所有岗位已删除`, 'success');
                        
                        // 刷新对应的Vue应用数据
                        this.refreshPlatformData(platform);
                    } else {
                        CommonUtils.showToast('删除失败，请稍后重试', 'danger');
                    }
                } catch (error) {
                    console.error('删除岗位失败:', error);
                    CommonUtils.showToast('删除失败，请稍后重试', 'danger');
                }
                
                // 关闭模态框
                const modal = bootstrap.Modal.getInstance(confirmModal);
                if (modal) {
                    modal.hide();
                }
            });
            
            // 显示确认模态框
            const modal = new bootstrap.Modal(confirmModal);
            modal.show();
        } else {
            console.error('确认模态框元素未找到');
        }
    }

    // 刷新平台数据
    refreshPlatformData(platform) {
        // 将后端平台名称映射回前端平台代码
        const backendToFrontendMap = {
            'BOSS直聘': 'boss',
            '智联招聘': 'zhilian',
            '51job': 'job51',
            'LIEPIN': 'liepin'
        };
        
        const frontendPlatform = backendToFrontendMap[platform] || platform;
        
        switch (frontendPlatform) {
            case 'boss':
                if (window.bossRecordsRoot && typeof window.bossRecordsRoot.refreshData === 'function') {
                    window.bossRecordsRoot.refreshData();
                }
                break;
            case 'zhilian':
                if (window.zhilianRecordsRoot && typeof window.zhilianRecordsRoot.refreshData === 'function') {
                    window.zhilianRecordsRoot.refreshData();
                }
                break;
            case 'job51':
                if (window.job51RecordsRoot && typeof window.job51RecordsRoot.refreshData === 'function') {
                    window.job51RecordsRoot.refreshData();
                }
                break;
            case 'liepin':
                if (window.liepinRecordsRoot && typeof window.liepinRecordsRoot.refreshData === 'function') {
                    window.liepinRecordsRoot.refreshData();
                }
                break;
        }
    }

    // 按顺序加载数据：先字典，后配置
    async loadDataSequentially() {
        this.isDataLoading = true; // 设置数据加载状态
        try {
            console.log('App.js: 开始按顺序加载数据：等待字典事件 -> 等待配置事件');
            // 优先等待由 boss-config-form.js 分发的字典加载完成事件，最短等待，避免重复请求
            await new Promise((resolve) => {
                let resolved = false;
                const handler = () => {
                    if (resolved) return;
                    resolved = true;
                    window.removeEventListener('bossDictDataLoaded', handler);
                    resolve();
                };
                window.addEventListener('bossDictDataLoaded', handler, { once: true });
                // 超时快速继续，避免阻塞
                setTimeout(() => {
                    if (resolved) return;
                    window.removeEventListener('bossDictDataLoaded', handler);
                    resolve();
                }, 1500);
            });
            
            console.log('App.js: 等待boss-config-form.js加载配置数据');
            await this.waitForBossConfigLoaded();
            console.log('App.js: 配置数据加载完成');
        } catch (error) {
            console.error('App.js: 数据加载失败:', error);
        } finally {
            this.isDataLoading = false; // 数据加载完成，清除加载状态
        }
    }

    // 等待boss-config-form.js加载配置数据完成，避免重复请求
    async waitForBossConfigLoaded() {
        return new Promise((resolve) => {
            let resolved = false;
            const handler = (event) => {
                if (resolved) return;
                resolved = true;
                try {
                    // 从boss-config-form.js获取已加载的配置数据
                    const configData = event.detail && event.detail.config ? event.detail.config : {};
                    if (configData && Object.keys(configData).length > 0) {
                        console.log('App.js: 从boss-config-form.js获取配置数据:', configData);
                        this.config = configData;
                        this.populateForm();
                    } else {
                        console.log('App.js: boss-config-form.js未提供配置数据，尝试本地缓存');
                        this.loadFromLocalStorage();
                    }
                } catch (error) {
                    console.warn('App.js: 处理配置数据时出错:', error);
                    this.loadFromLocalStorage();
                } finally {
                    window.removeEventListener('bossConfigLoaded', handler);
                    resolve();
                }
            };
            
            window.addEventListener('bossConfigLoaded', handler, { once: true });
            
            // 超时回退到本地缓存
            setTimeout(() => {
                if (resolved) return;
                resolved = true;
                window.removeEventListener('bossConfigLoaded', handler);
                console.log('App.js: 等待配置事件超时，使用本地缓存');
                this.loadFromLocalStorage();
                resolve();
            }, 2000);
        });
    }

    // 从本地缓存加载配置
    loadFromLocalStorage() {
        try {
            const savedConfig = localStorage.getItem('bossConfig');
            if (savedConfig) {
                this.config = JSON.parse(savedConfig);
                console.log('App.js: 从本地缓存加载配置完成');
            }
        } catch (error) {
            console.warn('App.js: 本地缓存配置损坏，已清理:', error.message);
            localStorage.removeItem('bossConfig');
        }
    }


}

// 页面加载完成后初始化应用（原配置表单/记录页逻辑）
// 注意：TaskStatusUpdater 类已移至 task-executor.js
document.addEventListener('DOMContentLoaded', () => {
    // 先初始化Boss配置表单（负责字典加载与事件分发）
    if (window.Views && window.Views.BossConfigForm) {
        window.bossConfigFormApp = new window.Views.BossConfigForm();
    }
    
    // 再初始化主应用（会等待字典事件）
    window.bossConfigApp = new BossConfigApp();
    
    // 初始化智联配置表单
    if (window.ZhilianConfigForm) {
        window.zhilianConfigApp = new ZhilianConfigForm();
    }
    
    // 初始化51job配置表单
    if (window.Job51ConfigForm) {
        window.job51ConfigApp = new Job51ConfigForm();
    }

    // 初始化猎聘配置表单
    if (window.LiepinConfigForm) {
        window.liepinConfigApp = new LiepinConfigForm();
    }

    // Boss字典加载逻辑已移至 Views.BossConfigForm 中

    // =============================
    // 初始化"岗位明细"Vue 视图
    // =============================
    try {
        if (window.Views && window.Views.BossRecordsVue) {
            window.bossRecordsVue = new window.Views.BossRecordsVue();
        }
    } catch (error) {
        console.error('初始化Boss岗位明细Vue应用失败:', error);
    }

    try {
        if (window.Views && window.Views.ZhilianRecordsVue) {
            window.zhilianRecordsVue = new window.Views.ZhilianRecordsVue();
        }
    } catch (error) {
        console.error('初始化智联岗位明细Vue应用失败:', error);
    }

    try {
        if (window.Views && window.Views.LiepinRecordsVue) {
            window.liepinRecordsVue = new window.Views.LiepinRecordsVue();
        }
    } catch (error) {
        console.error('初始化猎聘岗位明细Vue应用失败:', error);
    }

    const platforms = {
        'BOSS_ZHIPIN': 'boss',
        'ZHILIAN_ZHAOPIN': 'zhilian',
        'JOB_51': 'job51',
        'LIEPIN': 'liepin'
    };
    const taskStatusUpdater = new TaskStatusUpdater(platforms);
    taskStatusUpdater.startPolling();
});


// 注意：不要重复创建Vue应用，已在上面的DOMContentLoaded中创建
