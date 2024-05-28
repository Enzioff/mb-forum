import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

export const initInfoAnimation = () => {
  animationInfoIn();
};

const animationInfoIn = () => {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
  const separatorLight = document.querySelector('.section--animate .separator')
  const mm = gsap.matchMedia();
  let tl1 = gsap.timeline();
  let tl2 = gsap.timeline();
  let tl3 = gsap.timeline()
  const initTimeline1 = () => {
    tl1.from('.section--animate', {
      scale: 0.5,
      duration: 1,
    }).from(".decor__main", {
      y: -200,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      ease: "sine",
    })
      .from(".decor__block", {
        x: 200,
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "back"
      }).from(".decor__wave", {
      x: -300,
      rotation: -45,
      opacity: 0,
      duration: 1,
      ease: "circ",
    }).from('.info__title', {
      x: -300,
      opacity: 0,
      duration: 1,
      ease: "back",
      onComplete: () => {
        separatorLight.classList.add('visible')
      },
      onUpdate: () => {
        separatorLight.classList.remove('visible')
      }
    }).from(".info-animate", {
      x: -300,
      opacity: 0,
      duration: 1,
      ease: "back",
      stagger: 0.4,
    });
    tl3.from(".decor__main", {
      y: -200,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      ease: "sine"
    })
      .from(".decor__block", {
        x: 200,
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "back"
      }).from(".decor__wave", {
      x: -300,
      rotation: -45,
      opacity: 0,
      duration: 1,
      ease: "circ"
    }).from(".info-animate", {
      x: -300,
      opacity: 0,
      duration: 1,
      ease: "back",
      stagger: 0.4,
    });

    ScrollTrigger.create({
      trigger: ".section--animate",
      start: "center center",
      pin: ".section--animate",
      end: "200%",
      scrub: 1,
      animation: tl1,
    });
    ScrollTrigger.create({
      trigger: ".info",
      start: "top center",
      end: "200%",
      scrub: 1,
      animation: tl3,
    });
  };
  const initTimeline2 = () => {
    tl2.from(".info-animate", {
      x: -200,
      opacity: 0,
      duration: 0.5,
      ease: "back",
      stagger: 0.2,
    }).from(".decor__main", {
      y: -100,
      opacity: 0,
      duration: 0.3,
      ease: "sine"
    })
      .from(".decor__block", {
        x: 100,
        y: 40,
        opacity: 0,
        duration: 0.3,
        ease: "back"
      }).from(".decor__wave", {
      x: -100,
      rotation: -45,
      opacity: 0,
      duration: 0.5,
      ease: "circ",
    });
    ScrollTrigger.create({
      trigger: ".info",
      start: "-200px center",
      end: "100%",
      animation: tl2,
    });
  };

  mm.add("(min-width: 1201px)", () => {
    initTimeline1();
  });

  mm.add("(max-width: 1200px)", () => {
    if (document.querySelector(".decor__main")) {
      initTimeline2();
    }
  });
};