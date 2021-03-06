// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCv-LdjVVFwQu65umkkCO15LXJFV6eLATs",
    authDomain: "portfolio-hosting.firebaseapp.com",
    databaseURL: "https://portfolio-hosting.firebaseio.com",
    projectId: "portfolio-hosting",
    storageBucket: "portfolio-hosting.appspot.com",
    messagingSenderId: "435494154054"
  }
};
