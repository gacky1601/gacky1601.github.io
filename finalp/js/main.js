const firebaseConfig = {
    apiKey: "AIzaSyAnuSwUassylnbiKAOBEGweeToROgVi15A",
    authDomain: "aaaaa-e3c02.firebaseapp.com",
    projectId: "aaaaa-e3c02",
    storageBucket: "aaaaa-e3c02.appspot.com",
    messagingSenderId: "734315927781",
    appId: "1:734315927781:web:d6d290d2f5985267349c0c",
    measurementId: "G-KGEXDP87EH"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // 使用者已登入，可以取得資料
        var email = user.email;
        var uid = user.uid;
        console.log(email, uid);
        if(user.email=="admin@gmail.com")
            window.location.href = "./admin/index.html";
        else
            window.location.href = "./game/game.html";
    } else {
        // 使用者未登入
    }
});

function signInWithEmailPassword() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            
        })
        .catch((error) => {
            console.log(error);
            alert("Invailed Account or Password");
            window.location.reload();
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signUpWithEmailPassword() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            window.location.href = "index.html"
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
            alert("N");
            window.location.reload();
        });

}