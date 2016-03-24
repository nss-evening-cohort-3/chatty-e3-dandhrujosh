
"use strict"

var Chatty = (function() {
  var mboard = [];
  
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
  
  
  