export default () => {
  function resetInputFileFunc (form) {
    const InputFiles = form.querySelectorAll(".form-block__form-file");
    InputFiles.forEach(file => {
      file.querySelector("input").value = "";
      file.querySelector('.button-with-icon__text').textContent = "Прикрепить файл";
    })
  }

  window.tochka_API.resetInputFileFunc = resetInputFileFunc;
}
