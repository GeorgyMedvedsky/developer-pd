const cardsData = [
  {
    coverUrl: './images/bg-1.jpg',
    name: 'Project Tile goes here',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  },
  {
    coverUrl: './images/bg-2.jpg',
    name: 'Project Tile goes here',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  },
  {
    coverUrl: './images/bg-3.jpg',
    name: 'Project Tile goes here',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  },
  {
    coverUrl: './images/bg-4.jpg',
    name: 'Project Tile goes here',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  },
  {
    coverUrl: './images/bg-5.jpg',
    name: 'Project Tile goes here',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  },
  {
    coverUrl: './images/bg-6.jpg',
    name: 'Project Tile goes here',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  },
];

const cardTemplate = document.querySelector('#card-template').content;
const projectsList = document.querySelector('.projects-list');
const burgerIcon = document.querySelector(`.burger`);
const menu = document.querySelector(`.menu`);
const menuLinks = Array.from(menu.querySelectorAll('.menu__link'));
const page = document.querySelector('.page');

cardsData.forEach((item) => {
  const cardItem = cardTemplate
    .querySelector('.projects-list__item')
    .cloneNode(true);
  const card = cardItem.querySelector('.card');
  const title = card.querySelector('.card__title');
  const description = card.querySelector('.card__description');

  title.textContent = item.name;
  description.textContent = item.description;
  card.style.background = `url(${item.coverUrl}) center / cover no-repeat`;

  projectsList.appendChild(cardItem);
});

const openMenu = () => {
  menu.classList.add('menu_opened');
  burgerIcon.classList.add('active');
  page.classList.add('page_locked');
};

const closeMenu = () => {
  menu.classList.remove('menu_opened');
  burgerIcon.classList.remove('active');
  page.classList.remove('page_locked');
};

burgerIcon.addEventListener('click', function () {
  if (!burgerIcon.classList.contains('active')) openMenu();
  else closeMenu();
});

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
