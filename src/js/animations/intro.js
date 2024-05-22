import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initIntroAnimation = () => {
  animationIn();
};


const animationIn = () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const tl = gsap.timeline();

  tl.from(".intro__item", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "expo",
    stagger: 0.3,
    delay: 2
  })
    .from(".main-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "back"
    }, "-=2")
    .from(".preview", {
      yPercent: 120,
      scale: 0.3,
      duration: 1,
      ease: "back"
    }, "-=1")
    .to(".preview__button", {
      rotation: 180,
      duration: 4,
      repeat: -1,
      ease: "elastic"
    });

  ScrollTrigger.create({
    trigger: ".section--full",
    pin: ".section--full",
    pinSpacing: false
  });
};