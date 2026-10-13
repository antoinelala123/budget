// Fait fonctionner l'application hors ligne.
// À CHAQUE MISE À JOUR de la page : change le numéro de version ci-dessous (v1 → v2…),
// sinon les téléphones garderont l'ancienne version en mémoire.
const CACHE = "budget-v1";

const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./fonts/manrope.woff2",
  "./fonts/jetbrains-mono-500.woff2",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png"
];

// Installation : on met tous les fichiers de côté
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

// Activation : on supprime les anciennes versions
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Requêtes : la page essaie d'abord le réseau (pour avoir la dernière version),
// et utilise la copie en mémoire si on est hors ligne. Les autres fichiers viennent directement de la mémoire.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
