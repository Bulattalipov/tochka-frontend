export default function () {
  const linksWrappers = document.querySelectorAll(".header__list-second-wrapper");

  linksWrappers.forEach(elem => {
    const links = elem.querySelectorAll(".header__list-second-link");

    links.forEach(item => {
      item.addEventListener("focus", (e) => {
        elem.classList.add("active");
      })

      item.addEventListener("blur", (e) => {
        elem.classList.remove("active");
      })

      const threeList = item.closest('.header__list-second-item').querySelectorAll('.header__list-three-item');

      if (threeList.length !== 0) {
        threeList.forEach(elem2 => {
          const link2 = elem2.querySelector('.header__list-three-link');
          const container2 = elem2.closest('.header__list-three-list');

          link2.addEventListener("focus", (e) => {
            item.classList.add("hover");
            elem.classList.add("active");
            container2.classList.add("active");
          })

          link2.addEventListener("click", (e) => {
            item.classList.remove("hover");
            elem.classList.remove("active");
            container2.classList.remove("active");
          })

          link2.addEventListener("blur", (e) => {
            item.classList.remove("hover");
            elem.classList.remove("active");
            container2.classList.remove("active");
          })
        })
      }
    })
  });


  const menulinksWrappers = document.querySelectorAll(".fixed-menu__second-list-wrapper");

  menulinksWrappers.forEach(elem => {
    const links = elem.querySelectorAll(".fixed-menu__second-list-link");

    links.forEach(item => {
      item.addEventListener("focus", (e) => {
        elem.classList.add("active");
      })

      item.addEventListener("blur", (e) => {
        elem.classList.remove("active");
      })
    })
  });
}
