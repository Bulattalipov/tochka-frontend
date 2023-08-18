import $ from 'jquery';
import 'parsleyjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

window.Parsley.addValidator('requiredIfChecked', {
  requirementType: 'string',
  validateString: (value, requirement) => {
    const checkbox = document.querySelector(requirement);

    if (!checkbox) {
      return false;
    }

    if (checkbox.checked && !value.trim()) {
      return false;
    }
    return true;
  },
  messages: {
    en: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Required</span>
      </span>
    </span>`,
    ru: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Обязательное поле</span>
      </span>
    </span>`,
  },
  priority: 33,
});

window.Parsley.addValidator('phone', {
  requirementType: 'string',
  validateString: (value, atr, elem) => {
    elem.element.addEventListener('blur', function () {
      let valueElem = elem.element.value.replace(/\s+/g, ' ').trim();
      elem.element.value = valueElem;

      if (valueElem.trim() === '') return true;
      return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(valueElem);
    });

    if (value.trim() === '') return true;
    return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(value);
  },
  messages: {
    en: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Invalid Phone number</span>
      </span>
    </span>`,
    ru: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Неверный номер моб. телефона</span>
      </span>
    </span>`,
  },
});

window.Parsley.addValidator('oneSpace', {
  requirementType: 'string',
  validateString: (value) => {
    return /^\s?[\S]*[ ][\S]+/.test(value);
  },
  messages: {
    en: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Enter full name</span>
      </span>
    </span>`,
    ru: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Введите ФИО полностью</span>
      </span>
    </span>`,
  },
  priority: 51
});

window.Parsley.addValidator('phone2', {
  requirementType: 'string',
  validateString: (value, atr, elem) => {
    elem.element.addEventListener('blur', function () {
      let valueElem = elem.element.value.replace(/\s+/g, ' ').trim();
      elem.element.value = valueElem;

      if (valueElem.trim() === '') return true;
      return /^\+?[A-Za-zА-Яа-яёЁ0-9\s]+\+?[A-Za-zА-Яа-я0-9\s]*$/.test(valueElem);
    });

    return /^\+?[A-Za-zА-Яа-яёЁ0-9\s]+\+?[A-Za-zА-Яа-я0-9\s]*$/.test(value);
  },
  messages: {
    en: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Incorrect format</span>
      </span>
    </span>`,
    ru: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">некорректный формат</span>
      </span>
    </span>`,
  },
  priority: 50
});

window.Parsley.addValidator('city', {
  requirementType: 'string',
  validateString: (value, atr, elem) => {
    if (value.trim() === '') return true;
    return /^[А-Яа-яёЁ0-9 \-`]+$/.test(value);
  },
  messages: {
    en: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Only Russian letters, spaces, hyphens and numbers</span>
      </span>
    </span>`,
    ru: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Только русские буквы, пробелы, дефисы и цифры.</span>
      </span>
    </span>`,
  },
  priority: 50
});

window.Parsley.addValidator('fio', {
  requirementType: 'string',
  validateString: (value, atr, elem) => {
    elem.element.addEventListener('blur', function () {
      let valueElem = elem.element.value.replace(/\s+/g, ' ').trim();
      elem.element.value = valueElem;

      if (valueElem.trim() === '') return true;
      return /^[A-Za-zА-Яа-яёЁ \-`]+[A-Za-zА-Яа-яёЁ \-']+$/.test(valueElem);
    });

    if (elem.element.value.trim() === '') return true;
    return /^[A-Za-zА-Яа-яёЁ \-`]+[A-Za-zА-Яа-яёЁ \-']+$/.test(elem.element.value);
  },
  messages: {
    en: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Only Russian and Latin letters, space, hyphen and apostrophe</span>
      </span>
    </span>`,
    ru: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Только русские и латинские буквы, пробел, дефис и апостроф</span>
      </span>
    </span>`,
  },
  priority: 50
});


// [A-Za-zА-Яа-я \-`]+
// [A-Za-zА-Яа-я \-`]+[ ][A-Za-zА-Яа-я \-`]+
// \+?[0-9A-Za-z]+

window.Parsley.addValidator('incompleteFio', {
  requirementType: 'string',
  validateString: (value) => {
    if (value.trim() === '') return true;
    return /^[a-яA-ЯёЁ\s]+$/.test(value);
  },
  messages: {
    en: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Invalid value</span>
      </span>
    </span>`,
    ru: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Некорректное значение</span>
      </span>
    </span>`,
  },
});


window.Parsley.addValidator('date', {
  requirementType: 'string',
  validateString: function (value) {
    if (value.trim() === '') return true;

    let arroy = value.split('.');
    [arroy[0], arroy[1]] = [arroy[1], arroy[0]];

    if (Number(arroy[2]) < 1900) {
      return false
    }

    let newArrou = arroy.map(item => {
      return Number(item);
    }).join("/");

    const date1 = dayjs()
    const date2 = dayjs(newArrou)

    if (date1.diff(date2) < 0) {
      return false
    }

    return dayjs(value, 'DD.MM.YYYY', true).isValid();
  },
  messages: {
    en: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Incorrect date of birth</span>
      </span>
    </span>`,
    ru: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Некорректный формат</span>
      </span>
    </span>`,
  },
});

window.Parsley.addValidator('maxFileSize', {
  validateString: function (_value, maxSize, parsleyInstance) {
    if (!window.FormData) {
      return true;
    }

    let files = parsleyInstance.$element[0].files;

    const result = files.length != 1 || files[0].size <= maxSize * 1024 * 1024;

    let text = parsleyInstance.$element[0].closest('.form-block__form-box').querySelector('.button-with-icon__text');

    text.textContent = parsleyInstance.$element[0].files[0].name.slice(0, 16) + "...";

    return result;
  },
  requirementType: 'integer',
  messages: {
    en: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">The file size should not exceed %s MB</span>
      </span>
    </span>`,
    ru: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Размер файла не должен превышать %s МБ</span>
      </span>
    </span>`
  },
  priority: 40
});

window.Parsley.addValidator('lastElement', {
  requirementType: 'string',
  validateString: (value) => {
    return /^\S+\.\S{0,63}$/gm.test(value);
  },
  messages: {
    en: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Incorrect format</span>
      </span>
    </span>`,
    ru: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Некорректный формат</span>
      </span>
    </span>`,
  },
});

window.Parsley.addValidator('fileType', {
  validateString: function (_value, maxSize, parsleyInstance) {
    if (!window.FormData) {
      alert('You are making all developpers in the world cringe. Upgrade your browser!');
      return true;
    }

    const types = parsleyInstance.$element[0].getAttribute("accept").split(', ');

    if (!types.length) {
      return;
    }

    let files = parsleyInstance.$element[0].files;

    let arroyUploadedFileType = files[0].name.split(".");
    let uploadedFileType = "." + arroyUploadedFileType[arroyUploadedFileType.length - 1];

    const filtederType = types.filter(type => {
      let currentType = type.replace(/,/g, "");
      return currentType === uploadedFileType;
    });

    if (!filtederType.length) {
      parsleyInstance.element.closest('.form-block__form-file').querySelector('.button-with-icon__text').textContent = "Прикрепить файл";
    }

    return filtederType.length !== 0;



  },
  requirementType: 'integer',
  messages: {
    en: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Invalid file format</span>
      </span>
    </span>`,
    ru: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Недопустимый формат файла</span>
      </span>
    </span>`
  },
  priority: 49
});

Parsley.addMessages('ru', {
  defaultMessage: 'Некорректное значение.',
  type: {
    email: `
    <span class="error">
      <span class="error__text-wrapper">
        <span class="error__text">Некорректный формат</span>
      </span>
    </span>`,
    url: 'Адрес сайта введен неверно.',
    number: 'Введите число.',
    integer: 'Введите целое число.',
    digits: 'Введите только цифры.',
    alphanum: 'Введите буквенно-цифровое значение.',
  },
  notblank: 'Это поле должно быть заполнено.',
  required: `
  <span class="error">
    <span class="error__text-wrapper">
      <span class="error__text">Обязательно для заполнения</span>
    </span>
  </span>`,
  pattern: `
  <span class="error">

    <span class="error__text-wrapper">
      <span class="error__text">Некорректное значение</span>
    </span>
  </span>`,
  min: `
  <span class="error">
    <span class="error__text-wrapper">
      <span class="error__text">Это значение должно быть не менее чем %s.</span>
    </span>
  </span>`,
  max: `
  <span class="error">
    <span class="error__text-wrapper">
      <span class="error__text">Это значение должно быть не более чем %s.</span>
    </span>
  </span>`,
  range: 'Это значение должно быть от %s до %s.',
  minlength: `
  <span class="error">
    <span class="error__text-wrapper">
      <span class="error__text">Минимальная длина составляет %s символов</span>
    </span>
  </span>`,
  maxlength: `
  <span class="error">
    <span class="error__text-wrapper">
      <span class="error__text">Максимальная длина составляет %s символов</span>
    </span>
  </span>`,
  length: 'Это значение должно содержать от %s до %s символов.',
  mincheck: 'Выберите не менее %s значений.',
  maxcheck: 'Выберите не более %s значений.',
  check: 'Выберите от %s до %s значений.',
  equalto: 'Несовпадающие пароли',
});

export default function validation() {
  const formsToValidate = Array.from(document.querySelectorAll('form[data-need-validation]'));
  const pageLang = document.querySelector("html").dataset.lang;

  Parsley.setLocale(pageLang);

  formsToValidate.forEach((form) => {

    const selects = form.querySelectorAll('select');

    selects.forEach(select => {
      select.addEventListener('change', () => {
        $(select).parsley().validate()
      });
    })

    $(form).parsley({
      focus: 'none',
      errorClass: 'is-error',
      successClass: 'success',
      classHandler: (field) => {
        return field.$element.closest('.js-validation-wrapper');
      },
      trigger: 'change'
    });

    // form.addEventListener("submit", (e) => {
    //   e.preventDefault();
    //   let formData = new FormData(form);
    //   const url = form.getAttribute("action");
    //   const labels = form.querySelectorAll('.js-input-heading');

    //   if ($(form).parsley().isValid()) {
    //     axios.post(url, formData)
    //       .then((response) => {
    //         if (response.data.ID > 0) {
    //           const fileContainer = form.querySelector(".file-upload__text");
    //           form.querySelector(".form__btn").classList.remove("disabled");

    //           if (fileContainer) fileContainer.remove();

    //           window.gis_API.modal.close();

    //           window.gis_API.modal.onOpen("success");

    //           $(form).trigger("reset");
    //           labels.forEach(label => label.classList.remove("is-active"));
    //         }
    //       })
    //       .catch((error) => {
    //         window.gis_API.modal.close();
    //         window.gis_API.modal.onOpen("error");
    //       });
    //   }
    // });
  });
}
