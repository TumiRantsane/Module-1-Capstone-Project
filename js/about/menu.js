export const hambIcon = document.querySelector('.hamb');
export const menu = document.querySelector('.menu');
export const menuLinks = [...document.querySelectorAll('header nav ul li a')];

export const openCloseMenu = () => {
  menu.classList.toggle('active');
  hambIcon.classList.toggle('fa-bars');
  hambIcon.classList.toggle('fa-times');
};

function show() {
  menu.style.display = 'flex';
  menu.style.top = '0';
}

function close() {
  menu.style.top = '-100vh';
  menu.style.display = 'none';
}

menu.addEventListener('click', show);
menu.addEventListener('click', close);