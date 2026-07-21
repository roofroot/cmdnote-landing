const translations = {
    zh: {
        tagline: "命令行调试工具",
        nav_features: "功能特性",
        nav_usage: "使用指南",
        nav_templates: "模板预览",
        nav_editor: "JSON编辑器",
        nav_home: "返回首页",
        hero_title: "专业的命令行调试工具",
        hero_desc: "CmdNote 帮助您轻松创建、管理和调试命令行任务。将您的命令导出为 JSON 模板，方便共享和复用。",
        features_title: "功能特性",
        feature_1_title: "简易命令创建",
        feature_1_desc: "直观的界面，用于创建和配置带有参数的命令行任务。",
        feature_2_title: "JSON导入导出",
        feature_2_desc: "导入和导出结构化的 JSON 命令文件，便于共享和版本控制。",
        feature_3_title: "直观操作与快速执行",
        feature_3_desc: "直观简单的操作方式快速修改参数执行，笔记本备注功能快速查阅。",
        feature_4_title: "多语言支持",
        feature_4_desc: "模板和界面完全支持中文和英文。",
        usage_title: "使用指南",
        step_1_title: "第一步：创建命令任务",
        step_1_desc: "在创建页面填写命令参数。您可以设置固定部分、参数、目录选择和键值输入。",
        step_1_placeholder: "命令创建页面截图",
        step_2_title: "第二步：查看导出的JSON",
        step_2_desc: "创建命令后，系统将生成结构化的 JSON 文件。您可以直接复制或下载。",
        step_3_title: "第三步：编辑模板",
        step_3_desc: "点击下方按钮跳转到模板库。您可以修改 JSON 内容并下载更新后的版本。",
        step_4_title: "第四步：导入文件到 CmdNote",
        step_4_desc: "将下载的 JSON 文件导入到 CmdNote 中，开始使用您的命令模板。",
        import_tip: "打开 CmdNote，进入导入部分，选择您的 JSON 文件即可加载所有命令模板。",
        placeholder_hint: "[截图占位符 - 后续添加]",
        json_preview: "JSON预览",
        btn_copy: "复制",
        btn_download: "下载",
        edit_link_text: "跳转模板库 →",
        templates_title: "模板预览",
        templates_desc: "浏览按类别组织的可用命令模板。",
        view_all_templates: "查看所有模板",
        footer_rights: "保留所有权利。",
        template_list: "模板列表",
        json_editor: "JSON编辑器",
        copied: "已复制到剪贴板！",
        downloaded: "文件已下载！",
        status_ready: "就绪",
        status_invalid_json: "JSON格式无效，请检查语法"
    },
    en: {
        tagline: "Command Line Debugging Tool",
        nav_features: "Features",
        nav_usage: "Usage Guide",
        nav_templates: "Templates",
        nav_editor: "JSON Editor",
        nav_home: "Home",
        hero_title: "Professional Command Line Debugging Tool",
        hero_desc: "CmdNote helps you easily create, manage and debug command line tasks. Export your commands as JSON templates, share and reuse them effortlessly.",
        features_title: "Features",
        feature_1_title: "Easy Command Creation",
        feature_1_desc: "Intuitive interface for creating and configuring command line tasks with parameters.",
        feature_2_title: "JSON Import & Export",
        feature_2_desc: "Import and export your commands as structured JSON files for easy sharing and version control.",
        feature_3_title: "Simple Operation & Quick Execution",
        feature_3_desc: "Intuitive and simple operation method to quickly modify parameters and execute commands. Notebook feature for quick reference.",
        feature_4_title: "Multi-language Support",
        feature_4_desc: "Full Chinese and English support for templates and interface.",
        usage_title: "Usage Guide",
        step_1_title: "Step 1: Create Command Task",
        step_1_desc: "Fill in the command parameters in the creation page. You can set fixed parts, parameters, directory selections, and key-value inputs.",
        step_1_placeholder: "Command Creation Page Screenshot",
        step_2_title: "Step 2: View Exported JSON",
        step_2_desc: "After creating the command, the system will generate a structured JSON file. You can copy or download it directly.",
        step_3_title: "Step 3: Edit Templates",
        step_3_desc: "Click the button below to jump to the template library. You can modify the JSON content and download the updated version.",
        step_4_title: "Step 4: Import File to CmdNote",
        step_4_desc: "Import the downloaded JSON file into CmdNote to start using your command templates.",
        import_tip: "Open CmdNote, go to the import section, and select your JSON file to load all command templates.",
        placeholder_hint: "[Screenshot placeholder - will be added later]",
        json_preview: "JSON Preview",
        btn_copy: "Copy",
        btn_download: "Download",
        edit_link_text: "Go to Template Library →",
        templates_title: "Template Preview",
        templates_desc: "Browse available command templates organized by category.",
        view_all_templates: "View All Templates",
        footer_rights: "All rights reserved.",
        template_list: "Template List",
        json_editor: "JSON Editor",
        copied: "Copied to clipboard!",
        downloaded: "File downloaded!",
        status_ready: "Ready",
        status_invalid_json: "Invalid JSON format, please check syntax"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cmdnote_lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = lang;
    }
}

function initLanguage() {
    const savedLang = localStorage.getItem('cmdnote_lang');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
    } else {
        setLanguage('en');
    }
    
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
            if (window.onLanguageChange) {
                window.onLanguageChange(e.target.value);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', initLanguage);