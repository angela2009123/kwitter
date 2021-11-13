// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCTEM04QJJPja_Oqi0fcvT0NTmqdiW2hB4",
      authDomain: "kwitter-4a55f.firebaseapp.com",
      projectId: "kwitter-4a55f",
      storageBucket: "kwitter-4a55f.appspot.com",
      messagingSenderId: "103310577815",
      appId: "1:103310577815:web:0ea46f99b792a84c5059d2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code 
      console.log("Room Name - " + Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name" 
   });

   localStorage.setItem("room_name" , room_name);

   window.location = "Kwitter-page.html";
}

function redirectToRoomName(name)
{
  console.log(name)
  localStorage.setItem("room_name", name)
     window.location = "kwitter_page..html";
}









