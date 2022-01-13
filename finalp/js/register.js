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
const user = db.collection('finalproject');

async function signUpWithEmailPassword() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var docData = {
        "email": email,
        "password": password
    };

    await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user.id);
            db.collection("finalproject").doc(user.id).set(docData);
            window.location.href = "index.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
            alert("Error");
            window.location.reload();
        });

}