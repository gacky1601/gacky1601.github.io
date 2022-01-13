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
const dbscore = db.collection('Best').doc('Best');
var best = Number( document.getElementById("best").innerText);
var cs = Number(document.getElementById("score").innerText);
var currentuser;
console.log(cs);
function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../index.html";
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
  
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // 使用者已登入，可以取得資料
        var email = user.email;
        var uid = user.uid;
        console.log(email);
        document.getElementById("user").innerText = email;
        currentuser = email;
    } else {
        // 使用者未登入
    }
});


dbscore.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data()["score"]);
        document.getElementById("best").innerText = Number(doc.data()["score"]);
        best = Number(doc.data()["score"]);
        document.getElementById("leader").innerText = doc.data()["bestu"];

    } else {
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
//  score.get.doc("score").data();

function ng() {
    console.log(document.getElementById("score").innerText);
    best = Number( document.getElementById("best").innerText);
    cs = Number(document.getElementById("score").innerText);
    
    console.log(best, cs,currentuser);
    if (cs >= best) {
        dbscore.set({score:cs,bestu:currentuser});
    }
    dbscore.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data()["score"]);
            document.getElementById("best").innerText= Number(doc.data()["score"]);
        } else {
            
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}