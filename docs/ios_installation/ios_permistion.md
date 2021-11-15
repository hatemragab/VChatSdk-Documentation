---
sidebar_position: 1
---

# Ios permissions
1. update and uncomment Podfile min version to 10.0 =>platform :ios, '`10.0'` [example](https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/ios/Podfile#L2)
2. add these permissions on the `ios/Runner/Info.plist`

```
<key>NSCameraUsageDescription</key>
    	<string>to allow user to take photo and video for his ads and upload it to server</string>
    	<key>NSMicrophoneUsageDescription</key>
        	<string>to allow user to take video with voice for more info and add it to his ads and upload it to server</string>
        	<key>NSPhotoLibraryAddUsageDescription</key>
        	<string>vchatsdk would like to save photos from the app chat to your gallery</string>
        	<key>NSPhotoLibraryUsageDescription</key>
        	<string>to allow user to select photo for his ads and upload it to server</string>
        	<key>UIBackgroundModes</key>
        	<array>
        		<string>fetch</string>
        		<string>remote-notification</string>
        	</array>
        	<key>NSAppTransportSecurity</key>
            <dict>
                <key>NSAllowsArbitraryLoads</key>
                <true/>
</dict>
```
3. replace all vchatsdk by your app name <br />
[Example](https://github.com/hatemragab/v_chat_sdk/blob/a1010c4324361db726a0922710ec11012485fbc1/example/ios/Runner/Info.plist#L45)
   