const FILES_TO_CACHE = [
    "/", "/index.html", "index.js", "/db.js", "/styles.css"]


const DATA_CACHE_NAME = "data-cache-v1"
const CACHE_NAME = "stactic-cache-v2"

self.addEventListener("install", function(evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Your files were pre-cached successfully");
            return cache.addAll(FI)
        })
    )

    self.skipWaiting()
})

