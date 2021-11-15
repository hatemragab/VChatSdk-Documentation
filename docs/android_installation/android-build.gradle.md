---
sidebar_position: 2
---

# android/build.gradle

1. Open `android/build.gradle` folder
2. Update ext.`kotlin_version` to `1.4.32` this required by [audioplayers](https://pub.dev/packages/audioplayers) [Example](https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/android/build.gradle#L2)
3. This required by `video_player`
```groovy
     under 
        repositories { 
        add this 
        maven {
            url 'https://google.bintray.com/exoplayer/'
        }
        maven { url 'https://plugins.gradle.org/m2/' }
    }
```
[Example](https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/android/build.gradle#L3) <br />
4. Under dependencies update to or latest versions of
```groovy
classpath 'com.android.tools.build:gradle:4.1.3'
classpath 'com.google.gms:google-services:4.3.5'
classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
```
[Example](https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/android/build.gradle#L12)   