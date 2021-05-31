// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  custom: 'This is PRF dev',
  serverUrl: 'http://localhost:4200/server',
  //serverUrl: 'http://localhost:3000/',
  firebase: {
    apiKey: "AIzaSyCHzDpPuh1KN9Ea-0lA-5ZYdaHLFfGyS1U",
    authDomain: "publicproject-42754.firebaseapp.com",
    projectId: "publicproject-42754",
    storageBucket: "publicproject-42754.appspot.com",
    messagingSenderId: "800346328290",
    appId: "1:800346328290:web:f833793c445db1cd3162bb"
  },
  collection : "StoreItems"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
