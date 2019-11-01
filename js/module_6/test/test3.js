/*
 * Напиши класс Car с указанными свойствами и методами
*/

class Car {
    constructor({ speed = 0, maxSpeed = 0, running = false, distance = 0, price = 0 }) {
      /*
        Добавь свойства:
          - speed - для отслеживания текущей скорости, изначально 0.
          - maxSpeed - для хранения максимальной скорости 
          - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
          - distance - содержит общий киллометраж, изначально с 0
      */
     this.speed = speed;
     this.maxSpeed = maxSpeed;
     this.running = running;
     this.distance = distance;
     this._value = price;
    }

    get value() {
        return this._value;
      }
    
      set price(value) {
        this._value = value;
      }
  
    turnOn() {
      // Добавь код для того чтобы завести автомобиль
      // Просто записывает в свойство running значание true
      this.running = true;
    }
  
    turnOff() {
      // Добавь код для того чтобы заглушить автомобиль
      // Просто записывает в свойство running значание false
      this.running = false;
    }
  
    accelerate(speed) {
      // Записывает в поле speed полученное значение, при условии что
      // оно не больше чем значение свойства maxSpeed
      if (speed < this.maxSpeed) {
        return this.speed += speed;
      }
    }
  
    decelerate(speed) {
      // Записывает в поле speed полученное значение, при условии что
      // оно не больше чем значение свойства maxSpeed и не меньше нуля
      if (speed < this.maxSpeed || spd !== 0) {
        return this.speed -= speed;
      }
    }
  
    drive(hours) {
      // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
      // но только в том случае если машина заведена!
      if(this.running === true) {
        return this.distance = hours * this.speed;
      }
    }

    static getSpecs(obj){
        console.log(obj);
    }
  }
  
//   const car = new Car({ maxSpeed: 100 });

//   console.log(car);
  

  /*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/

// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car.value); // 2000

car.price = 4000;
console.log(car.value); // 4000