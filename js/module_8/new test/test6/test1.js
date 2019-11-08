/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

const createElement = (tag, ...className) => {

  const createElement = document.createElement(tag);
  
  createElement.classList.add(...className);
  
  return createElement;
  
  };  

const createMovieCard = () => {
  const createMovieDiv = createElement("div", "movie");  
  const image = createElement('img', 'movie__image');
  image.setAttribute('src', 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg');
  image.setAttribute('alt', 'movie image');
  const createMovieInnerDiv = createElement('div', 'movie__body');
  const createTitle = createElement('h2', 'movie__body');
  createTitle.textContent = 'The Godfather';
  const createP1 = createElement('p', 'movie__description');
  createP1.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';
  const createP2 = createElement('p', 'movie__date');
  createP2.textContent = 'Released: 1972-03-14';
  const createP3 = createElement('p', 'movie__rating');
  createP3.textContent = 'Rating: 8.6';
  createMovieInnerDiv.append(createTitle, createP1, createP2, createP3);
  createMovieDiv.append(image, createMovieInnerDiv)

  return document.body.append(createMovieDiv);  
};

createMovieCard();

