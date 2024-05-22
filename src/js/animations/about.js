import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initAboutAnimation = () => {
  animationIn();
};


const animationIn = () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  gsap.from('.about-animate', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top center',
      markers: true,
    },
    x: -200,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: 'back',
  })
  gsap.from('.about-button', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top center',
      markers: true,
    },
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: 'back',
  })

  gsap.from('.about-map', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top center',
      markers: true,
    },
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 1.1,
    ease: 'back',
  })

  gsap.from('.about-animate-reverse', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top center',
      markers: true,
    },
    x: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: 'back',
  })

  gsap.from('.about__title--small', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top center',
      markers: true,
    },
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: 'back',
  })
  gsap.from('.about__partner', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top center',
      markers: true,
    },
    y: 100,
    scale: 0.3,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    delay: 1.3,
    ease: 'back',
  })
};