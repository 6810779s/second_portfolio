const swiper = new Swiper('.swiper-container', {
  effect: 'cube',
  loop : true,
  cubeEffect: {
    slideShadows: true,
    shadowOffset: 40,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    hideOnClick: true,
  },
});