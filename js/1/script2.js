/*
  Напиши скрипт который: 
  
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Была нажата отмена!'.
  - Если что-то другое — показывать alert с сообщением 'Неверный пароль, активирована система защиты!'
*/ 

const correctPassword = 'jqueryismyjam';

let message;

const isPassword = prompt('Enter your password');

if(!isPassword) {
    message = 'Отменено пользователем!';
} else if(isPassword === correctPassword){
    message = 'Доступ в секретный бункер разрешен!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);