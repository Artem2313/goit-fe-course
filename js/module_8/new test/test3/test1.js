/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/
console.log('hello');
const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const list = document.querySelector('.list');
console.log(list);

elements.forEach(items => {
  let item = document.createElement('li');
  item.textContent = items;
  list.append(item);
})
