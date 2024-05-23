import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initFeedbackAnimation = () => {
  animationIn();
};


const animationIn = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  tl.from(".article-feedback", {
    duration: 1,
    stagger: 0.4,
    opacity: 0
  })
    .from(".article-feedback__phone", {
      scale: 0.2,
      y: 120,
      x: -300,
      rotationY: 130,
      duration: 1,
      ease: "back"
    }, '-=1');

  gsap.from(".article-feedback__button", {
    scrollTrigger: '.section--darken',
    y: -100,
    duration: 0.7,
    delay: 1.2,
    opacity: 0,
    ease: 'back',
  });

  ScrollTrigger.create({
    trigger: ".section--darken",
    start: "top center",
    animation: tl
  });
};