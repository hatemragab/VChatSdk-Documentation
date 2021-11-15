"use strict";(self.webpackChunkVChatSdk_Documentation=self.webpackChunkVChatSdk_Documentation||[]).push([[805],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,b=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9594:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},d="android/build.gradle",c={unversionedId:"android_installation/android-build.gradle",id:"android_installation/android-build.gradle",isDocsHomePage:!1,title:"android/build.gradle",description:"1. Open android/build.gradle folder",source:"@site/docs/android_installation/android-build.gradle.md",sourceDirName:"android_installation",slug:"/android_installation/android-build.gradle",permalink:"/VChatSdk-Documentation/docs/android_installation/android-build.gradle",editUrl:"https://github.com/hatemragab/v_chat_sdk/docs/android_installation/android-build.gradle.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AndroidManifest.xml",permalink:"/VChatSdk-Documentation/docs/android_installation/AndroidManifest"},next:{title:"android/app/build.gradle",permalink:"/VChatSdk-Documentation/docs/android_installation/android-app-build.gradle"}},p=[],u={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"androidbuildgradle"},"android/build.gradle"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"android/build.gradle")," folder"),(0,o.kt)("li",{parentName:"ol"},"Update ext.",(0,o.kt)("inlineCode",{parentName:"li"},"kotlin_version")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"1.4.32")," this required by ",(0,o.kt)("a",{parentName:"li",href:"https://pub.dev/packages/audioplayers"},"audioplayers")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/android/build.gradle#L2"},"Example")),(0,o.kt)("li",{parentName:"ol"},"This required by ",(0,o.kt)("inlineCode",{parentName:"li"},"video_player"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"     under \n        repositories { \n        add this \n        maven {\n            url 'https://google.bintray.com/exoplayer/'\n        }\n        maven { url 'https://plugins.gradle.org/m2/' }\n    }\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/android/build.gradle#L3"},"Example")," ",(0,o.kt)("br",null),"\n4. Under dependencies update to or latest versions of"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"classpath 'com.android.tools.build:gradle:4.1.3'\nclasspath 'com.google.gms:google-services:4.3.5'\nclasspath \"org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version\"\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/android/build.gradle#L12"},"Example")))}s.isMDXComponent=!0}}]);