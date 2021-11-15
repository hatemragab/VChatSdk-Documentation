#Support new language Or override .
to support new language create new class and extend VChatLookupString
and override all
```dart
class ArEg extends VChatLookupString {
  @override
  String areYouSure() => "هل انت نتاكد؟";

  @override
  String cancel() => "الغاء";

  @override
  String chatHasBeenClosed() => "انتهت المحادثه !";
```
then in main.dart after vchat.init define the new language
call this line for every language
```dart
  VChatController.instance.setLocaleMessages(languageCode: "ar", countryCode: "EG", lookupMessages: ArEg());
```
- by default english Us and arabic Eg supported you can override it with the same way
- when you change app language vchat will automatically change, but you must put the countryCode