const CACHE_NAME = "cmcard-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./logo.png",
  "./agregar.PNG",
  "./acciones.PNG",
  "./ajustes.PNG",
  "./moon.PNG",
  "./sun.PNG",
  "./apple-icon.png",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});