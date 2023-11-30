export const formSendSuccess = () => {
  const formContainer = document.querySelector('.form');
  const formMessage = formContainer.querySelector('.form__message');
  const requiredInput = formContainer.querySelector('[data-required]');

  document.addEventListener('wpcf7submit', handleFormSubmitSuccess, false);
  document.addEventListener('submit', handleFormSubmitSuccess);

  function handleFormSubmitSuccess(evt) {
    evt.preventDefault();
    const inputIsValid = requiredInput.classList.contains('is-valid');

    if (!inputIsValid) {
      return;
    }

    formContainer.classList.add('form--success');
    formMessage.textContent = 'Your message has sent';

    setTimeout(() => {
      formContainer.classList.remove('form--success');
    }, 3000);
  }
};
