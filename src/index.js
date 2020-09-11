import './style.scss';

(() => {

  const form = document.querySelector('.form');
  const inputs = form.querySelectorAll('.form__input');
  const password = form.querySelector('[name="password"]');
  const confirmPassword = form.querySelector('[name="confirm_password"]');


  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const passwordVal = password.value;
    const confirmPasswordVal = confirmPassword.value;

    inputs.forEach((input) => {
      input.classList.toggle('is-invalid', !input.validity.valid);
    });

    confirmPassword.classList.toggle('is-invalid', passwordVal && confirmPasswordVal !== passwordVal);
  }, false);

})();
