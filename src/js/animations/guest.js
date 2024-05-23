import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initGuestAnimation = () => {
  animationIn();
};


const animationIn = () => {
  // gsap.registerPlugin(ScrollTrigger, TextPlugin);
  // let guests = gsap.utils.toArray('.article-guest');
  // gsap.to('.section--blue', {
  //   xPercent: -100,
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: '.section--blue',
  //     pin: true,
  //     scrub: 1,
  //     end: () => `+=${document.querySelector('.grid--line').offsetWidth}`
  //   }
  // })
};