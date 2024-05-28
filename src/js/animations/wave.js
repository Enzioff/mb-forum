import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

export const initWaveAnimation = () => {
  animationIn();
};


const animationIn = () => {
  gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1201px)", () => {


    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      paused: true,
    });

    const wave1 = MorphSVGPlugin.convertToPath(".wave-1");
    const wave2 = MorphSVGPlugin.convertToPath(".wave-2");
    const wave3 = MorphSVGPlugin.convertToPath(".wave-3");
    const wave4 = MorphSVGPlugin.convertToPath(".wave-4");
    const wave5 = MorphSVGPlugin.convertToPath(".wave-5");
    const wave6 = MorphSVGPlugin.convertToPath(".wave-6");
    const wave7 = MorphSVGPlugin.convertToPath(".wave-7");
    const wave8 = MorphSVGPlugin.convertToPath(".wave-8");

    if (!wave1) return;

    tl.to(".wave", {
      duration: 2,
      morphSVG: wave1,
      ease: "none"
    })
      .to(".wave", {
        duration: 2,
        morphSVG: wave2,
        ease: "none"
      }, 2)
      .to(".wave2", {
        duration: 2,
        morphSVG: wave3,
        ease: "none"
      }, 0)
      .to(".wave2", {
        duration: 2,
        morphSVG: wave4,
        ease: "none"
      }, 2)
      .to(".wave3", {
        duration: 2,
        morphSVG: wave5,
        ease: "none"
      }, 0)
      .to(".wave3", {
        duration: 2,
        morphSVG: wave6,
        ease: "none"
      }, 2)
      .to(".wave4", {
        duration: 2,
        morphSVG: wave7,
        ease: "none"
      }, 0)
      .to(".wave4", {
        duration: 2,
        morphSVG: wave8,
        ease: "none"
      }, 2);

    const separators = gsap.utils.toArray('.separator');

    separators.forEach(separator => {
      if (separator.classList.contains('separator--info')) {
        ScrollTrigger.create({
          trigger: '.section--animate',
          end: '400%',
          onEnter: () => {
            tl.play();
          },
          onEnterBack: () => {
            tl.play();
          },
          onLeave: () => {
            tl.pause()
          },
          onLeaveBack: () => {
            tl.pause();
          }
        })
      } else {
        ScrollTrigger.create({
          trigger: separator,
          onEnter: () => {
            tl.play();
          },
          onEnterBack: () => {
            tl.play();
          },
          onLeave: () => {
            tl.pause()
          },
          onLeaveBack: () => {
            tl.pause();
          }
        })
      }
    })
  });
};