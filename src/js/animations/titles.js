import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export const initTitlesAnimation = () => {
  animationIn();
};


const animationIn = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const titles = document.querySelectorAll(".title");
  if (!titles) return;
  titles.forEach(title => {
    const text = new SplitText(title);

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: title,
        start: "100% bottom"
      },
      y: -50,
      rotation: -90,
      opacity: 0,
      stagger: 0.05,
      duration: 0.4,
      ease: "back",
      onComplete: () => {
        text.revert();
      }
    });
  });
};