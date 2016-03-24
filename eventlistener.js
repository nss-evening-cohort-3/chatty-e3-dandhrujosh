"use strict"

  
var eventCreator = (function (originalChatty){
let input = document.getElementById('inputText');
let userMessage = [];
  
// console.log("erase", erase );
  

  return {
  

  keyEvent: function(addDivCallBack){
  input.addEventListener('keypress', function(event){
        if(event.keyCode === 13)
        {
          userMessage.push(input.value);  
        }
    addDivCallBack(userMessage);
      });
  },

  addDiv: function(userMessage){
    for (let i = 0; i < userMessage.length; i++) {
      let currentMessage = userMessage[i];
      let currentId = "msgContainer" + i;
      console.log("current", currentId);
      let divOutput = `<div id = ${currentId} <section><p class="message">${currentMessage}</p></section><input type="button" class="delete" value="Delete"></div>`;
      mContainer.innerHTML += divOutput;
      }
      // addBtn(divOutput);
      }

  
  // addBtn:function(divOutput) {
  //     let erase = document.getElementsByClassName("delete");
  //     console.log("erase", erase );
  //   for(let i = 0; i < erase.length; i++)
     
  //    erase[i].addEventListener("click", function(){
  //       currentMessage.remove();
  //   })
  // }
}
  return originalChatty;
  })(Chatty);
  Chatty.getmboard();
  console.log("mboard", Chatty.getmboard);
  eventCreator.keyEvent(eventCreator.addDiv);

    