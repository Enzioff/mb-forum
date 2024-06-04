import axios from "axios";
import { Fancybox } from "@fancyapps/ui";

document.addEventListener("DOMContentLoaded", () => {
  initForm();
});

const initForm = () => {
  const form = document.querySelector("[data-form]");
  if (!form) return;
  const els = [...form.querySelectorAll(".modal__label"), ...form.querySelectorAll(".modal__item")];
  const url = form.getAttribute("action");
  const submit = form.querySelector("button[type=\"submit\"]");
  const content = document.querySelector("[data-modal-content]");
  const accepted = form.querySelectorAll("[data-form-accept]");
  const jurItems = form.querySelectorAll("[data-jur-item]");

  els.forEach(el => {
    const input = el.querySelector("input");
    input.addEventListener("change", () => {
      if (input.checked && input.hasAttribute("data-jur")) {
        jurItems.forEach(temp => temp.style.display = "flex");
      }
      if (input.checked && input.hasAttribute("data-personal")) {
        jurItems.forEach(temp => temp.style.display = "none");
      }
    });
  });

  submit.setAttribute("disabled", true);
  let acceptedCount = 0;

  accepted.forEach(el => {
    el.addEventListener("change", () => {
      el.checked ? acceptedCount += 1 : acceptedCount -= 1;
      if (acceptedCount === 2) {
        submit.removeAttribute("disabled");
      } else {
        submit.setAttribute("disabled", true);
      }
    });
  });

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    return false;
  });

  submit.addEventListener("click", (evt) => {
    let error = false;

    const formItems = form.querySelectorAll('.modal__item')

    formItems.forEach(el => {
      const attention = el.querySelector(".attention");
      const input = el.querySelector("input");
      const regexp = /^[a-zA-Z0-9а-яА-Я._%+-]+@[a-zA-Z0-9а-яА-Я.-]+\.[a-zA-Zа-яА-Я]{2,}$/;

      if (input.value.length >= 1 && input.value.length <= 3) {
        error = true;
        attention.classList.add("active");
      } else if (input.value !== '' && input.value.length > 3) {
        attention.classList.remove("active");
      }

      if (input.value.length > 1 && input.value.includes("_")) {
        error = true;
        attention.classList.add("active");
      } else if (input.value !== '') {
        attention.classList.remove("active");
      }

      if (input.hasAttribute("data-validate") && input.value.length < 3) {
        error = true;
        attention.classList.add("active");
      }

      if (input.hasAttribute("data-email") && !regexp.test(input.value)) {
        error = true;
        attention.classList.add("active");
      }

      if (input.hasAttribute('data-phone') && input.value.includes("_") || input.hasAttribute('data-phone') && input.value === '') {
        error = true;
        attention.classList.add("active");
      }

      // if (input.hasAttribute('data-inn') && input.value.includes("_")) {
      //   error = true;
      //   attention.classList.add("active");
      // } else if (input.hasAttribute('data-inn') && input.value === "") {
      //   attention.classList.remove("active");
      // }

      if (!error) {
        attention.classList.remove("active");
      }

      setTimeout(() => {
        attention.classList.remove("active");
      }, 3000)
    });

    console.log(error)
    if (!error) {
      submitForm();
    }
  });

  const submitForm = () => {
    form.removeEventListener("submit", handleSubmit);
    form.addEventListener("submit", handleSubmit);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData();

    els.forEach(el => {
      const input = el.querySelector("input");

      if (input.checked || input.type === "text" || input.type === "number" || input.type === "tel" || input.type === "email" || input.type === "date") {
        data.append(input.name, input.value);
      }
    });

    const resetForm = () => {
      Fancybox.close();
      els.forEach(temp => {
        const input = temp.querySelector("input");
        if (input.type === "text" || input.type === "number" || input.type === "tel" || input.type === "email" || input.type === "date") {
          input.value = "";
        } else if (input.type === "checkbox") {
          input.checked = false;
        }
      });
      accepted.forEach(el => {
        el.checked = false;
      });
      acceptedCount = 0;
      submit.setAttribute("disabled", true);
      form.removeEventListener("submit", handleSubmit);
    };

    axios.post(url, data)
      .then(response => response.data)
      .then(data => {
        const modalAccept = document.querySelector('.modal--accept');
        const title = modalAccept.querySelector('[data-modal-title]')
        const text = modalAccept.querySelector('[data-modal-text]')
        const button = modalAccept.querySelector('[data-modal-close]')
        title.textContent = 'вы успешно прошли регистрацию!'
        text.textContent = 'Ждём Вас на форуме!'
        button.textContent = 'Отлично!'
        resetForm();
        Fancybox.show([{
          src: '#accept',
          type: 'inline',
        }])
      })
      .catch(error => {
        console.error(error);
        const modalAccept = document.querySelector('.modal--accept');
        const title = modalAccept.querySelector('[data-modal-title]')
        const text = modalAccept.querySelector('[data-modal-text]')
        const button = modalAccept.querySelector('[data-modal-close]')
        title.textContent = 'Ошибка!'
        text.textContent = error.message
        button.textContent = 'Закрыть'
        resetForm();
        Fancybox.show([{
          src: '#accept',
          type: 'inline',
        }])
      });
  };
};