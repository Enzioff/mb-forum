import { gsap } from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

export const initWaveAnimation = () => {
  animationIn();
};


const animationIn = () => {
  gsap.registerPlugin(MorphSVGPlugin);

  const tl = gsap.timeline({repeat: -1, yoyo: true})
  const wave1 = MorphSVGPlugin.convertToPath('.wave-1')
  const wave2 = MorphSVGPlugin.convertToPath('.wave-2')

  tl.to('.wave', {
    duration: 2,
    morphSVG: wave1,
    ease: 'none',
  })
    .to('.wave', {
      duration: 2,
      morphSVG: wave2,
      ease: 'none',
    })
};