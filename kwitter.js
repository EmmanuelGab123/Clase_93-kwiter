function addUser(){
    var usuario = document.getElementById("imputsito").value;
    localStorage.setItem("usuario",usuario);
    window.location = "Kwittersito_room.html";
}