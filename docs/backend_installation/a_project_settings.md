# project Settings
- > #### this steps for production and local installation
- after download, you will have `source.zip` unzip this file you will get `v_chat_sdk_backend` folder
- which contain typescript files  
##  `.env` file
- `IS_USER_ONE_SIGNAL_AND_NO_FIREBASE` i have made this chose because firebase forbidden from some country i recommend to user `firebase` 
-  if = `true` then you must create account on one signal and provide `ONESIGNAL_AUTHORIZATION` value to start use intestinal instead of firebase if `true` then the app will user firebase to push `notifications`
- `ACCESS_TOKEN_SECRETE` update this value with strong password
- `MONGODB_URL`   mongo db url if you will run it locally then don't change it
- `ENABLE_MIGRATE_OLD_USERS` if your app already in production then update this value to true to enable migrate api to works
- `ENABLE_MIGRATE_OLD_USERS` after finish with migrate old users you must update this value too false to disable the add users api

## update default users image 
- open `v_chat_sdk_backend/public/profile/default_user_image.png`
- update `default_user_image.png` make sure this image smaller than `100KB` and with the same name as `default_user_image.png`

## Firebase Admin sdk
- if you set `IS_USER_ONE_SIGNAL_AND_NO_FIREBASE` = `false` then you must provide your `firebase-adminsdk.json` file
- first open firebase console create or open existing firebase account
- and navigate to `project setting` then `service accounts` then generate new private key select `Node.js`
- after download `firebase-adminsdk.json` update this file by your firebase generated file but rename it to `firebase-adminsdk.json`

## One Single setup
- if you set `IS_USER_ONE_SIGNAL_AND_NO_FIREBASE` = `true`  then you must provide your `ONESIGNAL_AUTHORIZATION`
- create or open new account on onesignal app 
- add new android and ios apps add your firebase sender id and token
- then open dashboard/settings/Keys&IDs copy Rest API Key 
- paste it in `ONESIGNAL_AUTHORIZATION` dont delete `Basic` just update `"Basic M2Ey--------------------BlNWY5"` M2Ey--------------------BlNWY5 and leave the space between the `Basic` and your rest api key

## other
- don't update any package on `package.json` let me update and test then push to you
