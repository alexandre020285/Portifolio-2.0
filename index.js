const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const btnFechar = document.querySelector('.btn-fechar');
const overlayMenu = document.getElementById('overlay-menu');
const links = document.querySelectorAll('.menu-mobile nav ul li a');

const closeMenu = () => {
  menuMobile.classList.remove('abrir-menu');
  setTimeout(() => {
    btnMenu.style.display = 'flex';
  }, 500);
};

btnMenu.addEventListener('click', () => {
  menuMobile.classList.add('abrir-menu');
  btnMenu.style.display = 'none';
});

btnFechar.addEventListener('click', closeMenu);
overlayMenu.addEventListener('click', closeMenu);
links.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('DOMContentLoaded', () => {
  const buttonsInLinks = document.querySelectorAll('a button');

  buttonsInLinks.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();

      const parentLink = button.closest('a');
      const targetBlank = parentLink.getAttribute('target') === '_blank';

      if (targetBlank) {
        window.open(parentLink.href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = parentLink.href;
      }
    });
  });
});
