const CACHE_NAME = 'verbo-vivo-offline-v3.0';
const CORE_ASSETS = [
  './app.html',
  './favicon.svg',
  './favicon.ico',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './manifest.webmanifest',
  './data/acf.json',
  './data/nvi.json',
  './data/aa.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Network-first para páginas HTML (garante atualização imediata após novos releases)
  const isDocument = event.request.mode === 'navigate' || event.request.destination === 'document';
  if (isDocument) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request).then((c) => c || caches.match('./app.html')))
    );
    return;
  }

  // Cache-first para arquivos de dados bíblicos e assets estáticos
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match('./app.html'));
    })
  );
});
