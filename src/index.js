import { Notify } from 'notiflix/build/notiflix-notify-aio';

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  const formEl = document.querySelector(".form");
  console.log(formEl);


  formEl.addEventListener("submit", onFormSubmit);

  function onFormSubmit (event) {
    event.preventDefault();
    let inputText = event.currentTarget.elements.input.value.toLowerCase();
    console.log(inputText);
    switch (inputText) {
        case "chimbo": 
        Notify.success('That is correct, congratulations');

        break;

        case "no": 
        Notify.success('nono');
        break;

        default: 
        Notify.failure('Incorrect, try again');
    }

  }