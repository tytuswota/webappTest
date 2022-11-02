

self.addEventListener("fetch", e=>{
  console.log('intercepting fetch reqeust for: ', e.request.url);
  e.respondWith(
    cashes.match(e.request).then(response => {
        return response || fetch(e.request);
    })
  )
})