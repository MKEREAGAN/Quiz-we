const CACHE_NAME = "quiz-we-v3";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./mots.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installation en cours...");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("[Service Worker] Fichiers en cache :", FILES_TO_CACHE);
        return cache.addAll(FILES_TO_CACHE);
      })
      .catch((err) => {
        console.error("[Service Worker] Erreur lors du cache :", err);
      })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  // Toujours chercher en ligne en premier, puis le cache en fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Si la requête réussit, mettre en cache la réponse
        if (response.ok) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Si la requête échoue, utiliser le cache
        return caches.match(event.request)
          .then((response) => {
            if (response) {
              console.log("[Service Worker] Depuis cache :", event.request.url);
              return response;
            }
            console.error("[Service Worker] Pas en cache :", event.request.url);
            return new Response("Ressource non disponible", {
              status: 404,
              statusText: "Not Found"
            });
          });
      })
  );
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activation...");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("[Service Worker] Suppression ancien cache :", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
