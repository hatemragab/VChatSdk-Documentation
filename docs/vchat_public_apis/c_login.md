# login
```dart
try {
        await VChatController.instance
            .login(VChatLoginDto(email: email, password: password));
      } on VChatSdkException catch (err) {
        //handle v chat login exception
        rethrow;
      }
```
*Note this function throw these exceptions*
- User not in v chat data base Or wrong password
- No internet connection