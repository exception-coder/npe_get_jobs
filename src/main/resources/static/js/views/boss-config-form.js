// Boss 配置表单模块（导出类，不自动初始化）
(function () {
    if (!window.Views) window.Views = {};

    class BossConfigApp {
        constructor() {
            this.config = {};
            this.isRunning = false;
            this.dictDataLoaded = false; // 字典数据加载状态标志
            this.hrStatusTagsInput = null; // HR状态标签输入组件
            this.taskExecutor = null; // 任务执行控制器
            this.init();
        }

        init() {
            this.initializeTooltips();
            this.initializeTagsInput();
            this.bindEvents();
            // 先加载字典数据，再加载配置数据，确保下拉框已准备好
            this.loadDataSequentially();
            // 初始化任务执行控制器
            this.initTaskExecutor();
        }
        
        initTaskExecutor() {
            // 创建任务执行控制器实例
            this.taskExecutor = new TaskExecutor(
                'boss',
                '/api/boss',
                '', // boss使用不带前缀的元素ID
                this, // configProvider
                {
                    showToast: this.showToast.bind(this),
                    showAlertModal: (title, message) => {
                        if (window.CommonUtils && window.CommonUtils.showAlertModal) {
                            window.CommonUtils.showAlertModal(title, message);
                        }
                    },
                    showConfirmModal: (title, message, onConfirm, onCancel) => {
                        if (window.CommonUtils && window.CommonUtils.showConfirmModal) {
                            window.CommonUtils.showConfirmModal(title, message, onConfirm, onCancel);
                        }
                    }
                }
            );
        }

        initializeTagsInput() {
            // 初始化HR状态标签输入组件
            const hrStatusInput = document.getElementById('bossHrStatusKeywords');
            const hrStatusWrapper = document.getElementById('hrStatusTags');
            if (hrStatusInput && hrStatusWrapper) {
                this.hrStatusTagsInput = new window.TagsInput(hrStatusInput, hrStatusWrapper);
            }
        }

        initializeTooltips() {
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
        }

        bindEvents() {
            document.getElementById('saveConfigBtn')?.addEventListener('click', () => {
                this.handleSaveOnly();
            });

            this.bindFormValidation();
            this.bindAdvancedConfig();
        }

        bindFormValidation() {
            const requiredFields = [
                'keywordsField',
                'cityCodeField'
            ];
            requiredFields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (field) {
                    field.addEventListener('blur', () => {
                        this.validateField(field);
                    });
                }
            });
            const minSalary = document.getElementById('minSalaryField');
            const maxSalary = document.getElementById('maxSalaryField');
            if (minSalary && maxSalary) {
                [minSalary, maxSalary].forEach(field => {
                    field.addEventListener('input', () => {
                        this.validateSalaryRange();
                    });
                });
            }
        }

        validateField(field) {
            const value = field.value.trim();
            const isValid = value.length > 0;
            this.updateFieldValidation(field, isValid);
            return isValid;
        }

        validateSalaryRange() {
            const minSalary = document.getElementById('minSalaryField');
            const maxSalary = document.getElementById('maxSalaryField');
            const minValue = parseInt(minSalary.value) || 0;
            const maxValue = parseInt(maxSalary.value) || 0;
            const isValid = minValue > 0 && maxValue > 0 && minValue <= maxValue;
            this.updateFieldValidation(minSalary, isValid);
            this.updateFieldValidation(maxSalary, isValid);
            return isValid;
        }


        updateFieldValidation(field, isValid) {
            if (isValid) {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
            } else {
                field.classList.remove('is-valid');
                field.classList.add('is-invalid');
            }
        }

        bindAdvancedConfig() {
            this.bindCityCodeConfig();
            this.bindHRStatusConfig();
        }

        bindCityCodeConfig() {
            // 城市配置相关功能已移除，通过字典接口动态加载
        }

        bindHRStatusConfig() {
            // HR状态配置已通过 TagsInput 组件实现
            // 相关初始化在 initializeTagsInput() 方法中完成
        }

        addCityCodeItem(container, city, code) {
            const item = document.createElement('div');
            item.className = 'd-flex justify-content-between align-items-center mb-2 p-2 bg-white rounded border';
            item.innerHTML = `
                <span class="fw-semibold">${city} - ${code}</span>
                <button class="btn btn-sm btn-outline-danger" onclick="this.parentElement.remove()">
                    <i class="bi bi-trash"></i>
                </button>
            `;
            container.appendChild(item);
        }

        showAddCityCodeModal() {
            const city = prompt('请输入城市名称:');
            const code = prompt('请输入城市代码:');
            if (city && code) {
                const container = document.getElementById('customCityCodeContainer');
                this.addCityCodeItem(container, city, code);
            }
        }

        saveConfig() {
            const getMultiSelectValues = (selectId) => {
                const el = document.getElementById(selectId);
                if (!el) return '';
                return Array.from(el.selectedOptions).map(o => o.value).filter(Boolean).join(',');
            };

            this.config = {
                keywords: document.getElementById('keywordsField').value,
                industry: getMultiSelectValues('industryField'),
                cityCode: getMultiSelectValues('cityCodeField'),
                experience: document.getElementById('experienceComboBox').value,
                jobType: document.getElementById('jobTypeComboBox').value,
                salary: document.getElementById('salaryComboBox').value,
                degree: document.getElementById('degreeComboBox').value,
                scale: document.getElementById('scaleComboBox').value,
                stage: document.getElementById('stageComboBox').value,
                minSalary: document.getElementById('minSalaryField').value,
                maxSalary: document.getElementById('maxSalaryField').value,
                filterDeadHR: document.getElementById('filterDeadHRCheckBox').checked,
                sendImgResume: document.getElementById('sendImgResumeCheckBox').checked,
                recommendJobs: document.getElementById('recommendJobsCheckBox').checked,
                bossHrStatusKeywords: this.hrStatusTagsInput ? this.hrStatusTagsInput.getValue() : ''
            };
            localStorage.setItem('bossConfig', JSON.stringify(this.config));
            try {
                fetch('/api/config/boss', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.config)
                }).then(() => {}).catch(() => {});
            } catch (e) {}
        }

        // 按顺序加载数据：先字典，后配置
        async loadDataSequentially() {
            try {
                console.log('BossConfigForm: 开始按顺序加载数据：字典 -> 配置');
                
                // 先加载字典数据
                await this.loadBossDicts();
                console.log('BossConfigForm: 字典数据加载完成，开始加载配置数据');
                
                // 等待DOM元素完全渲染
                await this.waitForDOMReady();
                
                // 再加载配置数据
                await this.loadSavedConfig();
                console.log('BossConfigForm: 配置数据加载完成');
            } catch (error) {
                console.error('BossConfigForm: 数据加载失败:', error);
            }
        }

        // 等待DOM元素完全准备就绪
        async waitForDOMReady() {
            return new Promise((resolve) => {
                // 等待一个事件循环，确保所有DOM操作完成
                setTimeout(() => {
                    console.log('BossConfigForm: DOM元素准备就绪');
                    resolve();
                }, 100);
            });
        }

        // 加载保存的配置
        async loadSavedConfig() {
            try {
                console.log('BossConfigForm: 开始加载配置数据...');
                
                const res = await fetch('/api/config/boss');
                if (!res.ok) throw new Error('HTTP ' + res.status);
                const ct = res.headers.get('content-type') || '';
                let data;
                if (ct.includes('application/json')) {
                    data = await res.json();
                } else {
                    const text = await res.text();
                    const snippet = (text || '').slice(0, 80);
                    throw new Error('返回非JSON：' + snippet);
                }
                
                if (data && typeof data === 'object' && Object.keys(data).length) {
                    this.config = data;
                    console.log('BossConfigForm: 从后端加载到配置数据:', this.config);
                    
                    // 确保字典数据已加载后再填充表单
                    await this.waitForDictDataReady();
                    this.populateForm();
                    
                    localStorage.setItem('bossConfig', JSON.stringify(this.config));
                    
                    // 触发配置加载完成事件，通知app.js
                    this.dispatchConfigLoadedEvent();
                    return;
                }
                
                // 如果后端没有数据，尝试本地缓存
                const savedConfig = localStorage.getItem('bossConfig');
                if (savedConfig) {
                    try {
                        this.config = JSON.parse(savedConfig);
                        console.log('BossConfigForm: 从本地缓存加载到配置数据:', this.config);
                        
                        // 确保字典数据已加载后再填充表单
                        await this.waitForDictDataReady();
                        this.populateForm();
                        
                        // 触发配置加载完成事件，通知app.js
                        this.dispatchConfigLoadedEvent();
                    } catch (error) {
                        console.warn('本地配置损坏，已清理：' + error.message);
                        localStorage.removeItem('bossConfig');
                    }
                }
            } catch (err) {
                console.warn('后端配置读取失败：' + (err?.message || '未知错误'));
                // 尝试本地缓存
                const savedConfig = localStorage.getItem('bossConfig');
                if (savedConfig) {
                    try {
                        this.config = JSON.parse(savedConfig);
                        console.log('BossConfigForm: 从本地缓存加载到配置数据（异常情况）:', this.config);
                        
                        // 确保字典数据已加载后再填充表单
                        await this.waitForDictDataReady();
                        this.populateForm();
                        
                        // 触发配置加载完成事件，通知app.js
                        this.dispatchConfigLoadedEvent();
                    } catch (error) {
                        console.warn('本地配置损坏，已清理：' + error.message);
                        localStorage.removeItem('bossConfig');
                    }
                }
            }
        }

        // 触发配置加载完成事件，通知app.js
        dispatchConfigLoadedEvent() {
            try {
                console.log('BossConfigForm: 触发配置加载完成事件');
                window.dispatchEvent(new CustomEvent('bossConfigLoaded', {
                    detail: { config: this.config }
                }));
            } catch (error) {
                console.error('BossConfigForm: 触发配置事件失败:', error);
            }
        }

        // 等待字典数据准备就绪
        async waitForDictDataReady() {
            return new Promise(async (resolve) => {
                // 首先等待字典数据加载事件
                if (!this.dictDataLoaded) {
                    console.log('BossConfigForm: 等待字典数据加载完成...');
                    
                    // 监听字典数据加载完成事件
                    const handleDictLoaded = () => {
                        console.log('BossConfigForm: 收到字典数据加载完成事件');
                        window.removeEventListener('bossDictDataLoaded', handleDictLoaded);
                        // 继续等待DOM完全渲染
                        this.waitForAllDictDataReady().then(resolve);
                    };
                    
                    window.addEventListener('bossDictDataLoaded', handleDictLoaded);
                    
                    // 设置超时，避免无限等待
                    setTimeout(() => {
                        console.warn('BossConfigForm: 等待字典数据超时，强制继续');
                        window.removeEventListener('bossDictDataLoaded', handleDictLoaded);
                        this.waitForAllDictDataReady().then(resolve);
                    }, 5000);
                } else {
                    // 字典数据已加载，等待DOM完全渲染
                    console.log('BossConfigForm: 字典数据已就绪，等待DOM完全渲染');
                    await this.waitForAllDictDataReady();
                    resolve();
                }
            });
        }

        populateForm() {
            console.log('BossConfigForm: 开始填充表单，配置数据:', this.config);
            
            // 先处理普通字段
            Object.keys(this.config).forEach(key => {
                const element = document.getElementById(this.getFieldId(key));
                if (element) {
                    if (element.type === 'checkbox') {
                        element.checked = this.config[key];
                        console.log(`BossConfigForm: 设置复选框 ${key} = ${this.config[key]}`);
                    } else {
                        // 处理可能的数组字段转换为逗号分隔字符串
                        let value = this.config[key];
                        if (Array.isArray(value)) {
                            value = value.join(',');
                            console.log(`BossConfigForm: 数组字段 ${key} 转换为字符串:`, this.config[key], '->', value);
                        }
                        element.value = value || '';
                        console.log(`BossConfigForm: 设置字段 ${key} = ${value}`);
                    }
                }
            });

            // 特殊处理城市选择器
            this.populateCitySelector();
            
            // 特殊处理行业选择器
            this.populateIndustrySelector();
            
            // 特殊处理期望薪资字段
            this.populateExpectedSalary();
            
            // 特殊处理其他下拉框
            this.populateSelectBoxes();
            
            // 特殊处理HR状态标签
            this.populateHrStatusTags();
        }

        // 填充HR状态标签
        populateHrStatusTags() {
            if (this.hrStatusTagsInput) {
                // 优先使用新字段 bossHrStatusKeywords，兼容旧字段 deadStatus
                const statusData = this.config.bossHrStatusKeywords || this.config.deadStatus;
                if (statusData) {
                    // 处理数组格式或逗号分隔的字符串
                    let statusArray = [];
                    if (Array.isArray(statusData)) {
                        statusArray = statusData;
                    } else if (typeof statusData === 'string') {
                        statusArray = statusData.split(',').map(s => s.trim()).filter(Boolean);
                    }
                    console.log('BossConfigForm: 填充HR状态标签:', statusArray);
                    this.hrStatusTagsInput.setTags(statusArray);
                }
            }
        }

        // 填充城市选择器
        populateCitySelector() {
            const cityCode = this.config.cityCode;
            if (!cityCode) return;
            
            // 处理数组格式（从后端返回）或字符串格式（从本地缓存）
            let cityCodeStr = '';
            if (Array.isArray(cityCode)) {
                cityCodeStr = cityCode.join(',');
            } else {
                cityCodeStr = cityCode;
            }
            
            console.log('BossConfigForm: 填充城市选择器，原始城市代码:', cityCode, '处理后:', cityCodeStr);
            
            const citySelect = document.getElementById('cityCodeField');
            const cityDropdownBtn = document.getElementById('cityDropdownBtn');
            const citySummary = document.getElementById('citySelectionSummary');
            
            if (!citySelect) {
                console.warn('BossConfigForm: 未找到城市选择器元素');
                return;
            }

            // 解析城市代码（支持逗号分隔的多个城市）
            const codes = cityCodeStr.split(',').map(s => s.trim()).filter(Boolean);
            console.log('BossConfigForm: 解析的城市代码:', codes);

            // 设置隐藏select的选中状态
            Array.from(citySelect.options).forEach(opt => {
                opt.selected = codes.includes(opt.value);
            });

            // 更新下拉框显示状态
            this.updateCityDropdownDisplay();

            // 更新城市摘要
            if (typeof this.updateCitySummary === 'function') {
                this.updateCitySummary();
            } else {
                this.updateCitySummaryFallback();
            }
        }

        // 更新城市下拉框显示状态
        updateCityDropdownDisplay() {
            const citySelect = document.getElementById('cityCodeField');
            const cityListContainer = document.getElementById('cityDropdownList');
            
            if (!citySelect || !cityListContainer) return;

            // 更新checkbox状态
            const checkboxes = cityListContainer.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                const option = Array.from(citySelect.options).find(o => o.value === checkbox.value);
                if (option) {
                    checkbox.checked = option.selected;
                }
            });
        }

        // 更新城市摘要显示
        updateCitySummary() {
            const cityDropdownBtn = document.getElementById('cityDropdownBtn');
            const citySummary = document.getElementById('citySelectionSummary');
            const citySelect = document.getElementById('cityCodeField');
            
            if (!cityDropdownBtn || !citySummary || !citySelect) return;

            const selectedOptions = Array.from(citySelect.selectedOptions);
            const values = selectedOptions.map(o => o.textContent);
            
            if (values.length === 0) {
                cityDropdownBtn.textContent = '选择城市';
                citySummary.textContent = '未选择';
            } else if (values.length <= 2) {
                const text = values.join('、');
                cityDropdownBtn.textContent = text;
                citySummary.textContent = `已选 ${values.length} 项：${text}`;
            } else {
                cityDropdownBtn.textContent = `已选 ${values.length} 项`;
                citySummary.textContent = `已选 ${values.length} 项`;
            }
        }

        // 备用的城市摘要更新方法
        updateCitySummaryFallback() {
            const cityDropdownBtn = document.getElementById('cityDropdownBtn');
            const citySummary = document.getElementById('citySelectionSummary');
            const citySelect = document.getElementById('cityCodeField');
            
            if (!cityDropdownBtn || !citySummary || !citySelect) return;

            const selectedOptions = Array.from(citySelect.selectedOptions);
            const values = selectedOptions.map(o => o.textContent);
            
            if (values.length === 0) {
                cityDropdownBtn.textContent = '选择城市';
                citySummary.textContent = '未选择';
            } else if (values.length <= 2) {
                const text = values.join('、');
                cityDropdownBtn.textContent = text;
                citySummary.textContent = `已选 ${values.length} 项：${text}`;
            } else {
                cityDropdownBtn.textContent = `已选 ${values.length} 项`;
                citySummary.textContent = `已选 ${values.length} 项`;
            }
        }

        // 填充行业选择器
        populateIndustrySelector() {
            const industry = this.config.industry;
            if (!industry) return;
            
            // 处理数组格式（从后端返回）或字符串格式（从本地缓存）
            let industryStr = '';
            if (Array.isArray(industry)) {
                industryStr = industry.join(',');
            } else {
                industryStr = industry;
            }
            
            console.log('BossConfigForm: 填充行业选择器，原始行业数据:', industry, '处理后:', industryStr);
            
            const industrySelect = document.getElementById('industryField');
            const industryDropdownBtn = document.getElementById('industryDropdownBtn');
            const industrySummary = document.getElementById('industrySelectionSummary');
            
            if (!industrySelect) {
                console.warn('BossConfigForm: 未找到行业选择器元素');
                return;
            }

            // 解析行业代码（支持逗号分隔的多个行业）
            const codes = industryStr.split(',').map(s => s.trim()).filter(Boolean);
            console.log('BossConfigForm: 解析的行业代码:', codes);

            // 设置隐藏select的选中状态
            Array.from(industrySelect.options).forEach(opt => {
                opt.selected = codes.includes(opt.value);
            });

            // 更新下拉框显示状态
            this.updateIndustryDropdownDisplay();

            // 更新行业摘要
            if (typeof this.updateIndustrySummary === 'function') {
                this.updateIndustrySummary();
            }
        }

        // 更新行业下拉框显示状态
        updateIndustryDropdownDisplay() {
            const industrySelect = document.getElementById('industryField');
            const industryListContainer = document.getElementById('industryDropdownList');
            
            if (!industrySelect || !industryListContainer) return;

            // 更新checkbox状态
            const checkboxes = industryListContainer.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                const option = Array.from(industrySelect.options).find(o => o.value === checkbox.value);
                if (option) {
                    checkbox.checked = option.selected;
                }
            });
        }

        // 填充期望薪资字段
        populateExpectedSalary() {
            const expectedSalary = this.config.expectedSalary;
            if (Array.isArray(expectedSalary) && expectedSalary.length >= 2) {
                const minSalaryField = document.getElementById('minSalaryField');
                const maxSalaryField = document.getElementById('maxSalaryField');
                
                if (minSalaryField && maxSalaryField) {
                    minSalaryField.value = expectedSalary[0] || '';
                    maxSalaryField.value = expectedSalary[1] || '';
                    console.log(`BossConfigForm: 期望薪资回填: ${expectedSalary[0]} ~ ${expectedSalary[1]}`);
                }
            }
        }

        // 填充其他下拉框
        populateSelectBoxes() {
            const selectFields = [
                'experienceComboBox',
                'jobTypeComboBox', 
                'salaryComboBox',
                'degreeComboBox',
                'scaleComboBox',
                'stageComboBox'
            ];

            selectFields.forEach(fieldId => {
                const element = document.getElementById(fieldId);
                const configKey = this.getConfigKeyFromFieldId(fieldId);
                
                if (element && this.config[configKey]) {
                    let value = this.config[configKey];
                    
                    // 处理数组格式，取第一个元素（下拉框只能选一个值）
                    if (Array.isArray(value)) {
                        value = value.length > 0 ? value[0] : '';
                        console.log(`BossConfigForm: 下拉框 ${fieldId} 数组转换:`, this.config[configKey], '->', value);
                    }
                    
                    console.log(`BossConfigForm: 设置下拉框 ${fieldId} = ${value}`);
                    
                    // 查找匹配的选项
                    const option = Array.from(element.options).find(opt => opt.value === value);
                    if (option) {
                        element.value = value;
                        console.log(`BossConfigForm: 成功设置下拉框 ${fieldId}`);
                    } else {
                        console.warn(`BossConfigForm: 下拉框 ${fieldId} 中未找到值 ${value} 对应的选项`);
                    }
                }
            });
        }

        // 从字段ID获取配置键名
        getConfigKeyFromFieldId(fieldId) {
            const fieldMap = {
                'experienceComboBox': 'experience',
                'jobTypeComboBox': 'jobType',
                'salaryComboBox': 'salary',
                'degreeComboBox': 'degree',
                'scaleComboBox': 'scale',
                'stageComboBox': 'stage'
            };
            return fieldMap[fieldId] || fieldId;
        }

        // 检查字典数据是否完全加载
        isDictDataReady() {
            const requiredSelects = [
                'experienceComboBox',
                'jobTypeComboBox',
                'salaryComboBox',
                'degreeComboBox',
                'scaleComboBox',
                'stageComboBox',
                'cityCodeField'
            ];

            for (const selectId of requiredSelects) {
                const select = document.getElementById(selectId);
                if (!select || select.options.length <= 1) {
                    console.log(`BossConfigForm: 下拉框 ${selectId} 尚未完全加载`);
                    return false;
                }
            }

            console.log('BossConfigForm: 所有字典数据已完全加载');
            return true;
        }

        // 等待所有字典数据完全加载
        async waitForAllDictDataReady() {
            return new Promise((resolve) => {
                if (this.isDictDataReady()) {
                    resolve();
                    return;
                }

                console.log('BossConfigForm: 等待所有字典数据完全加载...');
                
                let attempts = 0;
                const maxAttempts = 50; // 最多等待5秒
                
                const checkInterval = setInterval(() => {
                    attempts++;
                    
                    if (this.isDictDataReady()) {
                        clearInterval(checkInterval);
                        console.log('BossConfigForm: 所有字典数据加载完成');
                        resolve();
                    } else if (attempts >= maxAttempts) {
                        clearInterval(checkInterval);
                        console.warn('BossConfigForm: 等待字典数据超时，强制继续');
                        resolve();
                    }
                }, 100);
            });
        }

        getFieldId(key) {
            const fieldMap = {
                keywords: 'keywordsField',
                industry: 'industryField',
                cityCode: 'cityCodeField',
                experience: 'experienceComboBox',
                jobType: 'jobTypeComboBox',
                salary: 'salaryComboBox',
                degree: 'degreeComboBox',
                scale: 'scaleComboBox',
                stage: 'stageComboBox',
                minSalary: 'minSalaryField',
                maxSalary: 'maxSalaryField',
                filterDeadHR: 'filterDeadHRCheckBox',
                sendImgResume: 'sendImgResumeCheckBox',
                recommendJobs: 'recommendJobsCheckBox',
                waitTime: 'waitTimeField'
            };
            return fieldMap[key] || key;
        }

        handleSaveOnly() {
            this.saveConfig();
            try {
                const toastEl = document.getElementById('globalToast');
                const bodyEl = document.getElementById('globalToastBody');
                if (toastEl && bodyEl) {
                    bodyEl.textContent = '配置已保存';
                    const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2000 });
                    toast.show();
                }
            } catch (_) {}
        }

        showToast(message, type = 'success') {
            try {
                const toastEl = document.getElementById('globalToast');
                const bodyEl = document.getElementById('globalToastBody');
                if (toastEl && bodyEl) {
                    bodyEl.textContent = message;
                    toastEl.className = `toast align-items-center text-bg-${type === 'success' ? 'success' : 'danger'} border-0`;
                    const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 3000 });
                    toast.show();
                }
            } catch (error) {
                console.error('显示提示失败:', error);
            }
        }

        validateRequiredFields() {
            const requiredFields = [
                'keywordsField',
                'cityCodeField'
            ];
            let isValid = true;
            requiredFields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (field && !this.validateField(field)) {
                    isValid = false;
                }
            });

            return isValid && this.validateSalaryRange();
        }

        // 获取当前配置
        getCurrentConfig() {
            const getMultiSelectValues = (selectId) => {
                const el = document.getElementById(selectId);
                if (!el) return '';
                return Array.from(el.selectedOptions).map(o => o.value).filter(Boolean).join(',');
            };

            return {
                keywords: document.getElementById('keywordsField')?.value || '',
                industry: getMultiSelectValues('industryField'),
                cityCode: getMultiSelectValues('cityCodeField'),
                experience: document.getElementById('experienceComboBox')?.value || '',
                jobType: document.getElementById('jobTypeComboBox')?.value || '',
                salary: document.getElementById('salaryComboBox')?.value || '',
                degree: document.getElementById('degreeComboBox')?.value || '',
                scale: document.getElementById('scaleComboBox')?.value || '',
                stage: document.getElementById('stageComboBox')?.value || '',
                expectedSalary: [
                    document.getElementById('minSalaryField')?.value || '0',
                    document.getElementById('maxSalaryField')?.value || '0'
                ],
                filterDeadHR: document.getElementById('filterDeadHRCheckBox')?.checked || false,
                sendImgResume: document.getElementById('sendImgResumeCheckBox')?.checked || false,
                recommendJobs: document.getElementById('recommendJobsCheckBox')?.checked || false,
                deadStatus: this.hrStatusTagsInput ? this.hrStatusTagsInput.getTags() : []
            };
        }

        // 加载Boss字典数据
        async loadBossDicts() {
            // 等待DOM元素准备就绪
            await this.waitForDOMElements();
            
            try {
                console.log('BossConfigForm: 开始加载Boss字典数据...');
                const res = await fetch('/dicts/BOSS_ZHIPIN');
                if (!res.ok) throw new Error('HTTP ' + res.status);
                const data = await res.json();
                console.log('BossConfigForm: 接收到字典数据:', data);
                
                if (!data || !Array.isArray(data.groups)) {
                    console.warn('BossConfigForm: 字典数据结构不正确:', data);
                    return;
                }

                const groupMap = new Map();
                data.groups.forEach(g => {
                    console.log(`BossConfigForm: 处理字典组: ${g.key}, 项目数量: ${Array.isArray(g.items) ? g.items.length : 0}`);
                    groupMap.set(g.key, Array.isArray(g.items) ? g.items : []);
                });

                // 渲染城市选择器
                this.renderCitySelector(groupMap.get('cityList') || []);
                
                // 渲染行业选择器
                this.renderIndustrySelector(groupMap.get('industryList') || []);
                
                // 渲染其他下拉框
                this.fillSelect('experienceComboBox', groupMap.get('experienceList'));
                this.fillSelect('salaryComboBox', groupMap.get('salaryList'));
                this.fillSelect('degreeComboBox', groupMap.get('degreeList'));
                this.fillSelect('scaleComboBox', groupMap.get('scaleList'));
                this.fillSelect('stageComboBox', groupMap.get('stageList'));
                this.fillSelect('jobTypeComboBox', groupMap.get('jobTypeList'));
                
                console.log('BossConfigForm: 字典数据加载完成');
                
                // 标记字典数据已加载完成
                this.dictDataLoaded = true;
                
                // 触发自定义事件，通知其他组件字典数据已就绪
                window.dispatchEvent(new CustomEvent('bossDictDataLoaded', {
                    detail: { groupMap: groupMap }
                }));
                
            } catch (e) {
                console.warn('BossConfigForm: 加载Boss字典失败：', e?.message || e);
                // 如果失败，延迟重试
                setTimeout(() => this.loadBossDicts(), 2000);
            }
        }

        // 等待DOM元素准备就绪
        async waitForDOMElements() {
            const requiredElements = [
                'cityCodeField',
                'experienceComboBox',
                'salaryComboBox',
                'degreeComboBox',
                'scaleComboBox',
                'stageComboBox',
                'jobTypeComboBox'
            ];

            return new Promise((resolve) => {
                let attempts = 0;
                const maxAttempts = 50; // 最多等待5秒

                const checkElements = () => {
                    attempts++;
                    const missingElements = requiredElements.filter(id => !document.getElementById(id));
                    
                    if (missingElements.length === 0) {
                        console.log('BossConfigForm: 所有DOM元素已准备就绪');
                        resolve();
                    } else if (attempts >= maxAttempts) {
                        console.warn('BossConfigForm: 等待DOM元素超时，缺失元素:', missingElements);
                        resolve(); // 即使超时也继续执行
                    } else {
                        console.log(`BossConfigForm: 等待DOM元素准备就绪，缺失: ${missingElements.join(', ')} (${attempts}/${maxAttempts})`);
                        setTimeout(checkElements, 100);
                    }
                };

                checkElements();
            });
        }

        // 渲染城市选择器
        renderCitySelector(cityItems) {
            console.log('BossConfigForm: 渲染城市选择器，城市数量:', cityItems.length);
            
            const citySelect = document.getElementById('cityCodeField');
            const citySearch = document.getElementById('citySearchField');
            const cityListContainer = document.getElementById('cityDropdownList');
            const cityDropdownBtn = document.getElementById('cityDropdownBtn');
            const citySummary = document.getElementById('citySelectionSummary');
            
            if (!citySelect) {
                console.warn('BossConfigForm: 未找到城市选择器元素');
                return;
            }

            // 更新城市摘要显示
            const updateCitySummary = () => {
                if (!cityDropdownBtn || !citySummary) return;
                const values = Array.from(citySelect.selectedOptions).map(o => o.textContent);
                if (values.length === 0) {
                    cityDropdownBtn.textContent = '选择城市';
                    citySummary.textContent = '未选择';
                } else if (values.length <= 2) {
                    const text = values.join('、');
                    cityDropdownBtn.textContent = text;
                    citySummary.textContent = `已选 ${values.length} 项：${text}`;
                } else {
                    cityDropdownBtn.textContent = `已选 ${values.length} 项`;
                    citySummary.textContent = `已选 ${values.length} 项`;
                }
            };

            // 将updateCitySummary方法绑定到实例，供其他方法调用
            this.updateCitySummary = updateCitySummary;

            // 渲染城市选项
            const renderCityOptions = (list) => {
                // 保留当前已选
                const selected = new Set(Array.from(citySelect.selectedOptions).map(o => o.value));

                // 重建隐藏select
                citySelect.innerHTML = '';
                list.forEach(it => {
                    const value = it.code ?? '';
                    const label = `${it.name ?? ''}${it.code ? ' (' + it.code + ')' : ''}`;
                    const opt = document.createElement('option');
                    opt.value = value;
                    opt.textContent = label;
                    if (selected.has(value)) opt.selected = true;
                    citySelect.appendChild(opt);
                });

                // 重建dropdown列表
                if (cityListContainer) {
                    cityListContainer.innerHTML = '';
                    list.forEach(it => {
                        const value = it.code ?? '';
                        const label = `${it.name ?? ''}${it.code ? ' (' + it.code + ')' : ''}`;

                        const item = document.createElement('div');
                        item.className = 'form-check mb-1';
                        const id = `city_chk_${value}`.replace(/[^a-zA-Z0-9_\-]/g, '_');
                        item.innerHTML = `
                            <input class="form-check-input" type="checkbox" value="${value}" id="${id}" ${selected.has(value) ? 'checked' : ''}>
                            <label class="form-check-label small" for="${id}">${label}</label>
                        `;
                        const checkbox = item.querySelector('input[type="checkbox"]');
                        checkbox.addEventListener('change', () => {
                            // 同步到隐藏select
                            const option = Array.from(citySelect.options).find(o => o.value === value);
                            if (option) option.selected = checkbox.checked;
                            updateCitySummary();
                        });
                        cityListContainer.appendChild(item);
                    });
                }

                updateCitySummary();
            };

            renderCityOptions(cityItems);
            
            // 绑定搜索功能
            if (citySearch) {
                citySearch.addEventListener('input', () => {
                    const kw = citySearch.value.trim().toLowerCase();
                    if (!kw) {
                        renderCityOptions(cityItems);
                        return;
                    }
                    const filtered = cityItems.filter(it =>
                        String(it.name || '').toLowerCase().includes(kw) ||
                        String(it.code || '').toLowerCase().includes(kw)
                    );
                    renderCityOptions(filtered);
                });
            }
        }

        // 渲染行业选择器
        renderIndustrySelector(industryItems) {
            console.log('BossConfigForm: 渲染行业选择器，行业数量:', industryItems.length);
            
            const industrySelect = document.getElementById('industryField');
            const industrySearch = document.getElementById('industrySearchField');
            const industryListContainer = document.getElementById('industryDropdownList');
            const industryDropdownBtn = document.getElementById('industryDropdownBtn');
            const industrySummary = document.getElementById('industrySelectionSummary');
            
            if (!industrySelect) {
                console.warn('BossConfigForm: 未找到行业选择器元素');
                return;
            }

            // 更新行业摘要显示
            const updateIndustrySummary = () => {
                if (!industryDropdownBtn || !industrySummary) return;
                const values = Array.from(industrySelect.selectedOptions).map(o => o.textContent);
                if (values.length === 0) {
                    industryDropdownBtn.textContent = '选择行业';
                    industrySummary.textContent = '未选择';
                } else if (values.length <= 2) {
                    const text = values.join('、');
                    industryDropdownBtn.textContent = text;
                    industrySummary.textContent = `已选 ${values.length} 项：${text}`;
                } else {
                    industryDropdownBtn.textContent = `已选 ${values.length} 项`;
                    industrySummary.textContent = `已选 ${values.length} 项`;
                }
            };

            // 将updateIndustrySummary方法绑定到实例，供其他方法调用
            this.updateIndustrySummary = updateIndustrySummary;

            // 渲染行业选项
            const renderIndustryOptions = (list) => {
                // 保留当前已选
                const selected = new Set(Array.from(industrySelect.selectedOptions).map(o => o.value));

                // 重建隐藏select
                industrySelect.innerHTML = '';
                list.forEach(it => {
                    const value = it.code ?? it.name ?? '';
                    const label = it.name ?? String(it.code ?? '');
                    const opt = document.createElement('option');
                    opt.value = value;
                    opt.textContent = label;
                    if (selected.has(value)) opt.selected = true;
                    industrySelect.appendChild(opt);
                });

                // 重建dropdown列表
                if (industryListContainer) {
                    industryListContainer.innerHTML = '';
                    list.forEach(it => {
                        const value = it.code ?? it.name ?? '';
                        const label = it.name ?? String(it.code ?? '');

                        const item = document.createElement('div');
                        item.className = 'form-check mb-1';
                        const id = `industry_chk_${value}`.replace(/[^a-zA-Z0-9_\-]/g, '_');
                        item.innerHTML = `
                            <input class="form-check-input" type="checkbox" value="${value}" id="${id}" ${selected.has(value) ? 'checked' : ''}>
                            <label class="form-check-label small" for="${id}">${label}</label>
                        `;
                        const checkbox = item.querySelector('input[type="checkbox"]');
                        checkbox.addEventListener('change', () => {
                            // 限制最多选择3个
                            const selectedCount = Array.from(industrySelect.selectedOptions).length;
                            if (checkbox.checked && selectedCount >= 3) {
                                checkbox.checked = false;
                                CommonUtils.showToast('最多只能选择3个行业', 'warning');
                                return;
                            }
                            
                            // 同步到隐藏select
                            const option = Array.from(industrySelect.options).find(o => o.value === value);
                            if (option) option.selected = checkbox.checked;
                            updateIndustrySummary();
                        });
                        industryListContainer.appendChild(item);
                    });
                }

                updateIndustrySummary();
            };

            renderIndustryOptions(industryItems);
            
            // 绑定搜索功能
            if (industrySearch) {
                industrySearch.addEventListener('input', () => {
                    const kw = industrySearch.value.trim().toLowerCase();
                    if (!kw) {
                        renderIndustryOptions(industryItems);
                        return;
                    }
                    const filtered = industryItems.filter(it =>
                        String(it.name || '').toLowerCase().includes(kw) ||
                        String(it.code || '').toLowerCase().includes(kw)
                    );
                    renderIndustryOptions(filtered);
                });
            }
        }

        // 填充下拉框
        fillSelect(selectId, items) {
            console.log(`BossConfigForm: 填充下拉框 ${selectId}，数据项数量:`, Array.isArray(items) ? items.length : 0);
            
            if (!Array.isArray(items) || items.length === 0) {
                console.warn(`BossConfigForm: 下拉框 ${selectId} 的数据无效:`, items);
                return;
            }

            const sel = document.getElementById(selectId);
            if (!sel) {
                console.warn(`BossConfigForm: 未找到下拉框元素: ${selectId}`);
                // 延迟重试
                setTimeout(() => {
                    const retrySel = document.getElementById(selectId);
                    if (retrySel) {
                        console.log(`BossConfigForm: 重试填充下拉框 ${selectId}`);
                        this.fillSelect(selectId, items);
                    }
                }, 500);
                return;
            }
            
            try {
                // 保留第一项"请选择"，其余重建
                const first = sel.querySelector('option');
                sel.innerHTML = '';
                if (first && first.value === '') sel.appendChild(first);
                
                items.forEach(it => {
                    const opt = document.createElement('option');
                    opt.value = it.code ?? it.name ?? '';
                    opt.textContent = it.name ?? String(it.code ?? '');
                    sel.appendChild(opt);
                });
                
                console.log(`BossConfigForm: 下拉框 ${selectId} 填充完成，共 ${items.length} 项`);
                
                // 触发change事件，通知其他组件
                sel.dispatchEvent(new Event('change', { bubbles: true }));
                
            } catch (error) {
                console.error(`BossConfigForm: 填充下拉框 ${selectId} 时出错:`, error);
            }
        }
    }

    // 导出为全局可用类，由 app.js 统一初始化
    window.Views.BossConfigForm = BossConfigApp;
})();
