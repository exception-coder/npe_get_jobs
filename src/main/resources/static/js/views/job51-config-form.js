// 51job配置表单管理类
class Job51ConfigForm {
    constructor() {
        this.config = {};
        this.isRunning = false;
        this.taskExecutor = null; // 任务执行控制器
        this.init();
    }

    init() {
        this.initializeTooltips();
        this.bindEvents();
        // 先加载字典数据，再加载配置数据，确保下拉框已准备好
        this.loadDataSequentially();
        // 初始化任务执行控制器
        this.initTaskExecutor();
    }
    
    initTaskExecutor() {
        // 创建任务执行控制器实例
        this.taskExecutor = new TaskExecutor(
            'job51',
            '/api/job51',
            'job51',
            this, // configProvider
            {
                showToast: this.showToast.bind(this),
                showAlertModal: this.showAlertModal.bind(this),
                showConfirmModal: this.showConfirmModal.bind(this)
            }
        );
    }

    // 初始化工具提示
    initializeTooltips() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // 绑定事件
    bindEvents() {
        // 保存配置按钮
        const saveConfigBtn = document.getElementById('job51SaveConfigBtn');
        if (saveConfigBtn) {
            saveConfigBtn.addEventListener('click', () => {
                this.handleSaveConfig();
            });
        }

        // 表单验证
        this.bindFormValidation();
    }

    // 表单验证
    bindFormValidation() {
        const requiredFields = [
            'job51KeywordsField',
            'job51CityCodeField',
            'job51ExperienceComboBox',
            'job51JobTypeComboBox',
            'job51SalaryComboBox',
            'job51DegreeComboBox'
        ];

        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('blur', () => {
                    if (field.tagName === 'SELECT') {
                        this.validateSelectField(field);
                    } else {
                        this.validateField(field);
                    }
                });
            }
        });
    }

    // 验证单个字段
    validateField(field) {
        const value = field.value.trim();
        const isValid = value.length > 0;
        this.updateFieldValidation(field, isValid);
        return isValid;
    }

    // 验证选择框字段
    validateSelectField(field) {
        const value = field.value;
        const isValid = value && value !== '';
        this.updateFieldValidation(field, isValid);
        return isValid;
    }

    // 更新字段验证状态
    updateFieldValidation(field, isValid) {
        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
        }
    }


    // 保存配置
    saveConfig() {
        const getMultiSelectValues = (selectId) => {
            const el = document.getElementById(selectId);
            if (!el) return '';
            return Array.from(el.selectedOptions).map(o => o.value).filter(Boolean).join(',');
        };

        this.config = {
            // 搜索条件
            keywords: document.getElementById('job51KeywordsField')?.value || '',
            industry: getMultiSelectValues('job51IndustryField'),
            cityCode: getMultiSelectValues('job51CityCodeField'),
            
            // 职位要求
            experience: document.getElementById('job51ExperienceComboBox')?.value || '',
            jobType: document.getElementById('job51JobTypeComboBox')?.value || '',
            salary: document.getElementById('job51SalaryComboBox')?.value || '',
            degree: document.getElementById('job51DegreeComboBox')?.value || '',
            scale: document.getElementById('job51ScaleComboBox')?.value || '',
            companyNature: document.getElementById('job51CompanyNatureComboBox')?.value || '',
            
            
            // 功能开关
            autoApply: document.getElementById('job51AutoApplyCheckBox')?.checked || false
        };

        localStorage.setItem('job51Config', JSON.stringify(this.config));

        // 同步保存到后端
        try {
            fetch('/api/config/job51', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.config)
            }).then(() => {}).catch(() => {});
        } catch (e) {}
    }

    // 加载保存的配置（优先后端，其次本地缓存）
    async loadSavedConfig() {
        try {
            console.log('开始加载51job保存的配置...');
            const res = await fetch('/api/config/job51');
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
            
            console.log('51job后端配置数据:', data);
            if (data && typeof data === 'object' && Object.keys(data).length) {
                this.config = data;
                this.populateForm();
                localStorage.setItem('job51Config', JSON.stringify(this.config));
                console.log('51job配置已从后端加载并回填表单');
                return;
            }
            
            // 如果后端没有数据，尝试本地缓存
            const savedConfig = localStorage.getItem('job51Config');
            if (savedConfig) {
                try {
                    this.config = JSON.parse(savedConfig);
                    this.populateForm();
                    console.log('51job配置已从本地缓存加载并回填表单');
                } catch (error) {
                    console.warn('51job本地配置损坏，已清理：' + error.message);
                    localStorage.removeItem('job51Config');
                }
            }
        } catch (err) {
            console.warn('51job后端配置读取失败：' + (err?.message || '未知错误'));
            // 尝试本地缓存
            const savedConfig = localStorage.getItem('job51Config');
            if (savedConfig) {
                try {
                    this.config = JSON.parse(savedConfig);
                    this.populateForm();
                    console.log('51job配置已从本地缓存加载并回填表单');
                } catch (error) {
                    console.warn('51job本地配置损坏，已清理：' + error.message);
                    localStorage.removeItem('job51Config');
                }
            }
        }
    }

    // 填充表单
    populateForm() {
        Object.keys(this.config).forEach(key => {
            const element = document.getElementById(this.getFieldId(key));
            if (element) {
                if (element.type === 'checkbox') {
                    element.checked = this.config[key];
                } else {
                    // 处理可能的数组字段转换为逗号分隔字符串
                    let value = this.config[key];
                    if (Array.isArray(value)) {
                        value = value.join(',');
                        console.log(`51job: 数组字段 ${key} 转换为字符串:`, this.config[key], '->', value);
                    }
                    element.value = value || '';
                }
            }
        });

        // 回填城市多选
        try {
            // 处理数组格式（从后端返回）或字符串格式（从本地缓存）
            let cityCodeStr = '';
            if (Array.isArray(this.config.cityCode)) {
                cityCodeStr = this.config.cityCode.join(',');
            } else {
                cityCodeStr = this.config.cityCode || '';
            }
            
            const codes = cityCodeStr.split(',').map(s => s.trim()).filter(Boolean);
            const citySelect = document.getElementById('job51CityCodeField');
            if (citySelect && codes.length) {
                console.log('51job回填城市选择，原始数据:', this.config.cityCode, '处理后:', codes);
                Array.from(citySelect.options).forEach(opt => {
                    opt.selected = codes.includes(opt.value);
                });
                
                // 同步下拉复选框
                const cityListContainer = document.getElementById('job51CityDropdownList');
                const cityDropdownBtn = document.getElementById('job51CityDropdownBtn');
                const citySummary = document.getElementById('job51CitySelectionSummary');
                const selectedSet = new Set(codes);
                if (cityListContainer) {
                    cityListContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                        checkbox.checked = selectedSet.has(checkbox.value);
                    });
                }
                
                // 更新按钮文案和摘要
                if (cityDropdownBtn && citySummary) {
                    const values = Array.from(citySelect.selectedOptions).map(o => o.textContent || '').filter(Boolean);
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
            }
        } catch (_) {}

        // 回填行业多选（支持二级列表）
        try {
            // 处理数组格式（从后端返回）或字符串格式（从本地缓存）
            let industryStr = '';
            if (Array.isArray(this.config.industry)) {
                industryStr = this.config.industry.join(',');
            } else {
                industryStr = this.config.industry || '';
            }
            
            const codes = industryStr.split(',').map(s => s.trim()).filter(Boolean);
            const industrySelect = document.getElementById('job51IndustryField');
            if (industrySelect && codes.length) {
                console.log('51job回填行业选择，原始数据:', this.config.industry, '处理后:', codes);
                Array.from(industrySelect.options).forEach(opt => {
                    opt.selected = codes.includes(opt.value);
                });
                
                // 同步下拉复选框
                const industryParentList = document.getElementById('job51IndustryParentList');
                const industryChildList = document.getElementById('job51IndustryChildList');
                const industryDropdownBtn = document.getElementById('job51IndustryDropdownBtn');
                const industrySummary = document.getElementById('job51IndustrySelectionSummary');
                const selectedSet = new Set(codes);
                
                if (industryChildList) {
                    industryChildList.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                        checkbox.checked = selectedSet.has(checkbox.value);
                    });
                }
                
                // 更新按钮文案和摘要
                if (this.updateIndustrySummary) {
                    this.updateIndustrySummary();
                } else if (industryDropdownBtn && industrySummary) {
                    const values = Array.from(industrySelect.selectedOptions).map(o => o.textContent || '').filter(Boolean);
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
                }
                
                // 更新父级列表中的计数（如果有）
                if (industryParentList) {
                    industryParentList.querySelectorAll('div.px-2').forEach(parentDiv => {
                        // 这里只是触发重新渲染，实际渲染由renderIndustrySelection负责
                    });
                }
            }
        } catch (_) {}
    }

    // 获取字段ID
    getFieldId(key) {
        const fieldMap = {
            keywords: 'job51KeywordsField',
            industry: 'job51IndustryField',
            cityCode: 'job51CityCodeField',
            experience: 'job51ExperienceComboBox',
            jobType: 'job51JobTypeComboBox',
            salary: 'job51SalaryComboBox',
            degree: 'job51DegreeComboBox',
            scale: 'job51ScaleComboBox',
            companyNature: 'job51CompanyNatureComboBox',
            autoApply: 'job51AutoApplyCheckBox'
        };
        return fieldMap[key] || key;
    }

    // 按顺序加载数据：先字典，后配置
    async loadDataSequentially() {
        try {
            console.log('51job: 开始按顺序加载数据：字典 -> 配置');
            
            // 先加载字典数据
            await this.loadJob51Dicts();
            console.log('51job: 字典数据加载完成，开始加载配置数据');
            
            // 等待DOM元素完全渲染
            await this.waitForDOMReady();
            
            // 再加载配置数据
            await this.loadSavedConfig();
            console.log('51job: 配置数据加载完成');
        } catch (error) {
            console.error('51job数据加载失败:', error);
        }
    }

    // 等待DOM元素完全准备就绪
    async waitForDOMReady() {
        return new Promise((resolve) => {
            // 等待一个事件循环，确保所有DOM操作完成
            setTimeout(() => {
                console.log('51job: DOM元素准备就绪');
                resolve();
            }, 100);
        });
    }

    // 加载51job字典数据
    async loadJob51Dicts() {
        try {
            console.log('开始加载51job字典数据...');
            const res = await fetch('/dicts/JOB_51');
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const data = await res.json();
            console.log('接收到51job字典数据:', data);
            
            if (!data || !Array.isArray(data.groups)) {
                console.warn('51job字典数据结构不正确:', data);
                return;
            }

            const groupMap = new Map();
            data.groups.forEach(g => {
                console.log(`处理51job字典组: ${g.key}, 项目数量: ${Array.isArray(g.items) ? g.items.length : 0}`);
                groupMap.set(g.key, Array.isArray(g.items) ? g.items : []);
            });

            // 渲染城市选择
            const cityItems = groupMap.get('cityList') || [];
            console.log('51job城市数据:', cityItems);
            this.renderCitySelection(cityItems);

            // 渲染行业选择（二级列表）
            const industryItems = groupMap.get('industryList') || [];
            console.log('51job行业数据:', industryItems);
            this.renderIndustrySelection(industryItems);

            // 渲染其他选择框
            console.log('开始渲染51job其他下拉框...');
            this.fillSelect('job51ExperienceComboBox', groupMap.get('experienceList'));
            this.fillSelect('job51JobTypeComboBox', groupMap.get('jobTypeList'));
            this.fillSelect('job51SalaryComboBox', groupMap.get('salaryList'));
            this.fillSelect('job51DegreeComboBox', groupMap.get('degreeList'));
            this.fillSelect('job51ScaleComboBox', groupMap.get('scaleList'));
            this.fillSelect('job51CompanyNatureComboBox', groupMap.get('companyNatureList'));
            console.log('51job所有下拉框渲染完成');

        } catch (e) {
            console.warn('加载51job字典失败：', e?.message || e);
            throw e; // 重新抛出错误，让调用者知道字典加载失败
        }
    }

    // 渲染行业选择（二级列表）
    renderIndustrySelection(industryItems) {
        console.log('51job: 渲染行业选择器（级联选择），行业数量:', industryItems.length);
        
        const industrySelect = document.getElementById('job51IndustryField');
        const industrySearch = document.getElementById('job51IndustrySearchField');
        const parentListContainer = document.getElementById('job51IndustryParentList');
        const childListContainer = document.getElementById('job51IndustryChildList');
        const industryDropdownBtn = document.getElementById('job51IndustryDropdownBtn');
        const industrySummary = document.getElementById('job51IndustrySelectionSummary');

        if (!industrySelect || !parentListContainer || !childListContainer) {
            console.error('51job: 行业选择器DOM元素未找到');
            return;
        }

        // 保存原始数据供搜索使用
        this.allIndustryItems = industryItems;

        // 区分父级和子级
        const parents = industryItems.filter(it => !it.parentCode);
        const children = industryItems.filter(it => it.parentCode);
        
        // 构建映射关系
        const childrenMap = new Map();
        parents.forEach(parent => {
            childrenMap.set(parent.code, children.filter(child => child.parentCode === parent.code));
        });
        
        console.log('51job: 一级行业数:', parents.length, '二级行业数:', children.length);

        // 当前选中的父级行业
        let currentParentCode = null;

        const updateIndustrySummary = () => {
            if (!industrySelect || !industryDropdownBtn || !industrySummary) return;
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

        // 初始化：将所有子项添加到隐藏的select中，以便后续回填
        console.log('51job: 初始化行业select，添加所有子项:', children.length);
        industrySelect.innerHTML = '';
        children.forEach(child => {
            const value = child.code ?? child.name ?? '';
            const label = child.name ?? String(child.code ?? '');
            const opt = document.createElement('option');
            opt.value = value;
            opt.textContent = label;
            industrySelect.appendChild(opt);
        });

        // 渲染左侧一级行业列表
        const renderParentList = (parentList) => {
            parentListContainer.innerHTML = '';
            const selected = new Set(Array.from(industrySelect.selectedOptions).map(o => o.value));
            
            parentList.forEach(parent => {
                const parentCode = parent.code ?? '';
                const parentName = parent.name ?? String(parent.code ?? '');
                const childCount = (childrenMap.get(parentCode) || []).length;
                
                // 计算该父级下有多少子项被选中
                const childItems = childrenMap.get(parentCode) || [];
                const selectedCount = childItems.filter(child => selected.has(child.code ?? child.name ?? '')).length;
                
                const itemDiv = document.createElement('div');
                itemDiv.className = 'px-2 py-1 mb-1 rounded';
                itemDiv.style.cursor = 'pointer';
                itemDiv.style.transition = 'background-color 0.15s';
                
                if (currentParentCode === parentCode) {
                    itemDiv.classList.add('bg-primary', 'text-white');
                }
                
                itemDiv.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="small">${parentName}</span>
                        <span class="badge ${currentParentCode === parentCode ? 'bg-light text-primary' : 'bg-secondary'}">${selectedCount}/${childCount}</span>
                    </div>
                `;
                
                // 鼠标悬停效果
                itemDiv.addEventListener('mouseenter', () => {
                    if (currentParentCode !== parentCode) {
                        itemDiv.style.backgroundColor = '#f8f9fa';
                    }
                });
                itemDiv.addEventListener('mouseleave', () => {
                    if (currentParentCode !== parentCode) {
                        itemDiv.style.backgroundColor = '';
                    }
                });
                
                // 点击选择父级行业
                itemDiv.addEventListener('click', (e) => {
                    e.stopPropagation(); // 阻止事件冒泡，防止dropdown关闭
                    currentParentCode = parentCode;
                    renderParentList(parentList);
                    renderChildList(childrenMap.get(parentCode) || []);
                });
                
                parentListContainer.appendChild(itemDiv);
            });
        };

        // 渲染右侧二级行业列表
        const renderChildList = (childList) => {
            childListContainer.innerHTML = '';
            
            if (childList.length === 0) {
                childListContainer.innerHTML = '<div class="text-center text-muted small py-4">该分类下暂无子项</div>';
                return;
            }
            
            const selected = new Set(Array.from(industrySelect.selectedOptions).map(o => o.value));
            
            // 渲染复选框列表（不再重建select，因为所有选项已在初始化时添加）
            childList.forEach(child => {
                const value = child.code ?? child.name ?? '';
                const label = child.name ?? String(child.code ?? '');
                const checkDiv = document.createElement('div');
                checkDiv.className = 'form-check mb-1';
                const checkId = `job51_industry_chk_${value}`.replace(/[^a-zA-Z0-9_\-]/g, '_');
                checkDiv.innerHTML = `
                    <input class="form-check-input" type="checkbox" value="${value}" id="${checkId}" ${selected.has(value) ? 'checked' : ''}>
                    <label class="form-check-label small" for="${checkId}">${label}</label>
                `;
                
                const checkbox = checkDiv.querySelector('input[type="checkbox"]');
                checkbox.addEventListener('change', (e) => {
                    e.stopPropagation(); // 阻止事件冒泡，防止dropdown关闭
                    
                    // 限制最多选择5个
                    const currentSelected = Array.from(industrySelect.selectedOptions);
                    if (checkbox.checked && currentSelected.length >= 5) {
                        checkbox.checked = false;
                        this.showToast('最多只能选择5个行业', 'warning');
                        return;
                    }
                    
                    const option = Array.from(industrySelect.options).find(o => o.value === value);
                    if (option) option.selected = checkbox.checked;
                    updateIndustrySummary();
                    // 更新父级列表中的计数
                    renderParentList(parents);
                });
                
                childListContainer.appendChild(checkDiv);
            });
        };

        // 初始渲染
        renderParentList(parents);
        
        // 如果有已选项，自动展开对应的父级
        const selectedValues = Array.from(industrySelect.selectedOptions).map(o => o.value);
        if (selectedValues.length > 0) {
            // 找到第一个已选项的父级
            const firstSelected = children.find(c => selectedValues.includes(c.code ?? c.name ?? ''));
            if (firstSelected && firstSelected.parentCode) {
                currentParentCode = firstSelected.parentCode;
                renderParentList(parents);
                renderChildList(childrenMap.get(currentParentCode) || []);
            }
        }
        
        updateIndustrySummary();
        
        // 搜索功能
        if (industrySearch) {
            industrySearch.addEventListener('input', () => {
                const kw = (industrySearch.value || '').trim().toLowerCase();
                if (!kw) {
                    // 无搜索词，显示所有父级
                    renderParentList(parents);
                    if (currentParentCode) {
                        renderChildList(childrenMap.get(currentParentCode) || []);
                    }
                    return;
                }
                
                // 筛选匹配的父级（按名称或编码）
                const matchedParents = parents.filter(p => 
                    String(p.name || '').toLowerCase().includes(kw) || 
                    String(p.code || '').toLowerCase().includes(kw)
                );
                
                // 筛选匹配的子级
                const matchedChildren = children.filter(c => 
                    String(c.name || '').toLowerCase().includes(kw) || 
                    String(c.code || '').toLowerCase().includes(kw)
                );
                
                // 如果有子级匹配，则显示其父级
                const parentCodesFromChildren = new Set(matchedChildren.map(c => c.parentCode).filter(Boolean));
                const parentsToShow = new Set([
                    ...matchedParents.map(p => p.code),
                    ...Array.from(parentCodesFromChildren)
                ]);
                
                const filteredParents = parents.filter(p => parentsToShow.has(p.code));
                
                renderParentList(filteredParents);
                
                // 如果只有一个父级匹配或当前有选中的父级，自动展开
                if (filteredParents.length === 1) {
                    currentParentCode = filteredParents[0].code;
                    renderParentList(filteredParents);
                    renderChildList((childrenMap.get(currentParentCode) || []).filter(c => 
                        String(c.name || '').toLowerCase().includes(kw) || 
                        String(c.code || '').toLowerCase().includes(kw)
                    ));
                } else if (currentParentCode && parentsToShow.has(currentParentCode)) {
                    renderChildList((childrenMap.get(currentParentCode) || []).filter(c => 
                        String(c.name || '').toLowerCase().includes(kw) || 
                        String(c.code || '').toLowerCase().includes(kw)
                    ));
                } else {
                    childListContainer.innerHTML = '<div class="text-center text-muted small py-4"><i class="bi bi-search me-1"></i>请选择左侧分类</div>';
                }
            });
        }
    }

    // 渲染城市选择
    renderCitySelection(cityItems) {
        const citySelect = document.getElementById('job51CityCodeField');
        const citySearch = document.getElementById('job51CitySearchField');
        const cityListContainer = document.getElementById('job51CityDropdownList');
        const cityDropdownBtn = document.getElementById('job51CityDropdownBtn');
        const citySummary = document.getElementById('job51CitySelectionSummary');

        const updateCitySummary = () => {
            if (!citySelect || !cityDropdownBtn || !citySummary) return;
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

        const renderCityOptions = (list) => {
            if (!citySelect) return;
            
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
                    const id = `job51_city_chk_${value}`.replace(/[^a-zA-Z0-9_\-]/g, '_');
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

    // 通用方法：将字典渲染到 select
    fillSelect(selectId, items) {
        console.log(`51job: 填充下拉框 ${selectId}，数据项数量:`, Array.isArray(items) ? items.length : 0);
        
        if (!Array.isArray(items) || items.length === 0) {
            console.warn(`51job: 下拉框 ${selectId} 的数据无效:`, items);
            return;
        }

        const sel = document.getElementById(selectId);
        if (!sel) {
            console.warn(`51job: 未找到下拉框元素: ${selectId}`);
            // 延迟重试
            setTimeout(() => {
                const retrySel = document.getElementById(selectId);
                if (retrySel) {
                    console.log(`51job: 重试填充下拉框 ${selectId}`);
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
            
            console.log(`51job: 下拉框 ${selectId} 填充完成，共 ${items.length} 项`);
            
        } catch (error) {
            console.error(`51job: 填充下拉框 ${selectId} 时出错:`, error);
        }
    }

    // 更新城市选择摘要
    updateCitySummary() {
        const citySelect = document.getElementById('job51CityCodeField');
        const cityDropdownBtn = document.getElementById('job51CityDropdownBtn');
        const citySummary = document.getElementById('job51CitySelectionSummary');
        
        if (!citySelect || !cityDropdownBtn || !citySummary) return;
        
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
    }

    // 处理保存配置
    handleSaveConfig() {
        this.saveConfig();
        this.showToast('51job配置已保存');
    }

    // 获取当前配置
    getCurrentConfig() {
        const getMultiSelectValues = (selectId) => {
            const el = document.getElementById(selectId);
            if (!el) return '';
            return Array.from(el.selectedOptions).map(o => o.value).filter(Boolean).join(',');
        };
        
        return {
            keywords: document.getElementById('job51KeywordsField')?.value || '',
            industry: getMultiSelectValues('job51IndustryField'),
            cityCode: getMultiSelectValues('job51CityCodeField'),
            experience: document.getElementById('job51ExperienceComboBox')?.value || '',
            jobType: document.getElementById('job51JobTypeComboBox')?.value || '',
            salary: document.getElementById('job51SalaryComboBox')?.value || '',
            degree: document.getElementById('job51DegreeComboBox')?.value || '',
            scale: document.getElementById('job51ScaleComboBox')?.value || '',
            companyNature: document.getElementById('job51CompanyNatureComboBox')?.value || '',
            autoApply: document.getElementById('job51AutoApplyCheckBox')?.checked || false
        };
    }

    // 验证必填字段
    validateRequiredFields() {
        const requiredFields = [
            'job51KeywordsField',
            'job51CityCodeField',
            'job51ExperienceComboBox',
            'job51JobTypeComboBox',
            'job51SalaryComboBox',
            'job51DegreeComboBox'
        ];

        let isValid = true;
        
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                if (field.tagName === 'SELECT') {
                    if (!this.validateSelectField(field)) {
                        isValid = false;
                    }
                } else {
                    if (!this.validateField(field)) {
                        isValid = false;
                    }
                }
            }
        });

        return isValid;
    }


    // 显示全局Toast
    showToast(message, variant = 'success') {
        try {
            const toastEl = document.getElementById('globalToast');
            const bodyEl = document.getElementById('globalToastBody');
            if (!toastEl || !bodyEl) return;
            bodyEl.textContent = message || '操作成功';
            const variants = ['success', 'danger', 'warning', 'info', 'primary', 'secondary', 'dark'];
            variants.forEach(v => toastEl.classList.remove(`text-bg-${v}`));
            toastEl.classList.add(`text-bg-${variant}`);
            const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2000 });
            toast.show();
        } catch (_) {}
    }

    // 显示确认对话框
    showConfirmModal(title, message, onConfirm, onCancel) {
        const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
        document.getElementById('confirmModalLabel').textContent = title;
        document.getElementById('confirmModalBody').textContent = message;
        
        const okBtn = document.getElementById('confirmModalOk');
        const newOkBtn = okBtn.cloneNode(true);
        okBtn.parentNode.replaceChild(newOkBtn, okBtn);
        
        newOkBtn.addEventListener('click', () => {
            modal.hide();
            if (onConfirm) onConfirm();
        });
        
        modal._element.addEventListener('hidden.bs.modal', () => {
            if (onCancel) onCancel();
        }, { once: true });
        
        modal.show();
    }

    // 显示提示对话框
    showAlertModal(title, message) {
        const modal = new bootstrap.Modal(document.getElementById('alertModal'));
        document.getElementById('alertModalLabel').textContent = title;
        document.getElementById('alertModalBody').textContent = message;
        modal.show();
    }
}

// 导出到全局
window.Job51ConfigForm = Job51ConfigForm;
