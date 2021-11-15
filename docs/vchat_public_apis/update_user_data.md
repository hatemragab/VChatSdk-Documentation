# update user data
## change username
when user change his name then you need to update his name in v chat also to change his name in rooms
```dart
   try {
      await VChatController.instance.updateUserName(name: "new name");
    } on VChatSdkException catch (err) {
      //handle Errors
    }
```
## change user password
```dart
  try {
      await VChatController.instance.updateUserPassword(newPassword: "new",oldPassword: "old");
    } on VChatSdkException catch (err) {
      //handle Errors
    }
```
## change user image
```dart
 try {
      await VChatController.instance.updateUserImage( imagePath: file.path!);
    } on VChatSdkException catch (err) {
      //handle Errors
    }
```
## stop/enable notifications
```dart
  //stop
  await VChatController.instance.stopAllNotification();
  // enable
  await VChatController.instance.enableAllNotification();
```
## logOut
```dart
await VChatController.instance.logOut();
```