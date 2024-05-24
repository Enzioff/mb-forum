import { gsap } from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

export const initWaveAnimation = () => {
  animationIn();
};


const animationIn = () => {
  gsap.registerPlugin(MorphSVGPlugin);
  const mm = gsap.matchMedia()
  mm.add('(min-width: 1201px)', () => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    const tl2 = gsap.timeline({ repeat: -1, yoyo: true });
    const tl3 = gsap.timeline({ repeat: -1, yoyo: true });
    const tl4 = gsap.timeline({ repeat: -1, yoyo: true });
    const wave1 = MorphSVGPlugin.convertToPath(".wave-1");
    const wave2 = MorphSVGPlugin.convertToPath(".wave-2");
    const wave3 = MorphSVGPlugin.convertToPath(".wave-3");
    const wave4 = MorphSVGPlugin.convertToPath(".wave-4");
    const wave5 = MorphSVGPlugin.convertToPath(".wave-5");
    const wave6 = MorphSVGPlugin.convertToPath(".wave-6");
    const wave7 = MorphSVGPlugin.convertToPath(".wave-7");
    const wave8 = MorphSVGPlugin.convertToPath(".wave-8");

    if (!wave1) return

    tl.to(".wave", {
      duration: 2,
      morphSVG: wave1,
      ease: "none"
    })
      .to(".wave", {
        duration: 2,
        morphSVG: wave2,
        ease: "none"
      });

    tl2.to(".wave2", {
      duration: 2,
      morphSVG: wave3,
      ease: "none"
    })
      .to(".wave2", {
        duration: 2,
        morphSVG: wave4,
        ease: "none"
      });

    tl3.to(".wave3", {
      duration: 2,
      morphSVG: wave5,
      ease: "none"
    })
      .to(".wave3", {
        duration: 2,
        morphSVG: wave6,
        ease: "none"
      });

    tl4.to(".wave4", {
      duration: 2,
      morphSVG: wave7,
      ease: "none"
    })
      .to(".wave4", {
        duration: 2,
        morphSVG: wave8,
        ease: "none"
      });
  })
};