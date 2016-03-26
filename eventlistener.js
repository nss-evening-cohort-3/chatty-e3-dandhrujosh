"use strict"

let usInput = document.getElementById("inputText")

// Event Listener for "Enter" keypress
let input = document.getElementById('inputText');
  input.addEventListener('keypress', function(event){
        if(event.keyCode === 13)
        {
          // Adds value from user input to private array and shows messages clears user input on "enter"
          Chatty.setmboard(input.value);
          Chatty.showMessages(Chatty.retMboard());
          showClearBtn();
          usInput.value = "";
  }
});
  //makes clear button visible when messages load
let showClearBtn = function(){
 clrButton.classList.add("visible")
}

var Chatty = (function (originalChatty){
  let erase = document.getElementsByClassName("del")

  //outputs each message to the DOM and adds delete button to each message
   originalChatty.showMessages = function(mboard2){
      let outputString = "";
      for (var i = 0; i < mboard2.length; i++) {
      var mList=document.getElementById("mContainer")
        let currentmboard = mboard2[i];
        outputString += `<div id="eachMessage${i}">${currentmboard.message}<p><button class="del">Delete</button></p></div>`
        
        mList.innerHTML = outputString;
        originalChatty.addDlt();
  }
}

//delete button functionality is built here with listener on click
    originalChatty.addDlt = function(){
  for(let i = 0; i < erase.length; i++){
    let dltBtn = erase[i]
    dltBtn.addEventListener("click", function(event){
      Chatty.deleteButton(i);
})
  }
}
  return originalChatty;
  })(Chatty);
  Chatty.getmboard();














