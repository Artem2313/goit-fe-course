// // На счету пользователя есть 23580 кредитов, значение хранится в переменной credits 
// (создай и присвой). Пользователь решает купить ремонтных дроидов, 
// которые стоят по 3000 кредитов за штуку. 
// Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// // При посещении страницы, используя prompt, необходимо спросить 
// количество дроидов которые пользователь хочет купить и сохранить в переменную.

// // Напиши скрипт который:

// // Если в prompt была нажата Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// // В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// // Проверяет сможет ли пользователь оплатить заказ:
// // если сумма к оплате превышает количество кредитов на счету, 
// выводи в консоль сообщение 'Недостаточно средств на счету!'.
// // в противном случае необходимо посчитать остаток кредитов на счету 
// и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

const CREDITS = 23580;
let pricePerDroid;
pricePerDroid = 3000;
let message;
message = prompt('How many do you want to buy?');
let numberOfDroids = Number(message);
let totalPrice = pricePerDroid * message;
let balanceLeft = CREDITS - totalPrice;

if (message === null) {
    alert('Отменено пользователем!');
} else if (totalPrice > CREDITS) {
    alert('Недостаточно средств на счету!');    
} else if (totalPrice < CREDITS) {
    alert('Вы купили ' + numberOfDroids + ' дроидов, на счету осталось ' + balanceLeft + ' кредитов.');
}


// Я хочу, чтобы он меня не впускал, если введенный параметр не число!

