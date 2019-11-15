/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

const images = document.querySelector('.images');

const imgSrc = evt => {
  alert(evt.target.src);
}

images.addEventListener('click', imgSrc);

