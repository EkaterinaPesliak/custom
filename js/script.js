/*select*/

  const select = document.querySelector('.selectCustom');
  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
  });

/*map*/
  ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: [] /* Убираем элементы управления*/
    },
    {
      suppressMapOpenBlock: true, /* Убираем элементы управления*/
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/location.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

/*form*/

const form = document.querySelector(".fifth__form");
const tel = document.querySelector("input[type='tel']");
const inputMask = new Inputmask("+7 (999)-999-99-99");
inputMask.mask(tel);

const validator = new JustValidate(".fifth__form", {
  errorLabelStyle: {
    color: '#FF5C00',
  },
});

validator
  .addField(".input-name", [
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Не менее 3 символов",
    },
    {
      rule: "maxLength",
      value: 10,
      errorMessage: "Не больше 10 символов",
    },
    {
      rule: "required",
      errorMessage: "Введите ваше имя",
    },
  ])
  .addField(".input-mail", [
    {
      rule: "email",
      errorMessage: "Введите ваш e-mail",
    },
    {
      rule: "required",
      errorMessage: "Введите ваш e-mail",
    },
  ])
  .addField(".input-tel", [
    {
      rule: "function",
      validator: function () {
        const phone = tel.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: "Введите ваш телефон",
    },
    {
      rule: "required",
      errorMessage: "Введите ваш телефон",
    },
  ])
  .onSuccess(() => form.submit());


/*var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.fifth__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
      errorMessage: 'Введите имя'
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Введите телефон'
    },
    mail: {
      required: true,
      email: true,
      errorMessage: 'Введите email'
    },
  },
});*/

/*const validation = new window.JustValidate('.fifth__form');*/

/*errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid blue',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'blue',
  },
  focusInvalidField: true,
  lockForm: true,
});*/

/*validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Как вас зовут?'
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя должно содержать хотя бы 3 буквы'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя не может содержать более 30 символов'
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательное для заполнения',
    },
    {
      rule: 'required',
      errorMessage: 'Поле обязательное для заполнения',
    },
    {
      rule: 'email',
      errorMessage: 'Укажите ваш e-mail',
    },
  ])

  .addField('#tel', [
    {
      validator: () => {
        const phone = phoneElement.inputmask.unmaskedvalue();
        const result = Number(phone) && phone.length === 10;
        return result === 0 ? false : result;
      },
      errorMessage: 'Укажите ваш телефон',
    }
  ]);*/



/*(() => {
  tippy('.js-tooltip-btn', {
    theme: 'light',

  });
})();*/

