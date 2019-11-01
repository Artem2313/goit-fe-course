/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

class createMovieCard {
 
  createDiv(addList) {
    const list = document.querySelector(addList);
    const createUl = document.createElement("div");
    createUl.classList.add("movie");
    list.append(createUl);
  }
  
  createImg(addList) {
      const list = document.querySelector(addList);
      const createImg = document.createElement("img");
      createImg.classList.add("movie__image");
      createImg.setAttribute("src", "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg");
      createImg.setAttribute("alt", "movie image");
      list.append(createImg);
  }
  
  createTitle(addList) {
      const list = document.querySelector(addList);
      const createTitle = document.createElement("h2");
      createTitle.classList.add("movie__title");
      createTitle.textContent = "The Godfather";
      list.append(createTitle);
  }

  createText(addList) {
      const list = document.querySelector(addList);
      const createText = document.createElement("p");
      createText.classList.add("movie__description");
      createText.textContent = 'Spanning the years 1945 to 1955, a chronicle of' 
      'the fictional Italian-American Corleone crime family. When organized c'
      'rime family patriarch, Vito Corleone barely survives' 
      'an attempt on his life, his youngest son, Michael steps in to take care of the'
      'would-be killers, launching a campaign of bloody revenge.';
      list.append(createText);
  }

  createLink(addList) {
    const list = document.querySelector(addList);
    const createLink = document.createElement("p");
    createLink.classList.add("movie__date");
    createLink.textContent = "Released: 1972-03-14";    
    list.append(createLink);
}

  createLink(addList) {
    const list = document.querySelector(addList);
    const createLink = document.createElement("p");
    createLink.classList.add("movie__date");
    createLink.textContent = "Released: 1972-03-14";    
    list.append(createLink);
}
}


const newCard = new createMovieCard();
  newCard.createDiv("body");
  newCard.createImg("img");
  newCard.createTitle("h2");
  newCard.createText("p");
  newCard.createLink("p");