/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

const open = document.querySelector('[data-action="open-modal"]');
const close = document.querySelector('[data-action="close-modal"]');
const modal = document.querySelector('.js-modal-backdrop');

console.log(modal);

const backdropModal = evt => {
  console.log(this);
  if (this !== event.target) return;
  closeModal();
};

const openModal = () => {
  modal.classList.toggle('modal-hidden');
};

const closeModal = () => {
  modal.classList.add('modal-hidden');
};


open.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', backdropModal);
