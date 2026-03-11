
new Swiper('.hero-slider', {
  init: true,
  autoplay: {
    delay: 4000,
  },
  spaceBetween: 155,
  slidesPerView: 4,
  slidesPerGroup: 1,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    1390: {
      spaceBetween: 152,
      slidesPerView: 4,
    },
  }
});

new Swiper('.products-slider', {
  init: true,
  autoplay: {
    delay: 4000,
  },
  spaceBetween: 20,
  slidesPerView: 2,
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
  slidesPerView: 3,
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

const modalFormTriggerBtns = document.querySelectorAll('.open-modal-form-btn');
const modalForm = document.querySelector('.modal-form');
const modalFormOverlay = document.querySelector('.modal-form-overlay');
const modalFormContent = document.querySelector('.modal-form-content');
const modalFormCloseBtns = document.querySelectorAll('.modal-close-btn');

modalFormTriggerBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalFormOverlay.classList.add('visible');
    modalForm.classList.add('visible');
    modalFormContent.classList.add('visible');
    document.body.classList.add('stop-scroll');
  });
})

modalFormCloseBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalFormOverlay.classList.remove('visible');
    modalForm.classList.remove('visible');
    modalFormContent.classList.remove('visible');
    document.body.classList.remove('stop-scroll');
  });
})

modalFormOverlay.addEventListener('click', (e) => {
  if (e.target.closest('.modal-form-content')) {
    return;
  }
  modalFormOverlay.classList.remove('visible');
  modalForm.classList.remove('visible');
  modalFormContent.classList.remove('visible');
  document.body.classList.remove('stop-scroll');
})
