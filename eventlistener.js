"use strict"

var Chatty = (function (originalChatty){
let input = document.getElementById('inputText');
let userMessage = [];
  
// console.log("erase", erase );
  
  originalChatty.keyEvent = function(addDivCallBack){
  input.addEventListener('keypress', function(event){
        if(event.keyCode === 13)
        {
          userMessage.push(input.value);  
        }
    addDivCallBack(userMessage);
      });
  }
   originalChatty.showMessages = function(mboard2){
      // console.log("mboard2", mboard2);
      let outputString = "";
      for (var i = 0; i < mboard2.length; i++) {
      var mList=document.getElementById("mContainer")
        let currentmboard = mboard2[i];
        outputString += `<div id="eachMessage${i}">${currentmboard.message}<p><button class="del">Delete</button></p></div>`
        // console.log("output", outputString );
        mList.innerHTML = outputString;
      }
     }
  return originalChatty;
  })(Chatty);
  Chatty.getmboard();

















  // addBtn:function(divOutput) {
  //     let erase = document.getElementsByClassName("delete");
  //     console.log("erase", erase );
  //   for(let i = 0; i < erase.length; i++)
     
  //    erase[i].addEventListener("click", function(){
  //       currentMessage.remove();
  //   })
  // }