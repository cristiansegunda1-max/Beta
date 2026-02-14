const CACHE_NAME = 'cm-card-v1';
const ASSETS = [
  './',
  './index.html',
  './logo.png',
  './icon-192.png',
  './icon-512.png',
  "./agregar.PNG",
  "./acciones.PNG",
  "./ajustes.PNG",
  "./moon.PNG",
  "./sun.PNG"
  
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});

  
  
  
  
  
    "./index.html",
  "./logo.png",
  
  "./apple-icon.png",
  "./manifest.json"
  
  
  
  
