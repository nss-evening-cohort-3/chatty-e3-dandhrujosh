let input = document.getElementById('inputText');
function keyEvent(){
  input.addEventListener('keypress', function(event){
        if(event.keyCode === 13)
        {
        // currBio.innerHTML = newBio;
        // console.log("newBio",newBio );
        input.value  = "8";  
       console.log("8", input.value );
        }
      })
  }

    // if(currcard.classList.contains('selected')){
    //   let newBio = event.currentTarget.value;
    //   currBio.innerHTML = newBio;
    //   console.log(event );

// When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.
// If the user unchecks the box, the background color should change back to white with black text for messages.
// document.getElementById("dark").addEventListener("click", function() {
//     document.getElementById("mContainer").classList.add("darkTheme");   
// });