function viewPassword() {
  var passwordInput = document.getElementById('password-field');
  var passwordInput2 = document.getElementById('password-field2');
  var passStatus = document.getElementById('pass-status');

  if (passwordInput.type == 'password' || passwordInput2.type == 'password') {
    passwordInput.type = 'text';
    passwordInput2.type = 'text';
    passStatus.className = 'fa fa-eye-slash';

  } else {
    passwordInput.type = 'password';
    passwordInput2.type = 'password';
    passStatus.className = 'fa fa-eye';
  }
}




function validate() {
  var validationField = document.getElementById('validation-txt');
  var password = document.getElementById('password-field');

  var content = password.value;
  var errors = [];
  console.log(content);
  if (content.length < 8) {
    errors.push("Your password must be at least 8 characters");
  }
  if (content.search(/[a-z]/i) < 0) {
    errors.push("Your password must contain at least one letter.");

  }
  if (content.search(/[0-9]/i) < 0) {
    errors.push("Your password must contain at least one digit.");

  }
  if (errors.length > 0) {
    validationField.innerHTML = errors.join('');

    return false;
  }
  validationField.innerHTML = errors.join('');
  return true;

}