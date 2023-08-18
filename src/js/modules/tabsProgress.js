export default function tabsProgress() {
  const tabsWrapper = document.querySelectorAll('.main-progress__tabs');

  tabsWrapper.forEach(elem => {

    if (!elem) return;

    const tabsBtns = elem.querySelectorAll('.main-progress__btn');
    const tabsContents = elem.querySelectorAll('.main-progress__content');

    tabsBtns.forEach(function(element){
      element.addEventListener('click', function (e) {
        const btn = e.currentTarget.dataset.btn;

        tabsBtns.forEach(function(btn){
          btn.classList.remove('main-progress__btn--active');
          e.currentTarget.classList.add('main-progress__btn--active');
        })

        tabsContents.forEach(function(element){
          element.classList.remove('main-progress__content--active');
          document.querySelector(`[data-content="${btn}"]`).classList.add('main-progress__content--active');
        })
      });
    });
  });
}
