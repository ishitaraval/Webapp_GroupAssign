document.addEventListener("DOMContentLoaded", function() {
    console.log("Loaded!");
  
    const db= firebase.firestore();
    const feedbackForm = document.getElementById("feedbackform");
    const textarea = document.getElementById("textarea");
    const users = document.getElementById("users");


    feedbackForm.addEventListener("submit", function(event){
        event.preventDefault();

        if(textarea.value){
            addFeedback(textarea.value);
            textarea.value="";
        }
        
    });


    
    function addFeedback(text){

       db.collection('FeedbackUsers')
       .add({
          textarea: text,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function(docRef){
          console.log("Document written with ID:", docRef.id);
     })
     .catch(function(error){
         console.error("Error added to Document:", error);
      });
      }
      
      function updateFeedback(id,feedback){
        db.collection("FeedbackUsers")
        .doc(id)
        .update({
            feedback,
        })
        .then(function(){
            console.log("Document successfully updated!");
        })
        .catch(function(error){
            console.log("Error updating document",error);
        });
    }

  function deleteFeedback(id){
      db.collection("FeedbackUsers")
      .doc(id)
      .delete()
      .then(function(){
          console.log("Document successfully deleted!");
      })
      .catch(function(error){
          console.log("Error Deleting document",error);
      });
  }

  function init()
  {
      db.collection("FeedbackUsers")
      .orderBy("timestamp","asc")
      .onSnapshot(function (querySnapshot) {
           users.innerHTML = "";
           querySnapshot.forEach((doc)=>{
              const li= document.createElement("li");
              li.innerHTML =`${doc.data().textarea}`;
             
              li.style = `background:#e9e9e9;
              padding: 10px 0 10px 26px;
              margin:10px 0;
              border-radius: 40px;
              width: fit-content;`

              const span = document.createElement("span");
              span.innerHTML="&#10005;";
              span.style = `margin: 0 26px 0 10px;
              color: red; 
              cursor:pointer; `;


              span.onclick = () => deleteFeedback(doc.id);
              
              li.appendChild(span);
              users.appendChild(li);
            
          });
      });
  }
  init();
});
