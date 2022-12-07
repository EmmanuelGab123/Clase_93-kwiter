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
      firebase.initializeAppp(firebaseConfig);

    user_name = localStorage.getItem("usuario");
    document.getElementById("room_name").value
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
         var name = message_data['name'];
         var message = message_data['message'];
         var like = message_data['like'];
         var name_with_tag = "<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
         var message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
         like_button = "<button class='btn btn-warning'id="+firebase_message_id+" value ="+like+"onclick='update_like(this.id)'>";
         span_width_tag = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
         row = name_with_tag + message_with_tag + like_button + span_width_tag;
         document.getElementById("output").innerHTML+=row;

//Termina código
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}