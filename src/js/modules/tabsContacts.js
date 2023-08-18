import map from '../map';

export default function tabsContacts() {
  const tabsContainers = Array.from(document.querySelectorAll('.js-init-tabs'));

  tabsContainers.forEach(tabsContainer => {
    const btns = Array.from(tabsContainer.querySelectorAll('.js-tab-btn'));

    if(btns.length === 0) {
      const tabsBody = tabsContainer.querySelector('.js-tab-body');
      tabsBody.classList.add('active');

      return;
    }

    const bodies = Array.from(tabsContainer.querySelectorAll('.js-tab-body'));

    btns.forEach((btn, i) => {
      if (i === 0) {
        btn.classList.add('fixed-menu__item-link--active');
        btn.parentElement.classList.add('parent-active');
        bodies[i].classList.add('active');
        map(bodies[i]);
      } else {
        btn.classList.remove('fixed-menu__item-link--active');
        btn.parentElement.classList.remove('parent-active');
        bodies[i].classList.remove('active');
      }
    })

    btns.forEach((btn, i) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        btns.forEach((b, j) => {
          if (j == i) {
            b.classList.add('fixed-menu__item-link--active');
            b.parentElement.classList.add('parent-active');
            bodies[j].classList.add('active');
            map(bodies[j]);
          } else {
            b.classList.remove('fixed-menu__item-link--active');
            b.parentElement.classList.remove('parent-active');
            bodies[j].classList.remove('active');
          }
        })
      })
      btn.addEventListener('keydown', (e) => {
        if( e.keyCode === 13) {
          btns.forEach((b, j) => {
            if (j == i) {
              b.classList.add('fixed-menu__item-link--active');
              b.parentElement.classList.add('parent-active');
              bodies[j].classList.add('active');
              map(bodies[j]);
            } else {
              b.classList.remove('fixed-menu__item-link--active');
              b.parentElement.classList.remove('parent-active');
              bodies[j].classList.remove('active');
            }
          })
        }
      })
    })
  })
}
