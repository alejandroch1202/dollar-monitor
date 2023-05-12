const staticMonitor = "dev-monitor-dollar-v1";
const assets = [
  "/",
  "/index.html",
  "/css/normalize.css",
  "/css/styles.css",
  "/js/config.js",
  "/js/main.js",
  "/assets/bcv.png",
  "/assets/dollar.svg",
  "/assets/github.svg",
  "/assets/heart-dark.svg",
  "/assets/heart-light.svg",
  "/assets/linkedin.svg",
  "/assets/monitor.webp",
  "/assets/twitter.svg",
  "/assets/web.svg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticMonitor).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
