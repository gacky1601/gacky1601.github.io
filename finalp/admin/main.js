// Add your Firebase Project Config here...
const firebaseConfig = {
  apiKey: "AIzaSyAnuSwUassylnbiKAOBEGweeToROgVi15A",
  authDomain: "aaaaa-e3c02.firebaseapp.com",
  projectId: "aaaaa-e3c02",
  storageBucket: "aaaaa-e3c02.appspot.com",
  messagingSenderId: "734315927781",
  appId: "1:734315927781:web:d6d290d2f5985267349c0c",
  measurementId: "${config.measurementId}"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const user = db.collection('finalproject');
const tbody = document.querySelector('tbody');



(async () => {
  const userDocList = await user.get();
  userDocList.forEach((element) => {
    // console.log(element.id);

    const { password, email } = element.data();
    const tableRow = `
      <tr>
          <th>。</th>
          <td id="${element.id}em">${email}</td>
          <td id="${element.id}pw">${password}</td>
          `;
    if (email != "admin@gmail.com")
      var x = `<td ><button id="${element.id}" onclick="del(this);">delete</button></td></tr>`;
    else
      var x =`</tr>`

    tbody.innerHTML = tbody.innerHTML + tableRow+x;
  });
})();



async function del(butt) {
  var id = butt.id;
  console.log(id);
  var emaila = document.getElementById(id+"em").innerText;
  var passworda = document.getElementById(id+"pw").innerText;
  console.log(emaila,passworda);
  const userDocList = await user.get();
  userDocList.forEach((element) => {
    const { password, email } = element.data();
    if (email == emaila) {
      user.doc(element.id).delete();
      console.log(element.id);
    }
  });

  
  firebase.auth().signInWithEmailAndPassword(emaila, passworda);
  const curruser = firebase.auth().currentUser;
  curruser.delete().then(() => {
    firebase.auth().signInWithEmailAndPassword("admin@gmail.com", "123456");
    alert("success");
    window.location.reload();
  }).catch((error) => {
    alert("error");
  });
}

function logout() {
  firebase.auth().signOut().then(() => {
      window.location.href = "../index.html";
      // Sign-out successful.
  }).catch((error) => {
      // An error happened.
  });
}