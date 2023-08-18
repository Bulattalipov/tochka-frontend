import SimpleParallax from "simple-parallax-js"

export default () => {
  const bgImg = document.querySelector(".main-shield__img");

  if(!bgImg) return;

  new SimpleParallax(bgImg, {
    delay: .2,
    transition: 'cubic-bezier(0,0,0,1)'
  });
}
