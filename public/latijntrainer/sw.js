if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,n,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6jKkxxygKK0GpOYtA7-4m/_buildManifest.js",revision:"9d3b082e988a7e6a259b3ed4cafc345a"},{url:"/_next/static/6jKkxxygKK0GpOYtA7-4m/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.2ad70ff11dad8966de51.js",revision:"9a9f2a1e753c1de0c205e38ba3346e97"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.eb3b91eae4f1b7445283.js",revision:"4ab724dbd1f87b64f2846c207a509de0"},{url:"/_next/static/chunks/framework.8124b1ac1537ea0fac2e.js",revision:"34da50bf2f234c3162f92c7406756c59"},{url:"/_next/static/chunks/main-78de21b0b74e7a6f099a.js",revision:"27fe7f42de363bd4814baf19734481d6"},{url:"/_next/static/chunks/pages/_app-5b8bf1d0137e4a81ab4c.js",revision:"d8d98a784e38ec02da64f08aa5e8ada9"},{url:"/_next/static/chunks/pages/_error-f4f567df00ce0843964e.js",revision:"1ce7635ad73519a6bb086b2767b96914"},{url:"/_next/static/chunks/pages/index-a7c514a04691f2484407.js",revision:"c7f4777fdc81707e329f778fa12b1d17"},{url:"/_next/static/chunks/polyfills-57d8738e7416f8423303.js",revision:"1d2a7e5b305faf70e0cf5eee636faef9"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/51ac2009948614dcf58d.css",revision:"141213eadb0ecdb8ba0a6bd0f9202683"},{url:"/_next/static/css/e5208f7fbe03ebc7d08d.css",revision:"8d656a0f728aaf30b971b41d79cd5167"},{url:"/favicon.ico",revision:"596cfac801c46db8741e3a0fed74d657"},{url:"/icons/192.png",revision:"776075962da12d5ad70a80e1da949ec3"},{url:"/icons/384.png",revision:"1b226230c6d8c18eb182a51e3908ad92"},{url:"/icons/512.png",revision:"520fb965591e814d38bd5aac6db7c8ab"},{url:"/latijntrainer/workbox-c2b5e142.js",revision:"76e971851a718badc9e0d87aef2eb091"},{url:"/latijntrainer/workbox-f88dbe3b.js",revision:"186774883a866b2e4de3f1456d5f8540"},{url:"/latijntrainer/workbox-f88dbe3b.js.map",revision:"c8abcf85d68a22d98690508da149452b"},{url:"/manifest.json",revision:"cf3d98871a5ad187e69fdaa98de77e4f"},{url:"/sw.js",revision:"5dc7d265b6e41eb97dfa1ae1398eecbd"},{url:"/sw.js.map",revision:"7dd6bc193c26aa95f58fb668a0a55f10"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
