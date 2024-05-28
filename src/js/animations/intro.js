import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

export const initIntroAnimation = () => {
  animationIn();
};


const animationIn = () => {
  gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

  const mm = gsap.matchMedia()

  const tl = gsap.timeline();
  if (document.querySelector(".intro__item")) {
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
    mm.add('(min-width: 1201px)', () => {
      ScrollTrigger.create({
        trigger: ".section--full",
        pin: ".section--full",
        pinSpacing: false
      });
    })
      .add('(max-width: 1200px)', () => {
        ScrollTrigger.create({
          trigger: ".section--full",
        });
      })
  }
};