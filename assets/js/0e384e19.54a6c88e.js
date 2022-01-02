"use strict";(self.webpackChunkVChatSdk_Documentation=self.webpackChunkVChatSdk_Documentation||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?i.createElement(k,r(r({ref:t},d),{},{components:n})):i.createElement(k,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var i=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],o={sidebar_position:1},s=void 0,u={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"intro",description:"Getting Started",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/VChatSdk-Documentation/docs/intro",editUrl:"https://github.com/hatemragab/v_chat_sdk/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"AndroidManifest.xml",permalink:"/VChatSdk-Documentation/docs/android_installation/AndroidManifest"}},d=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"System Requirement",id:"system-requirement",children:[{value:"This is Not Full app",id:"this-is-not-full-app",children:[],level:4},{value:"Directed to flutter developers who want to implement complete chat system in their apps without write chat code",id:"directed-to-flutter-developers-who-want-to-implement-complete-chat-system-in-their-apps-without-write-chat-code",children:[],level:4}],level:2},{value:"Why V_CHAT_SDK",id:"why-v_chat_sdk",children:[],level:2},{value:"About Micro Service",id:"about-micro-service",children:[],level:2},{value:"How V_CHAT_SDK works",id:"how-v_chat_sdk-works",children:[],level:2},{value:"Features",id:"features",children:[],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"Get started by ",(0,l.kt)("strong",{parentName:"p"},"creating a new app or existing app in production"),"."),(0,l.kt)("h2",{id:"system-requirement"},"System Requirement"),(0,l.kt)("h4",{id:"this-is-not-full-app"},"This is Not Full app"),(0,l.kt)("h4",{id:"directed-to-flutter-developers-who-want-to-implement-complete-chat-system-in-their-apps-without-write-chat-code"},"Directed to flutter developers who want to implement complete chat system in their apps without write chat code"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"login")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"register")," system in your app  in ",(0,l.kt)("inlineCode",{parentName:"li"},"v0.5.0")," and above not required you can register by phone or (\nfacebook,apple,etc... just send the email) just send it in email no password needed"),(0,l.kt)("li",{parentName:"ol"},"guest login  also supported, but you can't start chat until you register")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"I use ",(0,l.kt)("inlineCode",{parentName:"li"},"passwordKeyHash")," to hash the email and sent it to server so ",(0,l.kt)("inlineCode",{parentName:"li"},"passwordKeyHash")," so it must be same key in\nserver ",(0,l.kt)("inlineCode",{parentName:"li"},".env")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"vChatController.init()"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"VPS Server"),"  for host node js and mongo db you can buy it from any provider like ",(0,l.kt)("inlineCode",{parentName:"li"},"digital ocean")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"hostinger")),(0,l.kt)("li",{parentName:"ol"},"last version of Flutter sdk run ",(0,l.kt)("inlineCode",{parentName:"li"},"flutter upgrade")),(0,l.kt)("li",{parentName:"ol"},"if any conflict happen update all your package to last version first or if not fixed please open ",(0,l.kt)("inlineCode",{parentName:"li"},"issue on github"))),(0,l.kt)("h2",{id:"why-v_chat_sdk"},"Why V_CHAT_SDK"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"it has written in pure ",(0,l.kt)("inlineCode",{parentName:"li"},"_dart_")," help you to add chat functionality"),(0,l.kt)("li",{parentName:"ul"},"easy to integrate and support ",(0,l.kt)("inlineCode",{parentName:"li"},"multi-language")," as you want also support widget ",(0,l.kt)("inlineCode",{parentName:"li"},"customization")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Unlimited")," text/image/video/record message and notifications/group chat"),(0,l.kt)("li",{parentName:"ul"},"can be used with any existing or new flutter mobile project with any  ",(0,l.kt)("inlineCode",{parentName:"li"},"back-end"),"  service you use"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"V_CHAT_SDK"),"  is an easy way to integrate advanced real time message chat with 6 public api only \ud83d\udc4c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"V_CHAT_SDK"),"  use  ",(0,l.kt)("inlineCode",{parentName:"li"},"Node js"),"  as backend service and  ",(0,l.kt)("inlineCode",{parentName:"li"},"Firebase"),"  for (push notifications only) message database is  ",(0,l.kt)("inlineCode",{parentName:"li"},"Mongo DB ")),(0,l.kt)("li",{parentName:"ul"},"Try the ",(0,l.kt)("inlineCode",{parentName:"li"},"APK")," last version ",(0,l.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1BpEY2wrzzPqbgT-la0-xHc6VbwFVJ5rz/view"},"APK")),(0,l.kt)("li",{parentName:"ul"},"Try the ",(0,l.kt)("inlineCode",{parentName:"li"},"IOS")," last version ",(0,l.kt)("a",{parentName:"li",href:"https://testflight.apple.com/join/Bb2LLcKx"},"testflight"))),(0,l.kt)("h2",{id:"about-micro-service"},"About Micro Service"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"less load on your main server since chat has high traffic."),(0,l.kt)("li",{parentName:"ol"},"They enable scale. Scalability is about more than the ability to handle more volume. It\u2019s also about the effort\ninvolved. Microservices make it easier to identify scaling bottlenecks and then resolve those bottlenecks at a\nper-microservice level."),(0,l.kt)("li",{parentName:"ol"},"They are relatively easy to build and maintain. Their single-purpose design means they can be built and maintained by\nsmaller teams. Each team can be cross-functional while also specialise in a subset of the microservices in a\nsolution."),(0,l.kt)("li",{parentName:"ol"},"you can add it as subdomain like ",(0,l.kt)("inlineCode",{parentName:"li"},"chat.example.com")),(0,l.kt)("li",{parentName:"ol"},"there are public flutter package on ",(0,l.kt)("inlineCode",{parentName:"li"},"pub.dev")," you have to use it as for\nflutter ",(0,l.kt)("a",{parentName:"li",href:"https://pub.dev/packages/v_chat_sdk"},"v_chat_sdk"))),(0,l.kt)("h2",{id:"how-v_chat_sdk-works"},"How V_CHAT_SDK works"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"VCHAT_SDK"),"  connected with your backend service HOW!."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"VCHAT_SDK")," don't matter what is your backend code written because it will connect with it by public apis and run ",(0,l.kt)("inlineCode",{parentName:"li"},"separately")," isolated but still connected by public apis"),(0,l.kt)("li",{parentName:"ul"},"When you register new user in your system you should call this public api")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"final u = await VChatController.instance.register(\n  dto: VChatRegisterDto(\n    name: name,\n    userImage: imagePath == null ? null : File(imagePath!),\n    email: email,\n  ),\n  context: context,\n);\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"I just need basic information like unique id and password and your image to identify user in rooms view"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"email")," must be unique email is string you can pass phone number or anything"),(0,l.kt)("li",{parentName:"ol"},"this api will save the user also in your node js database to use it later in chats"),(0,l.kt)("li",{parentName:"ol"},"so when you want to start new chat just send me the peer email because it's unique in ",(0,l.kt)("inlineCode",{parentName:"li"},"vchat")," and your system so I can\nidentify the user same as login"),(0,l.kt)("li",{parentName:"ol"},"v chat use access token and save it local it save login sections"),(0,l.kt)("li",{parentName:"ol"},"so by this way the two systems are in sync"),(0,l.kt)("li",{parentName:"ol"},"there are other public api like change name,chatImage will discuss in ",(0,l.kt)("inlineCode",{parentName:"li"},"vchat_public_api")),(0,l.kt)("li",{parentName:"ol"},"all chats and messages and files images videos saved on node js service on public folder"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"vchat")," use auth jwt token and rate limit for improve security"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"vchat")," automatic create thumbnail from use image to improve performance "),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"vchat")," also create thumbnail from images which send in chat to improve the memory")),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Android"),(0,l.kt)("th",null,"Ios")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"online/offline"),(0,l.kt)("td",null,"\ud83d\udc4d"),(0,l.kt)("td",null,"\ud83d\udc4d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"textMessage/typing..."),(0,l.kt)("td",null,"\ud83d\udc4d"),(0,l.kt)("td",null,"\ud83d\udc4d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"voiceRecord/recording..."),(0,l.kt)("td",null,"\ud83d\udc4d"),(0,l.kt)("td",null,"\ud83d\udc4d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"saned video/file/images"),(0,l.kt)("td",null,"\ud83d\udc4d"),(0,l.kt)("td",null,"\ud83d\udc4d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"cache all media"),(0,l.kt)("td",null,"\ud83d\udc4d"),(0,l.kt)("td",null,"\ud83d\udc4d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"message notification"),(0,l.kt)("td",null,"\ud83d\udc4d"),(0,l.kt)("td",null,"\ud83d\udc4d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"mute/un mute notification"),(0,l.kt)("td",null,"\ud83d\udc4d"),(0,l.kt)("td",null,"\ud83d\udc4d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"block/un block users"),(0,l.kt)("td",null,"\ud83d\udc4d"),(0,l.kt)("td",null,"\ud83d\udc4d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"message status/read/unread/and unread count"),(0,l.kt)("td",null,"\ud83d\udc4d"),(0,l.kt)("td",null,"\ud83d\udc4d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Group Chat with administration system"),(0,l.kt)("td",null,"\ud83d\udc4d"),(0,l.kt)("td",null,"\ud83d\udc4d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"smooth performance"),(0,l.kt)("td",null,"\ud83d\udc4d"),(0,l.kt)("td",null,"\ud83d\udc4d"))))}p.isMDXComponent=!0}}]);