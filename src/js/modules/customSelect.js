
export default function customSelect () {
  if(window.matchMedia('(max-width: 768px)').matches) {

    const selects =  document.querySelectorAll(".js-custom-select");

    selects.forEach(select => {
      const selectHeader = select.querySelector('.intro-filter__select-header');
      const selectItem = select.querySelectorAll('.intro-filter__list-item');

      selectHeader.addEventListener('click', function() {
        this.parentElement.classList.toggle('is-active');
      })

      selectItem.forEach(item => {
        item.addEventListener('click', function() {
          let text = this.querySelector('.intro-filter__list-item-text').innerText;
          let select = this.closest('.intro-filter__select');
          let currentText = select.querySelector('.intro-filter__select-current');

          currentText.innerText = text;
          select.classList.remove('is-active');


          const listTag = document.querySelector(".intro-filter__list");
          const listTagItems = listTag.querySelectorAll(".intro-filter__list-item");

          listTagItems.forEach((elem, j) => {

            elem.querySelector("input").checked = false;

            if(item === elem){
              elem.querySelector("input").checked = true;
            }
          })
        });
      })
    });
  }
}
