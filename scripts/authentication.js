// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy3qtqr0rc5XZEctjkvjsVS3c1BOBelVY",
    authDomain: "familienstausholm-38a23.firebaseapp.com",
    projectId: "familienstausholm-38a23",
    storageBucket: "familienstausholm-38a23.appspot.com",
    messagingSenderId: "1050820800033",
    appId: "1:1050820800033:web:a91dadf654f1ee59f3fd60"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      if(window.location.pathname == "/" || window.location.pathname == "/index.html") {
        console.log("Signed in!");
      } else {
        window.location.href = "./index.html";
      }
    }
    else {
        //User is signed out
        if(window.location.pathname == "/login.html") {
            console.log("Not signed in!");
        } else {
            window.location.href = "./login.html";
        }
    }
});

function signIn(){
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword("familienstausholm@mail.com", password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.href = "./index.html"
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

function signOut(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = "./login.html";
    }).catch((error) => {
        // An error happened.
    });
}