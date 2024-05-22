import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

export const initInfoAnimation = () => {
  animationSeparatorIn();
  animationInfoIn();
};


const animationSeparatorIn = () => {
  gsap.registerPlugin(ScrollTrigger);

  // separator
  const tl = gsap.timeline();

  tl.fromTo(".section-separator", {
    yPercent: 0,
    duration: 1
  }, {
    yPercent: 0,
    duration: 1
  }).from(".section-separator", {
    scale: 0.5,
    duration: 1,
    borderRadius: 70,
    ease: "expo"
  }, "-=4");

  ScrollTrigger.create({
    trigger: ".section-separator",
    start: "center center",
    animation: tl,
    pin: ".section-separator",
    pinSpacing: false,
    end: `100%`,
    scrub: 1,
    onLeave: (self) => {
      self.trigger.classList.add("overflow");
    },
    onEnterBack: (self) => {
      self.trigger.classList.remove("overflow");
    }
  });
};

const animationInfoIn = () => {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

  // separator
  const tl = gsap.timeline();

  tl.from(".decor__main", {
    y: -200,
    opacity: 0,
    duration: 0.8,
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
    stagger: 0.4
  });

  ScrollTrigger.create({
    trigger: ".info",
    start: "top center",
    end: "200%",
    scrub: 1,
    animation: tl,
  });
  ScrollTrigger.create({
    trigger: ".info",
    start: "center center",
    pin: ".info",
    end: "200%",
    scrub: 1,
  });
};