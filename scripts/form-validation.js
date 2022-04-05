const formInputs = document.querySelectorAll('.form-input > input'),
      password = document.getElementById('password'),
      passwordConfirm = document.getElementById('pw-confirm');

function setFormEvents() {
  document.querySelector('button[type="submit"]')
          .addEventListener('click', () => {
            addSubmitAttemptClass();
            checkPasswordMatch();
          })
 
  formInputs.forEach(input => input.addEventListener('input', removeSubmitAttemptClass));
  [password, passwordConfirm].forEach(input => input.addEventListener('input', togglePasswordMatchMessage));
}
setFormEvents();

function addSubmitAttemptClass() {
  formInputs.forEach(input => input.classList.add('submit-attempt'));
}

function removeSubmitAttemptClass(e) {
  e.target.classList.remove('submit-attempt');
}

function checkPasswordMatch() {
  const passwordError = document.querySelector('#password ~ .error-message'),
        match = password.value == passwordConfirm.value;

  [password, passwordConfirm].forEach(input => input.setCustomValidity(match ? '' : 'Passwords must match'));
  passwordError.textContent = match ? 'Password is required' : 'Passwords do not match';
}

function togglePasswordMatchMessage() {
  const fieldsEmpty = !password.value || !passwordConfirm.value;
  [password, passwordConfirm].forEach(input => {
    input.classList.remove('submit-attempt');
    fieldsEmpty ? input.classList.add('hide-validity') : input.classList.remove('hide-validity');
  })
}
