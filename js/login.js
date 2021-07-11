document.addEventListener("DOMContentLoaded", function() {
console.log("loaded");
const form = document.getElementById("userform");
const email = document.getElementById("email");
const password = document.getElementById("password");
const db = firebase.firestore();

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("submit");

    if(email.value && password.value){
        
    }
    getUsers();
});

function getUsers(){
    db.collection("Users")
    .get()
    .then(function(querySnapshot){
        users.innerHtml= "";
        querySnapshot.forEach((doc) =>{
            console.log(`${doc.id} => ${JSON.stringify(doc.data().email)} , ${JSON.stringify(doc.data().password)} `)
            const li= document.createElement("li");
            if(doc.data().email = email.value && doc.data().password == password.value){
                
                   // li.innerHTML =` successfully logged in ${doc.data().email = email.value}`;
                    window.location.href = "feedback.html";
                    email.value="";
                    password.value="";
                    console.log("success");
            }
        
            else{
                console.log("failed");
                li.innerHtml = `Error in user id ${email.value} or password ${password.value}`;
            }
            users.appendChild(li);
        });
        
    });

}

});