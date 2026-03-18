
new Swiper('.hero-slider', {
  init: true,
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  breakpoints: {
    0: {
      spaceBetween: 70,
    },
    1390: {
      spaceBetween: 152,
    },
  }
});

new Swiper('.products-slider', {
  init: true,
  autoplay: {
    delay: 4000,
  },
  spaceBetween: 20,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.products-swiper-button-next',
    prevEl: '.products-swiper-button-prev',
  },
  pagination: {
    el: '.products-slider-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1390: {
      slidesPerView: 2,
    },
  }
});

new Swiper('.projects-slider', {
  init: true,
  autoplay: {
    delay: 4000,
  },
  spaceBetween: 20,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.projects-swiper-button-next',
    prevEl: '.projects-swiper-button-prev',
  },
  pagination: {
    el: '.projects-slider-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    },
    1390: {
      slidesPerView: 3,
    },
  }
});

const burgerButton = document.querySelector('.burger-button');
const burgerLinks = document.querySelectorAll('.nav-link');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('open');
  burgerButton.previousSibling.previousSibling.classList.toggle('open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1000 && window.innerWidth < 1390) {
    burgerButton.classList.remove('open');
    burgerButton.previousSibling.previousSibling.classList.remove('open');
  }
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.burger-button')) {
    return;
  }
  if (e.target.closest('.header-right')) {
    return;
  }
  burgerButton.classList.remove('open');
  burgerButton.previousSibling.previousSibling.classList.remove('open');
});

burgerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerButton.classList.remove('open');
    burgerButton.previousSibling.previousSibling.classList.remove('open');
  });
})

const modalFormTriggerBtns = document.querySelectorAll('.open-modal-form-btn');
const modalForm = document.querySelector('.modal-form');
const modalFormOverlay = document.querySelector('.modal-form-overlay');
const modalFormContent = document.querySelector('.modal-form-content');
const modalFormCloseBtn = document.querySelector('.modal-form-close-btn');
const modalFormTitle = document.querySelector('.modal-form-title');

modalFormTriggerBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalFormOverlay.classList.add('visible');
    modalForm.classList.add('visible');
    modalFormContent.classList.add('visible');
    document.body.classList.add('stop-scroll');
    modalFormTitle.textContent = 'Обсудить задачу';
  });
})


modalFormCloseBtn.addEventListener('click', () => {
  modalFormOverlay.classList.remove('visible');
  modalForm.classList.remove('visible');
  modalFormContent.classList.remove('visible');
  document.body.classList.remove('stop-scroll');
});


modalFormOverlay.addEventListener('click', (e) => {
  if (e.target.closest('.modal-form-content')) {
    return;
  }
  modalFormOverlay.classList.remove('visible');
  modalForm.classList.remove('visible');
  modalFormContent.classList.remove('visible');
  document.body.classList.remove('stop-scroll');
})


const modalPopup = document.querySelector('.modal-popup');
const modalPopupOverlay = document.querySelector('.modal-popup-overlay');
const modalPopupContent = document.querySelector('.modal-popup-content');
const modalPopupCloseBtn = document.querySelector('.modal-popup-close-btn');


setTimeout(() => {
  modalPopupOverlay.classList.add('visible');
  modalPopup.classList.add('visible');
  modalPopupContent.classList.add('visible');
  document.body.classList.add('stop-scroll');
}, 120000);


modalPopupCloseBtn.addEventListener('click', () => {
  modalPopupOverlay.classList.remove('visible');
  modalPopup.classList.remove('visible');
  modalPopupContent.classList.remove('visible');
  document.body.classList.remove('stop-scroll');
});



modalPopupOverlay.addEventListener('click', (e) => {
  if (e.target.closest('.modal-popup-content')) {
    return;
  }
  modalPopupOverlay.classList.remove('visible');
  modalPopup.classList.remove('visible');
  modalPopupContent.classList.remove('visible');
  document.body.classList.remove('stop-scroll');
})

const modalSmallForm = document.querySelector('.modal-small-form');
const modalSmallFormOverlay = document.querySelector('.modal-small-form-overlay');
const modalSmallFormContent = document.querySelector('.modal-small-form-content');
const modalSmallFormCloseBtn = document.querySelector('.modal-small-form-close-btn');
const modalSmallFormTitle = document.querySelector('.modal-small-form-title');
const modalSmallFormSubtitle = document.querySelector('.modal-small-form-text');
const productsButtons = document.querySelectorAll('.products-button-action');
const projectsButtons = document.querySelectorAll('.projects-button-action');

productsButtons.forEach((e) => {
  e.addEventListener('click', () => {
    modalSmallFormOverlay.classList.add('visible');
    modalSmallForm.classList.add('visible');
    modalSmallFormContent.classList.add('visible');
    document.body.classList.add('stop-scroll');
    modalSmallFormTitle.textContent = 'Получить каталог';
    modalSmallFormSubtitle.textContent = 'Отправим файл с полным ассортиментом';
  });
})


projectsButtons.forEach((e) => {
  e.addEventListener('click', () => {
    modalSmallFormOverlay.classList.add('visible');
    modalSmallForm.classList.add('visible');
    modalSmallFormContent.classList.add('visible');
    document.body.classList.add('stop-scroll');
    modalSmallFormTitle.textContent = 'Получить кейсы';
    modalSmallFormSubtitle.textContent = 'Отправим подборку реализованных проектов с фото и описанием';
  });
})

modalSmallFormOverlay.addEventListener('click', (e) => {
  if (e.target.closest('.modal-small-form-content')) {
    return;
  }
  modalSmallFormOverlay.classList.remove('visible');
  modalSmallForm.classList.remove('visible');
  modalSmallFormContent.classList.remove('visible');
  document.body.classList.remove('stop-scroll');
})

modalSmallFormCloseBtn.addEventListener('click', () => {
  modalSmallFormOverlay.classList.remove('visible');
  modalSmallForm.classList.remove('visible');
  modalSmallFormContent.classList.remove('visible');
  document.body.classList.remove('stop-scroll');
});



const phoneInputs = document.querySelectorAll('.modal-form-input-phone');
phoneInputs.forEach((input) => {
  Inputmask({ mask: '+7 (999) 999-99-99', })
    .mask(input);
});

// элементы форм и попапа
const feedbackForm = document.querySelector('.modal-form-form');
const feedbackFormSubmitBtn = document.querySelector('.modal-form-button-submit');
const modalPopupForm = document.querySelector('.modal-popup-form');
const modalPopupFormSubmitBtn = document.querySelector('.modal-popup-button-submit');
const feedbackSmallForm = document.querySelector('.modal-small-form-form');
const feedbackSmallFormSubmitBtn = document.querySelector('.modal-small-form-button-submit');
