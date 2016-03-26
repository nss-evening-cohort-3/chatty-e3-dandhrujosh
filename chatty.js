
"use strict"

var Chatty = (function() {
  let mboard = [];
  let container = document.getElementById("mContainer")
  let clrButton = document.getElementById("clrButton")

// When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.
// If the user unchecks the box, the background color should change back to white with black text for messages.
  document.getElementById("dark").addEventListener("click", function() {
    container.classList.toggle("darkTheme2"); 
}); 

// Event Listener to toggle largetext css class
  document.getElementById("large").addEventListener("click", function() {
    container.classList.toggle("largetext"); 
});

 // Event Listener to clear container and hide clear messages button
  document.getElementById("clrButton").addEventListener("click", function(){
    container.innerHTML = "";
    clrButton.classList.add("hidden");
});

  return {
    // Function to load JSON --> XHR callback
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
// Shows Messages
    getmboard: function(){
        Chatty.loadMessages(Chatty.showMessages)
      },
// Returns mboard to make available later
    retMboard: function(){
        return mboard
      },
// Takes user input message pushes to our private array
    setmboard: function(message){
        mboard.push({"message":message})

      }
    };
  })();
