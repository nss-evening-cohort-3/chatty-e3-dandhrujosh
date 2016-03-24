
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
         // console.log("mboard", mboard);
         showMessagesCallback(mboard)
          });
        },
    
    getmboard: function(){
      Chatty.loadMessages(Chatty.showMessages)

  },
  
    showMessages: function(mboard2){
      // console.log("mboard2", mboard2);
      let outputString = "";
      for (var i = 0; i < mboard2.length; i++) {
      var mList=document.getElementById("mContainer")
        let currentmboard = mboard2[i];
        outputString += `<div id="eachMessage"`+i+`>${currentmboard.message}<p><button class="del">Delete</button></p></div>`
        // console.log("output", outputString );
        mList.innerHTML = outputString;
      }
     }
      
    }
  })();
  
  
  