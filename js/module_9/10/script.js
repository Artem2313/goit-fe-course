/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/


const nav = document.querySelector('.js-menu');

console.log(nav);


const handleNavClick = evt => {
  evt.preventDefault();
  const currentActiveLink = nav.querySelector("a.active");
  console.log(currentActiveLink);
  if (currentActiveLink) {
    currentActiveLink.classList.remove("active");
  }
  evt.target.classList.add("active");
}

nav.addEventListener("click", handleNavClick);