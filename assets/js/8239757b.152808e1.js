"use strict";(self.webpackChunkVChatSdk_Documentation=self.webpackChunkVChatSdk_Documentation||[]).push([[838],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1294:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l=void 0,s={unversionedId:"how_to_get_backend_code/how_to_get_backend_code",id:"how_to_get_backend_code/how_to_get_backend_code",isDocsHomePage:!1,title:"how_to_get_backend_code",description:"- backend code written in typescript",source:"@site/docs/how_to_get_backend_code/how_to_get_backend_code.md",sourceDirName:"how_to_get_backend_code",slug:"/how_to_get_backend_code/how_to_get_backend_code",permalink:"/VChatSdk-Documentation/docs/how_to_get_backend_code/how_to_get_backend_code",editUrl:"https://github.com/hatemragab/v_chat_sdk/docs/how_to_get_backend_code/how_to_get_backend_code.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"migrate old users",permalink:"/VChatSdk-Documentation/docs/backend_installation/z_migrate_old_users"},next:{title:"Group chat",permalink:"/VChatSdk-Documentation/docs/group_chat/group_chat"}},u=[{value:"There are Free version of the package will be available Soon !",id:"there-are-free-version-of-the-package-will-be-available-soon-",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"backend code written in ",(0,a.kt)("inlineCode",{parentName:"li"},"typescript")),(0,a.kt)("li",{parentName:"ul"},"iam use this technology's"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"express")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mongodb")," for store data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"socket io")," for real time connection")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 dist                    # Compiled files (alternatively `dist`)\n\u251c\u2500\u2500 node_modules           \n\u251c\u2500\u2500 src                     # Source files (alternatively `lib` or `app`)\n\u251c\u2500\u2500 public                  # to save users images and files like voice etc...\n\u251c\u2500\u2500 .env                    # update project setting\n\u251c\u2500\u2500 firebase-adminsdk.json  #this the file you have to chage \n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n\nsrc \u2500\u2500\n    \u251c\u2500\u2500 enums\n    \u251c\u2500\u2500 middle_wares\n    \u251c\u2500\u2500 modules \u2500\u2500\n                \u251c\u2500\u2500 message \u2500\u2500\n                            \u251c\u2500\u2500 dto\n                            \u251c\u2500\u2500 message_controller.ts\n                            \u251c\u2500\u2500 message_schema.ts\n                            \u251c\u2500\u2500 message_service.ts\n                \u251c\u2500\u2500 room       etc..\n                \u251c\u2500\u2500 socket_api etc..\n                \u251c\u2500\u2500 user       etc..\n    \u251c\u2500\u2500 utils\n    \u251c\u2500\u2500 app.ts\n")),(0,a.kt)("h3",{id:"there-are-free-version-of-the-package-will-be-available-soon-"},"There are Free version of the package will be available Soon !"),(0,a.kt)("p",null,"You can get it from\n",(0,a.kt)("a",{parentName:"p",href:"https://codecanyon.net/item/flutter-chat-app-with-node-js-and-socket-io-mongo-db/26142700"},"Envato, codecanyou")," ",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"iam available for freelance work on this project integration or modifications")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you will get the full backend source code after purchased"),(0,a.kt)("li",{parentName:"ul"}),(0,a.kt)("li",{parentName:"ul"},"contact me on ",(0,a.kt)("inlineCode",{parentName:"li"},"hatemragap5@gmail.com")),(0,a.kt)("li",{parentName:"ul"},"Skype ",(0,a.kt)("inlineCode",{parentName:"li"},"live:.cid.607250433850e3a6"))))}d.isMDXComponent=!0}}]);