import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initAboutAnimation = () => {
  animationIn();
};


const animationIn = () => {
  gsap.registerPlugin(ScrollTrigger);

  if (document.querySelector('.about-animate')) {
    gsap.from('.about-animate', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
      },
      x: -200,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'back',
    })
  }

  if (document.querySelector('.about-button')) {
    gsap.from('.about-button', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
      },
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: 'back',
    })
  }

  if (document.querySelector('.about-map')) {
    gsap.from('.about-map', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
      },
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 1.1,
      ease: 'back',
    })
  }

  if (document.querySelector('.about-animate-reverse')) {
    gsap.from('.about-animate-reverse', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
      },
      x: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'back',
    })
  }

  if (document.querySelector('.about__title--small')) {
    gsap.from('.about__title--small', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
      },
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: 'back',
    })
  }

  if (document.querySelector('.about__partner')) {
    gsap.from('.about__partner', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
      },
      y: 100,
      scale: 0.3,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay: 1.3,
      ease: 'back',
    })
  }
};