const updateNotesData = {
    zh: {
        version: "1.0.3",
        newFeaturesTitle: "新增功能",
        newFeatures: [
            "新增AI自然语言生成指令功能，支持中英文需求描述一键生成CMD命令行，默认离线对接本地Ollama服务，同时兼容通义千问、DeepSeek、OpenAI等各类远程大模型，支持自定义服务地址、密钥、模型名称，AI配置可一键导入导出，适配多设备使用场景。",
            "全新上线Auto Create指令智能拆分功能，输入任意命令行文本，即可严格按照参数顺序，自动拆解为目录、参数、固定文本等结构化组件，提升指令编辑效率。",
            "持久会话模式新增终端手动输入能力，支持在会话内直接输入并连续执行命令，手动录入的命令将自动留存至指令历史，有效保留调试验证后的有效指令，支持将会话历史记录快速添加至指令集，便捷沉淀可用指令，避免调试成果丢失。"
        ],
        bugFixesTitle: "优化与问题修复",
        bugFixes: [
            "优化目录类参数选择逻辑，在原有文件夹选取基础上新增文件选取支持，让路径参数填充更加灵活，适配更多使用场景。",
            "优化终端执行结果回显效果，修复终端会话内输出乱码问题，优化输出流实时推送机制，整体操作体验更流畅。",
            "优化指令持久化保存逻辑，新建指令完成后自动持久化，无需手动保存，避免新建指令忘记保存造成的数据丢失问题。",
            "优化设置页面布局，新增滚动支持，窗口缩小状态下所有配置项均可正常查看和操作，适配不同窗口尺寸。"
        ]
    },
    en: {
        version: "1.0.3",
        newFeaturesTitle: "New Features",
        newFeatures: [
            "Added AI command generation from natural language. Describe your needs in Chinese or English and generate CMD command lines with one click. It connects to the local Ollama service offline by default, and is also compatible with remote LLMs such as Qwen, DeepSeek and OpenAI, with customizable service URL, API key and model name. AI settings can be exported/imported with one click for multi-device scenarios.",
            "Launched the Auto Create intelligent splitting feature. Input any command line text and it is automatically split, strictly in argument order, into structured components such as directories, parameters and fixed text, improving command editing efficiency.",
            "Persistent sessions now support manual command input in the terminal. Commands typed in the session are executed continuously and automatically saved to the command history, preserving validated commands after debugging. Session history can be quickly added to the command set, making it easy to accumulate usable commands and avoiding loss of debugging results."
        ],
        bugFixesTitle: "Optimizations & Bug Fixes",
        bugFixes: [
            "Optimized directory parameter selection: file picking is now supported in addition to folder picking, making path parameter filling more flexible for more scenarios.",
            "Optimized terminal output display, fixed garbled output inside terminal sessions, and improved the real-time output streaming mechanism for a smoother overall experience.",
            "Optimized command persistence: newly created commands are saved automatically without manual operation, preventing data loss caused by forgetting to save new commands.",
            "Improved the settings page layout with scroll support, so all configuration items remain viewable and operable when the window is shrunk, adapting to different window sizes."
        ]
    }
};
