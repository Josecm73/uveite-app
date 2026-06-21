const CACHE = 'uveites-v2';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './data/classificacao.js',
  './data/doencas.js',
  './data/tabelas.js',
  './data/algoritmos.js',
  './data/tips.js',
  './data/tratamento.js',
  './data/exames.js',
];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
