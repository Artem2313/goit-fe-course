/*
  Напиши скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/ 

const anyNumber = prompt(`Enter any number`);

let message;

if (!anyNumber) {
    message = 'Bye!'
} else if (isNaN(anyNumber)) {
    message = 'Необходимо было ввести целое число!'
} else {
    message = 'Спасибо!'
}

alert(message);