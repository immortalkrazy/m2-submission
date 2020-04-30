

function myKeyPress(e){

  /* TODO: retrieve the value from the text input */  
  // var mytextbox = stopFunction();
  var mytextbox = document.getElementById("textinput").value;
  
  // for testing purposes
  console.log("Initial input: "+ mytextbox);
  // for testing purposes
  console.log("Length:  " + mytextbox.length);

  if (mytextbox.length > 11) {
    // alert message onto webpage
    alert("Limit: 10 Digits");
    // close
    return false;

    // var t1 = mytextbox.value;
    // t1.value = t1.value.substring(0,10);
  }

  // var mytextbox = e.target.value;

  /* TODO: set the value of the textbox with the formatted value */
  // mytextbox = y;
 
  // mytextbox = formatPhoneNumber(mytextbox);
  // var changed = formatPhoneNumber(mytextbox);
  // console.log(`Changed: ${changed}`);

  //mytextbox = changed;
  //console.log("Sent:  " + mytextbox);

  var keyPressed;
  if(window.event) { // IE
    keyPressed = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera
    keyPressed = e.which;
  }

  var x = String.fromCharCode(keyPressed);
  var y = formatPhoneNumber(mytextbox);

  console.log("Key Pressed = " + x);
  console.log("  Formatted = " + y);

  // return changed = formatPhoneNumber(mytextbox);
  /* TODO: Add a condition to ignore entries beyond 10 digits */
  
  // updateChange();
  // console.log("what");
  if (mytextbox.length < 11) {

    document.getElementById('textinput').value = y;  
    
  }

  // document.getElementById('textinput').value = y;

  // if (mytextbox.length < 10) {
  //   mytextbox.innerHTML = y.value;
  //   console.log("New Value sent:  " + y);
  //   console.log("Length:  " + mytextbox.length);
  // }

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

// function stopFunction() {
//   var mytextbox = document.getElementById("textinput").maxLength = "10";
//   return mytextbox;
// }


// function updateChange () {
//   var i = 0;
//   console.log("start: " + i);
//   while (i < 5) {
//     i+=1;
//     if (i < 3) {
//       console.log("in while loop 1: ");
//       i+=1;
//       break;
//     }
//     else {
//       console.log("in while loop 2: ");
//       i+=1;
//       break;
//     }   
//     // document.getElementById("texinput").innerHTML = "hi";
//   }
// }

