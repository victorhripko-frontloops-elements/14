import './style.scss';

(() => {

  const form = document.querySelector('.form');
  const inputs = form.querySelectorAll('.form__input');
  const password = form.querySelector('[name="password"]');
  const confirmPassword = form.querySelector('[name="confirm_password"]');

  const validate = () => {
    const passwordVal = password.value;
    const confirmPasswordVal = confirmPassword.value;
    const confirmPasswordValid = passwordVal && confirmPasswordVal !== passwordVal;
    const isInvalidFields = [...inputs].find(el => el.validity.valid === false) || confirmPasswordValid ? false : true;

    inputs.forEach((input) => {
      input.classList.toggle('is-invalid', !input.checkValidity());

      // el.validity.valueMissing === true => `value is required`
      // el.validity.patternMismatch === false => `invalid value`
    });

    confirmPassword.classList.toggle('is-invalid', confirmPasswordValid);

    return isInvalidFields;
  };

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = validate();

    if ( isValid ) {
      alert('Success! 😎')
    };
  });

})();
