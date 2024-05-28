document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu()
})

const initMobileMenu = () => {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-mobile-menu]');
  const menuClose = menu.querySelector('[data-mobile-close]');
  const menuLinks = menu.querySelectorAll('.nav__link');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    menu.classList.add('active')
    body.style.overflow = 'hidden'
  })

  menuClose.addEventListener('click', () => {
    menu.classList.remove('active')
    body.style.overflow = 'visible'
  })

  menuLinks.forEach(el => {
    el.addEventListener('click', () => {
      menu.classList.remove('active')
      body.style.overflow = 'visible'
    })
  })
}