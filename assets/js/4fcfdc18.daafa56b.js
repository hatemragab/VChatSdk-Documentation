"use strict";(self.webpackChunkVChatSdk_Documentation=self.webpackChunkVChatSdk_Documentation||[]).push([[208],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},847:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],d={sidebar_position:1},l="AndroidManifest.xml",s={unversionedId:"android_installation/AndroidManifest",id:"android_installation/AndroidManifest",isDocsHomePage:!1,title:"AndroidManifest.xml",description:"Add These Permissions files to android/app/src/main/AndroidManifest.xml",source:"@site/docs/android_installation/AndroidManifest.md",sourceDirName:"android_installation",slug:"/android_installation/AndroidManifest",permalink:"/VChatSdk-Documentation/docs/android_installation/AndroidManifest",editUrl:"https://github.com/hatemragab/v_chat_sdk/docs/android_installation/AndroidManifest.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/VChatSdk-Documentation/docs/intro"},next:{title:"android/build.gradle",permalink:"/VChatSdk-Documentation/docs/android_installation/android-build.gradle"}},p=[],c={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"androidmanifestxml"},"AndroidManifest.xml"),(0,i.kt)("p",null,"Add ",(0,i.kt)("strong",{parentName:"p"},"These Permissions")," files to ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/src/main/AndroidManifest.xml"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="android.permission.RECORD_AUDIO" />\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>\n<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>\n')),(0,i.kt)("p",null,"Add ",(0,i.kt)("strong",{parentName:"p"},"These Tags"),"  to ",(0,i.kt)("inlineCode",{parentName:"p"},"Application Tage"),(0,i.kt)("br",{parentName:"p"}),"\n","After ",(0,i.kt)("inlineCode",{parentName:"p"},'android:label="you all name"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'android:requestLegacyExternalStorage="true"\nandroid:usesCleartextTraffic="true" \x3c!-- only if you use http not https--\x3e\n')),(0,i.kt)("p",null,"Example\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/android/app/src/main/AndroidManifest.xml#L12"},"GitHub Example")),(0,i.kt)("p",null,"(optional recommended) add ",(0,i.kt)("inlineCode",{parentName:"p"},"fcm high notification priority")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'    <meta-data\n           android:name="com.google.firebase.messaging.default_notification_channel_id"\n           android:value="high_importance_channel" />\n')),(0,i.kt)("p",null,"Example\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/android/app/src/main/AndroidManifest.xml#L46"},"GitHub Example")))}m.isMDXComponent=!0}}]);