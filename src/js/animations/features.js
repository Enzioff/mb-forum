import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initFeaturesAnimation = () => {
  animationIn();
  moveBackground();
};


const animationIn = () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const tl = gsap.timeline();

  tl
    .from(".features__item", {
      y: -150,
      x: 300,
      scale: 0.2,
      rotation: 90,
      duration: 2,
      stagger: 1,
      opacity: 0,
      ease: "back"
    })
    .fromTo(".features__button", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "back"
    }, {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "back"
    }, ">-2")
    .from(".features__circle", {
        opacity: 0,
        duration: 2
      },
      ">-2");

  ScrollTrigger.create({
    trigger: ".animation-fixed",
    pin: ".animation-fixed",
    start: "top top",
    scrub: 2,
    end: "300%",
    animation: tl,
    markers: true
  });

  // let sections = gsap.utils.toArray('.section');

  // gsap.to(sections, {
  //   xPercent: -100 * (sections.length - 1),
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: '.main',
  //     pin: true,
  //     scrub: 1,
  //     // snap: 1 / (sections.length - 1),
  //     end: () => {
  //       return `+=${document.querySelector('.main').offsetWidth}`
  //     }
  //   }
  // })

};

const moveBackground = () => {
  let dots = gsap.utils.toArray(".dots");

  function mouseMoveFunc(e) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const dots = gsap.utils.toArray('.dots')

    dots.forEach((element, idx) => {
      const rect = element.getBoundingClientRect();
      const elementX = rect.left + rect.width / 2;
      const elementY = rect.top + rect.height / 2;

      const distanceX = elementX - mouseX;
      const distanceY = elementY - mouseY;

      switch (idx) {
        case 0:
          gsap.to(element, {
            x: distanceX * 0.1,
            y: distanceY * 0.1,
            duration: 0.5
          });
          break;
        case 1:
          gsap.to(element, {
            x: distanceX * 0.2,
            y: distanceY * 0.2,
            duration: 0.5
          });
          break;
        case 2:
          gsap.to(element, {
            x: distanceX * 0.3,
            y: distanceY * 0.3,
            duration: 0.5
          });
          break;
      }
    });
  }

  const features = document.querySelector('.features');
  features.addEventListener('mousemove', mouseMoveFunc)
};