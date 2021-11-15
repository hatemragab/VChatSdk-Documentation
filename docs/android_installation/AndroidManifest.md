---
sidebar_position: 1
---

#  AndroidManifest.xml

Add **These Permissions** files to `android/app/src/main/AndroidManifest.xml`  

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
```

Add **These Tags**  to `Application Tage`   
After `android:label="you all name"`
```xml
android:requestLegacyExternalStorage="true"
android:usesCleartextTraffic="true" <!-- only if you use http not https-->
```

Example
[GitHub Example](https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/android/app/src/main/AndroidManifest.xml#L12)

(optional recommended) add `fcm high notification priority`
```xml
    <meta-data
           android:name="com.google.firebase.messaging.default_notification_channel_id"
           android:value="high_importance_channel" />
```
Example
[GitHub Example](https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/android/app/src/main/AndroidManifest.xml#L46)
