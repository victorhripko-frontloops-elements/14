import './style.scss';

(() => {

  const form = document.querySelector('.form');
  const inputs = document.querySelectorAll('.form__input');

  form.addEventListener('submit', (evt) => {
    inputs.forEach((input) => {
      input.classList.toggle('is-invalid', !input.validity.valid);
    });

    evt.preventDefault();
  }, false);

})();
