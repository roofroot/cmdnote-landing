const updateNotesData = {
    zh: {
        version: "1.0.5.0",
        newFeaturesTitle: "新增功能",
        newFeatures: [
            "新增 MCP 集成：CmdNote 可作为 MCP（Model Context Protocol）服务器运行，让 Claude、Cursor、Qoder 等支持 MCP 的 AI 客户端直接把指令创建到命令库。功能默认关闭，在设置中开启并复制配置片段即可接入；配合稳定的 CmdNote.exe 别名，升级后无需重新配置。",
            "试用版现已支持全部功能，自动创建智能拆分与 AI 生成指令不再需要购买，所有用户开箱即可使用。"
        ],
        bugFixesTitle: "优化与问题修复",
        bugFixes: [
            "优化了 terminal，路径与输出文本的乱码问题已修复，输出实时刷新；需要交互的程序（覆盖确认、进度条、彩色输出）均可正常应答和显示。",
            "修复直接执行时的命令引号处理，带引号参数或含空格路径的指令会按原样正确执行。"
        ]
    },
    en: {
        version: "1.0.5.0",
        newFeaturesTitle: "New Features",
        newFeatures: [
            "Added MCP (Model Context Protocol) support. CmdNote can now run as an MCP server, letting MCP-capable AI clients such as Claude, Cursor, Qoder and others create commands directly into your command library. The feature is off by default — enable it in Settings and copy the ready-made configuration snippet. A stable CmdNote.exe alias keeps your MCP configuration working after every update.",
            "The trial version now includes all features. Auto Create intelligent splitting and AI command generation no longer require a purchase — everyone can use them out of the box."
        ],
        bugFixesTitle: "Optimizations & Bug Fixes",
        bugFixes: [
            "Improved the terminal, garbled path and output text has been fixed, output now streams in real time, and interactive programs work properly — confirmations, progress bars and colors are all handled correctly.",
            "Fixed command quoting in direct execution. Commands containing quoted arguments or paths with spaces now run exactly as written."
        ]
    }
};
