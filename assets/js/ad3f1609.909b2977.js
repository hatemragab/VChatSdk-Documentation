"use strict";(self.webpackChunkVChatSdk_Documentation=self.webpackChunkVChatSdk_Documentation||[]).push([[190],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7062:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="install",c={unversionedId:"vchat_public_apis/a_install",id:"vchat_public_apis/a_install",isDocsHomePage:!1,title:"install",description:"1. first you need to await v chat init in main.dart",source:"@site/docs/vchat_public_apis/a_install.md",sourceDirName:"vchat_public_apis",slug:"/vchat_public_apis/a_install",permalink:"/VChatSdk-Documentation/docs/vchat_public_apis/a_install",editUrl:"https://github.com/hatemragab/v_chat_sdk/docs/vchat_public_apis/a_install.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ios permissions",permalink:"/VChatSdk-Documentation/docs/ios_installation/ios_permistion"},next:{title:"Register new user",permalink:"/VChatSdk-Documentation/docs/vchat_public_apis/b_register"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install"},"install"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"first you need to await v chat init in main.dart")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'WidgetsFlutterBinding.ensureInitialized();\n  await VChatController.instance.init(\n    baseUrl: Uri.parse("http://170.178.195.150:81"),\n    appName: "test_v_chat",\n    isUseFirebase: true,\n    widgetsBuilder: VChatCustomWidgets(),\n    enableLogger: true,\n    maxMediaUploadSize: 50 * 1000 * 1000,\n    passwordHashKey: "passwordHashKey",\n  );\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"baseUrl")," => your node js server ip"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"appName")," => to save files in internal storage with this folder name internalStorage/documents/{appName}"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"widgetsBuilder")," => set your custom widget by make class extends ",(0,i.kt)("inlineCode",{parentName:"li"},"VChatWidgetBuilder")," and override the widgets you want to change "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"isUseFirebase")," => set to true if firebase supported in your country, and your project connected to firebase project"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"enableLogger")," => if true vchat will print the warning in console in release mode it will disable automatically"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"maxMediaUploadSize")," =>(optional) to set max files in chat"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"passwordHashKey")," => password hash Key it must be same in flutter and .env in backend code")))}d.isMDXComponent=!0}}]);