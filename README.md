# TechFind

Written in Ionic, with native support for both iOS and Android.

## Installation instructions

### First option:

1. [Install Ionic Framework](https://ionicframework.com/)

2. Clone the project

   ```git clone https://github.com/matisluzi/techfind-ionic.git```

   ``` cd  techfind-ionic```

3. [Deploy project to device](https://ionicframework.com/docs/v3/intro/deploying/)

    ``` ionic capacitor run [android/ios] --prod --release ```

    _**NOTE**: Make sure to check the files
    ```ios/App/App/capacitor.config.json```
    and
    ```android/app/src/main/assets/capacitor.config.json```
    and delete the ```server``` value, or the app will not run on your device._

### Second option:

#### Download the latest release from the [Releases](https://github.com/matisluzi/techfind-ionic/releases) page.

*Note: I will try my best to publish a new release for every new version, but if you want to be absolutely sure that you have the latest changes, use the first way.*
- If you have an **iOS** device, use [AltStore](https://altstore.io/) to sideload the **IPA** file onto your device.
- If you have an **Android** device, simply open the **APK** file to install the app on your device.
