import Choices from "choices.js";

export default function choicesSelector() {

  const elements = document.querySelectorAll('.js-choice-select');

  window.selects = {};

  elements.forEach(elem => {
    const select = new Choices(elem, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      placeholder: false,
      allowHTML: true
    });

    if (select.passedElement.element.name) {
      if (window.selects[select.passedElement.element.name] && window.selects[select.passedElement.element.name].length) {
        window.selects[select.passedElement.element.name].push(select)
      } else {
        window.selects[select.passedElement.element.name] = [select]
      }
    }

    select.passedElement.element.addEventListener(
      'change',
      function (event) {
        elem.closest(".select").classList.add("is-active");
      },
      false,
    );
  })
}
