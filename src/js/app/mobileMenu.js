document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu()
})

const initMobileMenu = () => {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-mobile-menu]');
  const menuClose = menu.querySelector('[data-mobile-close]');
  const menuLinks = menu.querySelectorAll('.nav__link')

  burger.addEventListener('click', () => {
    menu.classList.add('active')
  })

  menuClose.addEventListener('click', () => {
    menu.classList.remove('active')
  })

  menuLinks.forEach(el => {
    el.addEventListener('click', () => {
      menu.classList.remove('active')
    })
  })
}