export default function menuTabs() {
  const menu = document.querySelector('.js-menu-tabs');
  if (!menu) return;

  const tabs = menu.querySelectorAll('.main-menu__list');
  tabs.forEach(tab => {
    const navtButtons = tab.querySelectorAll('.menu__nav-button');

    navtButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault;
        tabs.forEach(t => {
          if (t.dataset.group === button.dataset.group) {
            t.classList.add('active');
          } else {
            t.classList.remove('active');
          }
        })
      });
    })
  })
}
