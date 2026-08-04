// 최소한의 서비스 워커 — PWA 설치 조건을 만족시키기 위한 용도
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // 캐싱 없이 그냥 네트워크로 통과 (항상 최신 버전 사용)
  e.respondWith(fetch(e.request));
});
