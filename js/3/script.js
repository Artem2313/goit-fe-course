// Пользователь может оформить доставку товара к себе в страну, 
// указав ее при посещении страницы в prompt. 
// Учти, что пользователь может ввести имя страны не только буквами нижнего регистра, 
// а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. 
// Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, 
// то выводи в консоль сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// китай - 100 кредитов
// южная америка - 250 кредитов
// австралия - 170 кредитов
// индия - 80 кредитов
// ямайка - 120 кредитов
// PS: используй switch


const country = prompt('Куда доставить товар?').toLowerCase();
let china = 100;
let southAmerica = 250;
let australia = 170;
let india = 80;
let jamaica = 120;


// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. 

// Учти, что пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Формат сообщения: 

// 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в консоль сообщение 

// 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// китай - 100 кредитов
// южная америка - 250 кредитов
// австралия - 170 кредитов
// индия - 80 кредитов
// ямайка - 120 кредитов
// PS: используй switch

const country = prompt('В какую страну доставлять?');

let china = 100;
let southAmerica = 250;
let australia = 170;
let india = 80;
let jamaica = 120;

if (!country) {
    alert('Спасибо пока!')
} else {
    let countryLowerCase = country.toLowerCase();
   
    switch (countryLowerCase) {    

        case 'китай':
        alert('Доставка в ' + countryLowerCase + ' будет стоить ' + china + ' кредитов.'); 
        break;
    
        case 'австралия':
        alert('Доставка в ' + countryLowerCase + ' будет стоить ' + australia + ' кредитов.'); 
        break;
    
        case 'южная америка':
        alert('Доставка в ' + countryLowerCase + ' будет стоить ' + southAmerica + ' кредитов.'); 
        break;
    
        case 'индия':
        alert('Доставка в ' + countryLowerCase + ' будет стоить ' + india + ' кредитов.'); 
        break;
    
        case 'ямайка':
        alert('Доставка в ' + countryLowerCase + ' будет стоить ' + jamaica + ' кредитов.'); 
        break;    
        
        default:
        alert('В вашей стране доставка не доступна!');
    }
}