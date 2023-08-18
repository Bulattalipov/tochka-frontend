export default () => {
  const parentInputs = document.querySelectorAll('.js-validation-wrapper');

  parentInputs.forEach(parentInput => {

    if(!parentInput.querySelector('.input__element')) return;

    let input = parentInput.querySelector('.input__element');

    input.addEventListener('blur', function(){
      let valueElem = input.value.replace(/\s+/g, ' ').trim();
      input.value = valueElem;
    });
  })
}
