"use strict"

var Chatty = (function (originalChatty){
let erase = document.getElementsByClassName("del")
  
// console.log("erase", erase );
  
   originalChatty.showMessages = function(mboard2){
      // console.log("mboard2", mboard2);
      let outputString = "";
      for (var i = 0; i < mboard2.length; i++) {
      var mList=document.getElementById("mContainer")
        let currentmboard = mboard2[i];
        outputString += `<div id="eachMessage${i}">${currentmboard.message}<p><button class="del">Delete</button></p></div>`
        
        mList.innerHTML = outputString;

        originalChatty.addDlt();
      }

     }


    originalChatty.addDlt = function(){
  for(let i = 0; i < erase.length; i++){
    let dltBtn = erase[i]
    // console.log("theCard", dltBtn);
    dltBtn.addEventListener("click", function(event){
      console.log("event", event);
})
    // document.getElementById("eachMessage").addEventListener("click", Chatty.deleteButton);

  }

}

  return originalChatty;
  })(Chatty);
  Chatty.getmboard();


let input = document.getElementById('inputText');
  input.addEventListener('keypress', function(event){
        if(event.keyCode === 13)
        {
          Chatty.setmboard(input.value);
          Chatty.showMessages(Chatty.retMboard());
        }
    showMessagesCallBack(userMessage);
      });
  
















    // if(currcard.classList.contains('selected')){
    //   let newBio = event.currentTarget.value;
    //   currBio.innerHTML = newBio;
    //   console.log(event );

// When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.
// If the user unchecks the box, the background color should change back to white with black text for messages.
// document.getElementById("dark").addEventListener("click", function() {
//     document.getElementById("mContainer").classList.add("darkTheme");   
// });

  // addBtn:function(divOutput) {
  //     let erase = document.getElementsByClassName("delete");
  //     console.log("erase", erase );
  //   for(let i = 0; i < erase.length; i++)
     
  //    erase[i].addEventListener("click", function(){
  //       currentMessage.remove();
  //   })
  // }
