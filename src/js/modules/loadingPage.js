import gsap from "gsap";
import SplitText from '../../assets/js/gsap-bonus/SplitText';
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {

  let animationBlock = document.querySelector('.js-animation-appearance')

  if (!animationBlock) return

  const title = document.querySelector('.main-intro__title');
  const header = document.querySelector('.header');
  const subtitle = document.querySelector('.main-intro__desc');
  const titleMainHelp = document.querySelector('.main-help__title');
  const titleEnumeration = document.querySelector('.enumeration__title');
  const titleMainShield = document.querySelector('.main-shield__title');

  const timeLine = gsap.timeline({
    paused: true,
    reversed: true
  })

  let splitTitle = new SplitText(title, {
    type: 'lines, chars',
    linesClass: "line"
  })

  let subTitle = new SplitText(subtitle, {
    type: 'lines, chars',
    linesClass: "line"
  })

  let splitTitle2 = new SplitText(titleMainHelp, {
    type: 'lines, chars',
    linesClass: "line"
  })

  let splitTitle3 = new SplitText(titleEnumeration, {
    type: 'lines, chars',
    linesClass: "line"
  })

  let splitTitle4 = new SplitText(titleMainShield, {
    type: 'lines, chars',
    linesClass: "line"
  })

  gsap.set(header, {
    yPercent: 8
  });
  gsap.set(splitTitle.chars, {
    yPercent: 120
  });
  gsap.set(subTitle.chars, {
    yPercent: 120
  });
  gsap.set(splitTitle2.chars, {
    yPercent: 120
  });
  gsap.set(splitTitle3.chars, {
    yPercent: 120
  });
  gsap.set(splitTitle4.chars, {
    yPercent: 120
  });
  gsap.set(".main-intro__footer", {
    yPercent: 8
  })

  timeLine
    .to(".main-intro__title", {
      opacity: 1,
      duration: 0.9
    })
    .to(".main-intro__bg", {
      opacity: 1,
      scale: 1,
      duration: 0.9
    })
    .to(splitTitle.chars, {
      yPercent: 0,
      duration: 0.8
    })
    .add("start")
    .to(".main-intro__desc", {
      opacity: 0.5,
      duration: 0.9
    }, "start")
    .to(subTitle.chars, {
      yPercent: 0,
      duration: 0.8
    }, "start")
    .to(header, {
      yPercent: 0,
      opacity: 1,
      duration: 0.8
    }, "start")
    .to(".main-intro__footer-line", {
      width: "auto",
      duration: 0.5
    }, "start")
    .to(".main-intro__footer", {
      yPercent: 0,
      opacity: 1,
      duration: 0.5
    }, "start")

  gsap.to(splitTitle2.chars, {
    yPercent: 0,
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".main-help__title",
      smooth: true,
      multiplier: 1.6
    }
  })

  gsap.to(splitTitle3.chars, {
    yPercent: 0,
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".enumeration__title",
      smooth: true,
      multiplier: 1.6
    }
  })

  gsap.to(splitTitle4.chars, {
    yPercent: 0,
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".main-shield__title",
      smooth: true,
      multiplier: 1.6
    }
  })

  timeLine.play();
}
