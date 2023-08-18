export default function headerScroll() {
  const header = document.querySelector('.header');

  function headerScrollToggle() {
    if (header.getBoundingClientRect().top > document.documentElement.getBoundingClientRect().top) {
      if (header.classList.contains('header--narrow')) return;
      header.classList.add('header--narrow');
    } else {
      if (document.body.classList.contains('disable-scroll')) return;
      header.classList.remove('header--narrow');
    }
  }

  window.addEventListener('scroll', headerScrollToggle);

  if(header.getBoundingClientRect().top > document.documentElement.getBoundingClientRect().top) {
    headerScrollToggle();
  }
}
