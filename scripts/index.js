// function validate(form){
//    form.preventDefault();

//     var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i  

//     var email = form.email.value;
//     var password = form.password.value;
//     var errors = [];

//      if (!ck_email.test(email)) {
//       errors[errors.length] = "You must enter a valid email address.";
//      }

//      if (password=='') {
//       errors[errors.length] = "You must enter the password ";
//      }

//      if (errors.length > 0) {        
//       reportErrors(errors);
//       return false;
//      }
//      return true;
// }

// function reportErrors(errors){
//      var msg = "Please Enter Valid Email Address\n";
//      for (var i = 0; i<errors.length; i++) {
//      var numError = i + 1;
//       msg += "\n" + numError + ". " + errors[i];
//     }
//      alert(msg);
// }

function validate()
{
  // if ((verifyNull() && verifyEmail()) = true)
return (verifyNull() && verifyEmail());
}


function verifyNull(){
        var isValid = true;
        if(!document.getElementById('username').value.trim().length){
            isValid = false;
            alert('Please enter username');
        }
        else if(!document.getElementById('password').value.trim().length){
        isValid = false;
            alert('Please enter password');
        }
      return isValid;
}

function verifyEmail(){
        var x = document.getElementById('email').value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            alert("Not a valid e-mail address");
        return false;
        }
       return true;
}