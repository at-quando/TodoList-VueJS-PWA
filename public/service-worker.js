workbox.setConfig({ debug: false });
workbox.precaching.precacheAndRoute([]);

// Cache images:
workbox.routing.registerRoute(
 /\.(?:png|gif|jpg|jpeg|svg)$/,
 workbox.strategies.staleWhileRevalidate({
   cacheName: "images",
   plugins: [
     new workbox.expiration.Plugin({
       maxEntries: 60,
       maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
     })
   ]
 })
);

workbox.routing.registerRoute(
  new RegExp('https://some-fancy-api.com'),
  workbox.strategies.networkFirst({
    cacheName: 'api',
  }),
);

// Cache Google fonts:
workbox.routing.registerRoute(
 new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
 workbox.strategies.cacheFirst({
   cacheName: "googleapis",
   plugins: [
     new workbox.expiration.Plugin({
       maxEntries: 30,
       maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
     })
   ]
 })
);