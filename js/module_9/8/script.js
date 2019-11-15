/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно 
      отображаться в абзаце с классом input-value 
*/

const inputs = document.querySelector('.input');
const results = document.querySelector('.input-value');


const focusInput = () => {
  console.log("Input is in focus!");
};

const resultInput = () => {
  results.textContent = 'Current input value: ' + inputs.value;
  console.log(inputs.value);
}

inputs.addEventListener('focus', focusInput);
inputs.addEventListener('input', resultInput);