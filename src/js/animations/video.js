import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initVideoAnimation = () => {
  animationIn();
};


const animationIn = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();
  const tlSecond = gsap.timeline();

  tl.from(".video-block", {
    y: -100,
    scale: 0.4,
    duration: 0.8,
    opacity: 0,
    ease: "back"
  });

  gsap.from(".video-block__button", {
    scrollTrigger: '.video-block',
    duration: 1,
    opacity: 0,
    scale: 0.5,
    delay: 0.7,
    ease: "back"
  });

  ScrollTrigger.create({
    trigger: ".video-block",
    start: "top center",
    animation: tl
  });
};