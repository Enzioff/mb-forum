import inputmask from "inputmask/lib/inputmask";

document.addEventListener('DOMContentLoaded', ()=>{
  initMask()
})

const initMask = () => {
  const inputs = document.querySelectorAll('input')

  inputs.forEach(el => {
    if (el.type === 'tel') {
      inputmask({"mask": "+7 (999) 999-99-99"}).mask(el);
    } else if (el.hasAttribute('data-date')) {
      inputmask({"mask": "99.99.9999"}).mask(el);
    } else if (el.hasAttribute('data-email')) {
      inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
          pastedValue = pastedValue.toLowerCase();
          return pastedValue.replace("mailto:", "");
        },
        definitions: {
          '*': {
            validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
            casing: "lower"
          }
        }
      }).mask(el);
    }
  })
}