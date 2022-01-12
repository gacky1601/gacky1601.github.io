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

firebase.auth().onAuthStateChanged((user) => {
    console.log(1);
    if (user) {
        console.log(user);
        // window.location.href = "schedule.html";
    }
});

function signInWithEmailPassword() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = "schedule.html";
        })
        .catch((error) => {
            console.log(error);
            alert("Invailed Account or Password");
            window.location.reload();
        });
}

function logout(){
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}