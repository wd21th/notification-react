import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";


// importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


const firebaseConfig = {
 /*  apiKey: "AIzaSyDqJnmP_nQ-1Ptq8wG9Lcito8fXXPsczWo",
  authDomain: "test-39581.firebaseapp.com",
  databaseURL: "https://test-39581-default-rtdb.firebaseio.com",
  projectId: "test-39581",
  storageBucket: "test-39581.appspot.com",
  messagingSenderId: "601666597162",
  appId: "1:601666597162:web:ddb49264e932f8dea56e53",
  measurementId: "G-XRFN0HS89S" */

  apiKey: "AIzaSyDqJnmP_nQ-1Ptq8wG9Lcito8fXXPsczWo",
  authDomain: "test-39581.firebaseapp.com",
  databaseURL: "https://test-39581-default-rtdb.firebaseio.com",
  projectId: "test-39581",
  storageBucket: "test-39581.appspot.com",
  messagingSenderId: "601666597162",
  appId: "1:601666597162:web:ddb49264e932f8dea56e53",
  measurementId: "G-XRFN0HS89S"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          // "BCKNSY0FAgDlbgevvqBGsXdadLiRCrFR1wbWXqFYgQJOV3jX8nTSHAQzXcB91c6GGlmFwCfCcxCUK_UxDL7nTLA",
          "BMhYJj_wNtk2mXCWbBSUkJHsz_JPN5iF2C5qZn04pR0U6fLFUllzgz9eY52zKoDmlBNErkuQhc_4S-Mjsewu8qA",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
          // save to clipboard
          alert("Token: " + currentToken);
          navigator.clipboard.writeText(currentToken);

        } else {
          console.log("Can not get token");
          alert("Can not get token")
        }
      });
    } else {
      console.log("Do not have permission!");
      alert("Can not get token")
    }
  });
}

requestPermission();
