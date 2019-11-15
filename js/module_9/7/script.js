/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

const inputs = document.querySelectorAll('input');

const check = evt => {
  evt.preventDefault();
  if (Number(evt.target.dataset.length) === evt.target.value.length) {
    evt.target.classList.add('valid'); 
    evt.target.classList.remove('invalid');   
  } else {
    evt.target.classList.add('invalid'); 
    evt.target.classList.remove('valid'); 
  } 
};

Array.from(inputs, el => el.addEventListener('blur', check));