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
        var email = user.email;
        var uid = user.uid;
        console.log(email, uid);
        
    } else {
        window.location.href = "../index.html";
    }
});



function logout() {
    firebase.auth().signOut().then(() => {
        // window.location.href = "/index.html";
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}