
"use strict"

var Chatty = (function() {
  var mboard = [];
  
  return {
    loadMessages: function (showMessagesCallback) {
      var loader = new XMLHttpRequest();//constructor function
          loader.open("GET","messages.json");//tell loader where to go
          loader.send();//tell loader to execute

      loader.addEventListener("load", function () {
        mboard = JSON.parse(this.responseText).mBoard;
         showMessagesCallback(mboard);
          });
        },
    showMessages: function(mboard){
      let outputString = "";
      for (var i = 0; i < mboard.length; i++) {
      var mList=document.getElementById("mContainer")
        let currentmboard = mboard[i];
        outputString += `<div class="eachMessage">${currentmboard.message}<p><button class='del'>Delete</button></p></div>`
        mList.innerHTML += outputString;

      }
     }
    }
      
  })();
      
  Chatty.loadMessages(Chatty.showMessages);