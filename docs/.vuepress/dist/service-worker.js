/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1c13d04379c0c176431c3aec99a1f928"
  },
  {
    "url": "assets/css/1.styles.9431959a.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.312e473a.css",
    "revision": "87525ae9ffc293c0ec490bdcdea144d0"
  },
  {
    "url": "assets/css/3.styles.3268bce1.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/4.styles.214e5724.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/5.styles.61d206fc.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.2e6d2021.css",
    "revision": "898d65eb5fbd8c2440a6d062669096a1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9431959a.js",
    "revision": "f235c14f8d099204282814553560c458"
  },
  {
    "url": "assets/js/10.2b98312a.js",
    "revision": "888e9b252dab45d88700e492ec919dab"
  },
  {
    "url": "assets/js/11.bf4f9b5b.js",
    "revision": "e205a4340106c1cd2431bcd0c3ef98ab"
  },
  {
    "url": "assets/js/12.b3d0c625.js",
    "revision": "9d54bac928035d0660e7b4536ee45c6e"
  },
  {
    "url": "assets/js/13.b9f11f13.js",
    "revision": "84bdc9c72d476b401f5596033b8edcd0"
  },
  {
    "url": "assets/js/14.2d140aa6.js",
    "revision": "d59e58360dbaa5321fc9dc599689dcff"
  },
  {
    "url": "assets/js/15.0392341e.js",
    "revision": "83c70d6f927cde1b5f07b65eabd21779"
  },
  {
    "url": "assets/js/2.312e473a.js",
    "revision": "fdb02cd16da826be4a6c4f18303e9a7e"
  },
  {
    "url": "assets/js/3.3268bce1.js",
    "revision": "c2cc468928c8049a3545350725d04702"
  },
  {
    "url": "assets/js/4.214e5724.js",
    "revision": "befec9e502f8824ac158e3cffc0843a9"
  },
  {
    "url": "assets/js/5.61d206fc.js",
    "revision": "74156427a585e35abeee8e7f29e9c6dc"
  },
  {
    "url": "assets/js/6.5857a33f.js",
    "revision": "b2275496d7875e2d73d3e0520e30152e"
  },
  {
    "url": "assets/js/7.1da9bbbc.js",
    "revision": "d3b3c148e632efb6e6e2b0c8e137f3b6"
  },
  {
    "url": "assets/js/8.fbaee653.js",
    "revision": "1312a110787859d4be7ac68136c213d3"
  },
  {
    "url": "assets/js/9.9c5a0f96.js",
    "revision": "05994584a6f40080a25e7b026a22ab8e"
  },
  {
    "url": "assets/js/app.2e6d2021.js",
    "revision": "1aa389d1830d0cb98b3be2a7a6efa348"
  },
  {
    "url": "basic/index.html",
    "revision": "6959a3a9db81e95aceb2460e8a4bbb23"
  },
  {
    "url": "favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "index.html",
    "revision": "69641de7d8d3d7f31b89d53fe875e065"
  },
  {
    "url": "rule/index.html",
    "revision": "e7284f1868448e510d9cc9b9cff89c35"
  },
  {
    "url": "section/index.html",
    "revision": "8922966993eb4eef79abd46d7c9a1e29"
  },
  {
    "url": "vi/basic/index.html",
    "revision": "fca7b087654ff6b2d5a50a0aebf3154a"
  },
  {
    "url": "vi/index.html",
    "revision": "168fdf6e06b7d7f2249ab10c3286da59"
  },
  {
    "url": "vi/rule/index.html",
    "revision": "0fb177a40fe9f9c7583cb85453e17aa5"
  },
  {
    "url": "vi/section/index.html",
    "revision": "42f4da5c41c10a9d96e1349b4dbd6fc7"
  },
  {
    "url": "vi/write/index.html",
    "revision": "51fcff543d295a150bad671c3d816b16"
  },
  {
    "url": "viblo_blog.png",
    "revision": "40b2692756d51aa3694b90d0031b6975"
  },
  {
    "url": "viblo_logo.png",
    "revision": "d2a75a80c80301996fe551d8340cc393"
  },
  {
    "url": "viblo_qa.jpg",
    "revision": "8a33ef4501a653d75415534e9e5fdbe4"
  },
  {
    "url": "viblo_video.png",
    "revision": "5a11c9eeb5e74173ea0f1b988d55916e"
  },
  {
    "url": "viblo.png",
    "revision": "b1e21f528e0f5657ed18887f0f15d2f8"
  },
  {
    "url": "vuepress-logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "write/index.html",
    "revision": "c7b566fbd859a61af12ba4769b8dcc96"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
