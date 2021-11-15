# set user online

- make sure to use this function only if user already `authorized in vchat system`and your system
- other will throw "You must log in or register to v chat first delete the app and login again !" `wrap it with if condition`
```dart
if(isAuth){
   // make sure to auth
   VChatController.instance.bindChatControllers(); 
}
```
> Call this method in home page because it will make the user online and start notifications service