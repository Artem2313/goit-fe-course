/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

const refs = {
  result: document.querySelector('.result'),
  btn: document.querySelector('.question-form'),
  inputs: document.querySelectorAll('.question-form input'),
};

const clickBtn = evt => {
  evt.preventDefault();  
  return refs.result.textContent = `Result: ${Array.from(refs.inputs).find(el => el.checked).value}`;
}

refs.btn.addEventListener('submit', clickBtn);