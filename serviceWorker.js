const CACHE_NAME = 'guess-game-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

const BASE_PATH = '/charades-game';

const STATIC_ASSETS = [
    `${BASE_PATH}/`,
    `${BASE_PATH}/index.html`,
    `${BASE_PATH}/styles.css`,
    `${BASE_PATH}/script.js`,
    `${BASE_PATH}/data.js`,
    `${BASE_PATH}/manifest.json`,
    `${BASE_PATH}/assets/icon.png`,
    `${BASE_PATH}/assets/correct.mp3`,
    `${BASE_PATH}/assets/skip.mp3`
];

// 缓存所有类别的封面图片
const CATEGORY_BANNERS = [
    `${BASE_PATH}/assets/banners/动物.png`,
    `${BASE_PATH}/assets/banners/食物.png`,
    `${BASE_PATH}/assets/banners/运动.png`,
    `${BASE_PATH}/assets/banners/职业.png`,
    `${BASE_PATH}/assets/banners/影视娱乐.png`,
    `${BASE_PATH}/assets/banners/表演.png`,
    `${BASE_PATH}/assets/banners/趣味搞笑.png`,
    `${BASE_PATH}/assets/banners/地理与旅行.png`,
    `${BASE_PATH}/assets/banners/音乐与艺术.png`,
    `${BASE_PATH}/assets/banners/成语.png`,
    `${BASE_PATH}/assets/banners/自定义.png`
];

// 安装事件
self.addEventListener('install', event => {
    event.waitUntil(
        Promise.all([
            caches.open(STATIC_CACHE)
                .then(cache => cache.addAll([...STATIC_ASSETS, ...CATEGORY_BANNERS])),
            caches.open(DYNAMIC_CACHE)
        ])
    );
});

// 激活事件
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (![STATIC_CACHE, DYNAMIC_CACHE].includes(key)) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// 请求拦截
self.addEventListener('fetch', event => {
    // 获取请求的URL
    const url = new URL(event.request.url);
    
    // 如果是同源请求，添加基础路径
    if (url.origin === location.origin) {
        // 检查是否是根路径请求
        if (url.pathname === '/charades-game' || url.pathname === '/charades-game/') {
            event.respondWith(caches.match(`${BASE_PATH}/index.html`));
            return;
        }
    }

    // 静态资源策略：缓存优先，网络回退
    if (STATIC_ASSETS.includes(event.request.url) || CATEGORY_BANNERS.includes(event.request.url)) {
        event.respondWith(
            caches.match(event.request)
                .then(response => response || fetch(event.request))
        );
        return;
    }

    // 动态资源策略：网络优先，缓存回退
    event.respondWith(
        fetch(event.request)
            .then(response => {
                const clonedResponse = response.clone();
                caches.open(DYNAMIC_CACHE)
                    .then(cache => cache.put(event.request, clonedResponse));
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});

// 错误处理
self.addEventListener('error', event => {
    console.error('Service Worker Error:', event.error);
});

// 消息处理
self.addEventListener('message', event => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
});
