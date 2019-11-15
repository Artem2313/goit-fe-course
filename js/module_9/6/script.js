/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

const list = document.querySelector('.list');

const del = evt => {
  console.log(evt.target.nodeName);
  if (evt.target.nodeName === 'BUTTON') {
    evt.target.parentNode.remove();
  }
  
}

list.addEventListener('click', del);
