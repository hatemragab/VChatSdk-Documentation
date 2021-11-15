---
sidebar_position: 3
---

# android/app/build.gradle
1. set  compileSdkVersion 31 [Example](https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/android/app/build.gradle#L33)
2. under <br />
      defaultConfig { <br />
      add or update
```groovy
        minSdkVersion 19
        targetSdkVersion 31
        multiDexEnabled true 
```
[Example](https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/android/app/build.gradle#L48)