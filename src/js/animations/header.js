import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

export const initHeaderAnimation = () => {
  animationIn();
};


const animationIn = () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

  const tl = gsap.timeline();

  tl.to(".nav__link", {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    duration: 1,
    delay: 0.3
  })
    .to(".header__wrapper .button", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "back"
    });

  const links = document.querySelectorAll(".nav__link");
  links.forEach(link => {
    link.addEventListener("click", (evt) => {
      evt.preventDefault();
      const targetElem = link.getAttribute('href');

      if (targetElem) {
        gsap.to(window, {
          duration: 4,
          scrollTo: targetElem,
        });
      }
    });
  });
};