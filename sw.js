if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>n(e,r),l={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BAT_LIdc.js",revision:null},{url:"index.html",revision:"cef1d4ae7ec23092a7a695940372356c"},{url:"registerSW.js",revision:"142e60ed387f7a0375c7d4d440818570"},{url:"manifest.webmanifest",revision:"65c09f76547112c1fbc9571a9cbc0b33"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
