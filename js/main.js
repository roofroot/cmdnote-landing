const demoJsonData = {
    "command_tasks": [
        {
            "id": 0,
            "name": "dir",
            "parts": [
                {
                    "Fixed": "dir"
                },
                {
                    "Dir": {
                        "key": "directory"
                    }
                },
                {
                    "Param": {
                        "name": "mode",
                        "options": [
                            "/a",
                            "/w",
                            "/s"
                        ]
                    }
                }
            ],
            "is_blocking": false,
            "group": "Directory",
            "note": ""
        }
    ],
    "cmd_next_id": 1
};

function copyDemoJson() {
    const jsonText = JSON.stringify(demoJsonData, null, 2);
    navigator.clipboard.writeText(jsonText).then(() => {
        showNotification(currentLang === 'zh' ? '已复制到剪贴板！' : 'Copied to clipboard!');
    });
}

function downloadDemoJson() {
    const jsonText = JSON.stringify(demoJsonData, null, 2);
    const blob = new Blob([jsonText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cmdnote_template.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification(currentLang === 'zh' ? '文件已下载！' : 'File downloaded!');
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

function loadTemplatePreview() {
    try {
        const data = templateData[currentLang];

        const groups = {};
        data.command_tasks.forEach(task => {
            if (!groups[task.group]) {
                groups[task.group] = [];
            }
            groups[task.group].push(task.name);
        });

        const previewContainer = document.getElementById('templatePreview');
        previewContainer.innerHTML = '';

        Object.entries(groups).slice(0, 4).forEach(([group, tasks]) => {
            const card = document.createElement('div');
            card.className = 'template-group-card';
            card.innerHTML = `
                <h4>${group}</h4>
                <ul>
                    ${tasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
            `;
            previewContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Failed to load template preview:', error);
    }
}

window.onLanguageChange = function (lang) {
    loadTemplatePreview();
};

const carouselStates = {};

function initCarousels() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const id = carousel.id;
        const totalSlides = carousel.querySelectorAll('.carousel-item').length;
        carouselStates[id] = { currentSlide: 0, totalSlides };
    });
}

function moveCarousel(direction, carouselId = 'step1Carousel') {
    const state = carouselStates[carouselId];
    if (!state) return;

    state.currentSlide = (state.currentSlide + direction + state.totalSlides) % state.totalSlides;
    updateCarousel(carouselId);
}

function goToSlide(index, carouselId = 'step1Carousel') {
    const state = carouselStates[carouselId];
    if (!state) return;

    state.currentSlide = index;
    updateCarousel(carouselId);
}

function updateCarousel(carouselId = 'step1Carousel') {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.indicator');
    const state = carouselStates[carouselId];

    items.forEach((item, index) => {
        item.classList.toggle('active', index === state.currentSlide);
    });

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === state.currentSlide);
    });
}

function renderUpdateNotes(lang) {
    const data = updateNotesData[lang];
    if (!data) return;

    const badge = document.getElementById('updateBadge');
    const newFeaturesTitle = document.getElementById('newFeaturesTitle');
    const newFeaturesList = document.getElementById('newFeaturesList');
    const bugFixesTitle = document.getElementById('bugFixesTitle');
    const bugFixesList = document.getElementById('bugFixesList');

    badge.textContent = 'v' + data.version;

    newFeaturesTitle.textContent = data.newFeaturesTitle;
    newFeaturesList.innerHTML = data.newFeatures.map(item =>
        `<li><span class="update-item-bullet"></span><span>${item}</span></li>`
    ).join('');

    bugFixesTitle.textContent = data.bugFixesTitle;
    bugFixesList.innerHTML = data.bugFixes.map(item =>
        `<li><span class="update-item-bullet"></span><span>${item}</span></li>`
    ).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderUpdateNotes(currentLang);
    loadTemplatePreview();
    initCarousels();
});

window.onLanguageChange = function (lang) {
    renderUpdateNotes(lang);
    loadTemplatePreview();
};