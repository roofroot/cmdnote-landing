let currentGroup = null;
let currentItem = null;

function loadTemplates() {
    try {
        const data = templateData[currentLang];
        
        renderTemplateTree(data);
        
        if (data.command_tasks && data.command_tasks.length > 0) {
            loadItemToEditor(data.command_tasks[0]);
        }
        
        updateStatus(currentLang === 'zh' ? '就绪' : 'Ready');
    } catch (error) {
        console.error('Failed to load templates:', error);
        updateStatus(currentLang === 'zh' ? '加载模板失败' : 'Failed to load templates');
    }
}

function renderTemplateTree(data) {
    const treeContainer = document.getElementById('templateTree');
    treeContainer.innerHTML = '';
    
    const groups = {};
    data.command_tasks.forEach((task, index) => {
        if (!groups[task.group]) {
            groups[task.group] = [];
        }
        groups[task.group].push({ ...task, index });
    });
    
    Object.entries(groups).forEach(([groupName, tasks]) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'tree-group expanded';
        
        const headerDiv = document.createElement('div');
        headerDiv.className = 'tree-group-header';
        headerDiv.textContent = groupName;
        headerDiv.addEventListener('click', () => {
            groupDiv.classList.toggle('expanded');
        });
        
        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'tree-items';
        
        tasks.forEach(task => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'tree-item';
            itemDiv.textContent = task.name;
            itemDiv.addEventListener('click', () => {
                document.querySelectorAll('.tree-item').forEach(i => i.classList.remove('active'));
                itemDiv.classList.add('active');
                loadItemToEditor(task);
            });
            itemsDiv.appendChild(itemDiv);
        });
        
        groupDiv.appendChild(headerDiv);
        groupDiv.appendChild(itemsDiv);
        treeContainer.appendChild(groupDiv);
    });
}

function loadItemToEditor(task) {
    const singleTaskData = {
        command_tasks: [task]
    };
    
    const editor = document.getElementById('jsonEditor');
    editor.value = JSON.stringify(singleTaskData, null, 2);
    
    currentGroup = task.group;
    currentItem = task;
    
    updateStatus(`${currentLang === 'zh' ? '已加载' : 'Loaded'}: ${task.name}`);
}

function copyEditorContent() {
    const editor = document.getElementById('jsonEditor');
    navigator.clipboard.writeText(editor.value).then(() => {
        showNotification(currentLang === 'zh' ? '已复制到剪贴板！' : 'Copied to clipboard!');
    });
}

function downloadEditorContent() {
    const editor = document.getElementById('jsonEditor');
    const content = editor.value;
    
    try {
        JSON.parse(content);
        
        const blob = new Blob([content], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = currentItem ? `${currentItem.name}.json` : 'cmdnote_template.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showNotification(currentLang === 'zh' ? '文件已下载！' : 'File downloaded!');
    } catch (e) {
        updateStatus(currentLang === 'zh' ? 'JSON格式无效，请检查语法' : 'Invalid JSON format, please check syntax');
    }
}

function updateStatus(message) {
    const statusEl = document.getElementById('editorStatus');
    if (statusEl) {
        statusEl.textContent = message;
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 6px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 2000);
}

window.onLanguageChange = function(lang) {
    loadTemplates();
};

document.addEventListener('DOMContentLoaded', () => {
    loadTemplates();
});