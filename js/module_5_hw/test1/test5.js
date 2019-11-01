/*  
 * Напиши конструктор Storage(items), который будет создавать объекты для управления складом товаров
 * При вызове будет получать один аргумент - начальный массив товаров, и записываеть его в свойство items
 *
 * Добавь метод getItems, который возвращает массив текущих товаров
 * Добавь метод addItem(item), который получает новый товар и добавляет его к текущим
 * Добавь метод removeItem(item), который получет товар и, если он есть, удаляет его из текущих
*/

function Storage(items) {
    this.items = items;

    this.getItems = function() {
        return items;
    };

    this.addItem = function(item) {
        items.push(item);
    };

    this.removeItem = function(item) {
        
        return items.splice(items.indexOf(item), 1);
    }
    
}

const storage = new Storage([
    "Нанитоиды",
    "Пролонгер",
    "Железные жупи",
    "Антигравитатор"
  ]);
  
  const items = storage.getItems();
  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem("Дроид");
  console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem("Пролонгер");
  console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
  