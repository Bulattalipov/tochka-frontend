import {
  createPopper
} from '@popperjs/core';
import tabIndex from './tabIndex';

export default function hideListMore() {

  if (window.matchMedia('(min-width: 768px)').matches) {
    const listWrapper = document.querySelectorAll('.js-intro-filter');

    if (!listWrapper) {
      return;
    }

    listWrapper.forEach(item => {
      const count = item.dataset.count;

      const listItems = Array.from(item.querySelectorAll('.intro-filter__list-item'));

      const newListItem = listItems.filter((item, i) => {
        if (i < count) return item;
      });

      const moreListItem = listItems.filter((item, i) => {
        if (i >= count) return item;
      });

      if (listItems.length <= 12) {
        listItems.forEach((item, i) => {
          item.addEventListener('click', () => {
            if (i === 0) {
              listItems.forEach((elem, j) => {
                if (j === 0) {
                  elem.querySelector("input").checked = true;
                } else {
                  elem.querySelector("input").checked = false;
                }
              })
            } else {
              listItems[0].querySelector("input").checked = false;
            }
          });
        });
        return
      }

      const li = document.createElement("li");
      li.classList.add('intro-filter__list-item');
      li.classList.add('intro-filter__list-item-more');
      li.style.display = "block";
      li.setAttribute("tabIndex", "0");

      li.innerHTML = `<div class="intro-filter__list-item-more-text"><span data-count="+ еще ${moreListItem.length}">+ ещё ${moreListItem.length}</span>
        <svg class="icon icon-one-arrow-down intro-filter__list-item-icon" width="12px" height="7px">
            <use xlink:href="/local/static/build/assets/images/sprites/sprite-mono.svg#one-arrow-down"></use>
        </svg></div>
        <div class="intro-filter__second-list-wrapper">
          <ul class="intro-filter__second-list">
          </ul>
        </div>`;

      item.innerHTML = "";
      item.append(...newListItem, li);

      const toggleMenu = function toggleMenu() {
        li.classList.toggle('active');
      };

      li.querySelector('.intro-filter__list-item-more-text').addEventListener('click', function () {
        li.classList.toggle('active');
      });

      li.querySelector('.intro-filter__list-item-more-text').parentElement.addEventListener('keydown', function (event) {
        if (event.keyCode == 13 || event.keyCode == 32) {
          event.preventDefault();
          li.classList.toggle('active');
        }
      });

      document.addEventListener('click', function (e) {
        let target = e.target;
        let contain = li.contains(target);
        let containActive = li.classList.contains('active');

        if (!contain && containActive) {
          toggleMenu();
        }
      });

      const secondList = document.querySelector(".intro-filter__second-list-wrapper");

      createPopper(li, secondList, {
        placement: 'bottom-start',
      });

      secondList.querySelector(".intro-filter__second-list").append(...moreListItem);

      const buttonParent = document.querySelector(".intro-filter__list-item-more");
      const secondList2 = document.querySelector(".intro-filter__second-list-wrapper");
      const secondListItem = secondList2.querySelectorAll(".intro-filter__list-item");

      var currentIndex = null;

      secondListItem.forEach((item, i) => {
        item.addEventListener('click', function (e) {

          buttonParent.classList.remove('active');
          let text = this.querySelector(".intro-filter__list-item-text").textContent;
          let currentText = buttonParent.querySelector('.intro-filter__list-item-more-text');
          currentText.classList.add('active-input');
          currentText.querySelector('span').innerText = text;

          const secondList2New = document.querySelector(".intro-filter__second-list-wrapper");
          const secondListItemNew = secondList2New.querySelectorAll(".intro-filter__list-item");
          secondListItemNew.forEach((elem, j) => {
            if (elem.querySelector("input").checked) {

              const buttonParent2 = document.querySelector(".intro-filter__list-item-more");
              let currentText = buttonParent2.querySelector('.intro-filter__list-item-more-text');
              currentText.classList.remove('active-input');
              currentText.querySelector('span').innerText = currentText.querySelector('span').dataset.count;

              elem.querySelector("input").checked = false;

              return;
            }

            elem.querySelector("input").checked = false;

            if (item === elem) {
              elem.querySelector("input").checked = true;
            }
          })
        });

        item.querySelector("input").addEventListener("focus", (event) => {
          let parent = item.closest(".intro-filter__second-list");

          if (i > currentIndex) {
            parent.scrollTop += item.clientHeight;
          } else {
            parent.scrollTop -= item.clientHeight;
          }

          currentIndex = i;
        });
      })


      const allList = document.querySelector('.intro-filter__list');
      const allListItems = allList.querySelectorAll('.intro-filter__list-item');
      allListItems.forEach((item, i) => {
        item.addEventListener('click', () => {
          if (i === 0) {
            allListItems.forEach((elem, j) => {
              if (j === 0) {
                elem.querySelector("input").checked = true;
              } else {
                elem.querySelector("input").checked = false;
              }
            })

            const buttonParent2 = document.querySelector(".intro-filter__list-item-more");
            let currentText = buttonParent2.querySelector('.intro-filter__list-item-more-text');
            currentText.classList.remove('active-input');
            currentText.querySelector('span').innerText = currentText.querySelector('span').dataset.count;

          } else {
            allListItems[0].querySelector("input").checked = false;
          }
        });
      });


      // newListItem.forEach(item => {
      //   item.addEventListener('click', function() {
      //     let currentText = buttonParent.querySelector('.intro-filter__list-item-more-text');
      //     currentText.classList.remove('active-input')
      //     currentText.querySelector('span').innerText = currentText.querySelector('span').dataset.count;
      //   })
      // })
    });
  } else {

    const listMenu = document.querySelectorAll('.fixed-menu-inputs__list');

    if (!listMenu) {
      return;
    }

    listMenu.forEach(listItem => {
      const items = listItem.querySelectorAll('.fixed-menu-inputs__item');

      let hideItemsCount = 0;

      items.forEach((item, i) => {
        if (i > 7) {
          hideItemsCount = hideItemsCount + 1;
          item.style.display = "none";
        }
      });

      if (items.length > 8) {
        const li = document.createElement("li");
        li.classList.add('fixed-menu-inputs__item');
        li.classList.add('fixed-menu-inputs__item--more');

        li.innerHTML = `
          <label class="fixed-menu-inputs__item-label">
            <span class="fixed-menu-inputs__item-link" href="#">ещё ${hideItemsCount}+</span>
          </label>
        `;

        listItem.append(li);

        li.addEventListener('click', function () {
          items.forEach((item) => {
            item.style.display = "block";
          });

          li.style.display = "none";
        });
      }
    })


  }

}
