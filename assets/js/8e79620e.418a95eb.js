"use strict";(self.webpackChunkVChatSdk_Documentation=self.webpackChunkVChatSdk_Documentation||[]).push([[706],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,f=d["".concat(c,".").concat(g)]||d[g]||s[g]||o;return n?r.createElement(f,u(u({ref:t},p),{},{components:n})):r.createElement(f,u({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8319:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],i={},c="Support new language Or override .",l={unversionedId:"vchat_public_apis/support_new_language",id:"vchat_public_apis/support_new_language",isDocsHomePage:!1,title:"Support new language Or override .",description:"to support new language create new class and extend VChatLookupString",source:"@site/docs/vchat_public_apis/support_new_language.md",sourceDirName:"vchat_public_apis",slug:"/vchat_public_apis/support_new_language",permalink:"/VChatSdk-Documentation/docs/vchat_public_apis/support_new_language",editUrl:"https://github.com/hatemragab/v_chat_sdk/docs/vchat_public_apis/support_new_language.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set user online",permalink:"/VChatSdk-Documentation/docs/vchat_public_apis/set_user_online"},next:{title:"update user data",permalink:"/VChatSdk-Documentation/docs/vchat_public_apis/update_user_data"}},p=[],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"#Support new language Or override .\nto support new language create new class and extend VChatLookupString\nand override all"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'class ArEg extends VChatLookupString {\n  @override\n  String areYouSure() => "\u0647\u0644 \u0627\u0646\u062a \u0646\u062a\u0627\u0643\u062f\u061f";\n\n  @override\n  String cancel() => "\u0627\u0644\u063a\u0627\u0621";\n\n  @override\n  String chatHasBeenClosed() => "\u0627\u0646\u062a\u0647\u062a \u0627\u0644\u0645\u062d\u0627\u062f\u062b\u0647 !";\n')),(0,o.kt)("p",null,"then in main.dart after vchat.init define the new language\ncall this line for every language"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'  VChatController.instance.setLocaleMessages(languageCode: "ar", countryCode: "EG", lookupMessages: ArEg());\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"by default english Us and arabic Eg supported you can override it with the same way"),(0,o.kt)("li",{parentName:"ul"},"when you change app language vchat will automatically change, but you must put the countryCode")))}d.isMDXComponent=!0}}]);