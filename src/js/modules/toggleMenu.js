export default () => {
  const headerBtn = document.querySelector('.header__burger');
  const menu = document.querySelector('.main-menu');
  const menuClose = document.querySelector('.main-menu__burger');

  headerBtn.addEventListener('click', function () {
    menu.classList.add('active');
  })

  menuClose.addEventListener('click', function () {
    menu.classList.remove('active');
  })
}
