var firebaseConfig = {
      apiKey: "AIzaSyDBtjRA0JHl5gZV1kzZks7f0adrT3_MYZI",
      authDomain: "kwiter-191eb.firebaseapp.com",
      databaseURL: "https://kwiter-191eb-default-rtdb.firebaseio.com",
      projectId: "kwiter-191eb",
      storageBucket: "kwiter-191eb.appspot.com",
      messagingSenderId: "741790760250",
      appId: "1:741790760250:web:d482e5f4e13fe834a42403",
      measurementId: "G-GQ2S2W2FYW"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Inicio de código
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+= row;
      //Final del código
      });});}
getData();

function addSalita(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Agregando Sala"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "Kwittersito_page.html";
}
function redirect(name){
      localStorage.setItem("room_name",name);
      window.location = "Kwittersito_page.html";
}
function logout(){
      localStorage.removeItem("usuario");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}