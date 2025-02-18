const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const btnFechar = document.querySelector('.btn-fechar');
const overlayMenu = document.getElementById('overlay-menu');
const links = document.querySelectorAll('.menu-mobile nav ul li a');

btnMenu.addEventListener('click', () => {
  menuMobile.classList.add('abrir-menu');
  btnMenu.style.display = 'none';
});

btnFechar.addEventListener('click', () => {
  menuMobile.classList.remove('abrir-menu');
  setTimeout(() => {
    btnMenu.style.display = 'flex';
  }, 500);
});

overlayMenu.addEventListener('click', () => {
  menuMobile.classList.remove('abrir-menu');
  setTimeout(() => {
    btnMenu.style.display = 'flex';
  }, 500);
});

links.forEach(link => {
  link.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
    setTimeout(() => {
      btnMenu.style.display = 'flex';
    }, 500);
  });
});
