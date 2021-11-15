# install
1. first you need to await v chat init in main.dart
```dart
final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();
```
```dart
WidgetsFlutterBinding.ensureInitialized();
await VChatController.instance.init(
baseUrl: Uri.parse("http://10.0.2.2:3000"),
appName: "test_v_chat",
isUseFirebase: true,
lightTheme: vChatLightTheme,
darkTheme: vChatDarkTheme,
enableLogger: true,
navigatorKey: navigatorKey,
maxMediaUploadSize: 50 * 1000 * 1000, //~ 50 mb
);
```

1. `baseUrl` => your node js server ip
2. `appName` => to save files in internal storage with this folder name internalStorage/documents/{appName}
3. `isUseFirebase` => set to true if firebase supported in your country, and your project connected to firebase project
4. `lightTheme` =>(optional) overrideTheCustomTheme for light
5. `darkTheme` =>(optional) overrideTheCustomTheme for dark
6. `enableLogger` => if true vchat will print the warning in console in release mode it will disable automatically
7. `navigatorKey` => add this key also in MaterialApp
8. `maxMediaUploadSize` =>(optional) to set max files in chat

> 1. Then install [bot_toast](https://pub.dev/packages/bot_toast) in your project
> 2. this package used in app notifications
and set up the package And add the `navigatorKey` to your MaterialApp
```dart
MaterialApp(
      debugShowCheckedModeBanner: false,
      navigatorKey: navigatorKey,
      builder: BotToastInit(),
      navigatorObservers: [BotToastNavigatorObserver()],
      home: SplashScreen(),
);
```
[Example](https://github.com/hatemragab/v_chat_sdk/blob/master/example/lib/main.dart)
