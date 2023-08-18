export default function showHideBlock () {
  if(window.matchMedia('(max-width: 768px)').matches) {
    const wrapper = document.querySelectorAll('.js-hide-wrapper');

    wrapper.forEach(item => {

      if(!item) return;

      const box = item.querySelector('.js-hide-box');
      const btn = item.querySelector('.js-hide-btn');

      btn.addEventListener('click', () => {
        box.classList.toggle('js-hide-box--active');
        btn.classList.toggle('js-hide-btn--active');
      });
    })
  }
}
