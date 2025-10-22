/**
 * 公共配置管理模块
 * 用于管理跨平台的通用配置，如黑名单关键字等
 */

(function() {
    'use strict';

    // API端点
    const API_ENDPOINTS = {
        SAVE_CONFIG: '/api/common/config/save',
        GET_CONFIG: '/api/common/config/get',
        GET_AI_PLATFORMS: '/api/common/config/ai-platforms'
    };

    // DOM元素
    let jobBlacklistInput;
    let companyBlacklistInput;
    let jobTagsInput;
    let companyTagsInput;
    let saveBtn;
    let resetBtn;
    
    // 候选人信息标签输入组件
    let skillsTagsInput;
    let highlightsTagsInput;
    let dedupeKeywordsTagsInput;
    
    // 功能开关相关
    let hrStatusTagsInput;
    
    // AI平台配置缓存（存储所有平台的配置）
    let aiPlatformConfigsCache = {};

    /**
     * 初始化模块
     */
    function init() {
        // 获取DOM元素
        jobBlacklistInput = document.getElementById('commonJobBlacklistKeywords');
        companyBlacklistInput = document.getElementById('commonCompanyBlacklistKeywords');
        const jobTagsWrapper = document.getElementById('jobBlacklistTags');
        const companyTagsWrapper = document.getElementById('companyBlacklistTags');
        saveBtn = document.getElementById('saveCommonConfigBtn');
        resetBtn = document.getElementById('resetCommonConfigBtn');

        // 初始化标签输入组件
        if (jobBlacklistInput && jobTagsWrapper) {
            jobTagsInput = new window.TagsInput(jobBlacklistInput, jobTagsWrapper);
        }
        if (companyBlacklistInput && companyTagsWrapper) {
            companyTagsInput = new window.TagsInput(companyBlacklistInput, companyTagsWrapper);
        }
        
        // 初始化候选人信息标签输入组件
        const skillsInput = document.getElementById('profileSkills');
        const skillsTagsWrapper = document.getElementById('profileSkillsTags');
        if (skillsInput && skillsTagsWrapper) {
            skillsTagsInput = new window.TagsInput(skillsInput, skillsTagsWrapper);
        }
        
        const highlightsInput = document.getElementById('profileHighlights');
        const highlightsTagsWrapper = document.getElementById('profileHighlightsTags');
        if (highlightsInput && highlightsTagsWrapper) {
            highlightsTagsInput = new window.TagsInput(highlightsInput, highlightsTagsWrapper);
        }
        
        const dedupeKeywordsInput = document.getElementById('profileDedupeKeywords');
        const dedupeKeywordsTagsWrapper = document.getElementById('profileDedupeKeywordsTags');
        if (dedupeKeywordsInput && dedupeKeywordsTagsWrapper) {
            dedupeKeywordsTagsInput = new window.TagsInput(dedupeKeywordsInput, dedupeKeywordsTagsWrapper);
        }
        
        // 初始化HR状态标签输入组件
        const hrStatusInput = document.getElementById('commonHrStatusKeywords');
        const hrStatusTagsWrapper = document.getElementById('commonHrStatusTags');
        if (hrStatusInput && hrStatusTagsWrapper) {
            hrStatusTagsInput = new window.TagsInput(hrStatusInput, hrStatusTagsWrapper);
        }

        // 绑定事件
        if (saveBtn) {
            saveBtn.addEventListener('click', saveCommonConfig);
        }
        if (resetBtn) {
            resetBtn.addEventListener('click', resetCommonConfig);
        }
        
        // 绑定AI平台选择框change事件
        const aiPlatformSelect = document.getElementById('aiPlatform');
        if (aiPlatformSelect) {
            aiPlatformSelect.addEventListener('change', onAiPlatformChange);
        }

        // 页面加载时获取配置
        loadCommonConfig();
        loadAiPlatforms();
    }

    /**
     * 加载公共配置
     */
    async function loadCommonConfig() {
        try {
            const response = await fetch(API_ENDPOINTS.GET_CONFIG);
            
            if (!response.ok) {
                console.warn('未找到公共配置，将使用默认值');
                return;
            }

            const result = await response.json();
            const config = result.data; // 从 data 属性中获取实际配置数据
            
            // 如果没有配置数据，直接返回
            if (!config) {
                console.warn('暂无配置数据');
                return;
            }
            
            // 填充黑名单表单
            if (config.jobBlacklistKeywords && jobTagsInput) {
                jobTagsInput.setTags(config.jobBlacklistKeywords);
            }
            if (config.companyBlacklistKeywords && companyTagsInput) {
                companyTagsInput.setTags(config.companyBlacklistKeywords);
            }
            
            // 填充候选人信息
            populateProfileForm(config);
            
            // 填充AI配置（从JSON键值对中提取）
            if (config.aiPlatformConfigs && Object.keys(config.aiPlatformConfigs).length > 0) {
                // 缓存所有平台配置
                aiPlatformConfigsCache = config.aiPlatformConfigs;
                
                const aiPlatformSelect = document.getElementById('aiPlatform');
                const aiPlatformKeyInput = document.getElementById('aiPlatformKey');
                
                // 获取第一个配置的平台和密钥
                const firstPlatform = Object.keys(config.aiPlatformConfigs)[0];
                const firstKey = config.aiPlatformConfigs[firstPlatform];
                
                if (aiPlatformSelect && firstPlatform) {
                    aiPlatformSelect.value = firstPlatform;
                }
                if (aiPlatformKeyInput && firstKey) {
                    aiPlatformKeyInput.value = firstKey;
                }
            }
            
            // 填充AI智能功能开关
            const enableAIJobMatchCheckbox = document.getElementById('commonEnableAIJobMatch');
            if (enableAIJobMatchCheckbox && config.enableAIJobMatch !== undefined) {
                enableAIJobMatchCheckbox.checked = config.enableAIJobMatch;
            }
            
            const enableAIGreetingCheckbox = document.getElementById('commonEnableAIGreeting');
            if (enableAIGreetingCheckbox && config.enableAIGreeting !== undefined) {
                enableAIGreetingCheckbox.checked = config.enableAIGreeting;
            }
            
            // 填充功能开关
            const filterDeadHRCheckbox = document.getElementById('commonFilterDeadHR');
            if (filterDeadHRCheckbox && config.filterDeadHR !== undefined) {
                filterDeadHRCheckbox.checked = config.filterDeadHR;
            }
            
            const sendImgResumeCheckbox = document.getElementById('commonSendImgResume');
            if (sendImgResumeCheckbox && config.sendImgResume !== undefined) {
                sendImgResumeCheckbox.checked = config.sendImgResume;
            }
            
            const recommendJobsCheckbox = document.getElementById('commonRecommendJobs');
            if (recommendJobsCheckbox && config.recommendJobs !== undefined) {
                recommendJobsCheckbox.checked = config.recommendJobs;
            }
            
            // 填充HR状态关键词
            if (config.hrStatusKeywords && hrStatusTagsInput) {
                hrStatusTagsInput.setTags(config.hrStatusKeywords);
            }

            console.log('公共配置加载成功', config);
        } catch (error) {
            console.error('加载公共配置失败:', error);
        }
    }
    
    /**
     * AI平台选择改变时的处理函数
     */
    function onAiPlatformChange(event) {
        const selectedPlatform = event.target.value;
        const aiPlatformKeyInput = document.getElementById('aiPlatformKey');
        
        if (!aiPlatformKeyInput) {
            return;
        }
        
        // 如果选择了平台，从缓存中获取对应的密钥
        if (selectedPlatform && aiPlatformConfigsCache[selectedPlatform]) {
            aiPlatformKeyInput.value = aiPlatformConfigsCache[selectedPlatform];
        } else {
            // 如果没有选择或没有缓存的密钥，清空输入框
            aiPlatformKeyInput.value = '';
        }
    }

    /**
     * 收集候选人信息表单数据
     */
    function collectProfileData() {
        const parseStringToList = (str, separator = ',') => {
            if (!str || !str.trim()) return [];
            return str.split(separator)
                      .map(item => item.trim())
                      .filter(item => item.length > 0);
        };

        return {
            jobTitle: document.getElementById('profileJobTitle')?.value?.trim() || '',
            skills: skillsTagsInput ? parseStringToList(skillsTagsInput.getValue()) : [],
            yearsOfExperience: document.getElementById('profileYearsOfExperience')?.value?.trim() || '',
            careerIntent: document.getElementById('profileCareerIntent')?.value?.trim() || '',
            domainExperience: document.getElementById('profileDomainExperience')?.value?.trim() || '',
            location: document.getElementById('profileLocation')?.value?.trim() || '',
            tone: document.getElementById('profileTone')?.value?.trim() || '',
            language: document.getElementById('profileLanguage')?.value?.trim() || 'zh_CN',
            highlights: highlightsTagsInput ? parseStringToList(highlightsTagsInput.getValue()) : [],
            maxChars: parseInt(document.getElementById('profileMaxChars')?.value) || 120,
            dedupeKeywords: dedupeKeywordsTagsInput ? parseStringToList(dedupeKeywordsTagsInput.getValue()) : [],
            // 简历配置
            resumeImagePath: document.getElementById('commonResumeImagePath')?.value?.trim() || '',
            sayHiContent: document.getElementById('commonSayHiContent')?.value?.trim() || ''
        };
    }

    /**
     * 验证候选人信息
     */
    function validateProfileData(profileData) {
        const errors = [];
        
        if (!profileData.jobTitle) {
            errors.push('职位名称不能为空');
        }
        
        if (!profileData.skills || profileData.skills.length === 0) {
            errors.push('核心技能至少需要添加 1 项');
        }
        
        if (!profileData.yearsOfExperience) {
            errors.push('工作年限不能为空');
        }
        
        if (!profileData.careerIntent) {
            errors.push('职业意向不能为空');
        } else if (profileData.careerIntent.length < 10 || profileData.careerIntent.length > 40) {
            errors.push('职业意向建议在 10-40 字之间');
        }
        
        if (profileData.highlights && profileData.highlights.length > 5) {
            errors.push('个人亮点最多添加 5 项');
        }
        
        if (profileData.maxChars < 80 || profileData.maxChars > 180) {
            errors.push('最大字符数必须在 80-180 之间');
        }
        
        return errors;
    }

    /**
     * 保存公共配置（包括黑名单和候选人信息）
     */
    async function saveCommonConfig() {
        try {
            // 获取黑名单配置
            const jobKeywords = jobTagsInput ? jobTagsInput.getValue() : '';
            const companyKeywords = companyTagsInput ? companyTagsInput.getValue() : '';

            // 获取候选人信息
            const profileData = collectProfileData();
            const profileErrors = validateProfileData(profileData);
            
            if (profileErrors.length > 0) {
                if (window.CommonUtils && window.CommonUtils.showToast) {
                    window.CommonUtils.showToast('请检查候选人信息：\n' + profileErrors.join('\n'), 'warning');
                } else {
                    alert('请检查候选人信息：\n' + profileErrors.join('\n'));
                }
                return;
            }

            // 获取AI配置（以JSON键值对方式）
            const aiPlatform = document.getElementById('aiPlatform')?.value?.trim() || '';
            const aiPlatformKey = document.getElementById('aiPlatformKey')?.value?.trim() || '';
            
            // 构建AI平台配置对象（保留现有配置，更新当前选中的平台）
            const aiPlatformConfigs = { ...aiPlatformConfigsCache };
            if (aiPlatform && aiPlatformKey) {
                aiPlatformConfigs[aiPlatform] = aiPlatformKey;
                // 同时更新缓存
                aiPlatformConfigsCache[aiPlatform] = aiPlatformKey;
            } else if (aiPlatform && !aiPlatformKey) {
                // 如果选择了平台但密钥为空，删除该平台的配置
                delete aiPlatformConfigs[aiPlatform];
                delete aiPlatformConfigsCache[aiPlatform];
            }
            
            // 获取AI智能功能开关
            const enableAIJobMatch = document.getElementById('commonEnableAIJobMatch')?.checked || false;
            const enableAIGreeting = document.getElementById('commonEnableAIGreeting')?.checked || false;
            
            // 获取功能开关
            const filterDeadHR = document.getElementById('commonFilterDeadHR')?.checked || false;
            const sendImgResume = document.getElementById('commonSendImgResume')?.checked || false;
            const recommendJobs = document.getElementById('commonRecommendJobs')?.checked || false;
            const hrStatusKeywords = hrStatusTagsInput ? hrStatusTagsInput.getValue() : '';

            // 构建完整配置对象（包括黑名单、候选人信息、简历配置、AI配置、AI功能开关和功能开关）
            const config = {
                jobBlacklistKeywords: jobKeywords,
                companyBlacklistKeywords: companyKeywords,
                // 候选人信息
                jobTitle: profileData.jobTitle,
                skills: profileData.skills,
                yearsOfExperience: profileData.yearsOfExperience,
                careerIntent: profileData.careerIntent,
                domainExperience: profileData.domainExperience,
                location: profileData.location,
                tone: profileData.tone,
                language: profileData.language,
                highlights: profileData.highlights,
                maxChars: profileData.maxChars,
                dedupeKeywords: profileData.dedupeKeywords,
                // 简历配置
                resumeImagePath: profileData.resumeImagePath,
                sayHiContent: profileData.sayHiContent,
                // AI配置（JSON键值对）
                aiPlatformConfigs: aiPlatformConfigs,
                // AI智能功能开关
                enableAIJobMatch: enableAIJobMatch,
                enableAIGreeting: enableAIGreeting,
                // 功能开关
                filterDeadHR: filterDeadHR,
                sendImgResume: sendImgResume,
                recommendJobs: recommendJobs,
                hrStatusKeywords: hrStatusKeywords
            };

            // 显示加载状态
            saveBtn.disabled = true;
            saveBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>保存中...';

            // 统一保存所有配置（黑名单 + 候选人信息）
            const configResponse = await fetch(API_ENDPOINTS.SAVE_CONFIG, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(config)
            });

            if (!configResponse.ok) {
                const errorData = await configResponse.json();
                throw new Error(errorData.message || '保存配置失败');
            }

            const result = await configResponse.json();

            // 本地存储候选人信息
            localStorage.setItem('candidateProfile', JSON.stringify(profileData));

            // 显示成功消息
            if (window.CommonUtils && window.CommonUtils.showToast) {
                window.CommonUtils.showToast(result.message || '所有配置保存成功！', 'success');
            } else {
                alert(result.message || '所有配置保存成功！');
            }

            console.log('配置保存成功:', config);
        } catch (error) {
            console.error('保存配置失败:', error);
            if (window.CommonUtils && window.CommonUtils.showToast) {
                window.CommonUtils.showToast('保存失败：' + error.message, 'danger');
            } else {
                alert('保存失败：' + error.message);
            }
        } finally {
            // 恢复按钮状态
            saveBtn.disabled = false;
            saveBtn.innerHTML = '<i class="bi bi-save me-2"></i>保存所有配置';
        }
    }

    /**
     * 重置公共配置（包括黑名单和候选人信息）
     */
    function resetCommonConfig() {
        const doReset = () => {
            // 重置黑名单配置
            if (jobTagsInput) jobTagsInput.clear();
            if (companyTagsInput) companyTagsInput.clear();
            
            // 重置候选人信息表单
            const profileFields = [
                'profileJobTitle', 'profileYearsOfExperience', 'profileCareerIntent',
                'profileDomainExperience', 'profileLocation', 'profileTone', 'profileLanguage'
            ];
            
            profileFields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (field) {
                    if (fieldId === 'profileLanguage') {
                        field.value = 'zh_CN'; // 恢复默认语言
                    } else if (fieldId === 'profileMaxChars') {
                        field.value = '120'; // 恢复默认字符数
                    } else {
                        field.value = '';
                    }
                    field.classList.remove('is-valid', 'is-invalid');
                }
            });
            
            // 重置最大字符数
            const maxCharsField = document.getElementById('profileMaxChars');
            if (maxCharsField) {
                maxCharsField.value = '120';
            }
            
            // 重置标签输入
            if (skillsTagsInput) skillsTagsInput.clear();
            if (highlightsTagsInput) highlightsTagsInput.clear();
            if (dedupeKeywordsTagsInput) dedupeKeywordsTagsInput.clear();
            
            // 重置AI配置
            const aiPlatformSelect = document.getElementById('aiPlatform');
            if (aiPlatformSelect) {
                aiPlatformSelect.value = '';
            }
            const aiPlatformKeyInput = document.getElementById('aiPlatformKey');
            if (aiPlatformKeyInput) {
                aiPlatformKeyInput.value = '';
            }
            // 清空AI配置缓存
            aiPlatformConfigsCache = {};
            
            // 重置AI智能功能开关
            const enableAIJobMatchCheckbox = document.getElementById('commonEnableAIJobMatch');
            if (enableAIJobMatchCheckbox) {
                enableAIJobMatchCheckbox.checked = false;
            }
            const enableAIGreetingCheckbox = document.getElementById('commonEnableAIGreeting');
            if (enableAIGreetingCheckbox) {
                enableAIGreetingCheckbox.checked = false;
            }
            
            // 重置功能开关
            const filterDeadHRCheckbox = document.getElementById('commonFilterDeadHR');
            if (filterDeadHRCheckbox) {
                filterDeadHRCheckbox.checked = false;
            }
            const sendImgResumeCheckbox = document.getElementById('commonSendImgResume');
            if (sendImgResumeCheckbox) {
                sendImgResumeCheckbox.checked = false;
            }
            const recommendJobsCheckbox = document.getElementById('commonRecommendJobs');
            if (recommendJobsCheckbox) {
                recommendJobsCheckbox.checked = false;
            }
            if (hrStatusTagsInput) {
                hrStatusTagsInput.clear();
            }
            
            if (window.CommonUtils && window.CommonUtils.showToast) {
                window.CommonUtils.showToast('所有配置已重置', 'info');
            } else {
                alert('所有配置已重置');
            }
        };

        if (window.CommonUtils && window.CommonUtils.showConfirm) {
            window.CommonUtils.showConfirm(
                '确定要重置所有配置吗？（包括黑名单和候选人信息）',
                doReset
            );
        } else {
            if (confirm('确定要重置所有配置吗？（包括黑名单和候选人信息）')) {
                doReset();
            }
        }
    }


    /**
     * 填充候选人信息表单
     */
    function populateProfileForm(profileData) {
        if (!profileData) return;
        
        const setFieldValue = (fieldId, value) => {
            const field = document.getElementById(fieldId);
            if (field && value !== undefined && value !== null && value !== '') {
                field.value = value;
            }
        };
        
        // 基本字段
        setFieldValue('profileJobTitle', profileData.jobTitle);
        setFieldValue('profileYearsOfExperience', profileData.yearsOfExperience);
        setFieldValue('profileCareerIntent', profileData.careerIntent);
        setFieldValue('profileDomainExperience', profileData.domainExperience);
        setFieldValue('profileLocation', profileData.location);
        setFieldValue('profileTone', profileData.tone);
        setFieldValue('profileLanguage', profileData.language || 'zh_CN');
        setFieldValue('profileMaxChars', profileData.maxChars || 120);
        
        // 标签字段
        if (profileData.skills && skillsTagsInput) {
            skillsTagsInput.setTags(Array.isArray(profileData.skills) ? profileData.skills : []);
        }
        if (profileData.highlights && highlightsTagsInput) {
            highlightsTagsInput.setTags(Array.isArray(profileData.highlights) ? profileData.highlights : []);
        }
        if (profileData.dedupeKeywords && dedupeKeywordsTagsInput) {
            dedupeKeywordsTagsInput.setTags(Array.isArray(profileData.dedupeKeywords) ? profileData.dedupeKeywords : []);
        }
        
        // 简历配置字段
        setFieldValue('commonResumeImagePath', profileData.resumeImagePath);
        setFieldValue('commonSayHiContent', profileData.sayHiContent);
    }

    /**
     * 加载AI平台选项
     */
    async function loadAiPlatforms() {
        try {
            const response = await fetch(API_ENDPOINTS.GET_AI_PLATFORMS);
            
            if (!response.ok) {
                console.warn('获取AI平台列表失败');
                return;
            }

            const result = await response.json();
            const platforms = result.data;
            
            if (!platforms || platforms.length === 0) {
                console.warn('AI平台列表为空');
                return;
            }
            
            // 获取AI平台下拉框
            const aiPlatformSelect = document.getElementById('aiPlatform');
            if (!aiPlatformSelect) {
                console.warn('找不到AI平台选择框');
                return;
            }
            
            // 保存当前选中的值
            const currentValue = aiPlatformSelect.value;
            
            // 清空现有选项（保留第一个"请选择"选项）
            aiPlatformSelect.innerHTML = '<option value="">请选择AI平台</option>';
            
            // 动态添加选项
            platforms.forEach(platform => {
                const option = document.createElement('option');
                option.value = platform.value;
                option.textContent = platform.label;
                aiPlatformSelect.appendChild(option);
            });
            
            // 恢复之前选中的值
            if (currentValue) {
                aiPlatformSelect.value = currentValue;
            }
            
            console.log('AI平台列表加载成功', platforms);
        } catch (error) {
            console.error('加载AI平台列表失败:', error);
        }
    }

    /**
     * 获取岗位黑名单关键字（供其他模块调用）
     */
    function getJobBlacklistKeywords() {
        if (!jobTagsInput) {
            return '';
        }
        return jobTagsInput.getValue();
    }

    /**
     * 获取公司黑名单关键字（供其他模块调用）
     */
    function getCompanyBlacklistKeywords() {
        if (!companyTagsInput) {
            return '';
        }
        return companyTagsInput.getValue();
    }

    // 导出公共方法
    window.CommonConfig = {
        init: init,
        getJobBlacklistKeywords: getJobBlacklistKeywords,
        getCompanyBlacklistKeywords: getCompanyBlacklistKeywords,
        loadCommonConfig: loadCommonConfig
    };

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

