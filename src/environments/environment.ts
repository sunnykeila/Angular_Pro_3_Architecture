// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
    firebase: {
        config: {
          apiKey: 'IzaSyBugqjnDdqWnZedguRibn9Zgc8CX1WQ_bA',
          authDomain: 'courseapp-830cb.firebaseapp.com',
          databaseURL: 'https://courseapp-830cb.firebaseio.com',
          projectId: 'courseapp-830cb',
          storageBucket: 'courseapp-830cb.appspot.com',
          messagingSenderId: '781241844711',
          appId: '1:781241844711:web:196847a9581e80468cf342'
        }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
