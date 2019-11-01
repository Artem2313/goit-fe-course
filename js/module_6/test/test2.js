/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/
class StringBuilder {
    constructor(string) {
        this._value = string;
    };
    get value() {
        return this._value;
      };
    
    append (value) {
        return this._value = this._value + value; 
    };
    prepend(value) {
        return this._value = value + this._value;
    };
    pad(value) {
        return this._value = value + this._value + value;
    };
    
      

}
const builder = new StringBuilder('.');


console.log(builder.value);
builder.append('^'); 

console.log(builder.append);
console.log(builder.value); // '.^'

builder.prepend('^'); 
console.log(builder.value); // '^.^'

builder.pad('='); 
console.log(builder.value); // '=^.^='
