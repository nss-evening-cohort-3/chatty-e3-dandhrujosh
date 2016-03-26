"use strict"


let input = document.getElementById('inputText');
  input.addEventListener('keypress', function(event){
        if(event.keyCode === 13)
        {
          Chatty.setmboard(input.value);
          Chatty.showMessages(Chatty.retMboard());
          showClearBtn();
  }
});
  
let showClearBtn = function(){
 clrButton.classList.add("visible")
}

var Chatty = (function (originalChatty){
  let erase = document.getElementsByClassName("del")

  
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














