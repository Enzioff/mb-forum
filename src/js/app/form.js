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

  submit.addEventListener("click", (evt) => {
    let error = false;

    els.forEach(el => {
      const attention = el.querySelector(".attention");
      const input = el.querySelector("input");

      if (attention) {
        if (input.hasAttribute("required") && input.value.length < 3) {
          error = true;
          attention.classList.add("active");
          content.scrollTo({ top: attention.offsetTop, behavior: "smooth" });
        } else {
          attention.classList.remove("active");
        }
      }
    });

    if (!error) {
      submitForm();
    }
  });

  const submitForm = () => {
    form.removeEventListener("submit", handleSubmit); // Удаляем обработчик submit перед добавлением нового
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
          input.value = '';
        } else if (input.type === 'checkbox') {
          input.checked = false;
        }
      });
      accepted.forEach(el => {
        el.checked = false;
      });
      submit.setAttribute("disabled", true);
    };

    axios.post(url, data)
      .then(response => response.data)
      .then(data => {
        resetForm();
      })
      .catch(error => {
        console.error(error);
        resetForm();
      });
  };
};