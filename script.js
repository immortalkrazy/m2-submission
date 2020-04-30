

function myKeyPress(e){

  /* TODO: retrieve the value from the text input */
  var mytextbox = document.getElementById("textinput").value;
  
  // for testing purposes
  console.log("Initial input: "+ mytextbox);
  // for testing purposes
  console.log("Length:  " + mytextbox.length);

  // TODO: Add a condition to ignore entries beyond 10 digits
  if (mytextbox.length > 11) {
    // alert message onto webpage
    alert("Limit: 10 Digits");
    // break function call
    return false;
  }


  var keyPressed;
  if(window.event) { // IE
    keyPressed = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera
    keyPressed = e.which;
  }

  var x = String.fromCharCode(keyPressed);
  /* change on part of 2nd commit */
  var y = formatPhoneNumber(mytextbox);


  console.log("Key Pressed = " + x);
  console.log("  Formatted = " + y);



  
  // TODO: set the value of the textbox with the formatted value
  if (mytextbox.length < 11) {

    document.getElementById('textinput').value = y;  
    
  }

}

function formatPhoneNumber(val){

  /* TODO:  Use replace function to ignore extra - character */
    var value = strReplace(val);
  
  if(value.length > 3 && value.length <= 6)
    value = value.slice(0,3) + "-" + value.slice(3);
  else if(value.length > 6)
    value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);
  // for testing purposes
  console.log("from Format: " + value);

  return value;
}
// Replace function
function strReplace(val) {

  var myStr = val;
  // for testing purposes
  console.log("from Replace before: " + myStr);
  
  var newStr = myStr.replace(/-/g, "");
  // for testing purposes
  console.log("from Replace after: " + newStr);

  return newStr;
}
