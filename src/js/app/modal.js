import { Fancybox } from "@fancyapps/ui";

document.addEventListener("DOMContentLoaded", () => {
  initModal();
});

const initModal = () => {
  const modals = document.querySelectorAll("[data-modal]");
  if (!modals) return;
  modals.forEach(modal => {
    const content = modal.querySelector("[data-modal-content]");
    const close = modal.querySelector("[data-modal-close]");

    modal.addEventListener("click", () => {
      Fancybox.close();
    });

    close.addEventListener("click", () => {
      Fancybox.close();
    });

    content.addEventListener("click", (evt) => {
      evt.stopPropagation();
    });
  });
};