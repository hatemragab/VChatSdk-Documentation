---
sidebar_position: 1
---


## Getting Started

Get started by **creating a new app or existing app in production**.

## System Requirement

1. login & register system in your app
2. ***VPS Server***  for host node js and mongo db you can buy it from any provider like digital ocean or hostinger
3. last version of Flutter sdk run `flutter upgrade`
4. if any conflict happen update all your package to last version first please open `issue on github`
## About V_CHAT_SDK

- this package which written in pure dart help you to add chat functionality
- unlimited text/image/video/record message and notifications
- to any existing or new flutter mobile  project  with  any **back-end** service you use
- **V_CHAT_SDK** is a easy way to integrate advanced real time message chat with 6 public api only 👌
- **V_CHAT_SDK** use **Node js** as backend service and **Firebase** for (push notifications only) message database is **Mongo DB**

## About Micro Service
1. less load on your main server since chat has high traffic.
2. They enable scale. Scalability is about more than the ability to handle more volume. It’s also about the effort involved. Microservices make it easier to identify scaling bottlenecks and then resolve those bottlenecks at a per-microservice level.
3. They are relatively easy to build and maintain. Their single-purpose design means they can be built and maintained by smaller teams. Each team can be cross-functional while also specialise in a subset of the microservices in a solution.

## How V_CHAT_SDK works
- **VCHAT_SDK** connected with your backend service  HOW!.
- VCHAT_SDK don't matter what is your backend code written because it will connect with it
  by public apis and run separately isolated but still connected by public apis
- When you register new user in your system you should call this public api

```dart
await VChatController.instance.register(VChatRegisterDto(
   name: name,
   password: password,
   email: email,
   userImage: null,
));
```
1. i just need basic information like unique id and password and your image to identify user in rooms view
2. email must be unique email is string you can pass phone number or any thing
3. this api will save the user also in your node js data base to use it later in chats
4. so when you want to start new chat just send me the peer email because its unique in vchat and your system so i can identify the user same as login
5. v chat use access token and save it local it save login sections
6. so by this way the two systems are in sync
7. there are also other public api like change name or password will discussed later
8. all chats and messages and files images videos saved on node js service

## Features

<table>
  <tr>
    <th>Name</th>
    <th>Android</th>
    <th>Ios</th>
  </tr>

  <tr>
    <td>online/offline</td>
    <td>👍</td>
    <td>👍</td>
  </tr>

  <tr>
    <td>textMessage/typing...</td>
    <td>👍</td>
    <td>👍</td>
  </tr>


  <tr>
    <td>voiceRecord/recording...</td>
    <td>👍</td>
    <td>👍</td>
  </tr>


  <tr>
    <td>saned video/file/images</td>
    <td>👍</td>
    <td>👍</td>
  </tr>

  <tr>
    <td>cache all media</td>
    <td>👍</td>
    <td>👍</td>
  </tr>

  <tr>
    <td>message notification</td>
    <td>👍</td>
    <td>👍</td>
  </tr>


  <tr>
    <td>mute/un mute notification</td>
    <td>👍</td>
    <td>👍</td>
  </tr>

 <tr>
    <td>block/un block users</td>
    <td>👍</td>
    <td>👍</td>
  </tr>

 <tr>
    <td>message status/read/unread</td>
    <td>👍</td>
    <td>👍</td>
  </tr>

 <tr>
    <td>smooth performance</td>
    <td>👍</td>
    <td>👍</td>
 </tr>
</table>