/**
 * 标签输入组件
 * 支持回车添加标签，点击×删除标签
 */

class TagsInput {
    constructor(inputElement, tagsContainerElement) {
        this.input = inputElement;
        this.tagsContainer = tagsContainerElement;
        this.tags = [];
        
        this.init();
    }
    
    /**
     * 初始化组件
     */
    init() {
        // 绑定事件
        this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));
        
        // 点击容器时聚焦到输入框
        const container = this.tagsContainer.parentElement;
        container.addEventListener('click', () => {
            this.input.focus();
        });
    }
    
    /**
     * 处理键盘事件
     */
    handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.addTag();
        } else if (e.key === 'Backspace' && this.input.value === '' && this.tags.length > 0) {
            // 当输入框为空且按下退格键时，删除最后一个标签
            this.removeTag(this.tags.length - 1);
        }
    }
    
    /**
     * 添加标签
     */
    addTag() {
        const value = this.input.value.trim();
        
        // 验证输入
        if (!value) {
            return;
        }
        
        // 检查重复
        if (this.tags.includes(value)) {
            this.input.value = '';
            this.showDuplicateAnimation();
            return;
        }
        
        // 添加到数组
        this.tags.push(value);
        
        // 渲染标签
        this.renderTag(value, this.tags.length - 1);
        
        // 清空输入框
        this.input.value = '';
        
        // 触发变更事件
        this.triggerChange();
    }
    
    /**
     * 渲染单个标签
     */
    renderTag(value, index) {
        const tagElement = document.createElement('div');
        tagElement.className = 'tag-item';
        tagElement.dataset.index = index;
        
        const textSpan = document.createElement('span');
        textSpan.className = 'tag-text';
        textSpan.textContent = value;
        
        const removeBtn = document.createElement('span');
        removeBtn.className = 'tag-remove';
        removeBtn.innerHTML = '×';
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.removeTag(index);
        });
        
        tagElement.appendChild(textSpan);
        tagElement.appendChild(removeBtn);
        
        this.tagsContainer.appendChild(tagElement);
    }
    
    /**
     * 删除标签
     */
    removeTag(index) {
        // 从数组中删除
        this.tags.splice(index, 1);
        
        // 重新渲染所有标签
        this.renderAllTags();
        
        // 触发变更事件
        this.triggerChange();
    }
    
    /**
     * 重新渲染所有标签
     */
    renderAllTags() {
        this.tagsContainer.innerHTML = '';
        this.tags.forEach((tag, index) => {
            this.renderTag(tag, index);
        });
    }
    
    /**
     * 显示重复动画
     */
    showDuplicateAnimation() {
        const container = this.tagsContainer.parentElement;
        container.style.animation = 'shake 0.3s ease';
        setTimeout(() => {
            container.style.animation = '';
        }, 300);
    }
    
    /**
     * 获取所有标签（以逗号分隔的字符串形式）
     */
    getValue() {
        return this.tags.join(',');
    }
    
    /**
     * 获取所有标签（以数组形式）
     */
    getTags() {
        return [...this.tags];
    }
    
    /**
     * 设置标签（从逗号或换行分隔的字符串）
     */
    setValue(value) {
        if (!value) {
            this.tags = [];
            this.renderAllTags();
            return;
        }
        
        // 支持逗号和换行分隔
        const keywords = value.split(/[,\n]/)
            .map(k => k.trim())
            .filter(k => k !== '');
        
        this.tags = [...new Set(keywords)]; // 去重
        this.renderAllTags();
    }
    
    /**
     * 设置标签（从数组）
     */
    setTags(tags) {
        this.tags = [...new Set(tags)]; // 去重
        this.renderAllTags();
    }
    
    /**
     * 清空所有标签
     */
    clear() {
        this.tags = [];
        this.renderAllTags();
        this.triggerChange();
    }
    
    /**
     * 触发变更事件
     */
    triggerChange() {
        const event = new CustomEvent('tagschange', {
            detail: {
                tags: this.getTags(),
                value: this.getValue()
            }
        });
        this.input.dispatchEvent(event);
    }
}

// 导出到全局
window.TagsInput = TagsInput;

