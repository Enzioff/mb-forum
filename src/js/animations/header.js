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

  if (document.querySelector('.nav__link')) {
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
  }

  const links = document.querySelectorAll(".nav__link");
  if (!links) return
  links.forEach(link => {
    if (!link.getAttribute('href').includes("./")) {
      link.addEventListener("click", (evt) => {
        evt.preventDefault();
        const targetElem = link.getAttribute('href');
        if (targetElem) {
          if (targetElem === '#program') {
            gsap.to(window, {
              duration: 2,
              scrollTo: {
                y: targetElem,
                offsetY: -window.innerHeight * 2.6,
              }
            });
          } else {
            gsap.to(window, {
              duration: 2,
              scrollTo: targetElem
            });
          }
        }
      });
    }
  });
};