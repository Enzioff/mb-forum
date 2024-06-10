import inputmask from "inputmask/lib/inputmask";

document.addEventListener('DOMContentLoaded', ()=>{
  initMask()
})

const initMask = () => {
  const inputs = document.querySelectorAll('input')

  inputs.forEach(el => {
    if (el.type === 'tel') {
      inputmask({"mask": "+7 (999) 999-99-99"}).mask(el);
    } else if (el.hasAttribute('data-text')) {
      inputmask({ regex: "[А-Яа-яA-Za-z]+" }).mask(el)
    }else if (el.hasAttribute('data-date')) {
      inputmask({ regex: "^(0[1-9]|[12][0-9]|3[01])\\.(0[1-9]|1[0-2])\\.(19\\d{2}|20\\d{2})$" }).mask(el);
    } else if (el.hasAttribute('data-email')) {
      inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function (pastedValue, opts) {
          pastedValue = pastedValue.toLowerCase();
          return pastedValue.replace("mailto:", "");
        },
      }).mask(el);
    } else if (el.hasAttribute('data-inn')) {
      inputmask({"mask": '9999999999[99]'}).mask(el)
    }
  })
}