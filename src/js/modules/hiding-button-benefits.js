export default () => {

  const wrappers = document.querySelectorAll('.benefits-roster__items');

  if(wrappers.length === 0) return;

  wrappers.forEach(item => {
    const itemsBenefits = item.querySelectorAll('.benefits-roster__item');
    const btn = item.closest("section").querySelector('.benefits-roster__btn');

    if(itemsBenefits.length <= 3) {
      btn.style.display = "none";
    }
  })

}

export function hidingButtonBenefitsDigits() {
  const wrappers = document.querySelectorAll('.benefits-digits__items');

  if(wrappers.length === 0) return;

  wrappers.forEach(item => {
    const itemsBenefits = item.querySelectorAll('.benefits-digits__item');
    const btn = item.closest("section").querySelector('.benefits-digits__btn');

    if(itemsBenefits.length <= 6) {
      btn.style.display = "none";
    }
  })
}


export function hidingButtonLogos() {
  const wrappers = document.querySelectorAll('.logos-more__items');

  if(wrappers.length === 0) return;

  wrappers.forEach(item => {
    const itemsBenefits = item.querySelectorAll('.logos-more__item');
    const btn = item.closest("section").querySelector('.logos-more__btn');

    if(itemsBenefits.length <= 6) {
      btn.style.display = "none";
    }
  })
}
