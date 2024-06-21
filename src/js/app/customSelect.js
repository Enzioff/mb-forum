document.addEventListener("DOMContentLoaded", () => {
  initCustomSelect();
});

const initCustomSelect = () => {
  const selectList = document.querySelectorAll("[data-custom-select]");
  const modalContent = document.querySelector('[data-modal-content]')
  if (!selectList || !modalContent) return;

  selectList.forEach(select => {
    const items = select.querySelectorAll("[data-custom-select-item]");
    const title = select.querySelector("[data-custom-select-title]");
    const head = select.querySelector("[data-custom-select-head]");
    const list = select.querySelector("[data-custom-select-list]");

    head.addEventListener("click", () => {
      changeState(list);
    });

    items.forEach(item => {
      item.addEventListener("click", () => {
        changeTitle(title, item);
        changeState(list);
      });
    });

    modalContent.addEventListener("click", (evt) => {
      const { target } = evt;
      if (!select.contains(target) && target !== head) {
        list.classList.remove("active");
      }
    });
  });
};

const changeState = (element) => {
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
};

const changeTitle = (title, element) => {
  title.textContent = element.textContent;
  title.dataset.value = element.dataset.value;
};