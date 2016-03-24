
"use strict"

var Chatty = (function() {
  var mboard = [];
// When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.
// If the user unchecks the box, the background color should change back to white with black text for messages.
  document.getElementById("dark").addEventListener("click", function() {
  document.getElementById("mContainer").classList.toggle("darkTheme2");   
  });
  
  return {
    loadMessages: function (showMessagesCallback) {
      var loader = new XMLHttpRequest();//constructor function
          loader.open("GET","messages.json");//tell loader where to go
          loader.send();//tell loader to execute

      loader.addEventListener("load", function () {
         let xhrCrap = (JSON.parse(this.responseText).mBoard);
         xhrCrap.forEach(function(oneXhr){
         mboard.push(oneXhr)  
         }) 
         showMessagesCallback(mboard)
          });
        },
        
      getmboard: function(){
        Chatty.loadMessages(Chatty.showMessages)
      }
    
    };
  })();
