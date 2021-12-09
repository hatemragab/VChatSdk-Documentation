"use strict";(self.webpackChunkVChatSdk_Documentation=self.webpackChunkVChatSdk_Documentation||[]).push([[648],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},318:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},l="Ios permissions",c={unversionedId:"ios_installation/ios_permistion",id:"ios_installation/ios_permistion",isDocsHomePage:!1,title:"Ios permissions",description:"1. update and uncomment Podfile min version to 10.0 =>platform :ios, '10.0' example",source:"@site/docs/ios_installation/ios_permistion.md",sourceDirName:"ios_installation",slug:"/ios_installation/ios_permistion",permalink:"/VChatSdk-Documentation/docs/ios_installation/ios_permistion",editUrl:"https://github.com/hatemragab/v_chat_sdk/docs/ios_installation/ios_permistion.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"android/app/build.gradle",permalink:"/VChatSdk-Documentation/docs/android_installation/android-app-build.gradle"},next:{title:"install",permalink:"/VChatSdk-Documentation/docs/vchat_public_apis/a_install"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ios-permissions"},"Ios permissions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"update and uncomment Podfile min version to 10.0 =>platform :ios, '",(0,i.kt)("inlineCode",{parentName:"li"},"10.0'")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/ios/Podfile#L2"},"example")),(0,i.kt)("li",{parentName:"ol"},"add these permissions on the ",(0,i.kt)("inlineCode",{parentName:"li"},"ios/Runner/Info.plist"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<key>NSCameraUsageDescription</key>\n        <string>to allow user to take photo and video for his ads and upload it to server</string>\n        <key>NSMicrophoneUsageDescription</key>\n            <string>to allow user to take video with voice for more info and add it to his ads and upload it to server</string>\n            <key>NSPhotoLibraryAddUsageDescription</key>\n            <string>vchatsdk would like to save photos from the app chat to your gallery</string>\n            <key>NSPhotoLibraryUsageDescription</key>\n            <string>to allow user to select photo for his ads and upload it to server</string>\n            <key>UIBackgroundModes</key>\n            <array>\n                <string>fetch</string>\n                <string>remote-notification</string>\n            </array>\n            <key>NSAppTransportSecurity</key>\n            <dict>\n                <key>NSAllowsArbitraryLoads</key>\n                <true/>\n</dict>\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"replace all vchatsdk by your app name ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"li",href:"https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/ios/Runner/Info.plist#L45"},"Example"))))}d.isMDXComponent=!0}}]);