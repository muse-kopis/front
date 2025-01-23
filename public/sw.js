const CACHE_NAME = 'image-cache-v1';
const COLOR_CACHE_NAME = 'color-cache-v1';

self.addEventListener('fetch', (event) => {
  if (event.request.url.match(/\.(jpg|jpeg|png|gif)$/)) {
    event.respondWith(
      caches.match(event.request).then(async (response) => {
        // 1. 이미지 캐시 확인
        if (response) {
          // 2. 색상 캐시 확인
          const colorCache = await caches.open(COLOR_CACHE_NAME);
          const cachedColor = await colorCache.match(event.request.url);
          
          if (cachedColor) {
            // 캐시된 색상 값이 있으면 바로 반환
            return {
              image: response,
              color: await cachedColor.text()
            };
          }

          // 색상만 새로 계산하고 캐시
          const color = await extractColor(response.clone());
          await colorCache.put(event.request.url, new Response(color));
          
          return {
            image: response,
            color: color
          };
        }

        // 새로운 이미지와 색상 모두 캐시
        const networkResponse = await fetch(event.request);
        const color = await extractColor(networkResponse.clone());
        
        const cache = await caches.open(CACHE_NAME);
        const colorCache = await caches.open(COLOR_CACHE_NAME);
        
        await cache.put(event.request, networkResponse.clone());
        await colorCache.put(event.request.url, new Response(color));
        
        return {
          image: networkResponse,
          color: color
        };
      })
    );
  }
});