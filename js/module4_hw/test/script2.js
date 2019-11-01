/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  };
  
  console.log(MaxCat(tasksCompleted));

  function MaxCat(obj){
    let highest = 0;    
    for (let prop in obj) {
        if( obj.hasOwnProperty( prop ) ) {
            if(obj[prop] > highest ){ 
                newObj = {};
                highest = obj[prop];
                newObj[prop] = highest;
            }

        } 
    }
    return newObj;
};
  

