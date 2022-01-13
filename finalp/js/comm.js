// const firebaseConfig = {
//     apiKey: "AIzaSyAnuSwUassylnbiKAOBEGweeToROgVi15A",
//     authDomain: "aaaaa-e3c02.firebaseapp.com",
//     projectId: "aaaaa-e3c02",
//     storageBucket: "aaaaa-e3c02.appspot.com",
//     messagingSenderId: "734315927781",
//     appId: "1:734315927781:web:d6d290d2f5985267349c0c",
//     measurementId: "G-KGEXDP87EH"
// };
// const app = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
const dbboard = db.collection("comment").doc("comment");
var comments;
dbboard.get().then((doc) => {
    comments = doc.data()["comment"];
    document.getElementById("messageBox").value = comments;
})
    .catch((error) => {
        console.log("Error getting document:", error);
    });
function post() {
    var text = document.getElementById("myInput").value;
    dbboard.set({ "comment": comments + "," +iden+ text });
    dbboard.get().then((doc) => {
        comments = doc.data()["comment"];
        document.getElementById("messageBox").value = comments;
    })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
    document.getElementById("myInput").value = "";
}