
const firebaseConfig = {
      apiKey: "AIzaSyDBtjRA0JHl5gZV1kzZks7f0adrT3_MYZI",
      authDomain: "kwiter-191eb.firebaseapp.com",
      databaseURL: "https://kwiter-191eb-default-rtdb.firebaseio.com",
      projectId: "kwiter-191eb",
      storageBucket: "kwiter-191eb.appspot.com",
      messagingSenderId: "741790760250",
      appId: "1:741790760250:web:d482e5f4e13fe834a42403",
      measurementId: "G-GQ2S2W2FYW"
};
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio de código
      
      //Final del código
      });});}
getData();

function addSalita(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Agregando Sala"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitersito_pagina.html";
}