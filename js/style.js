document.addEventListener("DOMContentLoaded", function() {
    console.log("Loaded!");

const db= firebase.firestore();
    const newform = document.getElementById("newform");
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const username = document.getElementById("username");
    const number = document.getElementById("number");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const cpassword = document.getElementById("cpassword");


    newform.addEventListener("submit", function(event){

        event.preventDefault();
       
        if(firstname.value && lastname.value && username.value && number.value && email.value && password.value && cpassword.value){
            console.log(firstname.value, lastname.value, username.value, number.value, email.value, password.value, cpassword.value);
        }
        addUser(firstname.value, lastname.value, username.value, number.value, email.value, password.value, cpassword.value);
      
       
    });
    
     // Get the message
var message = document.getElementById("myMessage");

// Get the button that opens the message
var newsubmit = document.getElementById("newsubmit");

// Get the <span> element that closes the message
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the message 

  newsubmit.onclick = function() {
    message.style.display = "block";
  }
  



// When the user clicks on <span> (x), close the message
span.onclick = function() {
  message.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == message) {
      modal.style.display = "none";
    }
  }

  function addUser(first, last, user, num, emailid, pass, cpass){

    db.collection('Users').add({
        firstname:first,
        lastname:last,
        username:user,
        number:num,
        email:emailid,
        password:pass,
        cpassword:cpass,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
  }).then(function(docRef){
      console.log("Document written with ID:", docRef.id);
      firstname.value="";
      lastname.value="";
      username.value="";
      number.value="";
      email.value="";
      password.value="";
      cpassword.value="";
  }).catch(function(error){
      console.error("Error added to Document:", error);
  })
  }
  

});