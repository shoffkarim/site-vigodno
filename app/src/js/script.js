/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import '../sass/style.sass';

let projects = new Swiper(".projects-slider", {
  slidesPerView: 2.8,
  spaceBetween: 30,
  loop: false
});

let office = new Swiper(".office-slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".office-btn-next",
    prevEl: ".office-btn-prev",
  }
});