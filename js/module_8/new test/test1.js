/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

const categoriesFirstLi = Array.from(
    document.querySelectorAll(".categories > li")
  );
console.log("categoriesFirstLi: ", categoriesFirstLi)  
//   const categoriesUl = Array.from(
//     document.querySelectorAll(".categories  li ul")
//   );
// console.log("categoriesUl: ", categoriesUl)    
  const categoriesList = [];
  
  categoriesFirstLi.forEach(element => {
    categoriesList.push(
      `Категория: ${element.firstChild.textContent.trim()} / Количество: ${
        element.firstElementChild.children.length
      }`
    );
  });
  
  console.log(categoriesList);