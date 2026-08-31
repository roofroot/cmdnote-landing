const updateNotesData = {
    zh: {
        version: "1.0.2",
        newFeaturesTitle: "新增功能",
        newFeatures: [
            "新增分组导出与多指令导出能力，支持按分组批量导出、多指令同时导出，大幅提升批量操作效率，满足多样化的数据导出需求。",
            "全新上线编辑模式，进入编辑状态后，可自由删除任意分组及单条指令，操作自由度更高，方便用户快速整理、精简指令与分组内容。",
            "新增编辑/创建取消机制，在指令编辑或新建过程中，点击取消按钮可一键清空本次所有编辑内容，有效避免误操作留存冗余内容，优化编辑操作体验。"
        ],
        bugFixesTitle: "优化与问题修复",
        bugFixes: [
            "优化界面按钮展示逻辑，原有的注释按钮、编辑指令按钮仅在编辑模式下显示，常规浏览界面更加简洁清爽，减少视觉干扰。",
            "修复已知崩溃问题，解决删除正在编辑的参数列表后点击保存，导致应用异常崩溃的BUG，提升应用运行稳定性与操作安全性。",
            "优化笔记排版效果，优化页面布局与内容展示样式，让笔记内容展示更规整清晰，提升整体阅览体验。"
        ]
    },
    en: {
        version: "1.0.2",
        newFeaturesTitle: "New Features",
        newFeatures: [
            "Added group export and multi-command export functions. It supports batch export by groups and simultaneous export of multiple commands, which greatly improves the efficiency of batch operations and meets diverse data export requirements.",
            "Launched a new editing mode. After entering the editing mode, users can delete any groups or single commands freely, providing higher operation flexibility and helping users quickly sort out and simplify groups and commands.",
            "Added cancel operation for command editing and creation. Click the cancel button during command editing or creation to clear all current editing content at one time, avoiding redundant content caused by misoperation and optimizing the overall editing experience."
        ],
        bugFixesTitle: "Optimizations & Bug Fixes",
        bugFixes: [
            "Optimized the display logic of interface buttons. The original comment button and command edit button are only visible in editing mode, making the normal browsing interface cleaner and reducing visual interference.",
            "Fixed a known crash issue. Resolved the bug that caused the application to crash when clicking save after deleting the parameter list being edited, improving the operational stability and safety of the application.",
            "Optimized the note typesetting effect. Improved the page layout and content display style to make the note content neater and clearer, and enhance the overall reading experience."
        ]
    }
};