if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,n,t)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}})).then(e=>{const s=t(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/W_QyzmpyyltBo--PJ7pmp/_buildManifest.js",revision:"f6b5f3761534c99d9eb98c92ae83476a"},{url:"/_next/static/W_QyzmpyyltBo--PJ7pmp/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.2337cdde2bb4a53d85af.js",revision:"178ef8db888deddd23382ff890f0de7f"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.9398c0bf99254ee54697.js",revision:"33b603f886a91c687e6d47a7bbec25d6"},{url:"/_next/static/chunks/framework.baa41d4dbf5d52db897c.js",revision:"34da50bf2f234c3162f92c7406756c59"},{url:"/_next/static/chunks/main-3eec34faad1ed4d14b44.js",revision:"9409db05a11bbaf771a0e898eb1c1442"},{url:"/_next/static/chunks/pages/_app-04ab19187e5f98d536c6.js",revision:"3b82d85298b8cb1e253ab51818594843"},{url:"/_next/static/chunks/pages/_error-f4f567df00ce0843964e.js",revision:"1ce7635ad73519a6bb086b2767b96914"},{url:"/_next/static/chunks/pages/index-8f1324302c458ae60bfe.js",revision:"f9a4083abc15a951bfb16b10040fa6fe"},{url:"/_next/static/chunks/polyfills-57d8738e7416f8423303.js",revision:"1d2a7e5b305faf70e0cf5eee636faef9"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/51ac2009948614dcf58d.css",revision:"141213eadb0ecdb8ba0a6bd0f9202683"},{url:"/_next/static/css/92925270d64969c69501.css",revision:"669b7452b98dc76f898abc48f3a0ffde"},{url:"/favicon.ico",revision:"596cfac801c46db8741e3a0fed74d657"},{url:"/icons/192.png",revision:"776075962da12d5ad70a80e1da949ec3"},{url:"/icons/384.png",revision:"1b226230c6d8c18eb182a51e3908ad92"},{url:"/icons/512.png",revision:"520fb965591e814d38bd5aac6db7c8ab"},{url:"/manifest.json",revision:"626709f76a9e1b5210d15f413098de6d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
