!function(){"use strict";var e,t,n,r,o,c={},a={};function f(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return c[e].call(n.exports,n,n.exports,f),n.loaded=!0,n.exports}f.m=c,f.c=a,e=[],f.O=function(t,n,r,o){if(!n){var c=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var a=!0,u=0;u<n.length;u++)(!1&o||c>=o)&&Object.keys(f.O).every((function(e){return f.O[e](n[u])}))?n.splice(u--,1):(a=!1,o<c&&(c=o));if(a){e.splice(d--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},f.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},f.d(o,c),o},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return"assets/js/"+({53:"935f2afb",85:"1f391b9e",98:"e9ca57c1",190:"ad3f1609",208:"4fcfdc18",227:"aaf000ff",237:"1df93b7f",346:"736e1cae",348:"74c8c014",371:"288b620c",414:"393be207",441:"e048a395",470:"e5e605df",498:"0dcc4da8",514:"1be78505",533:"20ca2061",608:"9e4087bc",648:"3ca13b1b",671:"0e384e19",706:"8e79620e",709:"087f3412",805:"35364be2",815:"685c779a",838:"8239757b",918:"17896441",981:"292607f7"}[e]||e)+"."+{53:"de24d172",75:"9c212c1a",85:"f25d804a",98:"9017205f",190:"8d4f39ac",208:"daafa56b",227:"13612aa4",237:"7ef14b59",346:"7adb660b",348:"261e21fe",371:"7aba3f05",414:"1130c681",441:"46916ec2",470:"5838ec0e",482:"b578c61f",498:"3cde52c0",514:"d5778a20",533:"4354d4bf",608:"719b6c8a",648:"9a8d6671",667:"641340f4",671:"4de4f5ce",706:"418a95eb",709:"342587f3",805:"3b5b8f4d",814:"12c5f9df",815:"90867b88",838:"e9b901fc",918:"90022294",981:"373a45e1"}[e]+".js"},f.miniCssF=function(e){return"assets/css/styles.f52af8cb.css"},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="VChatSdk-Documentation:",f.l=function(e,t,n,c){if(r[e])r[e].push(t);else{var a,u;if(void 0!==n)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var b=i[d];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==o+n){a=b;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,f.nc&&a.setAttribute("nonce",f.nc),a.setAttribute("data-webpack",o+n),a.src=e),r[e]=[t];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),u&&document.head.appendChild(a)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/VChatSdk-Documentation/",f.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85",e9ca57c1:"98",ad3f1609:"190","4fcfdc18":"208",aaf000ff:"227","1df93b7f":"237","736e1cae":"346","74c8c014":"348","288b620c":"371","393be207":"414",e048a395:"441",e5e605df:"470","0dcc4da8":"498","1be78505":"514","20ca2061":"533","9e4087bc":"608","3ca13b1b":"648","0e384e19":"671","8e79620e":"706","087f3412":"709","35364be2":"805","685c779a":"815","8239757b":"838","292607f7":"981"}[e]||e,f.p+f.u(e)},function(){var e={303:0,532:0};f.f.j=function(t,n){var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var c=f.p+f.u(t),a=new Error;f.l(c,(function(n){if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,r[1](a)}}),"chunk-"+t,t)}},f.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],a=n[1],u=n[2],i=0;if(c.some((function(t){return 0!==e[t]}))){for(r in a)f.o(a,r)&&(f.m[r]=a[r]);if(u)var d=u(f)}for(t&&t(n);i<c.length;i++)o=c[i],f.o(e,o)&&e[o]&&e[o][0](),e[c[i]]=0;return f.O(d)},n=self.webpackChunkVChatSdk_Documentation=self.webpackChunkVChatSdk_Documentation||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();