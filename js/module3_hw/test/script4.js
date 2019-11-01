/*
* Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
* Гравировка одного слова стоит 10 кредитов.
*/
const totalPrice = (message, price) => {
    const words = message.split(' ');
    console.log(words);
    const wordsCount = words.length;
    console.log(wordsCount);
    const totalPrice = price * wordsCount;
    console.log(totalPrice);
    return totalPrice;
}

const message = "Proin sociis natoque et magnis parturient montes mus";
let price = 10;

totalPrice(message, price);