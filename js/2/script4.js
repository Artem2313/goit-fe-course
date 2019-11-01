/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
*/

let userInput;

let total = 0;

while (true) {
    userInput = prompt('Введите число больше 100');
  
    if (userInput === null) {
    console.log('Thanks')
    break; } else if(Number(userInput) <= 100) {
        console.log('Try again')
    } else {
        total = userInput
        console.log(total);
        break
    }     
  };

