#Register new user
First register the new user on your system (`your backend`) then register in `vChat`
```dart
  try{
        await VChatController.instance.register(
        VChatRegisterDto(
          name: name,
          userImage: imagePath == null ? null : File(imagePath!),
          email: email,
          password: password,
        ),
      );
  } on VChatSdkException catch(err){
     // handle vchat exception here
      rethrow;
  }
```
1. if your system allow users to register without image pass it `null`
2. it will use the default image you can change it in backend `public/profile/default_user_image.png`
3. name => user `full name`
4. Email => can be `phone number or any unique id` not validation on it

*Note this function throw these exceptions*
- User already in v chat database
- No internet connection
