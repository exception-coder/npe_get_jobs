// 智联招聘配置表单管理类
class ZhilianConfigForm {
    constructor() {
        this.config = {};
        this.taskExecutor = null; // 任务执行控制器
        this.init();
    }

    init() {
        this.initializeTooltips();
        this.bindEvents();
        this.loadDataSequentially();
        // 初始化任务执行控制器
        this.initTaskExecutor();
    }
    
    initTaskExecutor() {
        // 创建任务执行控制器实例
        this.taskExecutor = new TaskExecutor(
            'zhilian',
            '/api/zhilian',
            'zhilian',
            this, // configProvider
            {
                showToast: this.showToast.bind(this),
                showAlertModal: this.showAlertModal.bind(this),
                showConfirmModal: this.showConfirmModal.bind(this)
            }
        );
    }

    initializeTooltips() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    bindEvents() {
        document.getElementById('zhilianSaveConfigBtn')?.addEventListener('click', () => this.handleSaveConfig());

        this.bindFormValidation();
    }

    bindFormValidation() {
        const requiredFields = [
            'zhilianKeywordsField',
            'zhilianCityCodeField',
            'zhilianExperienceComboBox',
            'zhilianJobTypeComboBox',
            'zhilianSalaryComboBox',
            'zhilianDegreeComboBox'
        ];
        requiredFields.forEach(id => {
            const field = document.getElementById(id);
            if (!field) return;
            field.addEventListener('blur', () => {
                if (field.tagName === 'SELECT') this.validateSelectField(field);
                else this.validateField(field);
            });
        });
    }

    validateField(field) {
        const value = (field.value || '').trim();
        const ok = value.length > 0;
        this.updateFieldValidation(field, ok);
        return ok;
    }

    validateSelectField(field) {
        const ok = !!field.value;
        this.updateFieldValidation(field, ok);
        return ok;
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


    getMultiValues(selectId) {
        const el = document.getElementById(selectId);
        if (!el) return '';
        return Array.from(el.selectedOptions).map(o => o.value).filter(Boolean).join(',');
    }

    getCurrentConfig() {
        return {
            // 搜索条件
            keywords: document.getElementById('zhilianKeywordsField')?.value || '',
            industry: this.getMultiValues('zhilianIndustryField'),
            cityCode: this.getMultiValues('zhilianCityCodeField'),

            // 职位要求
            experience: document.getElementById('zhilianExperienceComboBox')?.value || '',
            jobType: document.getElementById('zhilianJobTypeComboBox')?.value || '',
            salary: document.getElementById('zhilianSalaryComboBox')?.value || '',
            degree: document.getElementById('zhilianDegreeComboBox')?.value || '',
            scale: document.getElementById('zhilianScaleComboBox')?.value || '',
            companyNature: document.getElementById('zhilianCompanyNatureComboBox')?.value || '',

            // 功能开关
            blacklistFilter: document.getElementById('zhilianBlacklistFilterCheckBox')?.checked || false,

            // AI配置
            enableAIJobMatch: document.getElementById('zhilianEnableAIJobMatchCheckBox')?.checked || false
        };
    }

    saveConfig() {
        this.config = this.getCurrentConfig();
        localStorage.setItem('zhilianConfig', JSON.stringify(this.config));
        try {
            fetch('/api/config/zhilian', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.config)
            }).then(() => {}).catch(() => {});
        } catch (_) {}
    }

    async loadSavedConfig() {
        try {
            const res = await fetch('/api/config/zhilian');
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const ct = res.headers.get('content-type') || '';
            let data;
            if (ct.includes('application/json')) data = await res.json();
            else {
                const text = await res.text();
                const snippet = (text || '').slice(0, 80);
                throw new Error('返回非JSON：' + snippet);
            }
            if (data && typeof data === 'object' && Object.keys(data).length) {
                this.config = data;
                this.populateForm();
                localStorage.setItem('zhilianConfig', JSON.stringify(this.config));
                return;
            }
            const saved = localStorage.getItem('zhilianConfig');
            if (saved) {
                try {
                    this.config = JSON.parse(saved);
                    this.populateForm();
                } catch (e) {
                    localStorage.removeItem('zhilianConfig');
                }
            }
        } catch (_) {
            const saved = localStorage.getItem('zhilianConfig');
            if (saved) {
                try {
                    this.config = JSON.parse(saved);
                    this.populateForm();
                } catch (e) {
                    localStorage.removeItem('zhilianConfig');
                }
            }
        }
    }

    getFieldId(key) {
        const map = {
            keywords: 'zhilianKeywordsField',
            industry: 'zhilianIndustryField',
            cityCode: 'zhilianCityCodeField',
            experience: 'zhilianExperienceComboBox',
            jobType: 'zhilianJobTypeComboBox',
            salary: 'zhilianSalaryComboBox',
            degree: 'zhilianDegreeComboBox',
            scale: 'zhilianScaleComboBox',
            companyNature: 'zhilianCompanyNatureComboBox',
            blacklistFilter: 'zhilianBlacklistFilterCheckBox',
            blacklistKeywords: 'zhilianBlacklistKeywordsTextArea',
            enableAIJobMatch: 'zhilianEnableAIJobMatchCheckBox'
        };
        return map[key] || key;
    }

    populateForm() {
        Object.keys(this.config).forEach(key => {
            const el = document.getElementById(this.getFieldId(key));
            if (!el) return;
            if (el.type === 'checkbox') el.checked = !!this.config[key];
            else {
                let value = this.config[key];
                if (Array.isArray(value)) value = value.join(',');
                el.value = value || '';
            }
        });

        // 回填城市多选（隐藏select）并同步dropdown显示
        try {
            let cityStr = '';
            if (Array.isArray(this.config.cityCode)) cityStr = this.config.cityCode.join(',');
            else cityStr = this.config.cityCode || '';
            const codes = cityStr.split(',').map(s => s.trim()).filter(Boolean);
            const citySelect = document.getElementById('zhilianCityCodeField');
            if (citySelect && codes.length) {
                Array.from(citySelect.options).forEach(opt => { opt.selected = codes.includes(opt.value); });
                const list = document.getElementById('zhilianCityDropdownList');
                const btn = document.getElementById('zhilianCityDropdownBtn');
                const summary = document.getElementById('zhilianCitySelectionSummary');
                const set = new Set(codes);
                if (list) list.querySelectorAll('input[type="checkbox"]').forEach(chk => chk.checked = set.has(chk.value));
                if (btn && summary) {
                    const values = Array.from(citySelect.selectedOptions).map(o => o.textContent || '').filter(Boolean);
                    if (values.length === 0) { btn.textContent = '选择城市'; summary.textContent = '未选择'; }
                    else if (values.length <= 2) { const text = values.join('、'); btn.textContent = text; summary.textContent = `已选 ${values.length} 项：${text}`; }
                    else { btn.textContent = `已选 ${values.length} 项`; summary.textContent = `已选 ${values.length} 项`; }
                }
            }
        } catch (_) {}

        // 回填行业多选（隐藏select）并同步dropdown显示
        try {
            let industryStr = '';
            if (Array.isArray(this.config.industry)) industryStr = this.config.industry.join(',');
            else industryStr = this.config.industry || '';
            const codes = industryStr.split(',').map(s => s.trim()).filter(Boolean);
            const industrySelect = document.getElementById('zhilianIndustryField');
            if (industrySelect && codes.length) {
                Array.from(industrySelect.options).forEach(opt => { opt.selected = codes.includes(opt.value); });
                const childListContainer = document.getElementById('zhilianIndustryChildList');
                const btn = document.getElementById('zhilianIndustryDropdownBtn');
                const summary = document.getElementById('zhilianIndustrySelectionSummary');
                const set = new Set(codes);
                if (childListContainer) childListContainer.querySelectorAll('input[type="checkbox"]').forEach(chk => chk.checked = set.has(chk.value));
                if (btn && summary) {
                    const values = Array.from(industrySelect.selectedOptions).map(o => o.textContent || '').filter(Boolean);
                    if (values.length === 0) { btn.textContent = '选择行业'; summary.textContent = '未选择'; }
                    else if (values.length <= 2) { const text = values.join('、'); btn.textContent = text; summary.textContent = `已选 ${values.length} 项：${text}`; }
                    else { btn.textContent = `已选 ${values.length} 项`; summary.textContent = `已选 ${values.length} 项`; }
                }
            }
        } catch (_) {}
    }

    async loadDataSequentially() {
        try {
            console.log('智联招聘: 开始按顺序加载数据：字典 -> 配置');
            
            // 先加载字典数据
            await this.loadZhilianDicts();
            console.log('智联招聘: 字典数据加载完成，开始加载配置数据');
            
            // 等待DOM元素完全渲染
            await this.waitForDOMReady();
            
            // 再加载配置数据
            await this.loadSavedConfig();
            console.log('智联招聘: 配置数据加载完成');
        } catch (e) {
            console.warn('智联数据加载失败:', e?.message || e);
        }
    }

    // 等待DOM元素完全准备就绪
    async waitForDOMReady() {
        return new Promise((resolve) => {
            // 等待一个事件循环，确保所有DOM操作完成
            setTimeout(() => {
                console.log('智联招聘: DOM元素准备就绪');
                resolve();
            }, 100);
        });
    }

    async loadZhilianDicts() {
        const res = await fetch('/dicts/ZHILIAN_ZHAOPIN');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        if (!data || !Array.isArray(data.groups)) return;
        const groupMap = new Map();
        data.groups.forEach(g => groupMap.set(g.key, Array.isArray(g.items) ? g.items : []));

        // 渲染城市
        this.renderCitySelection(groupMap.get('cityList') || []);

        // 渲染行业
        this.renderIndustrySelection(groupMap.get('industryList') || []);

        // 渲染其他下拉
        this.fillSelect('zhilianExperienceComboBox', groupMap.get('experienceList'));
        this.fillSelect('zhilianJobTypeComboBox', groupMap.get('jobTypeList'));
        this.fillSelect('zhilianSalaryComboBox', groupMap.get('salaryList'));
        this.fillSelect('zhilianDegreeComboBox', groupMap.get('degreeList'));
        this.fillSelect('zhilianScaleComboBox', groupMap.get('scaleList'));
        this.fillSelect('zhilianCompanyNatureComboBox', groupMap.get('companyNatureList'));
    }

    renderCitySelection(cityItems) {
        const citySelect = document.getElementById('zhilianCityCodeField');
        const citySearch = document.getElementById('zhilianCitySearchField');
        const cityListContainer = document.getElementById('zhilianCityDropdownList');
        const cityDropdownBtn = document.getElementById('zhilianCityDropdownBtn');
        const citySummary = document.getElementById('zhilianCitySelectionSummary');

        const updateCitySummary = () => {
            if (!citySelect || !cityDropdownBtn || !citySummary) return;
            const values = Array.from(citySelect.selectedOptions).map(o => o.textContent);
            if (values.length === 0) { cityDropdownBtn.textContent = '选择城市'; citySummary.textContent = '未选择'; }
            else if (values.length <= 2) { const text = values.join('、'); cityDropdownBtn.textContent = text; citySummary.textContent = `已选 ${values.length} 项：${text}`; }
            else { cityDropdownBtn.textContent = `已选 ${values.length} 项`; citySummary.textContent = `已选 ${values.length} 项`; }
        };

        const renderCityOptions = (list) => {
            if (!citySelect) return;
            const selected = new Set(Array.from(citySelect.selectedOptions).map(o => o.value));
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
            if (cityListContainer) {
                cityListContainer.innerHTML = '';
                list.forEach(it => {
                    const value = it.code ?? '';
                    const label = `${it.name ?? ''}${it.code ? ' (' + it.code + ')' : ''}`;
                    const item = document.createElement('div');
                    item.className = 'form-check mb-1';
                    const id = `zhilian_city_chk_${value}`.replace(/[^a-zA-Z0-9_\-]/g, '_');
                    item.innerHTML = `
                        <input class="form-check-input" type="checkbox" value="${value}" id="${id}" ${selected.has(value) ? 'checked' : ''}>
                        <label class="form-check-label small" for="${id}">${label}</label>
                    `;
                    const checkbox = item.querySelector('input[type="checkbox"]');
                    checkbox.addEventListener('change', () => {
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
                const kw = (citySearch.value || '').trim().toLowerCase();
                if (!kw) { renderCityOptions(cityItems); return; }
                const filtered = cityItems.filter(it => String(it.name || '').toLowerCase().includes(kw) || String(it.code || '').toLowerCase().includes(kw));
                renderCityOptions(filtered);
            });
        }
    }

    renderIndustrySelection(industryItems) {
        console.log('智联招聘: 渲染行业选择器（级联选择），行业数量:', industryItems.length);
        
        const industrySelect = document.getElementById('zhilianIndustryField');
        const industrySearch = document.getElementById('zhilianIndustrySearchField');
        const parentListContainer = document.getElementById('zhilianIndustryParentList');
        const childListContainer = document.getElementById('zhilianIndustryChildList');
        const industryDropdownBtn = document.getElementById('zhilianIndustryDropdownBtn');
        const industrySummary = document.getElementById('zhilianIndustrySelectionSummary');

        if (!industrySelect || !parentListContainer || !childListContainer) {
            console.error('智联招聘: 行业选择器DOM元素未找到');
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
        
        console.log('智联招聘: 一级行业数:', parents.length, '二级行业数:', children.length);

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
        console.log('智联招聘: 初始化行业select，添加所有子项:', children.length);
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
                const checkId = `zhilian_industry_chk_${value}`.replace(/[^a-zA-Z0-9_\-]/g, '_');
                checkDiv.innerHTML = `
                    <input class="form-check-input" type="checkbox" value="${value}" id="${checkId}" ${selected.has(value) ? 'checked' : ''}>
                    <label class="form-check-label small" for="${checkId}">${label}</label>
                `;
                
                const checkbox = checkDiv.querySelector('input[type="checkbox"]');
                checkbox.addEventListener('change', (e) => {
                    e.stopPropagation(); // 阻止事件冒泡，防止dropdown关闭
                    
                    // 获取当前所有已选项
                    const currentSelected = Array.from(industrySelect.options).filter(o => o.selected);
                    const currentSelectedValues = currentSelected.map(o => o.value);
                    
                    if (checkbox.checked) {
                        // 逻辑1：限制最多勾选5个行业
                        if (currentSelectedValues.length >= 5) {
                            checkbox.checked = false;
                            this.showToast('最多只能选择5个行业', 'warning');
                            return;
                        }
                        
                        // 逻辑2：选择了"不限"后，将已勾选的行业撤销勾选
                        const isUnlimited = label === '不限' || value === '0' || value === '' || label.includes('不限');
                        if (isUnlimited) {
                            // 取消所有已选项
                            Array.from(industrySelect.options).forEach(opt => opt.selected = false);
                            currentSelectedValues.forEach(val => {
                                const chk = childListContainer.querySelector(`input[value="${val}"]`);
                                if (chk && chk !== checkbox) chk.checked = false;
                            });
                            // 只保留"不限"选项
                            const option = Array.from(industrySelect.options).find(o => o.value === value);
                            if (option) option.selected = true;
                            updateIndustrySummary();
                            renderParentList(parents);
                            return;
                        }
                        
                        // 逻辑3：只能选择同一大类的子行业，勾选了其他大类的子行业，原大类的行业勾选撤销
                        if (currentSelectedValues.length > 0) {
                            // 找到当前选中项的父级
                            const currentChildItem = children.find(c => (c.code ?? c.name ?? '') === value);
                            const newParentCode = currentChildItem?.parentCode;
                            
                            // 检查已选项的父级
                            const existingParentCodes = new Set();
                            currentSelectedValues.forEach(val => {
                                const childItem = children.find(c => (c.code ?? c.name ?? '') === val);
                                if (childItem?.parentCode) {
                                    existingParentCodes.add(childItem.parentCode);
                                }
                            });
                            
                            // 如果新选择的父级与已有父级不同，取消其他父级的所有选项
                            if (newParentCode && existingParentCodes.size > 0 && !existingParentCodes.has(newParentCode)) {
                                // 取消其他父级下的所有选项
                                Array.from(industrySelect.options).forEach(opt => {
                                    const childItem = children.find(c => (c.code ?? c.name ?? '') === opt.value);
                                    if (childItem?.parentCode !== newParentCode) {
                                        opt.selected = false;
                                        const chk = childListContainer.querySelector(`input[value="${opt.value}"]`);
                                        if (chk) chk.checked = false;
                                    }
                                });
                                this.showToast('只能选择同一大类的行业，已自动取消其他大类的选择', 'info');
                            }
                        }
                        
                        // 如果当前有"不限"被选中，取消"不限"
                        const unlimitedOptions = Array.from(industrySelect.options).filter(opt => {
                            const optLabel = opt.textContent || '';
                            return opt.selected && (optLabel === '不限' || optLabel.includes('不限') || opt.value === '0' || opt.value === '');
                        });
                        unlimitedOptions.forEach(opt => {
                            opt.selected = false;
                            const chk = childListContainer.querySelector(`input[value="${opt.value}"]`);
                            if (chk) chk.checked = false;
                        });
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
                
                // 合并：包含匹配子级的父级也要显示
                const parentCodesWithMatchedChildren = new Set(matchedChildren.map(c => c.parentCode));
                const allMatchedParents = [...new Set([
                    ...matchedParents,
                    ...parents.filter(p => parentCodesWithMatchedChildren.has(p.code))
                ])];
                
                renderParentList(allMatchedParents);
                
                // 如果当前选中的父级不在匹配列表中，清空右侧
                if (currentParentCode && !allMatchedParents.find(p => p.code === currentParentCode)) {
                    currentParentCode = null;
                    childListContainer.innerHTML = '<div class="text-center text-muted small py-4"><i class="bi bi-search me-1"></i>未找到匹配的行业</div>';
                } else if (currentParentCode) {
                    // 显示当前父级下匹配的子级
                    const currentChildren = childrenMap.get(currentParentCode) || [];
                    const filteredChildren = currentChildren.filter(c => 
                        String(c.name || '').toLowerCase().includes(kw) || 
                        String(c.code || '').toLowerCase().includes(kw)
                    );
                    renderChildList(filteredChildren.length > 0 ? filteredChildren : currentChildren);
                }
            });
        }
    }

    fillSelect(selectId, items) {
        console.log(`智联招聘: 填充下拉框 ${selectId}，数据项数量:`, Array.isArray(items) ? items.length : 0);
        
        if (!Array.isArray(items) || items.length === 0) {
            console.warn(`智联招聘: 下拉框 ${selectId} 的数据无效:`, items);
            return;
        }

        const sel = document.getElementById(selectId);
        if (!sel) {
            console.warn(`智联招聘: 未找到下拉框元素: ${selectId}`);
            // 延迟重试
            setTimeout(() => {
                const retrySel = document.getElementById(selectId);
                if (retrySel) {
                    console.log(`智联招聘: 重试填充下拉框 ${selectId}`);
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
            
            console.log(`智联招聘: 下拉框 ${selectId} 填充完成，共 ${items.length} 项`);
            
        } catch (error) {
            console.error(`智联招聘: 填充下拉框 ${selectId} 时出错:`, error);
        }
    }

    handleSaveConfig() {
        this.saveConfig();
        this.showToast('智联配置已保存');
    }

    validateRequiredFields() {
        const required = [
            'zhilianKeywordsField',
            'zhilianCityCodeField',
            'zhilianExperienceComboBox',
            'zhilianJobTypeComboBox',
            'zhilianSalaryComboBox',
            'zhilianDegreeComboBox'
        ];
        let ok = true;
        required.forEach(id => {
            const field = document.getElementById(id);
            if (!field) return;
            if (field.tagName === 'SELECT') { if (!this.validateSelectField(field)) ok = false; }
            else { if (!this.validateField(field)) ok = false; }
        });
        return ok;
    }

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

    showConfirmModal(title, message, onConfirm, onCancel) {
        const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
        document.getElementById('confirmModalLabel').textContent = title;
        document.getElementById('confirmModalBody').textContent = message;
        const okBtn = document.getElementById('confirmModalOk');
        const newOkBtn = okBtn.cloneNode(true);
        okBtn.parentNode.replaceChild(newOkBtn, okBtn);
        newOkBtn.addEventListener('click', () => { modal.hide(); if (onConfirm) onConfirm(); });
        modal._element.addEventListener('hidden.bs.modal', () => { if (onCancel) onCancel(); }, { once: true });
        modal.show();
    }

    showAlertModal(title, message) {
        const modal = new bootstrap.Modal(document.getElementById('alertModal'));
        document.getElementById('alertModalLabel').textContent = title;
        document.getElementById('alertModalBody').textContent = message;
        modal.show();
    }
}

// 导出到全局
window.ZhilianConfigForm = ZhilianConfigForm;


