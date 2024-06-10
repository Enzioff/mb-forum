document.addEventListener("DOMContentLoaded", () => {
  initScroll();
  initToUp();
});

const initScroll = () => {
  const notification = document.querySelector("[data-notification]");
  const toUp = document.querySelector("[data-up]");

  let isScrolling;

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const header = document.querySelector("header");
  const nav = header.querySelector("[data-nav]");
  const burger = header.querySelector('[data-burger]')

  window.addEventListener("scroll", function() {
    const topPosition = window.pageYOffset;

    if (topPosition >= 400) {
      header.classList.add("background");
      if (nav.dataset.nav === "dark") {
        nav.classList.remove("nav--dark");
      }
      if (burger.dataset.burger === "dark") {
        burger.classList.remove("burger--dark");
      }
    } else {
      header.classList.remove("background");
      if (nav.dataset.nav === "dark") {
        nav.classList.add("nav--dark");
      }
      if (burger.dataset.burger === "dark") {
        burger.classList.add("burger--dark");
      }
    }

    if (!notification) return;

    window.clearTimeout(isScrolling);
    notification.classList.remove("active");

    if (topPosition >= 200 && topPosition + windowHeight < documentHeight - 200) {
      isScrolling = setTimeout(function() {
        notification.classList.add("active");
      }, 400);
    }

    if (topPosition >= 800) {
      toUp.classList.add('visible')
    } else {
      toUp.classList.remove('visible')
    }
  });
};

const initToUp = () => {
  const toUp = document.querySelector("[data-up]");
  toUp.addEventListener('click', () => {
    window.scrollTo({top: 0})
  })
}