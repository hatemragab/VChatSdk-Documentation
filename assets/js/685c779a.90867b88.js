"use strict";(self.webpackChunkVChatSdk_Documentation=self.webpackChunkVChatSdk_Documentation||[]).push([[815],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3757:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="migrate old users",c={unversionedId:"backend_installation/z_migrate_old_users",id:"backend_installation/z_migrate_old_users",isDocsHomePage:!1,title:"migrate old users",description:"### this tab only for users already there apps on production (then have build there system and want to add this chat system)",source:"@site/docs/backend_installation/z_migrate_old_users.md",sourceDirName:"backend_installation",slug:"/backend_installation/z_migrate_old_users",permalink:"/VChatSdk-Documentation/docs/backend_installation/z_migrate_old_users",editUrl:"https://github.com/hatemragab/v_chat_sdk/docs/backend_installation/z_migrate_old_users.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"production installation",permalink:"/VChatSdk-Documentation/docs/backend_installation/production_installation"},next:{title:"how_to_get_backend_code",permalink:"/VChatSdk-Documentation/docs/how_to_get_backend_code/how_to_get_backend_code"}},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrate-old-users"},"migrate old users"),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"this-tab-only-for-users-already-there-apps-on-production-then-have-build-there-system-and-want-to-add-this-chat-system"},"this tab only for users already there apps on production (then have build there system and want to add this chat system)")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"after you finish the server installation you want to migrate the old users to vchat system"),(0,o.kt)("li",{parentName:"ol"},"copy all users thumb images from your system to ",(0,o.kt)("inlineCode",{parentName:"li"},"v_chat_sdk_backend/public/profile")),(0,o.kt)("li",{parentName:"ol"},"in ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," enable ",(0,o.kt)("inlineCode",{parentName:"li"},"ENABLE_MIGRATE_OLD_USERS")," = ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ol"},"build script by your backend system and call this api ",(0,o.kt)("inlineCode",{parentName:"li"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"li"},"{{baseUrl}}user/migrateOldUsers")),(0,o.kt)("li",{parentName:"ol"},"Send data as json format ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON.stringify([{},{}])")," to the body")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "email": "xx@xx.com",\n    "name": "name 1",\n    "password": "name 1",\n    "imageThumb": "name 1"\n  },\n  {\n    "email": "1@22.com",\n    "name": "name 2",\n    "password": "name 2",\n    "imageThumb": null\n  }\n]\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"if user image == ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," pass it ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),"  v chat will use default user image for it")))}m.isMDXComponent=!0}}]);