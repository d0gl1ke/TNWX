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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpeg",
    "revision": "e01e6434c0106d634b27e693cd9c13a2"
  },
  {
    "url": "2.jpeg",
    "revision": "8a01e649a335bde2478c53f6e04a2d30"
  },
  {
    "url": "3.jpeg",
    "revision": "c83fbf16b12b4f9ddd83b79235a94f09"
  },
  {
    "url": "4.jpeg",
    "revision": "b016e356a0ea52104f6f466de76bc66a"
  },
  {
    "url": "404.html",
    "revision": "cfa5fa9dd6f402fc524b12cc1da85594"
  },
  {
    "url": "5.jpeg",
    "revision": "ff00ccffeeeedebacc53fb2f02e52fea"
  },
  {
    "url": "assets/css/0.styles.d70e82e9.css",
    "revision": "3a2d15f25c256a8783fd87b16996c5e6"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.28cda475.js",
    "revision": "9668f3ad4e4f99d4898163931c9be79f"
  },
  {
    "url": "assets/js/11.db39a89f.js",
    "revision": "f159f7a3b508a3e6beb7968349566f17"
  },
  {
    "url": "assets/js/12.e42d26fe.js",
    "revision": "0bf33d96100dae0905870176299a6f49"
  },
  {
    "url": "assets/js/13.9d5712b2.js",
    "revision": "b3057cc0fd01f4a216c74c6a41ca1f5a"
  },
  {
    "url": "assets/js/14.1e2d9873.js",
    "revision": "73405356a8a10277779497d34bd15795"
  },
  {
    "url": "assets/js/15.0675e208.js",
    "revision": "1b1e75c84d9a919292fd41d5bef72fd2"
  },
  {
    "url": "assets/js/16.d0571cd6.js",
    "revision": "b212883f73a226ed325ba3c33913fe88"
  },
  {
    "url": "assets/js/17.684f5768.js",
    "revision": "5067774e539a3a322e7632bdb7e5c962"
  },
  {
    "url": "assets/js/18.ae43a99a.js",
    "revision": "9026cba7624a89808df472801b02d1c8"
  },
  {
    "url": "assets/js/19.8a4c6a9c.js",
    "revision": "34efd6c66d58180f83ac47b783910ad0"
  },
  {
    "url": "assets/js/20.8cf831d3.js",
    "revision": "7a4ebffa405ee752520b81f536897c82"
  },
  {
    "url": "assets/js/21.d170338b.js",
    "revision": "a780d43cefae46102cbe4510153bd35c"
  },
  {
    "url": "assets/js/22.bc650c51.js",
    "revision": "29ed2144515f888df35bfabade003bbf"
  },
  {
    "url": "assets/js/23.68124148.js",
    "revision": "4c342d2fbbcba9feda0ce64c2a1246d0"
  },
  {
    "url": "assets/js/24.25393289.js",
    "revision": "61dd606fdfab83d5b94b09cfb3468d26"
  },
  {
    "url": "assets/js/25.0bc16d73.js",
    "revision": "8830b2c42a33d6b8f3ac34e3531ed027"
  },
  {
    "url": "assets/js/26.68743aba.js",
    "revision": "1ccd751961d10b76a0c18fdd924faedc"
  },
  {
    "url": "assets/js/27.8648c3fa.js",
    "revision": "0c60abbe569c5322ebd8731be7787474"
  },
  {
    "url": "assets/js/28.08160980.js",
    "revision": "7576ed1bdb7d7e9e51e6491fa6cdd75b"
  },
  {
    "url": "assets/js/29.091e6cda.js",
    "revision": "d8226f2584ca0a3c9c823cee81a8c86c"
  },
  {
    "url": "assets/js/3.c0f2e861.js",
    "revision": "99f3f8686a3b5bc860dac6dd8a65f1a7"
  },
  {
    "url": "assets/js/30.db994a0d.js",
    "revision": "8cd1b678681dd77347d84981f61985b6"
  },
  {
    "url": "assets/js/31.0c553a35.js",
    "revision": "e700b957507a913396daebc7eed28d4e"
  },
  {
    "url": "assets/js/4.822e3c8a.js",
    "revision": "fad0f0108310dfc6b4cefa3eb41a556d"
  },
  {
    "url": "assets/js/5.00cf9798.js",
    "revision": "41d988ddd196093f8d8b318c214119a4"
  },
  {
    "url": "assets/js/6.170c0cc0.js",
    "revision": "b4a411c476a7e116630ea18e42097f53"
  },
  {
    "url": "assets/js/7.701ebf1f.js",
    "revision": "26505a691e41ea994f0bd1abdcdc7ab4"
  },
  {
    "url": "assets/js/8.35e12711.js",
    "revision": "34e7b333b6ebe8953fbe388fce76816c"
  },
  {
    "url": "assets/js/9.9f99cc8a.js",
    "revision": "63dd70894d854fe6b679c556f7f104c0"
  },
  {
    "url": "assets/js/app.912ba0e5.js",
    "revision": "ce528973b4d306bad3615fe85d36140a"
  },
  {
    "url": "assets/js/vendors~notification.d03de14c.js",
    "revision": "76eef74b179624d2d6595ae14e3ac2f7"
  },
  {
    "url": "coffee.jpeg",
    "revision": "f4fb651968cef56e279e1c10ed51b053"
  },
  {
    "url": "frp.png",
    "revision": "ddd3398a3de5a3ea2ba77881487787e5"
  },
  {
    "url": "guide/common/accesstoken.html",
    "revision": "25ef0f384d17a0d665f0a1d023ac2c2a"
  },
  {
    "url": "guide/common/init.html",
    "revision": "0bb140505a4dd81c11f0782c4b7536af"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "2646bbddd287160773f5cb2ba31e84fc"
  },
  {
    "url": "guide/index.html",
    "revision": "a920597b0a32cd349ca96d0d60560410"
  },
  {
    "url": "guide/miniprogram/login.html",
    "revision": "021496ec310109933d0695afcbccda7c"
  },
  {
    "url": "guide/miniprogram/ocr.html",
    "revision": "d1570fdf21233dc0336fd83192035076"
  },
  {
    "url": "guide/miniprogram/qrcode.html",
    "revision": "edfd9dcf56cd944b6234e8b07ea3041b"
  },
  {
    "url": "guide/miniprogram/subscribemsg.html",
    "revision": "e5c1b248fc80d19cb51a13013f6ec491"
  },
  {
    "url": "guide/tools/frp.html",
    "revision": "547cf13e9c01fac22eaf565e83bdba74"
  },
  {
    "url": "guide/wxcp/callback.html",
    "revision": "da1650f7acef219838354b18dac99f0e"
  },
  {
    "url": "guide/wxcp/handmsg.html",
    "revision": "4f79aa364312bdef1b8eae60fe0e3ab0"
  },
  {
    "url": "guide/wxcp/media.html",
    "revision": "dc1df4f03c45d474312538d4735e2adb"
  },
  {
    "url": "guide/wxcp/oauth.html",
    "revision": "aabf5c5499c61dcf4ba78efb263f794f"
  },
  {
    "url": "guide/wxcp/sendmsg.html",
    "revision": "2a4280f7684940e850523c1ae6647426"
  },
  {
    "url": "guide/wxmp/callback.html",
    "revision": "e32b0942be2dfd26e04b4f07c39140cb"
  },
  {
    "url": "guide/wxmp/custom_menu.html",
    "revision": "41829edec1ae7080fb9b165e0b538f9d"
  },
  {
    "url": "guide/wxmp/jssdk.html",
    "revision": "bc3cd5be35df0779b53f06a5229ebc50"
  },
  {
    "url": "guide/wxmp/oauth.html",
    "revision": "bbd266c863258ce40870adb958ca4e6b"
  },
  {
    "url": "guide/wxmp/sendmsg.html",
    "revision": "7902fb47d2d7908cacf60332489a4e8f"
  },
  {
    "url": "guide/wxmp/templatemsg.html",
    "revision": "44a1e0affefae7452e63fd15c835a735"
  },
  {
    "url": "guide/wxpay/api-v2.html",
    "revision": "c75dfa59b064da8a67b01d44a837ca27"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "01327eb4c5cf5a5b00aeb74d84c6abce"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "fd66cf7de92c60d3340c1bcdf1469bbc"
  },
  {
    "url": "index.html",
    "revision": "f4a9564de304d54b0db631d3057c013a"
  }
].concat(self.__precacheManifest || []);
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
