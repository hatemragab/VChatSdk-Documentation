# create single chat
this method will show alert dialog if there are no rooms and ask for first message
if there chat will open the change page direct
```dart
  try {
      await VChatController.instance
          .createSingleChat(ctx: context, peerEmail: widget.user.email);
    } on VChatSdkException catch (err) {
      //handle create chat exceptions
      rethrow;
    }
```
> `peerEmail` => is the unique identifier that you pass to vchat when register this function throw
> 
1. you can't start chat if you start chat your self
2. Exception if peer `Email Not in v chat Database`  ! so first you must (migrate all users only if already in production and need to add chat) new project all will be fine
3. No internet connection