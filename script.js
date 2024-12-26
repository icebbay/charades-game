// 全局变量
let currentWords = [];
let currentWordIndex = 0;
let score = 0;
let timer;
let timeLeft;
let results = [];
let gameStarted = false;
let currentLang = localStorage.getItem('gameLanguage') || 'zh';
let selectedCategory = null;
let selectedDuration = 60;

// 音效初始化
const correctSound = new Audio('assets/correct.mp3');
const skipSound = new Audio('assets/skip.mp3');

// 国际化文本
window.i18n = {
    zh: {
        title: "你演我猜",
        startGame: "开始游戏",
        timeLeft: "剩余时间",
        score: "得分",
        finalScore: "最终得分：{score}",
        playAgain: "再玩一次",
        home: "主页",
        confirmReturn: "确定要返回主页吗？当前游戏进度将丢失。",
        invalidDuration: "请输入10-300秒之间的时间",
        tapToStart: "点击任意区域开始游戏",
        tapLeftSkip: "点击左侧跳过",
        tapRightCorrect: "点击右侧正确",
        wordsExhausted: "（词库已用完）",
        selectCategory: "请选择一个类别",
        selectTime: "选择时间",
        customTime: "自定义时长",
        seconds: "秒",
        gameResult: "游戏结果",
        categories: {
            "动物": "动物",
            "食物": "食物",
            "运动": "运动",
            "职业": "职业",
            "自定义": "自定义"
        }
    },
    en: {
        title: "Charades",
        startGame: "Start Game",
        timeLeft: "Time Left",
        score: "Score",
        finalScore: "Final Score: {score}",
        playAgain: "Play Again",
        home: "Home",
        confirmReturn: "Are you sure you want to return? Current progress will be lost.",
        invalidDuration: "Please enter a duration between 10-300 seconds",
        tapToStart: "Tap anywhere to start",
        tapLeftSkip: "Tap left to skip",
        tapRightCorrect: "Tap right for correct",
        wordsExhausted: "(Word list exhausted)",
        selectCategory: "Please select a category",
        selectTime: "Select Time",
        customTime: "Custom Duration",
        seconds: "seconds",
        gameResult: "Game Result",
        categories: {
            "动物": "Animals",
            "食物": "Food",
            "运动": "Sports",
            "职业": "Professions",
            "自定义": "Custom"
        }
    }
};

// �����始化游戏状态
const gameState = {
    currentWords: [],
    usedWords: [],
    score: 0,
    timeLeft: 0,
    isPlaying: false,
    timer: null
};

// 更新类别选择逻辑
function updateStartButton() {
    const startButton = document.querySelector('.start-game-btn');
    if (startButton) {
        startButton.disabled = !selectedCategory;
    }
}

// 修改类别点击事件处理
function handleCategoryClick(category, item) {
    selectedCategory = category;
    document.querySelectorAll('.category-item').forEach(i => {
        i.classList.remove('active');
    });
    item.classList.add('active');
    
    // 如果是自定义类别，显示词汇输入界面
    if (category === '自定义') {
        document.getElementById('categorySelection').style.display = 'none';
        document.getElementById('customWordsInput').style.display = 'block';
    } else {
        // 直接进入时间选择页面
        showTimeSelection();
    }
}

// 修改初始化类别轮播数
function initializeCategoryCarousel() {
    console.log('开始初始化轮播图');
    console.log('defaultCategories:', defaultCategories);
    
    const carousel = document.querySelector('.category-carousel');
    if (!carousel) {
        console.error('找不到轮播图容器');
        return;
    }
    
    const carouselInner = carousel.querySelector('.category-carousel-inner');
    if (!carouselInner) {
        console.error('找不到轮播图内容容器');
        return;
    }
    
    const categories = Object.keys(defaultCategories);
    console.log('找到的类别:', categories);
    
    // 清空现有内容
    carouselInner.innerHTML = '';
    
    // 添加类别项
    categories.forEach((category, index) => {
        console.log('正在添加类别:', category);
        
        const item = document.createElement('div');
        item.className = 'category-item';
        item.dataset.category = category;
        
        const img = document.createElement('img');
        img.src = `assets/banners/${category}.png`;
        img.alt = category;
        console.log('图片路径:', img.src);
        
        // 添加图片加载事件
        img.onload = () => {
            console.log('图片加载成功:', category);
        };
        
        img.onerror = (error) => {
            console.error('图片加载失败:', category, error);
            img.src = 'assets/icon.png';
        };
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'category-name';
        const categoryName = i18n[currentLang].categories[category] || category;
        nameDiv.textContent = categoryName;
        console.log('类别名称:', categoryName);
        
        item.appendChild(img);
        item.appendChild(nameDiv);
        carouselInner.appendChild(item);
        
        // 点击事件
        item.addEventListener('click', () => {
            console.log('类别被点击:', category);
            handleCategoryClick(category, item);
        });
    });

    // 处理滚动效果
    function handleScroll() {
        requestAnimationFrame(() => {
            const items = document.querySelectorAll('.category-item');
            const carouselRect = carousel.getBoundingClientRect();
            const centerY = carouselRect.top + carouselRect.height / 2;

            items.forEach(item => {
                const rect = item.getBoundingClientRect();
                const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - centerY);
                const maxDistance = carouselRect.height / 2;
                
                // 增强缩放效果
                const scale = Math.max(0.7, 1 - (distanceFromCenter / maxDistance) * 0.5);
                const opacity = Math.max(0.3, 1 - (distanceFromCenter / maxDistance) * 0.7);
                
                // 应用变换
                item.style.transform = `scale(${scale})`;
                item.style.opacity = opacity;
                
                // 如果在中心位置，添加active类并更新选中状态
                if (distanceFromCenter < 20) {
                    items.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                    selectedCategory = item.dataset.category;
                }
            });
        });
    }

    // 添加滚动事件监听器
    carousel.addEventListener('scroll', handleScroll);
    
    // 初始化滚动效果
    handleScroll();
    
    console.log('轮播图初始化完成');
}

// 修改界面切换函数
function showTimeSelection() {
    if (!selectedCategory) {
        alert(i18n[currentLang].selectCategory);
        return;
    }
    document.getElementById('categorySelection').style.display = 'none';
    document.getElementById('timeSelection').style.display = 'block';
}

// 修改游戏开始函数
function startGame() {
    const category = selectedCategory;
    const duration = parseInt(document.getElementById('duration').value);
    
    if (!category) {
        alert(i18n[currentLang].selectCategory);
        return;
    }

    // 使用内置词库
    gameState.currentWords = shuffleArray([...defaultCategories[category][currentLang]]);
    gameState.usedWords = [];
    gameState.score = 0;
    gameState.timeLeft = duration;
    gameState.isPlaying = false; // 初始设置为false，等待玩家点击开始

    document.getElementById('categorySelection').style.display = 'none';
    document.getElementById('timeSelection').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    
    // 显示游戏指导界面
    const gameInstruction = document.getElementById('gameInstruction');
    if (gameInstruction) {
        gameInstruction.style.display = 'flex';
    }
    
    // 添加点击事件监听器到游戏内容区域
    const gameContent = document.querySelector('.game-content');
    if (gameContent) {
        gameContent.addEventListener('click', startGamePlay);
    }

    updateDisplay();
}

// 开始实际游戏
function startGamePlay() {
    const gameInstruction = document.getElementById('gameInstruction');
    if (gameInstruction) {
        gameInstruction.style.display = 'none';
    }
    
    // 添加点击事件监听器到游戏内容区域
    const gameContent = document.querySelector('.game-content');
    if (gameContent) {
        gameContent.removeEventListener('click', startGamePlay);
    }
    
    gameState.isPlaying = true;
    startTimer();
}

// 开始计时器
function startTimer() {
    if (gameState.timer) clearInterval(gameState.timer);
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        if (gameState.timeLeft <= 0) {
            endGame();
        } else {
            updateDisplay();
        }
    }, 1000);
}

// 更新显示
function updateDisplay() {
    const minutes = Math.floor(gameState.timeLeft / 60);
    const seconds = gameState.timeLeft % 60;
    document.getElementById('timeLeft').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('currentScore').textContent = gameState.score;
    document.getElementById('word').textContent = 
        gameState.currentWords.length > 0 ? gameState.currentWords[0] : '';
}

// 跳过词语
function skipWord() {
    if (!gameState.isPlaying || gameState.currentWords.length === 0) return;
    
    skipSound.play();
    const word = gameState.currentWords.shift();
    gameState.usedWords.push({ word, correct: false });
    updateDisplay();

    // 检查词汇是否用完
    if (gameState.currentWords.length === 0) {
        endGame();
    }
}

// 正确答案
function correctWord() {
    if (!gameState.isPlaying || gameState.currentWords.length === 0) return;
    
    correctSound.play();
    gameState.score++;
    const word = gameState.currentWords.shift();
    gameState.usedWords.push({ word, correct: true });
    updateDisplay();

    // 检查词汇是否用完
    if (gameState.currentWords.length === 0) {
        endGame();
    }
}

// 结束游戏
function endGame() {
    gameState.isPlaying = false;
    clearInterval(gameState.timer);
    
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    
    document.getElementById('finalScore').textContent = 
        `${i18n[currentLang].finalScore.replace('{score}', gameState.score)}`;
    
    const wordList = document.getElementById('wordList');
    wordList.innerHTML = '';
    gameState.usedWords.forEach(({ word, correct }) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="word-text">${word}</span>
            <span class="word-status ${correct ? 'correct' : 'wrong'}">
                ${correct ? '✓' : '✗'}
            </span>
        `;
        li.className = correct ? 'correct' : 'wrong';
        wordList.appendChild(li);
    });
}

function confirmReturn() {
    if (gameStarted && confirm(i18n[currentLang].confirmReturn)) {
        clearInterval(timer);
        showCategorySelection();
    } else if (!gameStarted) {
        showCategorySelection();
    }
}

function restartGame() {
    showCategorySelection();
}

// 语言切换
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('gameLanguage', lang);

    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // 更新���有文本
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18n[lang][key] || key;
    });

    // 更新类别名称
    document.querySelectorAll('.category-name').forEach(nameDiv => {
        const category = nameDiv.parentElement.dataset.category;
        nameDiv.textContent = i18n[lang].categories[category] || category;
    });

    // 更新标题
    document.title = `${i18n[lang].title}`;
}

// 辅助函数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 添加显示类别选择界面的函数
function showCategorySelection() {
    document.getElementById('categorySelection').style.display = 'block';
    document.getElementById('timeSelection').style.display = 'none';
    document.getElementById('customWordsInput').style.display = 'none';
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    
    // 清空自定义词汇输入框
    const customWordsTextarea = document.getElementById('customWords');
    if (customWordsTextarea) {
        customWordsTextarea.value = '';
    }
    
    // 重新初始化类别轮播
    initializeCategoryCarousel();
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('页面加载完成');
    console.log('defaultCategories 是否存在:', typeof defaultCategories !== 'undefined');
    console.log('i18n 是否存在:', typeof i18n !== 'undefined');
    
    // 确保所有必要的脚本都已加载
    if (typeof defaultCategories === 'undefined') {
        console.error('defaultCategories 未定义，请检查 data.js 是否正确加载');
        return;
    }
    
    if (typeof i18n === 'undefined') {
        console.error('i18n 未定义');
        return;
    }
    
    // 显示类别选择界面
    showCategorySelection();
    
    // 初始化语言按钮
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('语言:', btn.dataset.lang);
            setLanguage(btn.dataset.lang);
        });
    });
    
    // 设置初始语言
    setLanguage(currentLang);

    // 初始化时间选择按钮
    const timeOptions = document.querySelectorAll('.time-option');
    timeOptions.forEach(button => {
        button.addEventListener('click', function() {
            timeOptions.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('duration').value = this.dataset.seconds;
        });
    });

    // 默认选中60秒
    const defaultOption = document.querySelector('[data-seconds="60"]');
    if (defaultOption) {
        defaultOption.click();
    }
});

// 更新翻译
function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (i18n[currentLang][key]) {
            element.textContent = i18n[currentLang][key];
        }
    });

    // 更新类别选择的翻译
    const categorySelect = document.getElementById('category');
    if (categorySelect) {
        Array.from(categorySelect.options).forEach(option => {
            const category = option.value;
            if (i18n[currentLang].categories[category]) {
                option.textContent = i18n[currentLang].categories[category];
            }
        });
    }
}

// 处理区域点击
function handleAreaClick(action) {
    if (!gameState.isPlaying || gameState.currentWords.length === 0) return;

    // 阻止事件冒泡和默认行为
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    if (action === 'skip') {
        skipWord();
    } else if (action === 'correct') {
        correctWord();
    }
}

// 添加键盘事件支持
document.addEventListener('keydown', e => {
    if (gameState.isPlaying) {
        if (e.code === 'ArrowLeft') skipWord();
        if (e.code === 'ArrowRight') correctWord();
    }
});

// 处理自定义词汇并进入时间选择
function proceedToTimeSelection() {
    const customWordsText = document.getElementById('customWords').value.trim();
    if (!customWordsText) {
        alert('请输入至少一个词汇');
        return;
    }

    // 将输入的文本按行分割成词汇数组
    const customWordsList = customWordsText.split('\n')
        .map(word => word.trim())
        .filter(word => word.length > 0);

    if (customWordsList.length === 0) {
        alert('请输入至少一个词汇');
        return;
    }

    // 将自定义词汇添加到词库中
    if (!defaultCategories['自定义']) {
        defaultCategories['自定义'] = {};
    }
    defaultCategories['自定义'][currentLang] = customWordsList;

    // 隐藏词汇输入界面，显示时间选择界面
    document.getElementById('customWordsInput').style.display = 'none';
    document.getElementById('timeSelection').style.display = 'block';
} 