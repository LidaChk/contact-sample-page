import './sass/main.scss';

const PAGE = document.querySelector('.page');

function closePopUp() {
  document.querySelector('.popup').classList.toggle('popup-hidden');
}

function initPopUp() {
  PAGE.addEventListener('click', (event) => {
    if (
      !event.target.closest('.popup') ||
      event.target.closest('.popup__button')
    ) {
      closePopUp();
    }
  });
}

initPopUp();
