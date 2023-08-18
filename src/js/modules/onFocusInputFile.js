
export default function() {
  const fileBox = document.querySelectorAll(".form-block__form-file");

  if(!fileBox) return;

  fileBox.forEach(item => {
    const input = item.querySelector("input");
    const text = item.querySelector(".button-with-icon__text");

    input.addEventListener('change', () => {
      if(input.value === '') {
        text.textContent = "Прикрепить файл";
      }
    });
  });
}
