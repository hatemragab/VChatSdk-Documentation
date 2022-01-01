"use strict";(self.webpackChunkVChatSdk_Documentation=self.webpackChunkVChatSdk_Documentation||[]).push([[470],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6082:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="create single chat",s={unversionedId:"vchat_public_apis/d_create_single_chat",id:"vchat_public_apis/d_create_single_chat",isDocsHomePage:!1,title:"create single chat",description:"you can create alert dialog to get first message from user like this",source:"@site/docs/vchat_public_apis/d_create_single_chat.md",sourceDirName:"vchat_public_apis",slug:"/vchat_public_apis/d_create_single_chat",permalink:"/VChatSdk-Documentation/docs/vchat_public_apis/d_create_single_chat",editUrl:"https://github.com/hatemragab/v_chat_sdk/docs/vchat_public_apis/d_create_single_chat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"login",permalink:"/VChatSdk-Documentation/docs/vchat_public_apis/c_login"},next:{title:"set user online",permalink:"/VChatSdk-Documentation/docs/vchat_public_apis/set_user_online"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-single-chat"},"create single chat"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    try {\n     //create your desgin \n      final res =\n          await CustomAlert.chatAlert(context: context, peerEmail: email);\n      if (res != null) {\n        await VChatController.instance\n            .createSingleChat(peerEmail: email, message: res, context: context);\n        CustomAlert.done(\n          msg: "Message has been sent successfully",\n        );\n      }\n    } on VChatSdkException catch (err) {\n      CustomAlert.showError(context: context, err: err.toString());\n      rethrow;\n    }\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"you can create alert dialog to get first message from user like this"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'   showDialog(\n    context: context,\n    builder: (context) {\n      return AlertDialog(\n        title: Text("new message"),\n        content: TextField(\n          onChanged: (value) {\n            txt = value;\n          },\n        ),\n        actions: [\n          TextButton(\n              onPressed: ()async {\n                await VChatController.instance\n                    .createSingleChat(\n                        peerEmail: "peerEmail",\n                        message: txt,\n                        context: context);\n              },\n              child: Text("send"))\n        ],\n      );\n    },\n  );\n'))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"peerEmail")," => is the unique identifier that you pass to vchat when register this function throw"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message"),' => first message is required and must not be empty ("") or null'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context")," => if you pass the context the chat page will open directly after message send other message will send only")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"you can't start chat if you start chat your self"),(0,o.kt)("li",{parentName:"ol"},"Exception if peer ",(0,o.kt)("inlineCode",{parentName:"li"},"Email Not in v chat Database"),"  ! so first you must (migrate all users only if already in\nproduction and need to add chat) new project all will be fine"),(0,o.kt)("li",{parentName:"ol"},"No internet connection"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hatemragab/v_chat_sdk/blob/4cb8882724da3b24917ff4c40ae6637f0db3f6da/example/lib/controllers/home_controller.dart#L51"},"Example"))))}m.isMDXComponent=!0}}]);