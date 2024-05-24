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

  if (document.querySelector(".section-separator")) {
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
  }
};

const animationInfoIn = () => {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
  const mm = gsap.matchMedia();
  let tl1 = gsap.timeline();
  let tl2 = gsap.timeline();
  const initTimeline1 = () => {
    tl1.from(".decor__main", {
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
      start: "center center",
      pin: ".info",
      end: "200%",
      scrub: 1,
    });
    ScrollTrigger.create({
      trigger: ".info",
      start: "top center",
      end: "200%",
      scrub: 1,
      animation: tl1,
    });
  };
  const initTimeline2 = () => {
    tl2.from(".info-animate", {
      x: -200,
      opacity: 0,
      duration: 0.5,
      ease: "back",
      stagger: 0.2
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
      ease: "circ"
    });
    ScrollTrigger.create({
      trigger: ".info",
      start: "-200px top",
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