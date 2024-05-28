import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { initFeaturesAnimation } from "../animations/features";
import { initHeaderAnimation } from "../animations/header";
import { initIntroAnimation } from "../animations/intro";
import { initInfoAnimation } from "../animations/info";
import { initGuestAnimation } from "../animations/guest";
import { initAboutAnimation } from "../animations/about";
import { initTitlesAnimation } from "../animations/titles";
import { initVideoAnimation } from "../animations/video";
import { initFeedbackAnimation } from "../animations/feedback";
import { initWaveAnimation } from "../animations/wave";

document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
});

const initAnimations = () => {
  initSmoothScroll();
  initHeaderAnimation();
  initIntroAnimation();
  initInfoAnimation();
  initGuestAnimation();
  initFeaturesAnimation();
  initAboutAnimation();
  initTitlesAnimation();
  initVideoAnimation();
  initFeedbackAnimation()
  initWaveAnimation()
};

const initSmoothScroll = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const mm = gsap.matchMedia();

  mm.add('(min-width: 1200px)', () => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1
    });
  })
};