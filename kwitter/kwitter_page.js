var firebaseConfig = {
      apiKey: "AIzaSyC2uFhpr1_PGEXEGQ6wQ-ZHlUROhdh51Pw",
      authDomain: "kwitter-1b799.firebaseapp.com",
      databaseURL: "https://kwitter-1b799-default-rtdb.firebaseio.com",
      projectId: "kwitter-1b799",
      storageBucket: "kwitter-1b799.appspot.com",
      messagingSenderId: "468856973929",
      appId: "1:468856973929:web:5d2af3c9ae905a98fad0f8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
 {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
 }