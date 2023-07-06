const form = document.querySelector('.form');
const emailInput = document.getElementById('email');
const errorSpan = document.querySelector('.alert span');
const submitButton = document.querySelector('button');
const modal = document.getElementById('modal');
const modalEmail = document.getElementById('modalEmail');
const closeModalButton = document.querySelector('#modal button');

// Evento de envio do formulário
submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '' || !emailRegex.test(email)) {
    errorSpan.textContent = 'Valid email required';
    emailInput.classList.add('error');
    emailInput.setAttribute('placeholder', 'Not filled');
  } else {
    errorSpan.textContent = '';
    emailInput.classList.remove('error');
    modalEmail.textContent = email;
    modal.style.display = 'block';
  }
});

// Evento de fechamento do modal
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Evento de carregamento da página
window.addEventListener('load', () => {
  emailInput.classList.remove('error');
});
