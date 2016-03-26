"use strict"
//deletes each message gets called in second iife under eventlistener
//takes each message ID as an argument the index is used bc it matches up to the delete button 
//indexes and makes it so only one message is deleted at a time
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