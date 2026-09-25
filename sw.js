// This service worker used to cache-first the homepage, which caused
// visitors to see stale content indefinitely. It now unregisters itself
// and clears its caches so the site falls back to normal HTTP caching.
self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.map(function (name) {
        return caches.delete(name);
      }));
    }).then(function () {
      return self.registration.unregister();
    }).then(function () {
      return self.clients.matchAll({ type: "window" });
    }).then(function (clientsList) {
      clientsList.forEach(function (client) {
        client.navigate(client.url);
      });
    })
  );
});
