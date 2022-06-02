const myFunction = () => {
  const data = document.getElementById("heading1").innerHTML
  if(data=="Log In"){
  document.getElementById("heading1").innerHTML = "Sign Up";
    document.getElementById("buttonText").innerHTML = "Log In";
    document.getElementById("forgot").style.visibility = "hidden";
  }
  else{
  document.getElementById("heading1").innerHTML = "Log In";
    document.getElementById("buttonText").innerHTML = "Sign Up";
    document.getElementById("forgot").style.visibility = "visible";
  }
}
