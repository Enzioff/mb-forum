import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  initShowMore();
});

const initShowMore = () => {
  const limitBlocks = document.querySelectorAll("[data-limit-block]");
  if (!limitBlocks) return;
  limitBlocks.forEach(block => {
    const showMoreBtn = block.querySelector(".show-more");
    let isOpen = false;
    showMoreBtn.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (!isOpen) {
        block.classList.remove("article-speaker--limit");
        showMoreBtn.textContent = "Скрыть";
        isOpen = !isOpen;
      } else {
        block.classList.add("article-speaker--limit");
        showMoreBtn.textContent = "Показать полностью";
        isOpen = !isOpen;
      }
      ScrollTrigger.refresh(true)
    });
  });
};