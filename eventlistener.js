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