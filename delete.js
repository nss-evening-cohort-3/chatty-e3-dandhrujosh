"use strict"
var Chatty = (function(originalChatty) {
  originalChatty.deleteButton = function(i){
      let selected = document.getElementById(`eachMessage${[i]}`)
      let arr = Chatty.retMboard();
      console.log("arr", arr);
      selected.remove(); 
      arr.splice(i , 1);
      console.log("arr", arr );

}
  return originalChatty;   
  })(Chatty);