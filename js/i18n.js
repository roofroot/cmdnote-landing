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
        update_title: "更新公告",
        update_store_link: "请从微软商店获取最新版本 →",
        features_title: "功能特性",
        feature_1_title: "命令分组可视化管理",
        feature_1_desc: "指令自定义分组归档，单条命令可加备注，像笔记一样管理命令。",
        feature_2_title: "JSON 导入导出与明文编辑",
        feature_2_desc: "标准 JSON 明文本地存储，自由导入导出备份分享，也可用任意文本编辑器直接修改。",
        feature_3_title: "内置可视化调试执行",
        feature_3_desc: "内置面板直接运行命令并实时回显结果，遇兼容问题一键复制到原生 CMD 运行。",
        feature_4_title: "持久会话交互执行",
        feature_4_desc: "\"保持会话\"连续执行命令，支持手动输入、cd 自动跟随、上下键回溯历史。",
        feature_5_title: "Auto Create 智能拆分",
        feature_5_desc: "任意命令行按参数顺序自动拆分为结构化组件，路径点选填充，同构指令快速复用。",
        feature_6_title: "AI 自然语言生成指令",
        feature_6_desc: "一句话描述需求即生成命令行，默认本地 Ollama 离线运行，兼容主流远程大模型。",
        usage_title: "使用指南",
        step_1_title: "第一步：创建命令任务",
        step_1_desc: "在创建页面填写命令参数，可设置固定部分、参数、目录选择和键值输入。也可以在 Auto Create 面板输入一句中英文需求描述，点击\"AI 生成指令\"自动生成命令行，再用\"自动拆分\"功能按参数顺序一键拆分。",
        step_1_placeholder: "命令创建页面截图",
        step_2_title: "第二步：编辑命令",
        step_2_desc: "点击指令右侧的编辑按钮进入编辑状态，即可对该指令进行修改、删除和备注。",
        step_3_title: "第三步：导出JSON文件",
        step_3_desc: "通过导出按钮可将单条指令、多条指令或整个分组导出为 JSON 文件，导出格式如下：",
        step_4_title: "第四步：执行命令",
        step_4_desc: "可以选择在 CMD 或 PowerShell 中执行命令。勾选\"保持会话\"后，可在会话内直接手动输入命令连续执行，不勾选则执行后自动退出。点击\"全部停止\"可以终止正在执行的命令并结束会话。",
        step_5_title: "第五步：指令历史 History",
        step_5_desc: "在\"保持会话\"模式下，手动输入的指令会自动记录到指令历史列表。点选历史条目即可复制该指令，也可将其快速拆分为结构化指令创建到指令集中。",
        step_6_title: "第六步：编辑模板",
        step_6_desc: "点击下方按钮跳转到模板库。您可以修改 JSON 内容并下载更新后的版本。",
        step_6_tip: "温馨提示：模板库的示例数据仅供参考，未经人工核验，可能存在无法执行的错误。如存在错误，请在执行前查看预览指令是否正确并修正错误参数。",
        step_7_title: "第七步：导入文件到 CmdNote",
        step_7_desc: "将下载的 JSON 文件导入到 CmdNote 中，开始使用您的命令模板。",
        step_8_title: "第八步：感谢您的使用",
        step_8_desc: "后续软件将持续更新优化，为您带来更便捷的操作体验。感谢您的使用，如有任何建议或反馈，欢迎发送邮件至 <a href=\"mailto:coulanasaluen@outlook.com\" class=\"highlight-email\">coulanasaluen@outlook.com</a>，我们期待您的宝贵意见。",
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
        status_invalid_json: "JSON格式无效，请检查语法",
        privacy_title: "隐私政策",
        privacy_effective_date: "生效日期：2026-07-18",
        privacy_software_name: "软件名称：CmdNote（CMD 可视化编辑调试工具）",
        privacy_section1_title: "一、政策概述",
        privacy_section1_content: "本隐私政策说明 CmdNote 的文件读写、本地数据存储与使用规则。本软件为纯本地离线桌面工具，全程无需联网、不会收集任何用户个人信息，所有脚本、配置数据仅保存在用户本地设备内，开发者不存在任何上传、同步、获取用户本地文件的渠道。",
        privacy_section2_title: "二、本应用绝对不会执行的行为",
        privacy_section2_1_title: "不收集、不获取任何用户个人信息",
        privacy_section2_1_content: "本程序无任何采集逻辑，不会读取姓名、手机号、邮箱、身份证、设备序列号、地理位置、账号信息等一切可识别自然人身份的个人数据。",
        privacy_section2_2_title: "无任何联网、网络传输行为",
        privacy_section2_2_content: "软件不含网络请求、云端同步、在线更新、广告拉取、崩溃上报、后台数据上传等代码，运行全程隔离互联网，不存在数据外传通道。",
        privacy_section2_3_title: "无内置自动执行脚本、无远程控制逻辑",
        privacy_section2_3_content: "软件仅提供可视化 CMD 手动执行面板，不存在自动批量脚本、远程指令、静默后台运行等风险功能；所有 CMD 命令操作均由用户手动主动触发。",
        privacy_section2_4_title: "未集成任何第三方服务",
        privacy_section2_4_content: "不含第三方统计、广告、登录、支付、云存储、数据埋点类 SDK，不存在与第三方共享本地数据的通道。",
        privacy_section3_title: "三、本地文件读写与数据存储说明",
        privacy_section3_1_title: "文件读写范围仅服务核心功能",
        privacy_section3_1_content: "文件读写权限仅用于 JSON 脚本导入导出、本地配置缓存两类场景。仅读取 / 写入用户手动选中的 JSON 脚本文件与软件本地缓存 JSON；不会全盘扫描、私自访问照片、文档、私密文件夹等无关文件。",
        privacy_section3_2_title: "数据存储格式与存放位置",
        privacy_section3_2_content: "用户导出的脚本、本地缓存配置均以明文 JSON 格式保存在本地磁盘，分为两类存储位置：",
        privacy_section3_2_item1: "（1）软件安装目录内置模板 JSON 资源，仅只读，无法修改；",
        privacy_section3_2_item2: "（2）系统分配的应用隔离缓存目录，用户可自由读写、编辑文件，卸载软件时该目录内缓存文件将被系统自动清空。",
        privacy_section3_2_note: "用户拥有全部数据控制权，可随时导出、修改、删除本地所有 JSON 文件。",
        privacy_section3_3_title: "文件读写唯一用途",
        privacy_section3_3_content: "文件读写能力仅用于提供安全、可控、便捷的 CMD 可视化命令编辑与执行功能，无额外读取、留存、复用本地文件的行为。",
        privacy_section4_title: "四、数据留存与删除规则",
        privacy_section4_item1: "缓存目录内 JSON 文件将持续保存在本地，直至用户手动删除文件或卸载 CmdNote；",
        privacy_section4_item2: "用户自行导出至电脑其他文件夹的 JSON 文件，由用户自主保管、删除，软件无权限自动清理；",
        privacy_section4_item3: "卸载软件时，应用专属隔离缓存目录内所有缓存 JSON 将同步清除。",
        privacy_section5_title: "五、安全提示与免责说明",
        privacy_section5_item1: "本软件所有导出、缓存数据为明文 JSON 存储，若脚本内包含账号、密码等敏感内容，请用户自行做好本地加密保管，软件不提供加密保护；",
        privacy_section5_item2: "软件仅中转用户手动输入的 CMD 命令，不会篡改、拦截、窃取命令内容，执行 CMD 命令产生的风险由用户自行承担；",
        privacy_section5_item3: "软件无联网、无信息采集逻辑，不存在用户隐私数据泄露至开发者、第三方、云端的可能性。",
        privacy_section6_title: "六、政策更新",
        privacy_section6_content: "若软件后续功能发生变更，本隐私政策将同步更新，更新后即时生效。您持续使用 CmdNote 即代表认可最新版隐私政策。",
        privacy_section7_title: "七、未成年人适用说明",
        privacy_section7_content: "本软件不采集任何个人信息，无针对未成年人的数据收集行为，全年龄段用户均可安全使用。",
        footer_privacy: "隐私政策"
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
        update_title: "What's New",
        update_store_link: "Get the latest version from Microsoft Store →",
        features_title: "Features",
        feature_1_title: "Command Groups",
        feature_1_desc: "Group commands into custom categories and attach notes to any command — manage them like a notebook.",
        feature_2_title: "JSON Import & Export",
        feature_2_desc: "Plain standard JSON stored locally. Export, import and share command packs, or edit the JSON with any text editor.",
        feature_3_title: "Visual Debug Execution",
        feature_3_desc: "Run commands in the built-in panel with real-time output, or copy them to the native CMD window with one click.",
        feature_4_title: "Persistent Sessions",
        feature_4_desc: "\"Keep Session\" runs commands continuously: manual input, cd carry-over and arrow-key history recall.",
        feature_5_title: "Auto Create Split",
        feature_5_desc: "Any command line auto-splits in argument order into directories, switches and fixed text, with clickable path pickers.",
        feature_6_title: "AI Command Generation",
        feature_6_desc: "Generate the command line from a one-sentence description. Offline local Ollama by default; OpenAI-compatible services supported.",
        usage_title: "Usage Guide",
        step_1_title: "Step 1: Create Command Task",
        step_1_desc: "Fill in the command parameters in the creation page: fixed parts, parameters, directory selections and key-value inputs. You can also describe your need in one Chinese or English sentence in the Auto Create panel, generate the command line with AI, then split it in argument order with Auto Create in one click.",
        step_1_placeholder: "Command Creation Page Screenshot",
        step_2_title: "Step 2: Edit Command",
        step_2_desc: "Click the edit button on the right side of a command to enter editing mode, where you can modify, delete the command or edit its note.",
        step_3_title: "Step 3: Export JSON File",
        step_3_desc: "Use the export button to export a single command, multiple commands or a whole group as a JSON file. The exported format is shown below:",
        step_4_title: "Step 4: Execute Commands",
        step_4_desc: "Switch between CMD and PowerShell to run commands. Check \"Keep Session\" to stay in the session and type commands directly in the terminal; leave it unchecked to exit automatically after execution. Click \"Stop All\" to terminate running commands and end the session.",
        step_5_title: "Step 5: Command History",
        step_5_desc: "In \"Keep Session\" mode, commands you type manually are automatically recorded into the history list. Click a history entry to copy the command, or send it to Auto Create to quickly split it into a structured command.",
        step_6_title: "Step 6: Edit Templates",
        step_6_desc: "Click the button below to jump to the template library. You can modify the JSON content and download the updated version.",
        step_6_tip: "Note: The sample data in the template library is for reference only and has not been manually verified. There may be errors that prevent execution. If errors exist, please check the preview command for correctness and fix any incorrect parameters before execution.",
        step_7_title: "Step 7: Import File to CmdNote",
        step_7_desc: "Import the downloaded JSON file into CmdNote to start using your command templates.",
        step_8_title: "Step 8: Thank You for Using",
        step_8_desc: "We will continue to enhance the software with new features to provide a smoother experience. Thank you for choosing CmdNote! If you have any suggestions or feedback, please feel free to reach out to us at <a href=\"mailto:coulanasaluen@outlook.com\" class=\"highlight-email\">coulanasaluen@outlook.com</a>.",
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
        status_invalid_json: "Invalid JSON format, please check syntax",
        privacy_title: "Privacy Policy",
        privacy_effective_date: "Effective Date: 2026-07-18",
        privacy_software_name: "Software Name: CmdNote (Visual Editing & Debugging Tool for CMD)",
        privacy_section1_title: "1. Policy Overview",
        privacy_section1_content: "This Privacy Policy describes the rules of file access, local data storage and data usage of CmdNote. This software is a fully offline desktop tool with no network access. We will never collect any personal information of users. All scripts and configuration data are stored locally on your device only, and the developer has no way to upload, synchronize or access your local files.",
        privacy_section2_title: "2. Activities This App Will Never Perform",
        privacy_section2_1_title: "No collection of any personal information",
        privacy_section2_1_content: "There is no data collection logic inside the program. It will not capture your name, phone number, email, ID number, device serial number, geographic location, account credentials or any other personally identifiable information.",
        privacy_section2_2_title: "No internet connection or data transmission",
        privacy_section2_2_content: "The software contains no code for network requests, cloud synchronization, online updates, ad loading, crash reporting or background data uploads. It runs fully offline with no channel to transmit local data outside your device.",
        privacy_section2_3_title: "No built-in auto-run scripts or remote control functions",
        privacy_section2_3_content: "The app only provides a visual panel for manual CMD command execution. It does not include auto batch scripts, remote instructions or silent background tasks. All CMD operations are triggered manually by users.",
        privacy_section2_4_title: "No third-party integrations",
        privacy_section2_4_content: "No third-party SDKs for analytics, advertising, login, payment, cloud storage or data tracking are embedded. There is no channel to share your local data with any external third parties.",
        privacy_section3_title: "3. Local File Access & Data Storage Statement",
        privacy_section3_1_title: "Limited scope of file read/write operations",
        privacy_section3_1_content: "File access is only used for core features: import and export of JSON scripts, local configuration cache. The app only reads and writes JSON files manually selected by you and local cache JSON files. It will not scan your full disk or access irrelevant folders such as photos, documents or private directories without your operation.",
        privacy_section3_2_title: "Data format & storage locations",
        privacy_section3_2_content: "All exported scripts and local cache configurations are saved as plain-text JSON files on your local disk, divided into two storage paths:",
        privacy_section3_2_item1: "Read-only template JSON files built inside the app installation folder, which cannot be modified;",
        privacy_section3_2_item2: "System-assigned isolated app cache directory with full user read/write permission. All cached JSON files will be automatically deleted when you uninstall CmdNote.",
        privacy_section3_2_note: "You have full control over all your data, and you may export, edit or delete all local JSON files at any time.",
        privacy_section3_3_title: "Single purpose for file read and write permission",
        privacy_section3_3_content: "File access is solely used to provide a safe, controllable and convenient way to edit and execute CMD commands visually. The app will not read, store or reuse local files for any extra purposes.",
        privacy_section4_title: "4. Data Retention & Deletion Rules",
        privacy_section4_item1: "JSON files in the cache directory will remain locally until you delete them manually or uninstall CmdNote;",
        privacy_section4_item2: "JSON files exported by you to other folders on your computer are managed and deleted at your own discretion, and the app has no permission to clean them automatically;",
        privacy_section4_item3: "All cached JSON files in the exclusive isolated directory will be removed synchronously when you uninstall the software.",
        privacy_section5_title: "5. Security Tips & Disclaimer",
        privacy_section5_item1: "All exported and cached data are stored as plain-text JSON. If your scripts contain sensitive content such as accounts or passwords, please encrypt and store them locally by yourself, as the app does not provide encryption protection.",
        privacy_section5_item2: "The app only forwards CMD commands entered manually by you. It will not modify, intercept or steal command content. You shall bear all risks arising from executing CMD commands.",
        privacy_section5_item3: "The app has no network access and no information collection logic, so there is no possibility that your private data will be leaked to the developer, third parties or cloud servers.",
        privacy_section6_title: "6. Policy Updates",
        privacy_section6_content: "If the software functions are adjusted in the future, this Privacy Policy will be updated accordingly and take effect immediately. Your continued use of CmdNote constitutes your acceptance of the latest version of this policy.",
        privacy_section7_title: "7. Minor Users",
        privacy_section7_content: "This software does not collect any personal information and contains no data collection behaviors targeting minors. It is safe for users of all age groups.",
        footer_privacy: "Privacy Policy"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cmdnote_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
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